import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'edit', component: ShoppingEditComponent },
      { path: 'list', component: ShoppingListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
