// ../../node_modules/.pnpm/htm@3.1.1/node_modules/htm/dist/htm.module.js
var n = function(t2, s, r2, e) {
  var u;
  s[0] = 0;
  for (var h3 = 1; h3 < s.length; h3++) {
    var p = s[h3++], a = s[h3] ? (s[0] |= p ? 1 : 2, r2[s[h3++]]) : s[++h3];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h3]] = a : 6 === p ? e[1][s[++h3]] += a + "" : p ? (u = t2.apply(a, n(t2, a, r2, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h3 - 2] = 0, s[h3] = u)) : e.push(a);
  }
  return e;
};
var t = /* @__PURE__ */ new Map();
function htm_module_default(s) {
  var r2 = t.get(this);
  return r2 || (r2 = /* @__PURE__ */ new Map(), t.set(this, r2)), (r2 = n(this, r2.get(s) || (r2.set(s, r2 = function(n2) {
    for (var t2, s2, r3 = 1, e = "", u = "", h3 = [0], p = function(n3) {
      1 === r3 && (n3 || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n3, e) : 3 === r3 && (n3 || e) ? (h3.push(3, n3, e), r3 = 2) : 2 === r3 && "..." === e && n3 ? h3.push(4, n3, 0) : 2 === r3 && e && !n3 ? h3.push(5, 0, true, e) : r3 >= 5 && ((e || !n3 && 5 === r3) && (h3.push(r3, 0, e, s2), r3 = 6), n3 && (h3.push(r3, n3, 0, s2), r3 = 6)), e = "";
    }, a = 0; a < n2.length; a++) {
      a && (1 === r3 && p(), p(a));
      for (var l = 0; l < n2[a].length; l++)
        t2 = n2[a][l], 1 === r3 ? "<" === t2 ? (p(), h3 = [h3], r3 = 3) : e += t2 : 4 === r3 ? "--" === e && ">" === t2 ? (r3 = 1, e = "") : e = t2 + e[0] : u ? t2 === u ? u = "" : e += t2 : '"' === t2 || "'" === t2 ? u = t2 : ">" === t2 ? (p(), r3 = 1) : r3 && ("=" === t2 ? (r3 = 5, s2 = e, e = "") : "/" === t2 && (r3 < 5 || ">" === n2[a][l + 1]) ? (p(), 3 === r3 && (h3 = h3[0]), r3 = h3, (h3 = h3[0]).push(2, 0, r3), r3 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p(), r3 = 2) : e += t2), 3 === r3 && "!--" === e && (r3 = 4, h3 = h3[0]);
    }
    return p(), h3;
  }(s)), r2), arguments, [])).length > 1 ? r2 : r2[0];
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
var T = Object.defineProperty;
var r = (t2, a) => T(t2, "name", { value: a, configurable: true });
var h2 = r(function(t2, a, s, o) {
  var l;
  a[0] = 0;
  for (var e = 1; e < a.length; e++) {
    var n2 = a[e++], c = a[e] ? (a[0] |= n2 ? 1 : 2, s[a[e++]]) : a[++e];
    n2 === 3 ? o[0] = c : n2 === 4 ? o[1] = Object.assign(o[1] || {}, c) : n2 === 5 ? (o[1] = o[1] || {})[a[++e]] = c : n2 === 6 ? o[1][a[++e]] += c + "" : n2 ? (l = t2.apply(c, h2(t2, c, s, ["", null])), o.push(l), c[0] ? a[0] |= 2 : (a[e - 2] = 0, a[e] = l)) : o.push(c);
  }
  return o;
}, "n");
var y = /* @__PURE__ */ new Map();
function v(t2) {
  var a = y.get(this);
  return a || (a = /* @__PURE__ */ new Map(), y.set(this, a)), (a = h2(this, a.get(t2) || (a.set(t2, a = function(s) {
    for (var o, l, e = 1, n2 = "", c = "", m = [0], f = function(u) {
      e === 1 && (u || (n2 = n2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? m.push(0, u, n2) : e === 3 && (u || n2) ? (m.push(3, u, n2), e = 2) : e === 2 && n2 === "..." && u ? m.push(4, u, 0) : e === 2 && n2 && !u ? m.push(5, 0, true, n2) : e >= 5 && ((n2 || !u && e === 5) && (m.push(e, 0, n2, l), e = 6), u && (m.push(e, u, 0, l), e = 6)), n2 = "";
    }, p = 0; p < s.length; p++) {
      p && (e === 1 && f(), f(p));
      for (var x = 0; x < s[p].length; x++)
        o = s[p][x], e === 1 ? o === "<" ? (f(), m = [m], e = 3) : n2 += o : e === 4 ? n2 === "--" && o === ">" ? (e = 1, n2 = "") : n2 = o + n2[0] : c ? o === c ? c = "" : n2 += o : o === '"' || o === "'" ? c = o : o === ">" ? (f(), e = 1) : e && (o === "=" ? (e = 5, l = n2, n2 = "") : o === "/" && (e < 5 || s[p][x + 1] === ">") ? (f(), e === 3 && (m = m[0]), e = m, (m = m[0]).push(2, 0, e), e = 0) : o === " " || o === "	" || o === `
` || o === "\r" ? (f(), e = 2) : n2 += o), e === 3 && n2 === "!--" && (e = 4, m = m[0]);
    }
    return f(), m;
  }(t2)), a), arguments, [])).length > 1 ? a : a[0];
}
r(v, "default");
var d = r((t2, ...a) => t2.map((s, o) => `${s}${a[o] || ""}`).join(""), "css");
function F(t2, a, ...s) {
  return { type: t2, props: a, children: s };
}
r(F, "h");
var i = v.bind(F);
var b = r(() => {
  let t2 = {}, a = r((e, n2) => !t2.hasOwnProperty(e) || t2[e].some((c) => c.toString() === n2.toString() || c.name === n2.name || c === n2), "_handlerExists");
  return { on: r((e, n2) => {
    if (!e)
      throw new Error("EventName is not defined and must be.");
    if (!n2 || typeof n2 != "function")
      throw new Error("Handler is not a function and must be.");
    if (!t2.hasOwnProperty(e))
      return t2[e] = [n2], { eventName: e, handler: n2 };
    if (a(e, n2)) {
      let c = t2[e].indexOf(n2);
      return c && t2[e].splice(c, 1, n2), { eventName: e, handler: n2 };
    }
    return t2[e].push(n2), { eventName: e, handler: n2 };
  }, "on"), off: r(({ eventName: e, handler: n2 }) => {
    if (!t2.hasOwnProperty(e))
      return;
    let c = t2[e].filter((m) => {
      if (m !== n2)
        return m;
    });
    t2[e] = c;
  }, "off"), emit: r((e, n2) => {
    if (!e)
      throw new Error("EventName is not defined and must be.");
    t2.hasOwnProperty(e) && t2[e].forEach((c) => {
      c(n2);
    });
  }, "emit") };
}, "pubsubFactory");
var $ = b();
var w = r(({ props: t2 }) => ({ setFallbackImage: r((s) => {
  let o = s.target;
  o.src = t2.fallbackSrc, s.onerror = null;
}, "setFallbackImage") }), "createActions");
var I = r(({ props: t2, actions: a }) => i`
  <div class="wrap-ctx">
    <img src=${t2 == null ? void 0 : t2.src}  alt=${t2 == null ? void 0 : t2.alt} onerror=${a.setFallbackImage} class="size-${(t2 == null ? void 0 : t2.size) || 1}-ctx"/>
  </div>
`, "template");
var P = r(({ props: t2 }) => ({ actions: w({ props: t2 }), template: I, styles: _, props: t2 }), "FamAvatar");
var _ = r(() => d`
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


  






`, "styles");
var j = r(() => i`
  <slot id="content"></slot>
`, "template");
var H = r(() => ({ template: j, styles: M }), "FamButton");
var M = r(() => d`
  fam-button {
    display:flex;
    width:var(--fam-button-width);
    height:var(--fam-button-height);
    text-transform: var(--fam-button-text-transform);
    cursor: pointer
  }

  fam-button > * {
    display:flex;
   width:var(--fam-button-width);
    height:var(--fam-button-height);
    justify-content: var(--fam-button-justify-content);
    align-items: var(--fam-button-align-items);
    font-weight: var(--fam-button-font-weight)
  }

  fam-button *[type="primary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-color);
    background: var(--fam-buttom-primary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-border-color); 
  }

  fam-button *[type="primary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-hole-color);
    background:var(--fam-buttom-primary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-hole-border-color);  
  }

  fam-button *[type="primary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-dark);
    background:var(--blue-5);
    border:1px solid var(--blue-5);  
  }

  fam-button *[type="primary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-soft);
    background:none;
    border:1px solid var(--primary-soft);  
  }

  fam-button *[type="tertiary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background: var(--secondary-dark);
    border:2px solid var(--secondary-dark-strong)   
  }

  fam-button *[type="tertiary-hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-dark-strong);
    background:none;
    border:2px solid var(--secondary-dark-strong)   
  }

  fam-button *[type="tertiary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-soft);
    background:var(--secondary-soft-light);
    border:1px solid var(--secondary-soft)   
  }

  fam-button *[type="tertiary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-soft-light);
    background:none;
    border:1px solid var(--secondary-soft-light);   
  }
 
  fam-button *[type="secondary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background:var(--tertiary-dark);
    border:2px solid var(--tertiary-dark-strong)   
  }
  
  fam-button *[type="secondary-hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--tertiary-dark-strong);
    background:none;
    border:2px solid var(--tertiary-dark-strong)   
  }

  fam-button *[type="secondary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(  --tertiary-soft);
    background:var(--tertiary-soft-light);
    border:1px solid var(--tertiary-soft)   
  }

  fam-button *[type="secondary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(  --tertiary-soft);
    background:none;
    border:1px solid var(--tertiary-soft-light)   
  }
`, "styles");
var R = r(() => i`
  <div class="wrap-ctx">
   <slot id="content"></slot>
  </div>
`, "template");
var L = r(() => ({ template: R, styles: O }), "FamCard");
var O = r(() => d`
  fam-card,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
  .wrap-ctx {
    padding: 1em;
    border-width:var(--fam-card-border-width);
    border-style:var(--fam-card-border-style);
    border-color:var(--fam-card-border-color);
    border-radius:var(--fam-card-border-radius);
    background:var(--fam-card-background);
  }
`, "styles");
var q = r(({ props: t2 }) => i`
  <div class="wrap-ctx">
    <label>
    ${t2.isChecked ? i`<input type="checkbox" onChange=${t2.handler} checked="${t2.isChecked}"/>` : i`<input type="checkbox" onChange=${t2.handler} />`}
      <span>${t2.label}</span>
    </label>
  </div>
`, "template");
var D = r(() => ({ template: q, styles: V }), "FamCheckBox");
var V = r(() => d`
  fam-check-box,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .wrap-ctx > label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .wrap-ctx input {
    display: flex;
  }
  .wrap-ctx span {
    display: flex;
    width: 100%;
    color: white;
    margin-left:0.5em;
  }
`, "styles");
var B = r(() => i`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`, "template");
var J = r(() => ({ template: B, styles: U }), "FamContainer");
var U = r(() => d`
  fam-container,
  .wrap-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    
    max-width: var(--fam-container-max-width);
    margin-left: var(--fam-container-margin-left);
    margin-right: var(--fam-container-margin-right);

    border-radius: var(--fam-container-border-radius);
    border-width: var(--fam-container-border-width);
    border-color: var(--fam-container-border-color);
    border-style: var(--fam-container-border-style);

    background: var(--fam-container-background)
  }
`, "styles");
var g = r(() => {
  let t2 = r((o) => {
    let l = ["dashed", "solid", "dotted", "rounded"], e = a(o);
    return l.includes(o) ? null : e;
  }, "validate"), a = r((o) => ({ isValid: false, message: `Invalid type: ${o}, expect one of types: [dashed, solid, dotted, rounded] `, typeError: "DividerError" }), "getError");
  return { validate: t2, throwError: r((o) => {
    let l = new Error(o.message);
    throw l.name = o.typeError, l;
  }, "throwError"), getError: a };
}, "createActions");
var z = r((t2) => ({ afterRender: r((s) => {
  var e;
  let o = (e = s.querySelector("div")) == null ? void 0 : e.getAttribute("type"), l = t2.validate(o || "");
  l && t2.throwError(l);
}, "afterRender") }), "createHooks");
var Y = r(({ props: t2 }) => i`
  <div type=${t2.type} stroke="size-${t2.stroke}"></div>
`, "template");
var K = r(() => {
  let t2 = g(), a = z(t2);
  return { template: Y, styles: N, actions: t2, hooks: a };
}, "FamDivider");
var N = r(() => d`
  fam-divider,
  fam-divider > div {
    display: flex;
    width: 100%;
  }

  fam-divider > [type=dashed]{
    border: 1px dashed #fff
  }

  fam-divider > [type=dotted]{
    border: 1px dotted #fff
  }

  fam-divider > [type=solid]{
    border: 1px solid #fff
  }

  fam-divider > [type=rounded]{
    border: 1px solid #fff;
    border-radius:5px
  }

  fam-divider > [stroke=size-2]{
    border-width:2px
  }
  fam-divider > [stroke=size-3]{
    border-width:3px
  }
  fam-divider > [stroke=size-4]{
    border-width:4px
  }
  fam-divider > [stroke=size-5]{
    border-width:5px
  }
  fam-divider > [stroke=size-6]{
    border-width:6px
  }
  fam-divider > [stroke=size-7]{
    border-width:7px
  }
  fam-divider > [stroke=size-8]{
    border-width:8px
  }
  fam-divider > [stroke=size-9]{
    border-width:9px
  }
  fam-divider > [stroke=size-10]{
    border-width:10px
  }
  fam-divider > [type=size-11]{
    border-width:11px
  }
  fam-divider > [type=size-12]{
    border-width:12px
  }
 `, "styles");
var X = ["size-1", "size-2", "size-3", "size-4", "size-5", "size-6", "size-7", "size-8", "size-9", "size-10", "size-11", "size-12"];
var E = r((t2) => ({ afterRender: r((s) => {
  var m, f;
  let o = (m = s.querySelector("span")) == null ? void 0 : m.textContent, l = ((f = s.querySelector("div")) == null ? void 0 : f.classList.toString()) || "", e = X.find((p) => new RegExp(p, "ig").test(l)), n2 = t2.validate(o || ""), c = t2.validate(e || "");
  n2 && c && t2.throwError(n2 || c);
}, "afterRender") }), "createHooks");
var k = r(() => {
  let t2 = r((o) => {
    let l = a();
    return o ? null : l;
  }, "validate"), a = r(() => ({ isValid: false, message: "The name or size property is not defined and must be.", typeError: "IconError" }), "getError");
  return { validate: t2, throwError: r((o) => {
    let l = new Error(o.message);
    throw l.name = o.typeError, l;
  }, "throwError"), getError: a };
}, "validatorFactory");
var Z = r(({ props: t2 }) => i`
  <div class="wrap-ctx size-${t2.size}">
     <span class="material-symbols-rounded">
        ${t2.name}
     </span>
  </div>
`, "template");
var G = r(() => {
  let t2 = k(), a = E(t2);
  return { template: Z, styles: Q, hooks: a, actions: t2 };
}, "FamIcon");
var Q = r(() => d`
  fam-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap-ctx span {
    color: var(--icon-color);
  }

  .wrap-ctx.size-1 > span {
    font-size:1em
  }
  .wrap-ctx.size-2  > span {
    font-size:2em
  }
  .wrap-ctx.size-3 > span  {
    font-size:3em
  }
  .wrap-ctx.size-4 > span  {
    font-size:4em
  }
  .wrap-ctx.size-5 > span  {
    font-size:5em
  }
  .wrap-ctx.size-6 > span  {
    font-size:6em
  }
  .wrap-ctx.size-7 > span  {
    font-size:7em
  }
  .wrap-ctx.size-8  > span {
    font-size:8em
  }
  .wrap-ctx.size-9  > span {
    font-size:9em
  }
  .wrap-ctx.size-10  > span {
    font-size:10em
  }
  .wrap-ctx.size-11  > span {
    font-size:11em
  }
  .wrap-ctx.size-12  > span {
    font-size:12em
  }
`, "styles");
var A = r(({ props: t2 }) => ({ setFallbackImage: r((s) => {
  let o = s.target;
  o.src = t2.fallbackSrc, s.onerror = null;
}, "setFallbackImage") }), "createActions");
var W = r(({ props: t2, actions: a }) => i`
  <div class="wrap-ctx">
    <img src=${t2 == null ? void 0 : t2.src}  alt=${t2 == null ? void 0 : t2.alt} onerror=${a.setFallbackImage}/>
  </div>
`, "template");
var tt = r(({ props: t2 }) => ({ actions: A({ props: t2 }), template: W, styles: rt, props: t2 }), "FamImage");
var rt = r(() => d`
  fam-image { width: 100%; }

  fam-image,
  .wrap-ctx > img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-2);
  }

  .wrap-ctx img {
    width:100%;
    border-radius: 8px;
    background: url(var(--fam-image-fallback))
  }

  






`, "styles");
var et = r(() => i`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`, "template");
var ot = r(() => ({ template: et, styles: at }), "FamTagline");
var at = r(() => d`
  fam-tagline,
  .wrap-ctx,
  .wrap-ctx p
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .wrap-ctx p {
    font-size: var(--fam-tagline-font-size);
    font-weight: var(--fam-tagline-font-weight);
    color: var(--fam-tagline-color);
    line-height: var(--fam-tagline-line-height);
  }

  






`, "styles");
var S = r((t2, a = 500) => {
  let s;
  return (o) => {
    clearTimeout(s), s = setTimeout(() => {
      t2(o);
    }, a);
  };
}, "debounce");
var nt = r(({ props: t2 }) => t2.isValid ? i`` : i`<p>${t2.error}</p>`, "FamInputError");
var it = r(({ props: t2 }) => i`
  <div class="wrap-ctx">
    <label>
      
      <input 
        type=${(t2 == null ? void 0 : t2.type) || "text"}
        value=${(t2 == null ? void 0 : t2.value) || ""} 
        onKeyup=${S(t2 == null ? void 0 : t2.handler, t2 == null ? void 0 : t2.debounceTime)}
        valid=${t2 == null ? void 0 : t2.isValid}
      />

      <span>${t2 == null ? void 0 : t2.label}</span>
    </label>
    <${nt} isValid=${t2.isValid} error=${t2.error} />
  </div>
`, "template");
var st = r(() => ({ template: it, styles: ct }), "FamTextInput");
var ct = r(() => d`

  fam-text-input,
  .wrap-ctx {
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
    color: var(--black-2);
    width: 100%;
  }

  .wrap-ctx label {
    position: relative
  }

  .wrap-ctx label,
  .wrap-ctx fam-input-error {
    display: flex;
    flex-wrap: wrap;
  }

  .wrap-ctx input,
  .wrap-ctx label,
  .wrap-ctx span,
  .wrap-ctx fam-input-error {
    width: 100%
  }

  .wrap-ctx span {
    margin-bottom: 0.5em;
    position: absolute;
    left: 0;
    top: -20px;
  }

  .wrap-ctx input {
    height: 50px;
    padding: 0 1em;

    font-size: var(--text-size-4);
    color: var(--text-input-text-color);

    border-width: var(--text-input-border-width);
    border-radius: var(--text-input-border-radius);
    border-style: var(--text-input-border-style);
    border-color: var(--text-input-border-color);

    outline-color: none;
    outline-width: none;
    outline-style: none;

    background: var(--text-input-background);
  }

  .wrap-ctx input:focus {
    outline-color: var(--text-input-outline-color);
    outline-width: var(--text-input-outline-width);
    outline-style: var(--text-input-border-style);

  }

  .wrap-ctx span {
    font-size: var(--text-size-3);
    font-weight: 600;
    color: var(--text-input-label-color);
    margin: 0 0 8px 8px;
  }

.wrap-ctx input[valid=true] {
  background: var(--text-input-valid-background);
  color: var(--text-input-valid-text-color);
  border-color: var(--text-input-valid-border-color);
}

.wrap-ctx input[valid=true] + span {
  color: var(--text-input-valid-text-color);
}

.wrap-ctx input[valid=false] {
  background: var(--text-input-invalid-background);
  color: var(--text-input-invalid-text-color);
  border-color: var(--text-input-invalid-border-color);
}  

.wrap-ctx input[valid=false] + span {
  color: var(--text-input-invalid-text-color);
}

 .wrap-ctx fam-input-error {
  color: var(--text-input-invalid-text-color);
 }

 .wrap-ctx fam-input-error p:not(:empty) {
    padding: 0.5em 0;
    line-height: 1.2em;
    font-size: var(--text-size-3)
 }

`, "styles");
var dt = r(() => i`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`, "template");
var lt = r(() => ({ template: dt, styles: mt }), "FamTitle");
var mt = r(() => d`
  fam-title { width: 100%; }

  fam-title,
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3
  {
    display: flex;
    justify-content: var(--title-justify-content);
    align-items: var(--title-align-items);
    color: var(--title-color);
  }

  
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3 {
    width:100%;
    padding: 1em;
    text-align: var(--title-text-align);
  }  
  
  .wrap-ctx h1 {
    font-size: var(--title-font-size-primary);
    font-weight: var(--title-font-weight-primary);
  }
  
  .wrap-ctx h2 {
    font-size: var(--title-font-size-secondary);
    font-weight: var(--title-font-weight-secondary);
  }
  
  .wrap-ctx h3 {
    font-size: var(--title-font-size-tertiary);
    font-weight: var(--title-font-weight-tertiary);
  }






`, "styles");
var ft = r(() => i`
  <div class="wrap-ctx">
     <div class="tooltip-ctx">
        <i class="material-symbols-rounded">info</i>
        <div class="content-ctx">
          <slot id="content"></slot>
        </div>
     </div>
  </div>
`, "template");
var ut = r(() => ({ template: ft, styles: pt }), "FamTooltip");
var pt = r(() => d`
  app-tooltip {
    display: flex;
    width: 100%;
  }

  .tooltip-ctx {
    display: flex;
    width:100%;
    cursor: pointer;
    position: relative;
    color:var(--white-1)
  }

  .content-ctx{
    display: flex;
    justify-content: center;
    width:max-content;
    max-width:180px;
    padding: 5px 10px;
    border-radius:var(--border-primary);
    color: var(--black-1);
    background: var(--white-1);
    font-size:var(--text-size-2);
    opacity:0;
    position: absolute;
    top: 2.6em;
    left:50%;
    transform:translateX(-50%);
    z-index: 999;
  }

  .content-ctx:after {
    display: flex;
    content:'';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -8px;
    width: 0; height: 0;
    border-bottom: 8px solid var(--white-1);
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  .tooltip-ctx:hover > .content-ctx {
    opacity: 0.9;
  }

  
`, "styles");

// src/components/AppContent/index.ts
var template = () => html`
  <div class="wrap-ctx">
      <slot id="content"></slot>
  </div>
`;
var AppContent = () => {
  return {
    template,
    styles
  };
};
var styles = () => css`
  app-content,
  .wrap-ctx {
    display: flex;
    flex-wrap: wrap;
    width:100%;
    max-width:50em;
    margin: 0  calc((100% - 50em) / 2)
  }

  @media all and (max-width: 680px) {
    app-content,
    .wrap-ctx {
      margin: 0 auto
    }
  }
`;

// src/components/AppHome/index.ts
var template2 = ({ actions }) => html`
  <div class="wrap-ctx">
    <div class="wrap-bg-ctx"></div>
    <${J}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx">
          <${AppContent}>
            <slot target="content">
              <${lt} >
                <slot target="content" ctx="app-home">
                  <h1 class="header-ctx">PRECISA DE UM DESENVOLVEDOR EM QUEM POSSA REALMENTE CONFIAR?</h1>
                </slot>
              </>
            </slot>
          </>
          
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-banner-ctx hide-video" onClick=${actions.showVideo}>
                <${tt} src="https://user-images.githubusercontent.com/94268593/235769500-6b12101b-0b2e-4f5a-9f9c-12275e5c7baa.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="A ajuda que você procura pode estar aqui"/>
                <${tt} src="https://user-images.githubusercontent.com/94268593/235769495-af997379-8e70-4627-8d70-ef54ba60a0f6.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="A ajuda que você procura pode estar aqui"/>
                <div class="wrap-video-ctx">
                  <iframe  src="https://www.youtube-nocookie.com/embed/Q5bjmh9TzlU?rel=0&amp;controls=0&amp&amp;showinfo=0&amp;modestbranding=1" frameborder="0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>                
                </div>
              </div>
            </slot>
          </>

          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${H}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${G}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>
      </slot>
    </>  

    <${J}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-02">
          <${AppContent}>
            <slot target="content">
              <${lt} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">TECNOLOGIAS MODERNAS E CONFIÁVEIS</h1>
                  
                    <${ot} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Trabalho com as tecnologias mais modernas e confiáveis, que prezam por segurança e produtividade</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx">
                  <li>
                    <a href="#/angular" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769558-5019eb94-17b8-4c20-b074-b094c6974658.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Node JS"/>
                      <span>Node JS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769555-19d579b2-03e2-42d7-845b-7633d9074732.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Next"/>
                      <span>Next JS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769609-db83daf3-1cdd-4e92-922b-a52d1225582b.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Tailwind"/>
                      <span>Tailwind CSS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769593-42f4abcc-87eb-42b1-8020-e66ae7a930b6.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="React"/>
                      <span>React</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769518-bf383d33-048e-4558-802a-2e494951e659.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Angular"/>
                      <span>Angular</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769611-54917257-0d97-4221-80b7-8e836cb564c0.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Vue"/>
                      <span>Vue</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769528-7d9d4a65-22a4-4dae-b5d2-91ca3fa98065.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Capacitor Framework"/>
                      <span>Capacitor</span>
                    </a>
                  </li>
                </ul>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${H}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${G}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>


    <${J}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-03">
        <div class="wrap-bg-02-ctx"></div>
          <${AppContent}>
            <slot target="content">
              <${lt} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">Redução de até 50% no custo do desenvolvimento de software</h1>
                  
                    <${ot} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Nos últimos venho desenvolvendo e mantendo IARES, uma biblioteca open source destinada a construir sistemas com eficiencia</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx section-amount">
                  <li>
                    <a href="https://user-images.githubusercontent.com/94268593/235769561-52d3057c-9d85-4c25-8083-5a3f36128633.png" target="_blank">
                      <${tt} src="/assets/images/logo-npm.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="IARES no NPM"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://user-images.githubusercontent.com/94268593/235769538-a14ea12b-4615-42c0-8a43-806f46e501b5.png" target="_blank">
                      <${tt} src="/assets/images/logo-iares.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="IARES no Github"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://user-images.githubusercontent.com/94268593/235769542-ef462a30-e10d-4d09-aebd-36efad24ea0b.png" target="_blank">
                      <${tt} src="/assets/images/logo-iares-ui.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="IARES UI biblioteca de componentes"/>
                    </a>
                  </li>
                </ul>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${H}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${G}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>
    
    

    <${J}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-02">
          <${AppContent}>
            <slot target="content">
              <${lt} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">CLIENTES E PARCEIROS</h1>
                  
                    <${ot} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Conheça alguns dos clientes e parceiros que confiaram e fizeram parte dos meus últimos 10 anos</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx section-amount">
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769550-3878f174-db65-4542-99ae-b663891591d4.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Ifood"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769601-59679148-d4c6-4b04-b647-d57706d363bd.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Samsung"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769536-496dddbb-d823-4dc1-8c7e-414c00c0b46a.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Hotmart"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769529-453a14b4-64a1-4a1f-9c1c-874b860e67f4.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Crefisa"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769588-abb53366-77d8-4e9b-8b1b-624ce5fb7169.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Proz"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769577-78c67353-1c08-4098-a710-66189ba67095.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Pede Pronto"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769526-6ac9da55-2d7d-46db-a042-c870ab32af1c.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Banco BS2"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769522-886ac28e-dfd1-45e1-bc92-296b81fb0015.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Beetech"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769595-66f2ee01-2597-46bd-8054-e393c065dba5.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Riachuelo"/>
                  </li>
                  <li>
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769584-681005f4-4a1d-4c26-9678-b961387e2d87.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Porto Seguro"/>
                  </li>
                </ul>
            </slot>
          </>         
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${H}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${G}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>
    
    
    <${J}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-04">
          <${AppContent}>
            <slot target="content">
              <${lt} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">MÍDIAS E REDES SOCIAIS</h1>
                  
                    <${ot} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Conheça minhas mídias e redes sociais e me acompanhe no youtube para ficar por dentro dos desafios do momento</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx wrap-social">
                  <li>
                    <a href="https://github.com/to-codando/" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769532-f745ba99-d53d-4cff-b3eb-886040c8815d.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Github"/>
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rodrigo-lima-rocha-59006089/" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769553-a46a3a8b-9003-499b-937a-b24b77686639.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Linkedin"/>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCdJEUSVsNHHXb5ut3nRizng" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769614-3390f8cc-7f02-469c-b627-c5810cd2d6c5.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Youtube"/>
                      <span>Youtube</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tabnews.com.br/tocodando" target="_blank">
                      <${tt} src="https://user-images.githubusercontent.com/94268593/235769606-ff0a3a2b-06d0-46af-9bf1-ce79df825a61.png" fallbackSrc="https://user-images.githubusercontent.com/94268593/235769510-b205a491-7e75-4aac-a1fd-06ae855bae76.png" alt="Blog"/>
                      <span>Blog</span>
                    </a>
                  </li>
                  
                </ul>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${H}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${G}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>    
  </div>
`;
var AppHome = () => {
  const actions = {
    showVideo: ({ target }) => {
      const video = document.querySelector(".hide-video");
      if (!video)
        return;
      console.log(video);
      video.classList.remove("hide-video");
      video.classList.add("show-video");
    }
  };
  return {
    template: template2,
    styles: styles2,
    actions
  };
};
var styles2 = () => css`
  app-home,
  .wrap-ctx {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%
  }

  .wrap-ctx {
      height:100vh;
  }
  

  .wrap-bg-ctx {
    display: flex;
    min-height: 100vh;
    width: 100%;

    background: url('/assets/images/site-bg-blue.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: blur(3px);    

    position:fixed;
    top:30px;
    left:0;
    right:0;
    bottom:0;

    z-index: -1;
  }

  .header-ctx {
    line-height: 1.2em
  }

  .container-ctx {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width:100%;
    min-height: 100vh
  }

  .wrap-banner-ctx {
    cursor: pointer;
    margin: 0 auto;
    position: relative;
    max-height: 450px;
    overflow: hidden
  }

  .wrap-banner-ctx fam-image + fam-image {
    display:none
  }

  .wrap-video-ctx {
    position: absolute;
    top:50%;
    left:50%;

    transform: translate(-50%, -50%);

    height:100%;
    width:100%;
    overflow: hidden;

    border-radius: 20px;
  }

  .wrap-video-ctx iframe {
    width:100%;
    height: calc(100% + 120px);
    margin-top: -60px
  }

  .wrap-button-ctx {
    margin:0 auto;
  }

  .button-text-ctx {
    margin-left: 5px;
  }

  .wrap-button-content-ctx span {
    margin-top:5px
  }

  /*Segunda seção*/

  .container-ctx.container-02 {
    background: #04061b;
  }

  .tagline-ctx {
    text-align: center;
    font-size: 1.2em;
    max-width:30em;
    margin:0 auto;
  }

  .wrap-logo-ctx {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .wrap-logo-ctx li {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 160px;
    text-align:center;
    color: var(--fam-tagline-color);
    font-weight: var(--fam-tagline-font-weight)
  }

   .wrap-logo-ctx li span {
     display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1em
   }

/** SECTION 03 */

  .container-ctx.container-03 {
    position: relative;
    background: #061124
  }   

  .wrap-logo-ctx.section-amount {
    width: 100%;
  }

  .wrap-logo-ctx.section-amount li {
    width: 100%;
    max-width: 200px
  }

  /* SECTION 04 */

  .container-ctx.container-04 {
    position: relative;
    background: #011d4c
  }  
  
  .wrap-logo-ctx.wrap-social {
    width: 100%
  }

  .wrap-logo-ctx.wrap-social li {
    max-width: 170px
  }

@media all and (max-width: 680px) {
    .wrap-ctx {
      align-items: center
    }
    .header-ctx  {
      font-size: 2.2em!important;
      margin-top:0;
    }
    .wrap-banner-ctx fam-image {
      display:none
    }


    .wrap-banner-ctx.hide-video .wrap-video-ctx{
      display:none
    }
    .wrap-banner-ctx.show-video .wrap-video-ctx{
      max-height: 212px;
      width: calc(100% - 2em)
    }

     .wrap-banner-ctx.show-video fam-image {
      opacity:0
     }

    .wrap-banner-ctx fam-image + fam-image {
      display:flex
    }

    .wrap-button-ctx {
      margin:0 auto !important;
    }

    .wrap-logo-ctx.section-amount li {
      width: 50%;
      max-width: 160px
    }    
  }

  @media all and (max-width: 580px) {


    .header-ctx  {
      font-size: 1.8em!important;
    }

    .wrap-logo-ctx li {
      max-width: 120px;
    }    

  }

`;
export {
  AppHome
};
//# sourceMappingURL=index.js.map
