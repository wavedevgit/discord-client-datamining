/** chunk id: 502229, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S,
    D: () => I
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73153),
    o = n(973654),
    s = n(287809),
    l = n(954571),
    c = n(723702),
    u = n(955572),
    d = n(775602),
    f = n(652215),
    p = n(185928);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}
let m = window.matchMedia("(prefers-reduced-motion: reduce)"),
    g = window.matchMedia("(prefers-contrast: more)"),
    E = window.matchMedia("(prefers-contrast: less)"),
    y = window.matchMedia("(prefers-color-scheme: dark)"),
    b = window.matchMedia("(prefers-color-scheme: light)"),
    O = window.matchMedia("(forced-colors: active)"),
    v = 5;

function A() {
    let e = s.default.getCurrentUser();
    return null == e || Date.now() - e.createdAt < 864e5
}

function I() {
    return "windows" === (0, c.getOS)()
}
let S = {
    initBasic() {
        m.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(m), y.addListener(this.handleSystemColorPreferencesChanged), b.addListener(this.handleSystemColorPreferencesChanged), O.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
    },
    init() {
        this.initBasic(), a.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
            l.default.track(f.HAw.LOCAL_SETTINGS_UPDATED, {
                colorblind_enabled: d.A.colorblindMode
            })
        }), a.h.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
            l.default.track(f.HAw.LOCAL_SETTINGS_UPDATED, {
                saturation_level: e.saturation
            })
        })
    },
    maybeShowKeyboardNavigationExplainerModal() {
        v = Math.max(v - 1, 0), A() || d.A.keyboardNavigationExplainerModalSeen || 0 !== v || (0, i.mMO)(async () => {
            let {
                default: e
            } = await n.e("98186").then(n.bind(n, 645905));
            return t => (0, r.jsx)(e, h({}, t))
        })
    },
    handleSystemPrefersReducedMotionChanged(e) {
        a.h.wait(() => {
            u.RJ(e.matches ? "reduce" : "no-preference")
        })
    },
    handleSystemColorPreferencesChanged() {
        let e = p.Fc.NO_PREFERENCE;
        y.matches ? e = p.Fc.DARK : b.matches && (e = p.Fc.LIGHT);
        let t = (!c.isPlatformEmbedded || I()) && O.matches ? "active" : "none";
        a.h.wait(() => {
            o.LA(e), u.RI(t)
        })
    },
    handleSystemPrefersContrastChanged() {
        let e = "no-preference";
        g.matches ? e = "more" : E.matches && (e = "less"), a.h.wait(() => {
            u.Jb(e)
        })
    }
}