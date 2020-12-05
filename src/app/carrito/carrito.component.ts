import { Component, OnInit } from '@angular/core';
import { CarritoPeluchesService } from '../carrito-peluches.service';
import {elementos} from './elementos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  elementos : elementos[] = 
  [
    {
      producto : "Pulpito",
      precio : 123,
      cantidad : 1
    }
  ];

  constructor(private carrito: CarritoPeluchesService) { }

  ngOnInit(): void {
  }

}
