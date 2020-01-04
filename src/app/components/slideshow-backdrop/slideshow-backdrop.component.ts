import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';
import { Pelicula } from 'src/app/interfas/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Input() slidesPerView;
  
  slideOpts = {
    slidesPerView: 1.0,
    freeMode: true
  };  
  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
    console.log(this.slidesPerView, this.slideOpts)
    this.slideOpts.slidesPerView=this.slidesPerView
  }

  async verDetalle( id:string ){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {id},
    });
    modal.present();
  }
}
