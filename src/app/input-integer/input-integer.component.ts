import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peluche } from '../lista-peluches/Peluche';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})

export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cuantificador: number;

  @Input()
  max: number;

  @Output()
  cuantificadorChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maximoAlcanzado: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  bajarCuantificador(): void {
    if(this.cuantificador > 0) {
      this.cuantificador --;
    }
    this.cuantificadorChange.emit(this.cuantificador);
  }

  subirCuantificador(): void {
    if (this.cuantificador < this.max){
      this.cuantificador ++;
    } else {
      this.maximoAlcanzado.emit("se alcanzo el maximo");
    }
    this.cuantificadorChange.emit(this.cuantificador);
  }

  cambiarCuantificador(event): void {
    if(isNaN(event.key) || (this.cuantificador > this.max ) || (event.key > this.max) ){
      //TODO: 
      this.cuantificador = 0;
    }
    this.cuantificadorChange.emit(this.cuantificador);
  }

}
