import { createAction, props } from "@ngrx/store";
import { MediaEntity } from "../reducers/media-library.reducers";


export const loadMedia = createAction(
  '[media] loading media succeeded',
  props<{ payload: MediaEntity[] }>()
)

export const addMedia = createAction(
  '[media library] Add media',
  props<{ payload: MediaEntity }>()
)
