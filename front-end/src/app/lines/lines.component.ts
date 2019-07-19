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
    return (window.innerWidth / 110);
  }

  private isFav(line: string): boolean {
    return this.user.profile.prefLines.includes(line);
  }

  private getFavIconClasses(line: string): string {
    // changes the star character depending on whether it is a fav line
    return 'fa ' + (this.isFav(line) ? 'fa-star' : 'fa-star-o');
  }

  private fav(line: string) {
  if (this.isFav(line)) {
      // Un-fav the line
      this.http
        .put(`go/profile/lines/del/${line}`, {withCredentials: true})
        .subscribe((profile: Profile) => this.user.profile = profile);
    } else {
      // adds he line in the fav ones
      this.http
        .put(`go/profile/lines/new/${line}`, {withCredentials: true})
        .subscribe((profile: Profile) => {
          this.user.profile = profile;
          // Need to update the potential message that concern the line
          this.network.updateMessageOf(line);
        });
    }
  }
/*
  private getWarmMsgs(line: string): string[] {
    this.http
        .put(`go/profile/lines/del/${line}`, {withCredentials: true})
        .subscribe((profile: Profile) => this.user.profile = profile);
    https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=alertes-trafic-en-temps-reel-sur-les-lignes-du-reseau-star&refine.idligne=0014
  }*/
}
