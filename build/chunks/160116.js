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
    _ = n(793574),
    p = n(688810),
    m = n(366999),
    g = n(531260),
    A = n(166403),
    f = n(786300),
    b = n(975571),
    h = n(927578),
    E = n(40185),
    O = n(89366),
    C = n(637073),
    x = n(422936),
    S = n(234419),
    T = n(549996),
    I = n(371764),
    y = n(130946),
    N = n(103411),
    j = n(534217),
    v = n(194509),
    P = n(396375),
    R = n(65470),
    D = n(792656),
    L = n(511484),
    w = n(939724),
    M = n(795269),
    G = n(473702),
    U = n(371476),
    k = n(103733),
    B = n(505559),
    H = n(633451),
    V = n(722274),
    F = n(788868),
    Y = n(652215),
    W = n(985018),
    K = n(150522),
    z = n(596711),
    Z = n(461971),
    X = n(828694);

function q(e) {
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
            return n => (0, r.jsx)(l, J(q({}, n), {
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
            headingText: f,
            headingTop: b,
            showPill: E,
            userDiscountOffer: O,
            discountedPrice: C,
            buttonVisibilityRef: N
        } = ei(), {
            analyticsLocations: v
        } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA), P = (0, T.c)(s.C.MARKETING_PAGE_BANNER), M = null;
        null != P && "marketingPageBanner" === P.properties.properties.oneofKind ? M = (0, r.jsx)(I.x, {
            componentId: P.id,
            promotionBannerMarketingComponentFields: P.properties.properties.marketingPageBanner
        }) : o ? M = (0, r.jsx)(y.A, {
            variant: y.c.SUBSCRIBER_HOME
        }) : c ? M = (0, r.jsx)(V.A, {}) : m && (M = (0, r.jsx)(j.S, {}));
        let B = (0, a.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
            Z = null != B && B.status === Y.Dmq.CANCELED && null != O,
            X = (0, S.V)(),
            q = (0, x.O)(),
            J = (0, L.U9)(q, F.pe.TIER_2) ? F.pe.TIER_2 : void 0,
            $ = null != B && B.status !== Y.Dmq.ACCOUNT_HOLD && B.hasAnyPremiumNitro,
            ee = (0, g.A)().isFractionalPremiumActive && !$ && null == M && !Z,
            et = (0, a.bG)([u.A], () => u.A.useReducedMotion),
            {
                visibilityPercentageRef: en,
                visibilityPercentage: er
            } = (0, k.U)(!et);
        return (0, r.jsx)("div", {
            className: l()(z.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: N,
            children: (0, r.jsxs)("div", {
                className: z.Qs,
                ref: en,
                children: [E && b, (0, r.jsxs)("div", {
                    className: z.N1,
                    children: [(0, r.jsx)(H.A, {
                        containerVisibilityPercentage: er
                    }), Z && null != O.expires_at && (0, r.jsx)(w.A, {
                        expiresAt: O.expires_at,
                        className: K.IZ
                    }), (0, r.jsx)(U.A, {
                        children: Z ? W.intl.format(W.t["3yZP0G"], {
                            percent: O.discount.amount
                        }) : f
                    }), Z && null != C && (0, r.jsx)(d.Text, {
                        className: K.jG,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: W.intl.format(W.t["3Q4wCy"], {
                            discountedPrice: C,
                            billingPeriod: (0, h.Ke)(O.discount.user_usage_limit_interval),
                            numMonths: O.discount.user_usage_limit
                        })
                    })]
                }), (0, r.jsxs)("div", {
                    className: ee || Z ? z.UJ : void 0,
                    children: [ee && (0, r.jsx)(D.A, {
                        size: "md",
                        hasActivePromotion: !!o,
                        subscriptionTier: null != (t = null == X || null == (n = X.subscription_trial) ? void 0 : n.sku_id) ? t : J
                    }), Z && (0, r.jsx)(d.Button, {
                        variant: "expressive",
                        icon: d.tvc,
                        size: "md",
                        text: W.intl.string(W.t.zrCzVB),
                        onClick: () => Q(v, B, G.g.CONFIRM_DISCOUNT)
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
            buttonVisibilityRef: f
        } = ei(), {
            analyticsLocations: b
        } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA), E = (0, a.bG)([A.A], () => A.A.getPremiumTypeSubscription()), O = null != E && E.status === Y.Dmq.CANCELED && null != u, C = (0, S.V)(), T = (0, x.O)(), I = (0, L.U9)(T, F.pe.TIER_2) ? F.pe.TIER_2 : void 0, y = null != E && E.status !== Y.Dmq.ACCOUNT_HOLD && E.hasAnyPremiumNitro, N = (0, g.A)().isFractionalPremiumActive && !y && !O;
        return (0, r.jsxs)("div", {
            className: l()(K.kL, i),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: f,
            children: [(0, r.jsx)("img", {
                src: Z,
                alt: "",
                className: K.NC
            }), (0, r.jsxs)("div", {
                className: O ? K.Nr : K.Qs,
                children: [o, O && null != u.expires_at && (0, r.jsx)(w.A, {
                    expiresAt: u.expires_at,
                    className: K.IZ
                }), (0, r.jsx)(d.Heading, {
                    variant: "display-lg",
                    color: "always-white",
                    className: O ? K.bc : K.wx,
                    children: O && null != u ? W.intl.format(W.t["3yZP0G"], {
                        percent: u.discount.amount
                    }) : s
                }), O && null != m && (0, r.jsx)(d.Text, {
                    className: K.RB,
                    variant: "text-sm/medium",
                    color: "always-white",
                    children: W.intl.format(W.t["3Q4wCy"], {
                        discountedPrice: m,
                        billingPeriod: (0, h.Ke)(u.discount.user_usage_limit_interval),
                        numMonths: u.discount.user_usage_limit
                    })
                }), (0, r.jsxs)("div", {
                    className: K.$J,
                    children: [N && (0, r.jsx)(P.A, {
                        color: c.XD.BRAND,
                        className: l()(K.x6, K.xF),
                        subscriptionTier: null != (t = null == C || null == (n = C.subscription_trial) ? void 0 : n.sku_id) ? t : I
                    }), O && (0, r.jsxs)("div", {
                        className: K.Cg,
                        children: [(0, r.jsx)(d.Button, {
                            variant: "expressive",
                            icon: d.tvc,
                            size: "md",
                            text: W.intl.string(W.t.zrCzVB),
                            onClick: () => Q(b, E, G.g.CONFIRM_DISCOUNT),
                            fullWidth: !0
                        }), (0, r.jsx)(R.A, {
                            variant: "overlay-secondary",
                            size: "md",
                            buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
                            fullWidth: !0
                        })]
                    }), !O && (0, r.jsx)("div", {
                        className: K.UO,
                        children: (0, r.jsx)(v.A, {
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
                src: X,
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
                        children: (0, r.jsx)(v.A, {
                            look: c.pR.FILLED,
                            color: c.XD.BRAND,
                            textOptions: {
                                textOverride: W.intl.string(W.t["3KomGa"])
                            },
                            className: K.x6
                        })
                    }), (0, r.jsx)(j.S, {
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
                src: X,
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
                    children: (0, r.jsx)(v.A, {
                        look: c.pR.FILLED,
                        color: c.XD.BRAND,
                        textOptions: {
                            textOverride: W.intl.string(W.t["3KomGa"])
                        },
                        className: K.x6
                    })
                }), !t && (0, r.jsx)(V.A, {}), t && (0, r.jsx)(y.A, {
                    variant: y.c.SUBSCRIBER_HOME
                })]
            })]
        })
    },
    [er, ei] = (0, f.A)(),
    el = e => {
        let {
            className: t,
            enablePremiumBrandRefresh: n,
            buttonVisibilityRef: i,
            userDiscountOffer: s,
            discountedPrice: a
        } = e, {
            analyticsLocations: c
        } = (0, p.Ay)(_.A.PREMIUM_MARKETING_HERO_CTA), u = (0, C.d)(), A = (0, E.cg)(), f = (0, O.QQ)(), h = W.intl.string(W.t.qYKftX), x = (0, N.m)(), S = (0, r.jsx)(ee, {
            className: t
        }), T = W.intl.string(W.t.ifwQZb), {
            fractionalState: I,
            endsAt: y
        } = (0, g.A)(), j = (0, m.Ay)(y, m.yE.CREDITS_ENDS_IN);
        u || A ? S = (0, r.jsx)(en, {
            isEligibleForBogoPromotion: A
        }) : x && (h = W.intl.string(W.t.qYKftX), S = (0, r.jsx)(et, {}));
        let v = null;
        if (I === F.xc.NONE || u) v = n ? (0, r.jsx)(B.A, {
            enablePremiumBrandRefresh: !0,
            text: h
        }) : (0, r.jsx)(M.ir, {
            className: l()(K.Av, {
                [K.R]: !f
            }),
            text: h,
            colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL
        });
        else {
            f = !0;
            let e = (0, r.jsx)("div", {
                    className: K.nW,
                    children: (0, r.jsx)(d.mir, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)"
                    })
                }),
                t = W.intl.format(W.t["yR+oDD"], {
                    helpCenterLink: b.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
                });
            v = (0, r.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: K.YL,
                position: "right",
                children: t => (0, r.jsx)("div", J(q({}, t), {
                    className: K.V_,
                    children: (0, r.jsx)("div", {
                        className: K.eL,
                        children: n ? (0, r.jsx)(B.A, {
                            enablePremiumBrandRefresh: !0,
                            text: j
                        }) : (0, r.jsx)(M.R, {
                            className: l()(K.Av, {
                                [K.R]: !f
                            }),
                            text: j,
                            colorOptions: M.at.PREMIUM_TIER_2_WHITE_FILL,
                            icon: e,
                            gap: !1
                        })
                    })
                }))
            })
        }
        return (0, r.jsx)(p.f5, {
            value: c,
            children: (0, r.jsx)(er.Provider, {
                value: {
                    headingText: T,
                    headingTop: v,
                    showPill: f,
                    userDiscountOffer: s,
                    discountedPrice: a,
                    buttonVisibilityRef: i
                },
                children: n ? (0, r.jsx)($, {
                    className: t,
                    isEligibleForBogoPromotion: A,
                    isInReverseTrial: u,
                    shouldShowReferralProgressBar: x
                }) : S
            })
        })
    }