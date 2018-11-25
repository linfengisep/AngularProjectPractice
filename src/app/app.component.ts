import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
   constructor(){}
}
