/* The catalogue, as data. One page renders any product from this map, so a new
   app is a new entry rather than a new document. */

const PRODUCTS = {
  'monica': {
    name: 'Monica', glyph: 'M', logo: 'assets/monica-logo.jpg',
    tagline: 'A study app that teaches, draws and argues back.',
    status: 'dev', platform: 'Android',
    about: 'Monica is a study companion for university students. You give it your courses and topics, and it teaches: it explains, works problems on a live board, quizzes you, marks you, and keeps a record of what you have actually learned. There is no account and no cloud — everything is stored on your phone.',
    features: [
      'Classes in text or voice, with a live board that draws the working as it goes',
      'Practice and exam sittings that mark themselves and tick off what you know',
      'Books written for your course, chapter by chapter',
      'Bring your own model key — Gemini, or any compatible provider'
    ],
    privacy: [
      'No account and no server: courses, notes and results live on your device only',
      'The microphone is used only while a voice session is open, and audio is never recorded to a file',
      'Photos are sent only when you attach one to a question, and only to your chosen provider',
      'Ads through AdMob; no data brokers'
    ]
  },
  'degen-empire': {
    name: 'Degen Empire', glyph: 'DE',
    tagline: 'Business satire tycoon. Build conglomerates across crypto, Wall Street and aerospace.',
    status: 'testing', platform: 'Android · Google Play',
    about: 'Degen Empire is a tycoon game with a real economic model underneath the satire. Start with a dollar, compound it, and build across sectors while the market does what markets do. Currently in internal testing on Google Play.',
    features: [
      'Multi-sector conglomerates with real compounding',
      'Crypto DEX and Wall Street equities',
      'Luxury garages and trophy assets',
      'A live Forbes-style leaderboard'
    ],
    privacy: [
      'Google Sign-In is optional, for cloud saves across devices',
      'Leaderboard entries are your alias and your simulated fortune',
      'Ads through AdMob; purchases through Google Play'
    ]
  },
  'veronica': {
    name: 'Veronica', glyph: 'V',
    tagline: 'A writing agent that writes like you, not like a chatbot.',
    status: 'dev', platform: 'Android',
    about: 'Veronica is a writing agent for people who write for a living. It learns your voice from what you have written and drafts in it, rather than producing the flat register every assistant produces.',
    features: ['Learns your voice from your own writing', 'Drafts and rewrites in that voice', 'Runs on your own model key'],
    privacy: ['Your writing stays on your device', 'The model key is stored in encrypted storage and never leaves your phone except to your provider']
  },
  'kara': {
    name: 'Kara', glyph: 'K',
    tagline: 'An agent daemon for Windows, with a native desktop client.',
    status: 'dev', platform: 'Windows',
    about: 'Kara is a long-running agent that sits on the machine and does work: it holds tools, runs tasks and reports back. The client is a native desktop app; the engine is a separate daemon.',
    features: ['Persistent agent daemon', 'Tool use across the machine', 'Native desktop client'],
    privacy: ['Runs locally on your machine', 'No telemetry to us']
  },
  'cosmos-browser': {
    name: 'Cosmos Browser', glyph: 'CB',
    tagline: 'A privacy-first desktop browser built on Chromium.',
    status: 'dev', platform: 'Windows',
    about: 'Cosmos is a Chromium-based desktop browser with the privacy layer turned up: tracking and fingerprinting protection by default, and no profile sold to anyone.',
    features: ['Chromium engine', 'Tracker and fingerprint blocking', 'No account required'],
    privacy: ['Browsing history stays on your machine', 'No telemetry to us']
  },
  'cosmos': {
    name: 'COSMOS', glyph: 'C',
    tagline: 'An Android browser an AI agent can drive while the UI is closed.',
    status: 'dev', platform: 'Android',
    about: 'COSMOS is an Android browser built so an agent can operate it: it can navigate, read and act on pages while the interface is closed, then hand you back the result.',
    features: ['Agent-drivable browsing', 'Works with the UI closed', 'Flutter interface over a native engine'],
    privacy: ['Browsing data stays on the device', 'Agent sessions are local']
  },
  'kene-cut': {
    name: 'Kene Cut', glyph: 'KC',
    tagline: 'An agent-native video editor for Windows.',
    status: 'dev', platform: 'Windows',
    about: 'Kene Cut is a desktop video editor built around an agent: you describe the cut you want, and it performs it on the timeline instead of telling you which menu to open.',
    features: ['Agent-driven timeline edits', 'Desktop-native performance', 'Project files stay local'],
    privacy: ['Your footage never leaves your machine', 'No upload step']
  },
  'interlux': {
    name: 'Interlux', glyph: 'IX',
    tagline: 'A modern, open-source terminal for Android.',
    status: 'dev', platform: 'Android',
    about: 'Interlux is a terminal for Android with a proper Linux userland, a package manager, and a JSON-RPC interface so other apps can drive it.',
    features: ['Full Linux userland on the phone', 'Package management', 'Local API for other apps'],
    privacy: ['Open source', 'No telemetry']
  },
  'cycle-tracker': {
    name: 'Cycle Tracker', glyph: 'CT',
    tagline: 'Private, on-device period tracking. No cloud, no account.',
    status: 'dev', platform: 'Android',
    about: 'Cycle Tracker records cycles on the device and predicts from them. There is no account and no sync, because a period record is not something that should sit on someone else\'s server.',
    features: ['On-device cycle log and predictions', 'No account, no cloud', 'Works offline'],
    privacy: ['Health data never leaves the phone', 'No analytics, no ads in the tracker itself', 'Full detail in the Cycle Tracker privacy notice']
  },
  'interlife': {
    name: 'Interlife', glyph: 'IL',
    tagline: 'A life simulator where every choice compounds.',
    status: 'dev', platform: 'Android',
    about: 'Interlife is a life simulation: school, work, money, relationships, and the consequences of all of it. Choices compound rather than reset.',
    features: ['Long-horizon life simulation', 'Consequences that carry forward', 'Built on the Expo stack'],
    privacy: ['Progress stored on your device', 'Ads through AdMob']
  },
  'kene-keyboard': {
    name: 'Kene Keyboard', glyph: 'KK',
    tagline: 'A full Windows-style keyboard for Android.',
    status: 'dev', platform: 'Android',
    about: 'Kene Keyboard brings a full desktop layout — function row, modifiers, punctuation where you expect it — to Android, for people who type on a phone the way they type on a PC.',
    features: ['Desktop key layout', 'Function and modifier rows', 'System keyboard, works in every app'],
    privacy: ['Keystrokes are never transmitted', 'No learning or profiling of what you type']
  },
  'lagos-hustle': {
    name: 'Lagos Hustle', glyph: 'LH',
    tagline: 'Street-level hustle economy, built for the city it is named after.',
    status: 'dev', platform: 'Android',
    about: 'Lagos Hustle is a game about building something from nothing in Lagos: trading, moving goods, taking risks, and compounding whatever you manage to keep.',
    features: ['Street-level trading economy', 'Risk and reinvestment', 'Built in-house'],
    privacy: ['Progress stored on your device', 'Ads through AdMob']
  },
  'free-surf': {
    name: 'Free Surf', glyph: 'FS',
    tagline: 'Browsing without the weight.',
    status: 'dev', platform: 'Android',
    about: 'Free Surf is a lightweight browser: fast to open, light on memory, and without the tracking that comes bundled with most of them.',
    features: ['Light footprint', 'Tracker blocking', 'No account'],
    privacy: ['History stays on the device', 'No telemetry']
  },
  'procam': {
    name: 'Procam', glyph: 'PC',
    tagline: 'A camera app with real manual control.',
    status: 'dev', platform: 'Android',
    about: 'Procam is a camera app for people who want the settings: exposure, focus and the rest, without the automatic mode fighting them.',
    features: ['Manual exposure and focus', 'Clean capture interface', 'No cloud upload'],
    privacy: ['Photos stay on your device unless you share them', 'No analytics']
  },
  'songify': {
    name: 'Songify', glyph: 'SG',
    tagline: 'Music, on your terms.',
    status: 'dev', platform: 'Android',
    about: 'Songify is a music player built for local libraries: your files, your order, your interface.',
    features: ['Local library playback', 'Playlists and queues', 'No account'],
    privacy: ['Your library is never uploaded', 'No listening telemetry']
  },
  'doc-studio': {
    name: 'Doc Studio', glyph: 'DS',
    tagline: 'Documents that behave like documents, not forms.',
    status: 'dev', platform: 'Android',
    about: 'Doc Studio is a document editor for the phone that respects how documents actually work — structure, styles, and text you can select.',
    features: ['Structured editing', 'Local files', 'Export to standard formats'],
    privacy: ['Documents stay on your device', 'No cloud by default']
  },
  'vegrae-earn': {
    name: 'VeGrae Earn', glyph: 'VE',
    tagline: 'A web platform for earning, built on the modern stack.',
    status: 'dev', platform: 'Web',
    about: 'VeGrae Earn is a web platform, built on Next.js, for people who want to earn online without the usual noise.',
    features: ['Runs in the browser', 'Modern web stack', 'No app install'],
    privacy: ['Account data is limited to what the service needs', 'No data sold to brokers']
  }
};
