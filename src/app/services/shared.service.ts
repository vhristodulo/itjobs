import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor() { }

  @Output() fire: EventEmitter<any> = new EventEmitter();

  change(loggedIn) {
    this.fire.emit(loggedIn);
  }

  getEmittedValue() {
    return this.fire;
  }
}
