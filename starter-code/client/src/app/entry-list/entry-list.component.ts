import { Component, OnInit } from '@angular/core';
import { EntryListService } from './entry-list.service';
import { IJournal } from '../IJournal';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  journeys:Array<IJournal>
  constructor(private entryListService: EntryListService) { 

  }

  ngOnInit() {
    this.entryListService.getAllJournal().then((journeys: Array<IJournal>) => {
      this.journeys = journeys
    })
  }
}
