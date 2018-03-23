import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';

import {RouterModule, Routes} from '@angular/router';

import {FormsModule} from '@angular/forms';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path:'about', component: AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
