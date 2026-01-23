/** Chunk was on web.js **/
/** chunk id: 69435, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => C,
    DS: () => T,
    yW: () => I
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(506774),
    o = n(314116),
    l = n(397927),
    c = n(271866),
    u = n(724122),
    d = n(195043),
    f = n(147964),
    p = n(837921),
    _ = n(253932),
    h = n(801264),
    m = n(912615),
    g = n(790174),
    E = n(531525),
    y = n(652215),
    b = n(985018);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}
let A = "AppHardwareAcceleration";

function I() {
    if ((0, u.W)("DesktopNativeUtils")) {
        let e = s.w.get(A);
        if ("boolean" == typeof e) return e
    }
    return p.Ay.getEnableHardwareAcceleration()
}

function S(e) {
    (0, u.W)("DesktopNativeUtils") ? (s.w.set(A, e), p.Ay.setEnableHardwareAcceleration(!0)) : p.Ay.setEnableHardwareAcceleration(e)
}

function T() {
    let [e] = i.useState(() => I()), t = i.useCallback(e => {
        let t = e ? b.intl.format(b.t.LYXRxL, {}) : b.intl.format(b.t.uDP3Kz, {});
        (0, o.A)({
            title: b.intl.string(b.t.aqpAvn),
            subtitle: t,
            confirmText: b.intl.string(b.t.vT7ckk),
            onConfirm: () => S(e)
        })
    }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.dOG, {
            label: b.intl.string(b.t["eOC/F2"]),
            description: b.intl.string(b.t.Afc7l6),
            checked: e,
            onChange: t
        }), !e && (0, r.jsx)(h.A, {
            look: h.k.WARNING,
            children: b.intl.string(b.t.j7S6IX)
        })]
    })
}

function C() {
    let e = _.l_.useSetting(),
        t = _.Q_.useSetting(),
        n = (0, a.bG)([f.A], () => f.A.testModeApplicationId),
        s = i.useCallback(e => {
            _.l_.updateSetting(!e)
        }, []),
        o = i.useCallback(e => {
            e ? (0, l.qfG)(e => (0, r.jsx)(m.A, v({}, e))) : c.cL()
        }, []);
    return (0, r.jsx)(g.A, {
        title: b.intl.string(b.t["8/udY0"]),
        children: (0, r.jsxs)(l.BJc, {
            gap: 16,
            children: [(0, r.jsxs)(d.x, {
                setting: E.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: [(0, r.jsx)(l.dOG, {
                    label: b.intl.string(b.t.ObIb1Q),
                    description: b.intl.format(b.t["CY6q/Q"], {
                        apiDocsUrl: y.X7G.API_DOCS
                    }),
                    checked: t,
                    onChange: _.Q_.updateSetting
                }), (0, r.jsx)(l.cGx, {})]
            }), (0, r.jsx)(d.x, {
                setting: E.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, r.jsxs)(l.BJc, {
                    gap: 16,
                    children: [(0, r.jsx)(T, {}), (0, r.jsx)(l.cGx, {})]
                })
            }), (0, r.jsxs)(d.x, {
                setting: E.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: [(0, r.jsx)(l.dOG, {
                    label: b.intl.string(b.t.fi3UQN),
                    description: b.intl.string(b.t["8mYp37"]),
                    checked: !e,
                    onChange: s
                }), (0, r.jsx)(l.cGx, {})]
            }), (0, r.jsxs)(d.x, {
                setting: E.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: [(0, r.jsx)(l.dOG, {
                    label: b.intl.string(b.t.erOqlh),
                    description: b.intl.string(b.t["52hMnD"]),
                    checked: null != n,
                    onChange: o
                }), (0, r.jsx)(l.cGx, {})]
            })]
        })
    })
}