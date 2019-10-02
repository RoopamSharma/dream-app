import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-favcomp',
  templateUrl: './favcomp.component.html',
  styleUrls: ['./favcomp.component.css']
})
export class FavcompComponent implements OnInit {
  @Input()
  isFavorite = false;
  constructor() { }

  ngOnInit() {
  }
 onClick(){
     this.isFavorite = !this.isFavorite;
 }
}
