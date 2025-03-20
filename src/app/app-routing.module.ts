import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoComponentComponent } from './pages/logo-component/logo-component.component';
import { GridComponentComponent } from './pages/grid-component/grid-component.component';

const routes: Routes = [
  {path: 'home',component:GridComponentComponent}, 
  {path: '',component:GridComponentComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
