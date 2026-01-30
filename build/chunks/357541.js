/** chunk id: 357541, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(990078),
    a = n(397927),
    o = n(183555),
    s = n(633075),
    c = n(735321),
    u = n(384377),
    d = n(605694),
    f = n(518477),
    p = n(49999),
    g = n(985018);

function m(e) {
    let {
        user: t,
        application: n,
        onDismiss: m
    } = e, {
        trackUserProfileEditAction: b
    } = (0, o.NJ)(), y = l.useMemo(() => new s.R({
        applicationId: n.id
    }), [n.id]), O = l.useCallback(() => {
        null != y && ((0, c.Y5)(y), b(function(e) {
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
        }({
            action: "WIDGET_ADDED"
        }, y.getProfileEditAnalyticsOptions())), (0, u.XA)(f.jM.WIDGET_ADDED))
    }, [y, b]);
    return (0, r.jsx)(d.A, {
        user: t,
        widget: y,
        subtle: !0,
        cta: (0, r.jsx)(d.A.Cta, {
            showSuggestedForYou: !0,
            heading: g.intl.format(g.t.OIzLCy, {
                applicationName: n.name
            }),
            content: g.intl.format(g.t.BQySru, {
                applicationName: n.name
            }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(i.m, {
                    text: g.intl.string(g.t.WAI6xu),
                    ariaHidden: !0,
                    children: (0, r.jsx)(a.SCx, {
                        variant: "secondary",
                        size: "sm",
                        icon: a.PGe,
                        "aria-label": g.intl.string(g.t.WAI6xu),
                        onClick: () => {
                            m(p.i.USER_DISMISS)
                        }
                    })
                }), (0, r.jsx)(i.m, {
                    text: g.intl.string(g.t["lBG2s/"]),
                    ariaHidden: !0,
                    children: (0, r.jsx)(a.SCx, {
                        variant: "primary",
                        size: "sm",
                        icon: a.Uzd,
                        "aria-label": g.intl.formatToPlainString(g.t.KfGahB, {
                            applicationName: n.name
                        }),
                        onClick: () => {
                            m(p.i.TAKE_ACTION), O()
                        }
                    })
                })]
            })
        })
    })
}