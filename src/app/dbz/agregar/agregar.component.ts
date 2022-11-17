import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor (private dbzService: DbzService) {};

  // @Output() newPersonaje = new EventEmitter<Personaje>();

  add() {
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}


//
