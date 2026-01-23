/** Chunk was on web.js **/
/** chunk id: 680243, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(65821);
var r, i = n(311907),
    a = n(118356),
    s = n(73153),
    o = n(49463),
    l = n(9302),
    c = n(211753),
    u = n(682763),
    d = n(327194),
    f = n(672396);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let _ = new a.Vy("OverlayV3NativeModuleStore"),
    h = !1,
    m = !1,
    g = null,
    E = !1,
    y = null,
    b = null,
    O = (() => {
        async function e() {
            A(), g = d.P.getInstance();
            try {
                await g.initialize(), h = !0
            } catch (e) {
                (0, u._r)(null, "module_initialization_failed", {
                    error: e
                }), h = !1, (0, u.mD)(l.UNSET_PID, e, {
                    crashType: "native"
                })
            } finally {
                w.emitChange()
            }
        }
        return () => (null == b && (b = e()), b)
    })();

function v(e) {
    __OVERLAY__ || !f.OX || m !== e && (m = e, e && (0, l.setOutOfProcessSupport)(!0))
}

function A() {
    !__OVERLAY__ && f.OX && (y = null, E = !1, _.verbose("Maybe Enable Overlay"), v(c.x.oopEnabled))
}

function I(e) {
    let {
        oopEnabled: t
    } = e;
    y = null, v(t)
}

function S() {
    return y = null, O(), !1
}

function T(e) {
    let {
        isCrashedDisabled: t,
        error: n
    } = e;
    return !0 === t && (E = !0), null != n && (y = n instanceof Error ? n.message : String(n)), !0
}

function C() {
    return O(), !1
}
class N extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A)
    }
    get isModuleLoading() {
        return null != b
    }
    get isOverlayEnabled() {
        return m
    }
    get isSupported() {
        return f.OX
    }
    get isModuleLoaded() {
        return h
    }
    get isCrashedDisabled() {
        return E
    }
    get errorMessage() {
        return y
    }
    getNativeModule() {
        return g
    }
}
p(N, "displayName", "Overlay-v3-Native-Module-Store");
let w = new N(s.h, __OVERLAY__ || !f.OX ? {} : {
        CONNECTION_OPEN: C,
        EXPERIMENT_OVERRIDE_BUCKET: A,
        OVERLAY_SET_ENABLED: I,
        OVERLAY_V3_LOAD_NATIVE_MODULE: S,
        OVERLAY_CRASHED: T
    }),
    R = w