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
    trigger('menuSlide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('150ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('150ms ease-in', style({ transform: 'translateX(-100%)' }))
      ]),
    ]),
    trigger(
      'backgroundFade', [
        transition(':enter', [
          style({opacity: 0}),
          animate('150ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('150ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class SettingsComponent implements OnInit {
  public showMenu: boolean = false;
  public inputModes = inputMode;

  public form;

  changes!:Subscription

  constructor(fb: FormBuilder, private stratagemInputService: StratagemInputService) {
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
