import { Component, OnInit } from '@angular/core';
import {TcnewsapiService} from '../service/tcnewsapi.service'

@Component({
  selector: 'app-intertainment',
  templateUrl: './intertainment.component.html',
  styleUrls: ['./intertainment.component.css']
})
export class IntertainmentComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
 intertainData:any=[]
  ngOnInit(): void {
    this.api.tctechnews().subscribe((result)=>{
      console.log(result.articles);
      this.intertainData = result.articles;
  })
  }

}
