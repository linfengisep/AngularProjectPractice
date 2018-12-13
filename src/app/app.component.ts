import { Component,OnInit ,OnDestroy} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   constructor(){
      var config = {
        apiKey: "AIzaSyCdnhr3F-kCm8PFxFp1NGLHkfzzDtQBBqs",
        authDomain: "post-83eaa.firebaseapp.com",
        databaseURL: "https://post-83eaa.firebaseio.com",
        projectId: "post-83eaa",
        storageBucket: "post-83eaa.appspot.com",
        messagingSenderId: "696139974324"
      };
         firebase.initializeApp(config);
   }
   ngOnInit(){
   }

}
