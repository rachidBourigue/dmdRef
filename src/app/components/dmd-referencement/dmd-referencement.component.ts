import {Component, OnInit, Renderer2} from '@angular/core';
import {DmdReferencement} from "../../controller/model/dmd-referencement";

@Component({
  selector: 'app-dmd-referencement',
  templateUrl: './dmd-referencement.component.html',
  styleUrls: ['./dmd-referencement.component.css']
})
export class DmdReferencementComponent implements OnInit {
  dmdReferencement:DmdReferencement={};
  selectedFiles: File[] = []; // Initialize with null values for each file input





  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.openModal();
  }
  save(){
    console.log(this.dmdReferencement);
  }


  openModal() {
    const modal = document.getElementById('exampleModal'); // Obtenez l'élément modal par son ID
    if (modal) {
      this.renderer.addClass(modal, 'show'); // Ajoutez la classe Bootstrap 'show' pour afficher le modal
      modal.style.display = 'block'; // Assurez-vous que le modal est affiché
    }
  }
  onFileSelected(fileIndex: number, event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      this.selectedFiles[fileIndex - 1] = selectedFile;
      console.log(`Selected File ${fileIndex}:`, selectedFile);
    }
  }


}
