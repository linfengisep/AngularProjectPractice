import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';

import { AppareilService } from './services/appareil.service';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes : Routes = [
   {path:'appareils' , component:AppareilViewComponent },
   {path:'auth' , component:AuthComponent },
   {path:'' , component:AppareilViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule{
}
