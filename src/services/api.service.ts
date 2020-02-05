import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  data;
  loading = true;
  desiredHash = 'vscode'

  constructor(private httpClient: HttpClient) { }

  private baseUrl = `https://www.instagram.com/explore/tags/${this.desiredHash}/?__a=1`;

  public getData(){
  this.loading = false;
  return this.httpClient.get(this.baseUrl);
  }

}
