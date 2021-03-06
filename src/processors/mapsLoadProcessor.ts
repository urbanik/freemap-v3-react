import { Processor } from 'fm3/middlewares/processorMiddleware';
import { mapsDataLoaded, mapsLoad } from 'fm3/actions/mapsActions';
import { httpRequest } from 'fm3/authAxios';

export const mapsLoadProcessor: Processor<typeof mapsLoad> = {
  actionCreator: mapsLoad,
  errorKey: 'maps.fetchError',
  handle: async ({ getState, dispatch, action: { payload } }) => {
    if (payload.id !== undefined) {
      const { data } = await httpRequest({
        getState,
        method: 'GET',
        url: `/maps/${payload.id}`,
        expectedStatus: 200,
      });

      const map = data.data;

      if (payload.ignoreMap) {
        delete map.map.lat;
        delete map.map.lon;
        delete map.map.zoom;
      }

      if (payload.ignoreLayers) {
        delete map.map.mapType;
        delete map.map.overlays;
      }

      dispatch(mapsDataLoaded(map));
    }
  },
};
