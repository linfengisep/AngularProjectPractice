import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
   postForm:FormGroup;
   constructor(private formBuilder:FormBuilder,
               private postService:PostService,
               private router:Router) { }

   ngOnInit() {
      this.initForm();
   }

   initForm(){
      this.postForm = this.formBuilder.group({
         title:['',Validators.required],
         content:['',Validators.required]
      });
   }
   onSubmitForm(){
      const formValue = this.postForm.value;
      let newPostId = 0;
      if(this.postService.posts.length !== 0){
         newPostId = this.postService.posts[(this.postService.posts.length-1)].postId+1;
      }
      const loveIts = 0;
      const newPost = new Post(
               newPostId,
               formValue['title'],
               formValue['content'],
               loveIts,
               Date.now()
      )
      this.postService.addPost(newPost);
      this.router.navigate(['/posts']);
   }
}
