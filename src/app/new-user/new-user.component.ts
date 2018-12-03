import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private userService:UserService,
              private route:Router) { }

  ngOnInit() {
   this.initForm();
  }

  initForm(){
   this.userForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      drinkPreference:['',Validators.required],
      hobbies:this.formBuilder.array([])
   });
  }

  onSubmitForm(){
   const formValue = this.userForm.value;
   const user = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies']?formValue['hobbies']:[]
   );
   this.userService.addUser(user);
   this.route.navigate(['/users']);
  }

   getHobbies(){
      return this.userForm.get('hobbies') as FormArray;
   }
   onAddHobby(){
    const newHobby = this.formBuilder.control('',Validators.required);
    this.getHobbies().push(newHobby);
   }
}
