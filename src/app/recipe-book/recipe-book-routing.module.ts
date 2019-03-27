import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from '../shopping-list/list/list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'detail', component: DetailComponent },
      { path: 'item', component: ItemComponent },
      { path: 'list', component: ListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule { }
