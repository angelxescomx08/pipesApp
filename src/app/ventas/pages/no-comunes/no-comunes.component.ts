import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Marta';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPrural
  clientes: string[] = ['Maria','Ángel','Luis','Alejandro','Iris'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona(){
    this.nombre = 'Ángel';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue pipe
  persona = {
    nombre : "Ángel",
    edad: 23,
    direccion: "México"
  }

  //Json pipe 
  heroes = [
    {
      nombre: "superman",
      vuela: true
    },
    {
      nombre: "spiderman",
      vuela: false
    },
    {
      nombre: "wonder woman",
      vuela: false
    },
  ]

  //async pipe
  miObservable:Observable<number> = interval(1000);

  miPromesa:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Mi promesa resuelta');
    },1000)
  })

  
}
