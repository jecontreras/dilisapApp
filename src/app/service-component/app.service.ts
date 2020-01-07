import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ServiciosService } from '../services/servicios.service';
import { NAMEAPP } from '../redux/interfax/nameapp';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<NAMEAPP>('app/querys', query, 'post');
  }
  get_detalles(query: any){
    return this._model.querys<NAMEAPP>('appdetalles/getarticulo', query, 'post');
  }
  saved (query: any){
    return this._model.querys<NAMEAPP>('app', query, 'post');
  }
}