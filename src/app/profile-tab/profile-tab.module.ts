import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabPage } from './profile-tab.page';

import { ProfilePageRoutingModule } from './profile-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [ProfileTabPage]
})
export class ProfileTabModule {}
