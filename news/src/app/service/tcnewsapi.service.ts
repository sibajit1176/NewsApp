import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=f5fde299deb0438c96a6b4b43b4222bc'
  technews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f5fde299deb0438c96a6b4b43b4222bc'
  intertain='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f5fde299deb0438c96a6b4b43b4222bc'
  science='https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=f5fde299deb0438c96a6b4b43b4222bc'
  general='https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f5fde299deb0438c96a6b4b43b4222bc'
  sports='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f5fde299deb0438c96a6b4b43b4222bc'
  
  tcsports():Observable<any>{
    return this._http.get(this.sports)
    }
  tcgeneral():Observable<any>{
    return this._http.get(this.general)
    }

  tcscience():Observable<any>{
    return this._http.get(this.science)
     
 
    }
  tctintertain():Observable<any>{
    return this._http.get(this.intertain)
     
    }
  tctechnews():Observable<any>{
    return this._http.get(this.technews)
     
    }
  tcHeadline():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
     
    }
    
  }

