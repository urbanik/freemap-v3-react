export function trackViewerSetData(trackGpx) {
  return { type: 'TRACK_VIEWER_SET_TRACK_DATA', payload: { trackGpx } };
}

export function trackViewerSetTrackUID(trackUID) {
  return { type: 'TRACK_VIEWER_SET_TRACK_UID', payload: trackUID };
}

export function trackViewerDownloadTrack(trackUID) {
  return { type: 'TRACK_VIEWER_DOWNLOAD_TRACK', payload: trackUID };
}

export function trackViewerUploadTrack() {
  return { type: 'TRACK_VIEWER_UPLOAD_TRACK' };
}

export function trackViewerSetEleSmoothingFactor(eleSmoothingFactor) {
  return { type: 'TRACK_VIEWER_SET_ELE_SMOOTHING_FACTOR', payload: eleSmoothingFactor };
}

export function trackViewerLoadState(payload) {
  return { type: 'TRACK_VIEWER_LOAD_STATE', payload };
}
