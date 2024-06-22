import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playStratagemInput() {
    console.log('play audio');
    new Audio("/audio/sounds/stratagem-input.ogg").play();
  }
}
