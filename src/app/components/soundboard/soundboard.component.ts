import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-soundboard',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './soundboard.component.html',
	styleUrl: './soundboard.component.scss',
})
export class SoundboardComponent {
	public isOpen: boolean = false;
	public audioLoaded: boolean = false;
	public audioPercentLoaded?: Observable<number>;

	public audioStings: { file: string; name: string }[] = [
		{ file: 'the-helldiver-wakes', name: 'The Helldiver Wakes' },
		{ file: 'objective-complete-stinger-small', name: 'Objective Complete 1' },
		{ file: 'objective-complete-stinger-medium', name: 'Objective Complete 2' },
		{ file: 'objective-complete-stinger-large', name: 'Objective Complete 3' },
	];

	public audioMusic: { file: string; name: string }[] = [
		{ file: 'superearth-anthem', name: 'Super Earth Anthem' },
		{ file: 'prep-landing-zone-full', name: 'Prep - Landing Zone - Full' },
		{ file: 'prep-landing-zone-loop', name: 'Prep - Landing Zone - Loop' },
		{ file: 'prep-equipment-full', name: 'Prep - Equipment - Full' },
		{ file: 'prep-equipment-loop', name: 'Prep - Equipment - Loop' },
		{ file: 'planetfall', name: 'Planet Fall' },
		{ file: 'ship-hellpod-launch-initiated-full', name: 'Planet Fall - With SFX and Voice' },
		{ file: 'full-launch-sequence-with-voice-and-sound', name: 'Planet Fall - Full Audio Sequence' },
		{ file: 'extraction-just-combat', name: 'Extraction - Combat - Full' },
		{ file: 'extraction-combat-loop', name: 'Extraction - Combat - Loop' },
		{ file: 'extraction-just-passive', name: 'Extraction - Passive - Full' },
		{ file: 'extraction-passive-loop', name: 'Extraction - Passive - Loop' },
		{ file: 'extraction-shuttle-close-loop', name: 'Extraction - Shuttle Close Loop' },
		{ file: 'extraction-successful', name: 'Extraction - Successful' },
		{ file: 'terminid-combat', name: 'Terminid Combat' },
		{ file: 'automaton-combat', name: 'Automaton Combat' },
	];
	public audioOther: { file: string; name: string }[] = [
		{ file: 'Intro', name: 'Intro Video' },
		{ file: 'PA_Jingle', name: 'PA Jingle' },
		{ file: 'advert-general-brash', name: 'Advert - General Brash' },
		{ file: 'advert-managed-democracy', name: 'Advert - Managed Democracy' },
		{ file: 'automaton-march-loop', name: 'Automaton March - Loop' },
		{ file: 'ship-mission-coords-locked', name: 'Mission Co-ordinates Locked' },
		{ file: 'ship-hellpods-primed', name: 'Hellpods Primed' },
		{ file: 'ship-hellpod-launch-initiated', name: 'Hellpod Launch Initiated' },
		{ file: 'ship-enemy-artillery-1', name: 'Enemy Artillery 1' },
		{ file: 'ship-enemy-artillery-2', name: 'Enemy Artillery 2' },
		{ file: 'ship-enemy-artillery-3', name: 'Enemy Artillery 3' },
	];

	public audioStratagemHero: { file: string; name: string }[] = [
		{ file: 'Loop', name: 'Loop' },
		{ file: 'Round_complete_1', name: 'Round complete 1' },
		{ file: 'Round_complete_2', name: 'Round complete 2' },
		{ file: 'Round_complete_3', name: 'Round complete 3' },
		{ file: 'Round_complete_4', name: 'Round complete 4' },
		{ file: 'Round_failed', name: 'Round Failed' },
	];

	constructor(private audioService: AudioService) {}

	public toggleIsOpen() {
		this.isOpen = !this.isOpen;
		if (this.isOpen && !this.audioLoaded) {
			this.audioPercentLoaded = this.audioService.audioLoadedPercent;
			this.audioService.buildAudioElementsForSoundboard().then(() => {
				this.audioLoaded = true;
			});
		}
	}

	public stopAllSounds() {
		this.audioService.stopAllSounds();
	}

	public playSound(file: string) {
		this.audioService.stopAllSounds();
		var button = document.getElementById(file + '-button') as HTMLButtonElement;
		var audio = document.getElementById(file) as HTMLAudioElement;
		setTimeout(() => {
			this.audioService.playOne(file);
			button.classList.add('active');
		});

		audio.onended = () => {
			button.classList.remove('active');
			button.blur();
		};

		audio.onpause = () => {
			button.classList.remove('active');
			button.blur();
		};
	}
}
