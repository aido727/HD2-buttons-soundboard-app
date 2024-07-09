import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AudioService {
	// private stratagemInputBeepsInUse: number[] = [];
	// public stratagemInputBeepCopies = 6;

	private lastPlayedStratagemInputFail = 2;

	constructor() {}

	public playStratagemInputBeep(pitchNum: number = 1) {
		// this.playOneFromMany('stratagem.input.beep.', this.stratagemInputBeepsInUse, this.stratagemInputBeepCopies);
		this.playOne('stratagem.input.beep.' + pitchNum);
	}

	public playStratagemInputFail() {
		if(this.lastPlayedStratagemInputFail != 1)
		{
			this.lastPlayedStratagemInputFail = 1;
			this.playOne('stratagem.input.fail.1');
		}
		else
		{
			this.lastPlayedStratagemInputFail = 2;
			this.playOne('stratagem.input.fail.2');
		}
		this.stopOne('stratagem.input.ready');
		// this.stopOne('stratagem.input.loop');
	}

	public playStratagemInputReady() {
		// this.playOneThenNext('stratagem.input.ready', 'stratagem.input.loop');
		this.playOne('stratagem.input.ready');
	}

	public playStratagemInputDeploy() {
		this.playOne('stratagem.input.deploy');
		this.stopOne('stratagem.input.ready');
		// this.stopOne('stratagem.input.loop');
	}

	private playOne(elementId: string) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			audio.currentTime = 0;
			audio.play();
		}
	}

	// leaves a gap, as does looping audio at all...
	// private playOneThenNext(elementId: string, nextElementId: string) {
	// 	const audio = document.getElementById(elementId) as HTMLAudioElement;
	// 	if (audio) {
	// 		audio.onended = () => {
	// 			this.playOne(nextElementId);
	// 		};
			
	// 		audio.currentTime = 0;
	// 		audio.play();
	// 	}
	// }

	private stopOne(elementId: string) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
	}

	// private playOneFromMany(elementId: string, exclusions: number[], number: number) {
	// 	const random = this.randomNumberWithExclusions(number, exclusions);
	// 	const audio = document.getElementById(elementId + random) as HTMLAudioElement;
	// 	if (audio) {
	// 		exclusions.push(random);
	// 		audio.currentTime = 0;
	// 		audio.play();
	// 		audio.onended = () => {
	// 			let removeIndex = exclusions.findIndex((x) => x == random);
	// 			if (removeIndex > -1) {
	// 				while (removeIndex > -1) {
	// 					exclusions.splice(removeIndex, 1);
	// 					removeIndex = exclusions.findIndex((x) => x == random);
	// 				}
	// 			}
	// 		};
	// 	}
	// }

	// private randomNumberWithExclusions(max: number, exclusions: number[]): number {
	// 	if (exclusions.length >= max) {
	// 		return -1;
	// 	}

	// 	let random = Math.floor(Math.random() * max);
	// 	while (exclusions.includes(random)) {
	// 		random = Math.floor(Math.random() * max);
	// 	}
	// 	return random;
	// }
}
