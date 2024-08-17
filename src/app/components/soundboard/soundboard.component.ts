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

	public audioStings: { file: string; name: string }[] = [];

	public audioMusic: { file: string; name: string }[] = [];
	public audioOther: { file: string; name: string }[] = [{ file: 'PA_Jingle', name: 'PA Jingle' }];

	constructor(private audioService: AudioService) {}

	public stopAllSounds() {
		this.audioService.stopAllSounds();
	}

	public playSound(file: string) {
		this.audioService.playOne(file);
	}
}
