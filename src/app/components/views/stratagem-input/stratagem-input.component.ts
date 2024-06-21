import { Component, OnInit } from '@angular/core';
import { inputDirectionMap, inputDirections } from '../../../models/stratagem-values';

@Component({
  selector: 'app-stratagem-input',
  standalone: true,
  imports: [],
  templateUrl: './stratagem-input.component.html',
  styleUrl: './stratagem-input.component.scss'
})

export class StratagemInputComponent implements OnInit {

  public inputDirectionMap = inputDirectionMap;

  constructor() { }

  ngOnInit() {
    document.onkeydown = (evt: KeyboardEvent) => {
      this.buttonInput(inputDirectionMap.get(evt.key));
    }
  }
  
  public buttonInput(direction: string | undefined) {
    if(direction && inputDirections.includes(direction))
    {
      console.log(direction);
    }
  }
}
