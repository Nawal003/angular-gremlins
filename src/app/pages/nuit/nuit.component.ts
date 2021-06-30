import { Component, OnInit } from '@angular/core';
import { GremlinsI } from 'src/app/system/models/gremlins';
import { GremlinsService } from 'src/app/system/services/gremlins.service';

@Component({
  selector: 'app-nuit',
  templateUrl: './nuit.component.html',
  styleUrls: ['./nuit.component.css']
})
export class NuitComponent implements OnInit {

  

  constructor(public gremlinsServ:GremlinsService) {};

  ngOnInit(): void {
    
  }
  logGremlins(g:GremlinsI){
    console.log(g);
    

  }
}
