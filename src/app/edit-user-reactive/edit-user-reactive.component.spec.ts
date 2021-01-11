import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserReactiveComponent } from './edit-user-reactive.component';

describe('EditUserReactiveComponent', () => {
  let component: EditUserReactiveComponent;
  let fixture: ComponentFixture<EditUserReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
