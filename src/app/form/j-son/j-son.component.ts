import { Component } from '@angular/core';

@Component({
  selector: 'app-j-son',
  templateUrl: './j-son.component.html',
  styleUrls: ['./j-son.component.css']
})
export class JSonComponent {
  data: Array<any> = [
    {
      apellido:'Arcilla',
      Casado:false,
      Direccion:'Calle 35 43',
      Nombre:'Juan',
      Telefono:'1234567'
    },
    {
      apellido:'Bueno',
      Casado:false,
      Direccion:'Calle 34353',
      Nombre:'Kevin',
      Telefono:'43546'
    },
    {
      apellido:'Palomino',
      Casado:false,
      Direccion:'Calle w323',
      Nombre:'Natalia',
      Telefono:'4353423',
    }
  ]
}
