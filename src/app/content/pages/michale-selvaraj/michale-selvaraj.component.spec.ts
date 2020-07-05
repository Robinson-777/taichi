import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaleSelvarajComponent } from './michale-selvaraj.component';

describe('MichaleSelvarajComponent', () => {
  let component: MichaleSelvarajComponent;
  let fixture: ComponentFixture<MichaleSelvarajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichaleSelvarajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaleSelvarajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
