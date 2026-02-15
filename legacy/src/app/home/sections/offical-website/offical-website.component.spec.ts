import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficalWebsiteComponent } from './offical-website.component';

describe('OfficalWebsiteComponent', () => {
  let component: OfficalWebsiteComponent;
  let fixture: ComponentFixture<OfficalWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficalWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficalWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
