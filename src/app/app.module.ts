import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { BloodBanksComponent } from './blood-banks/blood-banks.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    BloodBanksComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
