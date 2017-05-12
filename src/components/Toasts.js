import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toastsRemove, toastsStopTimeout, toastsRestartTimeout } from 'fm3/actions/toastsActions';

import Toast from 'fm3/components/Toast';

import 'fm3/styles/toasts.scss';

function Toasts({ toasts, onAction, onStopTimeout, onRestartTimeout }) {
  return (
    <div className="toasts">
      {toasts.map(({ message, id, actions, style }) => (
        <Toast
          key={id}
          id={id}
          message={message}
          style={style}
          onAction={onAction}
          actions={actions}
          onStopTimeout={onStopTimeout}
          onRestartTimeout={onRestartTimeout}
        />
      ))}
    </div>
  );
}

Toasts.propTypes = {
  onAction: PropTypes.func.isRequired,
  onStopTimeout: PropTypes.func.isRequired,
  onRestartTimeout: PropTypes.func.isRequired,
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      style: PropTypes.string,
      actions: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          action: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
          style: PropTypes.string,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default connect(
  state => ({
    toasts: state.toasts.toasts,
  }),
  dispatch => ({
    onAction(id, action) {
      // TODO use some action flag to indicate that we want the action to close the toast
      dispatch(toastsRemove(id));

      if (action) {
        if (Array.isArray(action)) {
          action.forEach(a => dispatch(a));
        } else {
          dispatch(action);
        }
      }
    },
    onStopTimeout(id) {
      dispatch(toastsStopTimeout(id));
    },
    onRestartTimeout(id) {
      dispatch(toastsRestartTimeout(id));
    },
  }),
)(Toasts);