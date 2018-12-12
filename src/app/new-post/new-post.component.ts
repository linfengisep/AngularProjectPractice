import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
   postForm:FormGroup;
   constructor(private formBuilder:FormBuilder,
               private route:Router) { }

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

   }
}
