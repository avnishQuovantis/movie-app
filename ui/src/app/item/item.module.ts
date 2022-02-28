import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFetchService } from '../data-fetch.service';
import { SharedModule } from '../Shared/shared.module';
import { ItemResolver } from './item-resolver.service';
import { ItemComponent } from './item.component';
const route: Routes = [
  {
    path: ':id',
    component: ItemComponent,
    resolve: { item: ItemResolver },
  },
];
@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class ItemModule {}
