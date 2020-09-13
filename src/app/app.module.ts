import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaLogoComponent } from './pagina-logo/pagina-logo.component';
import { PaginaListacursosComponent } from './pagina-listacursos/pagina-listacursos.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaLogoComponent,
    PaginaListacursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
