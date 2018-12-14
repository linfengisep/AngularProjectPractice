import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
   @Input() postTitle:string;
   @Input() postContent:string;
   @Input() postLoveIts:number;
   @Input() postCreation:Date;
   @Input() postId : number;

   constructor(private postService:PostService) { }

   ngOnInit() {
  }

   increase(idPost:number){
      this.postService.likeThisPost(idPost);
   }

   decrease(idPost:number){
      this.postService.dislikeThisPost(idPost);
   }

   onDeletePost(idPost:number){
     this.postService.deletePost(idPost);
   }
}
