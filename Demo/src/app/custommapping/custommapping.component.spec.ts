import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommappingComponent } from './custommapping.component';

describe('CustommappingComponent', () => {
  let component: CustommappingComponent;
  let fixture: ComponentFixture<CustommappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
