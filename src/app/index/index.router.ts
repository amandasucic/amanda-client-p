import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[
        {
            path:'login',
            loadChildren: ()=>import('../pages/login/login.module').then(m =>m.LoginPageModule)
        }
    ]
}
];



    @NgModule({
    imports: [RouterModule.forChild(routes)],
   })
  export class IndexRouter {}