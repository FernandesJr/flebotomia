import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.scss']
})
export class ErroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public toBack(): void {
    history.back();
  }

}
