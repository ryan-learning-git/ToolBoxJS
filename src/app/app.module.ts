import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './root/app.component';
import { HeaderComponent } from './components/page-furniture/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomepageComponent } from './components/functions/homepage/homepage.component';
import { ListsComponent } from './components/functions/shoppinglists/lists/lists.component';
import { ListComponent } from './components/functions/shoppinglists/list/list.component';
import { LoginComponent } from './components/functions/login/login.component';
import { MyaccountComponent } from './components/functions/myaccount/myaccount.component';
import {ShoppinglistsService} from './components/services/shoppinglists.service';
import {AppRoutingModule} from './app-routing.module';
import {DropdownDirective} from './components/directives/dropdown.directive';
import { LogoutComponent } from './components/functions/logout/logout.component';
import { LinkshomeComponent } from './components/functions/links/linkshome/linkshome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ListsComponent,
    ListComponent,
    LoginComponent,
    MyaccountComponent,
    DropdownDirective,
    LogoutComponent,
    LinkshomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppinglistsService], // having it here means that a single instance is used everywhere, ie a singleton.
  bootstrap: [AppComponent]
})
export class AppModule { }
