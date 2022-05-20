import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './modules/view-template/shared/components/template/template.component';
import { HeaderComponent } from './modules/view-template/shared/components/header/header.component';
import { FooterComponent } from './modules/view-template/shared/components/footer/footer.component';
import { NotFoundViewComponent } from './views/not-found/not-found-view.component';
import { HomeViewComponent } from './views/home/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundViewComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
