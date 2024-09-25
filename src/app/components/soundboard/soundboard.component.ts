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
		{ file: 'PA_Jingle', name: 'PA Jingle' },
		{ file: 'objective-complete-stinger-small', name: 'Objective Complete 1' },
		{ file: 'objective-complete-stinger-medium', name: 'Objective Complete 2' },
		{ file: 'objective-complete-stinger-large', name: 'Objective Complete 3' },
	];

	public audioMusic: { file: string; name: string }[] = [
		{ file: 'prep-landing-zone-full', name: 'Prep - Landing Zone - Full (3:15)' },
		{ file: 'prep-landing-zone-loop', name: 'Prep - Landing Zone - Loop' },
		{ file: 'prep-equipment-full', name: 'Prep - Equipment - Full (3:15)' },
		{ file: 'prep-equipment-loop', name: 'Prep - Equipment - Loop' },
		{ file: 'planetfall', name: 'Planet Fall' },
		{ file: 'ship-hellpod-launch-initiated-full', name: 'Planet Fall - With SFX and Voice' },
		{ file: 'full-launch-sequence-with-voice-and-sound', name: 'Planet Fall - Full Audio Sequence (1:01)' },
		{ file: 'extraction-just-combat', name: 'Extraction - Combat - Full (6:40)' },
		{ file: 'extraction-combat-loop', name: 'Extraction - Combat - Loop' },
		{ file: 'extraction-just-passive', name: 'Extraction - Passive - Full (6:43)' },
		{ file: 'extraction-passive-loop', name: 'Extraction - Passive - Loop' },
		{ file: 'extraction-shuttle-close-loop', name: 'Extraction - Shuttle Close Loop' },
		{ file: 'extraction-successful', name: 'Extraction - Successful' },
		{ file: 'automaton-combat', name: 'Automaton Combat (13:28)' },
	];

	public audioTerminidMusic: { file: string; name: string }[] = [
		{ file: 'terminid-combat-1', name: 'Part 1' },
		{ file: 'terminid-combat-2', name: 'Part 2' },
		{ file: 'terminid-combat-3', name: 'Part 3' },
		{ file: 'terminid-combat-4', name: 'Part 4' },
		{ file: 'terminid-combat-5', name: 'Part 5' },
		{ file: 'terminid-combat-6', name: 'Part 6' },
		{ file: 'terminid-combat-7', name: 'Part 7' },
	];

	public audioOther: { file: string; name: string }[] = [
		{ file: 'Intro', name: 'Intro Video (1:40)' },
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
		{ file: 'Get_ready', name: 'Get Ready' },
		{ file: 'Loop', name: 'Loop' },
		{ file: 'Round_complete_1', name: 'Round complete 1' },
		{ file: 'Round_complete_2', name: 'Round complete 2' },
		{ file: 'Round_complete_3', name: 'Round complete 3' },
		{ file: 'Round_complete_4', name: 'Round complete 4' },
		{ file: 'Round_failed', name: 'Round Failed' },
	];

	public audioSoundtrack: { file: string; name: string }[] = [
		{ file: '1_Ode_to_Liberty', name: '1. Ode to Liberty (2:17)' },
		{ file: '2_Welcome_to_the_Fight', name: '2. Welcome to the Fight (2:36)' },
		{ file: '3_The_Super_Destroyer', name: '3. The Super Destroyer (3:39)' },
		{ file: '4_Hellpods_Primed', name: '4. Hellpods Primed (3:32)' },
		{ file: '5_A_Cup_Of_Liber-Tea', name: '5. A Cup Of Liber-Tea (3:37)' },
		{ file: '6_The_Terminid_Horde', name: '6. The Terminid Horde (5:26)' },
		{ file: '7_The_Right_Side_of_History', name: '7. The Right Side of History (1:39)' },
		{ file: '8_Mission_Review', name: '8. Mission Review (2:30)' },
		{ file: '9_The_Automaton_Legion', name: '9. The Automaton Legion (7:03)' },
		{ file: '10_No_Diver_Left_Behind', name: '10. No Diver Left Behind (2:59)' },
		{ file: '11_March_of_the_Helldivers', name: '11. March of the Helldivers (2:19)' },
		{ file: '12_Super_Earth_National_Anthem', name: '12. Super Earth National Anthem (2:23)' },
	];

	constructor(private audioService: AudioService) {}

	public toggleIsOpen() {
		this.isOpen = !this.isOpen;
		this.audioService.stopAllSounds();
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

	public playSound(file: string, skipStop: boolean = false) {
		
		var audio = document.getElementById(file) as HTMLAudioElement;

		if (!audio.paused) {
			audio.currentTime = 0;
		} else {
			var button = document.getElementById(file + '-button') as HTMLButtonElement;
			var terminidPart = this.audioTerminidMusic.findIndex((x) => x.file === file);

			if (!skipStop) {
				this.audioService.stopAllSounds();
			}

			setTimeout(() => {
				this.audioService.playOne(file);
				button.classList.add('active');
			});

			if (terminidPart > -1 && terminidPart < this.audioTerminidMusic.length - 1) {
				audio.addEventListener(
					'timeupdate',
					() => {
						var buffer = 0.6;
						if (audio.currentTime > audio.duration - buffer && (document.getElementById(this.audioTerminidMusic[terminidPart + 1].file) as HTMLAudioElement).paused) {
							this.playSound(this.audioTerminidMusic[terminidPart + 1].file, true);
						}
					},
					false,
				);
			}

			audio.onpause = () => {
				button.classList.remove('active');
				button.blur();
			};
		}
	}
}
