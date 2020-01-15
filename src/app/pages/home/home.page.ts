import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Genre } from 'src/app/interfas/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listCategoria: Genre[]=[];
  constructor(
    private _Categoria: CategoriaService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getlistCategoria();
  }
  getlistCategoria(){
    console.log("HP")
    this._Categoria.getCategoria({})
    .subscribe(rta=>{
      console.log(rta); 
      this.listCategoria = rta['genres'];
    });
  }
  siguiente(){
    this.router.navigate(['/home']);
  }

}
