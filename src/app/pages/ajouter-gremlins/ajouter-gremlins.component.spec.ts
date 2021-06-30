import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGremlinsComponent } from './ajouter-gremlins.component';

describe('AjouterGremlinsComponent', () => {
  let component: AjouterGremlinsComponent;
  let fixture: ComponentFixture<AjouterGremlinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGremlinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGremlinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
