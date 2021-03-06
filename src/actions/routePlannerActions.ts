import { LatLon } from 'fm3/types/common';
import { createAction } from 'typesafe-actions';
import { RouteMode } from 'fm3/reducers/routePlannerReducer';
import { TransportType } from 'fm3/transportTypeDefs';

export type RoutingMode = 'trip' | 'roundtrip' | 'route';

export type SliceMode = 'foot';

export type ManeuerModifier =
  | 'uturn'
  | 'sharp right'
  | 'slight right'
  | 'right'
  | 'sharp left'
  | 'slight left'
  | 'left'
  | 'straight';

export interface RouteAlternativeExtra {
  duration: {
    foot?: number;
    bus?: number;
    home?: number;
    wait?: number;
  };
  price?: number;
  arrival: number;
  numbers?: number[];
  distance: {
    foot?: number;
    bus?: number;
    bicycle?: number;
  };
}

export interface RouteStepExtra {
  type: string;
  destination: string;
  departure?: number;
  duration?: number;
  number?: number;
}

export interface Step {
  maneuver: {
    location: LatLon;
    type: string; // TODO enum?
    modifier: ManeuerModifier;
  };
  distance: number;
  duration: number;
  name: string;
  type: string; // TODO enum?
  modifier: string; // TODO enum?
  mode: SliceMode;
  shapePoints: [number, number][];
  legIndex: number;
  extra?: RouteStepExtra;
}

export interface Alternative {
  itinerary: Step[];
  distance: number;
  duration: number;
  extra?: RouteAlternativeExtra;
}

export const routePlannerSetStart = createAction('ROUTE_PLANNER_SET_START')<{
  start: LatLon | null;
  move?: boolean;
}>();

export const routePlannerSetFinish = createAction('ROUTE_PLANNER_SET_FINISH')<{
  finish: LatLon | null;
  move?: boolean;
}>();

export const routePlannerSetFromCurrentPosition = createAction(
  'ROUTE_PLANNER_SET_FROM_CURRENT_POSITION',
)<'start' | 'finish'>();

export const routePlannerAddMidpoint = createAction(
  'ROUTE_PLANNER_ADD_MIDPOINT',
)<{ midpoint: LatLon; position: number }>();

export const routePlannerSetMidpoint = createAction(
  'ROUTE_PLANNER_SET_MIDPOINT',
)<{ midpoint: LatLon; position: number }>();

export const routePlannerRemoveMidpoint = createAction(
  'ROUTE_PLANNER_REMOVE_MIDPOINT',
)<number>();

export const routePlannerSetTransportType = createAction(
  'ROUTE_PLANNER_SET_TRANSPORT_TYPE',
)<TransportType>();

export const routePlannerSetMode = createAction('ROUTE_PLANNER_SET_MODE')<
  RoutingMode
>();

export const routePlannerSetPickMode = createAction(
  'ROUTE_PLANNER_SET_PICK_MODE',
)<'start' | 'finish'>();

export const routePlannerSetResult = createAction('ROUTE_PLANNER_SET_RESULT')<{
  timestamp: number;
  transportType: TransportType;
  alternatives: Alternative[];
}>();

export const routePlannerToggleItineraryVisibility = createAction(
  'ROUTE_PLANNER_TOGGLE_ITINERARY_VISIBILITY',
)();

export const routePlannerSetParams = createAction('ROUTE_PLANNER_SET_PARAMS')<{
  start: LatLon | null;
  finish: LatLon | null;
  midpoints: LatLon[];
  transportType: TransportType | null;
  mode?: RouteMode | null;
  milestones?: boolean;
}>();

export const routePlannerPreventHint = createAction(
  'ROUTE_PLANNER_PREVENT_HINT',
)();

export const routePlannerSetActiveAlternativeIndex = createAction(
  'ROUTE_PLANNER_SET_ACTIVE_ALTERNATIVE_INDEX',
)<number>();

export const routePlannerToggleElevationChart = createAction(
  'ROUTE_PLANNER_TOGGLE_ELEVATION_CHART',
)();

export const routePlannerSwapEnds = createAction('ROUTE_PLANNER_SWAP_ENDS')();

export const routePlannerToggleMilestones = createAction(
  'ROUTE_PLANNER_TOGGLE_MILESTONES',
)<boolean | undefined>();
