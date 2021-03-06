import {
  galleryRequestImage,
  gallerySubmitComment,
} from 'fm3/actions/galleryActions';
import { Processor } from 'fm3/middlewares/processorMiddleware';
import { httpRequest } from 'fm3/authAxios';

export const gallerySubmitCommentProcessor: Processor = {
  actionCreator: gallerySubmitComment,
  errorKey: 'gallery.commentAddingError',
  handle: async ({ getState, dispatch }) => {
    const { image } = getState().gallery;
    if (!image) {
      return;
    }

    const { id } = image;

    window.ga('send', 'event', 'Gallery', 'submitComment');

    await httpRequest({
      getState,
      method: 'POST',
      url: `/gallery/pictures/${id}/comments`,
      data: {
        comment: getState().gallery.comment,
      },
      expectedStatus: 200,
    });

    if (getState().gallery.activeImageId === id) {
      dispatch(galleryRequestImage(id));
    }
  },
};
