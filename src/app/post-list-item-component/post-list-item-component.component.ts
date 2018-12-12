import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
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
   @Input() postId : number;

   constructor(private postService:PostService) { }

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

   onDeletePost(id:number){
      console.log("click post to delete"+id);
      this.postService.posts.splice(0,1);
      this.postService.emitpostsSubject();
   }
}
