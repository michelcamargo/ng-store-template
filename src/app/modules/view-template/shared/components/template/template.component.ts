import {Component, Inject, OnInit} from '@angular/core';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(@Inject(TemplateService) private templateService: TemplateService) {

  }

  ngOnInit(): void {
  }

}
