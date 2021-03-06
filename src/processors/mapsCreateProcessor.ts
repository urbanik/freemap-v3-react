import { Processor } from 'fm3/middlewares/processorMiddleware';
import { mapsCreate, mapsLoad, mapsLoadList } from 'fm3/actions/mapsActions';
import { httpRequest } from 'fm3/authAxios';
import { getMapDataFromState } from './mapsSaveProcessor';
import { translate } from 'fm3/stringUtils';

export const mapsCreateProcessor: Processor<typeof mapsCreate> = {
  actionCreator: mapsCreate,
  errorKey: 'maps.createError',
  handle: async ({ getState, dispatch }) => {
    const name = window.prompt(
      translate(window.translations, 'maps.namePrompt') as string,
    );

    if (name === null) {
      return;
    }

    const { data } = await httpRequest({
      getState,
      method: 'POST',
      url: '/maps/',
      expectedStatus: 200,
      data: {
        name,
        public: true, // TODO
        data: getMapDataFromState(getState()),
      },
    });

    dispatch(mapsLoadList());
    dispatch(mapsLoad({ id: data.id })); // TODO skip loading in this case
  },
};
