/** chunk id: 475805, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(877624),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    p = n(560138),
    m = n(526292),
    g = n(236834),
    A = n(549996),
    f = n(371764),
    b = n(65470),
    h = n(792656),
    E = n(224850),
    O = n(552554),
    x = n(797255),
    C = n(103733),
    S = n(288351),
    T = n(160321),
    I = n(788868),
    N = n(985018),
    y = n(232285);
let j = i.memo(i.forwardRef((e, t) => {
    let {
        className: n,
        subscriptionTier: i,
        isEligibleForBogoPromotion: l
    } = e, {
        analyticsLocations: j
    } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), v = (0, O.N)(), P = (0, g.A)(), R = null != P, D = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
        visibilityPercentageRef: L,
        visibilityPercentage: w
    } = (0, C.U)(!D), M = (0, o.bG)([p.A], () => p.A.affinities), G = !R && M.length > 0, U = (0, A.c)(a.C.MARKETING_PAGE_BANNER), k = null != U && "marketingPageBanner" === U.properties.properties.oneofKind, B = (0, m.ar)() && !k;
    return (0, r.jsx)(_.f5, {
        value: j,
        children: (0, r.jsx)("div", {
            ref: t,
            className: s()(y.kL, n),
            "data-testid": "marketing-page-hero-header",
            children: (0, r.jsx)("div", {
                ref: L,
                children: (0, r.jsxs)("div", {
                    className: y.hQ,
                    children: [(0, r.jsx)(T.A, {
                        containerVisibilityPercentage: w
                    }), B && (0, r.jsx)("div", {
                        className: y.XN,
                        children: (0, r.jsx)(S.A, {
                            enablePremiumBrandRefresh: !0
                        })
                    }), (0, r.jsx)("div", {
                        className: y.s8,
                        children: (0, r.jsx)(c.Heading, {
                            variant: "display-md",
                            color: "text-strong",
                            className: y.wx,
                            children: N.intl.string(N.t.YCZldK)
                        })
                    }), (0, r.jsxs)("div", {
                        className: y.rf,
                        children: [R && (0, r.jsx)("div", {
                            className: y.eZ,
                            children: (0, r.jsx)(x.A, {
                                referrer: P,
                                enablePremiumBrandRefresh: !0
                            })
                        }), G && (0, r.jsx)("div", {
                            className: y.Qn,
                            children: (0, r.jsx)(E.A, {
                                textColor: "text-strong",
                                smallerText: !1,
                                isApplicationHome: !0,
                                enablePremiumBrandRefresh: !0
                            })
                        }), (0, r.jsxs)("div", {
                            className: B ? y.es : y.UJ,
                            children: [(0, r.jsx)(h.A, {
                                size: "md",
                                fullWidth: B,
                                hasActivePromotion: !!l,
                                subscriptionTier: k ? I.pe.NONE : i,
                                buttonTextOverride: k ? N.intl.string(N.t["2pG5Ga"]) : void 0
                            }), !B && (0, r.jsx)(b.A, {
                                variant: "secondary",
                                size: "md"
                            })]
                        }), (0, r.jsx)("div", {
                            className: y.iQ,
                            children: (0, r.jsx)(c.Text, {
                                color: "text-muted",
                                variant: "text-xs/medium",
                                children: N.intl.format(N.t.kt9wxs, {
                                    cheapestMonthlyPrice: v
                                })
                            })
                        }), null != U && "marketingPageBanner" === U.properties.properties.oneofKind && (0, r.jsx)(f.x, {
                            componentId: U.id,
                            promotionBannerMarketingComponentFields: U.properties.properties.marketingPageBanner
                        })]
                    })]
                })
            })
        })
    })
}))