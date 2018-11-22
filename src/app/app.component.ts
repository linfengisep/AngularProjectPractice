import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isAuth = false;
   lastUpdate = new Promise((resolve,reject)=>{
   const date = new Date();
   setTimeout(()=>{resolve(date);},2000);
   });

   appareilOne = 'Machine à laver';
   appareilTwo = 'Frigo';
   appareilThree = 'Ordinateur';

   appareilStatusOn = "allumé"
   appareilStatusOff = "éteint"
//define an array manuelly
   appareils = [
      {
         name:'machine à café',
         status:'éteint'
      },
      {
         name:'machine à laver',
         status:'allumé'
      },
      {
         name:'machine à verseille',
         status:'éteint'
      }
   ];

   constructor(){
      setTimeout(
         ()=>{
               this.isAuth = true;
            },4000
      );
   }
   onLight(){
      console.log("tout allumé.");
   }
}
