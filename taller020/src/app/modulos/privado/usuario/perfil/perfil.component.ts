import { Imagen } from './../../../../modelos/imagen.model';
import { Usuario } from './../../../../modelos/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  public objUsuario:Usuario;
  public objImagen:Imagen;
  public miSuscripcion:Subscription;
  public arreglosTipos:any[];
  public temp:any;
  public cargaFinalizada:boolean;


  constructor() {
    this.objUsuario=this.inicializarUsuario();
    this.objImagen=this.inicializarImagen();
    this.miSuscripcion=this.temp;
    this.arreglosTipos= [
      { acronimo: null, tipo: 'Seleccione el tipo de documento' },
      { acronimo: 'CC', tipo: 'Cedula de ciudadania' },
      { acronimo: 'TI', tipo: 'Tarjeta de Identidad' },
      { acronimo: 'TE', tipo: 'Tarjeta de Extrangeria' },
      { acronimo: 'PN', tipo: 'Pasaporte Nacional' },
      { acronimo: 'TR', tipo: 'Tarjeta de Recidencia' },
      { acronimo: 'RC', tipo: 'Registro Civil' },
    ];
    this.cargaFinalizada = false;
  }


  ngOnInit(): void {
  }

  public inicializarUsuario(): Usuario {
    return new Usuario(0, this.inicializarImagen(), '', '', '', '');
  }
  public inicializarImagen(): Imagen {
    return new Imagen(0, '', '', '', '', '', '');
  }

  public obtenerUsuario(): void{

  }

}
