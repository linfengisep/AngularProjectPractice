import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';

import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes : Routes = [
   {path:'posts' , canActivate:[AuthGuard],component:PostListComponentComponent },
   {path:'new' , canActivate:[AuthGuard],component:NewPostComponent },
   {path:'auth' , component:AuthComponent },
   {path:'' , component:PostListComponentComponent},
   {path:'not-found' , component:PageNotFoundComponent },
   {path:'**' , redirectTo:'/not-found' },
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    PageNotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AppareilService,PostService,AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule{
}
