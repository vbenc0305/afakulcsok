import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { IndexComponent } from './index/index.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import {HttpClientModule} from "@angular/common/http";
import {AfakulcsService} from "./service/afakulcs.service";
import {FormsModule} from "@angular/forms";
import { MaterialModule } from './material-module/material-module.module';

registerLocaleData(localeHu);


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    IndexComponent,
    ReadComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    AfakulcsService,
    { provide: LOCALE_ID, useValue: 'hu' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
