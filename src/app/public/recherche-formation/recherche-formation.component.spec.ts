import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheFormationComponent } from './recherche-formation.component';

describe('RechercheFormationComponent', () => {
  let component: RechercheFormationComponent;
  let fixture: ComponentFixture<RechercheFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
