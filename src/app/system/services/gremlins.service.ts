import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GremlinsI } from '../models/gremlins';

@Injectable({
  providedIn: 'root'
})
export class GremlinsService {

  gremlins: Array<GremlinsI>;

  constructor(private http: HttpClient) {
    this.gremlins = [];
    this.getGrimlins();
  }

  //appeler les données externes
  getGrimlins() {
    this.http.get<Array<GremlinsI>>('assets/gremlins/gremlins.json').subscribe(data => {
      console.log("données json", data);
      this.gremlins = data
    });
  }

}
