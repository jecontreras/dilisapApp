import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ServiciosService } from '../services/servicios.service';
import { MENSAJES } from '../redux/interfax/mensajes';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private _model: ServiciosService
  ) {
    // this.cuerpo = this._model;
  }
  get(query: any){
    return this._model.querys<MENSAJES>('chat/querys', query, 'post');
  }
  get_detallado(query: any){
    return this._model.querys<MENSAJES>('chatdetallado/querys', query, 'post');
  }
  get_detallado2(query: any){
    return this._model.querys<MENSAJES>('chat/get_chat_user', query, 'post');
  }
  saved (query: any){
    return this._model.querys<MENSAJES>('chat/iniciar_chat', query, 'post');
  }
  delete(query:any){
    return this._model.querys<MENSAJES>('chat/query.id', query, 'delete');
  }
  deleteDetellado(query:any){
    return this._model.querys<MENSAJES>('chatdetallado/delete', query, 'post');
  }
}