import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListafallasComponent } from './pages/listafallas/listafallas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    FooterComponent,
    ListaClientesComponent,
    ListafallasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
