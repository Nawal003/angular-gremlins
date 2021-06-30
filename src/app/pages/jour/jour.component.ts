import { Component, OnInit } from '@angular/core';
import { GremlinsI } from 'src/app/system/models/gremlins';
import { GremlinsService } from 'src/app/system/services/gremlins.service';

@Component({
  selector: 'app-jour',
  templateUrl: './jour.component.html',
  styleUrls: ['./jour.component.css']
})
export class JourComponent implements OnInit {

  bool: boolean = false; // Un booléen qui va servir à afficher la route enfant
  debut = 0;
  fin = 4;
  ecart = 4;
  tri:string='';
  triNom:string='';

  constructor(public gremlinsServ: GremlinsService) { };

  ngOnInit(): void {
    console.log(this.gremlinsServ);
  }
  // Affihcher des données envoyées par le gremlins quand on clique dessus
  logGremlins(g: GremlinsI) {
    console.log(g);
  }
  logTri(){
    console.log((this.tri));
    
  }
  paginationPlus() {
    if (this.fin < this.gremlinsServ.gremlins.length) {
      this.debut += this.ecart;
      this.fin += this.ecart;
    }
    console.log(this.debut, this.fin);
  }
  paginationMoins() {
    if (this.debut > this.ecart) {
      this.debut -= this.ecart;
      this.fin -= this.ecart;
    }
    console.log(this.debut, this.fin);
  }
}
