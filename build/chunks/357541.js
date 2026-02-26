/** chunk id: 357541, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    l = n(64700),
    a = n(990078),
    s = n(397927),
    r = n(183555),
    o = n(633075),
    c = n(735321),
    d = n(384377),
    u = n(605694),
    m = n(518477),
    g = n(49999),
    x = n(985018);

function f(e) {
    let {
        user: t,
        application: n,
        onDismiss: f
    } = e, {
        trackUserProfileEditAction: p
    } = (0, r.NJ)(), h = l.useMemo(() => new o.R({
        applicationId: n.id
    }), [n.id]), _ = l.useCallback(() => {
        null != h && ((0, c.Y5)(h), p({
            action: "WIDGET_ADDED",
            ...h.getProfileEditAnalyticsOptions()
        }), (0, d.XA)(m.jM.WIDGET_ADDED))
    }, [h, p]);
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
                children: [(0, i.jsx)(a.m, {
                    text: x.intl.string(x.t.WAI6xu),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.SCx, {
                        variant: "secondary",
                        size: "sm",
                        icon: s.PGe,
                        "aria-label": x.intl.string(x.t.WAI6xu),
                        onClick: () => {
                            f(g.i.USER_DISMISS)
                        }
                    })
                }), (0, i.jsx)(a.m, {
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
                            f(g.i.TAKE_ACTION), _()
                        }
                    })
                })]
            })
        })
    })
}