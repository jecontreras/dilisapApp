import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Genre } from 'src/app/interfas/interfaces';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  @Input() config:any = {};
  @Output() selectCategorias = new EventEmitter();

  textoBuscar:string = '';
  listCategoria: Genre[]=[];
  constructor(
    private _Categoria: CategoriaService,
    private _Articulo: ArticuloService
  ) { }

  ngOnInit() {
    console.log(this.config)
    this.listCategoria = this.config.categoria;
    this.getlistCategoria();
  }
  
  buscar(ev:any ){

  }

  getlistCategoria(){
    this._Categoria.getCategoria({})
    .subscribe(rta=>{
      console.log(rta);
      this.listCategoria = rta['genres'];
      this.listCategoria.unshift({
        id: 0,
        name: "Inicio"
      });
    });
  }
  selectCategoria(ev:any){
    let data = ev.detail.value.name;
    console.log(data);
    this.selectCategorias.emit(data);
  }
}
