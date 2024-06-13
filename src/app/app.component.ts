import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { InstallButtonComponent } from './components/install-button/install-button.component';
import { StratagemInputComponent } from './components/views/stratagem-input/stratagem-input.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, InstallButtonComponent, StratagemInputComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	title = 'Helldivers 2 Buttons Soundboard App';

	constructor(private swUpdate: SwUpdate) {}

	ngOnInit() {
		if (this.swUpdate.isEnabled) {
			// handle if the service worker detects the app has reached an unrecoverable state that requires a reload
			this.swUpdate.unrecoverable.subscribe((event) => {
				window.location.reload();
			});
			// manually handle live updates by presenting the option to the user
			this.swUpdate.versionUpdates.subscribe((event) => {
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
