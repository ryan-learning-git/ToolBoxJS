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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ListsComponent,
    ListComponent,
    LoginComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
