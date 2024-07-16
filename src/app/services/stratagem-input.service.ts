import { Injectable } from '@angular/core';
import { AudioService } from './audio.service';
import { inputDirection, inputMode } from '../models/stratagem-inputs';
import { BehaviorSubject } from 'rxjs';
import { stratagemCode, stratagemCodes } from '../models/stratagem-codes';

@Injectable({
	providedIn: 'root',
})
export class StratagemInputService {
	public maxInputs = 8;
	public inputMode: string = inputMode[1];

	private currentInputCode$: BehaviorSubject<inputDirection[]> = new BehaviorSubject<inputDirection[]>([]);
	public currentInputCode = this.currentInputCode$.asObservable();

	private isInputDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isInputDisabled = this.isInputDisabled$.asObservable();

	private isCodeReady$: BehaviorSubject<string> = new BehaviorSubject<string>('');
	public codeReady = this.isCodeReady$.asObservable();

	private isDeploying$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isDeploying = this.isDeploying$.asObservable();

	public filteredCodesByInput: stratagemCode[] = stratagemCodes;

	constructor(private audioService: AudioService) {}

	public registerInput(direction: inputDirection) {
		if (this.isInputDisabled$.getValue() == false) {
			if (this.currentInputCode$.getValue().length < this.maxInputs) {
				this.addInput(direction);
				this.audioService.playStratagemInputBeep(this.currentInputCode$.getValue().length);
				switch(this.inputMode) {
					case inputMode[0]: // Free
						if (this.currentInputCode$.getValue().length >= this.maxInputs) {
							this.forceReady();
						}
						break;
					case inputMode[1]: // Code List
					case inputMode[2]: // Blind
						this.updateFilteredCodesByInput();
						if(this.filteredCodesByInput.length == 1 && this.currentInputCode$.getValue().length == this.filteredCodesByInput[0].code.length) {
							this.ready(this.filteredCodesByInput[0].name);
						}
						else if (this.filteredCodesByInput.length == 0) {
							this.cancelCode();
						}							
						break;
				}
			}
		}
	}

	public setMode(mode: string) {
		this.inputMode = mode;
		this.reset();
	}

	private ready(stratagemName: string) {
		this.isCodeReady$.next(stratagemName);
		this.isInputDisabled$.next(true);
		this.audioService.playStratagemInputReady();
	}

	public forceReady() {
		this.ready('Stratagem');
	}

	public deploy(delayInSeconds: number = 0) {
		this.isDeploying$.next(true);
		this.audioService.playStratagemInputDeploy(delayInSeconds);
		setTimeout(() => {
			this.reset();
		}, 1000 * delayInSeconds);
	}

	public cancelCode() {
		this.audioService.playStratagemInputFail();
		this.reset();
	}

	public getIsInputDisabled(): boolean {
		return this.isInputDisabled$.getValue();
	}

	public getInputMode(): string {
		return this.inputMode;
	}

	public getCodeReady(): string {
		return this.isCodeReady$.getValue();
	}

	public getIsDeploying(): boolean {
		return this.isDeploying$.getValue();
	}

	private updateFilteredCodesByInput() {
		this.filteredCodesByInput = stratagemCodes.filter((code) => code.code.slice(0, this.currentInputCode$.getValue().length).toString() == this.currentInputCode$.getValue().toString());
	}

	private addInput(direction: inputDirection) {
		this.currentInputCode$.next(this.currentInputCode$.getValue().concat(direction));
	}

	private reset() {
		this.isDeploying$.next(false);
		this.currentInputCode$.next([]);
		this.isInputDisabled$.next(false);
		this.isCodeReady$.next('');
		this.filteredCodesByInput = stratagemCodes;
	}
}
