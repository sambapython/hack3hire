import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPackagesearchComponent } from './work-packagesearch.component';

describe('WorkPackagesearchComponent', () => {
  let component: WorkPackagesearchComponent;
  let fixture: ComponentFixture<WorkPackagesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPackagesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPackagesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
