import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  type: string = '';

  constructor(private router: Router) {
  }


  navigateToDmdRef(type:string) {

    this.router.navigate(['/dmdRef',type]);

  }


}
