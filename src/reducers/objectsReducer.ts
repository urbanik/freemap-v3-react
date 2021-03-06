import { RootAction } from 'fm3/actions';
import { createReducer } from 'typesafe-actions';
import { clearMap, deleteFeature } from 'fm3/actions/mainActions';
import { objectsSetResult, ObjectsResult } from 'fm3/actions/objectsActions';
import { mapsDataLoaded } from 'fm3/actions/mapsActions';

export interface ObjectsState {
  objects: ObjectsResult[];
}

const initialState: ObjectsState = {
  objects: [],
};

export const objectsReducer = createReducer<ObjectsState, RootAction>(
  initialState,
)
  .handleAction(clearMap, () => initialState)
  .handleAction(objectsSetResult, (state, action) => {
    const newIds = new Set(action.payload.map(obj => obj.id));
    return {
      ...state,
      objects: [
        ...state.objects.filter(obj => !newIds.has(obj.id)),
        ...action.payload,
      ],
    };
  })
  .handleAction(deleteFeature, (state, action) => {
    return action.payload.type === 'objects'
      ? {
          ...state,
          objects: state.objects.filter(
            object => object.id !== action.payload.id,
          ),
        }
      : state;
  })
  .handleAction(mapsDataLoaded, (state, action) => {
    return {
      ...state,
      objects: action.payload.objects ?? initialState.objects,
    };
  });
