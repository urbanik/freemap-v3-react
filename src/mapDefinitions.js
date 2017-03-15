const baseSpecs = [ [ 'A', 'Automapa' ], [ 'T', 'Turistická' ], [ 'C', 'Cyklomapa' ], [ 'K', 'Lyžiarska' ] ];

export const baseLayers = baseSpecs.map(([ type, name ]) => {
  return {
    name,
    type,
    url: `https://{s}.freemap.sk/${type}/{z}/{x}/{y}.{tileFormat}`,
    attribution: 'prispievatelia © <a href="https://osm.org/copyright">OpenStreetMap</a>',
    minZoom: 7,
    maxZoom: 16
  };
});

export const overlayLayers = [
  {
    name: 'Galéria obrázkov',
    type: 'I',
    url: `http://t1.freemap.sk/data/layers/presets/X~I/{z}/{x}/{y}t.png`,
    minZoom: 7,
    maxZoom: 16
  }
];
