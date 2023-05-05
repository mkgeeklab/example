(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
var FrameworkId;
(function(FrameworkId2) {
  FrameworkId2["NO_FRAMEWORK"] = "no_framework";
  FrameworkId2["CORDOVA"] = "cordova";
  FrameworkId2["CAPACITOR"] = "capacitor";
})(FrameworkId || (FrameworkId = {}));
const HTML_COLORS = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgrey": "#a9a9a9",
  "darkgreen": "#006400",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkslategrey": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dimgrey": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "grey": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred ": "#cd5c5c",
  "indigo  ": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgray": "#d3d3d3",
  "lightgrey": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightslategrey": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370db",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#db7093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "slategrey": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "transparent": "#00000000",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
};
const HTMLElementBaseStatus = {
  NOT_READY: 0,
  VIEW_CREATING: 1,
  VIEW_CREATED: 2,
  VIEW_RELEASED: 3
};
const IGNORE_TAGS = [
  "script",
  "style",
  "caption",
  "svg"
];
var PlatformId;
(function(PlatformId2) {
  PlatformId2["BROWSER"] = "browser";
  PlatformId2["ANDROID"] = "android";
  PlatformId2["IOS"] = "ios";
})(PlatformId || (PlatformId = {}));
var PluginResultType;
(function(PluginResultType2) {
  PluginResultType2[PluginResultType2["CONTINUE"] = 0] = "CONTINUE";
  PluginResultType2[PluginResultType2["VOID"] = 1] = "VOID";
  PluginResultType2[PluginResultType2["STRING"] = 2] = "STRING";
  PluginResultType2[PluginResultType2["DICTIONARY"] = 3] = "DICTIONARY";
})(PluginResultType || (PluginResultType = {}));
const attachTransparentClass = (element) => {
  if (!element || element.tagName.startsWith("g-"))
    return;
  if (element.classList && !element.classList.contains("_gmh_css_")) {
    element.classList.add("_gmh_css_");
  } else if (element.className && element.className.indexOf("_gmh_css_") === -1) {
    element.className = element.className + " _gmh_css_";
  }
  if (element.shadowRoot) {
    let styleAttr = element.getAttribute("style") || "";
    styleAttr = [
      styleAttr,
      "--ion-background-color: var(--pgm-background-color) !important;",
      "--background-color: var(--pgm-background-color) !important;",
      "--background: var(--pgm-background-color) !important;"
    ].join("");
    element.setAttribute("style", styleAttr);
  }
};
const compareObjs = (a, b) => {
  const typeA = typeof a;
  const typeB = typeof b;
  if (typeA !== typeB) {
    return false;
  }
  let result = true;
  if (a && typeA === "object") {
    if (Array.isArray(a)) {
      result = a.length === b.length;
      for (let i = 0; i < a.length && result; i++) {
        result = compareObjs(a[i], b[i]);
      }
    } else {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      result = compareObjs(keysA, keysB);
      for (let i = 0; result && i < keysA.length; i++) {
        const key = keysA[i];
        result = compareObjs(a[key], b[key]);
      }
    }
  } else {
    result = a === b;
  }
  return result;
};
const getStyle = (element, styleProperty) => {
  return document.defaultView.getComputedStyle(element, null).getPropertyValue(styleProperty);
};
window.getStyle = getStyle;
const isDom = (element) => {
  if (!element)
    return false;
  return element.nodeType === Node.ELEMENT_NODE && IGNORE_TAGS.indexOf(element.tagName.toLowerCase()) === -1 && element instanceof SVGElement === false && typeof element.getBoundingClientRect === "function";
};
const shouldWatchByNative = (element) => {
  if (element === document.body) {
    return true;
  }
  if (!element || element.nodeType !== Node.ELEMENT_NODE || !isDom(element)) {
    return false;
  }
  const tagName = element.tagName.toLowerCase();
  if (IGNORE_TAGS.indexOf(tagName) > -1) {
    return false;
  }
  const displayCSS = getStyle(element, "display");
  return displayCSS !== "none";
};
const getPluginDomId = (element) => {
  if (!element || !shouldWatchByNative(element)) {
    return "";
  }
  let elemId = element.__pluginDomId || "";
  if (!elemId) {
    elemId = element === document.body ? "root" : `pgm${Math.floor(Math.random() * Date.now())}`;
    Reflect.defineProperty(element, "__pluginDomId", {
      enumerable: false,
      value: elemId,
      writable: false
    });
  }
  return elemId;
};
const _privateSymbol = Symbol("HTMLElementBase");
class HTMLElementBase extends HTMLElement {
  constructor() {
    super();
    this.state = new MVCBaseObject();
    this.viewId = getPluginDomId(this);
    this.changeFunctions = {};
    this._initStatus = HTMLElementBaseStatus.NOT_READY;
    this._isConnected = false;
    this._isRemoved = false;
    this.mutationObserver = new MutationObserver(this._onMutations.bind(this));
    this.onInsertAtListener = this.onCommandFromChildren.bind(this);
    this.SUBSCRIPTIONS_FIELD = {};
    window.mkgeeklab.googlemaps.elements[this.viewId] = this;
    Reflect.defineProperty(this, "_symbol", {
      enumerable: false,
      value: _privateSymbol,
      writable: false
    });
  }
  setAttributeChangeListener(propertyName, listener) {
    if (!listener) {
      delete this.changeFunctions[propertyName];
    } else {
      this.changeFunctions[propertyName] = listener;
    }
  }
  /**
   * Returns the id of this instance
   */
  getId() {
    return `${this.viewId}`;
  }
  /**
   * Invoked each time one of the custom element's attributes is added, removed, or changed.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name in this.changeFunctions) {
      this.changeFunctions[name].call(this, name, oldValue, newValue);
    }
  }
  /*****************************
   * hasParent property
   ******************************/
  get hasParent() {
    return this._isConnected;
  }
  /*****************************
   * initStatus property
   ******************************/
  get initStatus() {
    return this._initStatus;
  }
  set initStatus(status) {
    if (status === HTMLElementBaseStatus.VIEW_CREATING && this._initStatus === HTMLElementBaseStatus.NOT_READY || status === HTMLElementBaseStatus.VIEW_CREATED && (this._initStatus === HTMLElementBaseStatus.VIEW_CREATING || this._initStatus === HTMLElementBaseStatus.VIEW_RELEASED) || status === HTMLElementBaseStatus.VIEW_RELEASED && this._initStatus === HTMLElementBaseStatus.VIEW_CREATED) {
      this._initStatus = status;
      this.dispatchEvent(new CustomEvent("initStatus_changed", {
        detail: {
          status
        }
      }));
      if (status === HTMLElementBaseStatus.VIEW_CREATED) {
        this.dispatchEvent(new CustomEvent("ready"));
      }
    }
  }
  /*****************************
   * ready property
   ******************************/
  get ready() {
    return this._initStatus === HTMLElementBaseStatus.VIEW_CREATED;
  }
  /*****************************
   * isRemoved property
   ******************************/
  get isRemoved() {
    return this._isRemoved;
  }
  onCommandFromChildren(event) {
  }
  onChildrenAdded(children) {
  }
  onChildrenRemoved(children) {
  }
  /**
   * Invoked when new elements are added or removed
   */
  _onMutations(mutations, caller) {
    const addedChildren = [];
    const removedChildren = [];
    mutations.forEach((mutation) => {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElementBase) {
            const element = node;
            addedChildren.push(element);
            element.addEventListener("command", this.onInsertAtListener);
          }
        });
      }
      if (mutation.removedNodes && mutation.removedNodes.length > 0) {
        mutation.removedNodes.forEach((node) => {
          if (node instanceof HTMLElementBase) {
            const element = node;
            element.removeEventListener("command", this.onInsertAtListener);
            removedChildren.push(element);
          }
        });
      }
    });
    if (addedChildren.length > 0) {
      this.onChildrenAdded(addedChildren);
    }
    if (removedChildren.length > 0) {
      this.onChildrenRemoved(removedChildren);
    }
  }
  // tslint:disable-next-line
  connectedCallback() {
    this._isConnected = true;
    this.onConnected();
  }
  async onConnected() {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    const children = Array.from(this.children);
    children.forEach((element) => {
      if (element instanceof HTMLElementBase) {
        element.addEventListener("command", this.onInsertAtListener);
      }
    });
    this.mutationObserver.observe(this, {
      childList: true
    });
    this.dispatchEvent(new CustomEvent("isConnected_changed", {
      detail: true
    }));
  }
  // tslint:disable-next-line
  disconnectedCallback() {
    this._isConnected = false;
    this.onDisconnected();
  }
  async onDisconnected() {
    this.mutationObserver.disconnect();
    new CustomEvent("parentChanged", {
      detail: {
        connected: false
      }
    });
    const children = Array.from(this.children);
    children.forEach((element) => {
      if (element instanceof HTMLElementBase) {
        element.removeEventListener("command", this.onInsertAtListener);
      }
    });
    this.dispatchEvent(new CustomEvent("isConnected_changed", {
      detail: false
    }));
  }
  remove() {
    super.remove();
    this._isRemoved = true;
    this.dispatchEvent(new CustomEvent("removed"));
  }
  hasEventListener(eventName) {
    return eventName in this.SUBSCRIPTIONS_FIELD && Object.keys(this.SUBSCRIPTIONS_FIELD[eventName]).length > 0;
  }
  /**
   * Adds an event listener for specified event.
   * @params {eventName} eventName
   * @params {listener}
   */
  addEventListener(eventName, listener, options) {
    if (!listener || typeof listener !== "function") {
      throw Error("Listener for addEventListener() method is not a function");
    }
    let hashCode = listener._hashCode;
    if (!hashCode) {
      hashCode = Math.floor(Date.now() * Math.random()).toString();
      Reflect.defineProperty(listener, "_hashCode", {
        value: hashCode,
        writable: false,
        enumerable: false
      });
    }
    this.SUBSCRIPTIONS_FIELD[eventName] = this.SUBSCRIPTIONS_FIELD[eventName] || {};
    this.SUBSCRIPTIONS_FIELD[eventName][hashCode] = {
      "kind": "on",
      "once": options && options.once === true,
      "listener": listener
    };
  }
  /**
   * Removes an event listener
   * @params {eventName} eventName
   * @params {listener}
   */
  removeEventListener(eventName, listener) {
    if (!eventName) {
      const eventNames = Object.keys(this.SUBSCRIPTIONS_FIELD);
      eventNames.forEach((evtName) => {
        const keys = Object.keys(this.SUBSCRIPTIONS_FIELD[evtName]);
        keys.forEach((_hashCode) => {
          const info = this.SUBSCRIPTIONS_FIELD[evtName][_hashCode];
          if (!info.listener._protect) {
            delete this.SUBSCRIPTIONS_FIELD[evtName][_hashCode];
          }
        });
      });
      return;
    }
    if (!listener) {
      const keys = Object.keys(this.SUBSCRIPTIONS_FIELD[eventName]);
      keys.forEach((_hashCode) => {
        const info = this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        if (!info.listener._protect) {
          delete this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        }
      });
      if (this.SUBSCRIPTIONS_FIELD[eventName].length === 0) {
        delete this.SUBSCRIPTIONS_FIELD[eventName];
      }
    } else {
      const _hashCode = listener._hashCode;
      if (!_hashCode) {
        return;
      }
      if (this.SUBSCRIPTIONS_FIELD[eventName] && this.SUBSCRIPTIONS_FIELD[eventName][_hashCode]) {
        if (!this.SUBSCRIPTIONS_FIELD[eventName][_hashCode].listener._protect) {
          delete this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        }
      }
    }
  }
  dispatchEvent(event) {
    if (!event) {
      return false;
    }
    Object.defineProperty(event, "target", {
      value: this,
      writable: false,
      enumerable: true
    });
    const eventName = event.type;
    if (!this.SUBSCRIPTIONS_FIELD[eventName]) {
      return false;
    }
    const listenerHashMap = this.SUBSCRIPTIONS_FIELD[eventName];
    const keys = Object.keys(listenerHashMap);
    keys.forEach((_hashCode) => {
      if (this.SUBSCRIPTIONS_FIELD && eventName in this.SUBSCRIPTIONS_FIELD && _hashCode in this.SUBSCRIPTIONS_FIELD[eventName]) {
        const info = this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        Promise.resolve().then(() => info.listener(event));
        if (info.once === true) {
          delete this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        }
      }
    });
    return true;
  }
}
const toFixedForGoogleMaps = (num, precision = 6) => {
  const result = num.toFixed(precision);
  return result.replace(/0+$/, "").replace(/\.$/, "");
};
class LatLng extends HTMLElementBase {
  static get observedAttributes() {
    return ["lat", "lng"];
  }
  constructor(lat = 0, lng = 0, noWrap = false) {
    super();
    this._timer = null;
    this._changed = false;
    this._update = this._onUpdate.bind(this);
    this._on_attr_changed = (name, oldValue, newValue) => this._onAttrChanged(name, oldValue, newValue);
    if (!noWrap) {
      lat = Math.max(-90, Math.min(90, lat));
      if (lng > 180) {
        lng = -180 + lng % 180;
      } else if (lng < -180) {
        lng = 180 + lng % 180;
      }
    }
    this._lat = lat;
    this._lng = lng;
    this.setAttributeChangeListener("lat", this._on_attr_changed);
    this.setAttributeChangeListener("lng", this._on_attr_changed);
  }
  connectedCallback() {
    if (this.hasAttribute("lat") && this.hasAttribute("lng")) {
      const lat = this.getAttribute("lat");
      const lng = this.getAttribute("lng");
      if (lat !== null && lng !== null) {
        this._lat = parseFloat(lat);
        this._lng = parseFloat(lng);
        this._changed = true;
        this._onUpdate();
      }
    }
  }
  _onAttrChanged(name, oldValue, newValue) {
    if (name === "lat") {
      this._lat = parseFloat(newValue);
    } else {
      this._lng = parseFloat(newValue);
    }
    this._changed = true;
    this._onPropertyChanged();
  }
  _onPropertyChanged() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
    this._timer = setTimeout(this._update, 15);
  }
  _onUpdate() {
    this._timer = null;
    if (!this._changed) {
      return;
    }
    this._changed = false;
    this.dispatchEvent(new CustomEvent("command", {
      detail: {
        methodName: "setPosition",
        latLng: {
          lat: this._lat,
          lng: this._lng
        }
      }
    }));
  }
  /**
   * Comparison function.
   * @method
   * @return {Boolean}
   */
  equals(other) {
    if (!other)
      return false;
    if (other instanceof LatLng) {
      return this._lat === other.lat && this._lng === other.lng;
    } else {
      return this._lat === other.lat && this._lng === other.lng;
    }
  }
  set lat(latitude) {
    this.setAttribute("lat", latitude + "");
    if (typeof latitude === "string") {
      latitude = parseFloat(latitude);
    }
    this._lat = latitude;
    this._changed = true;
    this._onPropertyChanged();
  }
  /**
   * Returns the latitude in degrees.
   * @return {number}
   */
  get lat() {
    return this._lat;
  }
  set lng(longitude) {
    this.setAttribute("lng", longitude + "");
    if (typeof longitude === "string") {
      longitude = parseFloat(longitude);
    }
    this._lng = longitude;
    this._changed = true;
    this._onPropertyChanged();
  }
  /**
   * Returns the longitude in degrees.
   * @return {number}
   */
  get lng() {
    return this._lng;
  }
  setPosition(latLng) {
    this._lat = latLng.lat;
    this._lng = latLng.lng;
    this._changed = true;
    this._onPropertyChanged();
  }
  getPosition() {
    return {
      lat: this._lat,
      lng: this._lng
    };
  }
  /**
   * @method
   * @return {String} latitude,lontitude
   */
  toString() {
    return "(" + this._lat + ", " + this._lng + ")";
  }
  /**
   * @method
   * @param {Number}
   * @return {String} latitude,lontitude
   */
  toUrlValue(precision = 6) {
    return [
      toFixedForGoogleMaps(this._lat, precision),
      toFixedForGoogleMaps(this._lng, precision)
    ].join(",");
  }
  /**
   * Converts to JSON representation. This function is intended to be used via JSON.stringify.
   *
   * @method
   * @param {Number}
   * @return {ILatLng} latitude,lontitude
   */
  toJSON() {
    return {
      lat: this._lat,
      lng: this._lng
    };
  }
}
const isILatLng = (target) => {
  return !!target && typeof target === "object" && "lat" in target && typeof target.lat === "number" && "lng" in target && typeof target.lng === "number";
};
const toILatLng = (target) => {
  if (!target) {
    throw new Error("The first argument of toILatlng can not be null");
  }
  if (isILatLng(target)) {
    return {
      "lat": target.lat,
      "lng": target.lng
    };
  }
  if (target instanceof LatLng) {
    return {
      "lat": target.lat,
      "lng": target.lng
    };
  }
  throw new Error("Cannot convert to ILatLng");
};
const truncateValue = (value, valMin, valMax) => {
  return Math.min(Math.max(value, valMin), valMax);
};
class Projection {
  constructor() {
    this.TILE_SIZE = 256;
    this.pixelOrigin = {
      x: 0,
      y: 0
    };
    this.pixelsPerLngDegree = 0;
    this.pixelsPerLngRadian = 0;
    this.pixelOrigin = {
      x: this.TILE_SIZE / 2,
      y: this.TILE_SIZE / 2
    };
    this.pixelsPerLngDegree = this.TILE_SIZE / 360;
    this.pixelsPerLngRadian = this.TILE_SIZE / (2 * Math.PI);
  }
  degreesToRadius(degrees) {
    return degrees * (Math.PI / 180);
  }
  radiansToDegrees(radians) {
    return radians / (Math.PI / 180);
  }
  fromLatLngToPoint(position) {
    const iLatLng = toILatLng(position);
    const point = { x: 0, y: 0 };
    point.x = this.pixelOrigin.x + iLatLng.lng * this.pixelsPerLngDegree;
    const siny = truncateValue(Math.sin(this.degreesToRadius(iLatLng.lat)), -0.9999, 0.9999);
    point.y = this.pixelOrigin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -this.pixelsPerLngRadian;
    return point;
  }
  fromPointToLatLng(point, noWrap = false) {
    const lng = (point.x - this.pixelOrigin.x) / this.pixelsPerLngDegree;
    const latRadians = (point.y - this.pixelOrigin.y) / -this.pixelsPerLngRadian;
    const lat = this.radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2);
    return {
      lat,
      lng,
      noWrap
    };
  }
}
class MVCBaseObject {
  constructor() {
    this.VARS_FIELD = {};
    this.SUBSCRIPTIONS_FIELD = {};
    this.hashCode = Math.floor(Date.now() * Math.random());
  }
  remove(key) {
    delete this.VARS_FIELD[key];
  }
  has(key) {
    return this.VARS_FIELD.hasOwnProperty(key);
  }
  get(key) {
    if (this.VARS_FIELD.hasOwnProperty(key)) {
      return this.VARS_FIELD[key];
    } else {
      return void 0;
    }
  }
  set(key, value, noNotify = false) {
    if (key === "__pgmId")
      return;
    const prevValue = this.get(key);
    this.VARS_FIELD[key] = value;
    if (!noNotify && prevValue !== value) {
      this.dispatchEvent(new CustomEvent(`${key}_changed`, {
        detail: {
          prevValue,
          value,
          key
        }
      }));
    }
  }
  bindTo(key, target, targetKey, noNotify = false) {
    if (key === "__pgmId")
      return;
    targetKey = targetKey || key;
    target.set(targetKey, this.VARS_FIELD[key], noNotify);
    this.addEventListener(key + "_changed", (event) => {
      target.set(targetKey, event.detail.value);
    });
  }
  trigger(eventName, detail = {}) {
    return this.dispatchEvent(new CustomEvent(eventName, {
      detail
    }));
  }
  dispatchEvent(event) {
    if (!event) {
      return false;
    }
    const eventName = event.type;
    if (!this.SUBSCRIPTIONS_FIELD[eventName]) {
      return false;
    }
    const listenerHashMap = this.SUBSCRIPTIONS_FIELD[eventName];
    const keys = Object.keys(listenerHashMap);
    keys.forEach((_hashCode) => {
      if (this.SUBSCRIPTIONS_FIELD && eventName in this.SUBSCRIPTIONS_FIELD && _hashCode in this.SUBSCRIPTIONS_FIELD[eventName]) {
        const info = this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        switch (info.kind) {
          case "on":
            info.listener.call(this, event);
            break;
          case "onThrottled":
            info.event = event;
            if (!info.timer) {
              info.timer = setTimeout(() => {
                info.listener.apply(this, info.event);
                info.timer = null;
              }, info.interval);
            }
            break;
        }
      }
    });
    return true;
  }
  addEventListener(eventName, listener) {
    if (!listener || typeof listener !== "function") {
      throw Error("Listener for addEventListener() method is not a function");
    }
    let hashCode = listener._hashCode;
    if (!hashCode) {
      hashCode = Math.floor(Date.now() * Math.random()).toString();
      Reflect.defineProperty(listener, "_hashCode", {
        value: hashCode,
        writable: false,
        enumerable: false
      });
    }
    this.SUBSCRIPTIONS_FIELD[eventName] = this.SUBSCRIPTIONS_FIELD[eventName] || {};
    this.SUBSCRIPTIONS_FIELD[eventName][hashCode] = {
      "kind": "on",
      "listener": listener
    };
  }
  removeEventListener(eventName, listener) {
    if (!eventName) {
      const eventNames = Object.keys(this.SUBSCRIPTIONS_FIELD);
      eventNames.forEach((evtName) => {
        const keys = Object.keys(this.SUBSCRIPTIONS_FIELD[evtName]);
        keys.forEach((_hashCode) => {
          const info = this.SUBSCRIPTIONS_FIELD[evtName][_hashCode];
          if (!info.listener._protect) {
            delete this.SUBSCRIPTIONS_FIELD[evtName][_hashCode];
          }
        });
      });
      return;
    }
    if (!listener) {
      const keys = Object.keys(this.SUBSCRIPTIONS_FIELD[eventName]);
      keys.forEach((_hashCode) => {
        const info = this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        if (!info.listener._protect) {
          delete this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        }
      });
      if (this.SUBSCRIPTIONS_FIELD[eventName].length === 0) {
        delete this.SUBSCRIPTIONS_FIELD[eventName];
      }
    } else {
      const _hashCode = listener._hashCode;
      if (!_hashCode) {
        return;
      }
      if (this.SUBSCRIPTIONS_FIELD[eventName] && this.SUBSCRIPTIONS_FIELD[eventName][_hashCode]) {
        if (!this.SUBSCRIPTIONS_FIELD[eventName][_hashCode].listener._protect) {
          delete this.SUBSCRIPTIONS_FIELD[eventName][_hashCode];
        }
      }
    }
  }
  addEventListenerOnce(eventName, listener) {
    const callbackFn = (event) => {
      this.removeEventListener(eventName, callbackFn);
      listener.call(this, event);
    };
    this.addEventListener(eventName, callbackFn);
  }
  hasEventListener(eventName) {
    return eventName in this.SUBSCRIPTIONS_FIELD && Object.keys(this.SUBSCRIPTIONS_FIELD[eventName]).length > 0;
  }
  release() {
    this.removeEventListener();
    const vars = this.VARS_FIELD;
    Object.keys(vars).forEach((name) => {
      vars[name] = null;
      delete vars[name];
    });
  }
  toJSON() {
    const result = {};
    const keys = Object.keys(this.VARS_FIELD);
    keys.forEach((key) => {
      const value = this.VARS_FIELD[key];
      result[key] = value && typeof value.toJSON === "function" ? value.toJSON() : value;
    });
    return result;
  }
}
const nextTick = (fn) => {
  Promise.resolve().then(fn);
};
class MVCBaseArray extends MVCBaseObject {
  constructor(array) {
    super();
    this.ARRAY_FIELD = [];
    if (array && (array instanceof Array || Array.isArray(array))) {
      array.forEach((item) => {
        this.ARRAY_FIELD.push(item);
      });
    }
  }
  /**
   * The same as `Array.map` but runs a single async operation at a time.
   *
   * @name mapSeries
   * @param {(item: T, idx: number, next: () => void) => void} iteratee - An async function to apply to each item in array.
   * @return {Promise<any[]>} a promise.
   */
  mapSeries(iteratee) {
    if (typeof iteratee !== "function") {
      throw new Error("iteratee must be a function");
    }
    const _arrayLength = this.ARRAY_FIELD.length;
    if (_arrayLength === 0) {
      return Promise.resolve([]);
    }
    let currentCnt = 0;
    const _looper = (currentIdx, resolve) => {
      iteratee(this.ARRAY_FIELD[currentIdx], currentIdx, (value) => {
        results[currentIdx] = value;
        currentCnt++;
        if (_arrayLength === currentCnt) {
          resolve(results);
        } else {
          nextTick(() => {
            _looper(currentIdx + 1, resolve);
          });
        }
      });
    };
    const results = [];
    return new Promise((resolve, reject) => {
      try {
        nextTick(() => {
          _looper(0, resolve);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  /**
   * The same as `Array.map` but runs async all `iteratee` function at the same time.
   *
   * ```
   * MVCArray.mapAsync(function(item, idx, callback) {
   *    ...
   *    callback(value);
   * }).then(function(values) {
   *
   * });
   * ```
   *
   * @name mapAsync
   * @param {(item: T, idx: number, next: () => void) => void} iteratee - An async function to apply to each item in array.
   * @return {Promise} a promise
   */
  mapAsync(iteratee) {
    if (typeof iteratee !== "function") {
      throw new Error("iteratee must be a function");
    }
    const _arrayLength = this.ARRAY_FIELD.length;
    const results = new Array(_arrayLength);
    let finishCnt = 0;
    if (_arrayLength === 0) {
      return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
      this.ARRAY_FIELD.forEach((item, idx) => {
        try {
          iteratee(item, idx, (value) => {
            results[idx] = value;
            finishCnt++;
            if (finishCnt === _arrayLength) {
              resolve(results);
            }
          });
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  /**
   * The same as `Array.forEach`
   *
   * @name forEach
   * @param {(item: T, idx: number) => void} iteratee - An sync function to apply to each item in array.
   */
  forEach(iteratee) {
    if (typeof iteratee !== "function") {
      throw new Error("iteratee must be a function");
    }
    this.ARRAY_FIELD.forEach(iteratee);
  }
  /**
   * The same as `Array.forEach` but runs async all `iteratee` function at the same time.
   *
   * @name forEachAsync
   * @param {(item: T, idx: number, next: () => void) => void} iteratee - An async function to apply to each item in array.
   * @return {Promise<void>} a promise, if no calback if passed.
   */
  forEachAsync(iteratee) {
    if (typeof iteratee !== "function") {
      throw new Error("iteratee must be a function");
    }
    let finishCnt = 0;
    const _arrayLength = this.ARRAY_FIELD.length;
    if (_arrayLength === 0) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.ARRAY_FIELD.forEach((item, idx) => {
        try {
          iteratee(item, idx, () => {
            finishCnt++;
            if (finishCnt === _arrayLength) {
              resolve();
            }
          });
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  /**
   * The same as `Array.filter` but runs async all `iteratee` function at the same time.
   *
   * @name filterAsync
   * @param {Function} iteratee - An async function to apply to each item in array.
   * @return {Promise} a promise
   */
  filterAsync(iteratee) {
    if (typeof iteratee !== "function") {
      throw new Error("iteratee must be a function");
    }
    let finishCnt = 0;
    const _arrayLength = this.ARRAY_FIELD.length;
    if (_arrayLength === 0) {
      return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
      const results = [];
      try {
        this.ARRAY_FIELD.forEach((item, idx) => {
          iteratee(item, (isOk) => {
            results[idx] = isOk;
            finishCnt++;
            if (finishCnt === _arrayLength) {
              resolve(this.ARRAY_FIELD.filter((ignore, j) => {
                return results[j];
              }));
            }
          });
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  /**
   * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
   *
   * @name indexOf
   * @param {T} searchElement - Element to locate in the array.
   * @param {number} [searchElement] - The index to start the search at.
   * If the index is greater than or equal to the array's length, -1 is returned,
   * which means the array will not be searched.
   * If the provided index value is a negative number,
   * it is taken as the offset from the end of the array.
   * Note: if the provided index is negative, the array is still searched from front to back.
   * If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).
   * @return The first index of the element in the array; -1 if not found.
   */
  indexOf(item, searchElement) {
    searchElement = searchElement === void 0 || searchElement === null ? 0 : searchElement;
    if (typeof searchElement !== "number") {
      throw new Error("searchElement must be a number");
    }
    if (searchElement < 0) {
      throw new Error("searchElement must be over number than 0");
    }
    return this.ARRAY_FIELD.indexOf(item, searchElement);
  }
  /**
   * Removes all elements. Fire `remove_at` event for each element.
   *
   * @name clear
   * @param {boolean} [noNotify] - Sets `true` if you don't want to fire `remove_at` event.
   */
  clear(noNotify) {
    this.ARRAY_FIELD.length = 0;
    if (noNotify !== true) {
      this.dispatchEvent(new Event("remove_all"));
    }
  }
  /**
   * Adds one element to the end of an array and returns the new length of the array.
   * Fire `insert_at` event if `noNotify` is `false`.
   *
   * @name push
   * @param {T} value - The element to add to the end of the array.
   * @param {boolean} [noNotify] - Sets `true` if you don't want to fire `insert_at` event.
   * @return {number} The new length property of the object upon which the method was called.
   */
  push(value, noNotify) {
    this.ARRAY_FIELD.push(value);
    if (noNotify !== true) {
      this.dispatchEvent(new CustomEvent("insert_at", {
        detail: {
          index: this.ARRAY_FIELD.length - 1,
          value
        }
      }));
    }
    return this.ARRAY_FIELD.length;
  }
  /**
   * Adds one element to the end of an array and returns the new length of the array.
   * Fire `insert_at` event if `noNotify` is `false`.
   *
   * @name insertAt
   * @param {number} index - The position of the array you want to insert new element.
   * @param {any} value - The element to add to the end of the array.
   * @param {boolean} [noNotify] - Sets `true` if you don't want to fire `insert_at` event.
   * @return {number} The new length property of the object upon which the method was called.
   */
  insertAt(index, value, noNotify) {
    if (typeof index !== "number") {
      throw new Error("index must be a number");
    }
    if (index < 0) {
      throw new Error("index must be over number than 0");
    }
    this.ARRAY_FIELD.splice(index, 0, value);
    if (noNotify !== true) {
      this.dispatchEvent(new CustomEvent("insert_at", {
        detail: {
          index,
          value
        }
      }));
    }
    return this.ARRAY_FIELD.length;
  }
  /**
   * Returns a new array that is the clone of internal array.
   *
   * @name toArray
   * @return {Array<T>} New array
   */
  toArray() {
    const results = [];
    this.ARRAY_FIELD.forEach((item) => {
      results.push(item);
    });
    return results;
  }
  /**
   * Returns item of specified position.
   *
   * @name getAt
   * @param {number} index - The position of the array you want to get.
   * @return {T} item
   */
  getAt(index) {
    if (typeof index !== "number") {
      throw new Error("index must be a number");
    }
    if (index < 0) {
      throw new Error("index must be over number than 0");
    }
    if (index >= this.ARRAY_FIELD.length) {
      throw new Error("index must be lower number than " + this.ARRAY_FIELD.length);
    }
    return this.ARRAY_FIELD[index];
  }
  /**
   * Replaces item of specified position.
   *
   * @name setAt
   * @param {number} index - The position of the array you want to get.
   * @param {T} value - New element
   * @param {boolean} [noNotify] - Sets `true` if you don't want to fire `set_at` event.
   * @return {T} previous item
   */
  setAt(index, value, noNotify) {
    if (typeof index !== "number") {
      throw new Error("index must be a number");
    }
    if (index < 0) {
      throw new Error("index must be over number than 0");
    }
    if (index > this.ARRAY_FIELD.length) {
      this.ARRAY_FIELD.length = index;
    }
    const prevValue = this.ARRAY_FIELD[index];
    this.ARRAY_FIELD[index] = value;
    if (noNotify !== true) {
      this.dispatchEvent(new CustomEvent("set_at", {
        detail: {
          index,
          prevValue,
          value
        }
      }));
    }
    return prevValue;
  }
  /**
   * Removes item of specified position.
   *
   * @name removeAt
   * @param {number} index - The position of the array you want to get.
   * @param {boolean} [noNotify] - Sets `true` if you don't want to fire `remove_at` event.
   * @return {Tany} removed item
   */
  removeAt(index, noNotify) {
    if (typeof index !== "number") {
      throw new Error("index must be a number");
    }
    if (index < 0) {
      throw new Error("index must be over number than 0");
    }
    if (index >= this.ARRAY_FIELD.length) {
      throw new Error("index must be lower number than " + this.ARRAY_FIELD.length);
    }
    const prevValue = this.ARRAY_FIELD[index];
    this.ARRAY_FIELD.splice(index, 1);
    if (noNotify !== true) {
      this.dispatchEvent(new CustomEvent("remove_at", {
        detail: {
          index,
          prevValue
        }
      }));
    }
    return prevValue;
  }
  /**
   * Removes item of the last array item.
   *
   * @name pop
   * @param {boolean} [noNotify] - Sets `true` if you don't want to fire `remove_at` event.
   * @return {T} removed item
   */
  pop(noNotify) {
    const index = this.ARRAY_FIELD.length - 1;
    const value = this.ARRAY_FIELD.pop();
    if (noNotify !== true) {
      this.dispatchEvent(new CustomEvent("remove_at", {
        detail: {
          index,
          value
        }
      }));
    }
    return value;
  }
  /**
   * Returns the length of array.
   *
   * @name getLength
   * @return {number} Number of items
   */
  getLength() {
    return this.ARRAY_FIELD.length;
  }
  /**
   * Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
   *
   * @name reverse
   */
  reverse() {
    this.ARRAY_FIELD.reverse();
  }
  /**
   * The `sort()` method sorts the elements of an array in place and returns the array.
   * The same as `array.sort()`.
   *
   * @name sort
   * @param {Function} [compareFunction] - Specifies a function that defines the sort order.
   *  If omitted, the array is sorted according to each character's Unicode code point value,
   *  according to the string conversion of each element.
   */
  sort(compareFunction) {
    if (typeof compareFunction === "function") {
      this.ARRAY_FIELD.sort(compareFunction);
    } else {
      this.ARRAY_FIELD.sort();
    }
  }
}
const detachTransparentClass = (element) => {
  if (!element)
    return;
  if (element.classList && element.classList.contains("_gmh_css_")) {
    element.classList.remove("_gmh_css_");
  } else if (element.className && element.className.indexOf("_gmh_css_") > -1) {
    element.className = element.className.replace("_gmh_css_", "");
  }
  if (element.shadowRoot) {
    let styleAttr = element.getAttribute("style") || "";
    if (styleAttr && styleAttr.indexOf("--pgm-background-color") > -1) {
      styleAttr = styleAttr.replace("--ion-background-color: var(--pgm-background-color) !important;", "").replace("--background-color: var(--pgm-background-color) !important;", "").replace("--background: var(--pgm-background-color) !important;", "");
    }
    element.setAttribute("style", styleAttr);
    const hiddenChildList = element.querySelectorAll("*");
    const hiddenChildren = Array.prototype.splice(hiddenChildList, 0);
    hiddenChildren.forEach((item) => detachTransparentClass(item));
  }
};
const hasTransparentClass = (element) => {
  if (!element)
    return false;
  if (element.classList && element.classList.contains("_gmh_css_") || element.className && element.className.indexOf("_gmh_css_") > -1) {
    return true;
  } else {
    return false;
  }
};
class CustomViewBase extends HTMLElementBase {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");
    this._keepParentNode = null;
    this.projection = new Projection();
    this._execQueue = new MVCBaseArray();
    this._bind_onExecute = () => this.onExecute();
    this._bind_onInitStatusChanged = (event) => this._onInitStatusChanged(event);
    this.bufferedCommands = [];
    this.cmdQueue = window.mkgeeklab.googlemaps.getCommandQueue("api");
    this.addEventListener("initStatus_changed", this._bind_onInitStatusChanged);
  }
  getShadowRoot() {
    return this.shadow;
  }
  getProjection() {
    return this.projection;
  }
  onChildrenRemoved(children) {
    const overlayIDs = children.map((child) => {
      return child.__pluginDomId;
    });
    this.execPromise(this.viewId, "detachOverlayFromMap", overlayIDs);
  }
  remove() {
    super.remove();
    this.execPromise(this.viewId, "releaseView", [
      {
        id: this.__pluginDomId
      }
    ]);
  }
  /**
   * Invokes a function in native side.
   */
  execPromise(pluginName, methodName, args = [], execOptions = {}) {
    if (this.isRemoved) {
      return Promise.reject(`<${this.tagName} __pluginDomId="${this.viewId}"> has been already removed`);
    }
    if (this.cmdQueue && this.initStatus < HTMLElementBaseStatus.VIEW_CREATED && pluginName === "GoogleMaps") {
      return this.cmdQueue.execPromise(pluginName, methodName, args, execOptions);
    }
    return new Promise((onSuccess, onError) => {
      this._execQueue.push({
        pluginName,
        methodName,
        args,
        execOptions,
        onSuccess,
        onError
      });
    });
  }
  async connectedCallback() {
    await super.connectedCallback();
    this.style.overflow = "hidden !important";
    let elem = this.parentElement;
    while (!!elem && elem.nodeType === Node.ELEMENT_NODE) {
      if (!hasTransparentClass(elem)) {
        let bg = getStyle(elem, "--background");
        if (!bg) {
          bg = getStyle(elem, "background-color");
        }
        bg = (bg || "").trim();
        attachTransparentClass(elem);
      }
      elem = elem.parentElement;
    }
    this._keepParentNode = this.parentElement;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.initStatus = HTMLElementBaseStatus.VIEW_RELEASED;
    let elem = this._keepParentNode;
    while (!!elem && elem.nodeType === Node.ELEMENT_NODE) {
      if (hasTransparentClass(elem)) {
        detachTransparentClass(elem);
      }
      elem = elem.parentElement;
    }
    this._keepParentNode = null;
  }
  _onInitStatusChanged(event) {
    const status = event.detail.status;
    if (status === HTMLElementBaseStatus.VIEW_CREATED) {
      this._execQueue.addEventListener("insert_at", this._bind_onExecute);
      this._execQueue.dispatchEvent(new CustomEvent("insert_at"));
      this.bufferedCommands.forEach((cmd) => {
        this._execQueue.push(cmd);
      });
      this.bufferedCommands = [];
    } else if (status === HTMLElementBaseStatus.VIEW_RELEASED) {
      this._execQueue.removeEventListener("insert_at", this._bind_onExecute);
    }
  }
  /**
   * Invoked when insert a command
   */
  onExecute() {
    if (!this.cmdQueue) {
      return;
    }
    const viewId = this.getId();
    while (this._execQueue.getLength() > 0) {
      const cmd = this._execQueue.removeAt(0, true);
      if (cmd) {
        cmd.pluginName = cmd.pluginName === "(parent)" ? viewId : cmd.pluginName;
        this.cmdQueue.execPromise(cmd.pluginName, cmd.methodName, cmd.args, cmd.execOptions).then(cmd.onSuccess).catch(cmd.onError);
      }
    }
  }
  /**
   * Statements from overlays.
   *
   * If this view is not ready (not VIEW_CREATED status),
   * the statements are buffered once.
   * Then those statements are processed at _onInitStatusChanged
   */
  onCommandFromChildren(event) {
    this.getId();
    const customEvent = event;
    const commands = customEvent.detail;
    if (this.initStatus !== HTMLElementBaseStatus.VIEW_CREATED) {
      commands.forEach((cmd) => {
        this.bufferedCommands.push(cmd);
      });
    } else {
      if (this.bufferedCommands.length > 0) {
        this.bufferedCommands.forEach((cmd) => {
          this._execQueue.push(cmd);
        });
        this.bufferedCommands = [];
      }
      commands.forEach((cmd) => {
        this._execQueue.push(cmd);
      });
    }
  }
}
const equalPositions = (target1, target2) => {
  if (target1 === null || target2 === null) {
    return false;
  }
  if (target1 instanceof LatLng) {
    target1 = target1.toJSON();
  }
  if (target2 instanceof LatLng) {
    target2 = target2.toJSON();
  }
  return isILatLng(target1) && isILatLng(target2) && target1.lat === target2.lat && target1.lng === target2.lng;
};
const createEvent = (eventName, properties = {}) => {
  let evt;
  if (typeof CustomEvent === "function") {
    evt = new CustomEvent(eventName, {
      bubbles: true,
      detail: properties || null
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(eventName, true, false);
    if (properties) {
      Object.keys(properties).forEach((key) => {
        if (!(key in properties)) {
          Reflect.defineProperty(evt, key, {
            value: properties[key],
            writable: false,
            enumerable: true
          });
        }
      });
    }
  }
  return evt;
};
const getComputedCSS = (target, propName) => {
  let value = getStyle(target, `--${propName}`);
  if (value === "" || value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    value = value.trim();
    const lowerValue = value.toLowerCase();
    if (lowerValue === "true" || lowerValue === "false") {
      return value === "true";
    }
    if (lowerValue === "none" || lowerValue === "undefined") {
      return void 0;
    }
  }
  return value;
};
const getElementByPluginDomId = (elemId) => {
  if (!window.mkgeeklab || !window.mkgeeklab.googlemaps) {
    return void 0;
  }
  if (elemId in window.mkgeeklab.googlemaps.elements) {
    return window.mkgeeklab.googlemaps.elements[elemId];
  }
  const targets = Array.from(document.querySelectorAll("*"));
  const viewTags = targets.filter((element) => {
    return element.__pluginDomId === elemId;
  });
  if (viewTags.length === 1) {
    window.mkgeeklab.googlemaps.elements[elemId] = viewTags[0];
    return viewTags[0];
  } else {
    delete window.mkgeeklab.googlemaps.elements[elemId];
    return void 0;
  }
};
const getElementRect = (element) => {
  if (!isDom(element)) {
    throw new Error(`[getElementRect] given element ${element.tagName} is not supported.`);
  }
  const rect = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };
  const domRect = element.getBoundingClientRect();
  if (element === document.body) {
    rect.left = Math.max(domRect.left, window.pageXOffset);
    rect.top = Math.max(domRect.top, window.pageYOffset);
    rect.width = Math.max(domRect.width, window.innerWidth);
    rect.height = Math.max(domRect.height, window.innerHeight);
  } else {
    rect.left = domRect.left;
    rect.top = domRect.top;
    rect.width = domRect.width;
    rect.height = domRect.height;
  }
  return rect;
};
window.getElementRect = getElementRect;
var resizeObservers = [];
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
var freeze = function(obj) {
  return Object.freeze(obj);
};
var ResizeObserverSize = function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
  var _a;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var global = typeof window !== "undefined" ? window : {};
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();
var calculateDepthForNode = function(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  var depth = 0;
  var parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
};
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};
var process = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb) {
    return cb();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};
var queueResizeObserver = function(cb) {
  queueMicroTask(function ResizeObserver2() {
    requestAnimationFrame(cb);
  });
};
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb() : global.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();
var ResizeObserverDetail = function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();
var ResizeObserver$1 = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();
class TreeElement {
  constructor(element) {
    this.children = [];
    this.zIndex = null;
    this.overflowX = 0;
    this.overflowY = 0;
    this.pointerEvents = 1;
    this.rect = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    this.parent = null;
    this._positionChanged = false;
    this.element = element;
    this.id = getPluginDomId(element);
  }
  /**
   * Returns true if givin TreeElement and this TreeElement are the same values.
   */
  equals(other) {
    if (!other || !(other instanceof TreeElement))
      return false;
    return compareObjs(this.toJSON(), other.toJSON());
  }
  /**
   * Returns a JSON object which represents this TreeElement values.
   */
  toJSON() {
    if (!this.element) {
      return {};
    }
    const children = [];
    this.children.forEach((child) => {
      children.push(child.toJSON());
    });
    const zIndex = [];
    if (this.zIndex) {
      zIndex.push(this.zIndex.isInherit ? 1 : 0);
      zIndex.push(this.zIndex.z);
    }
    return {
      // c: children
      c: children,
      // t: touchable
      t: this.pointerEvents,
      // o: overflow
      o: this.overflowX << 2 | this.overflowY,
      // r: rectangle
      r: [
        Math.round(this.rect.left),
        Math.round(this.rect.top),
        Math.round(this.rect.width),
        Math.round(this.rect.height)
      ],
      // i: id
      i: this.id,
      // z: Z-index
      z: zIndex,
      // n: tag name
      n: this.element.tagName
    };
  }
}
class ZIndexManager {
  constructor() {
    this.cache = {};
  }
  /**
   * @hidden
   */
  _clearInternalCache() {
    this.cache = {};
  }
  /**
   * @hidden
   */
  _removeCacheById(elemId) {
    delete this.cache[elemId];
  }
  /**
   * Returns the z-index of given element
   * (http://stackoverflow.com/a/1388022)
   *
   * @params {HTMLElement} element
   * @params {string} styleProperty
   * @return {IzIndexInfo | null} Actual value
   */
  getZIndex(element) {
    if (!element) {
      return null;
    }
    if (element === document.body) {
      this.cache = {};
    }
    let z = getStyle(element, "z-index");
    const elementAny = element;
    const elemId = elementAny.__pluginDomId;
    const parentElement = element.parentElement;
    let parentZIndexInfo;
    if (!parentElement) {
      return {
        z: 0,
        isInherit: true
      };
    }
    const parentElemId = parentElement.__pluginDomId;
    parentZIndexInfo = parentElemId in this.cache ? this.cache[parentElemId] : this.getZIndex(parentElement);
    const positionCSS = getStyle(element, "position");
    let isInherit = false;
    if (z === "unset" || z === "initial" || positionCSS === "relative") {
      z = 0;
    } else if (z === "auto" || z === "inherit") {
      z = 0;
      isInherit = true;
    } else if (typeof z === "string") {
      z = parseInt(z, 10);
    }
    if (z === void 0 || z === null) {
      z = 0;
    }
    this.cache[elemId] = z + (parentZIndexInfo ? parentZIndexInfo.z : 0);
    return {
      isInherit,
      z
    };
  }
}
const ResizeObserver = window.ResizeObserver || ResizeObserver$1;
class MutationListener {
  constructor(cmdQueue) {
    this.zManager = new ZIndexManager();
    this.mutationObserver = new MutationObserver(this.mutationListener.bind(this));
    this.tree = {};
    this.rootElement = null;
    this.actions = {};
    this.cmdQueue = null;
    this.positionTimer = null;
    this.scrollEndCnt = 0;
    this.isScrollEventProcessing = false;
    this.resizeObserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        this.onDomResize(entries);
      });
    });
    this._bind_onScroll = (event) => this.onDomScroll(event);
    this._bind_removeDomIdFromGMH = (element) => this.removeDomIdFromGMH(element);
    this._bind_followViewElements = () => this.followViewElements();
    this._any_change = false;
    this.overflowCssToNumber = (element, propName) => {
      const value = getStyle(element, propName);
      switch (value) {
        case "hidden":
          return 1;
        case "scroll":
          return 1;
        case "visible":
          return 2;
      }
      return 0;
    };
    this.disconnect = () => {
      this.mutationObserver.disconnect();
      const IDs = Object.keys(this.tree);
      IDs.forEach((id) => {
        const info = this.tree[id];
        if (!info) {
          return;
        }
        this.removeObservers(info.element);
        this.resizeObserver.unobserve(info.element);
        delete this.tree[id];
      });
    };
    this.cmdQueue = cmdQueue;
    this.actions.childList = this.onDomTreeChange.bind(this);
    this.actions.characterData = this.onAttrSize.bind(this);
    this.actions.attributes = this.onAttrSize.bind(this);
    window.addEventListener("gmhObservePositions", () => {
      if (this.positionTimer) {
        clearTimeout(this.positionTimer);
        this.positionTimer = null;
      }
      this._any_change = true;
      this.scrollEndCnt = 5;
      Promise.resolve().then(this._bind_followViewElements);
    });
  }
  observe(root) {
    if (this.rootElement) {
      return;
    }
    this._any_change = true;
    this.rootElement = root;
    this.invalidate();
    this.mutationObserver.observe(this.rootElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["style", "class"]
    });
  }
  invalidate() {
    if (!this._any_change) {
      return;
    }
    if (!this.rootElement) {
      throw new Error("this.rootElement is null");
    }
    this.tree = {};
    this.scrollEndCnt = 0;
    const partTree = this.buildTree(this.rootElement);
    if (!partTree) {
      throw new Error("partTree is null");
    }
    this._any_change = false;
    const parentId = partTree.parent ? partTree.parent.id : "";
    this.cmdQueue.execPromise("GoogleMaps", "updateDomTree", [
      [
        {
          p: parentId,
          t: partTree.toJSON()
        }
      ],
      "invalidate"
    ], {
      sync: true
    });
  }
  updateDomRect(elemInfo) {
    if (!elemInfo.element) {
      return;
    }
    elemInfo.rect = getElementRect(elemInfo.element);
    elemInfo.children.forEach(this.updateDomRect.bind(this));
  }
  removeObservers(element) {
    if (element instanceof HTMLElement) {
      const elemId = element.__pluginDomId;
      if (elemId) {
        const removedInfo = this.tree[elemId];
        if (removedInfo) {
          removedInfo.parent = null;
        }
        delete this.tree[elemId];
        Reflect.deleteProperty(element, "__pluginDomId");
        Reflect.deleteProperty(element, "__isShadowChildren");
      }
    }
    element.removeEventListener("scroll", this._bind_onScroll);
    element.removeEventListener("transitionstart", this._bind_onScroll);
    element.removeEventListener("transitionrun", this._bind_onScroll);
    element.removeEventListener("transitionend", this._bind_onScroll);
    element.removeEventListener("transitioncancel", this._bind_onScroll);
    this.resizeObserver.unobserve(element);
    let children = [];
    if (element instanceof HTMLSlotElement) {
      children = Array.prototype.slice.call(element.assignedElements());
    } else if (element.shadowRoot) {
      children = Array.prototype.slice.call(element.shadowRoot.children, 0);
    } else {
      children = Array.prototype.slice.call(element.children, 0);
    }
    children.forEach((child) => {
      this.removeObservers(child);
    });
  }
  buildTree(element) {
    if (!element || !shouldWatchByNative(element)) {
      return null;
    }
    if (element.__pluginDomId === void 0) {
      this.resizeObserver.observe(element);
      element.addEventListener("scroll", this._bind_onScroll);
      element.addEventListener("transitionstart", this._bind_onScroll);
      element.addEventListener("transitionrun", this._bind_onScroll);
      element.addEventListener("transitionend", this._bind_onScroll);
      element.addEventListener("transitioncancel", this._bind_onScroll);
    }
    const elemId = getPluginDomId(element);
    let info = null;
    if (elemId in this.tree) {
      info = this.tree[elemId];
      if (info.element !== element) {
        delete this.tree[elemId];
        info = null;
      }
    }
    if (!info) {
      info = new TreeElement(element);
    }
    info.zIndex = this.zManager.getZIndex(element);
    info.pointerEvents = getStyle(element, "pointer-events") === "none" ? 0 : 1;
    info.overflowX = this.overflowCssToNumber(element, "overflow-x");
    info.overflowY = this.overflowCssToNumber(element, "overflow-y");
    const rect = getElementRect(element);
    const results = [];
    let children = [];
    if (element instanceof HTMLSlotElement) {
      children = Array.prototype.slice.call(element.assignedElements());
    } else if (element.shadowRoot && element.shadowRoot.children.length > 0) {
      children = Array.prototype.slice.call(element.shadowRoot.children, 0);
    } else {
      children = Array.prototype.slice.call(element.children, 0);
    }
    children.forEach((child, idx) => {
      const tagName = child.tagName;
      if (tagName.startsWith("g-") && !tagName.endsWith("view")) {
        return;
      }
      const other = this.buildTree(child);
      if (other) {
        other.parent = info;
        results.push(other);
      }
    });
    info.rect = rect;
    info.children = results;
    this.tree[elemId] = info;
    return info;
  }
  onDomScroll(event) {
    this._any_change = true;
    if (this.isScrollEventProcessing) {
      this.positionTimer = setTimeout(this._bind_followViewElements, 20);
      return;
    }
    if (this.positionTimer) {
      clearTimeout(this.positionTimer);
      this.positionTimer = null;
    }
    this.scrollEndCnt = 5;
    this.isScrollEventProcessing = true;
    const element = event.target;
    const elemId = getPluginDomId(element);
    if (!(elemId in this.tree)) {
      this.isScrollEventProcessing = false;
      this.positionTimer = setTimeout(this._bind_followViewElements, 20);
      return;
    }
    const info = this.buildTree(element);
    if (!info) {
      return;
    }
    if (!info.zIndex) {
      return;
    }
    const parentId = info.parent ? info.parent.id : getPluginDomId(info.element.parentElement);
    this.cmdQueue.execPromise("GoogleMaps", "updateDomTree", [
      [
        {
          p: parentId,
          t: info.toJSON()
        }
      ],
      "onDomScroll"
    ], {
      sync: false
    }).then(() => {
      this.isScrollEventProcessing = false;
      this.positionTimer = setTimeout(this._bind_followViewElements, 20);
    });
  }
  onDomResize(entries) {
    this._any_change = true;
    const infoList = [];
    const blockDup = /* @__PURE__ */ new Set();
    entries.forEach((entry) => {
      if (entry.target.nodeType !== Node.ELEMENT_NODE || entry.target instanceof SVGElement) {
        return;
      }
      const element = entry.target;
      const elemId = getPluginDomId(element);
      if (!(elemId in this.tree)) {
        return;
      }
      if (blockDup.has(elemId)) {
        return;
      }
      const info = this.buildTree(element);
      if (!info) {
        return;
      }
      if (!info.zIndex) {
        return;
      }
      const parentId = info.parent ? info.parent.id : getPluginDomId(info.element.parentElement);
      if (blockDup.has(parentId)) {
        return;
      }
      blockDup.add(elemId);
      infoList.push({
        p: parentId,
        t: info.toJSON()
      });
    });
    if (infoList.length > 0) {
      while (infoList.length > 3) {
        this.cmdQueue.execPromise("GoogleMaps", "updateDomTree", [
          infoList.splice(0, 3),
          "onDomResize"
        ]);
      }
      this.cmdQueue.execPromise("GoogleMaps", "updateDomTree", [infoList, "onDomResize"], {
        sync: false
      });
    }
  }
  onDomTreeChange(mutation) {
    this._any_change = true;
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      const addInfoList = [];
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        const element = node;
        const root = element.parentElement;
        if (!root) {
          return;
        }
        const domId = getPluginDomId(element);
        let partTree = null;
        if (domId in this.tree) {
          partTree = this.tree[domId];
        }
        if (!partTree) {
          partTree = this.buildTree(root);
        }
        if (!partTree || !partTree.zIndex) {
          return;
        }
        const parentId = partTree.parent ? partTree.parent.id : getPluginDomId(partTree.element.parentElement);
        addInfoList.push({
          p: parentId,
          t: partTree.toJSON()
        });
      });
      if (addInfoList.length > 0) {
        while (addInfoList.length > 3) {
          this.cmdQueue.execPromise("GoogleMaps", "updateDomTree", [
            addInfoList.splice(0, 3),
            "onDomTreeChange"
          ]);
        }
        this.cmdQueue.execPromise("GoogleMaps", "updateDomTree", [addInfoList, "onDomTreeChange"], {
          sync: false
        });
      }
    }
    if (mutation.removedNodes && mutation.removedNodes.length > 0) {
      const deleteInfoList = [];
      mutation.removedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        const element = node;
        this.removeObservers(element);
        const domId = element.__pluginDomId;
        if (!domId) {
          return;
        }
        const info = this.tree[domId];
        let parentId = "";
        if (info && info.parent) {
          parentId = info.parent.id + "";
          if (parentId && parentId in this.tree) {
            info.parent.children = this.tree[parentId].children.filter((childInfo) => {
              return info !== childInfo;
            });
          }
          info.parent = null;
        }
        deleteInfoList.push({
          p: parentId,
          i: domId
        });
        this.removeDomIdFromGMH(element);
      });
      if (deleteInfoList.length > 0) {
        while (deleteInfoList.length > 3) {
          this.cmdQueue.execPromise("GoogleMaps", "removeFromDomTree", deleteInfoList.splice(0, 3));
        }
        this.cmdQueue.execPromise("GoogleMaps", "removeFromDomTree", deleteInfoList, {
          sync: true
        });
      }
    }
  }
  removeDomIdFromGMH(element) {
    if (!element) {
      return;
    }
    const domId = element.__pluginDomId;
    if (domId) {
      delete window.gmh.elements[domId];
      Array.from(element.children).forEach(this._bind_removeDomIdFromGMH);
    }
  }
  onAttrSize(mutation) {
    this._any_change = true;
    if (mutation.target.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    const element = mutation.target;
    const domId = element.__pluginDomId;
    if (!domId) {
      return;
    }
    const transformCSS = getStyle(element, "transform");
    if (transformCSS !== "none") {
      element.dispatchEvent(createEvent("gmhObservePositions"));
    } else {
      const partTree = this.buildTree(element);
      const currentTree = this.tree[domId];
      if (!currentTree || !partTree || currentTree.equals(partTree)) {
        return;
      }
      const parentId = partTree.parent ? partTree.parent.id : getPluginDomId(partTree.element.parentElement);
      this.cmdQueue.execPromise("GoogleMaps", "updateDomTree", [
        [
          {
            p: parentId,
            t: partTree.toJSON()
          }
        ],
        "onAttrSize"
      ], {
        sync: false
      });
    }
  }
  followViewElements() {
    if (this.scrollEndCnt === 0) {
      this.invalidate();
    } else {
      this.scrollEndCnt -= 1;
      this.positionTimer = setTimeout(this._bind_followViewElements, 20);
    }
  }
  mutationListener(mutations, caller) {
    mutations.forEach((mutation) => {
      this.actions[mutation.type].call(this, mutation);
    });
  }
}
const isHTMLColorString = (inputValue) => {
  if (!inputValue || typeof inputValue !== "string") {
    return false;
  }
  if (inputValue[0] === "#") {
    if (/^#[0-9A-F]{3}$/i.test(inputValue) || /^#[0-9A-F]{4}$/i.test(inputValue) || /^#[0-9A-F]{6}$/i.test(inputValue) || /^#[0-9A-F]{8}$/i.test(inputValue)) {
      return true;
    }
    return false;
  }
  if (inputValue.includes("rgba")) {
    const matches = inputValue.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*((?:(?:0+)|1)\.[0-9]+)\s*\)$/i);
    if (matches == null || matches.length !== 5)
      return false;
    if (parseInt(matches[1], 10) < 0 || parseInt(matches[1], 10) > 255 || parseInt(matches[2], 10) < 0 || parseInt(matches[2], 10) > 255 || parseInt(matches[3], 10) < 0 || parseInt(matches[3], 10) > 255)
      return false;
    if (parseFloat(matches[4]) < 0 || parseFloat(matches[4]) > 1)
      return false;
    return true;
  }
  if (inputValue.includes("rgb")) {
    const matches = inputValue.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);
    if (matches == null || matches.length !== 4)
      return false;
    if (parseInt(matches[1], 10) < 0 || parseInt(matches[1], 10) > 255 || parseInt(matches[2], 10) < 0 || parseInt(matches[2], 10) > 255 || parseInt(matches[3], 10) < 0 || parseInt(matches[3], 10) > 255)
      return false;
    return true;
  }
  inputValue = inputValue.toLowerCase();
  return inputValue in HTML_COLORS;
};
const HTMLColor2RGBA = (colorValue, defaultOpacity = 1) => {
  if (!isHTMLColorString(colorValue)) {
    throw new Error(`"${colorValue}" is unknown color value`);
  }
  if (typeof defaultOpacity !== "number" || defaultOpacity < 0 || defaultOpacity > 1) {
    throw new Error("The second argument of HTMLColor2RGBA() must be a value from 0.0 to 1.0");
  }
  let alpha = Math.floor(255 * defaultOpacity);
  let colorStr = colorValue.toLowerCase();
  if (colorStr in HTML_COLORS) {
    colorStr = HTML_COLORS[colorStr];
  }
  let matches;
  if (colorStr[0] === "#" && colorStr.length === 4) {
    matches = colorStr.match(/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i);
    if (matches) {
      const r = parseInt(matches[1], 16);
      const g = parseInt(matches[2], 16);
      const b = parseInt(matches[3], 16);
      return [
        (r << 4) + r,
        (g << 4) + g,
        (b << 4) + b,
        alpha
      ];
    }
    throw new Error(`Can not parse color: ${colorValue}`);
  }
  if (colorStr[0] === "#" && colorStr.length === 5) {
    matches = colorStr.match(/^#([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])$/i);
    if (matches) {
      const r = parseInt(matches[1], 16);
      const g = parseInt(matches[2], 16);
      const b = parseInt(matches[3], 16);
      const a = parseInt(matches[4], 16);
      return [
        (r << 4) + r,
        (g << 4) + g,
        (b << 4) + b,
        (a << 4) + a
      ];
    }
    throw new Error(`Can not parse color: ${colorValue}`);
  }
  if (colorStr[0] === "#" && colorStr.length === 7) {
    matches = colorStr.match(/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i);
    if (matches) {
      const r = parseInt(matches[1], 16);
      const g = parseInt(matches[2], 16);
      const b = parseInt(matches[3], 16);
      return [r, g, b, alpha];
    }
    throw new Error(`Can not parse color: ${colorValue}`);
  }
  if (colorStr[0] === "#" && colorStr.length === 9) {
    matches = colorStr.match(/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i);
    if (matches) {
      const r = parseInt(matches[1], 16);
      const g = parseInt(matches[2], 16);
      const b = parseInt(matches[3], 16);
      const a = parseInt(matches[4], 16);
      return [r, g, b, a];
    }
    throw new Error(`Can not parse color: ${colorValue}`);
  }
  if (colorStr.match(/^rgba?\([\d,.\s]+\)$/)) {
    matches = colorStr.match(/([\d.]+)/g);
    if (!matches) {
      const debugInfo = btoa(JSON.stringify({
        case: "Can not parse color information correctly",
        colorStr
      }));
      throw new Error(`Please report this error message: ${debugInfo}`);
    }
    alpha = matches.length === 4 ? Math.floor(parseFloat(matches[3]) * 255) : alpha;
    return [
      parseInt(matches[0], 10),
      parseInt(matches[1], 10),
      parseInt(matches[2], 10),
      alpha
    ];
  }
  throw new Error(`Can not parse color: ${colorValue}`);
};
class Overlay extends HTMLElementBase {
  static get observedAttributes() {
    return ["class", "id"];
  }
  constructor() {
    super();
    this._hasMap = false;
    this._parentView = null;
    this._execQueue = new MVCBaseArray();
    this._bind_onExecute = () => this._onExecute();
    this._bind_runExecute = () => this._runExecute();
    this._bind_applyOptions = () => this._applyOptions();
    this._bind_onPropertyChanged = (event) => this._onPropertyChanged(event);
    this._bind_redraw = () => this.onRedraw();
    this._exec_delay_timer = null;
    this.setAttributeChangeListener("class", this._bind_redraw);
    this.setAttributeChangeListener("id", this._bind_redraw);
  }
  onRedraw() {
  }
  /*****************************
   * visible property
   ******************************/
  getVisible() {
    return this.state.get("visible");
  }
  setVisible(value) {
    this.state.set("visible", value === true);
  }
  setHasMap(hasMap) {
    this._hasMap = hasMap;
  }
  get hasMap() {
    return this._hasMap;
  }
  setParentView(parentView) {
    this._parentView = parentView;
    if (parentView) {
      if (parentView.ready) {
        this._runExecute();
      } else {
        parentView.addEventListener("ready", this._bind_runExecute, {
          once: true
        });
      }
    }
  }
  _runExecute() {
    this._execQueue.dispatchEvent(new CustomEvent("insert_at"));
  }
  get parentView() {
    return this._parentView;
  }
  /**
   * Applies the changed property value to the native side overlay
   */
  _onPropertyChanged(event) {
    const key = event.detail.key;
    const value = event.detail.value;
    const options = this.state.get("waitOptions") || {};
    options[key] = value;
    this.state.set("waitOptions", options);
    const timer = this.state.get("propEventTimer");
    if (timer !== void 0) {
      clearTimeout(timer);
    }
    this.state.set("propEventTimer", setTimeout(this._bind_applyOptions, 100));
  }
  _applyOptions() {
    if (!this.isConnected || this.initStatus !== HTMLElementBaseStatus.VIEW_CREATED) {
      const timer = this.state.get("propEventTimer");
      if (timer !== void 0) {
        clearTimeout(timer);
      }
      this.state.set("propEventTimer", setTimeout(this._bind_applyOptions, 100));
      return;
    }
    const options = this.state.get("waitOptions") || {};
    if (Object.keys(options).length === 0) {
      return;
    }
    this.state.set("waitOptions", {});
    this.execPromise("(parent)", "execute", [{
      id: this.viewId,
      subMethodName: "setOptions"
    }, options]);
  }
  /*****************************
   * Invokes a function in native side.
   ******************************/
  execPromise(pluginName, methodName, args = [], execOptions = {}) {
    if (this.isRemoved) {
      return Promise.reject(`<${this.tagName} __pluginDomId="${this.viewId}"> has been already removed`);
    }
    return new Promise((onSuccess, onError) => {
      const cmd = {
        pluginName,
        methodName,
        args,
        execOptions,
        onSuccess,
        onError
      };
      if (this.initStatus < HTMLElementBaseStatus.VIEW_CREATED && pluginName === "GoogleMaps") {
        this.dispatchCmdEvent([cmd]);
        return;
      }
      this._execQueue.push({
        pluginName,
        methodName,
        args,
        execOptions,
        onSuccess,
        onError
      });
    });
  }
  /**
   * Don't invoke this method directly
   */
  _onExecute() {
    if (!this.hasEventListener("command")) {
      return;
    }
    if (this._exec_delay_timer === null) {
      this._exec_delay_timer = setTimeout(this._bind_onExecute, 10);
      return;
    }
    let commands = [];
    while (this._execQueue.getLength() > 0) {
      const cmd = this._execQueue.removeAt(0, true);
      if (!cmd) {
        continue;
      }
      if (cmd.execOptions.sync) {
        this.dispatchCmdEvent(commands);
        commands = [];
        this.dispatchCmdEvent([cmd]);
      } else {
        commands.push(cmd);
      }
    }
    this.dispatchCmdEvent(commands);
    this._exec_delay_timer = null;
  }
  dispatchCmdEvent(commands = []) {
    if (commands.length > 0 && !this.isRemoved) {
      this.dispatchEvent(new CustomEvent("command", {
        detail: commands
      }));
    }
  }
  remove() {
    super.remove();
    this.setAttributeChangeListener("class", void 0);
    this.setAttributeChangeListener("id", void 0);
  }
  async onConnected() {
    await super.onConnected();
    let parent = this.parentElement;
    while (parent) {
      if (parent instanceof CustomViewBase) {
        this.setParentView(parent);
        this._execQueue.addEventListener("insert_at", this._bind_onExecute);
        return;
      }
      parent = parent.parentElement;
    }
    throw new Error("Overlay (marker, polygon, etc) must be under <mkg-mapview> tag");
  }
  async disconnectedCallback() {
    await super.disconnectedCallback();
    this.setParentView(null);
    if (!this.isRemoved) {
      this._execQueue.removeEventListener("insert_at", this._bind_onExecute);
    }
  }
}
const isCustomEvent = (event) => {
  return event instanceof Event && "detail" in event;
};
const parseBoolean = (value) => {
  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  } else if (typeof value === "boolean") {
    return value;
  } else {
    return false;
  }
};
const parseILatLng = (latLngString) => {
  const tokens = latLngString.split(",").map((token) => {
    return parseFloat(token);
  });
  if (tokens.length !== 2) {
    throw new Error(`Can not parse latLng string: "${latLngString}"`);
  }
  const lat = Math.max(-90, Math.min(90, tokens[0]));
  const lng = Math.max(-180, Math.min(180, tokens[1]));
  return {
    lat,
    lng
  };
};
class Marker extends Overlay {
  static get observedAttributes() {
    return ["class", "id", "position"];
  }
  constructor(options) {
    super();
    this._bind_onPositionChangedFromNative = (event) => this._onPositionChangedFromNative(event);
    this._bind_onPositionChanged = (event) => this._onPositionChanged(event);
    this.state.set("position", {
      lat: 0,
      lng: 0
    });
    this.state.set("visible", true);
    this.state.set("draggable", false);
    this.state.set("position", void 0);
    this.state.set("initOptions", options);
    this.state.set("propEventTimer", void 0);
  }
  _onPositionChanged(event) {
    this.dispatchEvent(event);
    if (this._childLatLng) {
      const detail = event.detail;
      this._childLatLng.lat = detail.value.lat;
      this._childLatLng.lng = detail.value.lng;
    }
  }
  onRedraw() {
    if (this.initStatus < HTMLElementBaseStatus.VIEW_CREATED) {
      return;
    }
    this.applyOptionsToState();
  }
  /*****************************
   * clickable property
   ******************************/
  getClickable() {
    return this.state.get("clickable");
  }
  setClickable(value) {
    this.state.set("clickable", value === true);
  }
  /*****************************
   * draggable property
   ******************************/
  getDraggable() {
    return this.state.get("draggable");
  }
  setDraggable(value) {
    this.state.set("draggable", value === true);
  }
  applyOptionsToState(options) {
    const currValues = {
      visible: this.state.get("visible"),
      clickable: this.state.get("clickable"),
      dragable: this.state.get("dragable"),
      icon: this.state.get("icon"),
      position: this.state.get("position"),
      zIndex: this.state.get("zIndex")
    };
    ["visible", "clickable", "draggable"].forEach((key) => {
      const propValue = getComputedCSS(this, `mkg-${key}`);
      if (propValue !== void 0) {
        currValues[key] = parseBoolean(propValue);
      }
    });
    const icon = getComputedCSS(this, "mkg-icon") + "";
    if (icon) {
      currValues.icon = this._normalizedIcon(icon);
    }
    const zIndex = getComputedCSS(this, "mkg-z-index") + "";
    if (zIndex !== "") {
      currValues.zIndex = parseInt(zIndex.replace(/[^\d].*$/g, ""), 10);
    }
    const positionStr = this.getAttribute("position");
    if (positionStr) {
      currValues.position = parseILatLng(positionStr);
    }
    if (options) {
      if (typeof options.visible === "boolean") {
        currValues.visible = options.visible === true;
      }
      if (typeof options.clickable === "boolean") {
        currValues.clickable = options.clickable === true;
      }
      if (typeof options.draggable === "boolean") {
        currValues.draggable = options.draggable === true;
      }
      if (options.icon) {
        currValues.icon = this._normalizedIcon(options.icon);
      }
      if (typeof options.zIndex === "number") {
        if (!Number.isInteger(options.zIndex)) {
          throw new Error("MarkerOptions.zIndex must be an integer value");
        }
        currValues.zIndex = options.zIndex;
      }
      if (options.position) {
        this.setPosition(options.position);
      }
    }
    if (isNaN(currValues.zIndex)) {
      currValues.zIndex = 0;
    }
    Object.keys(currValues).forEach((key) => {
      this.state.set(key, currValues[key]);
    });
  }
  /**
   * Receive the dragstart, drag, and dragend events from native
   */
  _onPositionChangedFromNative(event) {
    if (!isCustomEvent(event)) {
      return;
    }
    const customEvent = event;
    const position = customEvent.detail.latLng;
    this.state.set("position", position);
  }
  /**
   * Receive the command event from <mkg-latlng>
   */
  onCommandFromChildren(event) {
    const detail = event.detail;
    switch (detail.methodName) {
      case "setPosition":
        this.setPosition(detail.latLng);
        break;
    }
  }
  /*****************************
   * position property
   ******************************/
  getPosition() {
    const pos = this.state.get("position");
    return {
      lat: pos.lat,
      lng: pos.lng
    };
  }
  setPosition(value) {
    if (isILatLng(value)) {
      const prev = this.state.get("position");
      if (!equalPositions(prev, value)) {
        this.state.set("position", value);
      }
    } else {
      throw new Error("setPosition() accepts only ILatLng value");
    }
  }
  /*****************************
   * TODO: icon property
   ******************************/
  // get icon(): string | null | undefined {
  //   return this.state.get('icon');
  // }
  //
  // set icon(value: string | null | undefined) {
  //   if (typeof value === null || typeof value === undefined) {
  //     this.removeAttribute('icon');
  //     this.state.set('icon', undefined);
  //     this.state.set('calculatedIcon', undefined);
  //   } else {
  //     this.state.set('icon', value);
  //     this.state.set('calculatedIcon', this._normalizedIcon(value));
  //     this._onPropertyChanged('icon', this.state.get('calculatedIcon'));
  //   }
  // }
  _normalizedIcon(icon) {
    if (icon) {
      if (isHTMLColorString(icon)) {
        return {
          type: "color",
          value: HTMLColor2RGBA(icon)
        };
      } else if (/url\([\"']?([^\"']+)[\"']?\)/i.test(icon)) {
        const link = document.createElement("a");
        link.href = icon.replace(/url\([\"']?([^\"']+)[\"']?\)/i, "$1");
        const iconUrl = `${link.protocol}//${link.host}${link.pathname}${link.search}`;
        link.remove();
        return {
          type: "img",
          value: iconUrl
        };
      }
    }
    return {
      type: "color",
      value: HTMLColor2RGBA("red")
    };
  }
  _normalizedPosition(value) {
    if (value instanceof LatLng) {
      return value.toJSON();
    } else if (isILatLng(value)) {
      return {
        lat: value.lat,
        lng: value.lng
      };
    } else if (typeof value === "string") {
      return parseILatLng(value);
    } else {
      throw new Error(`Can not parse given value : ${value}`);
    }
  }
  async onConnected() {
    await super.onConnected();
    this.state.addEventListener("visible_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("clickable_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("draggable_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("icon_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("position_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("zIndex_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("position_changed", this._bind_onPositionChanged);
    this.addEventListener("dragstart", this._bind_onPositionChangedFromNative);
    this.addEventListener("drag", this._bind_onPositionChangedFromNative);
    this.addEventListener("dragend", this._bind_onPositionChangedFromNative);
    if (this.hasMap || this.initStatus === HTMLElementBaseStatus.VIEW_CREATING) {
      return;
    }
    this.setHasMap(true);
    const positions = Array.from(this.children).filter((child, idx, arr) => {
      console.log(child, child instanceof LatLng);
      return child instanceof LatLng;
    });
    if (positions.length > 1) {
      throw new Error("<mkg-marker> can have only one <mkg-latlng>");
    }
    new Promise((resolve) => {
      let position = this.state.get("position");
      let positionChanged = false;
      if (positions.length === 1) {
        this._childLatLng = positions[0];
        position = this._childLatLng.toJSON();
        positionChanged = true;
      }
      const options = this.state.get("initOptions");
      if (options && options.position) {
        if ("position" in options && options.position) {
          if (isILatLng(options.position)) {
            this.state.set("position", options.position);
            positionChanged = true;
          } else if (options.position instanceof LatLng) {
            this.state.set("position", options.position.toJSON());
            positionChanged = true;
          }
        }
      }
      if (positionChanged) {
        this.state.set("position", position);
      }
      if (this.initStatus === HTMLElementBaseStatus.NOT_READY) {
        this.initStatus = HTMLElementBaseStatus.VIEW_CREATING;
        this.execPromise("(parent)", "createMarker", [
          {
            id: this.viewId
          },
          {
            position: this.state.get("position"),
            visible: false
          }
        ]).then(resolve);
      } else {
        this.execPromise("(parent)", "execute", [
          {
            id: this.viewId,
            subMethodName: "setOptions"
          },
          {
            position: this.state.get("position"),
            visible: false
          }
        ]).then(resolve);
      }
    }).then(() => {
      return this.execPromise("(parent)", "attachOverlayToMap", [
        {
          id: this.viewId
        }
      ]);
    }).then(() => {
      this.initStatus = HTMLElementBaseStatus.VIEW_CREATED;
      const iconProp = getComputedCSS(this, "mkg-icon");
      if (iconProp) {
        this.state.set("icon", iconProp);
        this.state.set("calculatedIcon", this._normalizedIcon(iconProp));
      } else {
        this.state.set("calculatedIcon", {
          type: "color",
          value: HTMLColor2RGBA("red")
        });
      }
      const options = this.state.get("initOptions");
      this.applyOptionsToState(options);
      this.state.trigger("visible_changed", {
        key: "visible",
        prevValue: void 0,
        value: this.state.get("visible")
      });
      this.state.set("initOptions", void 0);
    });
  }
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  async onDisconnected() {
    await super.onDisconnected();
    this.state.removeEventListener("visible_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("clickable_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("draggable_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("icon_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("position_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("zIndex_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("position_changed", this._bind_onPositionChanged);
    this.removeEventListener("dragstart", this._bind_onPositionChangedFromNative);
    this.removeEventListener("drag", this._bind_onPositionChangedFromNative);
    this.removeEventListener("dragend", this._bind_onPositionChangedFromNative);
    if (this.hasMap && this.initStatus === HTMLElementBaseStatus.VIEW_CREATED) {
      this.execPromise("(parent)", "detachOverlayFromMap", [
        {
          id: this.getId()
        }
      ]).then(() => {
        this.setHasMap(false);
      });
    }
  }
}
class InfoWindowBase extends Overlay {
  static get observedAttributes() {
    return ["class", "id", "content"];
  }
  constructor(padding = 5) {
    super();
    this._frame = document.createElement("div");
    this._contentBox = document.createElement("div");
    this._bind_onPositionChanged = () => this._onPositionChanged();
    this._bind_onTargetDisconnected = () => this.close();
    this._bind_onStyleChanged = () => {
      if (!this._canvas) {
        return;
      }
      this.onClear(this._canvas);
      this.onCanvas(this._canvas);
      this._onPositionChanged();
    };
    this._binds = {};
    this.platformId = window.mkgeeklab.googlemaps.getPlatformId();
    this._target = null;
    this._slot = null;
    this._canvas = document.createElement("canvas");
    this._isSafari = window.navigator.userAgent.includes("AppleWebKit");
    this._options = {
      padding: 5,
      canvasSize: {
        width: 0,
        height: 0
      },
      contentSize: {
        width: 0,
        height: 0
      },
      anchorPosition: {
        x: 0,
        y: 0
      },
      contentPosition: {
        x: 0,
        y: 0
      },
      content: "",
      shapeType: "poly",
      tailSize: {
        width: 10,
        height: 15
      },
      shapeCoords: []
    };
    this.DOMevents = [
      "click",
      "touchstart",
      "touchend",
      "mousedown",
      "mouseup",
      "mousemove"
    ];
    this.assignedListeners = false;
    this.isOpen = false;
    this._options.padding = padding;
    this._frame.style.position = "relative";
    this._frame.style.display = "block";
    this._frame.style.width = "auto";
    this._frame.style.height = "auto";
    this._frame.style.overflow = "hidden";
    this._contentBox.style.position = "relative";
    this._contentBox.style.left = "0px";
    this._contentBox.style.top = "0px";
    this._contentBox.style.display = "inline-block";
    this._contentBox.style.padding = "0px";
    this._contentBox.style.boxSizing = "content-box";
    this._contentBox.style.minWidth = "50px";
    this._contentBox.style.width = "auto";
    this._contentBox.style.height = "auto";
    this._contentBox.style.cursor = "pointer";
    this._contentBox.style.userSelect = "none";
    this._contentBox.style.pointerEvents = "auto";
    this._canvas.width = 900;
    this._canvas.height = 900;
    this._canvas.style.position = "absolute";
    this._canvas.style.zIndex = "-1";
    this._canvas.style.left = "0px";
    this._canvas.style.top = "0px";
    this.setAttributeChangeListener("class", this._bind_onStyleChanged);
    this.setAttributeChangeListener("id", this._bind_onStyleChanged);
  }
  getPadding() {
    return this._options.padding;
  }
  onCanvas(canvas) {
    throw new Error("Please override the onCanvas method");
  }
  /**
   * Invokes before oncanvas to change the contents size
   */
  onContentMeasure(width, height) {
    return {
      width,
      height
    };
  }
  getContentSize() {
    return {
      width: this._options.contentSize.width,
      height: this._options.contentSize.height
    };
  }
  /**
   * Invokes before oncanvas to change the contents position
   */
  onContentPosition(x, y) {
    return {
      x,
      y
    };
  }
  getContentPosition() {
    return {
      x: this._options.contentPosition.x,
      y: this._options.contentPosition.y
    };
  }
  /**
   * Invokes to set the anchor position of the info window
   */
  onAnchorPosition(x, y) {
    return {
      x,
      y
    };
  }
  getAnchorPosition() {
    return {
      x: this._options.anchorPosition.x,
      y: this._options.anchorPosition.y
    };
  }
  /**
   * Invokes before oncanvas to change the canvas size
   */
  onCanvasMeasure(width, height) {
    return {
      width,
      height
    };
  }
  getCanvasSize() {
    return {
      width: this._options.canvasSize.width,
      height: this._options.canvasSize.height
    };
  }
  /**
   * Invokes before oncanvas to change the tail size
   */
  onTailSize(width, height) {
    return {
      width,
      height
    };
  }
  getTailSize() {
    return {
      width: this._options.tailSize.width,
      height: this._options.tailSize.height
    };
  }
  addEventListener(eventName, listener, options) {
    let hashCode = listener._hashCode;
    if (!hashCode) {
      hashCode = Math.floor(Date.now() * Math.random()).toString();
      Reflect.defineProperty(listener, "_hashCode", {
        value: hashCode,
        writable: false,
        enumerable: false
      });
    }
    this._binds[eventName] = this._binds[eventName] || {};
    if (this.DOMevents.indexOf(eventName) > -1) {
      const listener2 = (event) => {
        const mouseEvent = event;
        listener(new MouseEvent(event.type, {
          screenX: mouseEvent.screenX,
          screenY: mouseEvent.screenY,
          // 'clientX': mouseEvent.clientX - dx,
          // 'clientY': mouseEvent.clientY - dy,
          clientX: mouseEvent.clientX,
          clientY: mouseEvent.clientY,
          ctrlKey: mouseEvent.ctrlKey,
          shiftKey: mouseEvent.shiftKey,
          altKey: mouseEvent.altKey,
          metaKey: mouseEvent.metaKey,
          button: mouseEvent.button,
          buttons: mouseEvent.buttons,
          relatedTarget: this._canvas
        }));
      };
      this._binds[eventName][hashCode] = listener2;
      this._frame.addEventListener(eventName, listener2, true);
    } else {
      this._binds[eventName][hashCode] = listener;
      super.addEventListener(eventName, listener);
    }
  }
  removeEventListener(eventName, listener) {
    if (eventName in this._binds) {
      const hashCode = listener._hashCode;
      if (hashCode && hashCode in this._binds[eventName]) {
        if (eventName in this.DOMevents) {
          this._frame.removeEventListener(eventName, this._binds[eventName][hashCode]);
        } else {
          super.removeEventListener(eventName, this._binds[eventName][hashCode]);
        }
        delete this._binds[eventName][hashCode];
      }
    }
  }
  onClear(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  onDraw() {
    if (this._contentBox.parentElement !== null) {
      this._frame.removeChild(this._contentBox);
    }
    this.style.overflow = "visible";
    this._frame.innerHTML = "";
    this._frame.appendChild(this._contentBox);
    this._frame.style.width = "90vmax";
    this._frame.style.height = "90vmax";
    this._contentBox.style.position = "static";
    this._contentBox.style.width = "auto";
    this._contentBox.style.height = "auto";
    this._contentBox.style.padding = "1px";
    this._frame.style.overflow = "visible";
    if (typeof this._options.content === "string") {
      this._contentBox.style.whiteSpace = "pre-wrap";
      this._contentBox.innerHTML = this._options.content;
    } else {
      if (!this._options.content) {
        this._contentBox.innerText = "";
      } else if (this._options.content.nodeType === 1) {
        this._contentBox.innerHTML = "";
        this._contentBox.appendChild(this._options.content);
      } else {
        this._contentBox.innerText = `${this._options.content}`;
      }
    }
    const contentW = this._contentBox.offsetWidth;
    const contentH = this._contentBox.offsetHeight;
    this._contentBox.style.padding = "0px";
    const requestContentSize = this.onContentMeasure(contentW, contentH);
    this._options.contentSize.width = requestContentSize.width;
    this._options.contentSize.height = requestContentSize.height;
    const requestTailSize = this.onTailSize(this._options.tailSize.width, this._options.tailSize.height);
    this._options.tailSize.width = requestTailSize.width;
    this._options.tailSize.height = requestTailSize.height;
    const requestCanvasSize = this.onCanvasMeasure(this._options.contentSize.width + this._options.padding * 2, this._options.contentSize.height + this._options.padding * 2 + this._options.tailSize.height);
    this._options.canvasSize.width = requestCanvasSize.width;
    this._options.canvasSize.height = requestCanvasSize.height;
    const requestContentPosition = this.onContentPosition(this._options.padding, this._options.padding);
    this._options.contentPosition.x = requestContentPosition.x;
    this._options.contentPosition.y = requestContentPosition.y;
    const requestAnchorPoint = this.onAnchorPosition(this._options.canvasSize.width / 2, this._options.canvasSize.height);
    this._options.anchorPosition.x = requestAnchorPoint.x;
    this._options.anchorPosition.y = requestAnchorPoint.y;
    this._frame.style.width = `${this._options.canvasSize.width}px`;
    this._frame.style.height = `${this._options.canvasSize.height}px`;
    this._frame.style.overflow = "hidden";
    this.style.position = "absolute";
    this.style.zIndex = "-100000";
    this.style.width = "1px";
    this.style.height = "1px";
    this._frame.appendChild(this._canvas);
    this._options.shapeCoords = [];
    this.onClear(this._canvas);
    this.onCanvas(this._canvas);
    this._contentBox.style.position = "absolute";
    this._contentBox.style.left = `${this._options.contentPosition.x}px`;
    this._contentBox.style.top = `${this._options.contentPosition.y}px`;
    this._contentBox.style.width = `${this._options.contentSize.width}px`;
    this._contentBox.style.height = `${this._options.contentSize.height}px`;
    this.style.position = "absolute";
    this.style.zIndex = "1";
    this.style.width = "0px";
    this.style.height = "0px";
    this.style.left = `0px`;
    this.style.top = `0px`;
    this.style.visibility = "visible";
  }
  get content() {
    return this._options.content;
  }
  set content(content) {
    this.setContent(content);
  }
  setContent(content) {
    if (content === null || content === void 0) {
      content = "";
    }
    if (this._options.content === content) {
      return;
    }
    this._options.content = content;
    if (this.isOpen) {
      this.onDraw();
    }
  }
  getContent() {
    return this._options.content;
  }
  async open(target) {
    if (!target || !(target instanceof Marker)) {
      return;
    }
    this.isOpen = true;
    if (!target.ready) {
      await new Promise((resolve) => {
        target.addEventListener("ready", () => resolve(), {
          once: true
        });
      });
    }
    if (!this.parentView) {
      await new Promise((resolve) => {
        this.initStatus = HTMLElementBaseStatus.VIEW_CREATING;
        this.addEventListener("ready", () => {
          this.setHasMap(true);
          resolve();
        }, {
          once: true
        });
      });
    }
    this._target = target;
    const mapView = this.parentView;
    if (!this._slot) {
      const mapShadow = mapView.getShadowRoot();
      this._slot = document.createElement("slot");
      const infoLayer = mapShadow.querySelector("div.info_layer");
      if (infoLayer) {
        infoLayer.appendChild(this._slot);
      }
      if (this._isSafari) {
        this._slot.name = this.viewId;
        this.setAttribute("slot", this.viewId);
      } else {
        this._slot.assign(this);
      }
    }
    this.onDraw();
    this._onPositionChanged();
    if (!this.assignedListeners) {
      this.assignedListeners = true;
      mapView.addEventListener("camera_move", this._bind_onPositionChanged);
      mapView.addEventListener("resize", this._bind_onPositionChanged);
      this._target.addEventListener("position_changed", this._bind_onPositionChanged);
      this._target.addEventListener("isConnected_changed", this._bind_onTargetDisconnected);
    }
    window.dispatchEvent(new Event("gmhObservePositions"));
  }
  close() {
    const mapView = this.parentView;
    if (!this._slot || !this._target || !this.isOpen || !mapView) {
      return;
    }
    this.dispatchEvent(new Event("close"));
    const mapShadow = mapView.getShadowRoot();
    this.assignedListeners = false;
    mapView.removeEventListener("bounds_changed", this._bind_onPositionChanged);
    mapView.removeEventListener("resize", this._bind_onPositionChanged);
    this._target.removeEventListener("position_changed", this._bind_onPositionChanged);
    this._target.removeEventListener("isConnected_changed", this._bind_onTargetDisconnected);
    const infoLayer = mapShadow.querySelector(".info_layer");
    if (infoLayer) {
      infoLayer.removeChild(this._slot);
    }
    if (this._isSafari) {
      this.removeAttribute("slot");
    } else {
      this._slot.assign();
    }
    this._slot = null;
    this._target = null;
    window.dispatchEvent(new Event("gmhObservePositions"));
    this.isOpen = false;
    this._options.content = void 0;
  }
  _onInfoClick(event) {
    this.dispatchEvent(event);
  }
  _onPositionChanged() {
    if (!this._target) {
      this.close();
      return;
    }
    const positionLatLng = this._target.getPosition();
    const mapView = this.parentView;
    if (!mapView) {
      return;
    }
    const markerPx = mapView.fromLatLngToContainerPixel(positionLatLng);
    if (!markerPx) {
      this.style.visibility = "hidden";
      return;
    }
    const pxAnchorPoint = {
      x: truncateValue(parseFloat(getComputedCSS(this._target, "g-anchor-point-x") || "0.5"), 0, 1),
      y: truncateValue(parseFloat(getComputedCSS(this._target, "g-anchor-point-y") || "0.2"), 0, 1)
    };
    const iconSize = {
      x: truncateValue(parseInt(getComputedCSS(this._target, "g-icon-width") || "42", 10), 1, 64),
      y: truncateValue(parseInt(getComputedCSS(this._target, "g-icon-height") || "42", 10), 1, 64)
    };
    let adjustment = 1;
    if (this.platformId === PlatformId.ANDROID || this.platformId === PlatformId.IOS) {
      const mapH = mapView.offsetHeight;
      const y = markerPx.y - mapH / 2;
      const mapTilt = mapView.getTilt() * (Math.PI / 180);
      const height = 1625;
      const tmp1 = height * height + y * y;
      const tmp2 = height + y * Math.tan(mapTilt);
      adjustment = tmp2 / Math.sqrt(tmp1);
      const anchorX = this._options.anchorPosition.x;
      this._options.anchorPosition.y;
      this.style.transformOrigin = `${anchorX} ${anchorX}`;
      this.style.transform = `scale(${adjustment})`;
    }
    const canvasPx = {
      x: -(iconSize.x * (0.5 - pxAnchorPoint.x)) - this._options.anchorPosition.x,
      y: -(iconSize.y * (1 - pxAnchorPoint.y)) * adjustment - this._options.anchorPosition.y
    };
    this._frame.style.left = `${canvasPx.x}px`;
    this._frame.style.top = `${canvasPx.y}px`;
    this.style.left = `${markerPx.x}px`;
    this.style.top = `${markerPx.y}px`;
    if (this.platformId === PlatformId.ANDROID || this.platformId === PlatformId.IOS) {
      window.dispatchEvent(new Event("gmhObservePositions"));
    }
    this.dispatchEvent(new Event("close"));
  }
  async onConnected() {
    await super.onConnected();
    this.appendChild(this._frame);
    if (this.hasAttribute("content")) {
      const content = this.getAttribute("content");
      if (content) {
        this.setContent(content);
      }
    }
    this.initStatus = HTMLElementBaseStatus.VIEW_CREATED;
    this.setHasMap(true);
  }
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  async onDisconnected() {
    await super.onDisconnected();
    this.setHasMap(false);
    this.removeChild(this._frame);
  }
}
class InfoWindow extends InfoWindowBase {
  onContentMeasure(width, height) {
    let maxWidth = width;
    if (getComputedCSS(this, "g-max-width")) {
      maxWidth = parseFloat(getComputedCSS(this, "g-max-width"));
    }
    return {
      width: truncateValue(width, 0, maxWidth),
      height
    };
  }
  onCanvas(canvas) {
    const canvasSize = this.getCanvasSize();
    const width = canvasSize.width;
    const height = canvasSize.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get the canvas context");
    }
    const contentSize = this.getContentSize();
    const padding = this.getPadding();
    const contextH = contentSize.height + padding * 2;
    const anchorX = width / 2;
    const anchorY = height;
    const tailSize = this.getTailSize();
    const tailW = tailSize.width;
    ctx.beginPath();
    const backgroundCSS = getStyle(this, "background-color");
    let backgroundColor = "white";
    if (isHTMLColorString(backgroundCSS)) {
      const colorVals = HTMLColor2RGBA(backgroundCSS);
      if (colorVals[3] > 0) {
        backgroundColor = backgroundCSS;
      }
    }
    ctx.fillStyle = backgroundColor;
    const borderColorCSS = getStyle(this, "border-color");
    ctx.strokeStyle = isHTMLColorString(borderColorCSS) ? borderColorCSS : "black";
    const borderWidthCSS = getStyle(this, "border-width");
    let borderWidth = 1;
    if (/^\d+(\s*?px)?$/.test(borderWidthCSS)) {
      borderWidth = parseInt(borderWidthCSS.replace(/[^\d]/g, ""), 10);
    }
    ctx.lineWidth = borderWidth;
    const round = 10;
    ctx.moveTo(round, 0);
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.lineTo(width - round, 0);
    ctx.quadraticCurveTo(width, 0, width, round);
    ctx.lineTo(width, contextH - round);
    ctx.quadraticCurveTo(width, contextH, width - round, contextH);
    ctx.lineTo(anchorX + round + tailW / 2, contextH);
    ctx.lineTo(anchorX, anchorY);
    ctx.lineTo(anchorX - round - tailW / 2, contextH);
    ctx.lineTo(round, contextH);
    ctx.quadraticCurveTo(0, contextH, 0, contextH - round);
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.lineTo(0, round);
    ctx.quadraticCurveTo(0, 0, round, 0);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}
const isILatLngBounds = (target) => {
  return !!target && "southWest" in target && "northEast" in target && "lat" in target.southWest && typeof target.southWest.lat === "number" && "lng" in target.southWest && typeof target.southWest.lng === "number" && "lat" in target.northEast && typeof target.northEast.lat === "number" && "lng" in target.northEast && typeof target.northEast.lng === "number";
};
const isILatLngBoundsLiteral = (target) => {
  return !!target && "north" in target && typeof target.north === "number" && "east" in target && typeof target.east === "number" && "west" in target && typeof target.west === "number" && "south" in target && typeof target.south === "number";
};
const toILatLngBounds = (target) => {
  if (!target) {
    throw new Error("The first argument of toILatLngBounds() can not be null");
  }
  if (isILatLngBoundsLiteral(target)) {
    const bounds = target;
    return {
      northEast: {
        "lat": bounds.north,
        "lng": bounds.east
      },
      southWest: {
        "lat": bounds.south,
        "lng": bounds.west
      }
    };
  } else if (isILatLngBounds(target)) {
    const bounds = target;
    return {
      northEast: {
        "lat": bounds.northEast.lat,
        "lng": bounds.northEast.lng
      },
      southWest: {
        "lat": bounds.southWest.lat,
        "lng": bounds.southWest.lng
      }
    };
  } else if (target instanceof LatLngBounds) {
    const bounds = target;
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    return {
      northEast: {
        "lat": ne.lat,
        "lng": ne.lng
      },
      southWest: {
        "lat": sw.lat,
        "lng": sw.lng
      }
    };
  } else if (Array.isArray(target)) {
    return new LatLngBounds(target).toJSON();
  } else if (typeof target === "string") {
    const values = target.split(",");
    const values2 = values.filter((value) => {
      return /[\-\+]?\d+(?:\.\d+)?/.test(value);
    });
    if (values.length !== values2.length) {
      throw new Error(`Can not parse latLngBounds string: "${target}"`);
    }
    const positions = values2.map((value) => {
      return parseILatLng(value);
    });
    return new LatLngBounds(positions).toJSON();
  }
  throw new Error("Can not convert to ILatLngBounds");
};
class LatLngBounds {
  constructor(sw, ne) {
    this.northEast = void 0;
    this.southWest = void 0;
    this.beyond0 = false;
    this.beyond180 = false;
    if (!sw) {
      return;
    }
    if (isILatLngBoundsLiteral(sw) || isILatLngBounds(sw) || sw instanceof LatLngBounds) {
      const bounds = toILatLngBounds(sw);
      this.northEast = {
        lat: bounds.northEast.lat,
        lng: bounds.northEast.lng
      };
      this.southWest = {
        lat: bounds.southWest.lat,
        lng: bounds.southWest.lng
      };
    } else if ((sw instanceof LatLng || isILatLng(sw)) && (ne instanceof LatLng || isILatLng(ne))) {
      this.southWest = toILatLng(sw);
      this.northEast = toILatLng(ne);
    } else if (Array.isArray(sw)) {
      const points = sw;
      points.forEach((point) => {
        this.extend(point);
      });
    }
    if (!this.isEmpty()) {
      this.beyond0 = this.southWest.lng > 0 && this.northEast.lng < 0 || this.southWest.lng > this.northEast.lng;
      this.beyond180 = this.southWest.lng > 0 && this.northEast.lng < 0 || this.southWest.lng > this.northEast.lng;
    }
  }
  /**
   * Converts to string
   * @return {string}
   */
  toString() {
    if (this.isEmpty()) {
      return "((1, 180), (-1, -180))";
    }
    const bounds = this.toJSON();
    return `((${bounds.south}, ${bounds.west}), (${bounds.north}, ${bounds.east}))`;
  }
  /**
   * Returns if the bounds are empty.
   * @return {boolean}
   */
  isEmpty() {
    return !this.southWest && !this.northEast;
  }
  /**
   * Converts to ILatLngBoundsLiteral
   * @return {ILatLngBoundsLiteral}
   */
  toJSON() {
    if (this.isEmpty()) {
      return {
        east: -180,
        north: -1,
        south: 1,
        west: 180
      };
    }
    return {
      east: this.northEast.lng,
      north: this.northEast.lat,
      south: this.southWest.lat,
      west: this.southWest.lng
    };
  }
  /**
   * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southWest corner of the bounding box, while "ne" corresponds to the northEast corner of that box.
   * @param precision {number}
   * @return {string}
   */
  toUrlValue(precision = 6) {
    if (this.isEmpty()) {
      return [1, 180, -1, -180].join(",");
    }
    return [
      toFixedForGoogleMaps(this.southWest.lat, precision),
      toFixedForGoogleMaps(this.southWest.lng, precision),
      toFixedForGoogleMaps(this.northEast.lat, precision),
      toFixedForGoogleMaps(this.northEast.lng, precision)
    ].join(",");
  }
  /**
   * Extends this bounds to contain the given point.
   * @param LatLng {LatLng | ILatLng}
   */
  extend(latLng) {
    if (!latLng || !("lat" in latLng && "lng" in latLng))
      return;
    const target = toILatLng(latLng);
    if (this.isEmpty()) {
      this.southWest = target;
      this.northEast = target;
      this.beyond0 = this.southWest.lng < 0 && this.northEast.lng > 0 || this.southWest.lng > this.northEast.lng;
      this.beyond180 = this.southWest.lng > 0 && this.northEast.lng < 0 || this.southWest.lng > this.northEast.lng;
    } else {
      const south = Math.min(target.lat, this.southWest.lat);
      const north = Math.max(target.lat, this.northEast.lat);
      let east = this.northEast.lng;
      let west = this.southWest.lng;
      const isEastPlus = east > 0;
      const isWestPlus = west > 0;
      const isTargetPlus = target.lng > 0;
      let distE = 0;
      let distW = 0;
      let caseNum = 0;
      if (this.contains(target)) {
        return;
      }
      let containLng = false;
      if (this.beyond180) {
        containLng = target.lng >= west && target.lng <= 180 || target.lng <= east && target.lng >= -180;
      } else {
        containLng = target.lng >= west && target.lng <= east;
      }
      if (!containLng) {
        if (isWestPlus && isEastPlus && !isTargetPlus && !this.beyond0 && !this.beyond180 || !isWestPlus && isEastPlus && !isTargetPlus && this.beyond0 && !this.beyond180 || !isWestPlus && !isEastPlus && !isTargetPlus && target.lng < west && !this.beyond0 && !this.beyond180 || isWestPlus && isEastPlus && isTargetPlus && target.lng < west && !this.beyond0 && !this.beyond180) {
          distE = 180 - east + (target.lng + 180);
          distW = west - target.lng;
          caseNum = 1;
        } else if (isWestPlus && !isEastPlus && !isTargetPlus && !this.beyond0 && this.beyond180) {
          distE = target.lng - east;
          distW = west - target.lng;
          caseNum = 2;
        } else if (!isWestPlus && !isEastPlus && !isTargetPlus && this.beyond0 || isEastPlus && isWestPlus && isTargetPlus && this.beyond0 && this.beyond180 || !isEastPlus && isWestPlus && isTargetPlus && !this.beyond0 && this.beyond180) {
          distE = target.lng - east;
          distW = west - target.lng;
          caseNum = 3;
        } else if (isWestPlus && isEastPlus && isTargetPlus && target.lng > east && !this.beyond0 && !this.beyond180 || isEastPlus && !isWestPlus && isTargetPlus && this.beyond0 && !this.beyond180 || !isEastPlus && !isWestPlus && isTargetPlus && !this.beyond0 && !this.beyond180 || !isEastPlus && !isWestPlus && !isTargetPlus && target.lng > east && !this.beyond0 && !this.beyond180) {
          distE = target.lng - east;
          distW = 180 + west + (180 - target.lng);
          caseNum = 4;
        }
        if (caseNum > 0) {
          if (distE < distW) {
            east = target.lng;
          } else {
            west = target.lng;
          }
        } else {
          const debugInfo = btoa(JSON.stringify({
            case: "LatLngBounds.extends did not match",
            bounds: this.toUrlValue(),
            target: target.lng,
            beyond0: this.beyond0,
            beyond180: this.beyond180
          }));
          throw new Error(`[LatLngBounds.extend] Please report this error message: "${debugInfo}"`);
        }
      }
      this.southWest = {
        lat: south,
        lng: west
      };
      this.northEast = {
        lat: north,
        lng: east
      };
      this.beyond0 = this.beyond0 || west < 0 && east > 0 || this.southWest.lng > this.northEast.lng;
      this.beyond180 = this.beyond180 || west > 0 && east < 0 || this.southWest.lng > this.northEast.lng;
    }
  }
  /**
   * Comparison function.
   * @method
   * @return {Boolean}
   */
  equals(other) {
    if (!other)
      return false;
    const literal = {
      south: -999,
      north: -999,
      east: -999,
      west: -999
    };
    if (other instanceof LatLngBounds) {
      const other1 = other;
      const sw = other1.getSouthWest();
      const ne = other1.getNorthEast();
      literal.south = sw.lat;
      literal.west = sw.lng;
      literal.north = ne.lat;
      literal.east = ne.lng;
    } else if (isILatLngBounds(other)) {
      const other1 = other;
      literal.south = other1.southWest.lat;
      literal.west = other1.southWest.lng;
      literal.north = other1.northEast.lat;
      literal.east = other1.northEast.lng;
    } else if (isILatLngBoundsLiteral(other)) {
      const other1 = other;
      literal.south = other1.south;
      literal.west = other1.west;
      literal.north = other1.north;
      literal.east = other1.east;
    } else {
      return false;
    }
    return this.southWest.lat === literal.south && this.southWest.lng === literal.west && this.northEast.lat === literal.north && this.northEast.lng === literal.east;
  }
  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {LatLng | ILatLng}
   */
  contains(latLng) {
    if (!latLng || !("lat" in latLng) || !("lng" in latLng)) {
      return false;
    }
    const target = toILatLng(latLng);
    const containLat = target.lat <= this.northEast.lat && target.lat >= this.southWest.lat;
    const east = this.northEast.lng;
    const west = this.southWest.lng;
    let containLng = false;
    if (this.beyond180) {
      containLng = target.lng >= west && target.lng <= 180 || target.lng <= east && target.lng >= -180;
    } else {
      containLng = target.lng >= west && target.lng <= east;
    }
    return containLat && containLng;
  }
  /**
   * Computes the center of this LatLngBounds
   * @return {LatLng}
   */
  getCenter() {
    if (this.isEmpty()) {
      return new LatLng(0, -180);
    }
    const lng_lo = this.beyond180 ? this.northEast.lng : this.southWest.lng;
    const lng_hi = this.beyond180 ? this.southWest.lng : this.northEast.lng;
    let centerLng;
    if (this.beyond180) {
      const delta = (180 - lng_lo + (180 + lng_hi)) / 2;
      centerLng = lng_lo + delta;
      centerLng = centerLng > 180 ? -180 + (centerLng - 180) : centerLng;
    } else {
      centerLng = (this.southWest.lng + this.northEast.lng) / 2;
    }
    const centerLat = (this.southWest.lat + this.northEast.lat) / 2;
    return new LatLng(centerLat, centerLng);
  }
  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {LatLngBounds | ILatLngBounds | ILatLngBoundsLiteral}
   */
  union(other) {
    if (!other) {
      if (this.isEmpty()) {
        return new LatLngBounds();
      } else {
        return new LatLngBounds(this.southWest, this.northEast);
      }
    }
    if (!isILatLngBounds(other) && !isILatLngBoundsLiteral(other) && !(other instanceof LatLngBounds)) {
      throw new Error("[LatLng.union] unknown type data was given.");
    }
    const otherBounds = toILatLngBounds(other);
    if (this.isEmpty()) {
      return new LatLngBounds(otherBounds.southWest, otherBounds.northEast);
    }
    this.extend(otherBounds.southWest);
    this.extend(otherBounds.northEast);
    return this;
  }
  /**
   * Returns the south-west corner of this bounds
   * @return {LatLng}
   */
  getSouthWest() {
    return new LatLng(this.southWest.lat, this.southWest.lng);
  }
  /**
   * Returns the north-east corner of this bounds
   * @return {LatLng}
   */
  getNorthEast() {
    return new LatLng(this.northEast.lat, this.northEast.lng);
  }
  /**
   * Converts the given map bounds to a lat/lng span.
   * @return {LatLng}
   *
   * https://stackoverflow.com/a/27348239/697856
   */
  toSpan() {
    if (this.isEmpty()) {
      return new LatLng(0, 0);
    } else {
      return new LatLng(this.northEast.lat - this.southWest.lat, (this.northEast.lng - this.southWest.lng + 360) % 360 || 360);
    }
  }
  intersects(bounds) {
    let target;
    if (this.isEmpty()) {
      return false;
    }
    if ("north" in bounds && "east" in bounds && "west" in bounds && "south" in bounds) {
      const latLngBounds = bounds;
      target = {
        north: latLngBounds.north,
        east: latLngBounds.east,
        south: latLngBounds.south,
        west: latLngBounds.west
      };
    } else if ("northEast" in bounds && "southWest" in bounds) {
      const latLngBounds = bounds;
      target = {
        north: latLngBounds.northEast.lat,
        east: latLngBounds.northEast.lng,
        south: latLngBounds.southWest.lat,
        west: latLngBounds.southWest.lng
      };
    } else if (bounds instanceof LatLngBounds) {
      const latLngBounds = bounds;
      if (latLngBounds.isEmpty()) {
        return false;
      }
      const ne = latLngBounds.getNorthEast();
      const sw = latLngBounds.getSouthWest();
      target = {
        north: ne.lat,
        east: ne.lng,
        south: sw.lat,
        west: sw.lng
      };
    } else {
      return false;
    }
    return this.contains({ lat: target.south, lng: target.west }) || this.contains({ lat: target.south, lng: target.east }) || this.contains({ lat: target.north, lng: target.west }) || this.contains({ lat: target.north, lng: target.east });
  }
}
const MapTypeId = {
  ROADMAP: "roadmap",
  HYBRID: "hybrid",
  SATELLITE: "satellite",
  TERRAIN: "terrain",
  NONE: "none"
};
const wrapValue = (x, left, right) => {
  if (left > right) {
    const tmp = right;
    right = left;
    left = tmp;
  }
  const size2 = right - left;
  x -= Math.floor((x - left) / size2) * size2;
  if (x > right) {
    x -= size2;
  } else if (x < left) {
    x += size2;
  }
  return x;
};
const MIN_ZOOM = 0;
const MAX_ZOOM = 30;
class MapView extends CustomViewBase {
  static get observedAttributes() {
    return ["center", "zoom", "maptype", "tilt", "heading", "class", "id"];
  }
  constructor(options = {}) {
    super();
    this.nativeEvent2apiEvent = {
      "camera:move:start": "camera_move_start",
      "camera:move": "camera_move",
      "camera:move:end": "camera_move_end",
      dragging: "drag",
      "drag:end": "drag_end",
      "drag:start": "drag_start",
      "tiles:loaded": "tiles_loaded"
    };
    this._bind_onMvcChanged = (event) => this._onMvcChanged(event);
    this._bind_onCameraPropertyChanged = () => this._onCameraPropertyChanged();
    this._bind_updateCameraParams = () => this.updateCameraParams();
    this._mat = [];
    this._inv = [];
    this.state.set("maptype", MapTypeId.NONE, true);
    this.state.set("center", { lat: 0, lng: 0 }, true);
    this.state.set("zoom", 0, true);
    this.state.set("heading", 0, true);
    this.state.set("tilt", 0, true);
    this.state.set("northEast", { lat: 0, lng: 0 }, true);
    this.state.set("southWest", { lat: 0, lng: 0 }, true);
    this.state.set("farLeft", { lat: 0, lng: 0 }, true);
    this.state.set("farRight", { lat: 0, lng: 0 }, true);
    this.state.set("nearLeft", { lat: 0, lng: 0 }, true);
    this.state.set("nearRight", { lat: 0, lng: 0 }, true);
    this.state.set("minZoom", MIN_ZOOM, true);
    this.state.set("maxZoom", MAX_ZOOM, true);
    this.state.set("building", true, true);
    this.state.set("clickableIcons", false, true);
    if (options) {
      if ("mapType" in options && options.mapType) {
        this.state.set("maptype", this._normalizedMapType(options.mapType));
      }
      if ("camera" in options && options.camera) {
        this.state.set("initCamera", options.camera);
      }
      if ("preferences" in options && options.preferences) {
        const pref = options.preferences;
        if ("minZoom" in pref && typeof pref.minZoom === "number") {
          this.state.set("minZoom", this._normalizedMinZoom(options.preferences.minZoom));
        }
        if ("maxZoom" in pref && typeof pref.maxZoom === "number") {
          this.state.set("maxZoom", this._normalizedMaxZoom(options.preferences.maxZoom));
        }
        if ("building" in pref) {
          this.state.set("building", pref.building === true);
        }
        if ("clickableIcons" in pref) {
          this.state.set("clickableIcons", pref.clickableIcons === true);
        }
        if ("restriction" in pref) {
          this.state.set("restriction", this._normalizedRestriction(options.preferences.restriction));
        }
      }
      if ("controls" in options && options.controls) {
        options.controls;
      }
      if ("gestures" in options && options.gestures)
        ;
      if ("styles" in options && options.styles)
        ;
    }
    this.state.set("cameraEventTimer", void 0);
    this.state.addEventListener("bounds_changed", this._bind_onMvcChanged);
    this.state.addEventListener("center_changed", this._bind_onMvcChanged);
    this.state.addEventListener("tilt_changed", this._bind_onMvcChanged);
    this.state.addEventListener("heading_changed", this._bind_onMvcChanged);
    this.state.addEventListener("zoom_changed", this._bind_onMvcChanged);
    this.template.innerHTML = `
      <style>
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        overflow: hidden;
      }
      .info_layer {
        position: absolute;
        width: 0px;
        height: 0px;
        left: 0px;
        top: 0px;
        color: black;
        pointer-events: none;
        text-align: left;
      }
      .contents_layer {
        position: relative;
        z-index: 20;
      }
      </style>
      <div class='info_layer' id='info_layer'></div>
      <div class='contents_layer'><slot name='contents'></slot></div>
    `;
    this.shadow.appendChild(this.template.content.cloneNode(true));
    const platformId = window.mkgeeklab.googlemaps.getPlatformId();
    if (platformId === PlatformId.ANDROID || platformId === PlatformId.IOS) {
      this.addEventListener("tiles:loaded", this._onTilesLoadeFromNative.bind(this));
    }
    this.addEventListener("camera:move", this._onCameraChangedFromNative.bind(this));
    this.addEventListener("camera:move:end", this._onCameraChangedFromNative.bind(this));
  }
  _onMvcChanged(event) {
    this.dispatchEvent(event);
  }
  _onCameraPropertyChanged() {
    let timer = this.state.get("cameraEventTimer");
    if (timer !== void 0) {
      clearTimeout(timer);
    }
    timer = setTimeout(this._bind_updateCameraParams, 100);
  }
  updateCameraParams() {
    this.state.set("cameraEventTimer", void 0);
    const options = {
      camera: {
        target: [this.state.get("center")],
        zoom: this.state.get("zoom"),
        tilt: this.state.get("tilt"),
        heading: this.state.get("heading")
      }
    };
    if (this.isConnected && this.initStatus === HTMLElementBaseStatus.VIEW_CREATED) {
      this.execPromise(this.viewId, "setOptions", [options]);
    }
  }
  _normalizedMinZoom(value) {
    if (value === void 0 || value === null) {
      return 2;
    }
    if (typeof value === "string") {
      value = parseInt(value, 10);
    }
    if (typeof value === "number") {
      return truncateValue(value, 2, 30);
    }
    return 2;
  }
  _normalizedMaxZoom(value) {
    if (value === void 0 || value === null) {
      return 30;
    }
    if (typeof value === "string") {
      value = parseInt(value, 10);
    }
    if (typeof value === "number") {
      return truncateValue(value, 2, 30);
    }
    return 30;
  }
  _normalizedBuilding(value) {
    if (value === void 0 || value === null) {
      return parseBoolean(getComputedCSS(this, "g-pref-building"));
    }
    return value === true;
  }
  _normalizedClickableIcons(value) {
    if (value === void 0 || value === null) {
      return parseBoolean(getComputedCSS(this, "g-pref-clickable-icons"));
    }
    return value === true;
  }
  _normalizedRestriction(value) {
    if (value === null || value === void 0) {
      return toILatLngBounds(getComputedCSS(this, "g-pref-restriction"));
    }
    return toILatLngBounds(value);
  }
  _normalizedCenter(value) {
    if (value instanceof LatLng) {
      return value.toJSON();
    } else if (isILatLng(value)) {
      return {
        lat: value.lat,
        lng: value.lng
      };
    } else if (typeof value === "string") {
      return parseILatLng(value);
    } else {
      throw new Error(`Can not parse given value : ${value}`);
    }
  }
  _normalizedZoom(value) {
    if (value === void 0 || value === null) {
      return this.state.get("minZoom");
    }
    if (typeof value === "string") {
      value = parseInt(value, 10);
    }
    return truncateValue(value, this.state.get("minZoom"), this.state.get("maxZoom"));
  }
  _normalizedTilt(value) {
    if (value === void 0 || value === null) {
      return 0;
    }
    if (typeof value === "string") {
      value = parseInt(value, 10);
    }
    return truncateValue(value, 0, 90);
  }
  _normalizedHeading(value) {
    if (value === void 0 || value === null) {
      return 0;
    }
    if (typeof value === "string") {
      value = parseInt(value, 10) || 0;
    }
    if (value < 0) {
      value = value + 360;
    }
    return value % 360;
  }
  _normalizedMapType(mapTypeId) {
    if (!mapTypeId) {
      return "roadmap";
    }
    mapTypeId = mapTypeId.toLowerCase();
    mapTypeId = mapTypeId === "roadmap" || mapTypeId === "hybrid" || mapTypeId === "satellite" || mapTypeId === "terrain" || mapTypeId === "none" ? mapTypeId : "roadmap";
    return mapTypeId;
  }
  convertToCameraParams(params) {
    if (!params) {
      return {
        padding: 0
      };
    }
    const cameraParams = {
      padding: 10
    };
    const target = [];
    if (Array.isArray(params.target)) {
      const bounds = new LatLngBounds(params.target);
      target.push(bounds.getNorthEast().toJSON());
      target.push(bounds.getSouthWest().toJSON());
    } else if (params.target instanceof LatLng) {
      target.push(params.target.toJSON());
    } else if (isILatLng(params.target)) {
      target.push(params.target);
    } else if (params.target instanceof LatLngBounds) {
      const bounds = params.target;
      target.push(bounds.getNorthEast().toJSON());
      target.push(bounds.getSouthWest().toJSON());
    } else if (isILatLngBounds(params.target)) {
      const bounds = new LatLngBounds(params.target);
      target.push(bounds.getNorthEast().toJSON());
      target.push(bounds.getSouthWest().toJSON());
    } else if (isILatLngBoundsLiteral(params.target)) {
      const bounds = new LatLngBounds(params.target);
      target.push(bounds.getNorthEast().toJSON());
      target.push(bounds.getSouthWest().toJSON());
    }
    if (target.length > 0) {
      cameraParams.target = target;
      if (target.length > 1) {
        if (typeof params.padding === "number") {
          cameraParams.padding = Math.max(0, params.padding);
        }
      } else {
        if (typeof params.zoom === "number") {
          cameraParams.zoom = params.zoom;
        }
      }
    }
    if (typeof params.tilt === "number") {
      cameraParams.tilt = params.tilt;
    }
    if (typeof params.heading === "number") {
      cameraParams.heading = params.heading;
    }
    if (typeof params.duration === "number") {
      cameraParams.duration = params.duration;
    }
    return cameraParams;
  }
  /**
   * Moves the camera to the specified camera position
   */
  moveCamera(params) {
    if (!params) {
      return Promise.resolve();
    }
    const cameraParams = this.convertToCameraParams(params);
    return this.execPromise(this.viewId, "moveCamera", [cameraParams]);
  }
  /**
   * Fits the camera viewport to the speicified bounds
   */
  // public fitBounds(
  //   cameraTarget: ILatLngBounds | ILatLngBoundsLiteral | LatLngBounds | MVCArray<ILatLng | LatLng> | LatLng[] | ILatLng[]
  // ): Promise<void> {
  //   const positionArray: ILatLng[] = toILatLngArray(cameraTarget);
  //   const bounds: LatLngBounds = new LatLngBounds();
  //   positionArray.forEach((position: ILatLng): void => {
  //     bounds.extend(position);
  //   });
  //
  //   const centerLatLng: LatLng = bounds.getCenter();
  //   const centerPx: IPoint = this.getProjection().fromLatLngToPoint(centerLatLng);
  //   const northEastLatLng: LatLng = bounds.getNorthEast();
  //   const northEastPx: IPoint = this.getProjection().fromLatLngToPoint(northEastLatLng);
  //   const r: number = Math.abs(centerPx.x - northEastPx.x);
  //   const zoom: number = Math.log(256 / r) / Math.log(2);
  //
  //   return this.moveCamera({
  //     center: centerLatLng.toJSON(),
  //     zoom,
  //   });
  // }
  /*****************************
   * maptype property
   ******************************/
  get maptype() {
    return this.state.get("maptype");
  }
  set maptype(value) {
    if (value === null || value === void 0) {
      this.removeAttribute("maptype");
      this.state.set("maptype", "none");
    } else {
      this.state.set("maptype", this._normalizedMapType(value));
    }
  }
  /*****************************
   * heading property
   ******************************/
  getHeading() {
    return this.state.get("heading");
  }
  setHeading(value) {
    if (typeof value === "number") {
      if (value < 0) {
        value = value + 360;
      }
      this.state.set("heading", value % 360);
      Promise.resolve().then(this._bind_onCameraPropertyChanged);
    } else {
      throw new Error("setHeading() accepts a number");
    }
  }
  get heading() {
    return this.state.get("heading");
  }
  set heading(value) {
    if (value === null || value === void 0) {
      this.removeAttribute("heading");
      this.state.set("heading", 0);
    } else {
      if (value !== this.state.get("heading")) {
        this.state.set("heading", this._normalizedHeading(value));
        Promise.resolve().then(this._bind_onCameraPropertyChanged);
      }
    }
  }
  /*****************************
   * tilt property
   ******************************/
  getTilt() {
    return this.state.get("tilt");
  }
  setTilt(value) {
    if (typeof value === "number") {
      this.state.set("tilt", truncateValue(value, 0, 90));
      Promise.resolve().then(this._bind_onCameraPropertyChanged);
    } else {
      throw new Error("setTilt() accepts an integer number from 0 to 90");
    }
  }
  get tilt() {
    return this.state.get("tilt");
  }
  set tilt(value) {
    if (value === null || value === void 0) {
      this.removeAttribute("tilt");
      this.state.set("tilt", 0);
    } else {
      if (value !== this.state.get("tilt")) {
        this.state.set("tilt", this._normalizedTilt(value));
        Promise.resolve().then(() => this._onCameraPropertyChanged());
      }
    }
  }
  /*****************************
   * center property
   ******************************/
  getCenter() {
    const pos = this.state.get("center");
    return {
      lat: pos.lat,
      lng: pos.lng
    };
  }
  setCenter(value) {
    if (value instanceof LatLng) {
      this.state.set("center", value.toJSON());
      Promise.resolve().then(this._bind_onCameraPropertyChanged);
    } else if (isILatLng(value)) {
      this.state.set("center", value);
      Promise.resolve().then(this._bind_onCameraPropertyChanged);
    } else {
      throw new Error("setCenter() accepts a value of ILatLng or LatLng");
    }
  }
  get center() {
    return this.state.get("center");
  }
  set center(value) {
    if (typeof value === "string") {
      try {
        parseILatLng(value);
      } catch (e) {
        throw new Error('The center property must be formatted with "(latitude), (longitude)"');
      }
    }
    if (value !== this.state.get("center")) {
      this.state.set("center", this._normalizedCenter(value));
      Promise.resolve().then(this._bind_onCameraPropertyChanged);
    }
  }
  /*****************************
   * zoom property
   ******************************/
  getZoom() {
    return this.state.get("zoom");
  }
  setZoom(value) {
    if (typeof value === "number") {
      this.state.set("zoom", truncateValue(value, this.state.get("minZoom"), this.state.get("maxZoom")));
      Promise.resolve().then(this._bind_onCameraPropertyChanged);
    } else {
      throw new Error("setZoom() accepts from 2 to 30 interger");
    }
  }
  get zoom() {
    return this.state.get("zoom");
  }
  set zoom(value) {
    if (value === null || value === void 0) {
      this.removeAttribute("zoom");
      this.state.set("zoom", this.state.get("minZoom"));
    } else {
      if (value !== this.state.get("zoom")) {
        this.state.set("zoom", this._normalizedZoom(value));
        Promise.resolve().then(() => this._onCameraPropertyChanged());
      }
    }
  }
  _onTilesLoadeFromNative(event) {
  }
  _onCameraChangedFromNative(event) {
    if (!isCustomEvent(event)) {
      return;
    }
    const customEvent = event;
    const cameraPosition = customEvent.detail;
    this._mat = cameraPosition.mat;
    this._inv = cameraPosition.inv;
    this.state.set("farLeft", cameraPosition.farLeft);
    this.state.set("farRight", cameraPosition.farRight);
    this.state.set("nearLeft", cameraPosition.nearLeft);
    this.state.set("nearRight", cameraPosition.nearRight);
    this.state.set("center", cameraPosition.center);
    this.state.set("tilt", cameraPosition.tilt);
    this.state.set("heading", cameraPosition.heading);
    this.state.set("zoom", cameraPosition.zoom);
    this.state.set("northEast", cameraPosition.northEast);
    this.state.set("southWest", cameraPosition.southWest);
    this.state.set("bounds", {
      northEast: cameraPosition.northEast,
      southWest: cameraPosition.southWest
    });
    this.dispatchEvent(new CustomEvent(this.nativeEvent2apiEvent[event.type]));
  }
  fromContainerPixelToLatLng(position, noWrap = false) {
    if (this._mat.length !== 9) {
      return void 0;
    }
    const pos = {
      x: position.x,
      y: position.y
    };
    pos.x -= this.offsetWidth / 2;
    pos.y -= this.offsetHeight / 2;
    pos.x += 128;
    pos.y += 128;
    pos.x /= 256;
    pos.y /= 256;
    const positionOnMap = this.applyMatrix(pos, this._mat);
    const projection = this.getProjection();
    if (noWrap !== true) {
      positionOnMap.x = wrapValue(positionOnMap.x, -128, 128);
    }
    return projection.fromPointToLatLng(positionOnMap, noWrap);
  }
  fromLatLngToContainerPixel(position) {
    if (this._inv.length !== 9) {
      return void 0;
    }
    const projection = this.getProjection();
    const pos = projection.fromLatLngToPoint(position);
    const centerPx = projection.fromLatLngToPoint(this.state.get("center"));
    pos.x = wrapValue(pos.x, centerPx.x - 128, centerPx.x + 128);
    const pointOnScreen = this.applyMatrix(pos, this._inv);
    pointOnScreen.x *= 256;
    pointOnScreen.y *= 256;
    pointOnScreen.x -= 128;
    pointOnScreen.y -= 128;
    return {
      x: pointOnScreen.x + this.offsetWidth / 2,
      y: pointOnScreen.y + this.offsetHeight / 2
    };
  }
  applyMatrix(pos, mat) {
    const s = mat[6] * pos.x + mat[7] * pos.y + mat[8];
    const x = (mat[0] * pos.x + mat[1] * pos.y + mat[2]) / s;
    const y = (mat[3] * pos.x + mat[4] * pos.y + mat[5]) / s;
    return {
      x,
      y
    };
  }
  get bounds() {
    const ne = this.state.get("northEast");
    const sw = this.state.get("southWest");
    return new LatLngBounds(ne, sw);
  }
  get farLeft() {
    return this.state.get("farLeft");
  }
  get farRight() {
    return this.state.get("farRight");
  }
  get nearLeft() {
    return this.state.get("nearLeft");
  }
  get nearRight() {
    return this.state.get("nearRight");
  }
  get northEast() {
    return this.state.get("northEast");
  }
  get southWest() {
    return this.state.get("southWest");
  }
  /**
   * 'id' or 'class'
   */
  _onRedrawMap(event) {
    if (this.initStatus < HTMLElementBaseStatus.VIEW_CREATED) {
      return;
    }
  }
  addEventListener(eventName, listener, options) {
    if (eventName === "click") {
      super.addEventListener(eventName, (event) => {
        if (!(event instanceof MouseEvent)) {
          listener(event);
        }
      }, options);
    } else {
      super.addEventListener(eventName, listener, options);
    }
  }
  /**
   * Invoked each time the custom element is appended into a document-connected element.
   */
  async connectedCallback() {
    super.connectedCallback();
    if (this.initStatus === HTMLElementBaseStatus.VIEW_CREATING) {
      return;
    }
    const opts = {
      id: this.getId()
    };
    new Promise((resolve) => {
      let prevRect = getElementRect(this);
      let stableCnt = 0;
      const timer = setInterval(() => {
        const newRect = getElementRect(this);
        if (prevRect.left === newRect.left && prevRect.top === newRect.top && prevRect.width === newRect.width && prevRect.height === newRect.height) {
          if (++stableCnt === 10) {
            clearInterval(timer);
            resolve();
            return;
          }
        } else {
          stableCnt = 0;
        }
        prevRect = newRect;
      }, 50);
    }).then(() => {
      const jsMapId = getComputedCSS(this, "g-js-mapid");
      const androidMapId = getComputedCSS(this, "g-android-mapid");
      const iosMapId = getComputedCSS(this, "g-ios-mapid");
      if (this.hasAttribute("maptype")) {
        this.maptype = this.getAttribute("maptype");
      }
      const initCamera = this.state.get("initCamera");
      const cameraParams = this.convertToCameraParams(initCamera);
      if (this.hasAttribute("center")) {
        this.center = this.getAttribute("center");
        cameraParams.target = [this.state.get("center")];
      }
      if (this.hasAttribute("zoom")) {
        this.zoom = this.getAttribute("zoom");
        cameraParams.zoom = this.state.get("zoom");
      }
      if (this.hasAttribute("tilt")) {
        this.tilt = this.getAttribute("tilt");
        cameraParams.tilt = this.state.get("tilt");
      }
      if (this.hasAttribute("heading")) {
        this.heading = this.getAttribute("heading");
        cameraParams.heading = this.state.get("heading");
      }
      const initOptions = {
        mapType: this.state.get("maptype"),
        controls: {},
        gestures: {},
        jsMapId,
        androidMapId,
        iosMapId,
        camera: cameraParams,
        preferences: {
          zoom: {
            minZoom: this.state.get("minZoom") || MIN_ZOOM,
            maxZoom: this.state.get("maxZoom")
          },
          building: this.state.get("building"),
          clickableIcons: this.state.get("clickableIcons"),
          restriction: this.state.get("restriction")
        }
      };
      return new Promise((resolve) => {
        if (this.initStatus === HTMLElementBaseStatus.NOT_READY) {
          this.initStatus = HTMLElementBaseStatus.VIEW_CREATING;
          this.execPromise("GoogleMaps", "createMapView", [opts, initOptions], {
            sync: true
          }).then(resolve);
        } else {
          Promise.resolve(resolve);
        }
      });
    }).then(() => {
      return this.execPromise("GoogleMaps", "attachToWindow", [opts], {
        sync: true
      });
    }).then(() => {
      this.initStatus = HTMLElementBaseStatus.VIEW_CREATED;
    });
  }
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.initStatus === HTMLElementBaseStatus.VIEW_CREATED) {
      this.execPromise("GoogleMaps", "detachFromWindow", [
        {
          id: this.getId()
        }
      ], {
        sync: true
      });
    }
  }
}
class Path extends HTMLElementBase {
  constructor() {
    super();
    this._hasMap = false;
    this._parentOverlay = null;
    this._children = [];
    this._path = new MVCBaseArray();
    this._bind_onUpdate = (event) => this._onUpdate(event);
    this._execQueue = new MVCBaseArray();
  }
  setParentOverlay(overlay) {
    this._parentOverlay = overlay;
  }
  get parentOverlay() {
    return this._parentOverlay;
  }
  _onUpdate(event) {
    const detail = event.detail;
    this.dispatchEvent(new CustomEvent("command", {
      detail: {
        methodName: event.type,
        index: detail.index,
        latLng: detail.value
      }
    }));
  }
  /**
   * Involves when child <g-latlng> element(s) is/are added.
   */
  onChildrenAdded(addedChildren) {
    const childList = Array.from(this.children);
    const indicesWithElements = addedChildren.map((addedChild) => {
      return {
        child: addedChild,
        index: childList.indexOf(addedChild)
      };
    });
    indicesWithElements.sort((a, b) => {
      return b.index - a.index;
    });
    indicesWithElements.forEach((info) => {
      this._children.splice(info.index, 0, info.child);
      this._path.insertAt(info.index, info.child.toJSON());
    });
  }
  /**
   * Involves when child <mkg-latlng> element(s) is/are removed.
   */
  onChildrenRemoved(children) {
    const indices = children.map((removedChild) => {
      return this._children.indexOf(removedChild);
    });
    indices.sort((a, b) => {
      return b - a;
    });
    indices.forEach((idx) => {
      if (idx > -1) {
        this._children.splice(idx, 1);
        this._path.removeAt(idx);
      }
    });
  }
  onCommandFromChildren(event) {
    const detail = event.detail;
    const idx = this._children.indexOf(event.target);
    if (idx === -1) {
      return;
    }
    switch (detail.methodName) {
      case "setPosition":
        this._path.setAt(idx, detail.latLng);
        break;
    }
  }
  toJSON() {
    return this._path.toArray();
  }
  connectedCallback() {
    super.connectedCallback();
    this._path.addEventListener("insert_at", this._bind_onUpdate);
    this._path.addEventListener("set_at", this._bind_onUpdate);
    this._path.addEventListener("remove_at", this._bind_onUpdate);
    this._path.addEventListener("remove_all", this._bind_onUpdate);
    const noNotify = true;
    Array.from(this.children).forEach((child, idx, arr) => {
      if (child instanceof LatLng) {
        this._path.push(child.toJSON(), noNotify);
        this._children.push(child);
      } else {
        throw new Error("<mkg-path> can contain only <mkg-latlng>");
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._path.removeEventListener("insert_at", this._bind_onUpdate);
    this._path.removeEventListener("set_at", this._bind_onUpdate);
    this._path.removeEventListener("remove_at", this._bind_onUpdate);
    this._path.removeEventListener("remove_all", this._bind_onUpdate);
    this.dispatchEvent(new CustomEvent("command", {
      detail: {
        methodName: "remove_all",
        path: []
      }
    }));
    this._path.clear(true);
    this._children.length = 0;
    this.setParentOverlay(null);
  }
}
class Polyline extends Overlay {
  constructor(options) {
    super();
    this._path = new MVCBaseArray();
    this._bind_onRemoveAll = (event) => this._onRemoveAll(event);
    this._bind_onUpdate = (event) => this._onPathUpdate(event);
    this.state.set("zIndex", void 0);
    this.state.set("visible", true);
    this.state.set("clickable", true);
    this.state.set("geodesic", false);
    this.state.set("zIndex", 0);
    this.state.set("strokeWidth", 1);
    this.state.set("strokeColor", [0, 0, 0, 255]);
    this.state.set("initOptions", options);
  }
  onRedraw() {
    if (this.initStatus < HTMLElementBaseStatus.VIEW_CREATED) {
      return;
    }
    this.applyOptionsToState();
  }
  _onRemoveAll(event) {
    this.execPromise("(parent)", "execute", [{
      id: this.viewId,
      subMethodName: "setPath"
    }, []]);
  }
  applyOptionsToState(options) {
    const currValues = {
      visible: this.state.get("visible"),
      clickable: this.state.get("clickable"),
      geodesic: this.state.get("geodesic"),
      strokeColor: this.state.get("strokeColor"),
      strokeWidth: this.state.get("strokeWidth"),
      // strokeStyle: this.state.get('strokeStyle'),
      zIndex: this.state.get("zIndex")
    };
    ["visible", "clickable", "geodesic"].forEach((key) => {
      const propValue = getComputedCSS(this, `mkg-${key}`);
      if (propValue !== void 0) {
        currValues[key] = parseBoolean(propValue);
      }
    });
    const strokeColor = getComputedCSS(this, "mkg-stroke-color") || "";
    if (strokeColor !== "") {
      currValues.strokeColor = HTMLColor2RGBA(strokeColor);
    }
    const strokeWidth = getComputedCSS(this, "mkg-stroke-width") || "";
    if (strokeWidth !== "") {
      currValues.strokeWidth = parseInt(strokeWidth.replace(/[^\d].*$/g, ""), 10);
    }
    const zIndex = getComputedCSS(this, "mkg-z-index") || "";
    if (zIndex !== "") {
      currValues.zIndex = parseInt(zIndex.replace(/[^\d].*$/g, ""), 10);
    }
    if (options) {
      if (typeof options.visible === "boolean") {
        currValues.visible = options.visible === true;
      }
      if (typeof options.clickable === "boolean") {
        currValues.clickable = options.clickable === true;
      }
      if (typeof options.geodesic === "boolean") {
        currValues.geodesic = options.geodesic === true;
      }
      if (options.strokeColor) {
        currValues.strokeColor = HTMLColor2RGBA(options.strokeColor);
      }
      if (typeof options.strokeWidth === "number" && options.strokeWidth >= 0) {
        currValues.strokeWidth = options.strokeWidth;
      }
      if (typeof options.zIndex === "number") {
        if (!Number.isInteger(options.zIndex)) {
          throw new Error("PolylineOptions.zIndex must be an integer value");
        }
        currValues.zIndex = options.zIndex;
      }
      if (options.path) {
        this.setPath(options.path);
      }
    }
    if (isNaN(currValues.zIndex)) {
      currValues.zIndex = 0;
    }
    Object.keys(currValues).forEach((key) => {
      this.state.set(key, currValues[key]);
    });
  }
  /**
   * Involved when MVCArray<ILatLng. is modified.
   */
  _onPathUpdate(event) {
    const detail = event.detail;
    this.execPromise("(parent)", "execute", [{
      id: this.viewId,
      subMethodName: "setPath"
    }, {
      action: detail.methodName,
      index: detail.index,
      latLng: detail.latLng
    }]);
  }
  /**
   * Involved when <mkg-latlng> is added/updated/removed under <mkg-path>
   */
  onCommandFromChildren(event) {
    console.log(event);
    this._onPathUpdate(event);
  }
  addEventListenersToPath() {
    this._path.addEventListener("remove_all", this._bind_onUpdate);
    this._path.addEventListener("set_at", this._bind_onUpdate);
    this._path.addEventListener("insert_at", this._bind_onUpdate);
    this._path.addEventListener("remove_at", this._bind_onUpdate);
  }
  removeEventListenersFromPath() {
    this._path.removeEventListener("remove_all", this._bind_onUpdate);
    this._path.removeEventListener("set_at", this._bind_onUpdate);
    this._path.removeEventListener("insert_at", this._bind_onUpdate);
    this._path.removeEventListener("remove_at", this._bind_onUpdate);
  }
  /*****************************
   * path property
   ******************************/
  getPath() {
    return this._path;
  }
  setPath(value) {
    const noNotify = true;
    if (this._path instanceof Path) {
      this._path = new MVCBaseArray();
      this.addEventListenersToPath();
    } else {
      this._path.clear(noNotify);
    }
    let positions = [];
    if (value instanceof MVCBaseArray) {
      value.forEach((element, idx) => {
        if (isILatLng(element)) {
          positions.push(element);
        } else {
          throw new Error("Polyline.setPath() accepts either one MVCArray<ILatLng>, ILatLng[], or Path.");
        }
      });
      this.removeEventListenersFromPath();
      this._path = value;
      this.addEventListenersToPath();
    } else if (Array.isArray(value)) {
      value.forEach((element, idx) => {
        if (isILatLng(element)) {
          positions.push(element);
          this._path.push(element, noNotify);
        } else {
          throw new Error("Polyline.setPath() accepts either one MVCArray<ILatLng>, ILatLng[], or Path.");
        }
      });
    } else if (value instanceof Path) {
      this._path = value;
      positions = this._path.toJSON();
    } else {
      throw new Error("Polyline.setPath() accepts either one MVCArray<ILatLng>, ILatLng[], or Path.");
    }
    this.execPromise("(parent)", "execute", [{
      id: this.viewId,
      subMethodName: "setOptions"
    }, {
      "path": positions
    }]);
  }
  async onConnected() {
    await super.onConnected();
    this.state.addEventListener("visible_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("clickable_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("geodesic_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("zIndex_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("strokeColor_changed", this._bind_onPropertyChanged);
    this.state.addEventListener("strokeWidth_changed", this._bind_onPropertyChanged);
    if (this._path instanceof MVCBaseArray) {
      this.addEventListenersToPath();
    }
    if (this.hasMap || this.initStatus === HTMLElementBaseStatus.VIEW_CREATING) {
      return;
    }
    this.setHasMap(true);
    const pathElements = Array.from(this.children).filter((child, idx, arr) => {
      return child instanceof Path;
    });
    if (pathElements.length > 1) {
      throw new Error("<mkg-polyline> can have only one <mkg-path>");
    }
    if (pathElements.length === 1) {
      if (this._path instanceof MVCBaseArray) {
        this.removeEventListenersFromPath();
      }
      this._path = pathElements[0];
    }
    new Promise((resolve) => {
      let positions = [];
      positions = this._path instanceof MVCBaseArray ? this._path.toArray() : this._path.toJSON();
      console.log(positions);
      if (this.initStatus === HTMLElementBaseStatus.NOT_READY) {
        this.initStatus = HTMLElementBaseStatus.VIEW_CREATING;
        this.execPromise("(parent)", "createPolyline", [{
          id: this.viewId
        }, {
          "path": positions,
          "visible": false
        }]).then(resolve);
      } else {
        this.execPromise("(parent)", "execute", [{
          id: this.viewId,
          subMethodName: "setOptions"
        }, {
          "path": positions,
          "visible": false
        }]).then(resolve);
      }
    }).then(() => {
      return this.execPromise("(parent)", "attachOverlayToMap", [{
        id: this.viewId
      }]);
    }).then(() => {
      this.initStatus = HTMLElementBaseStatus.VIEW_CREATED;
      const options = this.state.get("initOptions");
      this.applyOptionsToState(options);
      this.state.trigger("visible_changed", {
        "key": "visible",
        "prevValue": void 0,
        "value": this.state.get("visible")
      });
      this.state.set("initOptions", void 0);
    });
  }
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  async onDisconnected() {
    await super.onDisconnected();
    this.state.removeEventListener("visible_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("clickable_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("geodesic_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("zIndex_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("strokeColor_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("strokeWidth_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("strokeStyle_changed", this._bind_onPropertyChanged);
    this.state.removeEventListener("strokeStyleRepeat_changed", this._bind_onPropertyChanged);
    if (this._path instanceof MVCBaseArray) {
      this.removeEventListenersFromPath();
    }
    if (this.hasMap && this.initStatus === HTMLElementBaseStatus.VIEW_CREATED) {
      this.setHasMap(false);
      this.initStatus = HTMLElementBaseStatus.VIEW_RELEASED;
      this.execPromise("(parent)", "detachOverlayFromMap", [{
        id: this.getId()
      }]);
    }
  }
}
const windowReady = () => {
  return new Promise((resolve) => {
    const loop = () => {
      if (document.readyState !== "complete") {
        setTimeout(loop, 50);
      } else {
        resolve();
      }
    };
    loop();
  });
};
class CommandQueue {
  constructor(qName) {
    this.qName = qName;
    this.commandQueue = [];
    this.stopRequested = false;
    this.isExecuting = false;
    this._bind_nextTick = () => this.nextTick();
    this.waitSync = false;
  }
  purge() {
    this.stopRequested = true;
  }
  set bridge(bridgePlugin) {
    this._bridge = bridgePlugin;
    if (bridgePlugin) {
      Promise.resolve().then(this._bind_nextTick);
    }
  }
  get bridge() {
    return this._bridge;
  }
  execPromise(pluginName, methodName, args = [], execOptions = {}) {
    return new Promise((resolve, reject) => {
      this.commandQueue.push({
        pluginName,
        methodName,
        args,
        execOptions,
        onSuccess: (...results) => {
          if (this.stopRequested) {
            resolve.apply(this, results);
            return;
          }
          if (execOptions.sync) {
            this.waitSync = false;
          }
          resolve.apply(this, results);
          Promise.resolve().then(this._bind_nextTick);
        },
        onError: (error) => {
          if (this.stopRequested) {
            return;
          }
          if (execOptions.sync) {
            this.waitSync = false;
          }
          reject(error);
        }
      });
      if (this.isExecuting || this.waitSync || this.commandQueue.length === 0 || !this._bridge) {
        return;
      }
      this.nextTick();
    });
  }
  nextTick() {
    if (this.isExecuting || !this._bridge) {
      return;
    }
    this.isExecuting = true;
    while (this.commandQueue.length > 0 && !this.waitSync) {
      const command = this.commandQueue.shift();
      const pluginName = command.pluginName;
      const methodName = command.methodName;
      const args = btoa(JSON.stringify(command.args));
      const execOptions = command.execOptions;
      if (this.stopRequested && !execOptions.remove) {
        continue;
      }
      if (execOptions.sync) {
        this.waitSync = true;
      }
      this._bridge.execute(this.qName, pluginName, methodName, args).then(command.onSuccess).catch(command.onError);
    }
    this.isExecuting = false;
  }
}
class GooglemapsCore {
  constructor() {
    this.elements = {};
    this._options = {};
    this._queues = {};
    this._frameworkId = this.getFrameworkId();
    this._platformId = this.getPlatformId();
  }
  static getInstance() {
    if (!GooglemapsCore.instance) {
      GooglemapsCore.instance = new GooglemapsCore();
    }
    return GooglemapsCore.instance;
  }
  async setUp(options) {
    if (!options) {
      return;
    }
    const platformId = this.getPlatformId();
    if (options.bridge && platformId in options.bridge) {
      this.bridge = options.bridge[platformId];
      this.bridge.onInit(platformId, options);
      Object.keys(this._queues).forEach((key) => {
        this._queues[key].bridge = this.bridge;
      });
    } else {
      throw `options.bridge.${platformId} is required`;
    }
    const systemCmdQueue = this.getCommandQueue("system");
    if (platformId !== PlatformId.ANDROID && platformId !== PlatformId.IOS) {
      return;
    }
    const mutationListener = new MutationListener(systemCmdQueue);
    windowReady().then(() => {
      mutationListener.observe(document.body);
    });
    window.addEventListener("unload", () => {
      mutationListener.disconnect();
      systemCmdQueue.execPromise("GoogleMaps", "unload", [], {
        sync: true
      });
    }, {
      once: true,
      passive: true
    });
    const cssAdjuster = document.createElement("style");
    cssAdjuster.innerHTML = `
        ._gmh_css_ {
            background-image: none !important;
            background: rgba(0,0,0,0) none !important;
            background-color: rgba(0,0,0,0) !important;
        }
        ._gmh_css_ .nav-decor {
            background-color: rgba(0,0,0,0) !important;
            background: rgba(0,0,0,0) none !important;
            display:none !important;
        }
        .framework7-root .page-previous {
            display:none !important;
        }
        `;
    document.head.appendChild(cssAdjuster);
  }
  /**
   * Detects framework
   * @returns
   */
  getFrameworkId() {
    if (this._frameworkId) {
      return this._frameworkId;
    }
    this._frameworkId = FrameworkId.NO_FRAMEWORK;
    if ("cordova" in window && window.cordova.platformId) {
      this._frameworkId = FrameworkId.CORDOVA;
    }
    if ("Capacitor" in window && window.Capacitor.platform) {
      this._frameworkId = FrameworkId.CAPACITOR;
    }
    return this._frameworkId;
  }
  /**
   * Detects platform
   * @returns
   */
  getPlatformId() {
    if (this._platformId) {
      return this._platformId;
    }
    const frameworkId = this.getFrameworkId();
    let result = PlatformId.BROWSER;
    if (frameworkId === FrameworkId.CORDOVA) {
      if (window.cordova.platformId === "browser") {
        result = PlatformId.BROWSER;
      }
      if (window.cordova.platformId === "android") {
        result = PlatformId.ANDROID;
      }
      if (window.cordova.platformId === "ios") {
        result = PlatformId.IOS;
      }
    }
    if (frameworkId === FrameworkId.CAPACITOR) {
      if (window.Capacitor.platform === "web") {
        result = PlatformId.BROWSER;
      }
      if (window.Capacitor.platform === "android") {
        result = PlatformId.ANDROID;
      }
      if (window.Capacitor.platform === "ios") {
        result = PlatformId.IOS;
      }
    }
    this._platformId = result;
    return result;
  }
  /**
   * Return a singletone instance of CommandQueue for queueName namespace
   * @param queueName
   * @returns
   */
  getCommandQueue(queueName) {
    if (!(queueName in this._queues)) {
      this._queues[queueName] = new CommandQueue(queueName);
    }
    if (!this._queues[queueName].bridge) {
      this._queues[queueName].bridge = this.bridge;
    }
    return this._queues[queueName];
  }
}
if (!window.mkgeeklab) {
  Reflect.defineProperty(window, "mkgeeklab", {
    enumerable: false,
    value: {},
    writable: false
  });
}
if (!window.mkgeeklab.googlemaps) {
  Reflect.defineProperty(window.mkgeeklab, "googlemaps", {
    enumerable: false,
    value: GooglemapsCore.getInstance(),
    writable: false
  });
}
if (!window.getElementByPluginDomId) {
  Reflect.defineProperty(window, "getElementByPluginDomId", {
    enumerable: false,
    value: getElementByPluginDomId,
    writable: false
  });
}
if (window.customElements.get("mkg-mapview") === void 0) {
  window.customElements.define("mkg-mapview", MapView);
  window.customElements.define("mkg-marker", Marker);
  window.customElements.define("mkg-polyline", Polyline);
  window.customElements.define("mkg-infobase", InfoWindowBase);
  window.customElements.define("mkg-infowindow", InfoWindow);
  window.customElements.define("mkg-latlng", LatLng);
  window.customElements.define("mkg-path", Path);
  window.Marker = Marker;
}
class ExGoogleMapsOptions {
  constructor(jsOptions = {}) {
    this.options = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      restriction: null,
      maxZoom: null,
      minZoom: 0,
      clickableIcons: false,
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 0,
      zoomControl: true,
      disableDoubleClickZoom: false,
      scrollwheel: true,
      rotateControl: true,
      scaleControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      heading: 0,
      tilt: 0,
      mapId: null,
      isFractionalZoomEnabled: true
    };
    this.compassEnabled = false;
    this.mapToolbarEnabled = false;
    this.myLocationButtonEnabled = false;
    this.myLocationEnabled = false;
    this.indoorEnabled = false;
    this.buildingEnabled = false;
    this.styles = "";
    this.tiltGestureEnabled = false;
    this.scrollGesturesEnabledDuringRotateOrZoom = false;
    this.setValues(jsOptions);
  }
  setValues(jsOptions) {
    if (!jsOptions) {
      return;
    }
    if (jsOptions) {
      if (jsOptions.mapTypeId) {
        this.mapTypeId = jsOptions.mapTypeId;
      }
      if (jsOptions.jsMapId === void 0 || jsOptions.jsMapId === null || jsOptions.jsMapId === "") {
        this.mapId = void 0;
      } else if (typeof jsOptions.jsMapId === "string") {
        this.mapId = jsOptions.jsMapId;
      }
      if (jsOptions.controls) {
        const controls = jsOptions.controls;
        this.compassEnabled = controls.compass === true;
        this.options.zoomControl = controls.zoom === true;
        this.mapToolbarEnabled = controls.mapToolbar === true;
        this.myLocationButtonEnabled = controls.myLocationButton === true;
        this.myLocationEnabled = controls.myLocation === true;
        this.indoorEnabled = controls.indoor === true;
      }
      if (jsOptions.gestures) {
        const gestures = jsOptions.gestures;
        this.options.draggable = gestures.scroll === true || gestures.scroll === void 0;
        this.options.disableDoubleClickZoom = gestures.zoom === false;
        this.options.scrollwheel = !this.options.disableDoubleClickZoom;
        this.options.rotateControl = gestures.rotate === true || gestures.rotate === void 0;
        this.tiltGestureEnabled = gestures.tilt === true || gestures.tilt === void 0;
        this.scrollGesturesEnabledDuringRotateOrZoom = gestures.scrollGesturesEnabledDuringRotateOrZoom === true || gestures.scrollGesturesEnabledDuringRotateOrZoom === void 0;
      }
      if (jsOptions.preferences) {
        const preferences = jsOptions.preferences;
        if (preferences.padding) {
          const padding = preferences.padding;
          padding.left = padding.left || 0;
          padding.top = padding.top || 0;
          padding.right = padding.right || 0;
          padding.bottom = padding.bottom || 0;
        }
        if (preferences.restriction && isILatLngBoundsLiteral(preferences.restriction)) {
          const latLngBounds = preferences.restriction;
          this.options.restriction = {
            strictBounds: true,
            latLngBounds
          };
        }
        if (preferences.zoom) {
          const zoom = preferences.zoom;
          if (typeof zoom.minZoom === "number") {
            this.options.minZoom = zoom.minZoom;
          }
          if (typeof zoom.maxZoom === "number") {
            this.options.maxZoom = zoom.maxZoom;
          }
        }
        this.options.clickableIcons = preferences.clickableIcons === true;
        this.buildingEnabled = preferences.building === true;
      }
      if (jsOptions.camera) {
        const options = jsOptions.camera;
        if ("target" in options) {
          if (Array.isArray(options.target)) {
            if (options.target.length === 0) {
              if (typeof options.zoom === "number") {
                this.zoom = Math.max(options.zoom, 0);
              }
            } else if (options.target.length === 1) {
              this.center = options.target[0];
              if (typeof options.zoom === "number") {
                this.zoom = Math.max(options.zoom, 0);
              }
            } else if (options.target.length === 2) {
              const northEast = options.target[0];
              this.center = options.target[1];
              const projection = new Projection();
              const centerPx = projection.fromLatLngToPoint(this.center);
              const northEastPx = projection.fromLatLngToPoint(northEast);
              const r1 = Math.sqrt(Math.pow(centerPx.x - northEastPx.x, 2) + Math.pow(centerPx.y - northEastPx.y, 2));
              const zoom1 = Math.log(256 / r1) / Math.log(2);
              const r2 = Math.sqrt(Math.pow(centerPx.x - northEastPx.x - options.padding / (256 * Math.pow(2, zoom1)), 2) + Math.pow(centerPx.y - northEastPx.y - options.padding / (256 * Math.pow(2, zoom1)), 2));
              const zoom = Math.log(256 / r2) / Math.log(2);
              this.zoom = zoom;
            }
          }
        }
        if ("zoom" in options) {
          this.zoom = options.zoom || 0;
        }
        if ("tilt" in options) {
          this.tilt = options.tilt || 0;
        }
        if ("heading" in options) {
          this.heading = options.heading || 0;
        }
      }
      if (typeof jsOptions.styles === "string") {
        this.styles = jsOptions.styles || "";
      }
    }
  }
  // -------------------
  //  mapId property
  // -------------------
  set mapId(value) {
    this.options.mapId = value;
  }
  get mapId() {
    return this.options.mapId;
  }
  // -------------------
  //  mapTypeId property
  // -------------------
  set mapTypeId(value) {
    this.options.mapTypeId = this.convertToMapType(value);
  }
  get mapTypeId() {
    return this.options.mapTypeId;
  }
  // -------------------
  //  center property
  // -------------------
  set center(value) {
    this.options.center = value;
  }
  get center() {
    return this.options.center;
  }
  // -------------------
  //  tilt property
  // -------------------
  set tilt(value) {
    this.options.tilt = value || 0;
  }
  get tilt() {
    return this.options.tilt;
  }
  // -------------------
  //  heading property
  // -------------------
  set heading(value) {
    this.options.heading = value || 0;
  }
  get heading() {
    return this.options.heading;
  }
  // -------------------
  //  zoom property
  // -------------------
  set zoom(value) {
    this.options.zoom = Math.min(Math.max(value || 0, 0), 25);
  }
  get zoom() {
    return this.options.zoom;
  }
  //
  // -------------------
  //  minZoom property
  // -------------------
  set minZoom(value) {
    this.options.minZoom = typeof value === "number" ? Math.min(Math.max(value, 0), 25) : 0;
  }
  get minZoom() {
    return this.options.minZoom;
  }
  // -------------------
  //  maxZoom property
  // -------------------
  set maxZoom(value) {
    this.options.maxZoom = typeof value === "number" ? Math.min(Math.max(value, 0), 25) : null;
  }
  get maxZoom() {
    return this.options.maxZoom;
  }
  getMapOptions() {
    return JSON.parse(JSON.stringify(this.options));
  }
  /**
   * Returns one of the MapTypeId matched with given string
   * @param mapTypeName  One of the following: normal, hybrid, satellite, and terrain.
   * @return  One of the GoogleMaps MapTypeID
   */
  convertToMapType(mapTypeName) {
    if (!mapTypeName) {
      return google.maps.MapTypeId.ROADMAP;
    }
    mapTypeName = mapTypeName.toLowerCase();
    let mapTypeId = MapTypeId.NONE;
    mapTypeId = mapTypeName === "normal" || mapTypeName === "roadmap" ? MapTypeId.ROADMAP : mapTypeId;
    mapTypeId = mapTypeName === "hybrid" ? MapTypeId.HYBRID : mapTypeId;
    mapTypeId = mapTypeName === "satellite" ? MapTypeId.SATELLITE : mapTypeId;
    mapTypeId = mapTypeName === "terrain" ? MapTypeId.TERRAIN : mapTypeId;
    return mapTypeId;
  }
}
class PluginMarker extends MVCBaseObject {
  constructor(options) {
    super();
    this.id = "";
    this.marker = new google.maps.Marker();
    this._gsMarkerOptions(options).then((opts) => {
      if (!this.marker) {
        return;
      }
      this.marker.setOptions(opts);
      this.marker.addListener("click", this._onMarkerEvent.bind(this, "click"));
      this.marker.addListener("dragstart", this._onMarkerEvent.bind(this, "dragstart"));
      this.marker.addListener("drag", this._onMarkerEvent.bind(this, "drag"));
      this.marker.addListener("dragend", this._onMarkerEvent.bind(this, "dragend"));
    });
  }
  _gsMarkerOptions(options) {
    const result = {};
    return new Promise((resolve, reject) => {
      if (options.position) {
        result.position = options.position;
      }
      if (typeof options.clickable === "boolean") {
        result.clickable = options.clickable;
      }
      if (typeof options.draggable === "boolean") {
        result.draggable = options.draggable;
      }
      if (typeof options.visible === "boolean") {
        result.visible = options.visible;
      }
      if (typeof options.zIndex === "number") {
        result.zIndex = options.zIndex;
      }
      if (!options.icon) {
        resolve(result);
        return;
      }
      if (options.icon.type === "color") {
        result.icon = this._generateIcon(options.icon.value);
        resolve(result);
      } else if (options.icon.type === "img") {
        const img = document.createElement("img");
        const onLoad = () => {
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onError);
          let imgW = img.width;
          let imgH = img.height;
          if (imgW > 32 || imgH > 32) {
            const ratio = imgW > 32 ? 32 / imgW : 32 / imgH;
            imgW = imgW * ratio;
            imgH = imgH * ratio;
          }
          const iconSize = new google.maps.Size(imgW, imgH);
          result.icon = {
            url: options.icon.value,
            scaledSize: iconSize
          };
          resolve(result);
        };
        const onError = (errorEvt) => {
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onError);
          reject(new Error("error"));
        };
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError);
        img.src = options.icon.value;
      } else {
        resolve(result);
      }
    });
  }
  _generateIcon(rgba) {
    return {
      "path": "m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z",
      "fillColor": `rgb(${rgba[0]},${rgba[1]},${rgba[2]})`,
      "fillOpacity": rgba[3] / 255,
      "scale": 1.3,
      "strokeWeight": 1,
      "strokeColor": "rgb(255, 255, 255)",
      "strokeOpacity": 0.65,
      "anchor": new google.maps.Point(12, 27)
    };
  }
  setId(newId) {
    this.id = newId;
  }
  getId() {
    return this.id;
  }
  setMap(map) {
    if (this.marker) {
      this.marker.setMap(map);
    }
  }
  setEventCallback(eventCallback) {
    this.eventCallback = eventCallback;
  }
  setOptions(args) {
    if (!this.marker) {
      return Promise.reject(new Error("marker is invalid"));
    }
    const options = args[1];
    return this._gsMarkerOptions(options).then((opts) => {
      if (this.marker) {
        console.log("setOptions", opts);
        this.marker.setOptions(opts);
      }
    });
  }
  _onMarkerEvent(eventName) {
    if (!this.eventCallback || !this.marker) {
      return;
    }
    const position = this.marker.getPosition();
    if (position) {
      this.eventCallback(this.id, new CustomEvent(eventName, {
        detail: {
          latLng: position.toJSON()
        }
      }));
    }
  }
}
class PluginPolyline extends MVCBaseObject {
  constructor(options) {
    super();
    this.id = "";
    this.path = new google.maps.MVCArray();
    this.set("strokeStryle", void 0);
    this.set("strokeColor", "black");
    this.set("strokeOpacity", 1);
    this.set("strokeWidth", 1);
    this.polyline = new google.maps.Polyline({
      path: this.path
    });
    this._gsPolylineOptions(options).then((opts) => {
      if (!this.polyline) {
        return;
      }
      this.polyline.setOptions(opts);
      this.polyline.addListener("click", this._onPolylineEvent.bind(this, "click"));
    });
  }
  getIconForStrokeStyle(style2) {
    const strokeWidth = this.get("strokeWidth");
    const strokeColor = this.get("strokeColor");
    const strokeOpacity = this.get("strokeOpacity");
    const strokeStyleRepeat = this.get("strokeStyleRepeat") || "10px";
    switch (style2) {
      case "solid":
        return [];
      case "dashed":
        return [
          {
            icon: {
              path: "M 0,-1 0,1",
              fillOpacity: strokeOpacity,
              fillColor: strokeColor,
              strokeColor,
              strokeOpacity,
              strokeWeight: strokeWidth
            },
            repeat: strokeStyleRepeat
          }
        ];
      case "dotted":
        return [
          {
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillOpacity: strokeOpacity,
              fillColor: strokeColor,
              strokeColor,
              strokeOpacity,
              strokeWeight: strokeWidth
            },
            repeat: strokeStyleRepeat
          }
        ];
      default:
        return [];
    }
  }
  _gsPolylineOptions(options) {
    const result = {};
    return new Promise((resolve, reject) => {
      if (options.path) {
        this.path.clear();
        options.path.forEach((point) => {
          this.path.push(new google.maps.LatLng(point.lat, point.lng));
        });
      }
      if (typeof options.clickable === "boolean") {
        result.clickable = options.clickable;
      }
      if (typeof options.visible === "boolean") {
        result.visible = options.visible;
      }
      if (typeof options.geodesic === "boolean") {
        result.geodesic = options.geodesic;
      }
      if (typeof options.strokeWidth === "number") {
        result.strokeWeight = options.strokeWidth;
      }
      if (typeof options.zIndex === "number") {
        result.zIndex = options.zIndex;
      }
      if (Array.isArray(options.strokeColor)) {
        const rgba = options.strokeColor;
        this.set("strokeColor", `rgb(${rgba[0]},${rgba[1]},${rgba[2]})`, true);
        this.set("strokeOpacity", rgba[3] / 255, true);
      }
      if (Number.isInteger(options.strokeWidth) && options.strokeWidth >= 0) {
        this.set("strokeWidth", options.strokeWidth, true);
      }
      if (options.strokeStyle && options.strokeStyle !== "") {
        this.set("strokeStyle", options.strokeStyle, true);
      } else if (options.strokeStyle === "") {
        this.set("strokeStyle", void 0, true);
      }
      if (options.strokeStyleRepeat && options.strokeStyleRepeat !== "") {
        this.set("strokeStyleRepeat", options.strokeStyleRepeat, true);
      } else if (options.strokeStyle === "") {
        this.set("strokeStyleRepeat", void 0, true);
      }
      if (this.get("strokeStyle")) {
        result.icons = this.getIconForStrokeStyle(this.get("strokeStyle"));
        result.strokeOpacity = 0;
      } else {
        result.icons = [];
        result.strokeColor = this.get("strokeColor");
        result.strokeOpacity = this.get("strokeOpacity");
        result.strokeWeight = this.get("strokeWidth");
      }
      resolve(result);
    });
  }
  setId(newId) {
    this.id = newId;
  }
  getId() {
    return this.id;
  }
  setMap(map) {
    if (this.polyline) {
      this.polyline.setMap(map);
    }
  }
  setEventCallback(eventCallback) {
    this.eventCallback = eventCallback;
  }
  setOptions(args) {
    if (!this.polyline) {
      return Promise.reject(new Error("polyline is invalid"));
    }
    const options = args[1];
    return this._gsPolylineOptions(options).then((opts) => {
      if (this.polyline) {
        this.polyline.setOptions(opts);
      }
    });
  }
  setPath(args) {
    if (!this.polyline) {
      return Promise.reject(new Error("polyline is invalid"));
    }
    const options = args[1];
    switch (options.action) {
      case "insert_at":
        this.path.insertAt(options.index, new google.maps.LatLng(options.latLng.lat, options.latLng.lng));
        break;
      case "set_at":
        this.path.setAt(options.index, new google.maps.LatLng(options.latLng.lat, options.latLng.lng));
        break;
      case "remove_at":
        this.path.removeAt(options.index);
        break;
      case "remove_all":
        this.path.clear();
        break;
    }
    return Promise.resolve();
  }
  _onPolylineEvent(eventName) {
    if (!this.eventCallback || !this.polyline) {
      return;
    }
  }
}
class PluginMap extends MVCBaseObject {
  constructor(pluginMapOptions, mapOptions) {
    super();
    this.id = "";
    this.mapOptions = new ExGoogleMapsOptions({});
    this.container = document.createElement("div");
    this.shadow = this.container.attachShadow({ mode: "closed" });
    this.shadowWrapper = document.createElement("div");
    this.isMapCameraMoving = false;
    this.overlayView = new google.maps.OverlayView();
    this.mapCanvasProjection = null;
    this.overlays = {};
    this._bind_onBoundsChanged = () => this._onBoundsChanged();
    this._bind_onCameraIdle = () => this._onCameraIdle();
    this._bind_trackCamera = () => this._trackCamera();
    this.prevFarLeft = { lat: 0, lng: 0 };
    this.stopCounter = 0;
    this.cornerPoints = [
      new google.maps.Point(-128, -128),
      new google.maps.Point(128, -128),
      new google.maps.Point(128, 128),
      new google.maps.Point(-128, 128)
    ];
    this.container.style.position = "absolute";
    this.container.style.left = "0px";
    this.container.style.top = "0px";
    this.container.style.right = "0px";
    this.container.style.bottom = "0px";
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.shadowWrapper.style.position = "absolute";
    this.shadowWrapper.style.left = "0px";
    this.shadowWrapper.style.top = "0px";
    this.shadowWrapper.style.right = "0px";
    this.shadowWrapper.style.bottom = "0px";
    this.shadowWrapper.style.width = "100%";
    this.shadowWrapper.style.height = "100%";
    this.shadowWrapper.style.padding = "0px";
    this.shadowWrapper.style.margin = "0px";
    this.shadowWrapper.style.border = "none";
    this.shadowWrapper.style.userSelect = "none";
    this.shadow.appendChild(this.shadowWrapper);
    this.pluginOptions = pluginMapOptions;
    this.id = pluginMapOptions.id;
    this.map = new google.maps.Map(this.shadowWrapper, mapOptions);
    this.overlayView.onAdd = () => {
      google.maps.event.trigger(this.map, "ready");
    };
    this.overlayView.onRemove = () => {
    };
    this.overlayView.draw = () => {
    };
    this.overlayView.setMap(this.map);
    let preventClick = false;
    this.map.addListener("click", (event) => {
      if (!preventClick) {
        this._onMouseEvent("click", event);
      }
      preventClick = false;
    });
    let mousedown_time = 0;
    this.map.addListener("mousedown", (event) => {
      mousedown_time = Date.now();
      preventClick = false;
    });
    this.map.addListener("mouseup", (event) => {
      this.map.set("originalHeading", void 0);
      this.map.set("originalAngle", void 0);
      if (Date.now() - mousedown_time > 500) {
        this._onMouseEvent("longclick", event);
        preventClick = true;
      }
    });
    this.addEventListenerOnce("remove", () => {
      google.maps.event.clearInstanceListeners(this.map);
    });
    this.map.addListener("drag", () => {
      mousedown_time = Date.now();
      preventClick = true;
    });
    this.map.addListener("resize", this._bind_onBoundsChanged);
    this.map.addListener("center_changed", this._bind_onBoundsChanged);
    this.map.addListener("heading_changed", this._bind_onBoundsChanged);
    this.map.addListener("tilt_changed", this._bind_onBoundsChanged);
    this.map.addListener("zoom_changed", this._bind_onBoundsChanged);
    this.map.addListener("drag", this._bind_onBoundsChanged);
    this.map.addListener("idle", this._bind_onCameraIdle);
    this.map.addListener("drag", this._onMapEvent.bind(this, "dragging"));
    this.map.addListener("dragend", this._onMapEvent.bind(this, "drag:end"));
    this.map.addListener("dragstart", this._onMapEvent.bind(this, "drag:start"));
    this.map.addListener("tilesloaded", this._onMapEvent.bind(this, "tiles:loaded"));
    if (window.screen && window.screen.orientation) {
      window.screen.orientation.addEventListener("change", this._onOrientationChanged.bind(this));
    } else {
      window.addEventListener("orientationchange", this._onOrientationChanged.bind(this));
    }
  }
  _onOrientationChanged() {
    this._onCameraEvent("camera:move");
  }
  // The map camera starts moving or it's still moving.
  _onBoundsChanged() {
    if (this.isMapCameraMoving) {
      return;
    }
    this.stopCounter = 0;
    this.isMapCameraMoving = true;
    this._onCameraEvent("camera:move:start");
    window.requestAnimationFrame(this._bind_trackCamera);
  }
  _trackCamera() {
    if (!this.isMapCameraMoving) {
      return;
    }
    this._onCameraEvent("camera:move");
    window.requestAnimationFrame(this._bind_trackCamera);
  }
  // The map camera has been stopped
  _onCameraIdle() {
    this.isMapCameraMoving = false;
    this._onCameraEvent("camera:move:end");
  }
  execute(args) {
    const execInfo = args[0];
    const overlayId = execInfo.id;
    if (execInfo.subMethodName) {
      const subMethodName = execInfo.subMethodName;
      console.log(`${overlayId}.${subMethodName}`);
      if (overlayId in this.overlays) {
        const instance = this.overlays[overlayId];
        return instance[subMethodName].call(instance, args);
      } else {
        return Promise.reject(`Can not find overlay: ${overlayId}`);
      }
    } else {
      return Promise.reject("PluginMap.execute() needs subMethodName property in args[0]");
    }
  }
  getMap() {
    return this.map;
  }
  getView() {
    return this.container;
  }
  setId(newId) {
    this.id = newId;
  }
  getId() {
    return this.id;
  }
  setOptions(args) {
    if (!this.map) {
      return Promise.reject(new Error("map is invalid"));
    }
    const options = args[0];
    this.mapOptions.setValues(options);
    const mapOptions = this.mapOptions.getMapOptions();
    this.map.setOptions(mapOptions);
    this._onCameraEvent("camera:move");
    return Promise.resolve();
  }
  /**
   * Creates a new marker instance
   */
  createMarker(args) {
    if (!this.map) {
      return Promise.reject(new Error("map is invalid"));
    }
    const execInfo = args[0];
    const markerId = execInfo.id;
    const markerOpts = args[1];
    const marker = new PluginMarker(markerOpts);
    marker.setId(markerId);
    marker.setEventCallback(this._onOverlayEvent.bind(this));
    this.overlays[markerId] = marker;
    return Promise.resolve();
  }
  /**
   * Creates a new marker instance
   */
  createPolyline(args) {
    if (!this.map) {
      return Promise.reject(new Error("map is invalid"));
    }
    const execInfo = args[0];
    const polylineId = execInfo.id;
    const polylineOpts = args[1];
    const polyline = new PluginPolyline(polylineOpts);
    polyline.setId(polylineId);
    polyline.setEventCallback(this._onOverlayEvent.bind(this));
    this.overlays[polylineId] = polyline;
    return Promise.resolve();
  }
  /**
   * Attaches an overlay from this map
   */
  attachOverlayToMap(args) {
    if (!this.map) {
      return Promise.reject(new Error("map is invalid"));
    }
    const options = args[0];
    const overlayId = options.id;
    if (overlayId in this.overlays) {
      const overlay = this.overlays[overlayId];
      overlay.setMap(this.map);
      return Promise.resolve();
    } else {
      return Promise.reject(new Error(`can not find overlay2: ${overlayId}`));
    }
  }
  /**
   * Detaches an overlay from this map
   */
  detachOverlayFromMap(args) {
    if (!this.map) {
      return Promise.reject(new Error("map is invalid"));
    }
    const overlayIDs = args;
    overlayIDs.forEach((overlayId) => {
      if (overlayId in this.overlays) {
        const overlay = this.overlays[overlayId];
        overlay.setMap(null);
      }
    });
    return Promise.resolve();
  }
  //
  // public addRectangle(
  //	 args: any[]
  // ): Promise<void> {
  //	 if (!this.map) {
  //		 return Promise.reject(new Error('map is invalid'));
  //	 }
  //
  //	 const options: {
  //		 bounds: google.maps.LatLngBoundsLiteral
  //	 } = args[0];
  //
  //	 const rectangle: google.maps.Rectangle = new google.maps.Rectangle(options);
  //	 rectangle.setMap(this.map);
  //
  //	 return Promise.resolve();
  // }
  /**
   * Sets camera position to the specified position
   */
  moveCamera(args) {
    if (!this.map) {
      return Promise.reject(new Error("map is invalid"));
    }
    const mapDiv = this.map.getDiv();
    if (!mapDiv) {
      return Promise.reject(new Error("Can not manipulate the map when mapDiv is unset"));
    }
    if (!this.overlayView) {
      return Promise.reject(new Error("map is not ready"));
    }
    const mapProjection = this.overlayView.getProjection();
    if (!mapProjection) {
      return Promise.reject(new Error("map is not ready"));
    }
    const options = args[0];
    const currentZoom = this.map.getZoom();
    const cameraParams = {
      fromCenter: this.map.getCenter().toJSON(),
      fromZoom: currentZoom,
      fromTilt: this.map.getTilt(),
      fromHeading: this.map.getHeading(),
      toCenter: this.map.getCenter().toJSON(),
      toZoom: currentZoom,
      toTilt: this.map.getTilt(),
      toHeading: this.map.getHeading(),
      duration: 0,
      changeCenter: false,
      changeZoom: false,
      changeTilt: false,
      changeHeading: false
    };
    if (typeof options.duration === "number") {
      cameraParams.duration = Math.max(options.duration, 0);
    }
    if (Array.isArray(options.target)) {
      if (options.target.length === 0) {
        if (typeof options.zoom === "number") {
          cameraParams.toZoom = Math.max(options.zoom, 0);
        }
      } else if (options.target.length === 1) {
        cameraParams.toCenter = options.target[0];
        if (typeof options.zoom === "number") {
          cameraParams.toZoom = Math.max(options.zoom, 0);
        }
      } else {
        const bounds = new google.maps.LatLngBounds();
        options.target.forEach((pos) => {
          bounds.extend(pos);
        });
        cameraParams.toCenter = bounds.getCenter();
        const projection = this.map.getProjection();
        this.shadowWrapper.offsetWidth;
        this.shadowWrapper.offsetHeight;
        const centerPx = projection.fromLatLngToPoint(cameraParams.toCenter);
        const northEastPx = projection.fromLatLngToPoint(bounds.getNorthEast());
        const r1 = Math.sqrt(Math.pow(centerPx.x - northEastPx.x, 2) + Math.pow(centerPx.y - northEastPx.y, 2));
        const zoom = Math.log(256 / r1) / Math.log(2);
        cameraParams.toZoom = zoom;
      }
    }
    if (typeof options.heading === "number") {
      cameraParams.toHeading = Math.max(options.heading, 0);
    }
    if (typeof options.tilt === "number") {
      cameraParams.toTilt = Math.max(options.tilt, 0);
    }
    cameraParams.changeCenter = !equalPositions(cameraParams.fromCenter, cameraParams.toCenter);
    cameraParams.changeZoom = Math.ceil(cameraParams.fromZoom) !== Math.ceil(cameraParams.toZoom);
    cameraParams.changeTilt = cameraParams.fromTilt !== cameraParams.toTilt;
    cameraParams.changeHeading = cameraParams.fromHeading !== cameraParams.toHeading;
    if (!cameraParams.changeCenter && !cameraParams.changeZoom && !cameraParams.changeTilt && !cameraParams.changeHeading) {
      cameraParams.duration = 0;
    }
    return new Promise((resolve) => {
      let start = -1;
      let previousTimeStamp = 0;
      const easyInOut = () => {
        const timestamp = Date.now();
        if (start < 0) {
          start = timestamp;
          previousTimeStamp = start;
        }
        if (!this.map) {
          resolve();
          return;
        }
        const elapsed = timestamp - start;
        if (previousTimeStamp !== timestamp) {
          const fraction = this.easeInOutQuart(elapsed / cameraParams.duration);
          const cameraOptions = {};
          if (cameraParams.changeCenter) {
            cameraOptions.center = google.maps.geometry.spherical.interpolate(cameraParams.fromCenter, cameraParams.toCenter, fraction).toJSON();
          }
          if (cameraParams.changeZoom) {
            cameraOptions.zoom = cameraParams.fromZoom + (cameraParams.toZoom - cameraParams.fromZoom) * fraction;
          }
          if (cameraParams.changeHeading) {
            cameraOptions.heading = cameraParams.fromHeading + (cameraParams.toHeading - cameraParams.fromHeading) * fraction;
          }
          if (cameraParams.changeTilt) {
            cameraOptions.tilt = cameraParams.fromTilt + (cameraParams.toTilt - cameraParams.fromTilt) * fraction;
          }
          this.map.moveCamera(cameraOptions);
        }
        if (elapsed < options.duration) {
          previousTimeStamp = timestamp;
          window.requestAnimationFrame(easyInOut);
        } else {
          this.map.moveCamera({
            center: cameraParams.toCenter,
            zoom: cameraParams.toZoom,
            heading: cameraParams.toHeading,
            tilt: cameraParams.toTilt
          });
          resolve();
        }
      };
      window.requestAnimationFrame(easyInOut);
    });
  }
  easeInOutQuart(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  /**
   * Invoked when this instance is attacned to <body>
   */
  onAttached() {
    return new Promise((resolve, reject) => {
      if (!this.map) {
        return reject(new Error("map is invalid"));
      }
      this.map.setOptions(this.mapOptions.getMapOptions());
      google.maps.event.trigger(this.map, "resize");
      const listeners = [];
      const listener = () => {
        resolve(listeners);
      };
      if (this.overlayView.getProjection() !== void 0) {
        listeners.push(this.map.addListener("projection_changed", listener));
        listeners.push(this.map.addListener("bounds_changed", listener));
      } else {
        listeners.push(this.map.addListener("ready", listener));
      }
    }).then((listeners) => {
      listeners.forEach((listener) => listener.remove());
      this._onCameraEvent("camera:move2");
    });
  }
  /**
   * Invoked when this instance is detached from <body>
   */
  onReleased() {
    if (!this.map) {
      return Promise.reject(new Error("map is invalid"));
    }
    this.map.setOptions({
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 0,
      clickableIcons: true,
      tilt: 0,
      heading: 0,
      restriction: void 0,
      minZoom: void 0,
      maxZoom: void 0
      // Can't change the jsMapId after map has been constructed.
      // jsMapId: undefined
    });
    return Promise.resolve();
  }
  /**
   * Releases an overlay
   */
  releaseOverlay(args = []) {
    const overlayIDs = args;
    overlayIDs.forEach((overlayId) => {
      this.overlays[overlayId] = void 0;
      delete this.overlays[overlayId];
    });
    return Promise.resolve();
  }
  /**
   * Fires a camera event on map
   * @private
   * @params {eventName} event name
   */
  _onCameraEvent(eventName) {
    if (!eventName || !this.map || !this.overlayView) {
      return;
    }
    const projection = this.map.getProjection();
    if (!projection) {
      return;
    }
    const mapProjection = this.overlayView.getProjection();
    if (!mapProjection) {
      return;
    }
    const visibleRegion = mapProjection.getVisibleRegion();
    if (!visibleRegion || !visibleRegion.latLngBounds || !visibleRegion.farLeft || !visibleRegion.farRight || !visibleRegion.nearLeft || !visibleRegion.nearRight) {
      return;
    }
    if (this.prevFarLeft.lat === visibleRegion.farLeft.lat() && this.prevFarLeft.lng === visibleRegion.farLeft.lng()) {
      this.stopCounter += 1;
      if (this.stopCounter === 10) {
        this.isMapCameraMoving = false;
      }
    }
    this.prevFarLeft.lat = visibleRegion.farLeft.lat();
    this.prevFarLeft.lng = visibleRegion.farLeft.lng();
    const cameraStatus = {
      center: this.map.getCenter().toJSON(),
      zoom: this.map.getZoom() || 0,
      tilt: this.map.getTilt() || 0,
      heading: this.map.getHeading() || 0,
      northEast: visibleRegion.latLngBounds.getNorthEast().toJSON(),
      southWest: visibleRegion.latLngBounds.getSouthWest().toJSON(),
      farLeft: visibleRegion.farLeft.toJSON(),
      farRight: visibleRegion.farRight.toJSON(),
      nearLeft: visibleRegion.nearLeft.toJSON(),
      nearRight: visibleRegion.nearRight.toJSON(),
      mat: [],
      inv: []
    };
    this.mapOptions.tilt = cameraStatus.tilt;
    this.mapOptions.center = cameraStatus.center;
    this.mapOptions.zoom = cameraStatus.zoom;
    this.mapOptions.heading = cameraStatus.heading;
    const mapPoints = this.cornerPoints.map((point) => {
      const latLng = mapProjection.fromDivPixelToLatLng(point, true);
      const tmp = projection.fromLatLngToPoint(latLng);
      return {
        x: tmp.x,
        y: tmp.y
      };
    });
    cameraStatus.mat = this.calcHomographyMatrix(mapPoints[0], mapPoints[1], mapPoints[2], mapPoints[3]);
    cameraStatus.inv = this.calcInverseMatrix(cameraStatus.mat);
    this.prevCameraStatus = cameraStatus;
    this.mapOptions.setValues(cameraStatus);
    const mapView = getElementByPluginDomId(this.getId());
    if (!mapView) {
      return;
    }
    mapView.dispatchEvent(new CustomEvent(eventName, {
      detail: cameraStatus
    }));
  }
  // Create a homography matrix from given 4 coordinate points.
  // https://mu-777.hatenablog.com/entry/2020/02/02/185012
  calcHomographyMatrix(farLeftPx, farRightPx, nearRightPx, nearLeftPx) {
    const x00 = farLeftPx.x;
    const y00 = farLeftPx.y;
    const x01 = nearLeftPx.x;
    const y01 = nearLeftPx.y;
    const x10 = farRightPx.x;
    const y10 = farRightPx.y;
    const x11 = nearRightPx.x;
    const y11 = nearRightPx.y;
    const a = x10 - x11;
    const b = x01 - x11;
    const c = x00 - x01 - x10 + x11;
    const d = y10 - y11;
    const e = y01 - y11;
    const f = y00 - y01 - y10 + y11;
    const h13 = x00;
    const h23 = y00;
    const h32 = (c * d - a * f) / (b * d - a * e);
    const h31 = (c * e - b * f) / (a * e - b * d);
    const h11 = x10 - x00 + h31 * x10;
    const h12 = x01 - x00 + h32 * x01;
    const h21 = y10 - y00 + h31 * y10;
    const h22 = y01 - y00 + h32 * y01;
    return [h11, h12, h13, h21, h22, h23, h31, h32, 1];
  }
  calcInverseMatrix(mat) {
    const i11 = mat[0];
    const i12 = mat[1];
    const i13 = mat[2];
    const i21 = mat[3];
    const i22 = mat[4];
    const i23 = mat[5];
    const i31 = mat[6];
    const i32 = mat[7];
    const i33 = 1;
    const a = 1 / (+(i11 * i22 * i33) + i12 * i23 * i31 + i13 * i21 * i32 - i13 * i22 * i31 - i12 * i21 * i33 - i11 * i23 * i32);
    const o11 = (i22 * i33 - i23 * i32) / a;
    const o12 = (-i12 * i33 + i13 * i32) / a;
    const o13 = (i12 * i23 - i13 * i22) / a;
    const o21 = (-i21 * i33 + i23 * i31) / a;
    const o22 = (i11 * i33 - i13 * i31) / a;
    const o23 = (-i11 * i23 + i13 * i21) / a;
    const o31 = (i21 * i32 - i22 * i31) / a;
    const o32 = (-i11 * i32 + i12 * i31) / a;
    const o33 = (i11 * i22 - i12 * i21) / a;
    return [o11, o12, o13, o21, o22, o23, o31, o32, o33];
  }
  /**
   * Fires a normal event on map
   * @private
   * @params {eventName} event name
   * @params {event} actual event
   */
  _onMapEvent(eventName) {
    if (!eventName) {
      return;
    }
    const mapView = getElementByPluginDomId(this.getId());
    if (!mapView) {
      return;
    }
    mapView.dispatchEvent(new Event(eventName));
  }
  /**
   * Fires a mouse event on map
   * @private
   * @params {eventName} event name
   * @params {event} actual event
   */
  _onMouseEvent(eventName, event) {
    if (!eventName || !event) {
      return;
    }
    event.stop();
    const placeId = event.placeId || "";
    const latLng = event.latLng ? event.latLng.toJSON() : null;
    const mapView = getElementByPluginDomId(this.getId());
    if (!mapView) {
      return;
    }
    mapView.dispatchEvent(new CustomEvent(eventName, {
      detail: {
        placeId,
        latLng
      }
    }));
  }
  /**
   * Fires a normal event from overlays
   * @private
   * @params {eventName} event name
   * @params {event} actual event
   */
  _onOverlayEvent(overlayId, event) {
    if (!overlayId || !event) {
      return;
    }
    const overlayElement = getElementByPluginDomId(overlayId);
    if (!overlayElement) {
      return;
    }
    overlayElement.dispatchEvent(event);
  }
}
const GoogleMapsWeb = new class {
  constructor() {
    this.viewInstances = {};
    this.initOptions = {};
  }
  async onInit(platformId, options) {
    this.loadGoogleMapsJS(options.jsApiKey);
  }
  onWindowReady() {
    console.log("window.ready");
  }
  execute(queueName, pluginName, methodName, argsStr) {
    const args = JSON.parse(atob(argsStr));
    if (pluginName === "GoogleMaps") {
      return this[methodName].call(this, args);
    } else if (pluginName in this.viewInstances) {
      const instance = this.viewInstances[pluginName];
      if (!(methodName in instance)) {
        throw new Error(`Can not find ${pluginName}.${methodName}`);
      }
      return instance[methodName].call(instance, args);
    } else {
      throw new Error(`Can not find ${pluginName} plugin`);
    }
  }
  /**
   * Creates a new instance of PluginMap class
   */
  createMapView(args = []) {
    const metaInfo = args[0];
    const viewId = metaInfo.id;
    const mapOptions = args[1];
    const pluginView = new PluginMap(metaInfo, {
      mapId: mapOptions.jsMapId
    });
    this.viewInstances[viewId] = pluginView;
    return pluginView.setOptions([mapOptions]);
  }
  /**
   * Attaches the view instance to the speicified <g-mapview> element
   */
  attachToWindow(args = []) {
    const options = args[0];
    const viewId = options.id;
    if (!(viewId in this.viewInstances)) {
      return Promise.reject(`Can not find the view for ${viewId}`);
    }
    const view = this.viewInstances[viewId];
    const viewTag = getElementByPluginDomId(viewId);
    if (viewTag && viewTag.shadowRoot) {
      viewTag.shadowRoot.insertBefore(view.getView(), viewTag.shadowRoot.firstElementChild);
      return view.onAttached();
    } else {
      return Promise.reject(`Can not target element : ${viewId}`);
    }
  }
  detachFromWindow(args = []) {
    const options = args[0];
    const viewId = options.id;
    options.autoRelease;
    if (viewId in this.viewInstances) {
      const view = this.viewInstances[viewId];
      const viewDiv = view.getView();
      if (viewDiv.parentElement) {
        viewDiv.parentElement.removeChild(viewDiv);
      }
    } else {
      return Promise.reject(new Error(`can not find view: ${viewId}`));
    }
    return Promise.resolve();
  }
  /**
   * Loads Google Maps JavaScript v3 API
   */
  async loadGoogleMapsJS(jsApiKey) {
    if ("google" in window && "maps" in window.google) {
      return;
    }
    return new Promise((resolve, reject) => {
      const secureStripeScript = document.createElement("script");
      if (jsApiKey && jsApiKey.length > 35) {
        secureStripeScript.setAttribute("src", `https://maps.googleapis.com/maps/api/js?callback=initMap&libraries=geometry&v=beta&key=${jsApiKey}`);
      } else {
        secureStripeScript.setAttribute("src", "https://maps.googleapis.com/maps/api/js?callback=initMap&libraries=geometry&v=beta");
      }
      window.initMap = () => {
        window.initMap = void 0;
        resolve();
      };
      secureStripeScript.onerror = (event) => {
        reject(new Error("Could not load Google Maps JavaScript API v3"));
      };
      document.getElementsByTagName("head")[0].appendChild(secureStripeScript);
    });
  }
  releaseView(args = []) {
    const options = args[0];
    const viewId = options.id;
    if (!(viewId in this.viewInstances)) {
      return Promise.resolve();
    }
    const view = this.viewInstances[viewId];
    delete this.viewInstances[viewId];
    const viewDiv = view.getView();
    if (viewDiv.parentElement) {
      viewDiv.parentElement.removeChild(viewDiv);
    }
    return view.onReleased();
  }
  removeFromDomTree(args = []) {
    console.log("removeFromDomTree", args);
    return Promise.resolve();
  }
  updateDomTree(args = []) {
    console.log("updateDomTree", args);
    return Promise.resolve();
  }
  onScrollWebview(args = []) {
    console.log("onScrollWebview", args);
    return Promise.resolve();
  }
}();
const init = async () => {
  window.mkgeeklab.googlemaps.setUp({
    bridge: {
      browser: GoogleMapsWeb
    }
  });
  const markers = Array.from(document.getElementsByTagName("mkg-marker"));
  const latLngList = Array.from(document.getElementsByTagName("mkg-latlng"));
  markers.forEach((marker, idx) => {
    marker.addEventListener("position_changed", (evt) => {
      latLngList[idx].setPosition(evt.detail.value);
    });
  });
};
init();
