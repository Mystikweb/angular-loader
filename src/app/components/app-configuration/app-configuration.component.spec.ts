import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConfigurationComponent } from './app-configuration.component';

describe('AppConfigurationComponent', () => {
  let component: AppConfigurationComponent;
  let fixture: ComponentFixture<AppConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppConfigurationComponent]
    });
    fixture = TestBed.createComponent(AppConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
