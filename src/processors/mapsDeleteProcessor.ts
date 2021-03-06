import { Processor } from 'fm3/middlewares/processorMiddleware';
import { httpRequest } from 'fm3/authAxios';
import { mapsLoad, mapsLoadList } from 'fm3/actions/mapsActions';
import { deleteFeature } from 'fm3/actions/mainActions';
import { translate } from 'fm3/stringUtils';

export const mapsDeleteProcessor: Processor<typeof deleteFeature> = {
  actionCreator: deleteFeature,
  errorKey: 'maps.deleteError',
  handle: async ({ getState, dispatch, action }) => {
    if (
      action.payload.type !== 'maps' ||
      !window.confirm(
        translate(window.translations, 'maps.deleteConfirm') as string,
      )
    ) {
      return;
    }

    await httpRequest({
      getState,
      method: 'DELETE',
      url: `/maps/${getState().maps.id}`,
      expectedStatus: 204,
    });

    dispatch(mapsLoad({}));
    dispatch(mapsLoadList());
  },
};
