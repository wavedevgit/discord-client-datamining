/** Chunk was on 5606 **/
/** chunk id: 753894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => T,
    KN: () => C,
    U9: () => j
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    p = n(953143),
    _ = n(560138),
    m = n(40185),
    g = n(526292),
    f = n(89366),
    b = n(194509),
    h = n(396375),
    A = n(224850),
    E = n(552554),
    x = n(985018),
    O = n(413515);
let C = e => {
        let {
            inOfferExperience: t,
            subscriptionTier: n,
            containerClassName: i,
            buttonClassName: l,
            isApplicationHome: a,
            isDarkMode: c,
            isEligibleForBogoPromotion: d
        } = e, u = d ? (0, r.jsx)(h.A, {
            color: c ? o.XD.BRAND_INVERTED : void 0,
            className: s()(O.x6, O.Ph, l, {
                [O.Sq]: t && a,
                [O.MF]: a && !c
            }),
            shinyButtonClassName: c ? void 0 : O.PJ,
            subscriptionTier: n,
            hasActivePromotion: !0
        }) : (0, r.jsx)(h.A, {
            color: c || !a ? o.XD.BRAND_INVERTED : void 0,
            className: s()(O.x6, O.Ph, l, {
                [O.Sq]: t && a,
                [O.MF]: a && !c
            }),
            subscriptionTier: n
        }), p = t && a ? null : (0, r.jsx)(b.A, {
            className: s()(O.x6, l),
            color: a ? void 0 : o.XD.WHITE
        });
        return (0, r.jsxs)("div", {
            className: s()(O.UD, i),
            children: [u, " ", p]
        })
    },
    y = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.p, {
            className: O.zd
        }), (0, r.jsx)(p.p, {
            className: O.G
        }), (0, r.jsx)(p.p, {
            className: O.zy
        }), (0, r.jsx)(p.p, {
            className: O.GX
        })]
    });

function j(e) {
    let {
        variant: t = "text-lg/normal",
        withBottomMargin: n = !0,
        isApplicationHome: i
    } = e, l = (0, E.N)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: s()(O.h_, {
            [O.If]: n,
            [O.jn]: i
        }),
        children: x.intl.format(x.t.kt9wxs, {
            cheapestMonthlyPrice: l
        })
    })
}
let T = i.forwardRef((e, t) => {
    let {
        className: n,
        buttonClassName: i,
        subscriptionTier: l,
        isDarkMode: p
    } = e, {
        analyticsLocations: h
    } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), E = (0, f.QQ)(), T = (0, g.ar)(), v = (0, m.cg)(), S = (0, a.bG)([_.A], () => _.A.affinities).length > 0, I = x.intl.string(x.t.YCZldK);
    return (0, r.jsx)(u.f5, {
        value: h,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: s()(O.kL, n, {
                [O.V1]: !T,
                [O.Q4]: !T && S
            }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [(0, r.jsxs)("div", {
                className: T ? O.I6 : O.G1,
                children: [(0, r.jsx)(c.Heading, {
                    variant: T ? "display-lg" : "display-md",
                    color: "always-white",
                    children: I
                }), S ? (0, r.jsx)("div", {
                    className: O.DF,
                    children: (0, r.jsx)(A.A, {
                        textColor: "always-white",
                        smallerText: !T
                    })
                }) : (0, r.jsx)(j, {}), v || E ? (0, r.jsx)("div", {
                    className: O.UD,
                    children: (0, r.jsx)(b.A, {
                        className: s()(O.x6, i),
                        color: o.XD.WHITE
                    })
                }) : (0, r.jsx)(C, {
                    subscriptionTier: l,
                    inOfferExperience: T,
                    buttonClassName: i,
                    isDarkMode: p
                }), S && (0, r.jsx)(j, {
                    variant: "text-md/normal",
                    withBottomMargin: !1
                })]
            }), !T && (0, r.jsx)(y, {})]
        })
    })
})