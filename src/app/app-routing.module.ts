import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterGremlinsComponent } from './pages/ajouter-gremlins/ajouter-gremlins.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DelugeComponent } from './pages/deluge/deluge.component';
import { GizmoComponent } from './pages/gizmo/gizmo.component';
import { JourComponent } from './pages/jour/jour.component';
import { MogwaiComponent } from './pages/mogwai/mogwai.component';
import { NuitComponent } from './pages/nuit/nuit.component';
import { Erreur404Component } from './system/erreur404/erreur404.component';
import { AuthGuard } from './system/security/auth.guard';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'jour', component: JourComponent, children: [
      { path: 'mogwai', component: MogwaiComponent },
      { path: 'mogwai/:heidi', component: MogwaiComponent },
      { path: 'gizmo', component: GizmoComponent }


    ]
  },
  { path: 'nuit', component: NuitComponent },
  { path: 'deluge', component: DelugeComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'Ajouter', component: AjouterGremlinsComponent },
  { path: 'contact', component: ContactComponent },
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard], canLoad:[AuthGuard]},
  { path: '**', component: Erreur404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
