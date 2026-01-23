/** Chunk was on web.js **/
/** chunk id: 501007, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Lg: () => W,
    NB: () => et,
    Nz: () => Z,
    ZP: () => X,
    jP: () => ee,
    nH: () => K,
    pw: () => $
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(582754),
    l = n(397927),
    c = n(736653),
    u = n(793574),
    d = n(688810),
    f = n(953143),
    p = n(773669),
    _ = n(287809),
    h = n(166403),
    m = n(224016),
    g = n(217392),
    E = n(60490),
    y = n(560138),
    b = n(40185),
    O = n(526292),
    v = n(552736),
    A = n(1878),
    I = n(422936),
    S = n(234419),
    T = n(396375),
    C = n(511484),
    N = n(231265),
    w = n(795269),
    R = n(349563),
    P = n(90526),
    D = n(300542),
    x = n(4382),
    L = n(284951),
    j = n(788868),
    M = n(838541),
    k = n(519412),
    U = n(985018),
    G = n(855135),
    V = n(639179),
    F = n(122402),
    B = n(793481),
    H = n(497451);

function Y(e) {
    let {
        Icon: t,
        text: n,
        isNew: i = !1,
        className: s,
        textVariant: o,
        isApplicationHome: c,
        enablePremiumBrandRefresh: u
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(s, {
            [G.featureItem]: u,
            [G.featureItemApplicationHome]: u && c
        }),
        children: [(0, r.jsx)(t, {
            className: u ? V.hi : V.Kk,
            color: "currentColor"
        }), (0, r.jsx)(l.Text, {
            variant: null != o ? o : "text-md/normal",
            color: u || c ? "currentColor" : "always-white",
            children: n
        }), i ? (0, r.jsx)(f.A, {
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
    return (0, r.jsxs)(r.Fragment, {
        children: [t && (0, r.jsx)(l.Text, {
            variant: "text-sm/bold",
            className: G.tier2ApplicationHomeSubheader,
            children: U.intl.string(k.default.ItfIa5)
        }), x.PV.map((e, n) => {
            let {
                Icon: i,
                getText: a
            } = e;
            return (0, r.jsx)(Y, {
                Icon: i,
                text: a(),
                enablePremiumBrandRefresh: !0,
                isApplicationHome: t
            }, n)
        })]
    })
}

function K(e) {
    let {
        isApplicationHome: t,
        enablePremiumBrandRefresh: n
    } = e, i = t && !n ? L.I4 : L.fB;
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e, i) => {
            let {
                Icon: a,
                getText: s
            } = e;
            return (0, r.jsx)(Y, {
                Icon: a,
                text: s(),
                className: t && !n ? V.dT : V.HW,
                textVariant: t && !n ? "text-sm/normal" : void 0,
                enablePremiumBrandRefresh: n,
                isApplicationHome: t
            }, i)
        })
    })
}

function z(e) {
    var t;
    let {
        ctaButton: n,
        showYearlyPrice: i,
        className: o,
        isGift: l = !1,
        priceOptions: c
    } = e, u = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()), d = (0, S.V)(), f = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id, p = !!(null == u ? void 0 : u.hasActiveTrial), _ = null != f || p;
    return (0, r.jsxs)("div", {
        className: a()(V.Vd, V.Nr, V.g1, o, {
            [V.vt]: !l && _,
            [V.lr]: !l && _
        }),
        children: [(0, r.jsx)("img", {
            src: F,
            className: V.ci,
            alt: ""
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(E.A, {
                    className: a()(V.DD, V.o6)
                }), (0, r.jsx)(P.A, {
                    isGift: l,
                    premiumTier: j.PremiumTypes.TIER_0,
                    offerType: j.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === j.pe.TIER_0,
                    showYearlyPrice: i,
                    priceOptions: c,
                    textVariant: "heading-xl/normal",
                    isApplicationHome: !0,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, r.jsx)("div", {
                children: (0, r.jsx)(K, {
                    isApplicationHome: !0
                })
            })]
        }), n]
    })
}

function q(e) {
    var t;
    let {
        showWumpus: n,
        ctaButton: i,
        showYearlyPrice: o,
        className: c,
        isGift: u = !1,
        priceOptions: d
    } = e, f = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()), p = (0, s.bG)([_.default], () => _.default.getCurrentUser()), m = (0, S.V)(), E = null == m || null == (t = m.subscription_trial) ? void 0 : t.sku_id, y = !!(null == f ? void 0 : f.hasActiveTrial), b = y ? null == p ? void 0 : p.premiumType : null, O = null != E || y, v = (0, w.Lj)(b, E);
    return (0, r.jsxs)("div", {
        className: a()(V.Vd, V.Nr, c, {
            [V.vt]: !u && O,
            [V.lr]: !u && O
        }),
        children: [!u && null != v && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(w.ir, {
                text: v,
                className: V.LW,
                colorOptions: w.at.PREMIUM_TIER_0_WHITE_FILL
            }), (0, r.jsx)("div", {
                className: V.o4
            })]
        }), n ? (0, r.jsx)("div", {
            className: V.wp,
            children: (0, r.jsx)(l._V3, {
                src: B,
                mediaLayoutType: M.dG.RESPONSIVE,
                width: 270,
                height: 242,
                zoomable: !1,
                imageClassName: V.Fm
            })
        }) : null, (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(g.A, {
                    className: a()(V.DD, V.ZD)
                }), (0, r.jsx)(P.A, {
                    isGift: u,
                    premiumTier: j.PremiumTypes.TIER_0,
                    offerType: j.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: E === j.pe.TIER_0,
                    showYearlyPrice: o,
                    priceOptions: d,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, r.jsx)("div", {
                children: (0, r.jsx)(K, {})
            })]
        }), u || E !== j.pe.TIER_0 ? null : (0, r.jsx)(R.Wy, {
            tier: j.PremiumTypes.TIER_0
        }), i]
    })
}
var Z = function(e) {
    return e[e.DEFAULT = 0] = "DEFAULT", e[e.BOOSTING = 1] = "BOOSTING", e[e.FRACTIONAL_PREMIUM = 2] = "FRACTIONAL_PREMIUM", e[e.APPLICATION_HOME = 3] = "APPLICATION_HOME", e[e.PREMIUM_GROUP_PRIMARY = 4] = "PREMIUM_GROUP_PRIMARY", e[e.PREMIUM_GROUP_MEMBER = 5] = "PREMIUM_GROUP_MEMBER", e
}({});

function X(e) {
    let {
        featureSet: t = 0,
        isModal: n = !1,
        isGift: i = !1,
        enablePremiumBrandRefresh: o = !1,
        isApplicationHome: c = !1,
        firstFeatureItemClassName: u
    } = e, d = (0, s.bG)([p.default], () => p.default.locale), f = (0, s.bG)([y.A], () => y.A.affinities), _ = !o && n && !i && f.length > 0, h = 3 === t || 0 === t, m = 3 === t || 0 === t && o && c, g = (() => {
        switch (t) {
            case 3:
                return L.z9;
            case 1:
                return L.ku;
            case 2:
                return L.Qi;
            case 4:
                return x.ro;
            case 5:
                return x.xs;
            default:
                return L.Oc
        }
    })();
    return (0, r.jsxs)(r.Fragment, {
        children: [m && (0, r.jsx)(l.Text, {
            variant: "text-sm/bold",
            className: o ? G.tier2ApplicationHomeSubheader : V.RQ,
            children: U.intl.string(U.t.AozD3Q)
        }), g.map((e, n) => {
            let {
                Icon: i,
                getText: s
            } = e;
            return (0, r.jsx)(Y, {
                Icon: i,
                text: s(d),
                className: a()(3 === t ? V.dT : V.HW, 0 === n ? u : void 0),
                textVariant: 3 === t ? "text-sm/normal" : void 0,
                isApplicationHome: c,
                enablePremiumBrandRefresh: o
            }, n)
        }), _ && h && (0, r.jsx)(D.A, {})]
    })
}

function Q(e) {
    var t, n, i, s;
    let {
        ctaButton: o,
        showYearlyPrice: c,
        featureSet: u = 0,
        className: d,
        isGift: f = !1,
        isModal: p = !1,
        priceOptions: _,
        showPromotionalGiftBanner: h = !1
    } = e, g = (0, S.V)(), E = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id, y = (0, O.ar)(), T = (0, I.O)(), w = null != g ? j.Vk.PREMIUM_TRIAL : null != T ? j.Vk.PREMIUM_DISCOUNT : null, R = (0, b.cg)(), D = !f && y, x = null == (n = (0, v.A)()) ? void 0 : n.planSelection, L = null == x || null == (i = x.getBackgroundImageUrl) ? void 0 : i.call(x), M = null == x || null == (s = x.getCardImageUrl) ? void 0 : s.call(x), k = (0, N._)();
    return (0, r.jsxs)("div", {
        className: a()(V.Nr, V.hA, V.aD, d, {
            [V.J5]: D,
            [V.lr]: D,
            [V.jx]: h,
            [V.ud]: h && null != M
        }),
        children: [h && null != M && (0, r.jsx)("img", {
            className: V.Cr,
            alt: "",
            src: M
        }), h && null != L && (0, r.jsx)("img", {
            className: V.gx,
            alt: "",
            src: L
        }), (0, r.jsx)("div", {
            className: V.S9
        }), (0, r.jsx)("img", {
            src: F,
            className: V.ci,
            alt: ""
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(m.A, {
                    className: a()(V.DD, V.cB)
                }), !f && E !== j.pe.TIER_2 && R && (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-xs/bold",
                        className: V.zu,
                        children: k
                    })
                }), (0, r.jsx)(P.A, {
                    isGift: f,
                    premiumTier: j.PremiumTypes.TIER_2,
                    offerType: w,
                    offerTierMatchesCard: E === j.pe.TIER_2 || (0, C.U9)(T, j.pe.TIER_2),
                    showYearlyPrice: c,
                    priceOptions: _,
                    textVariant: "heading-xl/normal",
                    isApplicationHome: !0,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, r.jsx)("div", {
                children: (0, r.jsx)(X, {
                    featureSet: u,
                    isModal: p,
                    isGift: f,
                    isApplicationHome: !0
                })
            })]
        }), o, h && (0, r.jsx)(A.K, {})]
    })
}

function J(e) {
    var t, n, i, u;
    let {
        showWumpus: d,
        ctaButton: f,
        showYearlyPrice: p,
        featureSet: g = 0,
        className: E,
        isGift: y = !1,
        isModal: T = !1,
        priceOptions: D,
        showPromotionalGiftBanner: x = !1
    } = e, L = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()), k = (0, s.bG)([_.default], () => _.default.getCurrentUser()), U = (0, S.V)(), G = null == U || null == (t = U.subscription_trial) ? void 0 : t.sku_id, F = (null == L ? void 0 : L.hasActiveTrial) ? null == k ? void 0 : k.premiumType : null, B = (0, O.ar)(), Y = (0, I.O)(), W = (0, O.k5)(), K = null != G || null != F ? j.Vk.PREMIUM_TRIAL : null != Y || W ? j.Vk.PREMIUM_DISCOUNT : null, z = (0, b.cg)(), q = !y && B, Z = null == (n = (0, v.A)()) ? void 0 : n.planSelection, Q = null == Z || null == (i = Z.getBackgroundImageUrl) ? void 0 : i.call(Z), J = null == Z || null == (u = Z.getCardImageUrl) ? void 0 : u.call(Z), $ = (0, N._)(), ee = (0, o.qB)((0, c.Ay)()), et = ee ? w.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : w.at.PREMIUM_TIER_2_WHITE_FILL, en = (0, w.rm)(W, F, Y, U, G), er = q && !ee ? V.on : void 0;
    return (0, r.jsxs)("div", {
        className: a()(V.Nr, V.hA, E, {
            [V.J5]: q,
            [V.lr]: q,
            [V.jx]: x,
            [V.ud]: x && null != J
        }),
        children: [x && null !== J && (0, r.jsx)("img", {
            className: V.Cr,
            alt: "",
            src: J
        }), x && null !== Q && (0, r.jsx)("img", {
            className: V.gx,
            alt: "",
            src: Q
        }), !y && null != en && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(w.ir, {
                text: en,
                className: V.LW,
                colorOptions: et
            }), (0, r.jsx)("div", {
                className: er
            })]
        }), d ? (0, r.jsx)("div", {
            className: V.wp,
            children: (0, r.jsx)(l._V3, {
                src: H,
                mediaLayoutType: M.dG.RESPONSIVE,
                width: 270,
                height: 242,
                zoomable: !1,
                imageClassName: V.Fm
            })
        }) : null, (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(m.A, {
                    className: a()(V.DD, V.$l)
                }), !y && G !== j.pe.TIER_2 && z && (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-xs/bold",
                        className: V.zu,
                        children: $
                    })
                }), (0, r.jsx)(P.A, {
                    isGift: y,
                    premiumTier: j.PremiumTypes.TIER_2,
                    offerType: K,
                    offerTierMatchesCard: G === j.pe.TIER_2 || (0, C.U9)(Y, j.pe.TIER_2),
                    showYearlyPrice: p,
                    priceOptions: D,
                    headingVariant: "heading-md/normal",
                    headingColor: "always-white"
                })]
            }), (0, r.jsx)("div", {
                children: (0, r.jsx)(X, {
                    featureSet: g,
                    isModal: T,
                    isGift: y
                })
            })]
        }), y || G !== j.pe.TIER_2 && null == Y ? null : (0, r.jsx)(R.Wy, {
            tier: j.PremiumTypes.TIER_2
        }), f, x && (0, r.jsx)(A.K, {})]
    })
}
let $ = e => t => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t))
};

function ee(e) {
    let {
        innerRef: t,
        hasActiveTier2PremiumPromotion: n,
        className: i
    } = e, {
        analyticsLocations: s
    } = (0, d.Ay)(u.A.PREMIUM_MARKETING_TIER_CARD), o = $(t), c = (0, r.jsx)(T.A, {
        color: void 0,
        showIcon: !1,
        subscriptionTier: j.pe.TIER_0,
        className: V.Ph,
        textOptions: {
            textClassName: V.uz
        },
        buttonShineClassName: V.Qr
    }), f = (0, r.jsx)(T.A, {
        color: void 0,
        showIcon: !1,
        subscriptionTier: j.pe.TIER_2,
        className: V.Ph,
        hasActivePromotion: n,
        textOptions: {
            textClassName: V.uz
        },
        buttonShineClassName: V.Qr
    });
    return (0, r.jsxs)(d.f5, {
        value: s,
        children: [(0, r.jsx)(l.Heading, {
            ref: o,
            className: V.CV,
            variant: "display-md",
            color: "text-strong",
            children: U.intl.string(U.t.vLz3Zs)
        }), (0, r.jsxs)("div", {
            ref: o,
            className: a()(V.Zo, i),
            children: [(0, r.jsx)(z, {
                ctaButton: c
            }), (0, r.jsx)(Q, {
                ctaButton: f,
                featureSet: 3
            })]
        })]
    })
}

function et(e) {
    let {
        innerRef: t,
        className: n,
        tier0CTAButton: i,
        tier2CTAButton: s
    } = e, {
        analyticsLocations: o
    } = (0, d.Ay)(u.A.PREMIUM_MARKETING_TIER_CARD), l = $(t);
    return (0, r.jsx)(d.f5, {
        value: o,
        children: (0, r.jsxs)("div", {
            ref: l,
            className: a()(V.Zo, n),
            children: [(0, r.jsx)(q, {
                showWumpus: !0,
                ctaButton: i
            }), (0, r.jsx)(J, {
                showWumpus: !0,
                ctaButton: s
            })]
        })
    })
}