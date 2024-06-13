import { Component, OnInit } from '@angular/core';
import { inputDirection } from '../../../models/stratagem-values';

@Component({
  selector: 'app-stratagem-input',
  standalone: true,
  imports: [],
  templateUrl: './stratagem-input.component.html',
  styleUrl: './stratagem-input.component.scss'
})

export class StratagemInputComponent implements OnInit{

  // while particular element is active, accept keyboard inputs and if they match possible, input them!
  // update to include ctrl key held
  ngOnInit(): void {
    document.onkeydown = (evt: KeyboardEvent) => {
      if(['w', 'a', 's', 'd'].includes(evt.key)) {
        console.log(evt.key);
        // this.buttonInput(evt.key);
      };
    }
  }
  
  public buttonInput(direction: inputDirection) {
    console.log(direction);
  }
}
