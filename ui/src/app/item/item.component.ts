import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetchService } from '../data-fetch.service';
import { WatchListService } from '../watchlist/watchlist.service';
import { ItemService } from './item.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  item: {} = {};
  constructor(
    private itemService: ItemService,
    private watchlistService: WatchListService
  ) {}
  ngOnInit(): void {
    this.itemService.item.subscribe((item) => {
      console.log(item);
      this.item = item;
    });
  }

  addWatchList(item) {
    this.watchlistService.addToWatchlist(item);
  }
}
