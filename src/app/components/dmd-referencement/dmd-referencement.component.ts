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
  year1input: number;
  year2input: number;
  year3input: number;
  currentYear = new Date().getFullYear();
  isValid:boolean=false;
  isStartSave:boolean=false;

  constructor(private serviceDmd: DmdRefService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dmdReferencement.typeDmndRef = params['type'];
      this. getAllLots(this.dmdReferencement.typeDmndRef);
    });

  }

  getAllLots(type: string | undefined){
    this.serviceDmd.getAllLots(type).subscribe(
      value => {
        this.listLots = value;
      },
      error => {
        console.log("was not send it ", error);
      },
    );
  }
  save() {

    this.isStartSave=true;
    this.route.params.subscribe(params => {
      this.dmdReferencement.typeDmndRef = params['type'];
      // Use the 'id' parameter as needed
    });
    /*if(this.isDmdReferencementValid(this.dmdReferencement)){*/
      console.log(this.dmdReferencement.dateExperationCNSS);
      console.log(this.year1input);
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
   /* }else {
      this.isValid=true;
    }*/

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

    this.dmdReferencement.caLastYears=this.dmdReferencement.caLastYears = "{"
      + (this.currentYear - 1) + ":" + this.year1input+","
      + (this.currentYear - 2) + ":" + this.year2input+","
      + (this.currentYear - 3) + ":" + this.year3input
      + "}";
  }
  isDmdReferencementValid(data: DmdReferencement): boolean {
    // Check if all required fields are present and not empty
    if (
      !data ||
      !data.raisonSosial ||
      !data.numDemande ||
      !data.raisonSociale ||
      !data.typeDemandeur ||
      !data.dateCreation ||
      !data.adresse ||
      !data.telEntreprise ||
      !data.faxEntreprise ||
      !data.emailEntreprise ||
      !data.formeJuridique ||
      data.capital === undefined || // Assuming capital can be 0
      !data.secteurActivite ||
      !data.dirigeant ||
      !data.representant ||
      !data.fonction ||
      !data.gsm ||
      !data.faxRepresnetant ||
      !data.emailRepresentant ||
      !data.registreCommerce ||
      !data.identifiantFiscal ||
      !data.ICE ||
      !data.patente ||
      !data.numTva ||
      !data.numeroCnss ||
      !data.direct ||
      data.chiffreAffaire === undefined || // Assuming chiffreAffaire can be 0
      data.effectif === undefined || // Assuming effectif can be 0
      !data.validationAssistant ||
      !data.validationDirecteur ||
      !data.validationComite ||
      !data.assistant ||
      !data.directeur ||
      !data.avisDirecteur ||
      !data.avisFinale ||
      data.sommation_final === undefined || // Assuming sommation_final can be 0
      data.note_final === undefined || // Assuming note_final can be 0
      !data.caAnnee ||
      !data.commentaireFinale ||
      !data.caLastYears ||
      !data.typeDmndRef ||
      !data.dateExperationFiscale ||
      !data.dateExperationCNSS ||
      !data.dateExperationChiffreAffaires
    ) {
      return false;
    }

    // All fields are present and not empty, so the object is considered valid
    return true;
  }
}

