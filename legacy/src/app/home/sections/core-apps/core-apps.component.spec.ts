import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAppsComponent } from './core-apps.component';

describe('CoreAppsComponent', () => {
  let component: CoreAppsComponent;
  let fixture: ComponentFixture<CoreAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
