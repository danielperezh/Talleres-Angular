import { Component } from '@angular/core';

@Component({
  selector: 'app-compo01',
  templateUrl: './compo01.component.html',
  styleUrls: ['./compo01.component.css']
})
export class Compo01Component {

  public titulo: string;

  constructor() {
    this.titulo ="soy el componente 1";
  }
}
