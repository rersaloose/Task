import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
  {path:'' ,component:ComplaintComponent},
  {path:'dash' ,component:DashboradComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
