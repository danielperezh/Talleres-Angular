import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public titulo: string;

  constructor(){
    this.titulo = "Facultad de Ingenieria de Sistemas"
  }

}
