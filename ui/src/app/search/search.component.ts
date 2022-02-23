import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchItem = [];
  constructor(private menu: MenuService, private dataFetch: DataFetchService) {}

  ngOnInit(): void {
    this.menu.searchService.subscribe((search) => {
      console.log(search);
      this.dataFetch.getSearchItem(search).subscribe((searchItems) => {
        console.log(searchItems);
        this.searchItem = searchItems['data'];
      });
    });
  }
}
