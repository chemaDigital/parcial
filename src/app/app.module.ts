import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { JamesComponent } from './components/james/james.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { RonaldofooterComponent } from './components/ronaldofooter/ronaldofooter.component';
import { RonaldoheaderComponent } from './components/ronaldoheader/ronaldoheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JamesComponent,
    MessiComponent,
    RonaldoComponent,
    RonaldofooterComponent,
    RonaldoheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
