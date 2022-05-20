import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { TemplateComponent } from "../shared/components/template/template.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { TemplateService } from "../shared/services/template.service";

@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: TemplateService,
      useClass: TemplateService,
      // useFactory: TemplateServiceProviderFactory,
      deps: [HttpClient]
    }
  ]
})
export class ViewTemplateModule { }
