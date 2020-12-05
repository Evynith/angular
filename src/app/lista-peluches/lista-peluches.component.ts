import { Component, OnInit } from '@angular/core';
import { CarritoPeluchesService } from '../carrito-peluches.service';
import { peluches } from './peluches';

@Component({
  selector: 'app-lista-peluches',
  templateUrl: './lista-peluches.component.html',
  styleUrls: ['./lista-peluches.component.scss']
})
export class ListaPeluchesComponent implements OnInit {

  peluches : peluches[] = 
  [
    {
      nombre : "Pulpito",
      material : "felpa",
      precio : 123.33,
      stock : 0,
      imagen : "assets/images/pulpito.jpg",
      oferta : false,
      cuantificador : 0,
    },
    {
      nombre : "Stitch",
      material : "felpa",
      precio : 456,
      stock : 11,
      imagen : "assets/images/stitch.webp",
      oferta : true,
      cuantificador : 0,
    },
    {
      nombre : "Yoda",
      material : "felpa",
      precio : 789,
      stock : 12,
      imagen : "assets/images/yoda.jpeg",
      oferta : false,
      cuantificador : 0,
    }
  ];


  constructor(private carrito: CarritoPeluchesService) {
    
   }

  ngOnInit(): void {
  }

  maximoAlcanzado(m: string): void {
    alert(m);
  }

  agregarAlCarro(peluche):void {
    this.carrito.agregarAlCarro(peluche);
  }
}
