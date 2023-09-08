import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  DmdReferencementComponent
} from './components/dmd-referencement/dmd-referencement.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    DmdReferencementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
