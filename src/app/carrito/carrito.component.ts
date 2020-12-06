import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoPeluchesService } from '../carrito-peluches.service';
import { peluches } from '../lista-peluches/peluches';
import {elementos} from './elementos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carritoLista$: Observable<peluches[]>;


  constructor(private carrito: CarritoPeluchesService) { 
    // carrito.carritoLista.subscribe((observable)=> this.carritoLista = observable);
    this.carritoLista$ = carrito.carritoLista.asObservable();
  }

  ngOnInit(): void {
  }

}
