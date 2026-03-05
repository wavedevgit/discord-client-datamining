/** chunk id: 501007, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Lg: () => W,
    NB: () => ei,
    Nz: () => q,
    ZP: () => Q,
    jP: () => et,
    nH: () => J,
    pw: () => ee
});
var r, n = i(627968);
i(64700);
var a = i(503698),
    s = i.n(a),
    l = i(311907),
    o = i(582754),
    c = i(397927),
    d = i(736653),
    m = i(793574),
    u = i(688810),
    C = i(953143),
    x = i(773669),
    T = i(287809),
    p = i(166403),
    g = i(224016),
    I = i(217392),
    _ = i(60490),
    h = i(560138),
    f = i(40185),
    A = i(526292),
    N = i(552736),
    j = i(1878),
    E = i(422936),
    R = i(234419),
    v = i(396375),
    P = i(511484),
    L = i(231265),
    M = i(795269),
    S = i(349563),
    b = i(90526),
    y = i(300542),
    U = i(4382),
    G = i(284951),
    H = i(788868),
    O = i(838541),
    D = i(518582),
    w = i(985018),
    F = i(235889),
    V = i(443137),
    k = i(122402),
    K = i(793481),
    B = i(497451);

function Z(e) {
    let {
        Icon: t,
        text: i,
        isNew: r = !1,
        className: a,
        textVariant: l,
        isApplicationHome: o,
        enablePremiumBrandRefresh: d
    } = e;
    return (0, n.jsxs)("div", {
        className: s()(a, {
            [F.featureItem]: d,
            [F.featureItemApplicationHome]: d && o
        }),
        children: [(0, n.jsx)(t, {
            className: d ? V.hi : V.Kk,
            color: "currentColor"
        }), (0, n.jsx)(c.Text, {
            variant: l ?? "text-md/normal",
            color: d || o ? "currentColor" : "always-white",
            children: i
        }), r ? (0, n.jsx)(C.A, {
            className: V.OC,
            forceUseColorForSparkles: !0,
            shouldInheritBackgroundColor: !0,
            shouldInheritTextColor: !0
        }) : null]
    })
}

function W(e) {
    let {
        isApplicationHome: t
    } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [t && (0, n.jsx)(c.Text, {
            variant: "text-sm/bold",
            className: F.tier2ApplicationHomeSubheader,
            children: w.intl.string(D.default.ItfIa5)
        }), U.PV.map((e, i) => {
            let {
                Icon: r,
                getText: a
            } = e;
            return (0, n.jsx)(Z, {
                Icon: r,
                text: a(),
                enablePremiumBrandRefresh: !0,
                isApplicationHome: t
            }, i)
        })]
    })
}

function J(e) {
    let {
        isApplicationHome: t,
        enablePremiumBrandRefresh: i
    } = e, r = t && !i ? G.I4 : G.fB;
    return (0, n.jsx)(n.Fragment, {
        children: r.map((e, r) => {
            let {
                Icon: a,
                getText: s
            } = e;
            return (0, n.jsx)(Z, {
                Icon: a,
                text: s(),
                className: t && !i ? V.dT : V.HW,
                textVariant: t && !i ? "text-sm/normal" : void 0,
                enablePremiumBrandRefresh: i,
                isApplicationHome: t
            }, r)
        })
    })
}

function z(e) {
    let {
        ctaButton: t,
        showYearlyPrice: i,
        className: r,
        isGift: a = !1,
        priceOptions: o
    } = e, c = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()), d = (0, R.V)(), m = d?.subscription_trial?.sku_id, u = !!c?.hasActiveTrial, C = null != m || u;
    return (0, n.jsxs)("div", {
        className: s()(V.Vd, V.Nr, V.g1, r, {
            [V.vt]: !a && C,
            [V.lr]: !a && C
        }),
        children: [(0, n.jsx)("img", {
            src: k,
            className: V.ci,
            alt: ""
        }), (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("div", {
                children: [(0, n.jsx)(_.A, {
                    className: s()(V.DD, V.o6)
                }), (0, n.jsx)(b.A, {
                    isGift: a,
                    premiumTier: H.PremiumTypes.TIER_0,
                    offerType: H.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: m === H.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: o,
                    textVariant: "heading-xl/normal",
                    isApplicationHome: !0,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, n.jsx)("div", {
                children: (0, n.jsx)(J, {
                    isApplicationHome: !0
                })
            })]
        }), t]
    })
}

function Y(e) {
    let {
        showWumpus: t,
        ctaButton: i,
        showYearlyPrice: r,
        className: a,
        isGift: o = !1,
        priceOptions: d
    } = e, m = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()), u = (0, l.bG)([T.default], () => T.default.getCurrentUser()), C = (0, R.V)(), x = C?.subscription_trial?.sku_id, g = !!m?.hasActiveTrial, _ = g ? u?.premiumType : null, h = null != x || g, f = (0, M.Lj)(_, x);
    return (0, n.jsxs)("div", {
        className: s()(V.Vd, V.Nr, a, {
            [V.vt]: !o && h,
            [V.lr]: !o && h
        }),
        children: [!o && null != f && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(M.R, {
                text: f,
                className: V.LW,
                colorOptions: M.at.PREMIUM_TIER_0_WHITE_FILL
            }), (0, n.jsx)("div", {
                className: V.o4
            })]
        }), t ? (0, n.jsx)("div", {
            className: V.wp,
            children: (0, n.jsx)(c._V3, {
                src: K,
                mediaLayoutType: O.dG.RESPONSIVE,
                width: 270,
                height: 242,
                zoomable: !1,
                imageClassName: V.Fm
            })
        }) : null, (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("div", {
                children: [(0, n.jsx)(I.A, {
                    className: s()(V.DD, V.ZD)
                }), (0, n.jsx)(b.A, {
                    isGift: o,
                    premiumTier: H.PremiumTypes.TIER_0,
                    offerType: H.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: x === H.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: d,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, n.jsx)("div", {
                children: (0, n.jsx)(J, {})
            })]
        }), o || x !== H.pe.TIER_0 ? null : (0, n.jsx)(S.Wy, {
            tier: H.PremiumTypes.TIER_0
        }), i]
    })
}
var q = ((r = {})[r.DEFAULT = 0] = "DEFAULT", r[r.BOOSTING = 1] = "BOOSTING", r[r.FRACTIONAL_PREMIUM = 2] = "FRACTIONAL_PREMIUM", r[r.APPLICATION_HOME = 3] = "APPLICATION_HOME", r[r.PREMIUM_GROUP_PRIMARY = 4] = "PREMIUM_GROUP_PRIMARY", r[r.PREMIUM_GROUP_MEMBER = 5] = "PREMIUM_GROUP_MEMBER", r);

function Q(e) {
    let {
        featureSet: t = 0,
        isModal: i = !1,
        isGift: r = !1,
        enablePremiumBrandRefresh: a = !1,
        isApplicationHome: o = !1,
        firstFeatureItemClassName: d
    } = e, m = (0, l.bG)([x.default], () => x.default.locale), u = (0, l.bG)([h.A], () => h.A.affinities), C = !a && i && !r && u.length > 0, T = 3 === t || 0 === t && a && o, p = (() => {
        switch (t) {
            case 3:
                return G.z9;
            case 1:
                return G.ku;
            case 2:
                return G.Qi;
            case 4:
                return U.ro;
            case 5:
                return U.xs;
            default:
                return G.Oc
        }
    })();
    return (0, n.jsxs)(n.Fragment, {
        children: [T && (0, n.jsx)(c.Text, {
            variant: "text-sm/bold",
            className: a ? F.tier2ApplicationHomeSubheader : V.RQ,
            children: w.intl.string(w.t.AozD3Q)
        }), p.map((e, i) => {
            let {
                Icon: r,
                getText: l
            } = e;
            return (0, n.jsx)(Z, {
                Icon: r,
                text: l(m),
                className: s()(3 === t ? V.dT : V.HW, 0 === i ? d : void 0),
                textVariant: 3 === t ? "text-sm/normal" : void 0,
                isApplicationHome: o,
                enablePremiumBrandRefresh: a
            }, i)
        }), C && (3 === t || 0 === t) && (0, n.jsx)(y.A, {})]
    })
}

function $(e) {
    let {
        ctaButton: t,
        showYearlyPrice: i,
        featureSet: r = 0,
        className: a,
        isGift: l = !1,
        isModal: o = !1,
        priceOptions: d,
        showPromotionalGiftBanner: m = !1
    } = e, u = (0, R.V)(), C = u?.subscription_trial?.sku_id, x = (0, A.ar)(), T = (0, E.O)(), p = null != u ? H.Vk.PREMIUM_TRIAL : null != T ? H.Vk.PREMIUM_DISCOUNT : null, I = (0, f.cg)(), _ = !l && x, h = (0, N.A)()?.planSelection, v = h?.getBackgroundImageUrl?.(), M = h?.getCardImageUrl?.(), S = (0, L._)();
    return (0, n.jsxs)("div", {
        className: s()(V.Nr, V.hA, V.aD, a, {
            [V.J5]: _,
            [V.lr]: _,
            [V.jx]: m,
            [V.ud]: m && null != M
        }),
        children: [m && null != M && (0, n.jsx)("img", {
            className: V.Cr,
            alt: "",
            src: M
        }), m && null != v && (0, n.jsx)("img", {
            className: V.gx,
            alt: "",
            src: v
        }), (0, n.jsx)("div", {
            className: V.S9
        }), (0, n.jsx)("img", {
            src: k,
            className: V.ci,
            alt: ""
        }), (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("div", {
                children: [(0, n.jsx)(g.A, {
                    className: s()(V.DD, V.cB)
                }), !l && C !== H.pe.TIER_2 && I && (0, n.jsx)("div", {
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-xs/bold",
                        className: V.zu,
                        children: S
                    })
                }), (0, n.jsx)(b.A, {
                    isGift: l,
                    premiumTier: H.PremiumTypes.TIER_2,
                    offerType: p,
                    offerTierMatchesCard: C === H.pe.TIER_2 || (0, P.U9)(T, H.pe.TIER_2),
                    showYearlyPrice: i,
                    priceOptions: d,
                    textVariant: "heading-xl/normal",
                    isApplicationHome: !0,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, n.jsx)("div", {
                children: (0, n.jsx)(Q, {
                    featureSet: r,
                    isModal: o,
                    isGift: l,
                    isApplicationHome: !0
                })
            })]
        }), t, m && (0, n.jsx)(j.K, {})]
    })
}

function X(e) {
    let {
        showWumpus: t,
        ctaButton: i,
        showYearlyPrice: r,
        featureSet: a = 0,
        className: m,
        isGift: u = !1,
        isModal: C = !1,
        priceOptions: x,
        showPromotionalGiftBanner: I = !1
    } = e, _ = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()), h = (0, l.bG)([T.default], () => T.default.getCurrentUser()), v = (0, R.V)(), y = v?.subscription_trial?.sku_id, U = _?.hasActiveTrial ? h?.premiumType : null, G = (0, A.ar)(), D = (0, E.O)(), w = (0, A.k5)(), F = null != y || null != U ? H.Vk.PREMIUM_TRIAL : null != D || w ? H.Vk.PREMIUM_DISCOUNT : null, k = (0, f.cg)(), K = !u && G, Z = (0, N.A)()?.planSelection, W = Z?.getBackgroundImageUrl?.(), J = Z?.getCardImageUrl?.(), z = (0, L._)(), Y = (0, o.qB)((0, d.Ay)()), q = Y ? M.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : M.at.PREMIUM_TIER_2_WHITE_FILL, $ = (0, M.rm)(w, U, D, v, y), X = K && !Y ? V.on : void 0;
    return (0, n.jsxs)("div", {
        className: s()(V.Nr, V.hA, m, {
            [V.J5]: K,
            [V.lr]: K,
            [V.jx]: I,
            [V.ud]: I && null != J
        }),
        children: [I && null !== J && (0, n.jsx)("img", {
            className: V.Cr,
            alt: "",
            src: J
        }), I && null !== W && (0, n.jsx)("img", {
            className: V.gx,
            alt: "",
            src: W
        }), !u && null != $ && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(M.R, {
                text: $,
                className: V.LW,
                colorOptions: q
            }), (0, n.jsx)("div", {
                className: X
            })]
        }), t ? (0, n.jsx)("div", {
            className: V.wp,
            children: (0, n.jsx)(c._V3, {
                src: B,
                mediaLayoutType: O.dG.RESPONSIVE,
                width: 270,
                height: 242,
                zoomable: !1,
                imageClassName: V.Fm
            })
        }) : null, (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("div", {
                children: [(0, n.jsx)(g.A, {
                    className: s()(V.DD, V.$l)
                }), !u && y !== H.pe.TIER_2 && k && (0, n.jsx)("div", {
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-xs/bold",
                        className: V.zu,
                        children: z
                    })
                }), (0, n.jsx)(b.A, {
                    isGift: u,
                    premiumTier: H.PremiumTypes.TIER_2,
                    offerType: F,
                    offerTierMatchesCard: y === H.pe.TIER_2 || (0, P.U9)(D, H.pe.TIER_2),
                    showYearlyPrice: r,
                    priceOptions: x,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, n.jsx)("div", {
                children: (0, n.jsx)(Q, {
                    featureSet: a,
                    isModal: C,
                    isGift: u
                })
            })]
        }), u || y !== H.pe.TIER_2 && null == D ? null : (0, n.jsx)(S.Wy, {
            tier: H.PremiumTypes.TIER_2
        }), i, I && (0, n.jsx)(j.K, {})]
    })
}
let ee = e => t => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t))
};

function et(e) {
    let {
        innerRef: t,
        hasActiveTier2PremiumPromotion: i,
        className: r
    } = e, {
        analyticsLocations: a
    } = (0, u.Ay)(m.A.PREMIUM_MARKETING_TIER_CARD), l = ee(t), o = (0, n.jsx)(v.A, {
        color: void 0,
        showIcon: !1,
        subscriptionTier: H.pe.TIER_0,
        className: V.Ph,
        textOptions: {
            textClassName: V.uz
        },
        buttonShineClassName: V.Qr
    }), d = (0, n.jsx)(v.A, {
        color: void 0,
        showIcon: !1,
        subscriptionTier: H.pe.TIER_2,
        className: V.Ph,
        hasActivePromotion: i,
        textOptions: {
            textClassName: V.uz
        },
        buttonShineClassName: V.Qr
    });
    return (0, n.jsxs)(u.f5, {
        value: a,
        children: [(0, n.jsx)(c.Heading, {
            ref: l,
            className: V.CV,
            variant: "display-md",
            color: "text-strong",
            children: w.intl.string(w.t.vLz3Zs)
        }), (0, n.jsxs)("div", {
            ref: l,
            className: s()(V.Zo, r),
            children: [(0, n.jsx)(z, {
                ctaButton: o
            }), (0, n.jsx)($, {
                ctaButton: d,
                featureSet: 3
            })]
        })]
    })
}

function ei(e) {
    let {
        innerRef: t,
        className: i,
        tier0CTAButton: r,
        tier2CTAButton: a
    } = e, {
        analyticsLocations: l
    } = (0, u.Ay)(m.A.PREMIUM_MARKETING_TIER_CARD), o = ee(t);
    return (0, n.jsx)(u.f5, {
        value: l,
        children: (0, n.jsxs)("div", {
            ref: o,
            className: s()(V.Zo, i),
            children: [(0, n.jsx)(Y, {
                showWumpus: !0,
                ctaButton: r
            }), (0, n.jsx)(X, {
                showWumpus: !0,
                ctaButton: a
            })]
        })
    })
}