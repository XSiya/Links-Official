import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import { TerminalComponent } from 'ngx-core';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'',component:HomeComponent},
  {
    path: 'egg', component: TerminalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
