import { Component, OnInit } from '@angular/core';
import { AppareilService} from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
   posts = [
      {
         title: 'Gilet jaune',
         content: 'il y a des manifestation très grave à Avenue Champs-Élysé aujourd\'hui',
         loveIts: 2,
         created_at:Date.now()
      },
      {
         title: 'Jamal Khashoggi',
         content: 'une tragidie très grave commis par les service des enseignements saoudiens.',
         loveIts: -1,
         created_at:new Date(2018, 11, 17)
      },
      {
         title: 'Brexit',
         content: 'Jour de divorce en Europe pour l\'Angleterre',
         loveIts: 1,
         created_at:new Date(2018, 11, 17)
      }
   ];
   isAuth = false;
   appareils:any[];
   appareilSubscription:Subscription;

   constructor(private appareilService :AppareilService){
      setTimeout(
         ()=>{
         this.isAuth = true;
      },4000);
   }

   ngOnInit(){
      this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
         (appareils:any[])=>{
            this.appareils = appareils;
         }
      );
      this.appareilService.emitAppareilSubject();
   }

   putAllOn(){
      this.appareilService.switchOnAll();
   }

   putAllOff(){
      if(confirm('Etes vous sur d\'éteindre tous les apparails?')){
         this.appareilService.switchOffAll();
      }else{
         return null;
      }
   }

}
