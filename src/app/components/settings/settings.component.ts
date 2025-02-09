import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { hideGeneralCodesMode, inputMode } from '../../models/stratagem-inputs';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StratagemInputService } from '../../services/stratagem-input.service';
import { Subscription } from 'rxjs';
import { HelpModalComponent } from '../help-modal/help-modal.component';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
	selector: 'app-settings',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, HelpModalComponent, ContactModalComponent],
	templateUrl: './settings.component.html',
	styleUrl: './settings.component.scss',
	animations: [
		trigger('menuSlide', [
			transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('150ms ease-in', style({ transform: 'translateX(0%)' }))]),
			transition(':leave', [style({ transform: 'translateX(0%)' }), animate('150ms ease-in', style({ transform: 'translateX(-100%)' }))]),
		]),
		trigger('backgroundFade', [
			transition(':enter', [style({ opacity: 0 }), animate('150ms', style({ opacity: 1 }))]),
			transition(':leave', [style({ opacity: 1 }), animate('150ms', style({ opacity: 0 }))]),
		]),
	],
})
export class SettingsComponent implements OnInit, OnDestroy {
	public showMenu: boolean = false;
	public showHelp: boolean = false;
	public showContact: boolean = false;
	public inputModes = inputMode;
	public hideMissionCodes = hideGeneralCodesMode;
	public inputModeForm: FormGroup;
	public hideModeForm: FormGroup;
	private inputChanges!: Subscription;
	private hideChanges!: Subscription;

	constructor(
		fb: FormBuilder,
		private stratagemInputService: StratagemInputService,
	) {
		this.inputModeForm = fb.group({
			mode: [this.stratagemInputService.inputMode, Validators.required],
		});
		this.hideModeForm = fb.group({
			mode: [this.stratagemInputService.hideGeneralCodes, Validators.required],
		});
	}

	ngOnInit() {
		this.inputChanges = this.inputModeForm.controls['mode'].valueChanges.subscribe((res) => {
			this.stratagemInputService.setMode(res!);
		});
		this.hideChanges = this.hideModeForm.controls['mode'].valueChanges.subscribe((res) => {
			this.stratagemInputService.setHideGeneralCodes(res!);
		});
	}

	hideMenu() {
		this.showMenu = false;
		this.showHelp = false;
		this.showContact = false;
	}

	ngOnDestroy() {
		this.inputChanges.unsubscribe();
		this.hideChanges.unsubscribe();
	}
}
