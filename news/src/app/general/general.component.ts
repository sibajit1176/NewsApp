import { Component, OnInit } from '@angular/core';
import {TcnewsapiService} from '../service/tcnewsapi.service'

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  generalData:any=[]
  ngOnInit(): void {
    this.api.tcgeneral().subscribe((result)=>{
      console.log(result.articles);
      this.generalData = result.articles;
  })
  }

}
