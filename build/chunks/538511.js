/** chunk id: 538511 params = (module,exports,require) **/
n.d(t, {
    A: () => W,
    i: () => X
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(284009),
    r = n.n(a),
    o = n(735438),
    d = n(435371),
    c = n(397927),
    u = n(158032),
    _ = n(793574),
    m = n(688810),
    g = n(531260),
    A = n(626584),
    x = n(639289),
    h = n(532794),
    p = n(832946),
    T = n(97352),
    E = n(481354),
    S = n(85563),
    C = n(739508),
    f = n(203982),
    b = n(927578),
    N = n(83617),
    I = n(615396),
    v = n(526292),
    j = n(637073),
    y = n(573359),
    R = n(110919),
    O = n(422936),
    P = n(795269),
    L = n(327479),
    D = n(473702),
    M = n(788868),
    G = n(652215),
    U = n(601107),
    k = n(985018),
    V = n(893233);
let w = new A.A("SubscriptionHeader.tsx"),
    B = {
        page: G.liQ.USER_SETTINGS,
        section: G.JJy.SETTINGS_PREMIUM,
        object: G.ZSU.CARD
    },
    H = [G.Dmq.PAUSED, G.Dmq.PAUSE_PENDING, G.Dmq.BILLING_RETRY];

function F(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(V.vK, a),
        children: [(0, i.jsx)("div", {
            className: V.aK
        }), (0, i.jsxs)("div", {
            className: V.wt,
            children: [(0, i.jsx)("div", {
                className: V.Sl
            }), (0, i.jsxs)("div", {
                className: V.zH,
                children: [(0, i.jsxs)("div", {
                    className: V.Gp,
                    children: [t, r && null != o && (0, i.jsx)(P.ir, {
                        text: k.intl.formatToPlainString(k.t.iiLbvu, {
                            percent: o
                        }),
                        className: V.NM,
                        colorOptions: P.at.PREMIUM_TIER_2_WHITE_FILL,
                        isPillOnBorder: !1
                    })]
                }), n]
            })]
        }), (0, i.jsx)("div", {
            className: V.Uo,
            children: s
        })]
    })
}

function Y(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(V.vK, a, V.uR),
        children: [(0, i.jsx)("div", {
            className: V.aK
        }), (0, i.jsx)("div", {
            className: V.wt,
            children: (0, i.jsx)("div", {
                className: V.zH,
                children: (0, i.jsxs)("div", {
                    className: V.Gp,
                    children: [(0, i.jsx)("div", {
                        className: V.Sl
                    }), (0, i.jsxs)("div", {
                        className: V.Ck,
                        children: [t, r && null != o && (0, i.jsx)(P.ir, {
                            text: k.intl.formatToPlainString(k.t.iiLbvu, {
                                percent: o
                            }),
                            className: V.NM,
                            colorOptions: P.at.PREMIUM_TIER_2_WHITE_FILL,
                            isPillOnBorder: !1
                        }), n]
                    })]
                })
            })
        }), (0, i.jsx)("div", {
            className: V.Uo,
            children: s
        })]
    })
}

function z() {
    return (0, i.jsxs)("div", {
        className: V.Up,
        children: [(0, i.jsx)(S.A, {
            className: V.sq,
            "aria-label": k.intl.string(k.t.FSOz78)
        }), (0, i.jsx)("div", {
            className: V.CJ
        })]
    })
}

