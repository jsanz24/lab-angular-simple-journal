import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJournal } from '../IJournal';

@Injectable()
export class EntryListService {

  constructor(private httpClient: HttpClient) { }

  getAllJournal():Promise<Array<IJournal>> {
    return this.httpClient.get(`http://localhost:3000/api/journal-entries`)
    .toPromise()
    .then((journal: Array<IJournal>) => journal)
  }

  /*getBeerByID(beerID):Promise<IJournal> {
    return this.httpClient.get(`http://localhost:3000/beer/${beerID}`)
    .toPromise()
    .then((beerPayload: IJournal) => beerPayload)
  }*/
}