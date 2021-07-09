import { BehaviorSubject } from "rxjs";
import { MediaListItem } from "../models";

export class MSDataService {
  private data: MediaListItem[];
  private subject: BehaviorSubject<MediaListItem[]>;
  constructor() {
    this.data = [];
    this.subject = new BehaviorSubject<MediaListItem[]>(this.data);
  }
}
