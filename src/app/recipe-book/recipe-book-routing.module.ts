import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'detail', component: RecipeDetailComponent },
      { path: 'item', component: RecipeItemComponent },
      { path: 'list', component: RecipeListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule { }
