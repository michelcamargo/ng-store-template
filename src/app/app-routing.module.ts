import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from "./views/home/home-view.component";
import { NotFoundViewComponent } from "./views/not-found/not-found-view.component";

const routes: Routes = [
  { path: '',component: HomeViewComponent, data: {title: 'Michel Camargo - UI Developer'}},
  { path: '404',component: NotFoundViewComponent, data: {title: '404 - Página não encontrada'}},
  { path: '**', pathMatch: 'full',
    redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
