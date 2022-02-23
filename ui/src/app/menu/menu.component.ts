import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuStatus = false;
  moviesStatus = false;
  seriesStatus = false;
  user = null;
  constructor(
    private menuService: MenuService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.menuService.menuStatus.subscribe((status) => {
      this.menuStatus = status;
    });
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }
  openSubMenu(status) {
    if (status === 'movieStatus') {
      this.moviesStatus = !this.moviesStatus;
    } else {
      this.seriesStatus = !this.seriesStatus;
    }
  }
}
