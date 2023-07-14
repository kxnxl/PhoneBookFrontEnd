import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './Services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { EditComponentComponent } from './Components/edit-component/edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactListComponent,
    AddContactComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
