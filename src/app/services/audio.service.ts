import { Injectable } from '@angular/core';
import { audioFilesMusic, audioFilesOther, audioFilesSounds, audioFilesSoundtrack, audioFilesStings, audioFilesStratagemHero, audioFilesVoices } from '../models/audio-list';
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

	public stopFadeTime = 0.5;

	private readyFilesStratagem = 0;
	private readyFilesSoundboard = 0;

	public async buildAudioElementsForStratagems(): Promise<boolean> {
		this.readyFilesStratagem = 0;
		this.audioLoadedPercent$.next(0);

		const totalFileCount = audioFilesSounds.length + audioFilesVoices.length;

		audioFilesSounds.forEach((audioFile) => {
			this.loadAudio(audioFile, 'sounds', 'stratagem');
		});
		audioFilesVoices.forEach((audioFile) => {
			this.loadAudio(audioFile, 'voices', 'stratagem');
		});

		while (this.readyFilesStratagem < totalFileCount) {
			this.audioLoadedPercent$.next(Math.round((this.readyFilesStratagem / totalFileCount) * 100));
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		this.audioLoadedPercent$.next(100);
		return true;
	}

	public async buildAudioElementsForSoundboard(): Promise<boolean> {
		this.readyFilesSoundboard = 0;
		this.audioLoadedPercent$.next(0);

		const totalFileCount = audioFilesStings.length + audioFilesMusic.length + audioFilesOther.length + audioFilesStratagemHero.length + audioFilesSoundtrack.length;

		audioFilesStings.forEach((audioFile) => {
			this.loadAudio(audioFile, 'stings', 'soundboard');
		});
		audioFilesMusic.forEach((audioFile) => {
			this.loadAudio(audioFile, 'music', 'soundboard');
		});
		audioFilesOther.forEach((audioFile) => {
			this.loadAudio(audioFile, 'other', 'soundboard');
		});
		audioFilesStratagemHero.forEach((audioFile) => {
			this.loadAudio(audioFile, 'stratagem-hero', 'soundboard');
		});
		audioFilesSoundtrack.forEach((audioFile) => {
			this.loadAudio(audioFile, 'soundtrack', 'soundboard');
		});

		while (this.readyFilesSoundboard < totalFileCount) {
			this.audioLoadedPercent$.next(Math.round((this.readyFilesSoundboard / totalFileCount) * 100));
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		this.audioLoadedPercent$.next(100);
		return true;
	}

	private loadAudio(audioFile: string, folder: string, readyCount: 'stratagem' | 'soundboard') {
		const audio = document.createElement('audio');
		audio.id = audioFile;
		audio.src = '/audio/' + folder + '/' + audioFile + '.ogg';
		audio.addEventListener('canplaythrough', () => {
			if (readyCount === 'stratagem') {
				this.readyFilesStratagem++;
			}
			if (readyCount === 'soundboard') {
				this.readyFilesSoundboard++;
			}
		});
		if (audioFile.includes('loop') || audioFile.includes('Loop')) {
			audio.addEventListener(
				'timeupdate',
				function () {
					var buffer = 0.3;
					if (this.currentTime > this.duration - buffer) {
						this.currentTime = 0;
						this.play();
					}
				},
				false,
			);
		}
		audio.load();
		document.body.appendChild(audio);
	}

	public stopAllSounds() {
		this.activelyStoppingAudio = true;
		audioFilesSounds.forEach((soundFile) => {
			this.stopOne(soundFile);
		});
		audioFilesVoices.forEach((soundFile) => {
			this.stopOne(soundFile);
		});
		audioFilesStings.forEach((soundFile) => {
			this.stopOne(soundFile);
		});
		audioFilesMusic.forEach((soundFile) => {
			this.fadeOut(soundFile, 0.5);
		});
		audioFilesStratagemHero.forEach((soundFile) => {
			this.stopOne(soundFile);
		});
		audioFilesSoundtrack.forEach((soundFile) => {
			this.stopOne(soundFile);
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
			// reset before play - better performance than having everything reset at others times
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
		if (audio && audio.currentTime != 0 && !audio.paused) {
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
			audio.pause();
		}
	}

	public stopOne(elementId: string) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio && !audio.paused) {
			audio.pause();
		}
	}
}
