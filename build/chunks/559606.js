/** chunk id: 559606 params = (module,exports,require) **/
r.d(t, {
    Lg: () => V,
    Nz: () => W,
    ZP: () => z,
    nH: () => J,
    pw: () => K,
    qu: () => q
});
var i, n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(311907),
    o = r(582754),
    c = r(397927),
    d = r(736653),
    u = r(793574),
    m = r(688810),
    x = r(953143),
    g = r(773669),
    T = r(287809),
    p = r(166403),
    I = r(224016),
    h = r(217392);
r(60490);
var f = r(560138),
    A = r(40185),
    j = r(526292),
    v = r(552736),
    _ = r(1878),
    R = r(422936),
    N = r(234419);
r(396375);
var P = r(511484),
    E = r(774774),
    y = r(231265),
    C = r(349563),
    M = r(90526),
    b = r(300542),
    S = r(4382),
    w = r(284951),
    U = r(788868),
    L = r(838541),
    O = r(782965),
    G = r(985018),
    D = r(211003),
    F = r(831096);
r(122402);
var H = r(793481),
    k = r(497451);

function B(e) {
    let {
        Icon: t,
        text: r,
        isNew: i = !1,
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
            className: d ? D.hi : D.Kk,
            color: "currentColor"
        }), (0, n.jsx)(c.Text, {
            variant: l ?? "text-md/normal",
            color: d || o ? "currentColor" : "always-white",
            children: r
        }), i ? (0, n.jsx)(x.A, {
            className: D.OC,
            forceUseColorForSparkles: !0,
            shouldInheritBackgroundColor: !0,
            shouldInheritTextColor: !0
        }) : null]
    })
}

function V(e) {
    let {
        isApplicationHome: t
    } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [t && (0, n.jsx)(c.Text, {
            variant: "text-sm/bold",
            className: F.tier2ApplicationHomeSubheader,
            children: G.intl.string(O.default.ItfIa5)
        }), S.PV.map((e, r) => {
            let {
                Icon: i,
                getText: a
            } = e;
            return (0, n.jsx)(B, {
                Icon: i,
                text: a(),
                enablePremiumBrandRefresh: !0,
                isApplicationHome: t
            }, r)
        })]
    })
}

function J(e) {
    let {
        isApplicationHome: t,
        enablePremiumBrandRefresh: r
    } = e, i = t && !r ? w.I4 : w.fB;
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, i) => {
            let {
                Icon: a,
                getText: s
            } = e;
            return (0, n.jsx)(B, {
                Icon: a,
                text: s(),
                className: t && !r ? D.dT : D.HW,
                textVariant: t && !r ? "text-sm/normal" : void 0,
                enablePremiumBrandRefresh: r,
                isApplicationHome: t
            }, i)
        })
    })
}

function Z(e) {
    let {
        showWumpus: t,
        ctaButton: r,
        showYearlyPrice: i,
        className: a,
        isGift: o = !1,
        priceOptions: d
    } = e, u = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()), m = (0, l.bG)([T.default], () => T.default.getCurrentUser()), x = (0, N.V)(), g = x?.subscription_trial?.sku_id, I = !!u?.hasActiveTrial, f = I ? m?.premiumType : null, A = null != g || I, j = (0, E.Lj)(f, g);
    return (0, n.jsxs)("div", {
        className: s()(D.Vd, D.Nr, a, {
            [D.vt]: !o && A,
            [D.lr]: !o && A
        }),
        children: [!o && null != j && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(E.e4, {
                text: j,
                className: D.LW,
                colorOptions: E.at.PREMIUM_TIER_0_WHITE_FILL
            }), (0, n.jsx)("div", {
                className: D.o4
            })]
        }), t ? (0, n.jsx)("div", {
            className: D.wp,
            children: (0, n.jsx)(c._V3, {
                src: H,
                mediaLayoutType: L.dG.RESPONSIVE,
                width: 270,
                height: 242,
                zoomable: !1,
                imageClassName: D.Fm
            })
        }) : null, (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("div", {
                children: [(0, n.jsx)(h.A, {
                    className: s()(D.DD, D.ZD)
                }), (0, n.jsx)(M.A, {
                    isGift: o,
                    premiumTier: U.PremiumTypes.TIER_0,
                    offerType: U.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === U.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: d,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, n.jsx)("div", {
                children: (0, n.jsx)(J, {})
            })]
        }), o || g !== U.pe.TIER_0 ? null : (0, n.jsx)(C.Wy, {
            tier: U.PremiumTypes.TIER_0
        }), r]
    })
}
var W = ((i = {})[i.DEFAULT = 0] = "DEFAULT", i[i.BOOSTING = 1] = "BOOSTING", i[i.FRACTIONAL_PREMIUM = 2] = "FRACTIONAL_PREMIUM", i[i.APPLICATION_HOME = 3] = "APPLICATION_HOME", i[i.PREMIUM_GROUP_PRIMARY = 4] = "PREMIUM_GROUP_PRIMARY", i[i.PREMIUM_GROUP_MEMBER = 5] = "PREMIUM_GROUP_MEMBER", i);

