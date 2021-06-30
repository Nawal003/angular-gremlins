"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var accueil_component_1 = require("./accueil/accueil.component");
var menu_component_1 = require("./menu/menu.component");
var footer_component_1 = require("./footer/footer.component");
var jour_component_1 = require("./pages/jour/jour.component");
var nuit_component_1 = require("./pages/nuit/nuit.component");
var deluge_component_1 = require("./pages/deluge/deluge.component");
var erreur404_component_1 = require("./system/erreur404/erreur404.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                accueil_component_1.AccueilComponent,
                menu_component_1.MenuComponent,
                footer_component_1.FooterComponent,
                jour_component_1.JourComponent,
                nuit_component_1.NuitComponent,
                deluge_component_1.DelugeComponent,
                erreur404_component_1.Erreur404Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                httpClienModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
