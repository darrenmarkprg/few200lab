import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/media.actions'

export interface MediaEntity {
  _id: string;
  title: string;
  format: string;
  loaned: boolean;
}

export interface MediaState extends EntityState<MediaEntity> {

}

export const adapter = createEntityAdapter<MediaEntity>({
  selectId: e => e._id
});

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadMedia, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.addMedia, (s, a) => adapter.addOne(a.payload, s))
)

export function reducer(state: MediaState = initialState, action: Action) {
  return reducerFunction(state, action)
}
