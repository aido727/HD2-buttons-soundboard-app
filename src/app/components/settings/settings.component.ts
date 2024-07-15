import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  animations: [
    trigger('menuTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('150ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),

      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(-100%)' })),
      transition('open => close', [
        animate('150ms ease-in')
      ]),
      transition('close => open', [
        animate('150ms ease-out')
      ])
    ])
  ]
})
export class SettingsComponent {
  public showMenu: boolean = false;

}
