/** chunk id: 357541 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    a = n(990078),
    s = n(397927),
    r = n(183555),
    o = n(633075),
    c = n(735321),
    d = n(606758),
    u = n(605694),
    m = n(518477),
    g = n(49999),
    f = n(985018);

function x(e) {
    let {
        user: t,
        application: n,
        onDismiss: x
    } = e, {
        trackUserProfileEditAction: p
    } = (0, r.NJ)(), _ = l.useMemo(() => new o.R({
        applicationId: n.id
    }), [n.id]), I = l.useCallback(() => {
        null != _ && ((0, c.Y5)(_), p({
            action: "WIDGET_ADDED",
            ..._.getProfileEditAnalyticsOptions()
        }), (0, d.XA)(m.jM.WIDGET_ADDED))
    }, [_, p]);
    return (0, i.jsx)(u.A, {
        user: t,
        widget: _,
        subtle: !0,
        cta: (0, i.jsx)(u.A.Cta, {
            showSuggestedForYou: !0,
            heading: f.intl.format(f.t.OIzLCy, {
                applicationName: n.name
            }),
            content: f.intl.format(f.t.BQySru, {
                applicationName: n.name
            }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(a.m, {
                    text: f.intl.string(f.t.WAI6xu),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "secondary",
                        size: "sm",
                        icon: s.PGe,
                        "aria-label": f.intl.string(f.t.WAI6xu),
                        onClick: () => {
                            x(g.i.USER_DISMISS)
                        }
                    })
                }), (0, i.jsx)(a.m, {
                    text: f.intl.string(f.t["lBG2s/"]),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "primary",
                        size: "sm",
                        icon: s.Uzd,
                        "aria-label": f.intl.formatToPlainString(f.t.KfGahB, {
                            applicationName: n.name
                        }),
                        onClick: () => {
                            x(g.i.TAKE_ACTION), I()
                        }
                    })
                })]
            })
        })
    })
}