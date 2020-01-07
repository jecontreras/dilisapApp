import { NAMEAPP } from './nameapp';
import { ARTICULOS } from './articulos';
import { MENSAJES } from './mensajes';
import { MENSAJESINIT } from './mensajesInit';
import { NOTIFICACIONES } from './notificaciones';
import { COMENTARIOS } from './comentario';
import { COMPRAS } from './compras';
import { USER } from './user';

export interface STORAGES {
    nameapp?: {},
    articulos?: ARTICULOS[],
    mensajes?: MENSAJES[],
    mensajes_init?: MENSAJESINIT[],
    notificaciones?: NOTIFICACIONES[],
    comentarios?: COMENTARIOS[],
    compras?: COMPRAS[],
    cart?: CART[],
    favorito?: FAVORITO[],
    user?: {},
    usuario?: {},
    search?: {},
    eventos?: EVENTOS[],
    categoria?: CATEGORIA[],
    subasta?: SUBASTA[],
    negocios?: NEGOCIO[],
    articulo_select?: {}
};
export interface CART{

};
export interface FAVORITO{

};
export interface SEARCH{

};
export interface EVENTOS{

};
export interface CATEGORIA{

};
export interface SUBASTA{

};
export interface NEGOCIO{

};
export interface ARTICULO_SELECT{

};