import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  disable: boolean = false;
  transform( img: string, size: string = "w500"): string {
    if(!img) return "./assets/no_image.jpg";
    this.disable = !this.disable;
    // if(this.disable) console.log(this.disable);
    const imgUrl = `${ URL }${ size }${ img }`;
    return imgUrl;
  }

}