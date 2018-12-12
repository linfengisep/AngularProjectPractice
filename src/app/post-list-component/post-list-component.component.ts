import { Component, Input,OnInit ,OnDestroy} from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit,OnDestroy {
   isAuth=false;
   postArr: any[];

   postSubscription:Subscription;
   constructor(private postService:PostService,private router:Router) {
      setTimeout(
         ()=>{
         this.isAuth = true;
      },4000);
   }

   ngOnInit() {
      this.postSubscription = this.postService.postsSubject.subscribe(
         (posts:any[])=>{
            this.postArr = posts;
         });
      this.postService.emitpostsSubject();
   }

   onAddPost(){
      this.router.navigate(['/new'])
   }
   ngOnDestroy(){
      this.postSubscription.unsubscribe();
   }
}
