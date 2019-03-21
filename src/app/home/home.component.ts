import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  interpolacion = 'interpolación de strings';
  url = 'https://www.google.es';
  desactivado = false;

  interpolarOtraCosa(){
    this.interpolacion = 'Angular 6';
  }
  intercambiar(){
    this.desactivado = !this.desactivado;
  }

  constructor() { }

  ngOnInit() {
  }

}
