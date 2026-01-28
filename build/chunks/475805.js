/** Chunk was on 5606 **/
/** chunk id: 475805, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
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
    p = n(688810),
    _ = n(560138),
    m = n(526292),
    g = n(236834),
    f = n(549996),
    b = n(371764),
    h = n(65470),
    A = n(792656),
    E = n(939724),
    x = n(224850),
    O = n(552554),
    C = n(797255),
    y = n(103733),
    j = n(288351),
    T = n(160321),
    v = n(788868),
    S = n(985018),
    I = n(232285);
let N = i.memo(i.forwardRef((e, t) => {
    let {
        className: n,
        subscriptionTier: i,
        isEligibleForBogoPromotion: l,
        offerExpiresAt: N
    } = e, {
        analyticsLocations: P
    } = (0, p.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), R = (0, O.N)(), D = (0, g.A)(), w = null != D, L = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
        visibilityPercentageRef: M,
        visibilityPercentage: G
    } = (0, y.U)(!L), U = (0, o.bG)([_.A], () => _.A.affinities), k = !w && U.length > 0, H = (0, f.c)(a.C.MARKETING_PAGE_BANNER), B = null != H && "marketingPageBanner" === H.properties.properties.oneofKind, V = (0, m.ar)() && !B;
    return (0, r.jsx)(p.f5, {
        value: P,
        children: (0, r.jsx)("div", {
            ref: t,
            className: s()(I.kL, null != N && I.VW, n),
            "data-testid": "marketing-page-hero-header",
            children: (0, r.jsx)("div", {
                ref: M,
                children: (0, r.jsxs)("div", {
                    className: I.hQ,
                    children: [(0, r.jsx)(T.A, {
                        containerVisibilityPercentage: G
                    }), V && (null != N ? (0, r.jsx)(E.A, {
                        expiresAt: N,
                        className: I.IZ
                    }) : (0, r.jsx)("div", {
                        className: I.XN,
                        children: (0, r.jsx)(j.A, {
                            enablePremiumBrandRefresh: !0
                        })
                    })), (0, r.jsx)("div", {
                        className: I.s8,
                        children: (0, r.jsx)(c.Heading, {
                            variant: "display-md",
                            color: "text-strong",
                            className: I.wx,
                            children: S.intl.string(S.t.YCZldK)
                        })
                    }), (0, r.jsxs)("div", {
                        className: I.rf,
                        children: [w && (0, r.jsx)("div", {
                            className: I.eZ,
                            children: (0, r.jsx)(C.A, {
                                referrer: D,
                                enablePremiumBrandRefresh: !0
                            })
                        }), k && (0, r.jsx)("div", {
                            className: I.Qn,
                            children: (0, r.jsx)(x.A, {
                                textColor: "text-strong",
                                smallerText: !1,
                                isApplicationHome: !0,
                                enablePremiumBrandRefresh: !0
                            })
                        }), (0, r.jsxs)("div", {
                            className: V ? I.es : I.UJ,
                            children: [(0, r.jsx)(A.A, {
                                size: "md",
                                fullWidth: V,
                                hasActivePromotion: !!l,
                                subscriptionTier: B ? v.pe.NONE : i,
                                buttonTextOverride: B ? S.intl.string(S.t["2pG5Ga"]) : void 0
                            }), !V && (0, r.jsx)(h.A, {
                                variant: "secondary",
                                size: "md"
                            })]
                        }), (0, r.jsx)("div", {
                            className: I.iQ,
                            children: (0, r.jsx)(c.Text, {
                                color: "text-muted",
                                variant: "text-xs/medium",
                                children: S.intl.format(S.t.kt9wxs, {
                                    cheapestMonthlyPrice: R
                                })
                            })
                        }), null != H && "marketingPageBanner" === H.properties.properties.oneofKind && (0, r.jsx)(b.x, {
                            componentId: H.id,
                            promotionBannerMarketingComponentFields: H.properties.properties.marketingPageBanner
                        })]
                    })]
                })
            })
        })
    })
}))