import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes : Routes = [
   {path:'posts' , canActivate:[AuthGuard],component:PostListComponent },
   {path:'new' , canActivate:[AuthGuard],component:NewPostComponent },
   {path:'auth/signin',component:SigninComponent },
   {path:'auth/signup',component:SignupComponent },
   {path:'', redirectTo:'/posts',pathMatch:'full'},
   {path:'not-found' , component:PageNotFoundComponent },
   {path:'**' , redirectTo:'/not-found' },
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PageNotFoundComponent,
    NewPostComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PostService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule{
}
