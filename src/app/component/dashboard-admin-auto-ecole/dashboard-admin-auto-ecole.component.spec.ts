import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminAutoEcoleComponent } from './dashboard-admin-auto-ecole.component';

describe('DashboardAdminAutoEcoleComponent', () => {
  let component: DashboardAdminAutoEcoleComponent;
  let fixture: ComponentFixture<DashboardAdminAutoEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminAutoEcoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdminAutoEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
