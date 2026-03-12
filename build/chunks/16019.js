/** chunk id: 16019 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(877624),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    g = n(560138),
    A = n(526292),
    m = n(236834),
    h = n(549996),
    p = n(371764),
    x = n(65470),
    E = n(792656),
    T = n(224850),
    S = n(552554),
    C = n(797255),
    I = n(288351),
    f = n(103733),
    N = n(326180),
    b = n(788868),
    v = n(985018),
    O = n(366797);
let j = s.memo(s.forwardRef((e, t) => {
    let {
        className: n,
        subscriptionTier: s,
        isEligibleForBogoPromotion: l
    } = e, {
        analyticsLocations: j
    } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), R = (0, S.N)(), y = (0, m.A)(), P = null != y, D = (0, o.bG)([c.A], () => c.A.useReducedMotion), {
        visibilityPercentageRef: L,
        visibilityPercentage: G
    } = (0, f.U)(!D), M = (0, o.bG)([g.A], () => g.A.affinities), U = !P && M.length > 0, k = (0, h.c)(r.C.MARKETING_PAGE_BANNER), V = null != k && "marketingPageBanner" === k.properties.properties.oneofKind, w = (0, A.ar)() && !V;
    return (0, i.jsx)(_.f5, {
        value: j,
        children: (0, i.jsx)("div", {
            ref: t,
            className: a()(O.kL, n),
            "data-testid": "marketing-page-hero-header",
            children: (0, i.jsx)("div", {
                ref: L,
                children: (0, i.jsxs)("div", {
                    className: O.hQ,
                    children: [(0, i.jsx)(N.A, {
                        containerVisibilityPercentage: G
                    }), w && (0, i.jsx)("div", {
                        className: O.XN,
                        children: (0, i.jsx)(I.A, {
                            enablePremiumBrandRefresh: !0
                        })
                    }), (0, i.jsx)("div", {
                        className: O.s8,
                        children: (0, i.jsx)(d.Heading, {
                            variant: "display-md",
                            color: "text-strong",
                            className: O.wx,
                            children: v.intl.string(v.t.YCZldK)
                        })
                    }), (0, i.jsxs)("div", {
                        className: O.rf,
                        children: [P && (0, i.jsx)("div", {
                            className: O.eZ,
                            children: (0, i.jsx)(C.A, {
                                referrer: y,
                                enablePremiumBrandRefresh: !0
                            })
                        }), U && (0, i.jsx)("div", {
                            className: O.Qn,
                            children: (0, i.jsx)(T.A, {
                                textColor: "text-strong",
                                smallerText: !1,
                                isApplicationHome: !0,
                                enablePremiumBrandRefresh: !0
                            })
                        }), (0, i.jsxs)("div", {
                            className: w ? O.es : O.UJ,
                            children: [(0, i.jsx)(E.A, {
                                size: "md",
                                fullWidth: w,
                                hasActivePromotion: !!l,
                                subscriptionTier: V ? b.pe.NONE : s,
                                buttonTextOverride: V ? v.intl.string(v.t["2pG5Ga"]) : void 0
                            }), !w && (0, i.jsx)(x.A, {
                                variant: "secondary",
                                size: "md"
                            })]
                        }), (0, i.jsx)("div", {
                            className: O.iQ,
                            children: (0, i.jsx)(d.Text, {
                                color: "text-muted",
                                variant: "text-xs/medium",
                                children: v.intl.format(v.t.kt9wxs, {
                                    cheapestMonthlyPrice: R
                                })
                            })
                        }), null != k && "marketingPageBanner" === k.properties.properties.oneofKind && (0, i.jsx)(p.x, {
                            componentId: k.id,
                            promotionBannerMarketingComponentFields: k.properties.properties.marketingPageBanner
                        })]
                    })]
                })
            })
        })
    })
}))