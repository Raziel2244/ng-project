import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, ItemComponent, DetailComponent],
  imports: [
    CommonModule,
    RecipeBookRoutingModule
  ]
})
export class RecipeBookModule { }
