import { connect } from 'react-redux';
import * as React from 'react';

import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import { trackingActions } from 'fm3/actions/trackingActions';
import { setActiveModal } from 'fm3/actions/mainActions';
import { IDevice } from 'fm3/types/trackingTypes';

interface Props {
  onDelete: (id: number) => void;
  onModify: (id: number) => void;
  onShowAccessTokens: (id: number) => void;
  onView: (id: number) => void;
  language: string;
  device: IDevice;
}

const Device: React.FC<Props> = ({
  onDelete,
  onModify,
  device,
  language,
  onShowAccessTokens,
  onView,
}) => {
  const dateFormat = new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleModify = React.useCallback(() => {
    onModify(device.id);
  }, [device.id, onModify]);

  const handleDelete = React.useCallback(() => {
    onDelete(device.id);
  }, [device.id, onDelete]);

  const handleShowAccessTokens = React.useCallback(() => {
    onShowAccessTokens(device.id);
  }, [device.id, onShowAccessTokens]);

  const handleView = React.useCallback(() => {
    onView(device.id);
  }, [device.id, onView]);

  return (
    <tr>
      <td>{device.name}</td>
      <td>
        {device.token}
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="right"
          overlay={
            <Tooltip id={device.token}>
              {process.env.API_URL}/tracking/track/{device.token}
            </Tooltip>
          }
        >
          <FontAwesomeIcon icon="question-circle-o" />
        </OverlayTrigger>
      </td>
      <td>{device.maxCount}</td>
      <td>{device.maxAge}</td>
      <td>{dateFormat.format(device.createdAt)}</td>
      <td>
        <Button
          bsSize="small"
          type="button"
          onClick={handleModify}
          title="edit"
        >
          <FontAwesomeIcon icon="edit" />
        </Button>{' '}
        <Button
          bsSize="small"
          type="button"
          bsStyle="primary"
          onClick={handleShowAccessTokens}
          title="watch tokens"
        >
          <FontAwesomeIcon icon="key" />
        </Button>{' '}
        <Button
          bsSize="small"
          type="button"
          onClick={handleView}
          title="watch privately"
        >
          <FontAwesomeIcon icon="eye" />
        </Button>{' '}
        <Button
          bsStyle="danger"
          bsSize="small"
          type="button"
          onClick={handleDelete}
          title="delete"
        >
          <FontAwesomeIcon icon="close" />
        </Button>
      </td>
    </tr>
  );
};

export default connect(
  (state: any) => ({
    language: state.l10n.language,
  }),
  dispatch => ({
    onModify(id) {
      dispatch(trackingActions.modifyDevice(id));
    },
    onDelete(id) {
      dispatch(trackingActions.deleteDevice(id));
    },
    onShowAccessTokens(id) {
      dispatch(trackingActions.showAccessTokens(id));
    },
    onView(id) {
      dispatch(trackingActions.view(id));
      dispatch(setActiveModal(null));
    },
  }),
)(Device);