import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../logeo/login/login.page';
import { RegistroPage } from '../logeo/registro/registro.page';
import { ServiciosService } from '../services/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private modalCtrl: ModalController,
  ) {
    // this.cuerpo = this._model;
  }
  open_login(){
    this.modalCtrl.create({
        component: LoginPage,
        componentProps: {
          obj: {}
        }
      }).then((modal)=>{
          console.log("Perros")
        return modal.present()
      });
  }
  open_registro(){
    this.modalCtrl.create({
        component: RegistroPage,
        componentProps: {
          obj: {}
        }
      }).then(modal=>modal.present());
  }
  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}