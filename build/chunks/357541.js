/** chunk id: 357541 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    a = n(64700),
    l = n(990078),
    s = n(397927),
    r = n(183555),
    o = n(633075),
    c = n(735321),
    d = n(606758),
    u = n(605694),
    g = n(518477),
    _ = n(49999),
    m = n(985018);

function f(e) {
    let {
        user: t,
        application: n,
        onDismiss: f
    } = e, {
        trackUserProfileEditAction: x
    } = (0, r.NJ)(), p = a.useMemo(() => new o.R({
        applicationId: n.id
    }), [n.id]), I = a.useCallback(() => {
        null != p && ((0, c.Y5)(p), x({
            action: "WIDGET_ADDED",
            ...p.getProfileEditAnalyticsOptions()
        }), (0, d.XA)(g.jM.WIDGET_ADDED))
    }, [p, x]);
    return (0, i.jsx)(u.A, {
        user: t,
        widget: p,
        subtle: !0,
        cta: (0, i.jsx)(u.A.Cta, {
            showSuggestedForYou: !0,
            heading: m.intl.format(m.t.OIzLCy, {
                applicationName: n.name
            }),
            content: m.intl.format(m.t.BQySru, {
                applicationName: n.name
            }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(l.m, {
                    text: m.intl.string(m.t.WAI6xu),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "secondary",
                        size: "sm",
                        icon: s.PGe,
                        "aria-label": m.intl.string(m.t.WAI6xu),
                        onClick: () => {
                            f(_.i.USER_DISMISS)
                        }
                    })
                }), (0, i.jsx)(l.m, {
                    text: m.intl.string(m.t["lBG2s/"]),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "primary",
                        size: "sm",
                        icon: s.Uzd,
                        "aria-label": m.intl.formatToPlainString(m.t.KfGahB, {
                            applicationName: n.name
                        }),
                        onClick: () => {
                            f(_.i.TAKE_ACTION), I()
                        }
                    })
                })]
            })
        })
    })
}