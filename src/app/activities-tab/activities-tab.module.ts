import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivitiesTabPage } from './activities-tab.page';

import { ActivitiesPageRoutingModule } from './activities-tab-routing.module';
import {ToDoItemComponent} from "../components/to-do-item/to-do-item.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ActivitiesPageRoutingModule
  ],
  declarations: [ActivitiesTabPage, ToDoItemComponent]
})
export class ActivitiesTabModule {}
