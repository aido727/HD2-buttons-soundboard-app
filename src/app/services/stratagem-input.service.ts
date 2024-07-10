import { Injectable } from '@angular/core';
import { AudioService } from './audio.service';
import { inputDirection, inputMode } from '../models/stratagem-inputs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StratagemInputService {
	public maxInputs = 8;
	public inputMode: inputMode = inputMode.Free;

	private currentInputCode$: BehaviorSubject<inputDirection[]> = new BehaviorSubject<inputDirection[]>([]);
	public currentInputCode = this.currentInputCode$.asObservable();

	private isInputDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isInputDisabled = this.isInputDisabled$.asObservable();

	private isCodeReady$: BehaviorSubject<string> = new BehaviorSubject<string>('');
	public codeReady = this.isCodeReady$.asObservable();

	private isDeploying$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isDeploying = this.isDeploying$.asObservable();

	constructor(private audioService: AudioService) {}

	public registerInput(direction: inputDirection) {
		if (this.isInputDisabled$.getValue() == false) {
			if (this.inputMode == inputMode.Free) {
				if (this.currentInputCode$.getValue().length < this.maxInputs) {
					this.addInput(direction);
					this.audioService.playStratagemInputBeep(this.currentInputCode$.getValue().length);
					if (this.currentInputCode$.getValue().length >= this.maxInputs) {
						this.forceReady();
					}
				}
			} else {
			}
		}
	}

	public setMode(mode: inputMode) {
		this.inputMode = mode;
	}

	public forceReady() {
		this.isCodeReady$.next('Stratagem');
		this.ready();
	}

	private ready() {
		this.isInputDisabled$.next(true);
		this.audioService.playStratagemInputReady();
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

	public getInputMode(): inputMode {
		return this.inputMode;
	}

	public getCodeReady(): string {
		return this.isCodeReady$.getValue();
	}

	public getIsDeploying(): boolean {
		return this.isDeploying$.getValue();
	}

	private addInput(direction: inputDirection) {
		this.currentInputCode$.next(this.currentInputCode$.getValue().concat(direction));
	}

	private reset() {
		this.isDeploying$.next(false);
		this.currentInputCode$.next([]);
		this.isInputDisabled$.next(false);
		this.isCodeReady$.next('');
	}
}
