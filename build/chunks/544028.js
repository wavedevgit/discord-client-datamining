/** Chunk was on web.js **/
/** chunk id: 544028, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r, i = n(311907),
    a = n(582754),
    o = n(73153),
    s = n(775602),
    l = n(677313),
    c = n(403528),
    u = n(997579),
    d = n(284016),
    f = n(964404),
    p = n(617617),
    _ = n(185928),
    h = n(652215);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let b = 0,
    O = _.qj,
    v = (0, l.A)(),
    A = O[v],
    I = null;

function S() {
    return __OVERLAY__ || null == I ? (0, c.A)(v, O) : I
}

function T() {
    let e = S();
    return e !== A && (A = e, (0, u.A)(A), !0)
}
class C extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && (b = 1, A = e.theme, (0, u.A)(A), null != e.preferences && (O = e.preferences), (0, a.Mw)(A) && (O[_.Fc.DARK] = A)), this.waitFor(f.Ay, d.A, p.A, s.A)
    }
    getState() {
        return {
            theme: this.theme,
            preferences: O,
            status: b
        }
    }
    get theme() {
        return A
    }
    get systemTheme() {
        return v
    }
    themePreferenceForSystemTheme(e) {
        return O[e]
    }
}

function N() {
    return 0 === b && (O = y(g({}, O), {
        [_.Fc.DARK]: h.NJ8.DARKER
    }), b = 1), T()
}

function w() {
    return (0, a.qB)(S())
}

function R(e) {
    return I = null, !e.isSwitchingAccount && A !== h.NJ8.DARK && (A = h.NJ8.DARK, (0, u.A)(A), T())
}

function P(e) {
    let {
        systemTheme: t
    } = e;
    return v = t, T()
}

function D(e) {
    return O = g({}, O, e.preferences), T()
}

function L(e) {
    return I = e.theme, T()
}

function x() {
    return I = null, T()
}

function M() {
    return T()
}
m(C, "displayName", "ThemeStore"), m(C, "persistKey", "ThemeStore"), m(C, "migrations", [e => {
    let t = e.theme;
    return "amoled" === t && (t = "midnight"), y(g({}, e), {
        theme: t
    })
}, e => e]);
let j = new C(o.h, {
    CACHE_LOADED: T,
    CONNECTION_OPEN: N,
    LOGOUT: R,
    OVERLAY_INITIALIZE: T,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: T,
    UNSYNCED_USER_SETTINGS_UPDATE: T,
    USER_SETTINGS_PROTO_UPDATE: T,
    RESET_PREVIEW_CLIENT_THEME: T,
    SYSTEM_THEME_CHANGE: P,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: w,
    UPDATE_THEME_PREFERENCES: D,
    SET_THEME_OVERRIDE: L,
    CLEAR_THEME_OVERRIDE: x,
    REFRESH_THEME: M
})