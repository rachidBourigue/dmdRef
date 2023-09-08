import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DmdReferencementComponent
} from "./components/dmd-referencement/dmd-referencement.component";

const routes: Routes = [
  {path:'',component:DmdReferencementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
