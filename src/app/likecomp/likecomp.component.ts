import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-likecomp',
  templateUrl: './likecomp.component.html',
  styleUrls: ['./likecomp.component.css']
})
export class LikecompComponent implements OnInit {
   isLike = false;
   @Input()
   totalLikes = 0;
   onClick(){
       this.isLike = !this.isLike;
       this.totalLikes +=  this.isLike?1:-1;
   }
  constructor() { }

  ngOnInit() {
  }

}
