import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  public titulo: string;

  constructor() {
    this.titulo = 'Crud estático dos componentes';
  }

}
