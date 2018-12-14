import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class PostService {
   postsSubject = new Subject<Post[]>();
   public posts:Post[]=[];
   constructor() { }
   emitPosts(){
      this.postsSubject.next(this.posts.slice());
   }

   savePost(){
      firebase.database().ref('/posts').set(this.posts);
   }

   fetchPost(){
      firebase.database().ref('/posts').on('value',
         (data)=>{
            this.posts = data.val()? data.val():[];
            this.emitPosts();
      })
   }

   likeThisPost(idPost:number){
      const postIndexIncrease = this.posts.findIndex(
         (postElement)=>{
            if(postElement.postId === idPost){
               return true;
            }
         }
      )
      this.posts[postIndexIncrease].postLoveIts++;
      this.emitPosts();
   }
   dislikeThisPost(idPost:number){
      const postIndexDecrease = this.posts.findIndex(
         (postElement)=>{
            if(postElement.postId === idPost){
               return true;
            }
         }
      );
      this.posts[postIndexDecrease].postLoveIts--;
      this.emitPosts();
   }

   deletePost(idPost:number){
      const postIndexToDel = this.posts.findIndex(
         (postElement)=>{
            if(postElement.postId === idPost){
               return true;
            }
         }
      );

      this.posts.splice(postIndexToDel,1);
      this.emitPosts();
   }

   addPost(post:Post){
      this.posts.push(post);
      this.emitPosts();
   }
}
