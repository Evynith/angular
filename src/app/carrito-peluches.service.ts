import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { peluches } from './lista-peluches/peluches';

@Injectable({
  providedIn: 'root'
})
export class CarritoPeluchesService {

  private _carritoLista: peluches[] = [];
  carritoLista: BehaviorSubject<peluches[]> = new BehaviorSubject([]);

  agregarAlCarro(peluche: peluches) {
    let item :peluches = this._carritoLista.find((v1)=> v1.nombre == peluche.nombre)
    if(!item){
      this._carritoLista.push({... peluche});
    } else {
      item.cuantificador += peluche.cuantificador;
    }
    this.carritoLista.next(this._carritoLista);
  }



  constructor() { }
}
