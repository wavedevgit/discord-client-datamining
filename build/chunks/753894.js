/** chunk id: 753894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => I,
    KN: () => x,
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
    C = n(413515);
let x = e => {
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
            className: s()(C.x6, C.Ph, l, {
                [C.Sq]: t && a,
                [C.MF]: a && !c
            }),
            shinyButtonClassName: c ? void 0 : C.PJ,
            subscriptionTier: n,
            hasActivePromotion: !0
        }) : (0, r.jsx)(b.A, {
            color: c || !a ? o.XD.BRAND_INVERTED : void 0,
            className: s()(C.x6, C.Ph, l, {
                [C.Sq]: t && a,
                [C.MF]: a && !c
            }),
            subscriptionTier: n
        }), _ = t && a ? null : (0, r.jsx)(f.A, {
            className: s()(C.x6, l),
            color: a ? void 0 : o.XD.WHITE
        });
        return (0, r.jsxs)("div", {
            className: s()(C.UD, i),
            children: [u, " ", _]
        })
    },
    S = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.p, {
            className: C.zd
        }), (0, r.jsx)(_.p, {
            className: C.G
        }), (0, r.jsx)(_.p, {
            className: C.zy
        }), (0, r.jsx)(_.p, {
            className: C.GX
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
        className: s()(C.h_, {
            [C.If]: n,
            [C.jn]: i
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
    } = (0, u.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), E = (0, A.QQ)(), I = (0, g.ar)(), y = (0, m.cg)(), N = (0, a.bG)([p.A], () => p.A.affinities).length > 0, j = O.intl.string(O.t.YCZldK);
    return (0, r.jsx)(u.f5, {
        value: b,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: s()(C.kL, n, {
                [C.V1]: !I,
                [C.Q4]: !I && N
            }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [(0, r.jsxs)("div", {
                className: I ? C.I6 : C.G1,
                children: [(0, r.jsx)(c.Heading, {
                    variant: I ? "display-lg" : "display-md",
                    color: "always-white",
                    children: j
                }), N ? (0, r.jsx)("div", {
                    className: C.DF,
                    children: (0, r.jsx)(h.A, {
                        textColor: "always-white",
                        smallerText: !I
                    })
                }) : (0, r.jsx)(T, {}), y || E ? (0, r.jsx)("div", {
                    className: C.UD,
                    children: (0, r.jsx)(f.A, {
                        className: s()(C.x6, i),
                        color: o.XD.WHITE
                    })
                }) : (0, r.jsx)(x, {
                    subscriptionTier: l,
                    inOfferExperience: I,
                    buttonClassName: i,
                    isDarkMode: _
                }), N && (0, r.jsx)(T, {
                    variant: "text-md/normal",
                    withBottomMargin: !1
                })]
            }), !I && (0, r.jsx)(S, {})]
        })
    })
})