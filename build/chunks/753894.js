/** Chunk was on web.js **/
/** chunk id: 753894, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => C,
    KN: () => A,
    U9: () => T
}), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(793574),
    d = n(688810),
    f = n(953143),
    p = n(560138),
    _ = n(40185),
    h = n(526292),
    m = n(89366),
    g = n(194509),
    E = n(396375),
    y = n(224850),
    b = n(552554),
    O = n(985018),
    v = n(413515);
let A = e => {
        let {
            inOfferExperience: t,
            subscriptionTier: n,
            containerClassName: i,
            buttonClassName: a,
            isApplicationHome: o,
            isDarkMode: c,
            isEligibleForBogoPromotion: u
        } = e, d = u ? (0, r.jsx)(E.A, {
            color: c ? l.XD.BRAND_INVERTED : void 0,
            className: s()(v.x6, v.Ph, a, {
                [v.Sq]: t && o,
                [v.MF]: o && !c
            }),
            shinyButtonClassName: c ? void 0 : v.PJ,
            subscriptionTier: n,
            hasActivePromotion: !0
        }) : (0, r.jsx)(E.A, {
            color: c || !o ? l.XD.BRAND_INVERTED : void 0,
            className: s()(v.x6, v.Ph, a, {
                [v.Sq]: t && o,
                [v.MF]: o && !c
            }),
            subscriptionTier: n
        }), f = t && o ? null : (0, r.jsx)(g.A, {
            className: s()(v.x6, a),
            color: o ? void 0 : l.XD.WHITE
        });
        return (0, r.jsxs)("div", {
            className: s()(v.UD, i),
            children: [d, " ", f]
        })
    },
    I = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.p, {
            className: v.zd
        }), (0, r.jsx)(f.p, {
            className: v.G
        }), (0, r.jsx)(f.p, {
            className: v.zy
        }), (0, r.jsx)(f.p, {
            className: v.GX
        })]
    }),
    S = (e, t) => {
        let {
            className: n,
            buttonClassName: i,
            subscriptionTier: a,
            isDarkMode: f
        } = e, {
            analyticsLocations: E
        } = (0, d.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), b = (0, m.QQ)(), S = (0, h.ar)(), C = (0, _.cg)(), N = (0, o.bG)([p.A], () => p.A.affinities).length > 0, w = O.intl.string(O.t.YCZldK);
        return (0, r.jsx)(d.f5, {
            value: E,
            children: (0, r.jsxs)("div", {
                ref: t,
                className: s()(v.kL, n, {
                    [v.V1]: !S,
                    [v.Q4]: !S && N
                }),
                "data-testid": "v2-marketing-page-hero-header",
                children: [(0, r.jsxs)("div", {
                    className: S ? v.I6 : v.G1,
                    children: [(0, r.jsx)(c.Heading, {
                        variant: S ? "display-lg" : "display-md",
                        color: "always-white",
                        children: w
                    }), N ? (0, r.jsx)("div", {
                        className: v.DF,
                        children: (0, r.jsx)(y.A, {
                            textColor: "always-white",
                            smallerText: !S
                        })
                    }) : (0, r.jsx)(T, {}), C || b ? (0, r.jsx)("div", {
                        className: v.UD,
                        children: (0, r.jsx)(g.A, {
                            className: s()(v.x6, i),
                            color: l.XD.WHITE
                        })
                    }) : (0, r.jsx)(A, {
                        subscriptionTier: a,
                        inOfferExperience: S,
                        buttonClassName: i,
                        isDarkMode: f
                    }), N && (0, r.jsx)(T, {
                        variant: "text-md/normal",
                        withBottomMargin: !1
                    })]
                }), !S && (0, r.jsx)(I, {})]
            })
        })
    };

function T(e) {
    let {
        variant: t = "text-lg/normal",
        withBottomMargin: n = !0,
        isApplicationHome: i
    } = e, a = (0, b.N)();
    return (0, r.jsx)(c.Text, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: s()(v.h_, {
            [v.If]: n,
            [v.jn]: i
        }),
        children: O.intl.format(O.t.kt9wxs, {
            cheapestMonthlyPrice: a
        })
    })
}
let C = i.forwardRef(S)