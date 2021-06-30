import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { ContactComponent } from './contact/contact.component';
import { EditionAlerteComponent } from './edition-alerte/edition-alerte.component';
import { EditionComponent } from './edition/edition.component';
import { UsersEditionComponent } from './users-edition/users-edition.component';

const routes: Routes = [
  {path:'', component:AdminAccueilComponent, children:[
  {path:'contact', component:ContactComponent},
  {path:'edition', component:EditionComponent},
  {path:'alerte', component:EditionAlerteComponent},
  {path:'users', component:UsersEditionComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
