import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { InstallButtonComponent } from './components/install-button/install-button.component';
import { StratagemInputComponent } from './components/stratagem-input/stratagem-input.component';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { AudioService } from './services/audio.service';
import { SoundboardComponent } from './components/soundboard/soundboard.component';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, InstallButtonComponent, StratagemInputComponent, SettingsComponent, SoundboardComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	private autoUpdateMinutes = 30;
	public updating: boolean = false;
	public audioLoaded: boolean = false;
	public audioPercentLoaded?: Observable<number>;

	constructor(
		private swUpdate: SwUpdate,
		private audioService: AudioService,
	) {}

	ngOnInit() {
		this.audioPercentLoaded = this.audioService.audioLoadedPercent;
		if (this.swUpdate.isEnabled) {
			// handle if the service worker detects the app has reached an unrecoverable state that requires a reload
			this.swUpdate.unrecoverable.subscribe(() => {
				window.location.reload();
			});
			// manually handle live updates by presenting the option to the user
			this.swUpdate.versionUpdates.subscribe((event) => {
				if (event.type == 'VERSION_DETECTED') {
					this.updating = true;
				}
				if (event.type == 'VERSION_READY') {
					window.location.reload();
				}
			});

			this.swUpdate.checkForUpdate();
			/* manual check optional, otherwise it will only check on full app refresh/reload */
			setInterval(
				() => {
					this.swUpdate.checkForUpdate();
				},
				1000 * 60 * this.autoUpdateMinutes,
			);
		}
		this.audioService.buildAudioElements().then((result) => {
			this.audioLoaded = result;
		});
	}
}
