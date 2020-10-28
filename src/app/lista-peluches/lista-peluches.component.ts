import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-peluches',
  templateUrl: './lista-peluches.component.html',
  styleUrls: ['./lista-peluches.component.scss']
})
export class ListaPeluchesComponent implements OnInit {

  peluche1 = {
    "nombre" : "Pulpito",
    "material" : "felpa",
    "precio" : 123,
    "stock" : 10,
    "imagen" : "assets/images/pulpito.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
