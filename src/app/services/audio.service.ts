import { Injectable } from '@angular/core';
import { audioFilesMusic, audioFilesOther, audioFilesSounds, audioFilesStings, audioFilesVoices } from '../models/audio-list';
import { stratagemCode } from '../models/stratagem-codes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AudioService {
	private lastPlayedStratagemInputFail = 2;
	private activelyStoppingAudio: boolean = false;
	private audioLoadedPercent$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	public audioLoadedPercent = this.audioLoadedPercent$.asObservable();

	public async buildAudioElements(): Promise<boolean> {
		let readyFiles = 0;
		audioFilesSounds.forEach((audioFile) => {
			const audio = document.createElement('audio');
			audio.id = audioFile;
			audio.src = '/audio/sounds/' + audioFile + '.ogg';
			audio.addEventListener('canplaythrough', () => {
				readyFiles++;
			});
			audio.load();
			document.body.appendChild(audio);
		});
		audioFilesVoices.forEach((audioFile) => {
			const audio = document.createElement('audio');
			audio.id = audioFile;
			audio.src = '/audio/voices/' + audioFile + '.ogg';
			audio.addEventListener('canplaythrough', () => {
				readyFiles++;
			});
			audio.load();
			document.body.appendChild(audio);
		});
		audioFilesStings.forEach((audioFile) => {
			const audio = document.createElement('audio');
			audio.id = audioFile;
			audio.src = '/audio/stings/' + audioFile + '.ogg';
			audio.addEventListener('canplaythrough', () => {
				readyFiles++;
			});
			audio.load();
			document.body.appendChild(audio);
		});
		audioFilesMusic.forEach((audioFile) => {
			const audio = document.createElement('audio');
			audio.id = audioFile;
			audio.src = '/audio/music/' + audioFile + '.ogg';
			audio.addEventListener('canplaythrough', () => {
				readyFiles++;
			});
			audio.load();
			document.body.appendChild(audio);
		});
		audioFilesOther.forEach((audioFile) => {
			const audio = document.createElement('audio');
			audio.id = audioFile;
			audio.src = '/audio/other/' + audioFile + '.ogg';
			audio.addEventListener('canplaythrough', () => {
				readyFiles++;
			});
			audio.load();
			document.body.appendChild(audio);
		});
		while (readyFiles < audioFilesSounds.length + audioFilesVoices.length + audioFilesStings.length + audioFilesMusic.length + audioFilesOther.length) {
			this.audioLoadedPercent$.next(
				Math.round((readyFiles / (audioFilesSounds.length + audioFilesVoices.length + audioFilesStings.length + audioFilesMusic.length + audioFilesOther.length)) * 100),
			);
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		this.audioLoadedPercent$.next(100);
		return true;
	}

	public stopAllSounds() {
		this.activelyStoppingAudio = true;
		audioFilesSounds.forEach((soundFile) => {
			this.fadeOut(soundFile, 0.5);
		});
		audioFilesVoices.forEach((voiceFile) => {
			this.fadeOut(voiceFile, 0.5);
		});
		audioFilesStings.forEach((voiceFile) => {
			this.fadeOut(voiceFile, 0.5);
		});
		audioFilesMusic.forEach((voiceFile) => {
			this.fadeOut(voiceFile, 0.5);
		});
		audioFilesOther.forEach((voiceFile) => {
			this.fadeOut(voiceFile, 0.5);
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

	public playStratagemInputDeploy(stratagem: stratagemCode) {
		this.activelyStoppingAudio = false;
		this.fadeOut('stratagem-input-ready-long', 1.5);
		setTimeout(() => {
			if (!this.activelyStoppingAudio) {
				this.playOneRandom(stratagem.voice);
			}
		}, 1000 * 1);
		let deployAudioLength = 0;
		let additionalDeployAudioLength = 0;
		if (stratagem.deployType != 'skip') {
			deployAudioLength = (document.getElementById('stratagem-input-deploy') as HTMLAudioElement).duration;
			if (!this.activelyStoppingAudio) {
				this.playOne('stratagem-input-deploy');
			}
			switch (stratagem.deployType) {
				case 'beam-only':
					additionalDeployAudioLength = 0.75;
					break;
				case 'drop-pod-nolid':
					additionalDeployAudioLength = (document.getElementById('stratagem-deploy-droppod-nolid') as HTMLAudioElement).duration - 0.25;
					setTimeout(
						() => {
							if (!this.activelyStoppingAudio) {
								this.playOne('stratagem-deploy-droppod-nolid');
							}
						},
						1000 * (deployAudioLength - 2),
					);
					break;
				case 'drop-pod':
					additionalDeployAudioLength = (document.getElementById('stratagem-deploy-droppod') as HTMLAudioElement).duration - 2.5;
					setTimeout(
						() => {
							if (!this.activelyStoppingAudio) {
								this.playOne('stratagem-deploy-droppod');
							}
						},
						1000 * (deployAudioLength - 2),
					);
					break;
				case 'pelican':
					additionalDeployAudioLength = (document.getElementById('stratagem-deploy-pelican') as HTMLAudioElement).duration - 3.25;
					setTimeout(
						() => {
							if (!this.activelyStoppingAudio) {
								this.playOne('stratagem-deploy-pelican');
							}
						},
						1000 * (deployAudioLength - 2),
					);
					break;
			}
		}

		setTimeout(
			() => {
				if (!this.activelyStoppingAudio) {
					this.playOneRandom(stratagem.sound);
				}
				if (stratagem.postSound.length > 0) {
					setTimeout(() => {
						if (!this.activelyStoppingAudio) {
							this.playOneRandom(stratagem.postSound);
						}
					}, 1000 * 5); // this is a hardcode for eagle hits, nothing else uses this currently
				}
			},
			1000 * (deployAudioLength - 2 + additionalDeployAudioLength),
		);
	}

	public playOne(elementId: string) {
		this.activelyStoppingAudio = false;
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
			audio.volume = 1;
			audio.play();
		}
	}

	public playOneRandom(elementIds: string[]) {
		if (elementIds.length > 0) {
			this.playOne(elementIds[Math.floor(Math.random() * elementIds.length)]);
		}
	}

	private fadeOut(elementId: string, timeInSeconds: number) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio && audio.currentTime != 0) {
			const targetVolume = 0;
			const tick = 50; // milliseconds
			const volumeDecrease = audio.volume / ((timeInSeconds * 1000) / tick);

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

	public stopOne(elementId: string) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			audio.pause();
			// reset everything
			audio.currentTime = 0;
			audio.volume = 1;
		}
	}
}
