/** chunk id: 357541 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    m = n(49999),
    p = n(985018);

function x(e) {
    let {
        user: t,
        application: n,
        onDismiss: x
    } = e, {
        trackUserProfileEditAction: f
    } = (0, r.NJ)(), h = a.useMemo(() => new o.R({
        applicationId: n.id
    }), [n.id]), _ = a.useCallback(() => {
        null != h && ((0, c.Y5)(h), f({
            action: "WIDGET_ADDED",
            ...h.getProfileEditAnalyticsOptions()
        }), (0, d.XA)(g.jM.WIDGET_ADDED))
    }, [h, f]);
    return (0, i.jsx)(u.A, {
        user: t,
        widget: h,
        subtle: !0,
        cta: (0, i.jsx)(u.A.Cta, {
            showSuggestedForYou: !0,
            heading: p.intl.format(p.t.OIzLCy, {
                applicationName: n.name
            }),
            content: p.intl.format(p.t.BQySru, {
                applicationName: n.name
            }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(l.m, {
                    text: p.intl.string(p.t.WAI6xu),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "secondary",
                        size: "sm",
                        icon: s.PGe,
                        "aria-label": p.intl.string(p.t.WAI6xu),
                        onClick: () => {
                            x(m.i.USER_DISMISS)
                        }
                    })
                }), (0, i.jsx)(l.m, {
                    text: p.intl.string(p.t["lBG2s/"]),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "primary",
                        size: "sm",
                        icon: s.Uzd,
                        "aria-label": p.intl.formatToPlainString(p.t.KfGahB, {
                            applicationName: n.name
                        }),
                        onClick: () => {
                            x(m.i.TAKE_ACTION), _()
                        }
                    })
                })]
            })
        })
    })
}