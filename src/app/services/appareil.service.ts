import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService{
   appareilSubject = new Subject<any[]>();

   private appareils =[];
   constructor(private httpClient:HttpClient){}
   emitAppareilSubject(){
      this.appareilSubject.next(this.appareils.slice());
   }

   getAppareilById(id:number){
      const appareil = this.appareils.find(
         (appareilObj)=>{
            return appareilObj.id === id;
         }
      );
      return appareil;
   }

   switchOnAll(){
      for(let appareil of this.appareils){
         appareil.status = 'allumé'
      }
      this.emitAppareilSubject();
   }
   switchOffAll(){
      for(let appareil of this.appareils){
         appareil.status = 'éteint'
      }
      this.emitAppareilSubject();
   }
   switchOn(index:number){
      this.appareils[index].status ='allumé'
      this.emitAppareilSubject();
   }
   switchOff(index:number){
      this.appareils[index].status ='éteint'
      this.emitAppareilSubject();
   }

   addAppareil(name:string,status:string){
      const appareilObject = {
         id:0,
         name:'',
         status:''
      };

      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length-1)].id+1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
   }

   saveDeviceToServer(){
      this.httpClient.put('https://http-client-demo-a06a3.firebaseio.com/appareils.json',this.appareils)
          .subscribe(
            ()=>{
              console.log("save is ok.");
            },
            (error)=>{
              console.log("error"+error);
         }
      )
   }

   getDeviceFromServer(){
      this.httpClient
         .get<any[]>('https://http-client-demo-a06a3.firebaseio.com/appareils.json')
         .subscribe(
            (response)=>{
               this.appareils = response;
               this.emitAppareilSubject();
            },
            (error)=>{
               console.log('error'+error);
            }
      )
   }
}
