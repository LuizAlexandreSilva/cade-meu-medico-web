import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  constructor(private http: HttpClient) {}

  importar(arquivo: File) {
    const formData = new FormData();
    formData.append('file', arquivo, arquivo.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    const options = { headers };
    return this.http.post('http://localhost:3000/upload-csv', formData, options);
  }
}
