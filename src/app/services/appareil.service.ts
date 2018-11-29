export class AppareilService{
   appareils =[
      {
         id:1,
         name :'Ordinateur',
         status:'éteint'
      },
      {
         id:2,
         name :'téléphone',
         status:'allumé'
      },
      {
         id:3,
         name :'éclairage',
         status:'allumé'
      }
   ];

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
