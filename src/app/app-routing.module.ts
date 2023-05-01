import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'card',component:CardComponent},{path:'form', component:FormComponent},{path:'login', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
