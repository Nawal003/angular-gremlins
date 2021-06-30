import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditionComponent } from './edition/edition.component';
import { UsersEditionComponent } from './users-edition/users-edition.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { EditionAlerteComponent } from './edition-alerte/edition-alerte.component';
import { ContactComponent } from './contact/contact.component';
import { GremlinsEditionService } from './system/services/gremlins-edition.service';


@NgModule({
  declarations: [EditionComponent, UsersEditionComponent, AdminAccueilComponent, EditionAlerteComponent, ContactComponent],
  providers:[GremlinsEditionService],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
