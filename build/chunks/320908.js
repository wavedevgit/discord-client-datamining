/** chunk id: 320908 params = (module,exports,require) **/
n.d(t, {
    Ay: () => I
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    _ = n(953143),
    m = n(560138),
    g = n(40185),
    A = n(526292),
    h = n(89366),
    x = n(194509),
    p = n(396375),
    T = n(224850),
    E = n(552554),
    C = n(985018),
    S = n(247560);
let f = e => {
        let {
            inOfferExperience: t,
            subscriptionTier: n,
            containerClassName: s,
            buttonClassName: l,
            isApplicationHome: a,
            isDarkMode: d,
            isEligibleForBogoPromotion: c
        } = e, u = c ? (0, i.jsx)(p.A, {
            color: d ? o.XD.BRAND_INVERTED : void 0,
            className: r()(S.x6, S.Ph, l, {
                [S.Sq]: t && a,
                [S.MF]: a && !d
            }),
            shinyButtonClassName: d ? void 0 : S.PJ,
            subscriptionTier: n,
            hasActivePromotion: !0
        }) : (0, i.jsx)(p.A, {
            color: d || !a ? o.XD.BRAND_INVERTED : void 0,
            className: r()(S.x6, S.Ph, l, {
                [S.Sq]: t && a,
                [S.MF]: a && !d
            }),
            subscriptionTier: n
        }), _ = t && a ? null : (0, i.jsx)(x.A, {
            className: r()(S.x6, l),
            color: a ? void 0 : o.XD.WHITE
        });
        return (0, i.jsxs)("div", {
            className: r()(S.UD, s),
            children: [u, " ", _]
        })
    },
    N = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.p, {
            className: S.zd
        }), (0, i.jsx)(_.p, {
            className: S.G
        }), (0, i.jsx)(_.p, {
            className: S.zy
        }), (0, i.jsx)(_.p, {
            className: S.GX
        })]
    });

function b(e) {
    let {
        variant: t = "text-lg/normal",
        withBottomMargin: n = !0,
        isApplicationHome: s
    } = e, l = (0, E.N)();
    return (0, i.jsx)(d.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: r()(S.h_, {
            [S.If]: n,
            [S.jn]: s
        }),
        children: C.intl.format(C.t.kt9wxs, {
            cheapestMonthlyPrice: l
        })
    })
}
let I = s.forwardRef((e, t) => {
    let {
        className: n,
        buttonClassName: s,
        subscriptionTier: l,
        isDarkMode: _
    } = e, {
        analyticsLocations: p
    } = (0, u.Ay)(c.A.PREMIUM_MARKETING_HERO_CTA), E = (0, h.QQ)(), I = (0, A.ar)(), v = (0, g.cg)(), j = (0, a.bG)([m.A], () => m.A.affinities).length > 0, O = C.intl.string(C.t.YCZldK);
    return (0, i.jsx)(u.f5, {
        value: p,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: r()(S.kL, n, {
                [S.V1]: !I,
                [S.Q4]: !I && j
            }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [(0, i.jsxs)("div", {
                className: I ? S.I6 : S.G1,
                children: [(0, i.jsx)(d.Heading, {
                    variant: I ? "display-lg" : "display-md",
                    color: "always-white",
                    children: O
                }), j ? (0, i.jsx)("div", {
                    className: S.DF,
                    children: (0, i.jsx)(T.A, {
                        textColor: "always-white",
                        smallerText: !I
                    })
                }) : (0, i.jsx)(b, {}), v || E ? (0, i.jsx)("div", {
                    className: S.UD,
                    children: (0, i.jsx)(x.A, {
                        className: r()(S.x6, s),
                        color: o.XD.WHITE
                    })
                }) : (0, i.jsx)(f, {
                    subscriptionTier: l,
                    inOfferExperience: I,
                    buttonClassName: s,
                    isDarkMode: _
                }), j && (0, i.jsx)(b, {
                    variant: "text-md/normal",
                    withBottomMargin: !1
                })]
            }), !I && (0, i.jsx)(N, {})]
        })
    })
})