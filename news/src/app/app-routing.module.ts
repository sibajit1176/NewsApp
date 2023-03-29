import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { IntertainmentComponent } from './intertainment/intertainment.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {path:'',component:TopheadlineComponent},
  {path:'tech',component:TechComponent},
  {path:'intertain',component:IntertainmentComponent},
  {path:'science',component:ScienceComponent},
  {path:'general',component:GeneralComponent},
  {path:'sports',component:SportsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
