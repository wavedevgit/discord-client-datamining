/** chunk id: 69435, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T,
    D: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(314116),
    r = n(397927),
    o = n(271866),
    d = n(195043),
    c = n(147964),
    u = n(837921),
    _ = n(253932),
    g = n(801264),
    m = n(912615),
    A = n(790174),
    h = n(531525),
    p = n(652215),
    x = n(985018);

function E() {
    let [e] = s.useState(() => u.Ay.getEnableHardwareAcceleration()), t = s.useCallback(e => {
        let t = e ? x.intl.format(x.t.LYXRxL, {}) : x.intl.format(x.t.uDP3Kz, {});
        (0, a.A)({
            title: x.intl.string(x.t.aqpAvn),
            subtitle: t,
            confirmText: x.intl.string(x.t.vT7ckk),
            onConfirm: () => u.Ay.setEnableHardwareAcceleration(e)
        })
    }, []);
    return (0, i.jsxs)(r.BJc, {
        children: [(0, i.jsx)(r.dOG, {
            label: x.intl.string(x.t["eOC/F2"]),
            description: x.intl.string(x.t.Afc7l6),
            checked: e,
            onChange: t
        }), !e && (0, i.jsx)(g.A, {
            look: g.k.WARNING,
            children: x.intl.string(x.t.j7S6IX)
        })]
    })
}

function T() {
    let e = _.l_.useSetting(),
        t = _.Q_.useSetting(),
        n = (0, l.bG)([c.A], () => c.A.testModeApplicationId),
        a = s.useCallback(e => {
            _.l_.updateSetting(!e)
        }, []),
        u = s.useCallback(e => {
            e ? (0, r.qfG)(e => (0, i.jsx)(m.A, {
                ...e
            })) : o.cL()
        }, []);
    return (0, i.jsx)(A.A, {
        title: x.intl.string(x.t["8/udY0"]),
        children: (0, i.jsxs)(r.BJc, {
            gap: 16,
            children: [(0, i.jsxs)(d.x, {
                setting: h.H.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: [(0, i.jsx)(r.dOG, {
                    label: x.intl.string(x.t.ObIb1Q),
                    description: x.intl.format(x.t["CY6q/Q"], {
                        apiDocsUrl: p.X7G.API_DOCS
                    }),
                    checked: t,
                    onChange: _.Q_.updateSetting
                }), (0, i.jsx)(r.cGx, {})]
            }), (0, i.jsx)(d.x, {
                setting: h.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, i.jsxs)(r.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(E, {}), (0, i.jsx)(r.cGx, {})]
                })
            }), (0, i.jsxs)(d.x, {
                setting: h.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: [(0, i.jsx)(r.dOG, {
                    label: x.intl.string(x.t.fi3UQN),
                    description: x.intl.string(x.t["8mYp37"]),
                    checked: !e,
                    onChange: a
                }), (0, i.jsx)(r.cGx, {})]
            }), (0, i.jsxs)(d.x, {
                setting: h.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: [(0, i.jsx)(r.dOG, {
                    label: x.intl.string(x.t.erOqlh),
                    description: x.intl.string(x.t["52hMnD"]),
                    checked: null != n,
                    onChange: u
                }), (0, i.jsx)(r.cGx, {})]
            })]
        })
    })
}