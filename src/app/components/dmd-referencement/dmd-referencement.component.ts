import {Component, OnInit} from '@angular/core';
import {DmdReferencement} from "../../controller/model/dmd-referencement";
import {DmdRefService} from "../../controller/service/dmd-ref.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dmd-referencement',
  templateUrl: './dmd-referencement.component.html',
  styleUrls: ['./dmd-referencement.component.css']
})
export class DmdReferencementComponent implements OnInit {
  dmdReferencement: DmdReferencement = {};
  selectedFiles: File[] = [];// Initialize with null values for each file input
  listLots: string[] = [];
  caLastYears: Map<number, string> = new Map<number, string>();
  year1input: string;
  year2input: string;
  year3input: string;
  currentYear = new Date().getFullYear();

  constructor(private serviceDmd: DmdRefService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.serviceDmd.getAllLots("SST").subscribe(
      value => {
        this.listLots = value;
      },
      error => {
        console.log("was not send it ", error);
      },
    );


  }
  save() {
    this.route.params.subscribe(params => {
      this.dmdReferencement.typeDmndRef = params['type'];
      // Use the 'id' parameter as needed
    });
    console.log(this.dmdReferencement.dateExperationCNSS);
    this.setcaLastYears();
    this.serviceDmd.addDmdRef(this.dmdReferencement).subscribe(
      value => {
        console.log("was send it ", value);
        this.addFile(value);
      },
      error => {
        console.log("was not send it ", error);
      },
    );

    console.log(this.dmdReferencement);
  }

  onFileSelected(fileIndex: number, event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.selectedFiles[fileIndex - 1] = selectedFile;
      console.log(this.selectedFiles[fileIndex - 1].name);
      //this.serviceDmd.uploadFile(selectedFile,"85","2","02/02/2022")
    }
  }


  addFile(idDmd: any) {
    this.selectedFiles.forEach((value, index) => {
      if (index == 0) {
        this.serviceDmd.uploadFile(this.selectedFiles[0], idDmd, "1", "");
      } else if (index == 1) {
        this.serviceDmd.uploadFile(this.selectedFiles[1], idDmd, "9", "");
      } else if (index == 2) {
        this.serviceDmd.uploadFile(this.selectedFiles[2], idDmd, "10", this.dmdReferencement.dateExperationCNSS);
      } else if (index == 3) {
        this.serviceDmd.uploadFile(this.selectedFiles[3], idDmd, "8", this.dmdReferencement.dateExperationFiscale);
      } else if (index == 4) {
        this.serviceDmd.uploadFile(this.selectedFiles[4], idDmd, "7", "");
      } else if (index == 5) {
        this.serviceDmd.uploadFile(this.selectedFiles[5], idDmd, "17", "");
      } else if (index == 6) {
        this.serviceDmd.uploadFile(this.selectedFiles[6], idDmd, "2", "");
      } else if (index == 7) {
        this.serviceDmd.uploadFile(this.selectedFiles[7], idDmd, "11", "");
      } else if (index == 8) {
        this.serviceDmd.uploadFile(this.selectedFiles[8], idDmd, "12", this.dmdReferencement.dateExperationChiffreAffaires);
      } else if (index == 9) {
        this.serviceDmd.uploadFile(this.selectedFiles[9], idDmd, "4", "");
      } else if (index == 10) {
        this.serviceDmd.uploadFile(this.selectedFiles[10], idDmd, "5", "");
      } else if (index == 11) {
        this.serviceDmd.uploadFile(this.selectedFiles[11], idDmd, "18", "");
      } else if (index == 12) {
        this.serviceDmd.uploadFile(this.selectedFiles[11], idDmd, "15", "");
      } else if (index == 13) {
        this.serviceDmd.uploadFile(this.selectedFiles[11], idDmd, "19", "");
      } else if (index == 14) {
        this.serviceDmd.uploadFile(this.selectedFiles[11], idDmd, "13", "");
      }
    });
  }

  getFirstKey(): number | 0 {
    return this.currentYear - 1;
  }

  getSecKey(): number | 0 {
    return this.currentYear - 2;
  }

  getTheKey(): number | 0 {
    return this.currentYear - 3;
  }

  setcaLastYears() {
    this.caLastYears.set(this.currentYear - 1, this.year1input);
    this.caLastYears.set(this.currentYear - 1, this.year1input);
    this.caLastYears.set(this.currentYear - 1, this.year1input);
    let result = '';
    for (const [key, value] of this.caLastYears.entries()) {
      result += `{ ${key} : ${value}\n}`;
    }
    this.dmdReferencement.caLastYears = result;
  }
}
