/** chunk id: 753894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => I,
    KN: () => C,
    U9: () => T
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
    _ = n(953143),
    p = n(560138),
    m = n(40185),
    g = n(526292),
    A = n(89366),
    f = n(194509),
    b = n(396375),
    h = n(224850),
    E = n(552554),
    O = n(985018),
    x = n(413515);
let C = e => {
        let {
            inOfferExperience: t,
            subscriptionTier: n,
            containerClassName: i,
            buttonClassName: l,
            isApplicationHome: a,
            isDarkMode: c,
            isEligibleForBogoPromotion: d
        } = e, u = d ? (0, r.jsx)(b.A, {
            color: c ? o.XD.BRAND_INVERTED : void 0,
            className: s()(x.x6, x.Ph, l, {
                [x.Sq]: t && a,
                [x.MF]: a && !c
            }),
            shinyButtonClassName: c ? void 0 : x.PJ,
            subscriptionTier: n,
            hasActivePromotion: !0
        }) : (0, r.jsx)(b.A, {
            color: c || !a ? o.XD.BRAND_INVERTED : void 0,
            className: s()(x.x6, x.Ph, l, {
                [x.Sq]: t && a,
                [x.MF]: a && !c
            }),
            subscriptionTier: n
        }), _ = t && a ? null : (0, r.jsx)(f.A, {
            className: s()(x.x6, l),
            color: a ? void 0 : o.XD.WHITE
        });
        return (0, r.jsxs)("div", {
            className: s()(x.UD, i),
            children: [u, " ", _]
        })
    },
    S = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.p, {
            className: x.zd
        }), (0, r.jsx)(_.p, {
            className: x.G
        }), (0, r.jsx)(_.p, {
            className: x.zy
        }), (0, r.jsx)(_.p, {
            className: x.GX
        })]
    });

function T(e) {
    let {
        variant: t = "text-lg/normal",
        withBottomMargin: n = !0,
        isApplicationHome: i
    } = e, l = (0, E.N)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: s()(x.h_, {
            [x.If]: n,
            [x.jn]: i
        }),
        children: O.intl.format(O.t.kt9wxs, {
            cheapestMonthlyPrice: l
        })
    })
}
let I = i.forwardRef((e, t) => {
    let {
        className: n,
        buttonClassName: i,
        subscriptionTier: l,
        isDarkMode: _
    } = e, {
        analyticsLocations: b
    } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), E = (0, A.QQ)(), I = (0, g.ar)(), N = (0, m.cg)(), j = (0, a.bG)([p.A], () => p.A.affinities).length > 0, y = O.intl.string(O.t.YCZldK);
    return (0, r.jsx)(u.f5, {
        value: b,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: s()(x.kL, n, {
                [x.V1]: !I,
                [x.Q4]: !I && j
            }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [(0, r.jsxs)("div", {
                className: I ? x.I6 : x.G1,
                children: [(0, r.jsx)(c.Heading, {
                    variant: I ? "display-lg" : "display-md",
                    color: "always-white",
                    children: y
                }), j ? (0, r.jsx)("div", {
                    className: x.DF,
                    children: (0, r.jsx)(h.A, {
                        textColor: "always-white",
                        smallerText: !I
                    })
                }) : (0, r.jsx)(T, {}), N || E ? (0, r.jsx)("div", {
                    className: x.UD,
                    children: (0, r.jsx)(f.A, {
                        className: s()(x.x6, i),
                        color: o.XD.WHITE
                    })
                }) : (0, r.jsx)(C, {
                    subscriptionTier: l,
                    inOfferExperience: I,
                    buttonClassName: i,
                    isDarkMode: _
                }), j && (0, r.jsx)(T, {
                    variant: "text-md/normal",
                    withBottomMargin: !1
                })]
            }), !I && (0, r.jsx)(S, {})]
        })
    })
})