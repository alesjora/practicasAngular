import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario = 'José Rafael Álvarez Espino';
  constructor() { }

  ngOnInit() {
  }

}
