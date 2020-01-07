import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ServiciosService } from '../services/servicios.service';
import { COMENTARIOS } from '../redux/interfax/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<COMENTARIOS>('comentario/querys', query, 'post');
  }
  saved (query: any){
    return this._model.querys<COMENTARIOS>('comentario', query, 'post');
  }
}