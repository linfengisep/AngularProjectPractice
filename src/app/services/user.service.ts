import { Subject } from 'rxjs';
import { User } from '../models/User.model';

export class UserService{
   private users:User[] = [
      {
         firstName:'James',
         lastName:'Smiths',
         email:'james@smiths.com',
         drinkPreference:'Coca',
         hobbies : [
               'coder',
               'programmer'
            ]
      }
   ];
   userSubject = new Subject<User[]>();

   emitUsers(){
      this.userSubject.next(this.users.slice());
   }

   addUser(user:User){
      this.users.push(user);
      this.emitUsers();
   }
}
