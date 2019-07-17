import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Network } from '../model/Network';
import { Line } from '../model/Line';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {
  private nbColumns: number;

  constructor(private http: HttpClient, private network: Network) {
  }

  ngOnInit() {
    this.nbColumns = this.computeNbColumns();
  }

  onResizeGrid() {
    this.nbColumns = this.computeNbColumns();
  }

  private computeNbColumns(): number {
    return (window.innerWidth / 60);
  }
}
