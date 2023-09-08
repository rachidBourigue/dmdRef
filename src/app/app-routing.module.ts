import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DmdReferencementComponent
} from "./components/dmd-referencement/dmd-referencement.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'demande',component:DmdReferencementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
