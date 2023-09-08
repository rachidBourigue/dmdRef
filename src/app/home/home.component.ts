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


  clickSST() {

    this.router.navigateByUrl('/dmdRef?type=SST');

  }

  clickFOU() {
    this.type = 'FOU';
    this.router.navigate(['/dmdRef', this.type]);
    console.log("Le bouton 'FOU' a été cliqué et type=" + this.type);
  }
}
