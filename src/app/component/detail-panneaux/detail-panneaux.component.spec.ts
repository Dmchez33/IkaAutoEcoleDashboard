import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPanneauxComponent } from './detail-panneaux.component';

describe('DetailPanneauxComponent', () => {
  let component: DetailPanneauxComponent;
  let fixture: ComponentFixture<DetailPanneauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPanneauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPanneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
