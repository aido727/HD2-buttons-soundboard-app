import { Component, OnInit } from '@angular/core';
import { inputDirectionMap, inputDirections } from '../../../models/stratagem-values';
import { AudioService } from '../../../services/audio.service';

@Component({
  selector: 'app-stratagem-input',
  standalone: true,
  imports: [],
  templateUrl: './stratagem-input.component.html',
  styleUrl: './stratagem-input.component.scss'
})

export class StratagemInputComponent implements OnInit {

  public inputDirectionMap = inputDirectionMap;

  constructor(private audioService: AudioService) { }

  ngOnInit() {
    document.onkeydown = (evt: KeyboardEvent) => {
      if (evt.repeat) { return }
      this.keyInput(inputDirectionMap.get(evt.key));
    }

    document.onkeyup = (evt: KeyboardEvent) => {
      if (evt.repeat) { return }
      const direction = inputDirectionMap.get(evt.key);
      if(direction && inputDirections.includes(direction))
      {
        const button = document.getElementById('input'+direction)?.classList.remove("active");
      }
    }
  }
  
  public keyInput(direction: string | undefined) {
    if(direction && inputDirections.includes(direction))
    {
      const button = document.getElementById('input'+direction)?.classList.add("active");
      this.registerInput(direction);
    }
  }

  public clickInput(direction: string | undefined) {
    if(direction && inputDirections.includes(direction))
    {
      this.registerInput(direction);
    }
  }

  public registerInput(direction: string) {
    console.log(direction);
    this.audioService.playStratagemInputBeep();
  }
}
