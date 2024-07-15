import { Component } from '@angular/core';
import { CodeDisplayComponent } from '../code-display/code-display.component';
import { stratagemCode } from '../../models/stratagem-codes';
import { CommonModule } from '@angular/common';
import { StratagemInputService } from '../../services/stratagem-input.service';
import { inputDirection } from '../../models/stratagem-inputs';

@Component({
  selector: 'app-code-list',
  standalone: true,
  imports: [CommonModule, CodeDisplayComponent],
  templateUrl: './code-list.component.html',
  styleUrl: './code-list.component.scss'
})
export class CodeListComponent {
  public currentCode: inputDirection[] = [];
  
  constructor(private stratagemInputService: StratagemInputService) {}

  get codes(): stratagemCode[] {
    return this.stratagemInputService.filteredCodesByInput;
  }
}
