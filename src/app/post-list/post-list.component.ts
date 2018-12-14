import { Component, Input,OnInit ,OnDestroy} from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
   postArr: any[];
   postSubscription:Subscription;
   constructor(private postService:PostService,private router:Router) {
   }

   ngOnInit() {
      this.postSubscription = this.postService.postsSubject.subscribe(
         (posts:any[])=>{
            this.postArr = posts;
         });
      this.postService.emitPosts();
   }

   onAddPost(){
      this.router.navigate(['/new'])
   }

   onSave(){
      this.postService.savePost();
   }

   onFetch(){
      this.postService.fetchPost();
   }
   ngOnDestroy(){
      this.postSubscription.unsubscribe();
   }
}
