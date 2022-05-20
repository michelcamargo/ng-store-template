import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import { ViewTemplateModule } from '../../private/view-template.module';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
}

export function TemplateServiceProviderFactory(http: HttpClient) {
  return new TemplateService(http);
}

// export const TEMPLATE_SERVICE_TOKEN = new InjectionToken<TemplateService>("TEMPLATE_SERVICE_TOKEN");
