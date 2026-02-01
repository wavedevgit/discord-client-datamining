/** chunk id: 69435, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O,
    D: () => y
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(314116),
    a = n(397927),
    o = n(271866),
    c = n(195043),
    u = n(147964),
    d = n(837921),
    p = n(253932),
    h = n(801264),
    g = n(912615),
    f = n(790174),
    m = n(531525),
    b = n(652215),
    A = n(985018);

function y() {
    let [e] = l.useState(() => d.Ay.getEnableHardwareAcceleration()), t = l.useCallback(e => {
        let t = e ? A.intl.format(A.t.LYXRxL, {}) : A.intl.format(A.t.uDP3Kz, {});
        (0, s.A)({
            title: A.intl.string(A.t.aqpAvn),
            subtitle: t,
            confirmText: A.intl.string(A.t.vT7ckk),
            onConfirm: () => d.Ay.setEnableHardwareAcceleration(e)
        })
    }, []);
    return (0, r.jsxs)(a.BJc, {
        children: [(0, r.jsx)(a.dOG, {
            label: A.intl.string(A.t["eOC/F2"]),
            description: A.intl.string(A.t.Afc7l6),
            checked: e,
            onChange: t
        }), !e && (0, r.jsx)(h.A, {
            look: h.k.WARNING,
            children: A.intl.string(A.t.j7S6IX)
        })]
    })
}

function O() {
    let e = p.l_.useSetting(),
        t = p.Q_.useSetting(),
        n = (0, i.bG)([u.A], () => u.A.testModeApplicationId),
        s = l.useCallback(e => {
            p.l_.updateSetting(!e)
        }, []),
        d = l.useCallback(e => {
            e ? (0, a.qfG)(e => (0, r.jsx)(g.A, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, e))) : o.cL()
        }, []);
    return (0, r.jsx)(f.A, {
        title: A.intl.string(A.t["8/udY0"]),
        children: (0, r.jsxs)(a.BJc, {
            gap: 16,
            children: [(0, r.jsxs)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: [(0, r.jsx)(a.dOG, {
                    label: A.intl.string(A.t.ObIb1Q),
                    description: A.intl.format(A.t["CY6q/Q"], {
                        apiDocsUrl: b.X7G.API_DOCS
                    }),
                    checked: t,
                    onChange: p.Q_.updateSetting
                }), (0, r.jsx)(a.cGx, {})]
            }), (0, r.jsx)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, r.jsxs)(a.BJc, {
                    gap: 16,
                    children: [(0, r.jsx)(y, {}), (0, r.jsx)(a.cGx, {})]
                })
            }), (0, r.jsxs)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: [(0, r.jsx)(a.dOG, {
                    label: A.intl.string(A.t.fi3UQN),
                    description: A.intl.string(A.t["8mYp37"]),
                    checked: !e,
                    onChange: s
                }), (0, r.jsx)(a.cGx, {})]
            }), (0, r.jsxs)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: [(0, r.jsx)(a.dOG, {
                    label: A.intl.string(A.t.erOqlh),
                    description: A.intl.string(A.t["52hMnD"]),
                    checked: null != n,
                    onChange: d
                }), (0, r.jsx)(a.cGx, {})]
            })]
        })
    })
}