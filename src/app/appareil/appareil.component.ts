import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
   @Input() appareilName:string;
   @Input() appareilStatus:string;
   @Input() indexOfAppareil:number;
   @Input() id:number;
   isAuth = false;

  constructor(private appareilService :AppareilService) {
     setTimeout(
           () => {
             this.isAuth = true;
           }, 4000
         );
}

  ngOnInit() {
  }

   getStatus(){
      return this.appareilStatus;
   }
   getColor(){
      if(this.appareilStatus === 'allumé'){
         return "Green"
      }else if(this.appareilStatus === 'éteint'){
         return 'Red'
      }
   }

   onSwitchOn(){
    this.appareilService.switchOn(this.indexOfAppareil)
   }
   onSwitchOff(){
    this.appareilService.switchOff(this.indexOfAppareil)
   }
   onSwitch(){
      if(this.appareilStatus === 'allumé'){
         this.appareilService.switchOff(this.indexOfAppareil);
      }else if(this.appareilStatus === 'éteint'){
         this.appareilService.switchOn(this.indexOfAppareil);
      }
   }
}
