import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { STORAGES } from '../redux/interfax/sotarage';
import { ArticuloSelectAction } from '../redux/app.actions';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  dataLocal:STORAGES = {};
  constructor(
    private _store:Store<STORAGES>
  ) { 
    this._store.forEach(row=>this.dataLocal=row['name']);
  }

  articuloSeleccion(data:any){
    return new Promise(resolve=>{
      let action = new ArticuloSelectAction(data, 'post')
      this._store.dispatch(action);
      resolve('ok');
    });
  }
}
