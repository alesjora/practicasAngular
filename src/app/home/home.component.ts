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
  constructor() { }

  ngOnInit() {
  }

}
