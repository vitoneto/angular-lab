import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionParentComponent } from './version-parent.component';

describe('VersionParentComponent', () => {
  let component: VersionParentComponent;
  let fixture: ComponentFixture<VersionParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
