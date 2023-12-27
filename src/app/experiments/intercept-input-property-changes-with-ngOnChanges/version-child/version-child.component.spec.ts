import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionChildComponent } from './version-child.component';

describe('VersionChildComponent', () => {
  let component: VersionChildComponent;
  let fixture: ComponentFixture<VersionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
