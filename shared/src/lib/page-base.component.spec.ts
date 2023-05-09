import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBaseComponent } from './page-base.component';

describe('PageBaseComponent', () => {
  let component: PageBaseComponent;
  let fixture: ComponentFixture<PageBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBaseComponent]
    });
    fixture = TestBed.createComponent(PageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
