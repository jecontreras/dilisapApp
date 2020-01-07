import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ServiciosService } from '../services/servicios.service';
import { NEGOCIO } from '../redux/interfax/sotarage';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<NEGOCIO>('negocios/querys', query, 'post');
  }
  saved (query: any){
    return this._model.querys<NEGOCIO>('negocios', query, 'post');
  }
  edit(query:any){
    return this._model.querys<NEGOCIO>('negocios/'+query.id, query, 'put');
  }
}