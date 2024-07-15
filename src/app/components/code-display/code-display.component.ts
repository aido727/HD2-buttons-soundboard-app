import { Component, Input } from '@angular/core';
import { stratagemCode } from '../../models/stratagem-codes';
import { CommonModule } from '@angular/common';
import { inputDirection } from '../../models/stratagem-inputs';

@Component({
  selector: 'app-code-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-display.component.html',
  styleUrl: './code-display.component.scss'
})
export class CodeDisplayComponent {

  public inputDirection = inputDirection;

  @Input() code!: stratagemCode;
}
