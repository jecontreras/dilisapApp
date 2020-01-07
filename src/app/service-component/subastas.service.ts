import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ServiciosService } from '../services/servicios.service';
import { SUBASTA } from '../redux/interfax/sotarage';

@Injectable({
  providedIn: 'root'
})
export class SubastasService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<SUBASTA>('subastas', query, 'post');
  }
  edit(query:any){
    return this._model.querys<SUBASTA>('subastas'+query.id, query, 'put');
  }
  saved (query: any){
    return this._model.querys<SUBASTA>('subastas', query, 'post');
  }
}