export class AppareilService{
   appareils =[
      {
         name :'Ordinateur',
         status:'éteint'
      },
      {
         name :'téléphone',
         status:'allumé'
      },
      {
         name :'éclairage',
         status:'allumé'
      }
   ];

   switchOnAll(){
      for(let appareil of this.appareils){
         appareil.status = 'allumé'
      }
   }
   switchOffAll(){
      for(let appareil of this.appareils){
         appareil.status = 'éteint'
      }
   }
   switchOn(index:number){
      this.appareils[index].status ='allumé'
   }
   switchOff(index:number){
      this.appareils[index].status ='éteint'
   }
}
