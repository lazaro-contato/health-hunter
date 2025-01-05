import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeTabPage } from './home-tab.page';

import { HomePageRoutingModule } from './home-tab-routing.module';
import {MessageCardComponent} from "../components/message-card/message-card.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [HomeTabPage, MessageCardComponent]
})
export class HomeTabModule {}
