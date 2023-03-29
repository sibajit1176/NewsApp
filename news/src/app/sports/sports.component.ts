import { Component, OnInit } from '@angular/core';
import {TcnewsapiService} from '../service/tcnewsapi.service'
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  sportsData:any=[]
  ngOnInit(): void {
    this.api.tcsports().subscribe((result)=>{
      console.log(result.articles);
      this.sportsData = result.articles;
  })
  }

}