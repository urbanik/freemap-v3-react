import axios from 'axios';
import { Dispatch } from 'redux';
import { toastsAdd } from 'fm3/actions/toastsActions';
import { ActionType } from 'typesafe-actions';

export function dispatchAxiosErrorAsToast(
  dispatch: Dispatch<ActionType<typeof toastsAdd>>,
  messageKey: string,
  err?: any,
  params: { [key: string]: any } = {},
) {
  if (axios.isCancel(err)) {
    return;
  }
  return dispatch(
    toastsAdd({
      messageKey,
      messageParams: {
        ...params,
        ...(err instanceof Error ? { err: err.message } : {}),
      },
      style: 'danger',
    }),
  );
}
