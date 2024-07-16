import { Injectable } from '@angular/core';
import { audioFiles } from '../models/audio-list';

@Injectable({
	providedIn: 'root',
})
export class AudioService {
	private lastPlayedStratagemInputFail = 2;

	constructor() {
		this.buildAudioElements();
	}

	private buildAudioElements() {
		audioFiles.forEach((audioFile) => {
			const audio = document.createElement('audio');
			audio.id = audioFile;
			audio.src = '/audio/sounds/' + audioFile + '.ogg';
			audio.load();
			document.body.appendChild(audio);
		});
	}

	public playStratagemInputBeep(pitchNum: number = 1) {
		this.playOne('stratagem-input-beep-' + pitchNum);
	}

	public playStratagemInputFail() {
		if (this.lastPlayedStratagemInputFail != 1) {
			this.lastPlayedStratagemInputFail = 1;
			this.playOne('stratagem-input-fail-1');
		} else {
			this.lastPlayedStratagemInputFail = 2;
			this.playOne('stratagem-input-fail-2');
		}
		this.stopOne('stratagem-input-ready-long');
	}

	public playStratagemInputReady() {
		this.playOne('stratagem-input-ready-long');
	}

	public playStratagemInputDeploy(delayInSeconds: number = 0) {
		this.fadeOut('stratagem-input-ready-long', delayInSeconds);
		setTimeout(() => {
			this.playOne('stratagem-input-deploy');
		}, 1000 * delayInSeconds);
	}

	private playOne(elementId: string) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			audio.currentTime = 0;
			audio.play();
		}
	}

	private fadeOut(elementId: string, timeInSeconds: number) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			const targetVolume = 0;
			const tick = 50; // milliseconds
			const volumeDecrease = timeInSeconds / tick;

			this.decreaseVolume(targetVolume, audio, volumeDecrease, tick);
		}
	}

	private decreaseVolume(targetVolume: number, audio: HTMLAudioElement, volumeDecrease: number, tick: number) {
		var vol = Math.max(targetVolume, audio.volume - volumeDecrease);
		audio.volume = vol;

		if (audio.volume > targetVolume) {
			setTimeout(() => {
				this.decreaseVolume(targetVolume, audio, volumeDecrease, tick);
			}, tick);
		} else {
			this.stopOne(audio.id);
		}
	}

	private stopOne(elementId: string) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			audio.pause();
			// reset everything
			audio.currentTime = 0;
			audio.volume = 1;
		}
	}
}
