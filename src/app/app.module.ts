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
import {ToastModule} from "primeng/toast";
import {ChipsModule} from "primeng/chips";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    DmdReferencementComponent,
  ],
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ButtonModule,
        DialogModule,
        ToastModule,
        ChipsModule,
      ToastrModule.forRoot({
        timeOut: 3000, // Set the notification timeout
        positionClass: 'toast-top-right', // Set the position
        preventDuplicates: true, // Prevent duplicate notifications
      }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
