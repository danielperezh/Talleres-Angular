import { Component } from '@angular/core';

import { ARREGLO_CARROS } from 'src/app/mocks/carro-mocks';
import { Carro } from 'src/app/modelos/“carro';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  public titulo: string;
  public arregloCarros: Carro[];
  public carroSeleccionado: Carro;

  constructor() {
    this.titulo = "Carros registrados";
    this.arregloCarros = ARREGLO_CARROS;
    this.carroSeleccionado = new Carro(0, '', '', 0);
  }

  public cancelar(): void {
    this.carroSeleccionado = new Carro(0, '', '', 0);
  }

  public seleccionarCarro(objCarro: Carro): void {
    this.carroSeleccionado = objCarro;
  }

  public borrarCarro(): void {
    if (confirm('¿En realidad desea eliminar el carro?')) {
      this.arregloCarros = this.arregloCarros.filter((objCarro) => objCarro != this.carroSeleccionado);
      this.cancelar();
    }
  }

  public crearCarro(): void {
    this.carroSeleccionado.codigo = this.arregloCarros.length + 1;
    this.arregloCarros.push(this.carroSeleccionado);
    this.cancelar();
  }

  public actualizarCarro(): void {
    this.cancelar();
  }


}
