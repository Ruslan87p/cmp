import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoarComponent } from './boar/boar.component';
import { ChipDirective } from './chip.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoarComponent,
    ChipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
