import { Injectable } from '@angular/core';
import { AudioService } from './audio.service';
import { hideGeneralCodesMode, inputDirection, inputMode } from '../models/stratagem-inputs';
import { BehaviorSubject } from 'rxjs';
import { genericStratagemCode, stratagemCode, stratagemCodes } from '../models/stratagem-codes';

@Injectable({
	providedIn: 'root',
})
export class StratagemInputService {
	public maxInputs = 8;
	public inputMode: string = inputMode[1];
	public hideGeneralCodes: string = hideGeneralCodesMode[0];

	private currentInputCode$: BehaviorSubject<inputDirection[]> = new BehaviorSubject<inputDirection[]>([]);
	public currentInputCode = this.currentInputCode$.asObservable();

	private isInputDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isInputDisabled = this.isInputDisabled$.asObservable();

	private codeReady$: BehaviorSubject<stratagemCode | null> = new BehaviorSubject<stratagemCode | null>(null);
	public codeReady = this.codeReady$.asObservable();

	private isDeploying$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isDeploying = this.isDeploying$.asObservable();

	public filteredCodesByInput: stratagemCode[] = this.filteredCodesByHideMode();

	private deployButtonDelayInSeconds: number = 8.5;

	constructor(private audioService: AudioService) {}

	public registerInput(direction: inputDirection) {
		if (this.isInputDisabled$.getValue() == false) {
			if (this.currentInputCode$.getValue().length < this.maxInputs) {
				this.addInput(direction);
				switch (this.inputMode) {
					case inputMode[0]: // Free
						this.audioService.playStratagemInputBeep(this.currentInputCode$.getValue().length);
						if (this.currentInputCode$.getValue().length >= this.maxInputs) {
							this.forceReady();
						}
						break;
					case inputMode[1]: // Code List
					case inputMode[2]: // Blind
						this.updateFilteredCodesByInput();
						if (this.filteredCodesByInput.length == 0) {
							this.cancelCode();
						} else {
							this.audioService.playStratagemInputBeep(this.currentInputCode$.getValue().length);
							if (this.filteredCodesByInput.length == 1 && this.currentInputCode$.getValue().length == this.filteredCodesByInput[0].code.length) {
								this.ready(this.filteredCodesByInput[0]);
							}
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

	public setHideGeneralCodes(hideGeneralCodes: string) {
		this.hideGeneralCodes = hideGeneralCodes;
		this.reset();
	}

	private ready(stratagem: stratagemCode | null) {
		this.codeReady$.next(stratagem);
		this.isInputDisabled$.next(true);
		this.audioService.playStratagemInputReady();
	}

	public forceReady() {
		this.ready(genericStratagemCode);
	}

	public deploy() {
		this.isDeploying$.next(true);
		this.audioService.playStratagemInputDeploy(this.codeReady$.getValue()!);
		setTimeout(() => {
			this.reset();
		}, 1000 * this.deployButtonDelayInSeconds);
	}

	public cancelCode() {
		this.audioService.playStratagemInputFail();
		this.reset();
	}

	public getIsInputDisabled(): boolean {
		return this.isInputDisabled$.getValue();
	}

	public getCodeReady(): stratagemCode | null {
		return this.codeReady$.getValue();
	}

	public getIsDeploying(): boolean {
		return this.isDeploying$.getValue();
	}

	public getCurrentInputCode(): inputDirection[] {
		return this.currentInputCode$.getValue();
	}

	public filteredCodesByHideMode(): stratagemCode[] {
		switch (this.hideGeneralCodes) {
			case hideGeneralCodesMode[1]:
				return stratagemCodes.filter((code) => code.type != 'Mission' || (code.type == 'Mission' && code.subType == 'General'));
			case hideGeneralCodesMode[2]:
				return stratagemCodes.filter((code) => code.type != 'Mission');
		}
		return stratagemCodes;
	}

	private updateFilteredCodesByInput() {
		this.filteredCodesByInput = this.filteredCodesByInput.filter(
			(code) => code.code.slice(0, this.currentInputCode$.getValue().length).toString() == this.currentInputCode$.getValue().toString(),
		);
	}

	private addInput(direction: inputDirection) {
		this.currentInputCode$.next(this.currentInputCode$.getValue().concat(direction));
	}

	private reset() {
		this.isDeploying$.next(false);
		this.currentInputCode$.next([]);
		this.isInputDisabled$.next(false);
		this.codeReady$.next(null);
		this.filteredCodesByInput = this.filteredCodesByHideMode();
	}
}
