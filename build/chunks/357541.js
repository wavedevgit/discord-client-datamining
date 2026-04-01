/** chunk id: 357541 params = (module,exports,require) **/
n.d(t, {
    A: () => p
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
    x = n(985018);

function p(e) {
    let {
        user: t,
        application: n,
        onDismiss: p
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
            heading: x.intl.format(x.t.OIzLCy, {
                applicationName: n.name
            }),
            content: x.intl.format(x.t.BQySru, {
                applicationName: n.name
            }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(l.m, {
                    text: x.intl.string(x.t.WAI6xu),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "secondary",
                        size: "sm",
                        icon: s.PGe,
                        "aria-label": x.intl.string(x.t.WAI6xu),
                        onClick: () => {
                            p(m.i.USER_DISMISS)
                        }
                    })
                }), (0, i.jsx)(l.m, {
                    text: x.intl.string(x.t["lBG2s/"]),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "primary",
                        size: "sm",
                        icon: s.Uzd,
                        "aria-label": x.intl.formatToPlainString(x.t.KfGahB, {
                            applicationName: n.name
                        }),
                        onClick: () => {
                            p(m.i.TAKE_ACTION), _()
                        }
                    })
                })]
            })
        })
    })
}