/** chunk id: 320908 params = (module,exports,require) **/
n.d(t, {
    Ay: () => N
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
    m = n(953143),
    g = n(560138),
    _ = n(40185),
    x = n(526292),
    h = n(89366),
    A = n(194509),
    p = n(396375),
    T = n(224850),
    f = n(552554),
    S = n(985018),
    E = n(360101);
let b = e => {
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
            className: r()(E.x6, E.Ph, l, {
                [E.Sq]: t && a,
                [E.MF]: a && !d
            }),
            shinyButtonClassName: d ? void 0 : E.PJ,
            subscriptionTier: n,
            hasActivePromotion: !0
        }) : (0, i.jsx)(p.A, {
            color: d || !a ? o.XD.BRAND_INVERTED : void 0,
            className: r()(E.x6, E.Ph, l, {
                [E.Sq]: t && a,
                [E.MF]: a && !d
            }),
            subscriptionTier: n
        }), m = t && a ? null : (0, i.jsx)(A.A, {
            className: r()(E.x6, l),
            color: a ? void 0 : o.XD.WHITE
        });
        return (0, i.jsxs)("div", {
            className: r()(E.UD, s),
            children: [u, " ", m]
        })
    },
    C = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.p, {
            className: E.zd
        }), (0, i.jsx)(m.p, {
            className: E.G
        }), (0, i.jsx)(m.p, {
            className: E.zy
        }), (0, i.jsx)(m.p, {
            className: E.GX
        })]
    });

function v(e) {
    let {
        variant: t = "text-lg/normal",
        withBottomMargin: n = !0,
        isApplicationHome: s
    } = e, l = (0, f.N)();
    return (0, i.jsx)(d.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: r()(E.h_, {
            [E.If]: n,
            [E.jn]: s
        }),
        children: S.intl.format(S.t.kt9wxs, {
            cheapestMonthlyPrice: l
        })
    })
}
let N = s.forwardRef((e, t) => {
    let {
        className: n,
        buttonClassName: s,
        subscriptionTier: l,
        isDarkMode: m
    } = e, {
        analyticsLocations: p
    } = (0, u.Ay)(c.A.PREMIUM_MARKETING_HERO_CTA), f = (0, h.QQ)(), N = (0, x.ar)(), I = (0, _.cg)(), j = (0, a.bG)([g.A], () => g.A.affinities).length > 0, y = S.intl.string(S.t.YCZldK);
    return (0, i.jsx)(u.f5, {
        value: p,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: r()(E.kL, n, {
                [E.V1]: !N,
                [E.Q4]: !N && j
            }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [(0, i.jsxs)("div", {
                className: N ? E.I6 : E.G1,
                children: [(0, i.jsx)(d.Heading, {
                    variant: N ? "display-lg" : "display-md",
                    color: "always-white",
                    children: y
                }), j ? (0, i.jsx)("div", {
                    className: E.DF,
                    children: (0, i.jsx)(T.A, {
                        textColor: "always-white",
                        smallerText: !N
                    })
                }) : (0, i.jsx)(v, {}), I || f ? (0, i.jsx)("div", {
                    className: E.UD,
                    children: (0, i.jsx)(A.A, {
                        className: r()(E.x6, s),
                        color: o.XD.WHITE
                    })
                }) : (0, i.jsx)(b, {
                    subscriptionTier: l,
                    inOfferExperience: N,
                    buttonClassName: s,
                    isDarkMode: m
                }), j && (0, i.jsx)(v, {
                    variant: "text-md/normal",
                    withBottomMargin: !1
                })]
            }), !N && (0, i.jsx)(C, {})]
        })
    })
})