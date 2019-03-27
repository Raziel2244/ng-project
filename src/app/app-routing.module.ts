import { RouterModule, Routes }  from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: "shopping", loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule" },
  { path: "recipes", loadChildren: "./recipe-book/recipe-book.module#RecipeBookModule" },
  { path:'', pathMatch: 'full', redirectTo: 'shopping' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
