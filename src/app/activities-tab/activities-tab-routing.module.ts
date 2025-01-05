import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesTabPage } from './activities-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesPageRoutingModule {}
