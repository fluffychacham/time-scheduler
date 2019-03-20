import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCardComponent } from './date-card/date-card.component';
import { TopBarMenuComponent } from './top-bar-menu/top-bar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCardComponent,
    TopBarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
