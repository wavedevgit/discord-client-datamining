/** chunk id: 116011 params = (module,exports,require) **/
r.d(t, {
    o: () => C,
    w: () => R
});
var a = r(627968),
    n = r(64700),
    i = r(158954),
    s = r(311907),
    l = r(397927),
    o = r(544028),
    d = r(954571),
    c = r(975571),
    u = r(728458),
    m = r(264779),
    _ = r(852218),
    p = r(699443),
    f = r(652215),
    b = r(985018),
    h = r(276478),
    g = r(870378),
    x = r(8496);
let C = {
        [_.KS]: {
            title: b.t.sfGgOG,
            body: b.t.igiSKe,
            bodyWithExpiration: b.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, a.jsx)(p.a1, {}),
                light: (0, a.jsx)(p.Gn, {})
            },
            asset: x.A
        },
        [_.Cs]: {
            title: b.t["9N8obd"],
            body: b.t["34g+Z3"],
            bodyWithExpiration: b.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, a.jsx)(p.WF, {}),
                light: (0, a.jsx)(p.s, {})
            },
            asset: g.A
        }
    },
    A = e => {
        let {
            recurrence: t
        } = e, r = (0, a.jsx)(i.rOg, {
            color: l.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), s = (0, a.jsx)(i.K0, {
            icon: i.TdU,
            size: "sm",
            variant: "secondary",
            "aria-label": "",
            color: "icon-feedback-positive",
            onClick: () => {
                navigator.clipboard.writeText(t.code), c(r)
            }
        }), [o, c] = n.useState(() => s);
        if (null != t.code) return (0, a.jsx)("div", {
            className: h.oP,
            children: (0, a.jsxs)("div", {
                className: h.t0,
                children: [(0, a.jsx)("div", {
                    className: h.cD,
                    children: (0, a.jsx)(i.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), o, (0, a.jsx)(i.$nd, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: b.intl.formatToPlainString(b.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), d.default.track(f.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    R = e => {
        var t;
        let r, d, {
                recurrence: _,
                titleClassName: p,
                showPartnerLogo: g = !1,
                showPartnerImage: x = !1,
                countdownBar: R,
                titleVariant: v = "primary"
            } = e,
            [E, N] = n.useState(_.code),
            [j, I] = n.useState(!1),
            y = (t = _.partnerId, r = (0, s.bG)([o.A], () => (0, i.Mwr)(o.A.theme)), null == (d = C[t]) ? null : r ? d.logos.dark : d.logos.light),
            P = null == E;
        return (0, a.jsxs)("div", {
            className: h.lA,
            children: [(0, a.jsxs)("div", {
                className: h.LV,
                children: [(0, a.jsxs)("div", {
                    className: h.JN,
                    children: [g && y, (0, a.jsxs)("div", {
                        className: null != p ? `${h.yO} ${p}` : h.yO,
                        children: [(0, a.jsx)(i.DZT, {
                            variant: "secondary" === v ? "heading-md/semibold" : "heading-lg/semibold",
                            color: "text-strong",
                            children: b.intl.string(_.title)
                        }), (0, a.jsx)(i.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: j ? b.intl.format(b.t.i2EuFO, {
                                helpdeskArticle: c.A.getArticleURL(f.MVz.RECURRING_PROMOTION)
                            }) : P ? b.intl.string(_.body) : b.intl.format(_.bodyWithExpiration, {
                                date: _.endDate
                            })
                        })]
                    }), P && (j ? (0, a.jsx)(i.$nd, {
                        icon: i.EpV,
                        variant: "critical-secondary",
                        size: "sm",
                        disabled: !0,
                        text: b.intl.string(b.t["8LKchl"])
                    }) : (0, a.jsx)(i.$nd, {
                        icon: i.XAi,
                        variant: "overlay-primary",
                        size: "sm",
                        text: b.intl.string(b.t.vwASIl),
                        onClick: () => {
                            (0, m.kd)({
                                promotionId: _.id,
                                analyticsLocations: []
                            }).then(e => {
                                N(e.code)
                            }).catch(e => {
                                I(!0), u.A.captureException(e)
                            })
                        }
                    }))]
                }), x && (0, a.jsx)("div", {
                    className: h.R4,
                    children: (0, a.jsx)(l._V3, {
                        src: _.asset ?? "",
                        className: h.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1
                    })
                })]
            }), R, null != E && (0, a.jsx)(A, {
                recurrence: {
                    ..._,
                    code: E
                }
            })]
        })
    }