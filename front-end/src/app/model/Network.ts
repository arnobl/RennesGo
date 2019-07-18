import { Line } from './Line';
import { Stop } from './Stop';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Network {
    lines: Line[];
    stops: Stop[];

    constructor(private readonly http: HttpClient) {
        // Using ng serve, called on each compilation: flooding
    /*    this.http
        .get(`https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=lignes-de-bus-du-reseau-star&rows=200`)
        .subscribe((jsonLines: any) => {this.lines = (jsonLines.records.map((rec: any) => rec.fields) as Line[])
            .sort((l1, l2) => l1.nomcourt < l2.nomcourt ? -1 : 1); console.log(JSON.stringify(this.lines));});
*/
        this.lines = JSON.parse('[{"idbillettique":11,"idparcoursprincipalaller":"0011-A-1533-3751","couleurligne":"#ef859d","couleurtexteligne":"#1a171b","idparcoursprincipalretour":"0011-B-3751-1533","nomfamillecommerciale":"Urbaine","nomlong":"Rennes (La Poterie) <> Vezin-le-Coquet (ZI Ouest)","nomcourt":"11","id":"0011"},{"idbillettique":31,"idparcoursprincipalaller":"0031-A-2088-1190","couleurligne":"#fff164","couleurtexteligne":"#e2001a","idparcoursprincipalretour":"0031-B-1190-2088","nomfamillecommerciale":"Inter-quartiers","nomlong":"Cesson-Sévigné (Stade Dézerseul) <> Rennes (Villejean-Churchill)","nomcourt":"31","id":"0031"},{"idbillettique":3,"idparcoursprincipalaller":"0003-A-1103-1509","couleurligne":"#00893e","couleurtexteligne":"#ffffff","idparcoursprincipalretour":"0003-B-1509-1103","nomfamillecommerciale":"CHRONOSTAR","nomlong":"Rennes (Saint-Laurent) <> Rennes (Henri Fréville)","nomcourt":"C3","id":"0003"}]');
    }
}
