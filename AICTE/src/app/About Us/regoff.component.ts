import { Component, OnInit } from '@angular/core';
import { GenerateBoxService } from "../Shared/generate-box.service";

import { data } from './Data/abaicte.data';

@Component({
  selector: 'aicte-regoff',
  templateUrl: './regoff.component.html',
  styleUrls: ['./regoff.component.css'],
  providers: [GenerateBoxService]
})
export class RegoffComponent implements OnInit {

  data = data;
    
    constructor(private generate: GenerateBoxService) {}
    
    ngOnInit() {
      this.generate.load(this.data);
    }
}