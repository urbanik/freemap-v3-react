import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { FontAwesomeIcon } from 'fm3/components/FontAwesomeIcon';
import Button from 'react-bootstrap/lib/Button';

import {
  mapDetailsSetSubtool,
  mapDetailsSetUserSelectedPosition,
} from 'fm3/actions/mapDetailsActions';
import { mapEventEmitter } from 'fm3/mapEventEmitter';

import { withTranslator, Translator } from 'fm3/l10nInjector';
import { RootState } from 'fm3/storeCreator';
import { RootAction } from 'fm3/actions';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    t: Translator;
  };

const MapDetailsMenuInt: React.FC<Props> = ({
  subtool,
  onSubtoolChange,
  onSetUserSelectedPosition,
  t,
}) => {
  const setUserSelectedPosition = useCallback(
    (lat: number, lon: number) => {
      if (subtool !== null) {
        onSetUserSelectedPosition(lat, lon);
      }
    },
    [subtool, onSetUserSelectedPosition],
  );

  useEffect(() => {
    mapEventEmitter.on('mapClick', setUserSelectedPosition);
    return () => {
      mapEventEmitter.removeListener('mapClick', setUserSelectedPosition);
    };
  }, [setUserSelectedPosition]);

  return (
    <Button
      onClick={() => onSubtoolChange('track-info')}
      active={subtool === 'track-info'}
      title={t('mapDetails.road')}
    >
      <FontAwesomeIcon icon="road" />
      <span className="hidden-xs"> {t('mapDetails.road')}</span>
    </Button>
  );
};

const mapStateToProps = (state: RootState) => ({
  subtool: state.mapDetails.subtool,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onSubtoolChange(subtool: string) {
    dispatch(mapDetailsSetSubtool(subtool));
  },
  onSetUserSelectedPosition(lat: number, lon: number) {
    dispatch(mapDetailsSetUserSelectedPosition({ lat, lon }));
  },
});

export const MapDetailsMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslator(MapDetailsMenuInt));
