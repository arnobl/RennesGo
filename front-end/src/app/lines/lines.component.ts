import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Network } from '../model/Network';
import { User } from '../model/User';
import { Profile } from '../model/Profile';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  private nbColumns: number;

  constructor(private readonly http: HttpClient, private readonly network: Network, private readonly user: User) {
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

  private isFav(line: string): boolean {
    return this.user.profile.prefLines.includes(line);
  }

  private getFavIconClasses(line: string): string {
    return 'fa ' + (this.isFav(line) ? 'fa-star' : 'fa-star-o');
  }

  private fav(line: string) {
    if (this.isFav(line)) {
      this.http
      .put(`go/profile/lines/del/${line}`, {withCredentials: true})
      .subscribe((profile: Profile) => this.user.profile = profile);
    } else {
      this.http
        .put(`go/profile/lines/new/${line}`, {withCredentials: true})
        .subscribe((profile: Profile) => this.user.profile = profile);
    }
  }
}
