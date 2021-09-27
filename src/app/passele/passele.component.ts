import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passele',
  templateUrl: './passele.component.html',
  styleUrls: ['./passele.component.css']
})
export class PasseleComponent implements OnInit {
  @Input() content: string = '';
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
