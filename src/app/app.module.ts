import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundViewComponent } from './views/not-found/not-found-view.component';
import { HomeViewComponent } from './views/home/home-view.component';
import { ViewTemplateModule } from './modules/view-template/private/view-template.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundViewComponent,
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ViewTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
