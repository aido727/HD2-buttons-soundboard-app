import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AudioService {
	private stratagemInputBeepsInUse: number[] = [];
	public stratagemInputBeepCopies = 6;

	constructor() {}

	public playStratagemInputBeep() {
		this.playOneFromMany('stratagem.input.beep.', this.stratagemInputBeepsInUse, this.stratagemInputBeepCopies);
	}

	//#region helpers
	private playOne(elementId: string) {
		const audio = document.getElementById(elementId) as HTMLAudioElement;
		if (audio) {
			audio.play();
		}
	}

	private playOneFromMany(elementId: string, exclusions: number[], number: number) {
		const random = this.randomNumberWithExclusions(number, exclusions);
		const audio = document.getElementById(elementId + random) as HTMLAudioElement;
		if (audio) {
			exclusions.push(random);
			audio.play();
			audio.onended = () => {
				let removeIndex = exclusions.findIndex((x) => x == random);
				if (removeIndex > -1) {
					while (removeIndex > -1) {
						exclusions.splice(removeIndex, 1);
						removeIndex = exclusions.findIndex((x) => x == random);
					}
				}
			};
		}
	}

	private randomNumberWithExclusions(max: number, exclusions: number[]): number {
		if (exclusions.length >= max) {
			return -1;
		}

		let random = Math.floor(Math.random() * max);
		while (exclusions.includes(random)) {
			random = Math.floor(Math.random() * max);
		}
		return random;
	}
	//#endregion helpers
}
