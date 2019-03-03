
//
let initialized = false;
let debug = true;

/**
 * Utilities
 */

const verifyInit = () => {
  if (!initialized) {
    console.warn('Pixel not initialized before using call ReactPixel.init with required params');
  }
  return initialized;
};

//
const log = (...args) => {
  console.info(...['[react-facebook-pixel]'].concat(args));
};

//
const defaultOptions = {
  autoConfig: true,
  debug: false
};

let rf_fbq;
let _rf_fbq;

//
export default {
  init(pixelId, advancedMatching = {}, options = defaultOptions) {
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (rf_fbq) return; n = rf_fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!_rf_fbq) _rf_fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = [];
    }({}, {}, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    if (!pixelId) {
      console.warn('Please insert pixel id for initializing');
    } else {
      if (options.autoConfig === false) {
        rf_fbq('set', 'autoConfig', false, pixelId); // eslint-disable-line no-undef
      }

      rf_fbq('init', pixelId, advancedMatching); // eslint-disable-line no-undef

      initialized = true;
      debug = options.debug;
    }
  },

  pageView() {
    if (!verifyInit()) {
      return;
    }

    rf_fbq('track', 'PageView'); // eslint-disable-line no-undef

    if (debug) {
      log('called rf_fbq(\'track\', \'PageView\');');
    }
  },

  track(title, data) {
    if (!verifyInit()) {
      return;
    }

    rf_fbq('track', title, data); // eslint-disable-line no-undef

    if (debug) {
      log(`called rf_fbq('track', '${title}');`);

      if (data) {
        log('with data', data);
      }
    }
  },

  trackCustom(event, data) {
    if (!verifyInit()) {
      return;
    }

    rf_fbq('trackCustom', event, data); // eslint-disable-line no-undef

    if (debug) {
      log(`called rf_fbq('trackCustom', '${event}');`);

      if (data) {
        log('with data', data);
      }
    }
  },

  rf_fbq(...args) {
    if (!verifyInit()) {
      return;
    }

    rf_fbq(...args); // eslint-disable-line no-undef

    if (debug) {
      log(`called rf_fbq('${args.slice(0, 2).join('\', \'')}')`);

      if (args[2]) {
        log('with data', args[2]);
      }
    }
  },
};
