import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
  //  AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HelloComponent],
 //  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloComponent, {injector: injector});
    customElements.define('app-hello', custom);
  }
  ngDoBootstrap() {}

}
