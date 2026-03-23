/** chunk id: 16019 params = (module,exports,require) **/
n.d(t, {
    A: () => y
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
    m = n(688810),
    _ = n(560138),
    g = n(526292),
    A = n(236834),
    x = n(549996),
    p = n(371764),
    h = n(65470),
    T = n(792656),
    E = n(224850),
    f = n(552554),
    S = n(797255),
    C = n(288351),
    b = n(103733),
    N = n(326180),
    I = n(788868),
    v = n(985018),
    j = n(136423);
let y = s.memo(s.forwardRef((e, t) => {
    let {
        className: n,
        subscriptionTier: s,
        isEligibleForBogoPromotion: l
    } = e, {
        analyticsLocations: y
    } = (0, m.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), O = (0, f.N)(), R = (0, A.A)(), L = null != R, P = (0, o.bG)([c.A], () => c.A.useReducedMotion), {
        visibilityPercentageRef: D,
        visibilityPercentage: M
    } = (0, b.U)(!P), G = (0, o.bG)([_.A], () => _.A.affinities), k = !L && G.length > 0, U = (0, x.c)(r.C.MARKETING_PAGE_BANNER), w = null != U && "marketingPageBanner" === U.properties.properties.oneofKind, V = (0, g.ar)() && !w;
    return (0, i.jsx)(m.f5, {
        value: y,
        children: (0, i.jsx)("div", {
            ref: t,
            className: a()(j.kL, n),
            "data-testid": "marketing-page-hero-header",
            children: (0, i.jsx)("div", {
                ref: D,
                children: (0, i.jsxs)("div", {
                    className: j.hQ,
                    children: [(0, i.jsx)(N.A, {
                        containerVisibilityPercentage: M
                    }), V && (0, i.jsx)("div", {
                        className: j.XN,
                        children: (0, i.jsx)(C.A, {
                            enablePremiumBrandRefresh: !0
                        })
                    }), (0, i.jsx)("div", {
                        className: j.s8,
                        children: (0, i.jsx)(d.Heading, {
                            variant: "display-md",
                            color: "text-strong",
                            className: j.wx,
                            children: v.intl.string(v.t.YCZldK)
                        })
                    }), (0, i.jsxs)("div", {
                        className: j.rf,
                        children: [L && (0, i.jsx)("div", {
                            className: j.eZ,
                            children: (0, i.jsx)(S.A, {
                                referrer: R,
                                enablePremiumBrandRefresh: !0
                            })
                        }), k && (0, i.jsx)("div", {
                            className: j.Qn,
                            children: (0, i.jsx)(E.A, {
                                textColor: "text-strong",
                                smallerText: !1,
                                isApplicationHome: !0,
                                enablePremiumBrandRefresh: !0
                            })
                        }), (0, i.jsxs)("div", {
                            className: V ? j.es : j.UJ,
                            children: [(0, i.jsx)(T.A, {
                                size: "md",
                                fullWidth: V,
                                hasActivePromotion: !!l,
                                subscriptionTier: w ? I.pe.NONE : s,
                                buttonTextOverride: w ? v.intl.string(v.t["2pG5Ga"]) : void 0
                            }), !V && (0, i.jsx)(h.A, {
                                variant: "secondary",
                                size: "md"
                            })]
                        }), (0, i.jsx)("div", {
                            className: j.iQ,
                            children: (0, i.jsx)(d.Text, {
                                color: "text-muted",
                                variant: "text-xs/medium",
                                children: v.intl.format(v.t.kt9wxs, {
                                    cheapestMonthlyPrice: O
                                })
                            })
                        }), null != U && "marketingPageBanner" === U.properties.properties.oneofKind && (0, i.jsx)(p.x, {
                            componentId: U.id,
                            promotionBannerMarketingComponentFields: U.properties.properties.marketingPageBanner
                        })]
                    })]
                })
            })
        })
    })
}))