import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLogoComponent } from './pagina-logo.component';

describe('PaginaLogoComponent', () => {
  let component: PaginaLogoComponent;
  let fixture: ComponentFixture<PaginaLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
