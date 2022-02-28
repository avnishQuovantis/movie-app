import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataFetchService } from '../data-fetch.service';

@Injectable({ providedIn: 'root' })
export class ItemService {
  item = new BehaviorSubject<any>(null);
  constructor(private dataFetch: DataFetchService) {}
  setItem(id) {
    return this.dataFetch.getItem(id).subscribe((data) => {
      console.log(data['data']);
      this.item.next(data['data']);
    });
  }
}
