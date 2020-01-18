import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PlatformComponent,
    HeaderComponent
  ],
  exports:[HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PlatformComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlatformModule { }
