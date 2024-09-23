import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-contact-modal',
	standalone: true,
	imports: [],
	templateUrl: './contact-modal.component.html',
	styleUrl: './contact-modal.component.scss',
})
export class ContactModalComponent {
	@Output() closeContact = new EventEmitter();

	goToSteam() {
		window.open('https://steamcommunity.com/id/aido727/', '_blank');
	}

	goToDiscord() {
		window.open('https://discord.com/users/196625630891081729/', '_blank');
	}

	goToEmail() {
		window.open('mailto:aido727@gmail.com', '_blank');
	}

	goToKofi() {
		window.open('https://ko-fi.com/aido727/', '_blank');
	}
}
