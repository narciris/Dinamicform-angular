import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  {
    path:'others',
    loadChildren: () => import('./others/others.module').then(m => m.OthersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
