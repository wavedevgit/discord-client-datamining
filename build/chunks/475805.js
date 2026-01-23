/** Chunk was on web.js **/
/** chunk id: 475805, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877624),
    l = n(311907),
    c = n(397927),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(560138),
    _ = n(526292),
    h = n(236834),
    m = n(549996),
    g = n(371764),
    E = n(65470),
    y = n(792656),
    b = n(939724),
    O = n(224850),
    v = n(552554),
    A = n(797255),
    I = n(103733),
    S = n(288351),
    T = n(160321),
    C = n(788868),
    N = n(985018),
    w = n(232285);
let R = (e, t) => {
        let {
            className: n,
            subscriptionTier: i,
            isEligibleForBogoPromotion: a,
            offerExpiresAt: R
        } = e, {
            analyticsLocations: P
        } = (0, f.Ay)(d.A.PREMIUM_MARKETING_HERO_CTA), D = (0, v.N)(), x = (0, h.A)(), L = null != x, j = (0, l.bG)([u.A], () => u.A.useReducedMotion), {
            visibilityPercentageRef: M,
            visibilityPercentage: k
        } = (0, I.U)(!j), U = (0, l.bG)([p.A], () => p.A.affinities), G = !L && U.length > 0, V = (0, m.c)(o.C.MARKETING_PAGE_BANNER), F = null != V && "marketingPageBanner" === V.properties.properties.oneofKind, B = (0, _.ar)() && !F;
        return (0, r.jsx)(f.f5, {
            value: P,
            children: (0, r.jsx)("div", {
                ref: t,
                className: s()(w.kL, null != R && w.VW, n),
                "data-testid": "marketing-page-hero-header",
                children: (0, r.jsx)("div", {
                    ref: M,
                    children: (0, r.jsxs)("div", {
                        className: w.hQ,
                        children: [(0, r.jsx)(T.A, {
                            containerVisibilityPercentage: k
                        }), B && (null != R ? (0, r.jsx)(b.A, {
                            expiresAt: R,
                            className: w.IZ
                        }) : (0, r.jsx)("div", {
                            className: w.XN,
                            children: (0, r.jsx)(S.A, {
                                enablePremiumBrandRefresh: !0
                            })
                        })), (0, r.jsx)("div", {
                            className: w.s8,
                            children: (0, r.jsx)(c.Heading, {
                                variant: "display-md",
                                color: "text-strong",
                                className: w.wx,
                                children: N.intl.string(N.t.YCZldK)
                            })
                        }), (0, r.jsxs)("div", {
                            className: w.rf,
                            children: [L && (0, r.jsx)("div", {
                                className: w.eZ,
                                children: (0, r.jsx)(A.A, {
                                    referrer: x,
                                    enablePremiumBrandRefresh: !0
                                })
                            }), G && (0, r.jsx)("div", {
                                className: w.Qn,
                                children: (0, r.jsx)(O.A, {
                                    textColor: "text-strong",
                                    smallerText: !1,
                                    isApplicationHome: !0,
                                    enablePremiumBrandRefresh: !0
                                })
                            }), (0, r.jsxs)("div", {
                                className: B ? w.es : w.UJ,
                                children: [(0, r.jsx)(y.A, {
                                    size: "md",
                                    fullWidth: B,
                                    hasActivePromotion: !!a,
                                    subscriptionTier: F ? C.pe.NONE : i,
                                    buttonTextOverride: F ? N.intl.string(N.t["2pG5Ga"]) : void 0
                                }), !B && (0, r.jsx)(E.A, {
                                    variant: "secondary",
                                    size: "md"
                                })]
                            }), (0, r.jsx)("div", {
                                className: w.iQ,
                                children: (0, r.jsx)(c.Text, {
                                    color: "text-muted",
                                    variant: "text-xs/medium",
                                    children: N.intl.format(N.t.kt9wxs, {
                                        cheapestMonthlyPrice: D
                                    })
                                })
                            }), null != V && "marketingPageBanner" === V.properties.properties.oneofKind && (0, r.jsx)(g.x, {
                                componentId: V.id,
                                promotionBannerMarketingComponentFields: V.properties.properties.marketingPageBanner
                            })]
                        })]
                    })
                })
            })
        })
    },
    P = i.memo(i.forwardRef(R))