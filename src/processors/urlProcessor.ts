import { history } from 'fm3/historyHolder';
import refModals from 'fm3/refModals.json';
import allTips from 'fm3/tips/index.json';
import { Processor } from 'fm3/middlewares/processorMiddleware';
import { mapRefocus } from 'fm3/actions/mapActions';
import { LatLon } from 'fm3/types/common';
import { isActionOf } from 'typesafe-actions';
import { drawingLineUpdatePoint } from 'fm3/actions/drawingLineActions';

const tipKeys = allTips.map(([key]) => key);

let lastActionType: string | undefined;

let previous: any[] = [];

export const urlProcessor: Processor = {
  actionCreator: '*',
  handle: async ({ getState, action }) => {
    const {
      map,
      routePlanner,
      trackViewer,
      gallery,
      drawingPoints,
      changesets,
      drawingLines,
      gallery: { filter: galleryFilter },
      main,
      tips,
      auth,
      tracking,
      maps,
    } = getState();

    if (!main.urlUpdatingEnabled) {
      return;
    }

    const next = [
      auth.chooseLoginMethod,
      changesets.authorName,
      changesets.days,
      drawingLines.lines,
      gallery.activeImageId,
      gallery.filter,
      gallery.showFilter,
      gallery.showUploadModal,
      drawingPoints.points,
      main.activeModal,
      main.embedFeatures,
      main.selection?.type,
      main.selection?.id,
      main.urlUpdatingEnabled,
      map.lat,
      map.lon,
      map.mapType,
      map.overlays,
      routePlanner,
      routePlanner.finish,
      routePlanner.midpoints,
      routePlanner.milestones,
      routePlanner.mode,
      routePlanner.start,
      routePlanner.transportType,
      tips.tip,
      tracking.trackedDevices,
      trackViewer.colorizeTrackBy,
      trackViewer.gpxUrl,
      trackViewer.osmNodeId,
      trackViewer.osmRelationId,
      trackViewer.osmWayId,
      trackViewer.trackUID,
      maps.id,
    ];

    if (
      previous.length === next.length &&
      previous.every((item, i) => next[i] === item)
    ) {
      return;
    }

    previous = next;

    const queryParts: [string, string | number | boolean][] = [
      ['map', `${map.zoom}/${serializePoint({ lat: map.lat, lon: map.lon })}`],
      ['layers', `${map.mapType}${map.overlays.join('')}`],
    ];

    if (main.selection?.type) {
      queryParts.push(['tool', main.selection?.type]);
    }

    const isMap = maps.id !== undefined;

    if (maps.id !== undefined) {
      queryParts.push(['id', maps.id]);
    }

    const historyParts: [string, string | number | boolean][] = isMap
      ? []
      : queryParts;

    if (
      routePlanner.start ||
      routePlanner.finish ||
      routePlanner.midpoints.length
    ) {
      historyParts.push([
        'points',
        `${[routePlanner.start, ...routePlanner.midpoints, routePlanner.finish]
          .map(point => serializePoint(point))
          .join(',')}`,
      ]);

      if (routePlanner.transportType) {
        historyParts.push(['transport', routePlanner.transportType]);
      }

      if (routePlanner.mode !== 'route') {
        historyParts.push(['route-mode', routePlanner.mode]);
      }

      if (routePlanner.milestones) {
        historyParts.push(['milestones', 1]);
      }
    }

    if (trackViewer.trackUID) {
      historyParts.push(['track-uid', trackViewer.trackUID]);
    }

    if (trackViewer.gpxUrl) {
      historyParts.push(['gpx-url', trackViewer.gpxUrl]);
    }

    if (trackViewer.osmNodeId) {
      historyParts.push(['osm-node', trackViewer.osmNodeId]);
    }

    if (trackViewer.osmWayId) {
      historyParts.push(['osm-way', trackViewer.osmWayId]);
    }

    if (trackViewer.osmRelationId) {
      historyParts.push(['osm-relation', trackViewer.osmRelationId]);
    }

    if (trackViewer.colorizeTrackBy) {
      historyParts.push(['track-colorize-by', trackViewer.colorizeTrackBy]);
    }

    if (gallery.activeImageId) {
      historyParts.push(['image', gallery.activeImageId]);
    }

    if (changesets.days) {
      historyParts.push(['changesets-days', changesets.days]);
    }

    if (changesets.authorName) {
      historyParts.push(['changesets-author', changesets.authorName]);
    }

    if (drawingPoints.points.length) {
      for (const point of drawingPoints.points) {
        historyParts.push([
          'point',
          `${serializePoint(point)}${point.label ? `;${point.label}` : ''}`,
        ]);
      }
    }

    for (const line of drawingLines.lines) {
      historyParts.push([
        line.type,
        `${line.points.map(point => serializePoint(point)).join(',')}${
          line.label ? `;${line.label}` : ''
        }`,
      ]);
    }

    if (galleryFilter.userId) {
      historyParts.push(['gallery-user-id', galleryFilter.userId]);
    }

    if (galleryFilter.tag) {
      historyParts.push(['gallery-tag', galleryFilter.tag]);
    }

    if (galleryFilter.ratingFrom) {
      historyParts.push(['gallery-rating-from', galleryFilter.ratingFrom]);
    }

    if (galleryFilter.ratingTo) {
      historyParts.push(['gallery-rating-to', galleryFilter.ratingTo]);
    }

    if (galleryFilter.takenAtFrom) {
      historyParts.push([
        'gallery-taken-at-from',
        dateToString(galleryFilter.takenAtFrom),
      ]);
    }

    if (galleryFilter.takenAtTo) {
      historyParts.push([
        'gallery-taken-at-to',
        dateToString(galleryFilter.takenAtTo),
      ]);
    }

    if (galleryFilter.createdAtFrom) {
      historyParts.push([
        'gallery-created-at-from',
        dateToString(galleryFilter.createdAtFrom),
      ]);
    }

    if (galleryFilter.createdAtTo) {
      historyParts.push([
        'gallery-created-at-to',
        dateToString(galleryFilter.createdAtTo),
      ]);
    }

    if (main.activeModal && refModals.includes(main.activeModal)) {
      historyParts.push(['show', main.activeModal]);
    }

    if (gallery.showFilter) {
      historyParts.push(['show', 'gallery-filter']);
    }

    if (gallery.showUploadModal) {
      historyParts.push(['show', 'gallery-upload']);
    }

    if (auth.chooseLoginMethod) {
      historyParts.push(['show', 'login']);
    }

    if (main.activeModal === 'tips' && tips.tip && tipKeys.includes(tips.tip)) {
      historyParts.push(['tip', tips.tip]);
    }

    if (main.embedFeatures.length) {
      historyParts.push(['embed', main.embedFeatures.join(',')]);
    }

    for (const {
      id,
      label,
      color,
      width,
      fromTime,
      maxCount,
      maxAge,
      splitDistance,
      splitDuration,
    } of tracking.trackedDevices) {
      const parts = [id];

      if (fromTime) {
        parts.push(`f:${fromTime.toISOString()}`);
      }

      if (typeof maxCount === 'number') {
        parts.push(`n:${maxCount}`);
      }

      if (typeof maxAge === 'number') {
        parts.push(`a:${maxAge}`);
      }

      if (typeof width === 'number') {
        parts.push(`w:${width}`);
      }

      if (typeof splitDistance === 'number') {
        parts.push(`sd:${splitDistance}`);
      }

      if (typeof splitDuration === 'number') {
        parts.push(`st:${splitDuration}`);
      }

      if (color) {
        parts.push(`c:${encodeURIComponent(color.replace(/\//g, '_'))}`);
      }

      if (label) {
        parts.push(`l:${encodeURIComponent(label.replace(/\//g, '_'))}`);
      }

      historyParts.push(['track', parts.join('/')]);
    }

    if (
      main.selection?.type === 'tracking' &&
      main.selection?.id !== undefined
    ) {
      historyParts.push(['follow', main.selection?.id]);
    }

    const state = isMap ? serializeQuery(historyParts) : undefined;

    const search = serializeQuery(queryParts);

    if (
      (isMap && state !== history.location.state) ||
      search !== window.location.search
    ) {
      const method =
        lastActionType &&
        isActionOf([mapRefocus, drawingLineUpdatePoint], action)
          ? 'replace'
          : 'push';

      history[method]({
        pathname: '/',
        search: search,
        state: state,
      });

      lastActionType = action.type;
    }
  },
};

function serializePoint(point: LatLon | null) {
  return point ? `${point.lat.toFixed(6)}/${point.lon.toFixed(6)}` : '';
}

function dateToString(d: Date) {
  return d.toISOString().replace(/T.*/, '');
}

function serializeQuery(parts: [string, string | number | boolean][]) {
  return `?${parts
    .map(
      qp =>
        `${encodeURIComponent(qp[0])}=${encodeURIComponent(qp[1])
          // FIXME replacing is nonstandard
          .replace(/%2F/g, '/')}`,
    )
    .join('&')}`;
}
