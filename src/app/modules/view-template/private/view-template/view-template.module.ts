import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from "../../shared/components/template/template.component";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { TemplateService } from "../../shared/services/template.service";


@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers:[
    TemplateService
  ]
})
export class ViewTemplateModule { }