function z(e) {
    let {
        featureSet: t = 0,
        isModal: r = !1,
        isGift: i = !1,
        enablePremiumBrandRefresh: a = !1,
        isApplicationHome: o = !1,
        firstFeatureItemClassName: d
    } = e, u = (0, l.bG)([g.default], () => g.default.locale), m = (0, l.bG)([f.A], () => f.A.affinities), x = !a && r && !i && m.length > 0, T = 3 === t || 0 === t && a && o, p = (() => {
        switch (t) {
            case 3:
                return w.z9;
            case 1:
                return w.ku;
            case 2:
                return w.Qi;
            case 4:
                return S.ro;
            case 5:
                return S.xs;
            default:
                return w.Oc
        }
    })();
    return (0, n.jsxs)(n.Fragment, {
        children: [T && (0, n.jsx)(c.Text, {
            variant: "text-sm/bold",
            className: a ? F.tier2ApplicationHomeSubheader : D.RQ,
            children: G.intl.string(G.t.AozD3Q)
        }), p.map((e, r) => {
            let {
                Icon: i,
                getText: l
            } = e;
            return (0, n.jsx)(B, {
                Icon: i,
                text: l(u),
                className: s()(3 === t ? D.dT : D.HW, 0 === r ? d : void 0),
                textVariant: 3 === t ? "text-sm/normal" : void 0,
                isApplicationHome: o,
                enablePremiumBrandRefresh: a
            }, r)
        }), x && (3 === t || 0 === t) && (0, n.jsx)(b.A, {})]
    })
}

function Y(e) {
    let {
        showWumpus: t,
        ctaButton: r,
        showYearlyPrice: i,
        featureSet: a = 0,
        className: u,
        isGift: m = !1,
        isModal: x = !1,
        priceOptions: g,
        showPromotionalGiftBanner: h = !1
    } = e, f = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()), b = (0, l.bG)([T.default], () => T.default.getCurrentUser()), S = (0, N.V)(), w = S?.subscription_trial?.sku_id, O = f?.hasActiveTrial ? b?.premiumType : null, G = (0, j.ar)(), F = (0, R.O)(), H = (0, j.k5)(), B = null != w || null != O ? U.Vk.PREMIUM_TRIAL : null != F || H ? U.Vk.PREMIUM_DISCOUNT : null, V = (0, A.cg)(), J = !m && G, Z = (0, v.A)()?.planSelection, W = Z?.getBackgroundImageUrl?.(), Y = Z?.getCardImageUrl?.(), K = (0, y._)(), q = (0, o.qB)((0, d.Ay)()), Q = q ? E.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : E.at.PREMIUM_TIER_2_WHITE_FILL, $ = (0, E.rm)(H, O, F, S, w), X = J && !q ? D.on : void 0;
    return (0, n.jsxs)("div", {
        className: s()(D.Nr, D.hA, u, {
            [D.J5]: J,
            [D.lr]: J,
            [D.jx]: h,
            [D.ud]: h && null != Y
        }),
        children: [h && null !== Y && (0, n.jsx)("img", {
            className: D.Cr,
            alt: "",
            src: Y
        }), h && null !== W && (0, n.jsx)("img", {
            className: D.gx,
            alt: "",
            src: W
        }), !m && null != $ && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(E.e4, {
                text: $,
                className: D.LW,
                colorOptions: Q
            }), (0, n.jsx)("div", {
                className: X
            })]
        }), t ? (0, n.jsx)("div", {
            className: D.wp,
            children: (0, n.jsx)(c._V3, {
                src: k,
                mediaLayoutType: L.dG.RESPONSIVE,
                width: 270,
                height: 242,
                zoomable: !1,
                imageClassName: D.Fm
            })
        }) : null, (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("div", {
                children: [(0, n.jsx)(I.A, {
                    className: s()(D.DD, D.$l)
                }), !m && w !== U.pe.TIER_2 && V && (0, n.jsx)("div", {
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-xs/bold",
                        className: D.zu,
                        children: K
                    })
                }), (0, n.jsx)(M.A, {
                    isGift: m,
                    premiumTier: U.PremiumTypes.TIER_2,
                    offerType: B,
                    offerTierMatchesCard: w === U.pe.TIER_2 || (0, P.U9)(F, U.pe.TIER_2),
                    showYearlyPrice: i,
                    priceOptions: g,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, n.jsx)("div", {
                children: (0, n.jsx)(z, {
                    featureSet: a,
                    isModal: x,
                    isGift: m
                })
            })]
        }), m || w !== U.pe.TIER_2 && null == F ? null : (0, n.jsx)(C.Wy, {
            tier: U.PremiumTypes.TIER_2
        }), r, h && (0, n.jsx)(_.K, {})]
    })
}
let K = e => t => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t))
};

function q(e) {
    let {
        innerRef: t,
        className: r,
        tier0CTAButton: i,
        tier2CTAButton: a
    } = e, {
        analyticsLocations: l
    } = (0, m.Ay)(u.A.PREMIUM_MARKETING_TIER_CARD), o = K(t);
    return (0, n.jsx)(m.f5, {
        value: l,
        children: (0, n.jsxs)("div", {
            ref: o,
            className: s()(D.Zo, r),
            children: [(0, n.jsx)(Z, {
                showWumpus: !0,
                ctaButton: i
            }), (0, n.jsx)(Y, {
                showWumpus: !0,
                ctaButton: a
            })]
        })
    })
}