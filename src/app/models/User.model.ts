export class User{
   constructor(public firstName:string,
               public lastName:string,
               public email:string,
               public drinkPreference,
               public hobbies?:string[]){}
}
