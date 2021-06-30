import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { JourComponent } from './pages/jour/jour.component';
import { NuitComponent } from './pages/nuit/nuit.component';
import { DelugeComponent } from './pages/deluge/deluge.component';
import { Erreur404Component } from './system/erreur404/erreur404.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { GremlinsService } from './system/services/gremlins.service';
import { ContactComponent } from './pages/contact/contact.component';
import { AjouterGremlinsComponent } from './pages/ajouter-gremlins/ajouter-gremlins.component';
import { GremlinComponent } from './pages/gremlin/gremlin.component';
import { GizmoComponent } from './pages/gizmo/gizmo.component';
import { MogwaiComponent } from './pages/mogwai/mogwai.component';
import { AuthService } from './system/services/auth.service';
import { ConnexionService } from './system/services/connexion.service';
import { MechantsPipe, NomsPipe } from './system/filtres/mechants.pipe';
import { AuthInterceptor } from './system/security/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    JourComponent,
    NuitComponent,
    DelugeComponent,
    Erreur404Component,
    ConnexionComponent,
    ContactComponent,
    AjouterGremlinsComponent,
    GremlinComponent,
    GizmoComponent,
    MogwaiComponent,
    MechantsPipe,
    NomsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GremlinsService, AuthService, ConnexionService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
