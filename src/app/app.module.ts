import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { BuscaComponent } from './busca/busca.component';
import { OutletComponent } from './outlet/outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FormComponent,
    NavbarComponent,
    CardComponent,
    ItemCardComponent,
    BuscaComponent,
    OutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
