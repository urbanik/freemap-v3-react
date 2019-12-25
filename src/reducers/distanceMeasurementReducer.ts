import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { RootAction } from 'fm3/actions';
import { clearMap, deleteFeature } from 'fm3/actions/mainActions';
import {
  distanceMeasurementAddPoint,
  distanceMeasurementUpdatePoint,
  distanceMeasurementRemovePoint,
  distanceMeasurementSetPoints,
  Line,
} from 'fm3/actions/distanceMeasurementActions';

export interface DistanceMeasurementState {
  lines: Line[];
}

export const initialState: DistanceMeasurementState = {
  lines: [],
};

export const distanceMeasurementReducer = createReducer<
  DistanceMeasurementState,
  RootAction
>(initialState)
  .handleAction(clearMap, () => initialState)
  .handleAction(distanceMeasurementAddPoint, (state, action) =>
    produce(state, draft => {
      let line: Line;

      if (action.payload.index == null) {
        if (action.payload.type === undefined) {
          throw new Error();
        }

        line = { type: action.payload.type, points: [] };
        draft.lines.push(line);
      } else {
        line = draft.lines[action.payload.index];
      }

      line.points.splice(
        action.payload.position === undefined
          ? line.points.length
          : action.payload.position,
        0,
        action.payload.point,
      );
    }),
  )
  .handleAction(
    distanceMeasurementUpdatePoint,
    (state, { payload: { index, point } }) =>
      produce(state, draft => {
        const p = draft.lines[index].points.find(pt => pt.id === point.id);
        if (p) {
          Object.assign(p, point);
        }
      }),
  )
  .handleAction(distanceMeasurementRemovePoint, (state, action) =>
    produce(state, draft => {
      const line = draft.lines[action.payload.index];
      line.points = line.points.filter(point => point.id !== action.payload.id);
    }),
  )
  .handleAction(distanceMeasurementSetPoints, (state, action) => ({
    ...state,
    lines: action.payload,
  }))
  .handleAction(deleteFeature, (state, action) =>
    produce(state, draft => {
      if (
        (action.payload?.type === 'measure-dist' ||
          action.payload?.type === 'measure-area') &&
        action.payload?.id !== undefined
      ) {
        draft.lines.splice(action.payload?.id, 1);
      }
    }),
  );
