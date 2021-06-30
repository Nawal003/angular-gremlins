import { Component, OnInit } from '@angular/core';
import { GremlinsService } from 'src/app/system/services/gremlins.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  constructor(public gremlinServ:GremlinsService) { }

  ngOnInit(): void {
  }

}
