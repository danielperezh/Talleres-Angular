export class Carro {
  codigo: number;
  placa: string;
  marca: string;
  modelo: number;

  constructor(cod: number, pla: string, mar: string, mod: number) {
    this.codigo = cod;
    this.placa = pla;
    this.marca = mar;
    this.modelo = mod;
  }
}
