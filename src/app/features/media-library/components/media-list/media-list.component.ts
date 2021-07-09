import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaListItem } from '../../models';
import { selectMediaItems } from '../../reducers';
import { MediaState } from '../../reducers/media-library.reducers';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  media$!: Observable<MediaListItem[]>;
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.media$ = this.store.select(selectMediaItems)
  }

}
