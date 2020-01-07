import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'chat_view/:id',
    loadChildren: () => import('./pages/chat-view/chat-view.module').then(m => m.ChatViewPageModule)
  },
  {
    path: 'chequiar',
    loadChildren: () => import('./pages/chequiar/chequiar.module').then(m => m.ChequiarPageModule)
  },
  {
    path: 'comprados',
    loadChildren: () => import('./pages/comprados/comprados.module').then(m => m.CompradosPageModule)
  },
  {
    path: 'guardados',
    loadChildren: () => import('./pages/guardados/guardados.module').then(m => m.GuardadosPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./pages/ofertas/ofertas.module').then(m => m.OfertasPageModule)
  }
  ,
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
