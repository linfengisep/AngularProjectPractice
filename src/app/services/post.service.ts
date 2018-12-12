import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
   postsSubject = new Subject<any[]>();
   public posts = [
       {
          id:1,
          title: 'Gilet jaune',
          content: 'il y a des manifestation très grave à Avenue Champs-Élysé aujourd\'hui',
          loveIts: 2,
          created_at:Date.now()
       },
       {
          id:2,
          title: 'Jamal Khashoggi',
          content: 'une tragidie très grave commis par les service des enseignements saoudiens.',
          loveIts: -1,
          created_at:new Date(2018, 11, 17)
       },
       {
          id:3,
          title: 'Brexit',
          content: 'Jour de divorce en Europe pour l\'Angleterre',
          loveIts: 1,
          created_at:new Date(2018, 11, 17)
       } ];
   constructor() { }
   emitpostsSubject(){
      this.postsSubject.next(this.posts.slice());
   }

   likeThisPost(index:number){
      this.posts[index].loveIts++;
      this.emitpostsSubject();
   }
   dislikeThisPost(index:number){
      this.posts[index].loveIts--;
      this.emitpostsSubject();
   }

   deletePost(id:number){
      //console.log("click post to delete"+id);
      this.posts.splice(id,1);
      this.emitpostsSubject();
   }
}
