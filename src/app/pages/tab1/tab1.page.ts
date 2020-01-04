import { Component, OnInit } from '@angular/core';
import { Genre, RespuestaMDB } from 'src/app/interfas/interfaces';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  listCategoria:Genre[] = [];
  listArticulo:RespuestaMDB[] = [];
  dataGeneral:any = [];
  buscando:boolean = false;
  config:any = {};
  constructor(
    private _Articulo: ArticuloService,
    private _Categoria: CategoriaService,
  ) {}

  ngOnInit(){ 
    this.getlistArticulo();
    this.config = {
      categoria: this.listCategoria,
      texto: "Buscar Articulo"
    };
  }

  getlistArticulo(){
    this._Articulo.getArticulo({})
    .subscribe(rta=>{
      // console.log(rta)
      this.listArticulo = rta.results;
      this.getCategoria();
    });
  }

  getCategoria(){
    this._Categoria.getCategoria({})
    .subscribe(rta=>{
      // console.log(rta);
      for(let genero of rta.genres){
        this.dataGeneral.push({
          genero: genero.name,
          pelis: this.listArticulo.filter( peli =>{
            return peli['genre_ids'].find( genre => genre === genero.id );
          })
        });
      }
      console.log(this.dataGeneral)
    });
  }

  cargarMas(){
    
  }


}
