import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ActivitiesTabPage } from './activities-tab.page';

describe('ActivitiesPage', () => {
  let component: ActivitiesTabPage;
  let fixture: ComponentFixture<ActivitiesTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitiesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
