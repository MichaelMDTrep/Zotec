// Metadata: Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires
// Some of it is in the @component decorators that you add to the classes
//  Others are in the NGmodule decorators
// Most important @NgModule decorator annotates the top level app module class
// Annotation term used to refer to documentation and comments that may be found in code logic. Usually an explanation of the rationale behind the logic or even an explanation is included within the code
// Every component is declared in exactly one NGModule


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
