// ../../node_modules/.pnpm/htm@3.1.1/node_modules/htm/dist/htm.module.js
var n = function(t3, s, r, e) {
  var u;
  s[0] = 0;
  for (var h3 = 1; h3 < s.length; h3++) {
    var p = s[h3++], a = s[h3] ? (s[0] |= p ? 1 : 2, r[s[h3++]]) : s[++h3];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h3]] = a : 6 === p ? e[1][s[++h3]] += a + "" : p ? (u = t3.apply(a, n(t3, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h3 - 2] = 0, s[h3] = u)) : e.push(a);
  }
  return e;
};
var t = /* @__PURE__ */ new Map();
function htm_module_default(s) {
  var r = t.get(this);
  return r || (r = /* @__PURE__ */ new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function(n3) {
    for (var t3, s2, r2 = 1, e = "", u = "", h3 = [0], p = function(n4) {
      1 === r2 && (n4 || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n4, e) : 3 === r2 && (n4 || e) ? (h3.push(3, n4, e), r2 = 2) : 2 === r2 && "..." === e && n4 ? h3.push(4, n4, 0) : 2 === r2 && e && !n4 ? h3.push(5, 0, true, e) : r2 >= 5 && ((e || !n4 && 5 === r2) && (h3.push(r2, 0, e, s2), r2 = 6), n4 && (h3.push(r2, n4, 0, s2), r2 = 6)), e = "";
    }, a = 0; a < n3.length; a++) {
      a && (1 === r2 && p(), p(a));
      for (var l = 0; l < n3[a].length; l++)
        t3 = n3[a][l], 1 === r2 ? "<" === t3 ? (p(), h3 = [h3], r2 = 3) : e += t3 : 4 === r2 ? "--" === e && ">" === t3 ? (r2 = 1, e = "") : e = t3 + e[0] : u ? t3 === u ? u = "" : e += t3 : '"' === t3 || "'" === t3 ? u = t3 : ">" === t3 ? (p(), r2 = 1) : r2 && ("=" === t3 ? (r2 = 5, s2 = e, e = "") : "/" === t3 && (r2 < 5 || ">" === n3[a][l + 1]) ? (p(), 3 === r2 && (h3 = h3[0]), r2 = h3, (h3 = h3[0]).push(2, 0, r2), r2 = 0) : " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3 ? (p(), r2 = 2) : e += t3), 3 === r2 && "!--" === e && (r2 = 4, h3 = h3[0]);
    }
    return p(), h3;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}

// ../iares/dist/template/index.js
var css = (tags, ...values) => {
  return tags.map((tag, index) => {
    return `${tag}${values[index] || ""}`;
  }).join("");
};
function h(type, props, ...children) {
  return { type, props, children };
}
var html = htm_module_default.bind(h);

// ../iares/dist/pubsub/index.js
var pubsubFactory = () => {
  const listeners = {};
  const _handlerExists = (eventName, handler) => {
    return !listeners.hasOwnProperty(eventName) || listeners[eventName].some((subscribedHandler) => {
      return subscribedHandler.toString() === handler.toString() || subscribedHandler.name === handler.name || subscribedHandler === handler;
    });
  };
  const on = (eventName, handler) => {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!handler || typeof handler !== "function")
      throw new Error("Handler is not a function and must be.");
    if (!listeners.hasOwnProperty(eventName)) {
      listeners[eventName] = [handler];
      return { eventName, handler };
    }
    if (_handlerExists(eventName, handler)) {
      const handlerPosition = listeners[eventName].indexOf(handler);
      if (handlerPosition)
        listeners[eventName].splice(handlerPosition, 1, handler);
      return { eventName, handler };
    }
    listeners[eventName].push(handler);
    return { eventName, handler };
  };
  const off = ({ eventName, handler }) => {
    if (!listeners.hasOwnProperty(eventName))
      return;
    const eventListeners = listeners[eventName].filter((listener) => {
      if (listener !== handler)
        return listener;
    });
    listeners[eventName] = eventListeners;
  };
  const emit = (eventName, payload) => {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!listeners.hasOwnProperty(eventName))
      return;
    listeners[eventName].forEach((handler) => {
      handler(payload);
    });
  };
  return {
    on,
    off,
    emit
  };
};

// ../iares/dist/render/index.js
var eventDrive = pubsubFactory();

// ../fam-code-ui/dist/main.js
var n2 = function(t22, s, r, e) {
  var u;
  s[0] = 0;
  for (var h22 = 1; h22 < s.length; h22++) {
    var p = s[h22++], a = s[h22] ? (s[0] |= p ? 1 : 2, r[s[h22++]]) : s[++h22];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h22]] = a : 6 === p ? e[1][s[++h22]] += a + "" : p ? (u = t22.apply(a, n2(t22, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h22 - 2] = 0, s[h22] = u)) : e.push(a);
  }
  return e;
};
var t2 = /* @__PURE__ */ new Map();
function htm_module_default2(s) {
  var r = t2.get(this);
  return r || (r = /* @__PURE__ */ new Map(), t2.set(this, r)), (r = n2(this, r.get(s) || (r.set(s, r = function(n22) {
    for (var t22, s2, r2 = 1, e = "", u = "", h22 = [0], p = function(n3) {
      1 === r2 && (n3 || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h22.push(0, n3, e) : 3 === r2 && (n3 || e) ? (h22.push(3, n3, e), r2 = 2) : 2 === r2 && "..." === e && n3 ? h22.push(4, n3, 0) : 2 === r2 && e && !n3 ? h22.push(5, 0, true, e) : r2 >= 5 && ((e || !n3 && 5 === r2) && (h22.push(r2, 0, e, s2), r2 = 6), n3 && (h22.push(r2, n3, 0, s2), r2 = 6)), e = "";
    }, a = 0; a < n22.length; a++) {
      a && (1 === r2 && p(), p(a));
      for (var l = 0; l < n22[a].length; l++)
        t22 = n22[a][l], 1 === r2 ? "<" === t22 ? (p(), h22 = [h22], r2 = 3) : e += t22 : 4 === r2 ? "--" === e && ">" === t22 ? (r2 = 1, e = "") : e = t22 + e[0] : u ? t22 === u ? u = "" : e += t22 : '"' === t22 || "'" === t22 ? u = t22 : ">" === t22 ? (p(), r2 = 1) : r2 && ("=" === t22 ? (r2 = 5, s2 = e, e = "") : "/" === t22 && (r2 < 5 || ">" === n22[a][l + 1]) ? (p(), 3 === r2 && (h22 = h22[0]), r2 = h22, (h22 = h22[0]).push(2, 0, r2), r2 = 0) : " " === t22 || "	" === t22 || "\n" === t22 || "\r" === t22 ? (p(), r2 = 2) : e += t22), 3 === r2 && "!--" === e && (r2 = 4, h22 = h22[0]);
    }
    return p(), h22;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}
var css2 = (tags, ...values) => {
  return tags.map((tag, index) => {
    return `${tag}${values[index] || ""}`;
  }).join("");
};
function h2(type, props, ...children) {
  return { type, props, children };
}
var html2 = htm_module_default2.bind(h2);
var pubsubFactory2 = () => {
  const listeners = {};
  const _handlerExists = (eventName, handler) => {
    return !listeners.hasOwnProperty(eventName) || listeners[eventName].some((subscribedHandler) => {
      return subscribedHandler.toString() === handler.toString() || subscribedHandler.name === handler.name || subscribedHandler === handler;
    });
  };
  const on = (eventName, handler) => {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!handler || typeof handler !== "function")
      throw new Error("Handler is not a function and must be.");
    if (!listeners.hasOwnProperty(eventName)) {
      listeners[eventName] = [handler];
      return { eventName, handler };
    }
    if (_handlerExists(eventName, handler)) {
      const handlerPosition = listeners[eventName].indexOf(handler);
      if (handlerPosition)
        listeners[eventName].splice(handlerPosition, 1, handler);
      return { eventName, handler };
    }
    listeners[eventName].push(handler);
    return { eventName, handler };
  };
  const off = ({ eventName, handler }) => {
    if (!listeners.hasOwnProperty(eventName))
      return;
    const eventListeners = listeners[eventName].filter((listener) => {
      if (listener !== handler)
        return listener;
    });
    listeners[eventName] = eventListeners;
  };
  const emit = (eventName, payload) => {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!listeners.hasOwnProperty(eventName))
      return;
    listeners[eventName].forEach((handler) => {
      handler(payload);
    });
  };
  return {
    on,
    off,
    emit
  };
};
var eventDrive2 = pubsubFactory2();
var createActions = ({ props }) => {
  const setFallbackImage = (event) => {
    const image = event.target;
    image.src = props.fallbackSrc;
    event.onerror = null;
  };
  return {
    setFallbackImage
  };
};
var template = ({ props, actions }) => html2`
  <div class="wrap-ctx">
    <img src=${props == null ? void 0 : props.src}  alt=${props == null ? void 0 : props.alt} onerror=${actions.setFallbackImage} class="size-${(props == null ? void 0 : props.size) || 1}-ctx"/>
  </div>
`;
var FamAvatar = ({ props }) => {
  const actions = createActions({ props });
  return {
    actions,
    template,
    styles,
    props
  };
};
var styles = () => css2`
  fam-avatar { width: 100%; } 

  fam-avatar,
  .wrap-ctx > img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-2);
  }

  .wrap-ctx img {
    border-radius: 100%;
  }

  .size-1-ctx {
    width: var(--fam-avatar-size-1);
    height: var(--fam-avatar-size-1);
  }

  .size-2-ctx {
    width: var(--fam-avatar-size-2);
    height: var(--fam-avatar-size-2);
  }

  .size-3-ctx {
    width: var(--fam-avatar-size-3);
    height: var(--fam-avatar-size-3);
  }

  .size-4-ctx {
    width: var(--fam-avatar-size-4);
    height: var(--fam-avatar-size-4);
  }

  .size-5-ctx {
    width: var(--fam-avatar-size-5);
    height: var(--fam-avatar-size-5);
  }

  .size-6-ctx {
    width: var(--fam-avatar-size-6);
    height: var(--fam-avatar-size-6);
  }


  






`;
var template11 = () => html2`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`;
var FamTitle = () => {
  return {
    template: template11,
    styles: styles11
  };
};
var styles11 = () => css2`
  fam-title { width: 100%; }

  fam-title,
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3
  {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-1);
  }

  
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3 {
    width:100%;
    padding: 1em;
  }  
  
  .wrap-ctx h1 {
    font-size: var(--title-primary);
    font-weight: 200
  }
  
  .wrap-ctx h2 {
    font-size: var(--title-secondary);
  }
  
  .wrap-ctx h3 {
    font-size: var(--title-size-4);
    font-weight: 600;
  }






`;

// src/components/AppHello/index.ts
var template2 = () => html`
  <div class="wrap-ctx">
  <${FamAvatar} 
    src="/assets/images/pokemon-sample-1.png" 
    fallbackSrc="/assets/images/logo.png" alt="uma imagem qualqer"
    size="6"
  />
    <${FamTitle} >
      <slot target="content">
        <h1> Crazy Hello World!</h1>
      </slot>
    </>
  </div>
`;
var AppHello = () => {
  return {
    template: template2,
    styles: styles2
  };
};
var styles2 = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export {
  AppHello
};
//# sourceMappingURL=index.js.map
