import { Component, OnInit } from '@angular/core';
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
      precio : 123,
      stock : 10,
      imagen : "assets/images/pulpito.jpg"
    },
    {
      nombre : "Stitch",
      material : "felpa",
      precio : 456,
      stock : 11,
      imagen : "assets/images/stitch.webp"
    },
    {
      nombre : "Yoda",
      material : "felpa",
      precio : 789,
      stock : 12,
      imagen : "assets/images/yoda.jpeg"
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
