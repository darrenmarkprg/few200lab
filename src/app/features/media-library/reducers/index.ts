import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { MediaListItem } from "../models";
import * as fromMedia from "../reducers/media-library.reducers";

export const featureName = 'mediaFeature'

export interface MediaLibraryState {
  media: fromMedia.MediaState
}
export const reducers: ActionReducerMap<MediaLibraryState> = {
  media: fromMedia.reducer
}

const selectFeature = createFeatureSelector<MediaLibraryState>(featureName)

const selectMediaBranch = createSelector(
  selectFeature,
  f => f.media
)

const { selectAll: selectAllMediaArray } = fromMedia.adapter.getSelectors(selectMediaBranch);

export const selectMediaItems = createSelector(
  selectAllMediaArray,
  s => s as MediaListItem[]
)
