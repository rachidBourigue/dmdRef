import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  DmdReferencementComponent
} from "./components/dmd-referencement/dmd-referencement.component";
import {HomeComponent} from "./home/home.component";
import {TypeParameterGuard} from "./controller/service/dmdref.guard";

// @ts-ignore
const routes: Routes = [
  {path: 'dmdRef/:type', component: DmdReferencementComponent,canActivate:[TypeParameterGuard]},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
