/** chunk id: 320908 params = (module,exports,require) **/
n.d(t, {
    Ay: () => I
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    _ = n(953143),
    m = n(560138),
    g = n(40185),
    A = n(526292),
    x = n(89366),
    h = n(194509),
    p = n(396375),
    T = n(224850),
    E = n(552554),
    S = n(985018),
    f = n(986970);
let C = e => {
        let {
            inOfferExperience: t,
            subscriptionTier: n,
            containerClassName: s,
            buttonClassName: l,
            isApplicationHome: r,
            isDarkMode: d,
            isEligibleForBogoPromotion: c
        } = e, u = c ? (0, i.jsx)(p.A, {
            color: d ? o.XD.BRAND_INVERTED : void 0,
            className: a()(f.x6, f.Ph, l, {
                [f.Sq]: t && r,
                [f.MF]: r && !d
            }),
            shinyButtonClassName: d ? void 0 : f.PJ,
            subscriptionTier: n,
            hasActivePromotion: !0
        }) : (0, i.jsx)(p.A, {
            color: d || !r ? o.XD.BRAND_INVERTED : void 0,
            className: a()(f.x6, f.Ph, l, {
                [f.Sq]: t && r,
                [f.MF]: r && !d
            }),
            subscriptionTier: n
        }), _ = t && r ? null : (0, i.jsx)(h.A, {
            className: a()(f.x6, l),
            color: r ? void 0 : o.XD.WHITE
        });
        return (0, i.jsxs)("div", {
            className: a()(f.UD, s),
            children: [u, " ", _]
        })
    },
    b = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.p, {
            className: f.zd
        }), (0, i.jsx)(_.p, {
            className: f.G
        }), (0, i.jsx)(_.p, {
            className: f.zy
        }), (0, i.jsx)(_.p, {
            className: f.GX
        })]
    });

function N(e) {
    let {
        variant: t = "text-lg/normal",
        withBottomMargin: n = !0,
        isApplicationHome: s
    } = e, l = (0, E.N)();
    return (0, i.jsx)(d.Text, {
        variant: t,
        color: s ? "text-subtle" : "always-white",
        className: a()(f.h_, {
            [f.If]: n,
            [f.jn]: s
        }),
        children: S.intl.format(S.t.kt9wxs, {
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
    } = (0, u.Ay)(c.A.PREMIUM_MARKETING_HERO_CTA), E = (0, x.QQ)(), I = (0, A.ar)(), v = (0, g.cg)(), j = (0, r.bG)([m.A], () => m.A.affinities).length > 0, y = S.intl.string(S.t.YCZldK);
    return (0, i.jsx)(u.f5, {
        value: p,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: a()(f.kL, n, {
                [f.V1]: !I,
                [f.Q4]: !I && j
            }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [(0, i.jsxs)("div", {
                className: I ? f.I6 : f.G1,
                children: [(0, i.jsx)(d.Heading, {
                    variant: I ? "display-lg" : "display-md",
                    color: "always-white",
                    children: y
                }), j ? (0, i.jsx)("div", {
                    className: f.DF,
                    children: (0, i.jsx)(T.A, {
                        textColor: "always-white",
                        smallerText: !I
                    })
                }) : (0, i.jsx)(N, {}), v || E ? (0, i.jsx)("div", {
                    className: f.UD,
                    children: (0, i.jsx)(h.A, {
                        className: a()(f.x6, s),
                        color: o.XD.WHITE
                    })
                }) : (0, i.jsx)(C, {
                    subscriptionTier: l,
                    inOfferExperience: I,
                    buttonClassName: s,
                    isDarkMode: _
                }), j && (0, i.jsx)(N, {
                    variant: "text-md/normal",
                    withBottomMargin: !1
                })]
            }), !I && (0, i.jsx)(b, {})]
        })
    })
})