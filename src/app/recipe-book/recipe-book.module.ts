import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    RecipeBookRoutingModule
  ]
})
export class RecipeBookModule { }
