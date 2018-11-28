import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
   @Input() appareilName:string;
   @Input() appareilStatus:string;
   @Input() indexOfAppareil:number;

  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }

   onSwitchOn(){
    this.appareilService.switchOn(this.indexOfAppareil)
   }
   onSwitchOff(){
    this.appareilService.switchOff(this.indexOfAppareil)
   }
}
