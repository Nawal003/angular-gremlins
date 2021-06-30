import { Component, OnInit } from '@angular/core';
import { GremlinsI } from 'src/app/system/models/gremlins';

@Component({
  selector: 'app-ajouter-gremlins',
  templateUrl: './ajouter-gremlins.component.html',
  styleUrls: ['./ajouter-gremlins.component.css']
})
export class AjouterGremlinsComponent implements OnInit {
  ajouter:GremlinsI = <GremlinsI>{};
  constructor() { }

  ngOnInit(): void {
  }
  

}
