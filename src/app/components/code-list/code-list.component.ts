import { Component, OnInit } from '@angular/core';
import { CodeDisplayComponent } from '../code-display/code-display.component';
import { stratagemCode, stratagemCodes } from '../../models/stratagem-codes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-list',
  standalone: true,
  imports: [CommonModule, CodeDisplayComponent],
  templateUrl: './code-list.component.html',
  styleUrl: './code-list.component.scss'
})
export class CodeListComponent implements OnInit {
  public codes: stratagemCode[] = [];
  constructor() {}

  ngOnInit() {
    this.codes = stratagemCodes;
  }
}
