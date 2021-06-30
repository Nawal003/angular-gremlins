import { Component, OnInit } from '@angular/core';
import { AlerteGremlins } from 'src/app/system/models/alerte-gremlins';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  alerte:AlerteGremlins = <AlerteGremlins>{};

  constructor() { }

  ngOnInit(): void {
  }
  log(){
    alert(this.alerte)  }
}
