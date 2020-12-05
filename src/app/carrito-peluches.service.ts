import { Injectable } from '@angular/core';
import { peluches } from './lista-peluches/peluches';

@Injectable({
  providedIn: 'root'
})
export class CarritoPeluchesService {

carritoLista: peluches[] = [];

  agregarAlCarro(peluche: peluches) {
    this.carritoLista.push(peluche);
  }



  constructor() { }
}
