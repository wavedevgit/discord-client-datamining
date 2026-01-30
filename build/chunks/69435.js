/** chunk id: 69435, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O,
    D: () => j
}), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(314116),
    a = n(397927),
    o = n(271866),
    c = n(195043),
    d = n(147964),
    u = n(837921),
    h = n(253932),
    g = n(801264),
    x = n(912615),
    p = n(790174),
    m = n(531525),
    A = n(652215),
    b = n(985018);

function j() {
    let [e] = l.useState(() => u.Ay.getEnableHardwareAcceleration()), t = l.useCallback(e => {
        let t = e ? b.intl.format(b.t.LYXRxL, {}) : b.intl.format(b.t.uDP3Kz, {});
        (0, r.A)({
            title: b.intl.string(b.t.aqpAvn),
            subtitle: t,
            confirmText: b.intl.string(b.t.vT7ckk),
            onConfirm: () => u.Ay.setEnableHardwareAcceleration(e)
        })
    }, []);
    return (0, i.jsxs)(a.BJc, {
        children: [(0, i.jsx)(a.dOG, {
            label: b.intl.string(b.t["eOC/F2"]),
            description: b.intl.string(b.t.Afc7l6),
            checked: e,
            onChange: t
        }), !e && (0, i.jsx)(g.A, {
            look: g.k.WARNING,
            children: b.intl.string(b.t.j7S6IX)
        })]
    })
}

function O() {
    let e = h.l_.useSetting(),
        t = h.Q_.useSetting(),
        n = (0, s.bG)([d.A], () => d.A.testModeApplicationId),
        r = l.useCallback(e => {
            h.l_.updateSetting(!e)
        }, []),
        u = l.useCallback(e => {
            e ? (0, a.qfG)(e => (0, i.jsx)(x.A, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                        var i;
                        i = n[t], t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i
                    })
                }
                return e
            }({}, e))) : o.cL()
        }, []);
    return (0, i.jsx)(p.A, {
        title: b.intl.string(b.t["8/udY0"]),
        children: (0, i.jsxs)(a.BJc, {
            gap: 16,
            children: [(0, i.jsxs)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: [(0, i.jsx)(a.dOG, {
                    label: b.intl.string(b.t.ObIb1Q),
                    description: b.intl.format(b.t["CY6q/Q"], {
                        apiDocsUrl: A.X7G.API_DOCS
                    }),
                    checked: t,
                    onChange: h.Q_.updateSetting
                }), (0, i.jsx)(a.cGx, {})]
            }), (0, i.jsx)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsxs)(a.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(j, {}), (0, i.jsx)(a.cGx, {})]
                })
            }), (0, i.jsxs)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: [(0, i.jsx)(a.dOG, {
                    label: b.intl.string(b.t.fi3UQN),
                    description: b.intl.string(b.t["8mYp37"]),
                    checked: !e,
                    onChange: r
                }), (0, i.jsx)(a.cGx, {})]
            }), (0, i.jsxs)(c.x, {
                setting: m.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: [(0, i.jsx)(a.dOG, {
                    label: b.intl.string(b.t.erOqlh),
                    description: b.intl.string(b.t["52hMnD"]),
                    checked: null != n,
                    onChange: u
                }), (0, i.jsx)(a.cGx, {})]
            })]
        })
    })
}