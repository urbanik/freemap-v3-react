import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import 'fm3/styles/react-tag-autocomplete.css';

import Button from 'react-bootstrap/lib/Button';
import * as FmPropTypes from 'fm3/propTypes';
import GalleryEditForm from 'fm3/components/gallery/GalleryEditForm';

export default class GalleryUploadItem extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    filename: PropTypes.string,
    url: PropTypes.string,
    model: FmPropTypes.galleryPictureModel.isRequired,
    allTags: FmPropTypes.allTags.isRequired,
    error: PropTypes.string,
    onRemove: PropTypes.func.isRequired,
    onPositionPick: PropTypes.func.isRequired,
    onModelChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    t: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    showPreview: PropTypes.bool,
  }

  handleRemove = () => {
    this.props.onRemove(this.props.id);
  }

  handlePositionPick = () => {
    this.props.onPositionPick(this.props.id);
  }

  handleModelChange = (model) => {
    this.props.onModelChange(this.props.id, model);
  }

  render() {
    const { id, filename, url, disabled, model, allTags, error, t, language, showPreview } = this.props;
    return (
      <React.Fragment key={id}>
        {showPreview ? (
          <img className="gallery-image gallery-image-upload" src={url || require('fm3/images/spinnerbar.gif')} alt={filename} />
        ) : (
          <h4>{filename}</h4>
        )}
        <fieldset disabled={disabled}>
          <GalleryEditForm
            {...{ model, allTags, error }}
            t={t}
            language={language}
            onPositionPick={disabled ? null : this.handlePositionPick}
            onModelChange={this.handleModelChange}
          />
          {' '}
          <Button onClick={this.handleRemove} bsStyle="danger">
            <FontAwesomeIcon icon="times" /> {t('general.remove')}
          </Button>
        </fieldset>
        <hr />
      </React.Fragment>
    );
  }
}