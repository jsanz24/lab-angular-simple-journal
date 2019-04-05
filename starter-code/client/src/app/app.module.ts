import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryListService } from './entry-list/entry-list.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EntryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
