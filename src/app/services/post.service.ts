import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   postsSubject = new Subject<Post[]>();
   public posts:Post[] = [
       {
          postId:1,
          postTitle: 'Gilet jaune',
          postContent: 'il y a des manifestation très grave à Avenue Champs-Élysé aujourd\'hui',
          postLoveIts: 2,
          postCreation:Date.now()
       }];
   constructor() { }
   emitpostsSubject(){
      this.postsSubject.next(this.posts.slice());
   }

   likeThisPost(index:number){
      this.posts[index].postLoveIts++;
      this.emitpostsSubject();
   }
   dislikeThisPost(index:number){
      this.posts[index].postLoveIts--;
      this.emitpostsSubject();
   }

   deletePost(id:number){
      //console.log("click post to delete"+id);
      this.posts.splice(id,1);
      this.emitpostsSubject();
   }

   addPost(post:Post){
      this.posts.push(post);
   }
}
