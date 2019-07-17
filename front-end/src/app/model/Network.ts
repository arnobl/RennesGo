import { Line } from './Line';
import { Stop } from './Stop';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Network {
    private lines: Line[];
    private stops: Stop[];

    constructor(private readonly http: HttpClient) {
        this.http
        .get(`https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=lignes-de-bus-du-reseau-star&rows=200`)
        .subscribe((jsonLines: any) => this.lines = (jsonLines.records.map((rec: any) => rec.fields) as Line[])
            .sort((l1, l2) => l1.nomcourt < l2.nomcourt ? -1 : 1));
    }
}
