/** Chunk was on 5606 **/
/** chunk id: 160116, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => el
}), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(877624),
    a = n(311907),
    o = n(502572),
    c = n(421380),
    d = n(397927),
    u = n(775602),
    p = n(793574),
    _ = n(688810),
    m = n(366999),
    g = n(531260),
    f = n(166403),
    b = n(786300),
    h = n(975571),
    A = n(927578),
    E = n(40185),
    x = n(89366),
    O = n(637073),
    C = n(422936),
    y = n(234419),
    j = n(549996),
    T = n(371764),
    v = n(130946),
    S = n(103411),
    I = n(534217),
    N = n(194509),
    P = n(396375),
    R = n(65470),
    D = n(792656),
    w = n(511484),
    L = n(939724),
    M = n(795269),
    G = n(473702),
    U = n(371476),
    k = n(103733),
    H = n(505559),
    B = n(633451),
    V = n(722274),
    F = n(788868),
    Y = n(652215),
    W = n(985018),
    K = n(150522),
    z = n(596711),
    Z = n(461971),
    q = n(828694);

function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function J(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let Q = (e, t, i) => {
        (0, d.mMO)(async () => {
            let {
                PremiumBrandRefreshSubscriptionCancellationModal: l
            } = await n.e("72820").then(n.bind(n, 281439));
            return n => (0, r.jsx)(l, J(X({}, n), {
                analyticsLocations: e,
                initialStep: i,
                premiumSubscription: t
            }))
        })
    },
    $ = e => {
        var t, n;
        let {
            className: i,
            isEligibleForBogoPromotion: o,
            isInReverseTrial: c,
            shouldShowReferralProgressBar: m
        } = e, {
            headingText: b,
            headingTop: h,
            showPill: E,
            userDiscountOffer: x,
            discountedPrice: O,
            buttonVisibilityRef: S
        } = ei(), {
            analyticsLocations: N
        } = (0, _.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA), P = (0, j.c)(s.C.MARKETING_PAGE_BANNER), M = null;
        null != P && "marketingPageBanner" === P.properties.properties.oneofKind ? M = (0, r.jsx)(T.x, {
            componentId: P.id,
            promotionBannerMarketingComponentFields: P.properties.properties.marketingPageBanner
        }) : o ? M = (0, r.jsx)(v.A, {
            variant: v.c.SUBSCRIBER_HOME
        }) : c ? M = (0, r.jsx)(V.A, {}) : m && (M = (0, r.jsx)(I.S, {}));
        let H = (0, a.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            Z = null != H && H.status === Y.Dmq.CANCELED && null != x,
            q = (0, y.V)(),
            X = (0, C.O)(),
            J = (0, w.U9)(X, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            $ = null != H && H.status !== Y.Dmq.ACCOUNT_HOLD && H.hasAnyPremiumNitro,
            ee = (0, g.A)().isFractionalPremiumActive && !$ && null == M && !Z,
            et = (0, a.bG)([u.A], () => u.A.useReducedMotion),
            {
                visibilityPercentageRef: en,
                visibilityPercentage: er
            } = (0, k.U)(!et);
        return (0, r.jsx)("div", {
            className: l()(z.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: S,
            children: (0, r.jsxs)("div", {
                className: z.Qs,
                ref: en,
                children: [E && h, (0, r.jsxs)("div", {
                    className: z.N1,
                    children: [(0, r.jsx)(B.A, {
                        containerVisibilityPercentage: er
                    }), Z && null != x.expires_at && (0, r.jsx)(L.A, {
                        expiresAt: x.expires_at,
                        className: K.IZ
                    }), (0, r.jsx)(U.A, {
                        children: Z ? W.intl.format(W.t["3yZP0G"], {
                            percent: x.discount.amount
                        }) : b
                    }), Z && null != O && (0, r.jsx)(d.Text, {
                        className: K.jG,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: W.intl.format(W.t["3Q4wCy"], {
                            discountedPrice: O,
                            billingPeriod: (0, A.Ke)(x.discount.user_usage_limit_interval),
                            numMonths: x.discount.user_usage_limit
                        })
                    })]
                }), (0, r.jsxs)("div", {
                    className: ee || Z ? z.UJ : void 0,
                    children: [ee && (0, r.jsx)(D.A, {
                        size: "md",
                        hasActivePromotion: !!o,
                        subscriptionTier: null != (t = null == q || null == (n = q.subscription_trial) ? void 0 : n.sku_id) ? t : J
                    }), Z && (0, r.jsx)(d.Button, {
                        variant: "expressive",
                        icon: d.tvc,
                        size: "md",
                        text: W.intl.string(W.t.zrCzVB),
                        onClick: () => Q(N, H, G.g.CONFIRM_DISCOUNT)
                    }), (0, r.jsx)(R.A, {
                        variant: ee || Z ? "secondary" : "expressive",
                        size: "md",
                        buttonTextOverride: W.intl.string(W.t["3KomGa"])
                    })]
                }), M]
            })
        })
    },
    ee = e => {
        var t, n;
        let {
            className: i
        } = e, {
            headingText: s,
            headingTop: o,
            userDiscountOffer: u,
            discountedPrice: m,
            buttonVisibilityRef: b
        } = ei(), {
            analyticsLocations: h
        } = (0, _.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA), E = (0, a.bG)([f.A], () => f.A.getPremiumTypeSubscription()), x = null != E && E.status === Y.Dmq.CANCELED && null != u, O = (0, y.V)(), j = (0, C.O)(), T = (0, w.U9)(j, F.pe.TIER_2) ? F.pe.TIER_2 : void 0, v = null != E && E.status !== Y.Dmq.ACCOUNT_HOLD && E.hasAnyPremiumNitro, S = (0, g.A)().isFractionalPremiumActive && !v && !x;
        return (0, r.jsxs)("div", {
            className: l()(K.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: b,
            children: [(0, r.jsx)("img", {
                src: Z,
                alt: "",
                className: K.NC
            }), (0, r.jsxs)("div", {
                className: x ? K.Nr : K.Qs,
                children: [o, x && null != u.expires_at && (0, r.jsx)(L.A, {
                    expiresAt: u.expires_at,
                    className: K.IZ
                }), (0, r.jsx)(d.Heading, {
                    variant: "display-lg",
                    color: "always-white",
                    className: x ? K.bc : K.wx,
                    children: x && null != u ? W.intl.format(W.t["3yZP0G"], {
                        percent: u.discount.amount
                    }) : s
                }), x && null != m && (0, r.jsx)(d.Text, {
                    className: K.RB,
                    variant: "text-sm/medium",
                    color: "always-white",
                    children: W.intl.format(W.t["3Q4wCy"], {
                        discountedPrice: m,
                        billingPeriod: (0, A.Ke)(u.discount.user_usage_limit_interval),
                        numMonths: u.discount.user_usage_limit
                    })
                }), (0, r.jsxs)("div", {
                    className: K.$J,
                    children: [S && (0, r.jsx)(P.A, {
                        color: c.XD.BRAND,
                        className: l()(K.x6, K.xF),
                        subscriptionTier: null != (t = null == O || null == (n = O.subscription_trial) ? void 0 : n.sku_id) ? t : T
                    }), x && (0, r.jsxs)("div", {
                        className: K.Cg,
                        children: [(0, r.jsx)(d.Button, {
                            variant: "expressive",
                            icon: d.tvc,
                            size: "md",
                            text: W.intl.string(W.t.zrCzVB),
                            onClick: () => Q(h, E, G.g.CONFIRM_DISCOUNT),
                            fullWidth: !0
                        }), (0, r.jsx)(R.A, {
                            variant: "overlay-secondary",
                            size: "md",
                            buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
                            fullWidth: !0
                        })]
                    }), !x && (0, r.jsx)("div", {
                        className: K.UO,
                        children: (0, r.jsx)(N.A, {
                            look: c.pR.FILLED,
                            color: c.XD.BRAND,
                            textOptions: {
                                textOverride: W.intl.string(W.t["3KomGa"])
                            },
                            className: K.x6
                        })
                    })]
                })]
            })]
        })
    },
    et = () => {
        let {
            headingText: e,
            headingTop: t
        } = ei();
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("img", {
                src: q,
                alt: "",
                className: K.HJ
            }), (0, r.jsx)("div", {
                className: K.iW,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: (0, r.jsxs)("div", {
                    className: K.eF,
                    children: [t, (0, r.jsx)(d.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: K.wx,
                        children: e
                    }), (0, r.jsx)("div", {
                        className: K.UO,
                        children: (0, r.jsx)(N.A, {
                            look: c.pR.FILLED,
                            color: c.XD.BRAND,
                            textOptions: {
                                textOverride: W.intl.string(W.t["3KomGa"])
                            },
                            className: K.x6
                        })
                    }), (0, r.jsx)(I.S, {
                        className: K.Qq
                    })]
                })
            })]
        })
    },
    en = e => {
        let {
            isEligibleForBogoPromotion: t
        } = e, {
            headingText: n,
            headingTop: i
        } = ei();
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("img", {
                src: q,
                alt: "",
                className: K.HJ
            }), (0, r.jsxs)("div", {
                className: K.k1,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: [(0, r.jsxs)("div", {
                    className: K.nl,
                    children: [i, (0, r.jsx)(d.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: K.wx,
                        children: n
                    })]
                }), (0, r.jsx)("div", {
                    className: K.UO,
                    children: (0, r.jsx)(N.A, {
                        look: c.pR.FILLED,
                        color: c.XD.BRAND,
                        textOptions: {
                            textOverride: W.intl.string(W.t["3KomGa"])
                        },
                        className: K.x6
                    })
                }), !t && (0, r.jsx)(V.A, {}), t && (0, r.jsx)(v.A, {
                    variant: v.c.SUBSCRIBER_HOME
                })]
            })]
        })
    },
    [er, ei] = (0, b.A)(),
    el = e => {
        let {
            className: t,
            enablePremiumBrandRefresh: n,
            buttonVisibilityRef: i,
            userDiscountOffer: s,
            discountedPrice: a
        } = e, {
            analyticsLocations: c
        } = (0, _.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA), u = (0, O.d)(), f = (0, E.cg)(), b = (0, x.QQ)(), A = W.intl.string(W.t.qYKftX), C = (0, S.m)(), y = (0, r.jsx)(ee, {
            className: t
        }), j = W.intl.string(W.t.ifwQZb), {
            fractionalState: T,
            endsAt: v
        } = (0, g.A)(), I = (0, m.Ay)(v, m.yE.CREDITS_ENDS_IN);
        u || f ? y = (0, r.jsx)(en, {
            isEligibleForBogoPromotion: f
        }) : C && (A = W.intl.string(W.t.qYKftX), y = (0, r.jsx)(et, {}));
        let N = null;
        if (T === F.xc.NONE || u) N = n ? (0, r.jsx)(H.A, {
            enablePremiumBrandRefresh: !0,
            text: A
        }) : (0, r.jsx)(M.ir, {
            className: l()(K.Av, {
                [K.R]: !b
            }),
            text: A,
            colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL
        });
        else {
            b = !0;
            let e = (0, r.jsx)("div", {
                    className: K.nW,
                    children: (0, r.jsx)(d.mir, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)"
                    })
                }),
                t = W.intl.format(W.t["yR+oDD"], {
                    helpCenterLink: h.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
                });
            N = (0, r.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: K.YL,
                position: "right",
                children: t => (0, r.jsx)("div", J(X({}, t), {
                    className: K.V_,
                    children: (0, r.jsx)("div", {
                        className: K.eL,
                        children: n ? (0, r.jsx)(H.A, {
                            enablePremiumBrandRefresh: !0,
                            text: I
                        }) : (0, r.jsx)(M.R, {
                            className: l()(K.Av, {
                                [K.R]: !b
                            }),
                            text: I,
                            colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                            icon: e,
                            gap: !1
                        })
                    })
                }))
            })
        }
        return (0, r.jsx)(_.f5, {
            value: c,
            children: (0, r.jsx)(er.Provider, {
                value: {
                    headingText: j,
                    headingTop: N,
                    showPill: b,
                    userDiscountOffer: s,
                    discountedPrice: a,
                    buttonVisibilityRef: i
                },
                children: n ? (0, r.jsx)($, {
                    className: t,
                    isEligibleForBogoPromotion: f,
                    isInReverseTrial: u,
                    shouldShowReferralProgressBar: C
                }) : y
            })
        })
    }