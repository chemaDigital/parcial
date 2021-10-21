import { Component, OnInit } from '@angular/core';
import { jamesRodriguez, jamesService } from 'src/app/service/james.service';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html'
})
export class JamesComponent implements OnInit {
  jamesR:jamesRodriguez[]=[];
  constructor(private serviciosJames:jamesService) { }

  ngOnInit(): void {
    this.jamesR=this.serviciosJames.getjames();
  }

}
