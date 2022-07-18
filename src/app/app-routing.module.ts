import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { BloodBanksComponent } from './blood-banks/blood-banks.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'',component:PageComponent},
  {path:'bloodbanks',component:BloodBanksComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
