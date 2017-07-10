import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ])
  ],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent,DashboardComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }