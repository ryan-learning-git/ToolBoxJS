import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListsComponent} from './components/functions/shoppinglists/lists/lists.component';
import {LoginComponent} from './components/functions/login/login.component';
import {HomepageComponent} from './components/functions/homepage/homepage.component';
import {MyaccountComponent} from './components/functions/myaccount/myaccount.component';

const appRoutes: Routes = [
  { path: 'shoppingLists', component: ListsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: MyaccountComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
