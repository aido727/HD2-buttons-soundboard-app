import { Component } from '@angular/core';

@Component({
	selector: 'app-install-button',
	standalone: true,
	templateUrl: './install-button.component.html',
	styleUrl: './install-button.component.scss',
})
export class InstallButtonComponent {
	public installPrompt: Event | undefined = undefined;

	constructor() {
		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault();
			this.installPrompt = event;
		});

		window.addEventListener('appinstalled', () => {
			this.hide();
		});
	}

	async install() {
		if (this.installPrompt != undefined) {
			const result = await (this.installPrompt as any).prompt();
			this.hide();
		}
	}

	public hide() {
		this.installPrompt = undefined;
	}
}
