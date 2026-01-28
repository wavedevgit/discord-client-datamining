/** Chunk was on 60449 **/
/** chunk id: 330688, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => S,
    TU: () => b,
    hH: () => O
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(827343),
    o = n(117178),
    c = n(688810),
    d = n(430452),
    u = n(723702),
    g = n(555444),
    h = n(780964),
    x = n(840065),
    A = n(825468),
    p = n(652215),
    m = n(985018);
let j = !u.isPlatformEmbedded;

function O(e) {
    return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function E(e) {
    let t, {
            inputMode: n
        } = e,
        {
            shortcut: s,
            delay: c,
            pttLatchingEnabled: j
        } = (0, l.cf)([d.A], () => d.A.getModeOptions()),
        {
            enableLatching: E
        } = (0, g.y)({
            location: "PTTTools"
        });
    return t = u.isPlatformEmbedded || n !== p.TBI.PUSH_TO_TALK ? (0, i.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        children: m.intl.format(m.t.HVvn5T, {
            onClick: () => (0, x.openUserSettings)(h.X.KEYBINDS_PANEL, {
                section: p.nc_.KEYBINDS
            })
        })
    }) : (0, i.jsx)(r.po8, {
        messageType: r.YCn.WARNING,
        children: m.intl.format(m.t.zvMPOc, {
            onDownloadClick: () => (0, A._)("Help Text PTT")
        })
    }), (0, i.jsxs)(r.BJc, {
        gap: 20,
        children: [(0, i.jsxs)(r.BJc, {
            gap: 16,
            direction: "horizontal",
            children: [(0, i.jsx)(r.D0$, {
                label: m.intl.string(m.t.YkDjVM),
                children: (0, i.jsx)(o.A, {
                    defaultValue: s,
                    onChange: e => a.A.setMode(n, {
                        shortcut: e
                    })
                })
            }), (0, i.jsx)(r.Apm, {
                label: m.intl.string(m.t.y0ShVt),
                initialValue: c,
                onValueChange: e => a.A.setMode(n, {
                    delay: e
                }),
                onValueRender: O,
                maxValue: p.IjB
            })]
        }), E && (0, i.jsx)(r.dOG, {
            label: m.intl.string(m.t.EGn1eN),
            description: m.intl.string(m.t.iT257i),
            checked: null != j && j,
            onChange: e => a.A.setMode(n, {
                pttLatchingEnabled: e
            })
        }), t]
    })
}

function b(e, t) {
    e === p.TBI.PUSH_TO_TALK && j && (0, r.mMO)(async () => {
        let {
            default: e
        } = await n.e("10919").then(n.bind(n, 556506));
        return t => (0, i.jsx)(e, function(e) {
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
        }({
            title: m.intl.string(m.t.Kdt0Gb),
            confirmText: m.intl.string(m.t["1WjMbC"]),
            cancelText: m.intl.string(m.t.BddRzS),
            onConfirm: () => (0, A._)("PTT Limited Modal"),
            body: m.intl.string(m.t.NIozvt)
        }, t))
    }), a.A.setMode(e, void 0, void 0, {
        analyticsLocations: t
    })
}

function S() {
    let {
        analyticsLocations: e
    } = (0, c.Ay)(), t = (0, l.bG)([d.A], () => d.A.getMode()), n = [{
        value: p.TBI.VOICE_ACTIVITY,
        name: m.intl.string(m.t.cHCEOJ)
    }, {
        value: p.TBI.PUSH_TO_TALK,
        name: j ? m.intl.string(m.t["1AINrB"]) : m.intl.string(m.t.Q8gkVL)
    }], a = s.useCallback(t => {
        let {
            value: n
        } = t;
        b(n, e)
    }, [e]);
    return (0, i.jsxs)(r.BJc, {
        gap: 20,
        children: [(0, i.jsx)(r.z6M, {
            label: m.intl.string(m.t["pS+K2L"]),
            onChange: e => a({
                value: e
            }),
            options: n,
            value: t
        }), t === p.TBI.PUSH_TO_TALK && (0, i.jsx)(E, {
            inputMode: t
        })]
    })
}