/** chunk id: 87001, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ee
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(596829), n(65821);
var r, i = n(284009),
    a = n.n(i),
    o = n(735438),
    s = n.n(o),
    l = n(507240),
    c = n(311907),
    u = n(73153),
    d = n(626584),
    f = n(777334),
    p = n(41984),
    _ = n(111162),
    h = n(723702),
    m = n(837921),
    g = n(475815),
    E = n(265383),
    y = n(652215);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            b(e, t, n[t])
        })
    }
    return e
}

function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function A(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function I(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = S(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function S(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let T = new d.A("PopoutWindowStore"),
    C = {},
    N = {},
    w = {},
    R = {},
    P = {},
    D = new Set,
    L = "app-mount",
    x = () => $.emitChange(),
    M = s().debounce(x, 150),
    j = !1;

function k(e, t) {
    let n = t.document,
        r = n.head;
    for (let e of (a()(null != r, "Body for popout window is null!"), document.querySelectorAll("style"))) {
        let t = n.importNode(e, !0);
        r.appendChild(t)
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        r.appendChild(t)
    }
}

function U(e) {
    let t = w[e];
    null == t || t.closed || (C[e] = {
        x: t.screenX,
        y: t.screenY,
        width: t.innerWidth,
        height: t.innerHeight,
        alwaysOnTop: !!h.isPlatformEmbedded && N[e]
    })
}

function G(e) {
    T.info("Unmounting popout window", e);
    let t = w[e];
    a()(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", x), t.removeEventListener("blur", x), t.removeEventListener("resize", M);
    let n = R[e];
    a()(null != n, "Window root was null while unmounting"), n.unmount(), delete w[e], delete N[e], delete P[e], delete R[e]
}

function F(e, t, r) {
    let i = e.document,
        o = new URL(t).origin,
        s = new URL("".concat(window.location.protocol, "//").concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (o !== s && o !== l) return void T.warn("Not injecting stylesheet, unrecognized origin", o);
    let c = i.createElement("link");
    c.href = t, c.rel = "stylesheet", c.integrity = r, a()(null != i.head, "Document head was null"), i.head.appendChild(c)
}

function V(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) F(t, e.href, e.integrity)
}

function B(e) {
    let t = w[e],
        n = P[e];
    if (null == t) return void T.warn("Failed to open window", e);
    let r = t.document;
    (0, g.a3)(r, x), t.addEventListener("focus", x), t.addEventListener("blur", x), t.addEventListener("resize", M), j ? k(e, t) : V(e, t);
    let i = (0, l.createRoot)(r.getElementById(L));
    a()(null != i, "No render target for popout!"), R[e] = i, i.render(n(e))
}

function H(e) {
    let {
        key: t,
        features: n,
        render: r
    } = e;
    if (h.isPlatformEmbedded && !m.Ay.supportsFeature(y.BYE.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
    let i = !0 === n.outOfProcessOverlay,
        a = w[t],
        o = null != a && !a.closed;
    if (o && !i) return h.isPlatformEmbedded ? m.Ay.focus(t) : null != a && a.focus(), !1;
    if (o && i) return T.info("Already has open window, skipping focus"), !1;
    let {
        defaultWidth: s,
        defaultHeight: l,
        defaultAlwaysOnTop: c = !1
    } = n, u = I(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]), d = A(O({}, u), {
        width: null != s ? s : u.width,
        height: null != l ? l : u.height
    }), _ = c, g = C[t];
    if (null != g) {
        let {
            width: e,
            height: t,
            x: n,
            y: r,
            alwaysOnTop: i
        } = g;
        _ = null != i ? i : c, d = A(O({}, d), {
            width: null != e && 0 !== e ? e : s,
            height: null != t && 0 !== t ? t : l,
            left: n,
            top: r
        })
    }
    let b = (0, E.A)(d);
    T.info("Opening popout window", {
        key: t,
        encodedFeatures: b
    });
    let v = window.open(y.BVt.POPOUT_WINDOW, t, b);
    try {
        v.windowKey = t
    } catch (e) {
        throw (0, f.pj)(e, i ? p.Ue.OutOfProcess : null, {
            extra: {
                windowKey: t,
                totalWindowCount: Object.keys(w).length,
                features: d,
                encodedFeatures: b,
                isPlatformEmbedded: h.isPlatformEmbedded
            }
        }), e
    }
    i ? T.verbose("Opening out of process overlay window", t) : null == v || v.focus(), w[t] = v, P[t] = r, h.isPlatformEmbedded && (m.Ay.setAlwaysOnTop(t, _), N[t] = _, m.Ay.isAlwaysOnTop(t).then(e => N[t] = e)), D.add(t)
}

function Y(e) {
    D.has(e) && (B(e), D.delete(e), $.emitChange())
}

function W(e) {
    let t = w[e];
    null != t && (t.closed || U(e), G(e), setTimeout(() => {
        z(t)
    }, 100), $.emitChange())
}

function K(e) {
    let {
        data: t
    } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key) switch (n.type) {
        case y.hK1.LOADED:
            return Y(n.key);
        case y.hK1.UNLOADED:
            return W(n.key)
    }
}

function z(e) {
    if (null != e && !e.closed) try {
        e.close()
    } catch (e) {
        T.error("Error closing popout window", e)
    }
}

function q(e) {
    let {
        key: t
    } = e, n = w[t];
    null != n && !n.closed && (U(t), _.default.preventPopoutClose || z(n))
}

function Z() {
    for (let e of Object.keys(w)) {
        let t = w[e];
        null != t && z(t)
    }
}

function Q(e) {
    let {
        key: t,
        alwaysOnTop: n
    } = e;
    h.isPlatformEmbedded && (m.Ay.setAlwaysOnTop(t, n), N[t] = n, m.Ay.isAlwaysOnTop(t).then(e => N[t] = e))
}

function X(e) {
    let {
        url: t,
        integrity: n
    } = e;
    for (let e of Object.values(w)) null == e || e.closed || F(e, t, n)
}
class J extends(r = c.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(_.default), window.addEventListener("message", K), window.addEventListener("beforeunload", Z), C = null != e ? e : {}
    }
    getWindow(e) {
        return w[e]
    }
    getWindowState(e) {
        return C[e]
    }
    getWindowKeys() {
        return Object.keys(w)
    }
    getWindowOpen(e) {
        let t = w[e];
        return null != t && !t.closed
    }
    getIsAlwaysOnTop(e) {
        return !!N[e]
    }
    getWindowFocused(e) {
        var t, n;
        let r = w[e];
        return null != (t = null == r || null == (n = r.document) ? void 0 : n.hasFocus()) && t
    }
    getWindowVisible(e) {
        var t;
        let n = w[e];
        return (null == n || null == (t = n.document) ? void 0 : t.visibilityState) === "visible"
    }
    getState() {
        return C
    }
    isWindowFullyInitialized(e) {
        return null != w[e] && null != R[e] && null != P[e]
    }
    isWindowFullScreen(e) {
        var t, n;
        let r = w[e];
        return (null == r || null == (n = r.document) || null == (t = n.fullscreenElement) ? void 0 : t.id) === L
    }
    unmountWindow(e) {
        return this.isWindowFullyInitialized(e) || T.warn("Attempted to unmount partially initialized window ".concat(e)), W(e)
    }
}
b(J, "displayName", "PopoutWindowStore"), b(J, "persistKey", "PopoutWindowStore");
let $ = new J(u.h, {
        POPOUT_WINDOW_OPEN: H,
        POPOUT_WINDOW_ADD_STYLESHEET: X,
        POPOUT_WINDOW_CLOSE: q,
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: Q,
        LOGOUT: Z
    }),
    ee = $