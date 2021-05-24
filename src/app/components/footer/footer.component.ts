import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fullYear:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.fullYear = new Date().getFullYear();
  }

}
