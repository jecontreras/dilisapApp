import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  salir(){
    this.modalCtrl.dismiss();
  }
}
