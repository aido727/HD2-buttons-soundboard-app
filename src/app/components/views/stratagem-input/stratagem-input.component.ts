import { Component, OnInit } from '@angular/core';
import { inputDirection } from '../../../models/stratagem-values';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-stratagem-input',
  standalone: true,
  imports: [],
  templateUrl: './stratagem-input.component.html',
  styleUrl: './stratagem-input.component.scss'
})

export class StratagemInputComponent implements OnInit{

  public inputDirection = inputDirection;

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    document.onkeydown = (evt: KeyboardEvent) => {
      //document.getElementById('input'+this.utils.getKeyByValue(this.inputDirection, evt.key))?.click();
      this.buttonInput(evt.key);
    }
  }
  
  public buttonInput(direction: string) {
    var input = this.utils.getKeyByValue(this.inputDirection, direction);
    if(input) {
      console.log(input);
    }
  }
}
