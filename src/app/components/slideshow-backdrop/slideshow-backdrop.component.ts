import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfas/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Input() slidesPerView;
  disable_img:boolean = false;
  
  slideOpts = {
    slidesPerView: 1.0,
    freeMode: true
  };  
  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
    this.slideOpts.slidesPerView=this.slidesPerView
    this.disable_img = this.slidesPerView <= 1.5;
  }

  async verDetalle( id:string ){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {id},
    });
    modal.present();
  }
}
