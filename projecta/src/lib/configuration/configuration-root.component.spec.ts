import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationRootComponent } from './configuration-root.component';

describe('ConfigurationRootComponent', () => {
  let component: ConfigurationRootComponent;
  let fixture: ComponentFixture<ConfigurationRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationRootComponent]
    });
    fixture = TestBed.createComponent(ConfigurationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
