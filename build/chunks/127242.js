/** Chunk was on web.js **/
/** chunk id: 127242, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => X
}), n(896048), n(321073), n(65821);
var i, a = n(812729),
    o = n.n(a),
    s = n(311907),
    l = n(713402),
    c = n(73153),
    u = n(661191),
    d = n(9302),
    f = n(181435),
    p = n(680243),
    _ = n(672396);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let m = null,
    g = new Set,
    E = null,
    y = null,
    b = 3e3,
    O = new u.SnowflakeSequence;

function v(e) {
    return (0, f.Vx)(e) ? "native-".concat(e.id) : null != e.nativeId ? "native-".concat(e.nativeId) : null
}

function A(e) {
    var t, n;
    let r = [e.type, null != (t = null == (n = e.pid) ? void 0 : n.toString()) ? t : "null-pid"],
        i = v(e);
    return null != i && r.push(i), r
}

function I(e) {
    return -e.timestamp
}

function S(e) {
    let t = Math.floor(e);
    try {
        return O.willOverflowNext() && O.reset(), u.default.fromTimestampWithSequence(t, O)
    } catch (e) {
        return O.reset(), u.default.fromTimestampWithSequence(t, O)
    }
}

function T(e, t, n) {
    var r;
    let i = S(e.timestamp);
    return {
        id: i,
        key: i,
        nativeId: Number(e.id),
        timestamp: e.timestamp,
        name: e.name,
        data: e.data,
        type: t,
        pid: n,
        logType: f.QJ.Info,
        stack: null != (r = Error().stack) ? r : ""
    }
}

function C() {
    return performance.timeOrigin + performance.now()
}
let N = new l.J(A, I),
    w = 0;

function R(e) {
    return N.set(e.id, e)
}

function P() {
    return w
}

function D(e, t, n) {
    let r = v(e);
    if (null == r) throw Error("Native breadcrumb has no native id");
    return !(N.size(r) > 0) && (w = Math.max(w, Number(e.id)), R(T(e, t, n)))
}

function L(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.QJ.Info,
        a = C(),
        o = S(a);
    return R({
        id: o,
        key: o,
        nativeId: null,
        timestamp: a,
        name: e,
        data: t,
        type: n,
        pid: r,
        logType: i,
        stack: void 0
    })
}

function x(e) {
    return [N.values(e, !0), N.version]
}

function M() {
    null == y && (y = setInterval(() => {
        var e;
        let t = null != (e = null == m ? void 0 : m.getLastAssociatedPID()) ? e : null;
        null == m || m.getNativeBreadcrumbs({
            minBreadcrumbId: P()
        }, e => {
            let {
                breadcrumbs: n
            } = e;
            for (let e of n) D(e, f.ON.NativeOOP, null != t ? t : d.UNSET_PID);
            Q.emitChange()
        })
    }, b))
}

function j(e) {
    return e ? M() : U(), !0
}

function k() {
    return null != y
}

function U() {
    null != y && (clearInterval(y), y = null)
}

function G() {
    null != E && (clearInterval(E), E = null)
}

function F(e) {
    let {
        enabled: t,
        mode: n
    } = e;
    t ? g.add(n) : g.delete(n), g = new Set(g)
}
let V = 300;

function B() {
    null == E && (E = setInterval(() => {
        var e;
        null == m || null == (e = m.getDebuggingState) || e.call(m, e => {
            o()(r, e) || (r = e, Q.emitChange())
        })
    }, V))
}

function H(e) {
    let {
        enabled: t
    } = e;
    return t ? B() : G(), !0
}

function Y(e) {
    var t;
    let {
        enabled: n
    } = e;
    null == m || null == (t = m.setDetailedLogging) || t.call(m, n)
}

function W() {
    m = p.A.getNativeModule()
}

function K() {
    m = null
}

function z(e) {
    let {
        breadcrumb: {
            pid: t,
            name: n,
            data: r,
            type: i,
            logType: a
        }
    } = e;
    return L(n, null != r ? r : {}, i, t, a), !0
}

function q(e) {
    let {
        enabled: t
    } = e;
    return j(t), !0
}
class Z extends(i = s.Ay.Store) {
    initialize() {
        this.waitFor(p.A)
    }
    getDebuggingState() {
        return r
    }
    hasRenderDebugMode(e) {
        return g.has(e)
    }
    getRenderDebugModes() {
        return g
    }
    getOverlayLoggingBreadcrumbs(e) {
        return x(e)
    }
    isModuleLoggingEnabled() {
        return k()
    }
    isStateDebuggingEnabled() {
        return null != E
    }
}
h(Z, "displayName", "Overlay-v3-Native-Debug-Module-Store");
let Q = new Z(c.h, __OVERLAY__ || !_.OX ? {} : {
        OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: W,
        OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: K,
        OVERLAY_SET_STATE_DEBUGGING: H,
        OVERLAY_RENDER_DEBUG_MODE: F,
        OVERLAY_SET_DETAILED_LOGGING: Y,
        OVERLAY_ADD_DEBUG_BREADCRUMB: z,
        OVERLAY_SET_MODULE_LOGGING: q
    }),
    X = Q