import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable() // Decorador que me permite inyectar la informacion en otros componentes.
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Bati',
      poder: 20000,
    },
    {
      nombre: 'Crespo',
      poder: 30000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {}

  agregarPersonaje(data: Personaje) {
    this._personajes.push(data);
  }
}