function X() {
    let {
        analyticsLocations: e
    } = (0, m.Ay)(_.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(F, {
        wordMark: (0, i.jsx)(z, {}),
        subscriptionInfo: (0, i.jsx)("div", {
            className: V.MS,
            children: k.intl.string(k.t.R0GJL2)
        }),
        buttons: (0, i.jsx)(L.A, {
            className: V.au,
            onClick: () => (0, h.A)({
                subscriptionTier: M.pe.TIER_1,
                analyticsLocations: e,
                analyticsObject: B
            }),
            text: k.intl.string(k.t["/ygMUY"])
        }),
        statusClasses: {
            [V.aS]: !0
        }
    })
}
let W = function(e) {
    let {
        subscription: t,
        currentInvoicePreview: s,
        renewalInvoicePreview: a,
        paymentSource: A,
        busy: P,
        analyticsLocation: X
    } = e, {
        analyticsLocations: W
    } = (0, m.Ay)(_.A.SUBSCRIPTION_HEADER), K = (0, g.A)({
        forceFetch: !1
    }), {
        fractionalState: Z
    } = K, q = Z === M.xc.FP_SUB_PAUSED, {
        enabled: J
    } = (0, R.Ay)({
        location: "subscription_header"
    });
    M.QV.has(t.planId) && G.Uyk.ALL_PAUSEABLE.has(t.status) && !q || (J = !1);
    let Q = (0, O.O)(),
        $ = Q?.discount?.amount,
        ee = (0, v.k5)(),
        et = (0, v.nf)(),
        en = (0, j.d)(),
        ei = () => {
            (t.status === G.Dmq.ACTIVE || t.status === G.Dmq.PAST_DUE || t.status === G.Dmq.PAUSED) && ea(D.g.PAUSE_SELECT)
        },
        es = () => {
            (t.status === G.Dmq.ACTIVE || t.status === G.Dmq.PAST_DUE || t.status === G.Dmq.PAUSE_PENDING || q) && ea()
        },
        el = () => {
            t.status === G.Dmq.BILLING_RETRY && ea(D.g.CONFIRM)
        },
        ea = e => {
            (0, c.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: s
                } = await Promise.all([n.e("41353"), n.e("35432"), n.e("49561")]).then(n.bind(n, 281439));
                return n => (0, i.jsx)(s, {
                    ...n,
                    premiumSubscription: t,
                    analyticsLocation: X,
                    analyticsLocations: W,
                    initialStep: e
                })
            })
        },
        er = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = T.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void w.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let l = (0, N._w)(e, A?.id, !1),
                    d = l.length > 0 ? l[0] : t.currency,
                    u = !0;
                if (1 === l.length && A?.id === t.paymentSourceId && (0, N.jJ)(e.id, d, A?.id) && (u = !1), u)(0, h.A)({
                    initialPlanId: t.premiumPlanIdFromItems,
                    analyticsLocations: W,
                    analyticsLocation: X,
                    analyticsObject: B,
                    subscription: t
                });
                else {
                    let e, l;
                    r()(null != a, "Expected renewalInvoicePreview"), r()(null != s, "Expected currentInvoicePreview"), e = (0, o.uniqueId)("premium-resubscribe-modal"), l = !1, (0, c.mMO)(async () => {
                        let {
                            PremiumResubscribeModal: e
                        } = await Promise.all([n.e("41353"), n.e("29716"), n.e("14704"), n.e("2824"), n.e("64434")]).then(n.bind(n, 46292));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            premiumSubscription: t,
                            analyticsLocations: W,
                            fractionalPremiumInfo: K,
                            currentInvoicePreview: s,
                            renewalInvoicePreview: a,
                            onClose: async () => {
                                l || (l = !0, f._.dispatch(G.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated ? setTimeout(() => {
                                    n.onClose()
                                }, x.K) : await n.onClose())
                            }
                        })
                    }, {
                        onCloseRequest: () => {
                            l || (l = !0, f._.dispatch(G.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated ? setTimeout(() => {
                                (0, c.OoC)(e)
                            }, x.K) : (0, c.OoC)(e))
                        },
                        modalKey: e
                    })
                }
            }
        },
        eo = () => {
            H.includes(t.status) && null != t.pauseEndsAt ? t.status === G.Dmq.PAUSED && t.pauseReason !== U.qf.USER_TEMPORARY_BAN ? (0, h.A)({
                initialPlanId: t.premiumPlanIdFromItems,
                analyticsLocations: W,
                analyticsLocation: X,
                analyticsObject: B,
                subscription: t,
                skipConfirm: !0
            }) : u.U(t, W) : (0, C.pM)(Error("Invalid subscription to resume"), {
                extra: {
                    subscriptionId: t.id,
                    status: t.status,
                    pauseEndsAt: t.pauseEndsAt
                }
            })
        },
        ed = () => {
            t.status === G.Dmq.PAUSED && ea(D.g.PAUSE_SELECT)
        },
        ec = () => {
            ea(D.g.WHAT_YOU_LOSE)
        },
        eu = b.Ay.getPlanIdFromInvoice(t, s);
    if ((0, p.m1)(eu)) return null;
    let e_ = b.Ay.getStatusFromInvoice(t, s),
        em = b.Ay.getPremiumType(eu),
        eg = {
            [V.Vd]: em === M.PremiumTypes.TIER_0,
            [V.aS]: em === M.PremiumTypes.TIER_1,
            [V.hA]: em === M.PremiumTypes.TIER_2,
            [V.aD]: e_ === G.Dmq.CANCELED,
            [V.WY]: e_ === G.Dmq.PAUSE_PENDING,
            [V.Ft]: e_ === G.Dmq.PAUSED && !q,
            [V.GD]: (0, b.PK)(e_)
        },
        eA = null;
    switch (em) {
        case M.PremiumTypes.TIER_0:
            eA = (0, i.jsxs)("div", {
                className: V.Up,
                children: [(0, i.jsx)(S.A, {
                    className: V.sq,
                    "aria-label": k.intl.string(k.t["t9uG/o"])
                }), (0, i.jsx)("div", {
                    className: V.sT
                })]
            });
            break;
        case M.PremiumTypes.TIER_1:
            eA = (0, i.jsx)(z, {});
            break;
        case M.PremiumTypes.TIER_2:
            eA = (0, i.jsx)(E.A, {
                className: V.V6,
                "aria-label": k.intl.string(k.t.lpNrPu)
            })
    }
    let ex = H.includes(t.status) && !q ? Y : F;
    return (0, i.jsx)(ex, {
        wordMark: eA,
        subscriptionInfo: (r()(null != s, "Expected currentInvoicePreview"), (0, i.jsx)("div", {
            className: V.MS,
            children: en ? k.intl.format(k.t["/SfHwl"], {
                weeks: 1
            }) : (0, b.nB)({
                planId: eu,
                subscription: t,
                renewalInvoicePreview: s,
                hasDiscountApplied: ee,
                activeDiscountInfo: et,
                hasFractionalPremiumWithSub: q
            })
        })),
        buttons: (() => {
            let {
                status: e
            } = t;
            if (t.isPurchasedExternally) {
                let e = (0, b.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: P,
                        text: k.intl.string(k.t.obRG6Y).toLocaleUpperCase()
                    })
                })
            }

            function n() {
                let e = b.Ay.isSwitchingPlansDisabled(t),
                    n = b.Ay.getSwitchingPlansDisabledMessage(t);
                return (0, i.jsxs)("div", {
                    className: V.Lv,
                    children: [J ? (0, i.jsx)("div", {
                        className: V.xP,
                        children: (0, i.jsx)(c.QWc, {
                            variant: "always-white",
                            disabled: P,
                            onClick: ei,
                            size: "sm",
                            text: k.intl.string(k.t.eFlYVA)
                        })
                    }) : (0, i.jsx)("div", {
                        className: V.Nn,
                        children: (0, i.jsx)(c.QWc, {
                            variant: "always-white",
                            onClick: es,
                            disabled: P,
                            size: "sm",
                            text: k.intl.string(k.t["ETE/oC"])
                        })
                    }), (0, i.jsx)(d.m_, {
                        text: n,
                        asContainer: !0,
                        children: (0, i.jsx)(L.A, {
                            className: l()(V.au, V.lB),
                            disabled: e,
                            onClick: () => {
                                (0, h.A)({
                                    analyticsLocations: W,
                                    analyticsLocation: X,
                                    analyticsObject: B,
                                    subscription: t
                                })
                            },
                            text: k.intl.string(k.t["dylp/7"])
                        })
                    })]
                })
            }
            if (b.Ay.isBaseSubscriptionCanceled(t)) return (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: V.au,
                children: (0, i.jsx)(c.Button, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: k.intl.string(k.t.iIvF2z),
                    loading: P,
                    onClick: er
                })
            });
            switch (e) {
                case G.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: el,
                        loading: P,
                        text: k.intl.string(k.t["ETE/oC"])
                    });
                case G.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: V.Lv,
                        children: [(0, i.jsx)("div", {
                            className: V.Nn,
                            children: (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                disabled: P,
                                onClick: es,
                                size: "sm",
                                text: k.intl.string(k.t.cM1H0K)
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: V.au,
                            children: (0, i.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: k.intl.string(k.t.TgV5Qf),
                                loading: P,
                                onClick: eo
                            })
                        })]
                    });
                case G.Dmq.PAUSED:
                    if (q) return n();
                    let {
                        durations: s
                    } = (0, I.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: V.Lv,
                        children: [(0, i.jsx)("div", {
                            className: V.Nn,
                            children: s.length > 0 ? (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: ed,
                                disabled: P,
                                size: "sm",
                                text: k.intl.string(k.t.jNHWt6)
                            }) : (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: ec,
                                disabled: P,
                                size: "sm",
                                text: k.intl.string(k.t.cM1H0K)
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: V.au,
                            children: (0, i.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: k.intl.string(k.t.zpi5pg),
                                loading: P,
                                onClick: eo
                            })
                        })]
                    });
                case G.Dmq.ACTIVE:
                case G.Dmq.PAST_DUE:
                    return n()
            }
        })(),
        statusClasses: eg,
        shouldUseDiscountMarketing: ee,
        discountAmount: $
    })
}