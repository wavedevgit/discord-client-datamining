/** chunk id: 116011 params = (module,exports,require) **/
n.d(t, {
    oL: () => E,
    wx: () => y
});
var s = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(311907),
    i = n(397927),
    d = n(914410),
    o = n(544028),
    c = n(954571),
    u = n(405269),
    h = n(975571),
    m = n(728458),
    x = n(881373),
    C = n(264779),
    _ = n(852218),
    p = n(699443),
    g = n(652215),
    f = n(962995),
    R = n(985018),
    j = n(75662),
    b = n(870378),
    v = n(208556),
    N = n(8496);
let E = {
        [_.XY]: {
            title: f.default.LsJ9hj,
            titleParams: {
                discountPercent: x.aW
            },
            body: f.default.Yl5ww1,
            bodyWithExpiration: f.default["6KjkUa"],
            redemptionURL: "https://www.logitech.com/",
            logos: {
                dark: (0, s.jsx)(a.Fragment, {}, "logitech-logo-dark"),
                light: (0, s.jsx)(a.Fragment, {}, "logitech-logo-light")
            },
            asset: v.A
        },
        [_.KS]: {
            title: R.t.sfGgOG,
            body: R.t.igiSKe,
            bodyWithExpiration: R.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, s.jsx)(p.a1, {}),
                light: (0, s.jsx)(p.Gn, {})
            },
            asset: N.A
        },
        [_.Cs]: {
            title: R.t["9N8obd"],
            body: R.t["34g+Z3"],
            bodyWithExpiration: R.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, s.jsx)(p.WF, {}),
                light: (0, s.jsx)(p.s, {})
            },
            asset: b.A
        }
    },
    A = () => {
        let e = (0, u.N5)(),
            t = (0, u.P6)();
        return (0, s.jsxs)("div", {
            className: `${j.G9} ${j.sQ}`,
            children: [(0, s.jsx)(l.EYj, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: j.kT,
                children: R.intl.format(f.default["65EEvD"], {
                    days: t
                })
            }), (0, s.jsx)(d.Ay, {
                progress: e,
                variant: d.qP.UNSET,
                override: {
                    default: {
                        gradientStart: "var(--illo-blue-70)",
                        gradientEnd: "var(--illo-blue-10)"
                    }
                }
            })]
        })
    },
    D = e => {
        let {
            children: t
        } = e;
        return (0, s.jsx)("div", {
            className: j.oP,
            children: (0, s.jsx)("div", {
                className: j.t0,
                children: t
            })
        })
    },
    I = e => {
        let {
            recurrence: t
        } = e, n = (0, s.jsx)(l.rOg, {
            color: i.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), r = (0, s.jsx)("span", {
            className: j.nP,
            children: (0, s.jsx)(l.K0, {
                icon: l.TdU,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), o(n)
                }
            })
        }), [d, o] = a.useState(() => r);
        if (null != t.code) return (0, s.jsx)("div", {
            className: j.oP,
            children: (0, s.jsxs)("div", {
                className: j.t0,
                children: [(0, s.jsx)("div", {
                    className: j.cD,
                    children: (0, s.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), d, (0, s.jsx)(l.$nd, {
                    variant: "secondary",
                    size: "sm",
                    text: R.intl.formatToPlainString(R.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), c.default.track(g.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    P = e => {
        let {
            recurrence: t,
            canBeClaimed: n,
            hasClaimError: a,
            setCode: r,
            setHasClaimError: i,
            className: d,
            analyticsLocations: o = []
        } = e;
        return n ? a ? (0, s.jsx)("div", {
            className: d,
            children: (0, s.jsx)(l.$nd, {
                icon: l.EpV,
                variant: "critical-secondary",
                size: "sm",
                disabled: !0,
                text: R.intl.string(R.t["8LKchl"])
            })
        }) : (0, s.jsx)("div", {
            className: d,
            children: (0, s.jsx)(l.$nd, {
                icon: l.XAi,
                variant: "secondary",
                size: "sm",
                text: R.intl.string(R.t.vwASIl),
                onClick: () => {
                    (0, C.kd)({
                        promotionId: t.id,
                        analyticsLocations: o
                    }).then(e => {
                        r(e.code)
                    }).catch(e => {
                        i(!0), m.A.captureException(e)
                    })
                }
            })
        }) : null
    },
    y = e => {
        var t;
        let n, d, {
                recurrence: c,
                titleClassName: u,
                showPartnerLogo: m = !1,
                showPartnerImage: x = !1,
                titleVariant: C = "primary",
                displayCTAInDedicatedFooter: p = !1,
                analyticsLocations: f = []
            } = e,
            [b, v] = a.useState(c.code),
            [N, y] = a.useState(!1),
            w = (t = c.partnerId, n = (0, r.bG)([o.A], () => (0, l.Mwr)(o.A.theme)), null == (d = E[t]) ? null : n ? d.logos.dark : d.logos.light),
            T = null == b;
        return (0, s.jsxs)("div", {
            className: j.lA,
            children: [(0, s.jsxs)("div", {
                className: j.LV,
                children: [(0, s.jsxs)("div", {
                    className: j.JN,
                    children: [m && w, (0, s.jsxs)("div", {
                        className: null != u ? `${j.yO} ${u}` : j.yO,
                        children: [(0, s.jsx)(l.DZT, {
                            variant: "secondary" === C ? "heading-md/semibold" : "heading-lg/semibold",
                            color: "text-strong",
                            children: c.title
                        }), (0, s.jsx)(l.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: N ? R.intl.format(R.t.i2EuFO, {
                                helpdeskArticle: h.A.getArticleURL(g.MVz.RECURRING_PROMOTION)
                            }) : T ? c.body : null != c.bodyWithExpiration ? R.intl.format(c.bodyWithExpiration, {
                                date: c.endDate
                            }) : c.body
                        })]
                    }), !p && (0, s.jsx)(P, {
                        recurrence: c,
                        canBeClaimed: T,
                        hasClaimError: N,
                        setCode: v,
                        setHasClaimError: y,
                        analyticsLocations: f
                    })]
                }), x && (0, s.jsx)("div", {
                    className: j.R4,
                    children: (0, s.jsx)(i._V3, {
                        src: c.asset ?? "",
                        className: j.Ys,
                        imageClassName: c.partnerId === _.XY ? j.Cy : void 0,
                        width: 100,
                        height: 100,
                        zoomable: !1
                    })
                })]
            }), p && (0, s.jsx)(A, {}), null != b && (0, s.jsx)(I, {
                recurrence: {
                    ...c,
                    code: b
                }
            }), p && null == b && (0, s.jsx)(D, {
                children: (0, s.jsx)(P, {
                    recurrence: c,
                    canBeClaimed: T,
                    hasClaimError: N,
                    setCode: v,
                    setHasClaimError: y,
                    className: j.qx,
                    analyticsLocations: f
                })
            })]
        })
    }