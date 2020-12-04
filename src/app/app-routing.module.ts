import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './root/pages/content/content.component';
import { Error403Component } from './root/pages/error/error403/error403.component';
import { Error404Component } from './root/pages/error/error404/error404.component';
import { InitialComponent } from './root/pages/initial/initial.component';
import { LoginComponent } from './root/pages/login/login.component';
import { RegisterComponent } from './root/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: InitialComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: 'error403',
    component: Error403Component
  },
  {
    path: 'home',
    component: ContentComponent,
    children: [ 
      {
        path: '',
        loadChildren: () => import('../app/modules/productos/productos.module').then(m => m.ProductosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
