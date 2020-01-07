import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { NOTIFICACIONES } from '../redux/interfax/notificaciones';
import { ServiciosService } from '../services/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<NOTIFICACIONES>('notificacion/querys', query, 'post');
  }
  saved (query: any){
    return this._model.querys<NOTIFICACIONES>('notificacion', query, 'post');
  }
}