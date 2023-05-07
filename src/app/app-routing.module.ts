import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { OutletComponent } from './outlet/outlet.component';
import { BuscaComponent } from './busca/busca.component';
const routes: Routes = [{path:'outlet',component:OutletComponent},
{path:'card',component:CardComponent},
{path:'form', component:FormComponent},
{path:'login', component:LoginComponent},
{path:'busca', component:BuscaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
