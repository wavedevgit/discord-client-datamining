/** chunk id: 869014, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
}), n(896048);
var r = n(439372),
    i = n(626584),
    a = n(87001),
    o = n(531685),
    s = n(365971),
    l = n(777334),
    c = n(41984),
    u = n(589051),
    d = n(833551),
    f = n(395011),
    p = n(392164);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = new i.A("OverlayWindowRAFManager"),
    m = window.requestAnimationFrame.bind(window),
    g = new Set([c.Ue.OutOfProcess, c.Ue.OutOfProcessLimitedInteraction]),
    E = new Set([c.AR.OVERLAY_CRASHED, c.AR.OVERLAY_CRASHED_DISABLED]);

function y(e) {
    for (let t of Object.values(d.default.getTrackedGames()))
        if (!(!g.has(t.overlayMethod) || E.has(t.state)) && (!e || t.state === c.AR.OVERLAY_RENDERING)) return !0;
    return !1
}
let b = null,
    O = !1,
    v = !1,
    A = {},
    I = (e, t) => {
        A[e] = t
    },
    S = e => {
        delete A[e]
    },
    T = () => {
        A = {}
    },
    C = () => Object.entries(A).map(e => {
        let [t, n] = e;
        return {
            timeoutId: Number(t),
            callback: n
        }
    }),
    N = e => {
        try {
            let t = a.A.getWindow(p.f);
            if (null == t || "function" != typeof t.requestAnimationFrame) return b = "OverlayNotAvailable", m(e);
            if (!v) return b = "MainWindowFocused", m(e);
            if (!y(!0)) return b = "NoOverlayRendering", m(e);
            let n = null !== f.A.getFocusedRunningGame(),
                r = o.A.isFocused((0, s.Q2)(t));
            if (o.A.isFocused() && h.error("Main window is reported as focused when it should not be!"), n || r) {
                b = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame(t => {
                    S(r), e(t)
                });
                return I(r, e), r
            }
        } catch (e) {
            h.error("RAF redirect failed, falling back to original. Cause:", e), (0, l.pj)(e, d.default.getOverlayMethod(f.A.getTargetPID()))
        }
        return b = "None", m(e)
    };

function w() {
    return !o.A.isFocused() || !o.A.isVisible()
}

function R() {
    let e = a.A.getWindow(p.f),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    C().forEach(n => {
        let {
            timeoutId: r,
            callback: i
        } = n;
        t && e.cancelAnimationFrame(r), m(i)
    }), T()
}

function P(e) {
    if (e === v) return;
    let t = !e && v;
    v = e, t && R()
}
class D extends r.A {
    _initialize() {
        P(w())
    }
    _terminate() {
        window.requestAnimationFrame = m
    }
    getLastRAFCallbackReason() {
        return b
    }
    handleUpdateOverlayMethod() {
        let {
            enabled: e
        } = (0, u.wG)("OverlayWindowRAFManager");
        if (!(!e || __OVERLAY__)) {
            if (!O && !y(!1)) {
                window.requestAnimationFrame = m, b = "NoOverlayRendering", R();
                return
            }
            h.info("Patching window RAF to use overlay window"), window.requestAnimationFrame = N
        }
    }
    handleWindowStateChage() {
        P(w())
    }
    handleOverlayRenderDebugMode(e) {
        let {
            enabled: t,
            mode: n
        } = e;
        n === c.x7.OverlayRafManagerForceEnabled && (O = t, t ? window.requestAnimationFrame = N : v || (window.requestAnimationFrame = m, R()))
    }
    constructor(...e) {
        super(...e), _(this, "actions", {
            OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
            WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
            WINDOW_FOCUS: this.handleWindowStateChage,
            OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode
        })
    }
}
let L = new D