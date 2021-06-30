import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilI } from '../models/profil-i';
import { UserI } from '../models/user-i';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  erreurHttp:string='';
  profil:ProfilI=<ProfilI>{};



  constructor(private http: HttpClient) { }
  getID(user: UserI) {
    this.http.get<ProfilI>(`assets/ids/${user.identifiant}@${user.motdepasse}.json`).subscribe(data => {
      this.profil=data;
      console.log(this.profil);
      
      this.erreurHttp = '';

    },
    erreur=>{
      this.erreurHttp="erreur ("+erreur+")";
    });
  } 
  deconnexion(){
    this.profil=<ProfilI>{};
  }

}
