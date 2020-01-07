import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaDetalle, Cast } from 'src/app/interfas/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Router } from '@angular/router';
import { STORAGES } from 'src/app/redux/interfax/sotarage';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  dataArt:any = {
    descripcion:"<p>descripcion</p>",
    comentarios: [{}],
    categorias: [{name:"mouser"},{name:"lg"}],
    user:{id:1}
  };
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    // spacebetween: -5
  };
  slideProductos = {
    slidesPerView: 1.0,
    freeMode: true,
    spacebetween: -5
  };
  estrella = 'star-outline';
  dataStore:any = [];
  constructor(
    // private moviesService: MoviesService,
    private modalCtrl: ModalController,
    public dataLocal: DataLocalService,
    private router: Router,
    private _store: Store<STORAGES>
  ) { 
    this.StoreData();
  }

  async ngOnInit() {
    console.log(this.id);
    // const existe = await this.detaLocal.existePelicula( this.id );
    // if(existe) this.estrella = 'star';
    // this.moviesService.getPeliculaDetalle( this.id )
    // .subscribe((res)=>this.pelicula = res);

    // this.moviesService.getActoresPelicula( this.id )
    // .subscribe((res)=>this.actores = res.cast);
  }
  StoreData(){
    this._store.forEach(row=>this.dataStore= row['name']);
  }
  regresar(){
    this.modalCtrl.dismiss();
  }


  favorito(){
    // this.detaLocal.guardarPelicula( this.pelicula );
  }
  async data_chat(){
    // if(Object.keys(this.data_user2).length === 0) this._Dialog_login.open_login();
    let data:any = {
      id: this.dataArt.id || 1,
      titulo: this.dataArt.titulo || 'prueba',
      foto: this.dataArt.foto || '',
      costopromosion: this.dataArt.costopromosion || 2000,
      costoventa: this.dataArt.costoventa || 3000
    };
    // console.log(this.data)
    let resultado = await this.dataLocal.articuloSeleccion(data);
    if(resultado == 'ok') {this.router.navigate(['/chat_view', this.dataArt.user.id]); this.regresar();}
    return false;
  }

}
