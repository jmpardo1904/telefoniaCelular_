import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { RegistrocelularComponent } from './components/registrocelular/registrocelular.component';


const routes: Routes = [    
  { path: 'home', component: HomeComponent },
{ path: 'facturas', component: FacturasComponent },
{ path: 'registrocelular', component: RegistrocelularComponent },
{ path: '**', pathMatch:'full', redirectTo:'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
