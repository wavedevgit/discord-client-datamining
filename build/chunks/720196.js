/** Chunk was on web.js **/
/** chunk id: 720196, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048);
var r = n(391973),
    i = n(439372),
    a = n(626584),
    o = n(555528),
    s = n(41984),
    l = n(589051),
    c = n(652215);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = new a.A("OverlayWidgetPinManager"),
    f = {},
    p = 288e5,
    _ = !1,
    h = new Set([c.uss.GO_LIVE]),
    m = new Set([s.AR.WAITING_FOR_POPOUT_OPEN, s.AR.WAITING_FOR_REACT_INITIALIZATION, s.AR.WAITING_FOR_PID_FOCUS, s.AR.WAITING_FOR_SUCCESSFUL_SHOW]),
    g = e => {
        let t = f[e];
        return null == t || Date.now() - t < p
    },
    E = e => {
        f[e] = Date.now()
    },
    y = e => {
        delete f[e]
    };
class b extends i.A {
    constructor(...e) {
        super(...e), u(this, "actions", {
            OVERLAY_UPDATE_OVERLAY_STATE: e => {
                let {
                    overlayState: t
                } = e, {
                    enabled: n
                } = (0, l.Fg)("OverlayWidgetPinManager");
                if (n && m.has(t))
                    for (let e of Object.keys(f)) {
                        var i, a;
                        if (g(e)) continue;
                        let t = o.A.getWidget(e);
                        if (null == t || !h.has(t.type)) continue;
                        let n = null != (i = null == (a = o.A.getWidgetDefaultSettings(t.type)) ? void 0 : a.pinned) ? i : _;
                        t.pinned !== n && (d.verbose("Widget ".concat(t.type, " is ").concat(t.pinned ? "pinned" : "unpinned", ", toggling to ").concat(n ? "pinned" : "unpinned")), (0, r.v0)(e), y(e))
                    }
            },
            LAYOUT_SET_PINNED: e => {
                let {
                    widgetId: t,
                    pinned: n
                } = e, {
                    enabled: r
                } = (0, l.Fg)("OverlayWidgetPinManager");
                if (!r) return;
                let i = o.A.getWidget(t);
                null != i && h.has(i.type) && null != n && (n ? E(t) : y(t))
            }
        })
    }
}
let O = new b