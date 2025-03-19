import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoComponentComponent } from './pages/logo-component/logo-component.component';

const routes: Routes = [
  {path: 'home',component:LogoComponentComponent}, 
  {path: '',component:LogoComponentComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
