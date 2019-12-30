import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mainComponent } from './main-menu.component';

describe('HelloWorldComponent', () => {
  let component: mainComponent;
  let fixture: ComponentFixture<mainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
