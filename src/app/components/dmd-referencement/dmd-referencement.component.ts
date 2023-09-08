import { Component, OnInit } from '@angular/core';
import {DmdReferencement} from "../../controller/model/dmd-referencement";

@Component({
  selector: 'app-dmd-referencement',
  templateUrl: './dmd-referencement.component.html',
  styleUrls: ['./dmd-referencement.component.css']
})
export class DmdReferencementComponent implements OnInit {
  dmdReferencement:DmdReferencement={};
  selectedFiles: File[] = []; // Initialize with null values for each file input



  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.dmdReferencement);
  }

  onFileSelected(fileIndex: number, event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      this.selectedFiles[fileIndex - 1] = selectedFile;
      console.log(`Selected File ${fileIndex}:`, selectedFile);
    }
  }
}
