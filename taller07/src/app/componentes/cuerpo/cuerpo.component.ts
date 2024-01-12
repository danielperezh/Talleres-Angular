import { Component, TemplateRef } from '@angular/core';
import { Carro } from 'src/app/modelos/carro.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARREGLO_CARROS } from 'src/app/mocks/carro.mock';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  public carroSeleccionado: Carro;
  public arregloCarro: Carro[];

  public tmpBase64: any;
  public parametroMensaje: any;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;


  constructor(public miModal: BsModalService, public miMensaje: ToastrService) {
    this.carroSeleccionado = new Carro(0, '', '', 0, '', '');
    this.arregloCarro = ARREGLO_CARROS;
    this.tmpBase64 = null;
    this.parametroMensaje = {
      closeButton: true,
      enableHtml: true,
      progresesBar: true,
      timeOut: 6000,
      positionClass: 'toast-top-center',
    };
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';

   }

  ngOnInit(): void {
  }
  public seleccionarCarro(miCarro: Carro): void {
    this.carroSeleccionado = miCarro;
  }
  public resetearCarro(): void {
    this.carroSeleccionado = new Carro(0, '', '', 0, '', '');
  }
  public borrarCarro(miCarro: Carro): void {
    this.arregloCarro = this.arregloCarro.filter(
      (objCarro) => objCarro !== miCarro
    );
  }
  public verificarDatos(): boolean {
    if (
      this.carroSeleccionado.marca == '' ||
      this.carroSeleccionado.placa == '' ||
      this.carroSeleccionado.modelo == 0
    ) {
      this.miMensaje.error(
        'No se permite registros vacios',
        'ERROR',
        this.parametroMensaje
      );
      return false;
    }

    return true;
  }
  public agregarCarro(): void {
    if (this.verificarDatos()) {
      this.carroSeleccionado.codigo = this.arregloCarro.length + 1;
      this.arregloCarro.push(this.carroSeleccionado);
    }
  }
  public seleccionarFoto(miCaja: any): any {
    if (!miCaja.target.files[0] || miCaja.target.files[0].length == 0) {
      return;
    }
    const tipo = miCaja.target.files[0].type;

    if (tipo.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(miCaja.target.files[0]);
    reader.onload = () => {
      this.tmpBase64 = reader.result;
      this.carroSeleccionado.fotoBase64 = this.tmpBase64;
      this.carroSeleccionado.nombreFoto = miCaja.target.files[0].name;
    };
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }
  public btnBorrarCarro(): void {
    this.borrarCarro(this.carroSeleccionado);
    this.btnCancelar();
  }
  public btnAbrirModal(platilla: TemplateRef<any>, miCarro: Carro): void {
    this.carroSeleccionado = miCarro;
    this.modalRef = this.miModal.show(platilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertancia';
    this.modalCuerpo = 'En realidad deseas elimiar el carro?';
    this.modalContenido = miCarro.marca + ' ' + miCarro.placa;
  }

}
