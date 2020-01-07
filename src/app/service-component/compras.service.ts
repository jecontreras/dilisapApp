import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ServiciosService } from '../services/servicios.service';
import { CART } from '../redux/interfax/sotarage';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<CART>('cart/querys', query, 'post');
  }
  saved (query: any){
    return this._model.querys<CART>('cart', query, 'post');
  }
}