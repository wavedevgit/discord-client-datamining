/** chunk id: 116011 params = (module,exports,require) **/
n.d(t, {
    o: () => E,
    w: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(544028),
    d = n(954571),
    c = n(975571),
    u = n(728458),
    _ = n(264779),
    m = n(852218),
    g = n(699443),
    A = n(652215),
    x = n(985018),
    h = n(929993),
    p = n(870378),
    T = n(8496);
let E = {
        [m.KS]: {
            title: x.t.sfGgOG,
            body: x.t.igiSKe,
            bodyWithExpiration: x.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, i.jsx)(g.a1, {}),
                light: (0, i.jsx)(g.Gn, {})
            },
            asset: T.A
        },
        [m.Cs]: {
            title: x.t["9N8obd"],
            body: x.t["34g+Z3"],
            bodyWithExpiration: x.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, i.jsx)(g.WF, {}),
                light: (0, i.jsx)(g.s, {})
            },
            asset: p.A
        }
    },
    S = e => {
        let {
            recurrence: t
        } = e, n = (0, i.jsx)(l.rOg, {
            color: r.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), a = (0, i.jsx)(l.K0, {
            icon: l.TdU,
            size: "sm",
            variant: "secondary",
            "aria-label": "",
            color: "icon-feedback-positive",
            onClick: () => {
                navigator.clipboard.writeText(t.code), c(n)
            }
        }), [o, c] = s.useState(() => a);
        if (null != t.code) return (0, i.jsx)("div", {
            className: h.oP,
            children: (0, i.jsxs)("div", {
                className: h.t0,
                children: [(0, i.jsx)("div", {
                    className: h.cD,
                    children: (0, i.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), o, (0, i.jsx)(l.$nd, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: x.intl.formatToPlainString(x.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), d.default.track(A.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    f = e => {
        var t;
        let n, d, {
                recurrence: m,
                titleClassName: g,
                showPartnerLogo: p = !1,
                showPartnerImage: T = !1,
                countdownBar: f
            } = e,
            [C, b] = s.useState(m.code),
            [N, I] = s.useState(!1),
            v = (t = m.partnerId, n = (0, a.bG)([o.A], () => (0, l.Mwr)(o.A.theme)), null == (d = E[t]) ? null : n ? d.logos.dark : d.logos.light),
            j = null == C;
        return (0, i.jsxs)("div", {
            className: h.lA,
            children: [(0, i.jsxs)("div", {
                className: h.LV,
                children: [(0, i.jsxs)("div", {
                    className: h.JN,
                    children: [p && v, (0, i.jsxs)("div", {
                        className: null != g ? `${h.yO} ${g}` : h.yO,
                        children: [(0, i.jsx)(l.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: x.intl.string(m.title)
                        }), (0, i.jsx)(l.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: N ? x.intl.format(x.t.i2EuFO, {
                                helpdeskArticle: c.A.getArticleURL(A.MVz.RECURRING_PROMOTION)
                            }) : j ? x.intl.string(m.body) : x.intl.format(m.bodyWithExpiration, {
                                date: m.endDate
                            })
                        })]
                    }), j && (N ? (0, i.jsx)(l.$nd, {
                        icon: l.EpV,
                        variant: "critical-secondary",
                        size: "sm",
                        disabled: !0,
                        text: x.intl.string(x.t["8LKchl"])
                    }) : (0, i.jsx)(l.$nd, {
                        icon: l.XAi,
                        variant: "overlay-primary",
                        size: "sm",
                        text: x.intl.string(x.t.vwASIl),
                        onClick: () => {
                            (0, _.kd)({
                                promotionId: m.id,
                                analyticsLocations: []
                            }).then(e => {
                                b(e.code)
                            }).catch(e => {
                                I(!0), u.A.captureException(e)
                            })
                        }
                    }))]
                }), T && (0, i.jsx)("div", {
                    className: h.R4,
                    children: (0, i.jsx)(r._V3, {
                        src: m.asset,
                        className: h.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1
                    })
                })]
            }), f, null != C && (0, i.jsx)(S, {
                recurrence: {
                    ...m,
                    code: C
                }
            })]
        })
    }