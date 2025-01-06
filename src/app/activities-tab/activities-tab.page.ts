import {Component, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-activities',
  templateUrl: 'activities-tab.page.html',
  styleUrls: ['activities-tab.page.scss'],
  standalone: false,
})
export class ActivitiesTabPage {
  tasks = ['Running', 'Breakfast', 'Vitamin']

  constructor() {}

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

}
