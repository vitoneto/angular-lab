import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptInputPropertyChangesWithNgOnChangesComponent } from './intercept-input-property-changes-with-ng-on-changes.component';

describe('InterceptInputPropertyChangesWithNgOnChangesComponent', () => {
  let component: InterceptInputPropertyChangesWithNgOnChangesComponent;
  let fixture: ComponentFixture<InterceptInputPropertyChangesWithNgOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptInputPropertyChangesWithNgOnChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptInputPropertyChangesWithNgOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
