import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
   @Input() postTitle:string;
   @Input() postContent:string;
   @Input() postLoveIts:number;
   @Input() postCreation:Date;

  constructor() { }

  ngOnInit() {
  }

  increase(){
      this.postLoveIts++;
      console.log("increasing:"+this.postLoveIts);
}

  decrease(){
      this.postLoveIts--;
      console.log("decreasing:"+this.postLoveIts)
}

}