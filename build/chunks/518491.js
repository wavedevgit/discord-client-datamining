/** chunk id: 518491 params = (module,exports,require) **/
n.d(t, {
    A: () => ei
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(877624),
    r = n(311907),
    o = n(502572),
    d = n(421380),
    c = n(397927),
    u = n(775602),
    m = n(793574),
    _ = n(688810),
    g = n(366999),
    A = n(531260),
    x = n(166403),
    p = n(786300),
    h = n(975571),
    f = n(927578),
    T = n(40185),
    E = n(89366),
    S = n(637073),
    b = n(422936),
    C = n(234419),
    N = n(549996),
    v = n(371764),
    I = n(130946),
    j = n(103411),
    y = n(534217),
    O = n(194509),
    R = n(396375),
    L = n(65470),
    P = n(792656),
    D = n(511484),
    G = n(939724),
    M = n(795269),
    k = n(473702),
    U = n(505559),
    w = n(722274),
    V = n(103733),
    B = n(229289),
    F = n(253558),
    H = n(788868),
    z = n(652215),
    Y = n(985018),
    X = n(496971),
    W = n(871464),
    K = n(461971),
    Z = n(828694);
let q = (e, t, s) => {
        (0, c.mMO)(async () => {
            let {
                PremiumBrandRefreshSubscriptionCancellationModal: l
            } = await Promise.all([n.e("41353"), n.e("35432"), n.e("46409")]).then(n.bind(n, 281439));
            return n => (0, i.jsx)(l, {
                ...n,
                analyticsLocations: e,
                initialStep: s,
                premiumSubscription: t
            })
        })
    },
    J = e => {
        let {
            className: t,
            isEligibleForBogoPromotion: n,
            isInReverseTrial: s,
            shouldShowReferralProgressBar: o
        } = e, {
            headingText: d,
            headingTop: g,
            showPill: p,
            userDiscountOffer: h,
            discountedPrice: T,
            buttonVisibilityRef: E
        } = en(), {
            analyticsLocations: S
        } = (0, _.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), j = (0, N.c)(a.C.MARKETING_PAGE_BANNER), O = null;
        null != j && "marketingPageBanner" === j.properties.properties.oneofKind ? O = (0, i.jsx)(v.x, {
            componentId: j.id,
            promotionBannerMarketingComponentFields: j.properties.properties.marketingPageBanner
        }) : n ? O = (0, i.jsx)(I.A, {
            variant: I.c.SUBSCRIBER_HOME
        }) : s ? O = (0, i.jsx)(w.A, {}) : o && (O = (0, i.jsx)(y.S, {}));
        let R = (0, r.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
            M = null != R && R.status === z.Dmq.CANCELED && null != h,
            U = (0, C.V)(),
            K = (0, b.O)(),
            Z = (0, D.U9)(K, H.pe.TIER_2) ? H.pe.TIER_2 : void 0,
            J = null != R && R.status !== z.Dmq.ACCOUNT_HOLD && R.hasAnyPremiumNitro,
            Q = (0, A.A)().isFractionalPremiumActive && !J && null == O && !M,
            $ = (0, r.bG)([u.A], () => u.A.useReducedMotion),
            {
                visibilityPercentageRef: ee,
                visibilityPercentage: et
            } = (0, V.U)(!$);
        return (0, i.jsx)("div", {
            className: l()(W.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: E,
            children: (0, i.jsxs)("div", {
                className: W.Qs,
                ref: ee,
                children: [p && g, (0, i.jsxs)("div", {
                    className: W.N1,
                    children: [(0, i.jsx)(B.A, {
                        containerVisibilityPercentage: et
                    }), M && null != h.expires_at && (0, i.jsx)(G.A, {
                        expiresAt: h.expires_at,
                        className: X.IZ
                    }), (0, i.jsx)(F.A, {
                        children: M ? Y.intl.format(Y.t["3yZP0G"], {
                            percent: h.discount.amount
                        }) : d
                    }), M && null != T && (0, i.jsx)(c.Text, {
                        className: X.jG,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: Y.intl.format(Y.t["3Q4wCy"], {
                            discountedPrice: T,
                            billingPeriod: (0, f.Ke)(h.discount.user_usage_limit_interval),
                            numMonths: h.discount.user_usage_limit
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: Q || M ? W.UJ : void 0,
                    children: [Q && (0, i.jsx)(P.A, {
                        size: "md",
                        hasActivePromotion: !!n,
                        subscriptionTier: U?.subscription_trial?.sku_id ?? Z
                    }), M && (0, i.jsx)(c.Button, {
                        variant: "expressive",
                        icon: c.tvc,
                        size: "md",
                        text: Y.intl.string(Y.t.zrCzVB),
                        onClick: () => q(S, R, k.g.CONFIRM_DISCOUNT)
                    }), (0, i.jsx)(L.A, {
                        variant: Q || M ? "secondary" : "expressive",
                        size: "md",
                        buttonTextOverride: Y.intl.string(Y.t["3KomGa"])
                    })]
                }), O]
            })
        })
    },
    Q = e => {
        let {
            className: t
        } = e, {
            headingText: n,
            headingTop: s,
            userDiscountOffer: a,
            discountedPrice: o,
            buttonVisibilityRef: u
        } = en(), {
            analyticsLocations: g
        } = (0, _.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), p = (0, r.bG)([x.A], () => x.A.getPremiumTypeSubscription()), h = null != p && p.status === z.Dmq.CANCELED && null != a, T = (0, C.V)(), E = (0, b.O)(), S = (0, D.U9)(E, H.pe.TIER_2) ? H.pe.TIER_2 : void 0, N = null != p && p.status !== z.Dmq.ACCOUNT_HOLD && p.hasAnyPremiumNitro, v = (0, A.A)().isFractionalPremiumActive && !N && !h;
        return (0, i.jsxs)("div", {
            className: l()(X.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: u,
            children: [(0, i.jsx)("img", {
                src: K,
                alt: "",
                className: X.NC
            }), (0, i.jsxs)("div", {
                className: h ? X.Nr : X.Qs,
                children: [s, h && null != a.expires_at && (0, i.jsx)(G.A, {
                    expiresAt: a.expires_at,
                    className: X.IZ
                }), (0, i.jsx)(c.Heading, {
                    variant: "display-lg",
                    color: "always-white",
                    className: h ? X.bc : X.wx,
                    children: h && null != a ? Y.intl.format(Y.t["3yZP0G"], {
                        percent: a.discount.amount
                    }) : n
                }), h && null != o && (0, i.jsx)(c.Text, {
                    className: X.RB,
                    variant: "text-sm/medium",
                    color: "always-white",
                    children: Y.intl.format(Y.t["3Q4wCy"], {
                        discountedPrice: o,
                        billingPeriod: (0, f.Ke)(a.discount.user_usage_limit_interval),
                        numMonths: a.discount.user_usage_limit
                    })
                }), (0, i.jsxs)("div", {
                    className: X.$J,
                    children: [v && (0, i.jsx)(R.A, {
                        color: d.XD.BRAND,
                        className: l()(X.x6, X.xF),
                        subscriptionTier: T?.subscription_trial?.sku_id ?? S
                    }), h && (0, i.jsxs)("div", {
                        className: X.Cg,
                        children: [(0, i.jsx)(c.Button, {
                            variant: "expressive",
                            icon: c.tvc,
                            size: "md",
                            text: Y.intl.string(Y.t.zrCzVB),
                            onClick: () => q(g, p, k.g.CONFIRM_DISCOUNT),
                            fullWidth: !0
                        }), (0, i.jsx)(L.A, {
                            variant: "overlay-secondary",
                            size: "md",
                            buttonTextOverride: Y.intl.string(Y.t.Ve9Ge6),
                            fullWidth: !0
                        })]
                    }), !h && (0, i.jsx)("div", {
                        className: X.UO,
                        children: (0, i.jsx)(O.A, {
                            look: d.pR.FILLED,
                            color: d.XD.BRAND,
                            textOptions: {
                                textOverride: Y.intl.string(Y.t["3KomGa"])
                            },
                            className: X.x6
                        })
                    })]
                })]
            })]
        })
    },
    $ = () => {
        let {
            headingText: e,
            headingTop: t
        } = en();
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
                src: Z,
                alt: "",
                className: X.HJ
            }), (0, i.jsx)("div", {
                className: X.iW,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: (0, i.jsxs)("div", {
                    className: X.eF,
                    children: [t, (0, i.jsx)(c.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: X.wx,
                        children: e
                    }), (0, i.jsx)("div", {
                        className: X.UO,
                        children: (0, i.jsx)(O.A, {
                            look: d.pR.FILLED,
                            color: d.XD.BRAND,
                            textOptions: {
                                textOverride: Y.intl.string(Y.t["3KomGa"])
                            },
                            className: X.x6
                        })
                    }), (0, i.jsx)(y.S, {
                        className: X.Qq
                    })]
                })
            })]
        })
    },
    ee = e => {
        let {
            isEligibleForBogoPromotion: t
        } = e, {
            headingText: n,
            headingTop: s
        } = en();
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
                src: Z,
                alt: "",
                className: X.HJ
            }), (0, i.jsxs)("div", {
                className: X.k1,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: [(0, i.jsxs)("div", {
                    className: X.nl,
                    children: [s, (0, i.jsx)(c.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: X.wx,
                        children: n
                    })]
                }), (0, i.jsx)("div", {
                    className: X.UO,
                    children: (0, i.jsx)(O.A, {
                        look: d.pR.FILLED,
                        color: d.XD.BRAND,
                        textOptions: {
                            textOverride: Y.intl.string(Y.t["3KomGa"])
                        },
                        className: X.x6
                    })
                }), !t && (0, i.jsx)(w.A, {}), t && (0, i.jsx)(I.A, {
                    variant: I.c.SUBSCRIBER_HOME
                })]
            })]
        })
    },
    [et, en] = (0, p.A)(),
    ei = e => {
        let {
            className: t,
            enablePremiumBrandRefresh: n,
            buttonVisibilityRef: s,
            userDiscountOffer: a,
            discountedPrice: r
        } = e, {
            analyticsLocations: d
        } = (0, _.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), u = (0, S.d)(), x = (0, T.cg)(), p = (0, E.QQ)(), f = Y.intl.string(Y.t.qYKftX), b = (0, j.m)(), C = (0, i.jsx)(Q, {
            className: t
        }), N = Y.intl.string(Y.t.ifwQZb), {
            fractionalState: v,
            endsAt: I
        } = (0, A.A)(), y = (0, g.Ay)(I, g.yE.CREDITS_ENDS_IN);
        u || x ? C = (0, i.jsx)(ee, {
            isEligibleForBogoPromotion: x
        }) : b && (f = Y.intl.string(Y.t.qYKftX), C = (0, i.jsx)($, {}));
        let O = null;
        if (v === H.xc.NONE || u) O = n ? (0, i.jsx)(U.A, {
            enablePremiumBrandRefresh: !0,
            text: f
        }) : (0, i.jsx)(M.ir, {
            className: l()(X.Av, {
                [X.R]: !p
            }),
            text: f,
            colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL
        });
        else {
            p = !0;
            let e = (0, i.jsx)("div", {
                    className: X.nW,
                    children: (0, i.jsx)(c.mir, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)"
                    })
                }),
                t = Y.intl.format(Y.t["yR+oDD"], {
                    helpCenterLink: h.A.getArticleURL(z.MVz.FRACTIONAL_PREMIUM_ABOUT)
                });
            O = (0, i.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: X.YL,
                position: "right",
                children: t => (0, i.jsx)("div", {
                    ...t,
                    className: X.V_,
                    children: (0, i.jsx)("div", {
                        className: X.eL,
                        children: n ? (0, i.jsx)(U.A, {
                            enablePremiumBrandRefresh: !0,
                            text: y
                        }) : (0, i.jsx)(M.R, {
                            className: l()(X.Av, {
                                [X.R]: !p
                            }),
                            text: y,
                            colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                            icon: e,
                            gap: !1
                        })
                    })
                })
            })
        }
        return (0, i.jsx)(_.f5, {
            value: d,
            children: (0, i.jsx)(et.Provider, {
                value: {
                    headingText: N,
                    headingTop: O,
                    showPill: p,
                    userDiscountOffer: a,
                    discountedPrice: r,
                    buttonVisibilityRef: s
                },
                children: n ? (0, i.jsx)(J, {
                    className: t,
                    isEligibleForBogoPromotion: x,
                    isInReverseTrial: u,
                    shouldShowReferralProgressBar: b
                }) : C
            })
        })
    }