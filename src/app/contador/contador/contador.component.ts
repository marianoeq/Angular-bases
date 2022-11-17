import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>Base: {{ base }}</h3>
    <button (click)="operacion(base)">+{{ base }}</button>
    <p>{{ count }}</p>
    <button (click)="operacion(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  count: number = 0;
  base: number = 5;
  operacion(param: number) {
    this.count += param;
  }
}
