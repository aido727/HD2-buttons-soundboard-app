import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { inputMode } from '../../models/stratagem-inputs';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { StratagemInputService } from '../../services/stratagem-input.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  animations: [
    trigger('menuTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('150ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),

      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(-101%)' })),
      transition('open => close', [
        animate('150ms ease-in')
      ]),
      transition('close => open', [
        animate('150ms ease-out')
      ])
    ])
  ]
})
export class SettingsComponent implements OnInit {
  public showMenu: boolean = false;
  public inputModes = inputMode;

  public form;

  changes!:Subscription

  constructor(fb: FormBuilder, private stratagemInputService: StratagemInputService) {
    console.log(this.stratagemInputService.inputMode);
    this.form = fb.group({
      mode: [this.stratagemInputService.inputMode, Validators.required]
    });
  }

  ngOnInit() {
    this.changes=this.form.controls.mode.valueChanges
      .subscribe((res)=>{
         this.stratagemInputService.setMode(res!);
      })
  }

  ngOnDestroy()
  {
    this.changes.unsubscribe();
  }
}
