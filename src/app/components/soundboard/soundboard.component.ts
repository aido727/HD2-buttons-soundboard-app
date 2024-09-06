import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';

@Component({
	selector: 'app-soundboard',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './soundboard.component.html',
	styleUrl: './soundboard.component.scss',
})
export class SoundboardComponent {
	public isOpen: boolean = false;

	public audioStings: { file: string; name: string }[] = [
		{ file: 'the-helldiver-wakes', name: 'The Helldiver Wakes' },
		{ file: 'objective-complete-stinger-small', name: 'Objective Complete 1' },
		{ file: 'objective-complete-stinger-medium', name: 'Objective Complete 2' },
		{ file: 'objective-complete-stinger-large', name: 'Objective Complete 3' },
	];

	public audioMusic: { file: string; name: string }[] = [];
	public audioOther: { file: string; name: string }[] = [
		{ file: 'PA_Jingle', name: 'PA Jingle' },
		{ file: 'ship-enemy-artillery-1', name: 'Enemy Artillery 1' },
		{ file: 'ship-enemy-artillery-2', name: 'Enemy Artillery 2' },
		{ file: 'ship-enemy-artillery-3', name: 'Enemy Artillery 3' },
	];

	constructor(private audioService: AudioService) {}

	public stopAllSounds() {
		this.audioService.stopAllSounds();
	}

	public playSound(file: string) {
		this.audioService.stopAllSounds();
		var button = document.getElementById(file + '-button') as HTMLButtonElement;
		var audio = document.getElementById(file) as HTMLAudioElement;
		button.classList.add('active');
		setTimeout(() => {
			this.audioService.playOne(file);
		});

		audio.onended = () => {
			button.classList.remove('active');
		};

		audio.onpause = () => {
			button.classList.remove('active');
		};
	}
}
