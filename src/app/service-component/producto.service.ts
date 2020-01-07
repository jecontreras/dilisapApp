import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { ServiciosService } from '../services/servicios.service';
import { ARTICULOS } from '../redux/interfax/articulos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<ARTICULOS>('articulo/querys', query, 'post');
  }
  saved (query: any){
    return this._model.querys<ARTICULOS>('articulo/saved', query, 'post');
  }
  edit(query:any){
    return this._model.querys<ARTICULOS>('articulo/'+query.id, query, 'put');
  }
  delete(query:any){
    return this._model.querys<ARTICULOS>('articulo/'+query.id, query, 'delete');
  }
  getGaleria(query: any){
    return this._model.querys<GALERIA>('galeria/querys', query, 'post');
  }
}

export interface GALERIA {

};