/** chunk id: 518491 params = (module,exports,require) **/
n.d(t, {
    A: () => ec
});
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(877624),
    l = n(304551),
    c = n(311907),
    o = n(502572),
    d = n(421380),
    u = n(397927),
    _ = n(775602),
    m = n(793574),
    p = n(688810),
    A = n(366999),
    g = n(531260),
    x = n(780964),
    h = n(858897),
    f = n(166403),
    b = n(786300),
    N = n(975571),
    R = n(927578),
    C = n(40185),
    v = n(89366),
    I = n(881489),
    E = n(422936),
    j = n(234419),
    T = n(549996),
    y = n(371764),
    O = n(130946),
    P = n(103411),
    S = n(534217),
    M = n(194509),
    D = n(396375),
    L = n(65470),
    U = n(792656),
    k = n(511484),
    B = n(939724),
    w = n(774774),
    V = n(473702),
    G = n(505559),
    H = n(722274),
    F = n(103733),
    W = n(508480),
    z = n(229289),
    Y = n(253558),
    X = n(788868),
    K = n(652215),
    q = n(985018),
    $ = n(219424),
    Q = n(320905),
    Z = n(461971),
    J = n(828694);
let ee = (e, t, r) => {
        (0, u.mMO)(async () => {
            let {
                PremiumBrandRefreshSubscriptionCancellationModal: a
            } = await Promise.all([n.e("41353"), n.e("35432"), n.e("18398")]).then(n.bind(n, 281439));
            return n => (0, i.jsx)(a, {
                ...n,
                analyticsLocations: e,
                initialStep: r,
                premiumSubscription: t
            })
        })
    },
    et = e => {
        let {
            fpEndsAt: t,
            className: n,
            buttonVisibilityRef: r
        } = e, s = (0, I.Zb)(t);
        return (0, i.jsx)("div", {
            className: a()(Q.kL, n),
            ref: r,
            children: (0, i.jsxs)("div", {
                className: Q.ap,
                children: [(0, i.jsxs)(u.BJc, {
                    align: "start",
                    gap: 32,
                    children: [(0, i.jsx)(G.A, {
                        enablePremiumBrandRefresh: !0,
                        text: q.intl.string(q.t.yhldRB)
                    }), (0, i.jsxs)(u.BJc, {
                        align: "start",
                        gap: 12,
                        className: Q.rG,
                        children: [(0, i.jsx)(Y.A, {
                            children: q.intl.format(q.t.FwjP6W, {
                                days: s
                            })
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: q.intl.string(q.t.Jf8KrT)
                        })]
                    }), (0, i.jsxs)(u.BJc, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [(0, i.jsx)(U.A, {
                            size: "md",
                            buttonTextOverride: q.intl.string(q.t["2+luBl"]),
                            iconOverride: u.tvc,
                            variantOverride: "expressive"
                        }), (0, i.jsx)(u.Button, {
                            variant: "secondary",
                            size: "md",
                            text: q.intl.string(q.t.Af7ye6),
                            onClick: () => (0, h.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL)
                        })]
                    })]
                }), (0, i.jsxs)("div", {
                    className: Q.Hk,
                    children: [(0, i.jsx)(l.C, {
                        alt: "",
                        width: "100%",
                        height: "auto"
                    }), (0, i.jsx)(W.A, {})]
                })]
            })
        })
    },
    en = e => {
        let {
            className: t,
            isEligibleForBogoPromotion: n,
            isInReverseTrial: r,
            shouldShowReferralProgressBar: l
        } = e, {
            headingText: o,
            headingTop: d,
            showPill: A,
            userDiscountOffer: x,
            discountedPrice: h,
            buttonVisibilityRef: b
        } = el(), {
            analyticsLocations: N
        } = (0, p.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), C = (0, T.c)(s.C.MARKETING_PAGE_BANNER), v = null;
        null != C && "marketingPageBanner" === C.properties.properties.oneofKind ? v = (0, i.jsx)(y.x, {
            componentId: C.id,
            promotionBannerMarketingComponentFields: C.properties.properties.marketingPageBanner
        }) : n ? v = (0, i.jsx)(O.A, {
            variant: O.c.SUBSCRIBER_HOME
        }) : r ? v = (0, i.jsx)(H.A, {}) : l && (v = (0, i.jsx)(S.S, {}));
        let I = (0, c.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            P = null != I && I.status === K.Dmq.CANCELED && null != x,
            M = (0, j.V)(),
            D = (0, E.O)(),
            w = (0, k.U9)(D, X.pe.TIER_2) ? X.pe.TIER_2 : void 0,
            G = null != I && I.status !== K.Dmq.ACCOUNT_HOLD && I.hasAnyPremiumNitro,
            W = (0, g.A)(),
            Z = W.isFractionalPremiumActive && !G && null == v && !P,
            J = (0, c.bG)([_.A], () => _.A.useReducedMotion),
            {
                visibilityPercentageRef: en,
                visibilityPercentage: ei
            } = (0, F.U)(!J);
        return r ? (0, i.jsx)(et, {
            fpEndsAt: W.currentEntitlementEndsAt,
            className: t,
            buttonVisibilityRef: b
        }) : (0, i.jsx)("div", {
            className: a()(Q.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: b,
            children: (0, i.jsxs)("div", {
                className: Q.Qs,
                ref: en,
                children: [A && d, (0, i.jsxs)("div", {
                    className: Q.N1,
                    children: [(0, i.jsx)(z.A, {
                        containerVisibilityPercentage: ei
                    }), P && null != x.expires_at && (0, i.jsx)(B.A, {
                        expiresAt: x.expires_at,
                        className: $.IZ
                    }), (0, i.jsx)(Y.A, {
                        children: P ? q.intl.format(q.t["3yZP0G"], {
                            percent: x.discount.amount
                        }) : o
                    }), P && null != h && (0, i.jsx)(u.Text, {
                        className: $.jG,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: q.intl.format(q.t["3Q4wCy"], {
                            discountedPrice: h,
                            billingPeriod: (0, R.Ke)(x.discount.user_usage_limit_interval),
                            numMonths: x.discount.user_usage_limit
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: Z || P ? Q.UJ : void 0,
                    children: [Z && (0, i.jsx)(U.A, {
                        size: "md",
                        hasActivePromotion: !!n,
                        subscriptionTier: M?.subscription_trial?.sku_id ?? w
                    }), P && (0, i.jsx)(u.Button, {
                        variant: "expressive",
                        icon: u.tvc,
                        size: "md",
                        text: q.intl.string(q.t.zrCzVB),
                        onClick: () => ee(N, I, V.g.CONFIRM_DISCOUNT)
                    }), (0, i.jsx)(L.A, {
                        variant: Z || P ? "secondary" : "expressive",
                        size: "md",
                        buttonTextOverride: q.intl.string(q.t["3KomGa"])
                    })]
                }), v]
            })
        })
    },
    ei = e => {
        let {
            className: t
        } = e, {
            headingText: n,
            headingTop: r,
            userDiscountOffer: s,
            discountedPrice: l,
            buttonVisibilityRef: o
        } = el(), {
            analyticsLocations: _
        } = (0, p.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), A = (0, c.bG)([f.A], () => f.A.getPremiumTypeSubscription()), x = null != A && A.status === K.Dmq.CANCELED && null != s, h = (0, j.V)(), b = (0, E.O)(), N = (0, k.U9)(b, X.pe.TIER_2) ? X.pe.TIER_2 : void 0, C = null != A && A.status !== K.Dmq.ACCOUNT_HOLD && A.hasAnyPremiumNitro, v = (0, g.A)().isFractionalPremiumActive && !C && !x;
        return (0, i.jsxs)("div", {
            className: a()($.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: o,
            children: [(0, i.jsx)("img", {
                src: Z,
                alt: "",
                className: $.NC
            }), (0, i.jsxs)("div", {
                className: x ? $.Nr : $.Qs,
                children: [r, x && null != s.expires_at && (0, i.jsx)(B.A, {
                    expiresAt: s.expires_at,
                    className: $.IZ
                }), (0, i.jsx)(u.Heading, {
                    variant: "display-lg",
                    color: "always-white",
                    className: x ? $.bc : $.wx,
                    children: x && null != s ? q.intl.format(q.t["3yZP0G"], {
                        percent: s.discount.amount
                    }) : n
                }), x && null != l && (0, i.jsx)(u.Text, {
                    className: $.RB,
                    variant: "text-sm/medium",
                    color: "always-white",
                    children: q.intl.format(q.t["3Q4wCy"], {
                        discountedPrice: l,
                        billingPeriod: (0, R.Ke)(s.discount.user_usage_limit_interval),
                        numMonths: s.discount.user_usage_limit
                    })
                }), (0, i.jsxs)("div", {
                    className: $.$J,
                    children: [v && (0, i.jsx)(D.A, {
                        color: d.XD.BRAND,
                        className: a()($.x6, $.xF),
                        subscriptionTier: h?.subscription_trial?.sku_id ?? N
                    }), x && (0, i.jsxs)("div", {
                        className: $.Cg,
                        children: [(0, i.jsx)(u.Button, {
                            variant: "expressive",
                            icon: u.tvc,
                            size: "md",
                            text: q.intl.string(q.t.zrCzVB),
                            onClick: () => ee(_, A, V.g.CONFIRM_DISCOUNT),
                            fullWidth: !0
                        }), (0, i.jsx)(L.A, {
                            variant: "overlay-secondary",
                            size: "md",
                            buttonTextOverride: q.intl.string(q.t.Ve9Ge6),
                            fullWidth: !0
                        })]
                    }), !x && (0, i.jsx)("div", {
                        className: $.UO,
                        children: (0, i.jsx)(M.A, {
                            look: d.pR.FILLED,
                            color: d.XD.BRAND,
                            textOptions: {
                                textOverride: q.intl.string(q.t["3KomGa"])
                            },
                            className: $.x6
                        })
                    })]
                })]
            })]
        })
    },
    er = () => {
        let {
            headingText: e,
            headingTop: t
        } = el();
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
                src: J,
                alt: "",
                className: $.HJ
            }), (0, i.jsx)("div", {
                className: $.iW,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: (0, i.jsxs)("div", {
                    className: $.eF,
                    children: [t, (0, i.jsx)(u.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: $.wx,
                        children: e
                    }), (0, i.jsx)("div", {
                        className: $.UO,
                        children: (0, i.jsx)(M.A, {
                            look: d.pR.FILLED,
                            color: d.XD.BRAND,
                            textOptions: {
                                textOverride: q.intl.string(q.t["3KomGa"])
                            },
                            className: $.x6
                        })
                    }), (0, i.jsx)(S.S, {
                        className: $.Qq
                    })]
                })
            })]
        })
    },
    ea = e => {
        let {
            isEligibleForBogoPromotion: t
        } = e, {
            headingText: n,
            headingTop: r
        } = el();
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
                src: J,
                alt: "",
                className: $.HJ
            }), (0, i.jsxs)(u.BJc, {
                align: "center",
                justify: "center",
                gap: 40,
                className: $.k1,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: [(0, i.jsxs)(u.BJc, {
                    align: "center",
                    justify: "center",
                    fullWidth: !1,
                    className: $.nl,
                    children: [r, (0, i.jsx)(u.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: $.wx,
                        children: n
                    })]
                }), (0, i.jsx)("div", {
                    className: $.UO,
                    children: (0, i.jsx)(M.A, {
                        look: d.pR.FILLED,
                        color: d.XD.BRAND,
                        textOptions: {
                            textOverride: q.intl.string(q.t["3KomGa"])
                        },
                        className: $.x6
                    })
                }), !t && (0, i.jsx)(H.A, {}), t && (0, i.jsx)(O.A, {
                    variant: O.c.SUBSCRIBER_HOME
                })]
            })]
        })
    },
    [es, el] = (0, b.A)(),
    ec = e => {
        let {
            className: t,
            enablePremiumBrandRefresh: n,
            buttonVisibilityRef: r,
            userDiscountOffer: s,
            discountedPrice: l
        } = e, {
            analyticsLocations: c
        } = (0, p.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), d = (0, I.ds)(), _ = (0, C.cg)(), x = (0, v.QQ)(), h = q.intl.string(q.t.qYKftX), f = (0, P.m)(), b = (0, i.jsx)(ei, {
            className: t
        }), R = q.intl.string(q.t.ifwQZb), {
            fractionalState: E,
            endsAt: j
        } = (0, g.A)(), T = (0, A.Ay)(j, A.yE.CREDITS_ENDS_IN);
        d || _ ? b = (0, i.jsx)(ea, {
            isEligibleForBogoPromotion: _
        }) : f && (h = q.intl.string(q.t.qYKftX), b = (0, i.jsx)(er, {}));
        let y = null;
        if (E === X.xc.NONE || d) y = n ? (0, i.jsx)(G.A, {
            enablePremiumBrandRefresh: !0,
            text: h
        }) : (0, i.jsx)(w.HU, {
            className: a()($.Av, {
                [$.R]: !x
            }),
            text: h,
            colorOptions: w.at.PREMIUM_TIER_2_WHITE_FILL
        });
        else {
            x = !0;
            let e = (0, i.jsx)("div", {
                    className: $.nW,
                    children: (0, i.jsx)(u.mir, {
                        size: "xxs",
                        color: "var(--premium-tier-2-purple-for-gradients)"
                    })
                }),
                t = q.intl.format(q.t["yR+oDD"], {
                    helpCenterLink: N.A.getArticleURL(K.MVz.FRACTIONAL_PREMIUM_ABOUT)
                });
            y = (0, i.jsx)(o.A, {
                text: t,
                "aria-label": t.toString(),
                tooltipClassName: $.YL,
                position: "right",
                children: t => (0, i.jsx)("div", {
                    ...t,
                    className: $.V_,
                    children: (0, i.jsx)("div", {
                        className: $.eL,
                        children: n ? (0, i.jsx)(G.A, {
                            enablePremiumBrandRefresh: !0,
                            text: T
                        }) : (0, i.jsx)(w.e4, {
                            className: a()($.Av, {
                                [$.R]: !x
                            }),
                            text: T,
                            colorOptions: w.at.PREMIUM_TIER_2_WHITE_FILL,
                            icon: e,
                            gap: !1
                        })
                    })
                })
            })
        }
        return (0, i.jsx)(p.f5, {
            value: c,
            children: (0, i.jsx)(es.Provider, {
                value: {
                    headingText: R,
                    headingTop: y,
                    showPill: x,
                    userDiscountOffer: s,
                    discountedPrice: l,
                    buttonVisibilityRef: r
                },
                children: n ? (0, i.jsx)(en, {
                    className: t,
                    isEligibleForBogoPromotion: _,
                    isInReverseTrial: d,
                    shouldShowReferralProgressBar: f
                }) : b
            })
        })
    }