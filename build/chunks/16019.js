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
    _ = n(688810),
    m = n(560138),
    g = n(526292),
    A = n(236834),
    x = n(549996),
    h = n(371764),
    p = n(65470),
    T = n(792656),
    E = n(224850),
    S = n(552554),
    f = n(797255),
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
    } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), R = (0, S.N)(), O = (0, A.A)(), D = null != O, P = (0, o.bG)([c.A], () => c.A.useReducedMotion), {
        visibilityPercentageRef: L,
        visibilityPercentage: G
    } = (0, b.U)(!P), M = (0, o.bG)([m.A], () => m.A.affinities), U = !D && M.length > 0, k = (0, x.c)(r.C.MARKETING_PAGE_BANNER), V = null != k && "marketingPageBanner" === k.properties.properties.oneofKind, w = (0, g.ar)() && !V;
    return (0, i.jsx)(_.f5, {
        value: y,
        children: (0, i.jsx)("div", {
            ref: t,
            className: a()(j.kL, n),
            "data-testid": "marketing-page-hero-header",
            children: (0, i.jsx)("div", {
                ref: L,
                children: (0, i.jsxs)("div", {
                    className: j.hQ,
                    children: [(0, i.jsx)(N.A, {
                        containerVisibilityPercentage: G
                    }), w && (0, i.jsx)("div", {
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
                        children: [D && (0, i.jsx)("div", {
                            className: j.eZ,
                            children: (0, i.jsx)(f.A, {
                                referrer: O,
                                enablePremiumBrandRefresh: !0
                            })
                        }), U && (0, i.jsx)("div", {
                            className: j.Qn,
                            children: (0, i.jsx)(E.A, {
                                textColor: "text-strong",
                                smallerText: !1,
                                isApplicationHome: !0,
                                enablePremiumBrandRefresh: !0
                            })
                        }), (0, i.jsxs)("div", {
                            className: w ? j.es : j.UJ,
                            children: [(0, i.jsx)(T.A, {
                                size: "md",
                                fullWidth: w,
                                hasActivePromotion: !!l,
                                subscriptionTier: V ? I.pe.NONE : s,
                                buttonTextOverride: V ? v.intl.string(v.t["2pG5Ga"]) : void 0
                            }), !w && (0, i.jsx)(p.A, {
                                variant: "secondary",
                                size: "md"
                            })]
                        }), (0, i.jsx)("div", {
                            className: j.iQ,
                            children: (0, i.jsx)(d.Text, {
                                color: "text-muted",
                                variant: "text-xs/medium",
                                children: v.intl.format(v.t.kt9wxs, {
                                    cheapestMonthlyPrice: R
                                })
                            })
                        }), null != k && "marketingPageBanner" === k.properties.properties.oneofKind && (0, i.jsx)(h.x, {
                            componentId: k.id,
                            promotionBannerMarketingComponentFields: k.properties.properties.marketingPageBanner
                        })]
                    })]
                })
            })
        })
    })
}))