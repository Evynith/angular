import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { peluches } from '../lista-peluches/peluches';

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
  cambioCuantificador: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maximoAlcanzado: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  bajarCuantificador(): void {
    if(this.cuantificador > 0) {
      this.cuantificador --;
      this.cambioCuantificador.emit(this.cuantificador);
    }
  }

  subirCuantificador(): void {
    if (this.cuantificador < this.max){
      this.cuantificador ++;
      this.cambioCuantificador.emit(this.cuantificador);
    } else {
      this.maximoAlcanzado.emit("se alcanzo el maximo");
    }
  }

  cambiarCuantificador(event): void {
    if(isNaN(event.key) || (this.cuantificador > this.max ) || (event.key > this.max) ){
      this.cambioCuantificador.emit(this.cuantificador);
     //TODO: 
    }
  }

}
