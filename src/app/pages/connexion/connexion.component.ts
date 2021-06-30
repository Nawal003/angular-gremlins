import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserI } from 'src/app/system/models/user-i';
import { AuthService } from 'src/app/system/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: UserI = <UserI>{};

  constructor(public authServ: AuthService) { }

  ngOnInit(): void {

  }
  logUser() {

    console.log(this.user);

  }
  //fonction appelée par le html pour valider le formulaire 
  valideID() {
    // console.log(this.user);
    // console.log("service", this.authServ);
    this.authServ.getID(this.user);


  }

}
