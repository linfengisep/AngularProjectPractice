import { Component, OnInit } from '@angular/core';
import { AppareilService} from '../services/appareil.service';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
   postsss = [
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
   posts=[];
   isAuth = false;
   appareils:any[];
   appareilSubscription:Subscription;

   constructor(private appareilService :AppareilService,private postService:PostService){
      setTimeout(
         ()=>{
         this.isAuth = true;
      },4000);
   }

   ngOnInit(){
      this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
         (mAppareils:any[])=>{
            this.appareils = mAppareils;
         }
      );
      this.appareilService.emitAppareilSubject();

      //this.posts = this.postService.posts;
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

   onSave(){
      this.appareilService.saveDeviceToServer();
   }

   onFetch(){
      this.appareilService.getDeviceFromServer();
   }
}
