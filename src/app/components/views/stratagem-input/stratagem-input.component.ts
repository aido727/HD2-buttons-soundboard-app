import { Component, OnInit } from '@angular/core';
import { inputDirectionMap, inputDirection, inputMode } from '../../../models/stratagem-inputs';
import { StratagemInputService } from '../../../services/stratagem-input.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CodeListComponent } from '../../code-list/code-list.component';
import { stratagemCode } from '../../../models/stratagem-codes';

@Component({
	selector: 'app-stratagem-input',
	standalone: true,
	imports: [CommonModule, CodeListComponent],
	templateUrl: './stratagem-input.component.html',
	styleUrl: './stratagem-input.component.scss',
})
export class StratagemInputComponent implements OnInit {
	public inputDirection = inputDirection;
	public inputMode = inputMode;
	public currentInputCode?: Observable<inputDirection[]>;
	public isInputDisabled?: Observable<boolean>;
	public codeReady?: Observable<stratagemCode | null>;
	public isDeploying?: Observable<boolean>;

	constructor(private stratagemInputService: StratagemInputService) {}

	ngOnInit() {
		this.currentInputCode = this.stratagemInputService.currentInputCode;
		this.isInputDisabled = this.stratagemInputService.isInputDisabled;
		this.codeReady = this.stratagemInputService.codeReady;
		this.isDeploying = this.stratagemInputService.isDeploying;

		document.onkeydown = (evt: KeyboardEvent) => {
			if (evt.repeat) {
				return;
			}
			this.keyInput(inputDirectionMap.get(evt.key));
		};

		document.onkeyup = (evt: KeyboardEvent) => {
			const direction = inputDirectionMap.get(evt.key);
			if (direction != null) {
				const button = document.getElementById('input' + inputDirection[direction])?.classList.remove('active');
			}
		};
	}

	public keyInput(direction: inputDirection | undefined) {
		if (this.stratagemInputService.getIsInputDisabled() == false) {
			if (direction != null) {
				const button = document.getElementById('input' + inputDirection[direction])?.classList.add('active');
				this.registerInput(direction);
			}
		}
	}

	public codeClick() {
		if (this.getInputMode() == inputMode[0] && this.getCodeReady() == null && this.getIsDeploying() == false) {
			this.stratagemInputService.forceReady();
		} else {
			this.stratagemInputService.cancelCode();
		}
	}

	public deploy() {
		if (this.getIsDeploying() == false) {
			document.getElementById('inputDeploy')?.classList.add('active');
			this.stratagemInputService.deploy();
		}
	}

	public clickInput(direction: inputDirection) {
		this.registerInput(direction);
	}

	public registerInput(direction: inputDirection) {
		if (this.stratagemInputService.getIsInputDisabled() == false) {
			this.stratagemInputService.registerInput(direction);
		}
	}

	public getIsDeploying(): boolean {
		return this.stratagemInputService.getIsDeploying();
	}

	public getInputMode(): string {
		return this.stratagemInputService.inputMode;
	}

	public getCodeReady(): stratagemCode | null {
		return this.stratagemInputService.getCodeReady();
	}

	public getReadyIcon(): string {
		return '/images/stratagems/' + this.getCodeReady()?.icon + '.svg';
	}
}
