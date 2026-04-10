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
    g = n(366999),
    A = n(531260),
    x = n(780964),
    h = n(858897),
    f = n(166403),
    b = n(786300),
    N = n(975571),
    C = n(927578),
    R = n(40185),
    v = n(89366),
    E = n(881489),
    j = n(422936),
    I = n(234419),
    T = n(549996),
    y = n(371764),
    P = n(130946),
    S = n(103411),
    M = n(534217),
    O = n(194509),
    D = n(396375),
    L = n(65470),
    U = n(792656),
    k = n(511484),
    B = n(939724),
    w = n(774774),
    G = n(473702),
    H = n(505559),
    V = n(722274),
    F = n(103733),
    W = n(508480),
    z = n(229289),
    Y = n(253558),
    X = n(788868),
    K = n(652215),
    q = n(985018),
    Z = n(219424),
    Q = n(320905),
    $ = n(461971),
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
        } = e, s = (0, E.Zb)(t);
        return (0, i.jsx)("div", {
            className: a()(Q.kL, n),
            ref: r,
            children: (0, i.jsxs)("div", {
                className: Q.ap,
                children: [(0, i.jsxs)(u.BJc, {
                    align: "start",
                    gap: 32,
                    children: [(0, i.jsx)(H.A, {
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
            showPill: g,
            userDiscountOffer: x,
            discountedPrice: h,
            buttonVisibilityRef: b
        } = el(), {
            analyticsLocations: N
        } = (0, p.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), R = (0, T.c)(s.C.MARKETING_PAGE_BANNER), v = null;
        null != R && "marketingPageBanner" === R.properties.properties.oneofKind ? v = (0, i.jsx)(y.x, {
            componentId: R.id,
            promotionBannerMarketingComponentFields: R.properties.properties.marketingPageBanner
        }) : n ? v = (0, i.jsx)(P.A, {
            variant: P.c.SUBSCRIBER_HOME
        }) : r ? v = (0, i.jsx)(V.A, {}) : l && (v = (0, i.jsx)(M.S, {}));
        let E = (0, c.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            S = null != E && E.status === K.Dmq.CANCELED && null != x,
            O = (0, I.V)(),
            D = (0, j.O)(),
            w = (0, k.U9)(D, X.pe.TIER_2) ? X.pe.TIER_2 : void 0,
            H = null != E && E.status !== K.Dmq.ACCOUNT_HOLD && E.hasAnyPremiumNitro,
            W = (0, A.A)(),
            $ = W.isFractionalPremiumActive && !H && null == v && !S,
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
                children: [g && d, (0, i.jsxs)("div", {
                    className: Q.N1,
                    children: [(0, i.jsx)(z.A, {
                        containerVisibilityPercentage: ei
                    }), S && null != x.expires_at && (0, i.jsx)(B.A, {
                        expiresAt: x.expires_at,
                        className: Z.IZ
                    }), (0, i.jsx)(Y.A, {
                        children: S ? q.intl.format(q.t["3yZP0G"], {
                            percent: x.discount.amount
                        }) : o
                    }), S && null != h && (0, i.jsx)(u.Text, {
                        className: Z.jG,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: q.intl.format(q.t["3Q4wCy"], {
                            discountedPrice: h,
                            billingPeriod: (0, C.Ke)(x.discount.user_usage_limit_interval),
                            numMonths: x.discount.user_usage_limit
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: $ || S ? Q.UJ : void 0,
                    children: [$ && (0, i.jsx)(U.A, {
                        size: "md",
                        hasActivePromotion: !!n,
                        subscriptionTier: O?.subscription_trial?.sku_id ?? w
                    }), S && (0, i.jsx)(u.Button, {
                        variant: "expressive",
                        icon: u.tvc,
                        size: "md",
                        text: q.intl.string(q.t.zrCzVB),
                        onClick: () => ee(N, E, G.g.CONFIRM_DISCOUNT)
                    }), (0, i.jsx)(L.A, {
                        variant: $ || S ? "secondary" : "expressive",
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
        } = (0, p.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), g = (0, c.bG)([f.A], () => f.A.getPremiumTypeSubscription()), x = null != g && g.status === K.Dmq.CANCELED && null != s, h = (0, I.V)(), b = (0, j.O)(), N = (0, k.U9)(b, X.pe.TIER_2) ? X.pe.TIER_2 : void 0, R = null != g && g.status !== K.Dmq.ACCOUNT_HOLD && g.hasAnyPremiumNitro, v = (0, A.A)().isFractionalPremiumActive && !R && !x;
        return (0, i.jsxs)("div", {
            className: a()(Z.kL, t),
            "data-testid": "subscriber-nitro-home-hero-header",
            ref: o,
            children: [(0, i.jsx)("img", {
                src: $,
                alt: "",
                className: Z.NC
            }), (0, i.jsxs)("div", {
                className: x ? Z.Nr : Z.Qs,
                children: [r, x && null != s.expires_at && (0, i.jsx)(B.A, {
                    expiresAt: s.expires_at,
                    className: Z.IZ
                }), (0, i.jsx)(u.Heading, {
                    variant: "display-lg",
                    color: "always-white",
                    className: x ? Z.bc : Z.wx,
                    children: x && null != s ? q.intl.format(q.t["3yZP0G"], {
                        percent: s.discount.amount
                    }) : n
                }), x && null != l && (0, i.jsx)(u.Text, {
                    className: Z.RB,
                    variant: "text-sm/medium",
                    color: "always-white",
                    children: q.intl.format(q.t["3Q4wCy"], {
                        discountedPrice: l,
                        billingPeriod: (0, C.Ke)(s.discount.user_usage_limit_interval),
                        numMonths: s.discount.user_usage_limit
                    })
                }), (0, i.jsxs)("div", {
                    className: Z.$J,
                    children: [v && (0, i.jsx)(D.A, {
                        color: d.XD.BRAND,
                        className: a()(Z.x6, Z.xF),
                        subscriptionTier: h?.subscription_trial?.sku_id ?? N
                    }), x && (0, i.jsxs)("div", {
                        className: Z.Cg,
                        children: [(0, i.jsx)(u.Button, {
                            variant: "expressive",
                            icon: u.tvc,
                            size: "md",
                            text: q.intl.string(q.t.zrCzVB),
                            onClick: () => ee(_, g, G.g.CONFIRM_DISCOUNT),
                            fullWidth: !0
                        }), (0, i.jsx)(L.A, {
                            variant: "overlay-secondary",
                            size: "md",
                            buttonTextOverride: q.intl.string(q.t.Ve9Ge6),
                            fullWidth: !0
                        })]
                    }), !x && (0, i.jsx)("div", {
                        className: Z.UO,
                        children: (0, i.jsx)(O.A, {
                            look: d.pR.FILLED,
                            color: d.XD.BRAND,
                            textOptions: {
                                textOverride: q.intl.string(q.t["3KomGa"])
                            },
                            className: Z.x6
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
                className: Z.HJ
            }), (0, i.jsx)("div", {
                className: Z.iW,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: (0, i.jsxs)("div", {
                    className: Z.eF,
                    children: [t, (0, i.jsx)(u.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: Z.wx,
                        children: e
                    }), (0, i.jsx)("div", {
                        className: Z.UO,
                        children: (0, i.jsx)(O.A, {
                            look: d.pR.FILLED,
                            color: d.XD.BRAND,
                            textOptions: {
                                textOverride: q.intl.string(q.t["3KomGa"])
                            },
                            className: Z.x6
                        })
                    }), (0, i.jsx)(M.S, {
                        className: Z.Qq
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
                className: Z.HJ
            }), (0, i.jsxs)(u.BJc, {
                align: "center",
                justify: "center",
                gap: 40,
                className: Z.k1,
                "data-testid": "subscriber-nitro-home-hero-header",
                children: [(0, i.jsxs)(u.BJc, {
                    align: "center",
                    justify: "center",
                    fullWidth: !1,
                    className: Z.nl,
                    children: [r, (0, i.jsx)(u.Heading, {
                        variant: "display-lg",
                        color: "always-white",
                        className: Z.wx,
                        children: n
                    })]
                }), (0, i.jsx)("div", {
                    className: Z.UO,
                    children: (0, i.jsx)(O.A, {
                        look: d.pR.FILLED,
                        color: d.XD.BRAND,
                        textOptions: {
                            textOverride: q.intl.string(q.t["3KomGa"])
                        },
                        className: Z.x6
                    })
                }), !t && (0, i.jsx)(V.A, {}), t && (0, i.jsx)(P.A, {
                    variant: P.c.SUBSCRIBER_HOME
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
        } = (0, p.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA), d = (0, E.ds)(), _ = (0, R.cg)(), x = (0, v.QQ)(), h = q.intl.string(q.t.qYKftX), f = (0, S.m)(), b = (0, i.jsx)(ei, {
            className: t
        }), C = q.intl.string(q.t.ifwQZb), {
            fractionalState: j,
            endsAt: I
        } = (0, A.A)(), T = (0, g.Ay)(I, g.yE.CREDITS_ENDS_IN);
        d || _ ? b = (0, i.jsx)(ea, {
            isEligibleForBogoPromotion: _
        }) : f && (h = q.intl.string(q.t.qYKftX), b = (0, i.jsx)(er, {}));
        let y = null;
        if (j === X.xc.NONE || d) y = n ? (0, i.jsx)(H.A, {
            enablePremiumBrandRefresh: !0,
            text: h
        }) : (0, i.jsx)(w.HU, {
            className: a()(Z.Av, {
                [Z.R]: !x
            }),
            text: h,
            colorOptions: w.at.PREMIUM_TIER_2_WHITE_FILL
        });
        else {
            x = !0;
            let e = (0, i.jsx)("div", {
                    className: Z.nW,
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
                tooltipClassName: Z.YL,
                position: "right",
                children: t => (0, i.jsx)("div", {
                    ...t,
                    className: Z.V_,
                    children: (0, i.jsx)("div", {
                        className: Z.eL,
                        children: n ? (0, i.jsx)(H.A, {
                            enablePremiumBrandRefresh: !0,
                            text: T
                        }) : (0, i.jsx)(w.e4, {
                            className: a()(Z.Av, {
                                [Z.R]: !x
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
                    headingText: C,
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