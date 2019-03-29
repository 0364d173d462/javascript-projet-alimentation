import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    {path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuardService]},
    {path: 'a_propos', loadChildren: './a_propos/a_propos.module#A_proposPageModule'},
    {path: 'aide', loadChildren: './aide/aide.module#AidePageModule'},
    {path: 'feculent', loadChildren: './feculent/feculent.module#FeculentPageModule'},
    {path: 'cereals', loadChildren: './cereals/cereals.module#CerealsPageModule'},
    {path: 'fruits', loadChildren: './fruits/fruits.module#FruitsPageModule'},
    {path: 'legumes', loadChildren: './legumes/legumes.module#LegumesPageModule'},
    {path: 'feuilles', loadChildren: './feuilles/feuilles.module#FeuillesPageModule'},
    {path: 'cart', loadChildren: './cart/cart.module#CartPageModule'},
    {path: 'choix', loadChildren: './choix/choix.module#ChoixPageModule'},
    {path: 'modal', loadChildren: './modal/modal.module#ModalPageModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
