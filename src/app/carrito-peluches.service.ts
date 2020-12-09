import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Peluche } from './lista-peluches/Peluche';

@Injectable({
  providedIn: 'root'
})
export class CarritoPeluchesService {

  private _carritoLista: Peluche[] = [];
  carritoLista: BehaviorSubject<Peluche[]> = new BehaviorSubject([]);

  constructor() { }

  agregarAlCarro(peluche: Peluche): void {
    let item: Peluche = this._carritoLista.find((v1) => v1.nombre == peluche.nombre);
    if (!item) {
      const p = { ...peluche };
      this._carritoLista.push(p);
      // console.log(p);
      // this._carritoLista.push({ ...peluche });
    } else {
      item.cuantificador += peluche.cuantificador;
    }
    // console.log(this._carritoLista.length);
    this.carritoLista.next(this._carritoLista);
  }

}
