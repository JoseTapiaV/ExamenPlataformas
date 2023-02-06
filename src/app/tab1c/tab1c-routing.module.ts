import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1cPage } from './tab1c.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1cPageRoutingModule {}
