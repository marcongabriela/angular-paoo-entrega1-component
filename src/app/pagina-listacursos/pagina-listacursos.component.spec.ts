import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListacursosComponent } from './pagina-listacursos.component';

describe('PaginaListacursosComponent', () => {
  let component: PaginaListacursosComponent;
  let fixture: ComponentFixture<PaginaListacursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaListacursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaListacursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
