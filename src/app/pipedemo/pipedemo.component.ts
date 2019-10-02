import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
   userdata = {
       name:"Roopam",
       income: 1234,
       rating: 4.7687,
       doj: new Date('11/11/11')
   }
  constructor() { }

  ngOnInit() {
  }

}
