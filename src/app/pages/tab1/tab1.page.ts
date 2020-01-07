import { Component, OnInit } from '@angular/core';
import { Genre, RespuestaMDB } from 'src/app/interfas/interfaces';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DataLocalService } from 'src/app/services/data-local.service';

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
    private _datalocal: DataLocalService
  ) {
    
  }

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
      console.log(rta);
      this.armarLista(rta['genres']);
    });
  }
  armarLista(genres:any){
    for(let genero of genres){
      this.dataGeneral.push({
        genero: genero.name,
        pelis: this.listArticulo.filter( peli =>{
          return peli['genre_ids'].find( genre => genre === genero.id );
        })
      });
    }
  }
  selectCategoria(ev:any){
    console.log(ev);
    if(ev === 'Inicio') {this.dataGeneral = []; this.getCategoria(); return true}
    this._Articulo.getArticuloId({
      texto: ev
    }).subscribe(rta=>{
      this.dataGeneral = [];
      this.dataGeneral.push(
        {
          genero: "Marvel",
          pelis: rta['results']
        },
        {
          genero: "Fox",
          pelis: rta['results']
        },
        {
          genero: "Zony",
          pelis: rta
        }
      );
      console.log(this.dataGeneral);
    });
  }


}
