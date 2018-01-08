/* eslint-disable no-template-curly-in-string */

export default {
  general: {
    elevationProfile: 'Elevation profile',
    save: 'Save',
    cancel: 'Cancel',
    modify: 'Modify',
    delete: 'Delete',
    remove: 'Remove',
    close: 'Close',
    exitFullscreen: 'Exit fullscreen mode',
    fullscreen: 'Fullscreen',
    yes: 'Yes',
    no: 'No',
    masl: 'm.a.s.l.',
    copyCode: 'Copy code',
    loading: 'Loading…',
    ok: 'OK',
    preventShowingAgain: "Don't show next time",
    closeWithoutSaving: 'Close the window with unsaved changes?',
    back: 'Back',
  },

  tools: {
    tools: 'Tools',
    routePlanner: 'Route finder',
    objects: 'Objects (POIs)',
    gallery: 'Photos',
    measurement: 'Measurement',
    trackViewer: 'Track viewer (GPX)',
    infoPoint: 'Pin',
    changesets: 'Map changes',
    mapDetails: 'Map details',
  },

  routePlanner: {
    start: 'Start',
    finish: 'Finish',
    swap: 'Swap start and finish',
    point: {
      pick: 'Select on the map',
      current: 'Your position',
      home: 'Home position',
    },
    transportType: {
      car: 'Car',
      'car-free': 'Car (toll free)',
      imhd: 'Public transport (in devel.)',
      bike: 'Bicycle',
      'foot-stroller': 'Stroller / Wheelchair',
      nordic: 'Nordic skiing',
      ski: 'Downhill skiing',
      foot: 'Foot',
    },
    alternative: 'Alternative',
    distance: 'Distance: {value} km',
    duration: 'Duration: {h} h {m} m',
    removeMidpoint: 'Remove this midpoint?',
    noHomeAlert: 'You must first set your home position in settings.',
    showMidpointHint: 'To add a midpoint drag route segment to the desired position.',
    gpsError: 'Error getting your current location.',
    routeNotFound: 'No route found. Try to change parameters or move the route points.',
    fetchingError: 'Error finding the route: {err}',
    maneuverWithName: '{type} {modifier} on {name}',
    maneuverWithoutName: '{type} {modifier}',

    maneuver: {
      types: {
        turn: 'odbočte',
        'new name': 'choďte',
        depart: 'začnite',
        arrive: 'ukončte',
        merge: 'pokračujte',
        // 'ramp':
        'on ramp': 'choďte na príjazdovú cestu',
        'off ramp': 'opusťte príjazdovú cestu',
        fork: 'zvoľte cestu',
        'end of road': 'pokračujte',
        // 'use lane':
        continue: 'pokračujte',
        roundabout: 'vojdite na kruhový objazd',
        rotary: 'vojdite na okružnú cestu',
        'roundabout turn': 'na kruhovom objazde odbočte',
        // 'notification':
        'exit rotary': 'opusťte okružnú cestu', // undocumented
        'exit roundabout': 'opusťte kruhový objazd', // undocumented
      },

      modifiers: {
        uturn: 'otočte sa',
        'sharp right': 'prudko doprava',
        'slight right': 'mierne doprava',
        right: 'doprava',
        'sharp left': 'prudko doľava',
        'slight left': 'mierne doľava',
        left: 'doľava',
        straight: 'priamo',
      },
    },
  },

  more: {
    more: 'More',
    logOut: 'Log out {name}',
    logIn: 'Log in',
    settings: 'Settings',
    gpxExport: 'Export to GPX',
    mapExports: 'Map exports',
    shareMap: 'Share map',
    embedMap: 'Embed map',
    reportMapError: 'Report map problem',
    reportAppError: 'Report application problem',
    supportUs: 'Support Freemap',
    help: 'Help',
    back: 'Back',
    mapLegend: 'Map legend',
    contacts: 'Contacts',
    tips: 'Tips',
    facebook: 'Freemap on Facebook',
    twitter: 'Freemap on Twitter',
    github: 'Freemap on GitHub',
    automaticLanguage: 'Automatic',
  },

  main: {
    clearMap: 'Clear map elements',
    close: 'Close',
    closeTool: 'Close tool',
    locateMe: 'Locate me',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    devInfo: 'This is a testing version of Freemap Slovakia. For production version navigate to <a href="https://www.freemap.sk/">www.freemap.sk</a>.',
  },

  gallery: {
    filter: 'Filter',
    allPhotos: 'All photos',
    upload: 'Upload',
    f: {
      firstUploaded: 'from first uploaded',
      lastUploaded: 'from last uploaded',
      firstCaptured: 'from oldest',
      lastCaptured: 'from newest',
      leastRated: 'from least rated',
      mostRated: 'from most rated',
    },
    viewer: {
      title: 'Photo',
      comments: 'Comments',
      newComment: 'New comment',
      addComment: 'Add',
      yourRating: 'Your rating:',
      showOnTheMap: 'Show on the map',
      openInNewWindow: 'Open in new window',
      uploaded: 'Uploaded by {username} on {createdAt}',
      captured: 'Captured on {takenAt}',
      deletePrompt: 'Delete this picture?',
    },
    editForm: {
      name: 'Name',
      description: 'Description',
      takenAt: {
        datetime: 'Capture date and time',
        date: 'Capture date',
        time: 'Capture time',
      },
      location: 'Location',
      tags: 'Tags',
      setLocation: 'Set the location',
    },
    uploadModal: {
      title: 'Upload photos',
      uploading: 'Uploading ({n})',
      upload: 'Upload',
      rules: `
        <p>Drop your photos here or click here to select them.</p>
        <ul>
          <li>Do not upload too small photos (thumbnails). Maximum dimensions are not limited. The maximum file size is limited to 10MB. Bigger files will be rejected.</li>
          <li>Upload only photos of landscapes or documentation pictures. Portraits and macro photos are undesirable and will be deleted without warning.</li>
          <li>Please upload only your own photos.</li>
          <li>Uploaded photos are further distributed under the license CC-BY-SA 2.0.</li>
          <li>The operator Freemap.sk hereby disclaims all liability and is not liable for direct or indirect damages resulting from publication of a photo in the gallery. The person who has uploaded the picture on the server is fully responsible for the photo.</li>
          <li>The operator reserves the right to edit the description, name, position and tags of photo, or to delete the photo if the content is inappropriate (violate these rules).</li>
          <li>The operator reserves the right to delete the account in case that the user repeatedly violates the gallery policy by publishing inappropriate content.</li>
        </ul>
      `,
      success: 'Pictures has been successfuly uploaded.',
    },
    locationPicking: {
      title: 'Select photo location',
    },
    layerHint: 'To show map photo overlay please select Photos from Map layers menu (or press keys Shift+F).',
    deletingError: 'Error deleting photo: {err}',
    tagsFetchingError: 'Error fetching tags: {err}',
    pictureFetchingError: 'Error fetching photo: {err}',
    picturesFetchingError: 'Error fetching photos: {err}',
    savingError: 'Error saving photo: {err}',
    commentAddingError: 'Error adding comment: {err}',
    ratingError: 'Error rating photo: {err}',
    unauthenticatedError: 'You must be logged in to upload the photos to the gallery.',
  },

  measurement: {
    distance: 'Distance',
    elevation: 'Elevation and position',
    area: 'Area',
    elevationLine: 'Elevation:',
    removePoint: 'Remove point?',
    elevationFetchError: 'Error fetching point elevation: {err}',
  },

  trackViewer: {
    upload: 'Upload',
    moreInfo: 'More info',
    share: 'Share',
    colorizingMode: {
      none: 'Inactive',
      elevation: 'Elevation',
      steepness: 'Steepness',
    },
    details: {
      startTime: 'Start time',
      finishTime: 'Finish time',
      duration: 'Duration',
      distance: 'Distance',
      avgSpeed: 'Average speed',
      minEle: 'Min. elevation',
      maxEle: 'Max. elevation',
      uphill: 'Total climb',
      downhill: 'Total descend',
      durationValue: '{h} hours {m} minutes',
    },
    uploadModal: {
      title: 'Upload the track',
      drop: 'Drop your .gpx file here or click here to select it.',
    },
    shareModal: {
      title: 'Share the track',
      description: 'Track is available at the following address:',
    },
    fetchingError: 'Error fetching track data: {err}',
    savingError: 'Error saving the track: {err}',
    tooBigError: 'Size of the uploaded track is bigger than the limit {maxSize} MB.',
  },

  infoPoint: {
    modify: 'Change label',
    edit: {
      title: 'Change pin label',
      label: 'Pin description:',
      example: 'We will meet here.',
      hint: 'For pin without a label leave its description empty.',
    },
  },

  settings: {
    tab: {
      map: 'Map',
      account: 'Account',
      general: 'General',
      expert: 'Expert',
    },
    map: {
      imgFormat: {
        label: 'Tile format for car, hiking and bicycle map:',
        hint: 'Map looks better if PNG format is used but it requires to download app. 4x more data than for JPEG. '
          + 'On slow internet connection we recommend to select JPEG.',
      },
      overlayPaneOpacity: 'Map line features opacity:',
      homeLocation: {
        label: 'Home location:',
        select: 'Select on the map',
        undefined: 'undefined',
      },
    },
    account: {
      name: 'Name',
      email: 'E-Mail',
      noAuthInfo: 'Only for logged-in users.',
    },
    general: {
      tips: 'Show tips on page opening',
    },
    expert: {
      switch: 'Expert mode:',
      off: 'Off',
      on: 'On',
      offInfo: 'Expert mode offers features for advanced users.',
      overlayOpacity: 'Layer opacity:',
      trackViewerEleSmoothing: {
        label: 'Smoothing level for computing total climb/descend in Track viewer: {value}',
        info: 'For value 1 all elevations are used separately. Higher values represent floating window width used to smooth elevations.',
      },
    },
    saveSuccess: 'Settings have been saved.',
    savingError: 'Errro saving settings: {err}',
  },

  changesets: {
    allAuthors: 'All authors',
    download: 'Download changes',
    olderThan: 'return `${days} days`',
    olderThanFull: 'return `Changesets older than ${days} days`',
    notFound: 'No changesets found.',
    fetchError: 'Error fetching changesets: {err}',
  },

  mapDetails: {
    road: 'Road info',
    notFound: 'No road found.',
    fetchingError: 'Error fetching road details: {err}',
  },

  objects: {
    type: 'Type',
    lowZoomAlert: 'Object finding is possible only from zoom level 12.',
    fetchingError: 'Error fetching objects (POIs): {err}',
    categories: {
      1: 'Nature',
      2: 'Services',
      3: 'Transportation',
      4: 'Monuments',
      5: 'Health service',
      6: 'Shops',
      7: 'Energetics',
      8: 'Accomodation and food',
      9: 'Tourism',
      10: 'Uzemné členenie',
      11: 'Others',
      12: 'Free time',
      13: 'Sport',
      14: 'Education',
      15: 'Cycling',
    },
    subcategories: {
      1: 'Cave',
      2: 'Peak',
      3: 'Gas station',
      4: 'Restaurant',
      5: 'Hotel',
      6: 'Parking',
      7: 'Airport',
      8: 'Tram station',
      9: 'Bus station',
      10: 'Bus stop',
      11: 'Castle',
      12: 'Castle - Zámok',
      13: 'Ruin',
      14: 'Museum',
      15: 'Monument',
      16: 'Memorial',
      17: 'Pharmacy',
      18: 'Hospital',
      19: 'Ordinácia',
      20: 'Police',
      21: 'Clinic',
      22: 'Hraničný prechod',
      23: 'Hospital with emergency',
      24: 'Supermarket',
      26: 'Nuclear power plant',
      27: 'Coal power plant',
      28: 'Hydroelectric power plant',
      29: 'Wind power plant',
      30: 'Grocery',
      31: 'Fire station',
      32: 'Church',
      33: 'Pub',
      34: 'Bank',
      35: 'ATM',
      36: 'Fast food',
      39: 'Bank',
      40: 'Viewpoint',
      41: 'Camping',
      42: 'Protected trees',
      43: 'Spring',
      44: 'Guidepost',
      45: 'Orientation map',
      46: 'Alpine hut',
      47: 'Shelter',
      48: 'Post office',
      49: 'Memorial, battlefield',
      50: 'Hunting stand',
      51: 'Communication tower',
      52: 'Observation tower',
      53: 'Motel',
      54: 'Guest house',
      55: 'Family pension',
      56: 'Regionálne mesto',
      57: 'Okresné mesto',
      58: 'City',
      59: 'Town',
      60: 'Village',
      61: 'Hamlet',
      62: 'Mestský obvod',
      63: 'Horáreň',
      64: 'Dentist',
      65: 'Bicycle shop',
      66: 'Bicycle rack',
      67: 'Bicycle rental',
      68: 'Liquer store',
      69: 'Art',
      70: 'Bakery',
      71: 'Beauty care',
      72: 'Beds',
      73: 'Drinks',
      74: 'Book store',
      75: 'Boutique',
      76: 'Butcher',
      77: 'Car sales',
      78: 'Car service',
      79: 'Charity',
      80: 'Drug store',
      81: 'Clothes',
      82: 'Computers',
      83: 'Cukrovinky',
      84: 'Copy shop',
      85: 'Záclony a závesy',
      86: 'Delikatesy',
      87: 'Department store',
      88: 'Diving equipment',
      89: 'Dry cleaners',
      90: 'Domáce výrobky',
      91: 'Electronics',
      92: 'Erotika',
      93: 'Firemná predajňa',
      94: 'Farmárske produkty',
      95: 'Flower shop',
      96: 'Obrazy',
      97: 'furnace',
      98: 'funeral_directors',
      99: 'Furniture',
      100: 'Garden centre',
      101: 'Rozličný tovar',
      102: 'Gift shop',
      103: 'glaziery',
      104: 'Fruits and vegetables',
      105: 'Hairdressers',
      106: 'Hardware',
      107: 'Hearing aids',
      108: 'HI-FI',
      109: 'Ice cream',
      110: 'Interior decoration',
      111: 'Goldsmith',
      112: 'Kiosk',
      113: 'Houseware',
      114: 'Laundry',
      115: 'Shopping center',
      116: 'Massage',
      117: 'Mobile phones',
      118: 'Money lender',
      119: 'Motorcycle',
      120: 'Music store',
      121: 'Newspaper',
      122: 'Optics',
      123: 'Organic food',
      124: 'Outdoor',
      125: 'Paint',
      126: 'Pawnbroker',
      127: 'Animals',
      128: 'Seafood',
      129: 'Second hand',
      130: 'Shoes',
      131: 'Sporting goods',
      132: 'Stationery',
      133: 'Tattoo',
      134: 'Toy store',
      135: 'Trade',
      136: 'Vacant',
      137: 'Vacuum cleaner',
      138: 'Variety store',
      139: 'Video/DVD',
      140: 'ZOO',
      141: 'Horská chata',
      142: 'Attraction',
      143: 'Toilettes',
      144: 'Telephone',
      145: 'Miestny úrad',
      146: 'Prison',
      147: 'Marketplace',
      148: 'Bar',
      149: 'Cafe',
      150: 'Public grill',
      151: 'Drinking water',
      152: 'Taxi',
      153: 'Library',
      154: 'Car wash',
      155: 'Vet',
      156: 'Traffic light',
      157: 'Railway station',
      158: 'Rail crossing',
      159: 'Tram station',
      160: 'Heliport',
      161: 'Water tower',
      162: 'Windmill',
      163: 'Sauna',
      164: 'LPG station',
      166: 'Park for dogs',
      167: 'Sports center',
      168: 'Golf courser',
      169: 'Stadium',
      170: 'Leisure',
      171: 'Water park',
      172: 'Boating',
      173: 'Fishing',
      174: 'Park',
      175: 'Playground',
      176: 'Garden',
      177: 'Public area',
      178: 'Ice rink',
      179: 'Mini-golf',
      180: 'Dance',
      181: 'Elementary school',
      182: '9pin',
      183: 'Bowling',
      184: 'American football',
      185: 'Archery',
      186: 'Athletics',
      187: 'Australian football',
      188: 'Baseball',
      189: 'Basketball',
      190: 'Beach volleyball',
      191: 'Bmx',
      192: 'Boules',
      193: 'Bowls',
      194: 'Canadian football',
      195: 'Kanoe',
      196: 'Chess',
      197: 'Climbing',
      198: 'Cricket',
      199: 'Cricket nets',
      200: 'Croquet',
      201: 'Cycling',
      202: 'Diving',
      203: 'Dog racing',
      204: 'Horse riding',
      205: 'Football',
      206: 'Gaelic football',
      207: 'Golf',
      208: 'Gymnastics',
      209: 'Hockey',
      210: 'Horseshoes',
      211: 'Horserace',
      212: 'Ice stock',
      213: 'Korfball',
      214: 'Motorcycles',
      215: 'Multi',
      216: 'Orienteering',
      217: 'Paddle tennis',
      218: 'Paragliding',
      219: 'Pelota',
      220: 'Racquet',
      221: 'Rowing',
      222: 'Rugby league',
      223: 'Rugby union',
      224: 'Shooting',
      225: 'Ice skating',
      226: 'Skateboard',
      227: 'Skiing',
      228: 'Football',
      229: 'Swimming',
      230: 'Table tennis',
      231: 'Handball',
      232: 'Tennis',
      233: 'Water slide',
      234: 'Volleyball',
      235: 'Water skiing',
      236: 'University',
      237: 'Kindergarden',
      238: 'High school',
      239: 'Driving school',
      240: 'Chapel',
      241: 'Picnic site',
      242: 'Firepit',
      243: 'Locality',
      244: 'Waterfall',
      245: 'Lake',
      246: 'Dam',
      248: 'Natural reservation',
      249: 'Prírodná pamiatka',
      250: 'Chránený areál',
      251: 'Chránená krajinná oblasť',
      252: 'Národný park',
      253: 'Milk vending machine',
      254: 'Významné mokriny (RAMSAR)',
      255: 'Address points',
      256: 'Mineshaft',
      257: 'Štôlňa',
      258: 'Well',
      259: 'Cross',
      260: 'Sanctuary',
      261: 'Fittness',
      262: 'Steam power plant',
      263: 'Kaštieľ',
      264: 'Geomorphological classification',
      265: 'Military bunker',
      266: 'Highway exit',
      267: 'Statue',
      268: 'Chimney',
      269: 'Paragliding',
      270: 'Hang gliding',
      271: 'Feeding place',
      272: 'Fireplace',
      273: 'Bedminton/Squash',
      274: 'Guidepost',
      275: 'Bicycle charging station',
    },
  },

  external: {
    openInExternal: 'Open in external application',
    osm: 'OpenStreetMap',
    oma: 'OMA',
    googleMaps: 'Google Maps',
    hiking_sk: 'Hiking.sk',
    'mapy_cz-aerial': 'Mapy.cz Aerial',
    josm: 'Edit in JOSM',
    id: 'Edit in iD',
    'routing-debug': 'Routing debugger',
  },

  search: {
    inProgress: 'Searching…',
    noResults: 'No results found',
    prompt: 'Enter the place',
    routeFrom: 'Route from here',
    routeTo: 'Route to here',
    fetchingError: 'Searching error: {err}',
  },

  shareMap: {
    label: 'Current map view is available at the following URL:',
  },

  embed: {
    code: 'Put the following code to your HTML page:',
    example: 'The result will look like this:',
  },

  tips: {
    previous: 'Previous tip',
    next: 'Next tip',
    prevent: "Don't show next time",
  },

  supportUs: {
    explanation: 'Map portal Freemap is created by volunteers for free in their spare time. For the operation it still needs a hardware and services of commercial companies which costs us money.',
    account: 'Bank account:',
    paypal: 'Donate with PayPal',
    thanks: "We'll appreciate every donation. Thank you!",
    registration: 'Registered in MV/VVS/1-900/90-34343 at 2nd of October 2009',
  },

  gpxExport: {
    export: 'Export',
    what: {
      plannedRoute: 'route found',
      objects: 'objects (POIs)',
      pictures: 'photos (in the visible map area)',
      distanceMeasurement: 'distance measurement',
      areaMeasurement: 'area measutement',
      elevationMeasurement: 'elevation and position measurement',
      infoPoint: 'infopoint',
    },
    disabledAlert: 'Only checkboxes having anything in the map to export are enabled.',
  },

  logIn: {
    with: {
      facebook: 'Log-in with Facebook',
      google: 'Log-in with Google',
      osm: 'Log-in with OpenStreetMap',
    },
    success: 'You have been successfuly logged in.',
    logInError: 'Error logging in: {err}',
    logInError2: 'Error logging in.',
    logOutError: 'Error logging out: {err}',
    verifyError: 'Error verifying authentication: {err}',
  },

  logOut: {
    success: 'You have been successfuly logged out.',
  },

  mapLayers: {
    layers: 'Map layers',
    photoFilterWarning: 'Photo filtering is active',
    minZoomWarning: 'Accessible from zoom {minZoom}',
    base: {
      A: 'Car',
      T: 'Hiking',
      C: 'Bicycle',
      K: 'Ski',
      S: 'Aerial',
      O: 'OpenStreetMap',
      M: 'mtbmap.cz',
      p: 'OpenTopoMap',
      b: 'Humanitarian',
      d: 'Public transport (ÖPNV)',
      i: 'Infomap',
      j: 'Infomap BW',
      h: 'Historic',
    },
    overlay: {
      I: 'Photos',
      n: 'Forest tracks NLC 2016',
      l: 'Forest tracks NLC',
      g: 'OSM GPS traces',
      t: 'Hiking trails',
      c: 'Bicycle trails',
      q: 'OpenSnowMap',
      r: 'Rendering clients',
      s0: 'Strava (all)',
      s1: 'Strava (rides)',
      s2: 'Strava (runs)',
      s3: 'Strava  (water activities)',
      s4: 'Strava (winter activities)',
    },
    type: {
      map: 'map',
      data: 'data',
      photos: 'pictures',
    },
    attr: {
      freemap: '© Freemap Slovakia',
      osmData: '© OpenStreetMap contributors',
      srtm: '© SRTM',
      hot: '© Humanitarian OpenStreetMap Team',
    },
  },

  elevationChart: {
    distance: 'Distance [km]',
    ele: 'Elevation [m.a.s.l.]',
    fetchError: 'Error fetching elevation profile data: {err}',
  },

  errorCatcher: {
    html: `
      <h1>Oops!</h1>
      <p>
        Something bad has happened.
      </p>
      <p>
        Please, <a href="https://github.com/FreemapSlovakia/freemap-v3-react/issues/new" target="_blank" rel="noopener noreferrer">report this problem</a>,
        or email it to <a href="mailto:freemap@freemap.sk?subject=Nahlásenie%20chyby%20na%20www.freemap.sk">freemap@freemap.sk</a>.
        Please don't forget to add a short description about what have you done to get this error and attached debugging data.
      </p>
      <p>
        Thank you.
      </p>
      You can try:
      <ul>
        <li><a href="">reload last page</a></li>
        <li><a href="/">load initial page</a></li>
        <li><a href="/?reset-local-storage">clear local data and load initial page</a></li>
      </ul>
      <h2>Debugging data</h2>
    `,
  },

  osm: {
    fetchingError: 'Error fetching OSM data: {err}',
  },

  roadDetails: {
    roadType: 'Road type:',
    surface: 'Surface:',
    suitableBikeType: 'Recommended bicycle:',
    lastChange: 'Last change:',
    edit: 'Edit in {id} or {josm}.',
    surfaces: {
      asphalt: 'asphalt',
      gravel: 'gravel',
      fine_gravel: 'fine gravel',
      dirt: 'dirt',
      ground: 'ground',
      cobblestone: 'cobblestone',
      compacted: 'compacted',
      paved: 'paved',
      unknown: 'unknown',
      unpaved: 'unpaved',
      'concrete:plates': 'concrete plates',
      concrete: 'concrete',
      grass: 'grass',
    },
    trackClasses: {
      motorway: 'motorway',
      trunk: 'trunk',
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
      service: 'service',
      unclassified: 'unclassified',
      residential: 'residential',
      grade1: 'paved or heavily compacted hardcore surface, 1st grade',
      grade2: 'unpaved track with surface of gravel mixed with a varying amount of sand, silt, and clay, 2nd grade',
      grade3: 'almost always an unpaved track, 3rd grade',
      grade4: 'almost always an unpaved track prominently with soil/sand/grass, 4th grade',
      grade5: 'almost always an unpaved track lacking hard materials, 5th grade',
      path: 'path',
      footway: 'footway',
      pedestrian: 'pedestrian',
      unknown: 'unknown',
    },
    bicycleTypes: {
      'road-bike': 'road bike',
      'trekking-bike': 'trekking bike',
      'mtb-bike': 'mountain bike',
      'no-bike': 'bicycle forbidden',
      unknown: 'unknown',
    },
  },
};
