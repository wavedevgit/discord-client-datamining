/** chunk id: 116011 params = (module,exports,require) **/
n.d(t, {
    oL: () => E,
    wx: () => y
});
var s = n(627968),
    r = n(64700),
    a = n(158954),
    l = n(311907),
    i = n(397927),
    d = n(914410),
    o = n(544028),
    c = n(954571),
    u = n(405269),
    m = n(975571),
    h = n(728458),
    x = n(881373),
    C = n(264779),
    _ = n(852218),
    p = n(699443),
    g = n(652215),
    f = n(962995),
    R = n(985018),
    b = n(75662),
    j = n(870378),
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
                dark: (0, s.jsx)(r.Fragment, {}, "logitech-logo-dark"),
                light: (0, s.jsx)(r.Fragment, {}, "logitech-logo-light")
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
            asset: j.A
        }
    },
    A = () => {
        let e = (0, u.N5)(),
            t = (0, u.P6)();
        return (0, s.jsxs)("div", {
            className: `${b.G9} ${b.sQ}`,
            children: [(0, s.jsx)(a.EYj, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: b.kT,
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
            className: b.oP,
            children: (0, s.jsx)("div", {
                className: b.t0,
                children: t
            })
        })
    },
    P = e => {
        let {
            recurrence: t
        } = e, n = (0, s.jsx)(a.rOg, {
            color: i.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), l = (0, s.jsx)("span", {
            className: b.nP,
            children: (0, s.jsx)(a.K0, {
                icon: a.TdU,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), o(n)
                }
            })
        }), [d, o] = r.useState(() => l);
        if (null != t.code) return (0, s.jsx)("div", {
            className: b.oP,
            children: (0, s.jsxs)("div", {
                className: b.t0,
                children: [(0, s.jsx)("div", {
                    className: b.cD,
                    children: (0, s.jsx)(a.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), d, (0, s.jsx)(a.$nd, {
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
    I = e => {
        let {
            recurrence: t,
            canBeClaimed: n,
            hasClaimError: r,
            setCode: l,
            setHasClaimError: i,
            className: d,
            analyticsLocations: o = []
        } = e;
        return n ? r ? (0, s.jsx)("div", {
            className: d,
            children: (0, s.jsx)(a.$nd, {
                icon: a.EpV,
                variant: "critical-secondary",
                size: "sm",
                disabled: !0,
                text: R.intl.string(R.t["8LKchl"])
            })
        }) : (0, s.jsx)("div", {
            className: d,
            children: (0, s.jsx)(a.$nd, {
                icon: a.XAi,
                variant: "secondary",
                size: "sm",
                text: R.intl.string(R.t.vwASIl),
                onClick: () => {
                    (0, C.kd)({
                        promotionId: t.id,
                        analyticsLocations: o
                    }).then(e => {
                        l(e.code)
                    }).catch(e => {
                        i(!0), h.A.captureException(e)
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
                showPartnerLogo: h = !1,
                showPartnerImage: x = !1,
                titleVariant: C = "primary",
                displayCTAInDedicatedFooter: p = !1,
                analyticsLocations: f = []
            } = e,
            [j, v] = r.useState(c.code),
            [N, y] = r.useState(!1),
            T = (t = c.partnerId, n = (0, l.bG)([o.A], () => (0, a.Mwr)(o.A.theme)), null == (d = E[t]) ? null : n ? d.logos.dark : d.logos.light),
            w = null == j;
        return (0, s.jsxs)("div", {
            className: b.lA,
            children: [(0, s.jsxs)("div", {
                className: b.LV,
                children: [(0, s.jsxs)("div", {
                    className: b.JN,
                    children: [h && T, (0, s.jsxs)("div", {
                        className: null != u ? `${b.yO} ${u}` : b.yO,
                        children: [(0, s.jsx)(a.DZT, {
                            variant: "secondary" === C ? "heading-md/semibold" : "heading-lg/semibold",
                            color: "text-strong",
                            children: c.title
                        }), (0, s.jsx)(a.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: N ? R.intl.format(R.t.i2EuFO, {
                                helpdeskArticle: m.A.getArticleURL(g.MVz.RECURRING_PROMOTION)
                            }) : w ? c.body : null != c.bodyWithExpiration ? R.intl.format(c.bodyWithExpiration, {
                                date: c.endDate
                            }) : c.body
                        })]
                    }), !p && (0, s.jsx)(I, {
                        recurrence: c,
                        canBeClaimed: w,
                        hasClaimError: N,
                        setCode: v,
                        setHasClaimError: y,
                        analyticsLocations: f
                    })]
                }), x && (0, s.jsx)("div", {
                    className: b.R4,
                    children: (0, s.jsx)(i._V3, {
                        src: c.asset ?? "",
                        className: b.Ys,
                        imageClassName: c.partnerId === _.XY ? b.Cy : void 0,
                        width: 100,
                        height: 100,
                        zoomable: !1
                    })
                })]
            }), p && (0, s.jsx)(A, {}), null != j && (0, s.jsx)(P, {
                recurrence: {
                    ...c,
                    code: j
                }
            }), p && null == j && (0, s.jsx)(D, {
                children: (0, s.jsx)(I, {
                    recurrence: c,
                    canBeClaimed: w,
                    hasClaimError: N,
                    setCode: v,
                    setHasClaimError: y,
                    className: b.qx,
                    analyticsLocations: f
                })
            })]
        })
    }