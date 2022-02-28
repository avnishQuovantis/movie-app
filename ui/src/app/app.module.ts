import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';

import { TypeComponent } from './type/type.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SharedModule } from './Shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    MenuComponent,

    WatchlistComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
