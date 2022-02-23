import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetchService } from '../data-fetch.service';
import {WatchListService} from "../watchlist/watchlist.service";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  item: {} = {};
  constructor(
    private route: ActivatedRoute,
    private dataFetch: DataFetchService,
    private watchlistService:WatchListService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      let id = params['id'];
      this.dataFetch.getItem(id).subscribe((data) => {
        this.item = data['data'];
      });
    });
  }
  addWatchList(item){
    this.watchlistService.addToWatchlist(item);
    
  }
}
