import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DmdReferencement} from "../model/dmd-referencement";
import {Observable} from "rxjs";
import {FileDmdRef} from "../model/fileddmdref";


@Injectable({
  providedIn: 'root'
})
export class DmdRefService {
  baseURL="http://192.168.0.182:8086/";
  fileDmdRef:FileDmdRef;
  constructor(private http: HttpClient) {
  }

  addDmdRef(dmdref:DmdReferencement): Observable<DmdReferencement>{
    return this.http.post(this.baseURL+"demande", dmdref)
  }

  uploadFile(selectedFile: File, idDmd: string, idDoc: string, dateExpr: any ) {
    if (selectedFile) {




      const formData = new FormData();
      formData.append('file', selectedFile);
      // You can also include any additional data as needed.
      formData.append('id_demande', idDmd); // Example number parameter
      formData.append('idDoc', idDoc);
      formData.append('dateExp', dateExpr);
      this.http.post(this.baseURL+"upload", formData).subscribe(
        (response) => {
          // Handle success response from the API
          console.log('File uploaded successfully', response);
        },
        (error) => {
          // Handle error response from the API
          console.error('Error uploading file', error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }

    getAllLots(type: string | undefined): Observable<string[]>{
    return this.http.get<string[]>(this.baseURL+"listLots?type="+type);
  }
}
