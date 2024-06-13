import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	title = 'hd2-buttons';
	constructor(private swUpdate: SwUpdate) {}

	ngOnInit() {
		if (this.swUpdate.isEnabled) {
			// handle if the service worker detects the app has reached an unrecoverable state that requires a reload
			this.swUpdate.unrecoverable.subscribe((event) => {
				console.log(event);
				window.location.reload();
			});
			// manually handle live updates by presenting the option to the user
			this.swUpdate.versionUpdates.subscribe((event) => {
				console.log('sw event', event);
				if(event.type == "VERSION_READY") {
					if(confirm("New version available. Load New Version?")) {
						window.location.reload();
					}
				}
			});

			/* manual check optional, otherwise it will only check on full app refresh/reload */
			setInterval(
				() => {
					this.swUpdate.checkForUpdate();
				},
				1000 * 10,
			);
		}
	}
}
