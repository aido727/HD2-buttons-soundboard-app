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
	title = 'Helldivers 2 Buttons Soundboard App';
	installPrompt: Event | undefined;

	constructor(private swUpdate: SwUpdate) {
		window.addEventListener("beforeinstallprompt", (event) => {
			console.log("install prompt event");
			event.preventDefault();
			this.installPrompt = event;
		});

		window.addEventListener("appinstalled", () => {
			this.installPrompt = undefined;
		});
	}

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

	async install() {
		if(this.installPrompt != undefined)
		{
			const result = await (this.installPrompt as any).prompt();
			console.log(`Install prompt was: ${result.outcome}`);
			this.installPrompt = undefined;
		}
	}
}
