import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower :string = 'ángel';
  nombreUpper :string = 'ÁNGEL';
  nombreCompleto :string = 'ánGeL hernándEZ';

  fecha: Date = new Date();

}
