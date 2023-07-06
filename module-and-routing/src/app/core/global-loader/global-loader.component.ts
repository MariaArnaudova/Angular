import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from './global-loader.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css']
})
export class GlobalLoaderComponent implements OnInit {

  constructor(public globalLoaderService: GlobalLoaderService) { }

  ngOnInit(): void {
  }

}
