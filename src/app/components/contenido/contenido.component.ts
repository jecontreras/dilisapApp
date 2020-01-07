import { Component, OnInit, Input } from '@angular/core';
import { RespuestaMDB } from 'src/app/interfas/interfaces';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss'],
})
export class ContenidoComponent implements OnInit {
  @Input() articulos: RespuestaMDB[] = [];
  buscando:boolean = true;
  constructor() { }

  ngOnInit() {
    console.log("Hp")
  }
  detalle(id:any){
    console.log(id);
  }
}
