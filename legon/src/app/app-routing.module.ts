import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';

const routes: Routes = [
{path : 'clientes', component:ListaClientesComponent},
{path : '', redirectTo: 'clientes', pathMatch: 'full'},
{path : 'fallas', component:CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
