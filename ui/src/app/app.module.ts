import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HomeListComponent } from './home/home-list/home-list.component';
import { CatagoriesComponent } from './catagories/catagories.component';

import { MenuComponent } from './menu/menu.component';
import { CatagoryComponent } from './catagories/catagory/catagory.component';
import { GenreComponent } from './catagories/genre/genre.component';
import { CatagoriesListComponent } from './catagories/catagories-list/catagories-list.component';
import { TypeComponent } from './catagories/type/type.component';
import { CorouselListComponent } from './couresel/list/list.component';
import { ShortendPipe } from './pipes/shortend.pipe';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { DropdownComponent } from './menu/dropdown/dropdown.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CorouselListComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HomeListComponent,

    CatagoriesComponent,
    MenuComponent,
    CatagoryComponent,
    GenreComponent,
    CatagoriesListComponent,
    TypeComponent,
    ShortendPipe,
    ItemComponent,
    SearchComponent,
    WatchlistComponent,
    DropdownComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
