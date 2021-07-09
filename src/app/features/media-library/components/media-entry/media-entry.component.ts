import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MediaState } from '../../reducers/media-library.reducers';
import { addMedia } from "../../actions/media.actions";

@Component({
  selector: 'app-media-entry',
  templateUrl: './media-entry.component.html',
  styleUrls: ['./media-entry.component.css']
})
export class MediaEntryComponent implements OnInit {

  form = this.formBuilder.group({
    title: ['', ''],
    format: ['', ''],
    loaned: ['', '']
  })

  constructor(private formBuilder: FormBuilder,
    private store: Store<MediaState>) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(addMedia({ payload: this.form.value }));
    this.form.reset();
  }

  get title() { return this.form.get('title'); }
  get format() { return this.form.get('format'); }
  get loaned() { return this.form.get('loaned'); }

}
