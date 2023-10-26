import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { E404Guard } from './guards/e404.guard'; // Importa el guard
import { E404Page } from './e404/e404.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'experiencia-laboral',
    component: ExperienciaLaboralComponent
  },
  {
    path: 'mis-datos',
    component: MisDatosComponent
  },
  {
    path: 'certificaciones',
    component: CertificacionesComponent
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then(m => m.E404PageModule)
  },
  {
    path: 'botonesseg',
    loadChildren: () => import('./botonesseg/botonesseg.module').then(m => m.BotonessegPageModule)
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [E404Guard], // Agrega el guard a los providers
})
export class AppRoutingModule { }
