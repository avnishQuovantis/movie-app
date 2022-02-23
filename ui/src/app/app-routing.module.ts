import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeResolverService } from './home/home-resolver.service';
import { HomeComponent } from './home/home.component';
import { CatagoryComponent } from './catagories/catagory/catagory.component';
import { GenreComponent } from './catagories/genre/genre.component';
import { CatagoriesListComponent } from './catagories/catagories-list/catagories-list.component';

import { CatagoriesComponent } from './catagories/catagories.component';
import { TypeComponent } from './catagories/type/type.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchListResolver } from './watchlist/watchlist-resolver.service';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { homeData: HomeResolverService },
  },
  {
    path: 'catagories',
    component: CatagoriesComponent,
    children: [
      { path: 'type/:id', component: TypeComponent },
      {
        path: 'catagory',
        component: CatagoryComponent,
      },
      { path: 'catagory/:id', component: GenreComponent },
      { path: ':id', component: CatagoriesListComponent },
    ],
  },
  { path: 'search/:id', component: SearchComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'watchlist',
    component: WatchlistComponent,
    resolve: [WatchListResolver],
  },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
