import { Component,OnInit ,OnDestroy} from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
   //seconds:number;
   counterSubscription : Subscription;
   constructor(){}
   ngOnInit(){
      /*const counter = interval(1000);
      this.counterSubscription = counter.subscribe(
         (values:number)=>{
            this.seconds = values;
         }
      );*/
   }

   ngOnDestroy(){
      this.counterSubscription.unsubscribe();
   }

}
