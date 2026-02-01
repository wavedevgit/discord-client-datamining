/** chunk id: 275115, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => B
}), n(896048);
var r, i = n(812729),
    a = n.n(i),
    o = n(311907),
    s = n(118356),
    l = n(73153),
    c = n(87001),
    u = n(9302),
    d = n(682763),
    f = n(680243),
    p = n(96175),
    _ = n(672396),
    h = n(392164);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let g = new s.Vy("OverlayV3NativeClickZoneStore"),
    E = 3e4,
    y = null,
    b = [],
    O = [],
    v = {},
    A = !1;

function I(e) {
    return !a()(e, b)
}

function S(e) {
    let t = setTimeout(() => {
        w(t)
    }, E);
    return e.map(e => {
        let n = {
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            },
            r = v[e.name];
        return null != r && clearTimeout(r), v[e.name] = t, n
    })
}

function T(e, t) {
    var n;
    if (null == y) return void g.error("Overlay module not found");
    let r = null != (n = null == y ? void 0 : y.getLastAssociatedPID()) ? n : u.UNSET_PID;
    try {
        let n = S(e);
        I(e) && (0, d._r)(r, "capture_zones_set", {
            source: t,
            capture_zones: n,
            rawZones: e
        }), y.setCaptureZones(n)
    } catch (e) {
        g.error("Error setting capture zones:", e)
    }
}

function C(e) {
    return Object.keys(v).filter(t => v[t] === e)
}

function N() {
    return O.length > 0 && 0 === b.length
}

function w(e) {
    let t = C(e);
    for (let n of (null != e && clearTimeout(e), t)) delete v[n];
    let n = O.filter(e => !t.includes(e.name));
    N() || (b = n, T(n, "timer_expired")), O = [...n]
}

function R(e, t) {
    if (!f.A.isOverlayEnabled) {
        if (0 === b.length) return;
        P("overlay_disabled");
        return
    }
    T(e, t), b = e, O = [...e]
}

function P(e) {
    for (let e of Object.values(v)) null != e && clearTimeout(e);
    v = {}, b = [], O = [], T([], e)
}

function D() {
    0 !== b.length && (O = [...b], b = [], T([], "store_click_zones"))
}

function L() {
    b.length > 0 || T(b = [...O], "refresh_click_zones")
}

function x(e, t, n, r) {
    let i = c.A.getWindow(h.f);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        o = Math.ceil(r * i.innerHeight),
        s = new MouseEvent((0, p.Br)(t), {
            screenX: a,
            screenY: o,
            clientX: a,
            clientY: o,
            bubbles: !0,
            view: i
        }),
        l = i.document.elementFromPoint(a, o);
    null != l && l.dispatchEvent(s)
}

function M(e) {
    return P("crashed"), !0
}

function j(e) {
    let {
        zones: t
    } = e;
    return R(t, "set_click_zones"), !0
}

function k() {
    return P("refresh_host_window"), !0
}

function U() {
    return null == (y = f.A.getNativeModule()) || !!A || (A = !0, y.setCaptureZoneCallback(x), !0)
}

function G() {
    return y = null, !0
}

function V(e) {
    let {
        pid: t
    } = e;
    return 0 === t ? D() : L(), !0
}
class F extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(f.A, c.A)
    }
    getClickZones() {
        return b
    }
    getFocusLostStoredClickZones() {
        return O
    }
}
m(F, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let B = new F(l.h, __OVERLAY__ || !_.OX ? {} : {
    OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: U,
    OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: G,
    OVERLAY_SET_CLICK_ZONES: j,
    OVERLAY_FOCUSED: V,
    OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: k,
    OVERLAY_CRASHED: M
})