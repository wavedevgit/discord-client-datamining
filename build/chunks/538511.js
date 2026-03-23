/** chunk id: 538511 params = (module,exports,require) **/
n.d(t, {
    A: () => X,
    i: () => Y
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
    m = n(793574),
    _ = n(688810),
    g = n(531260),
    A = n(626584),
    x = n(639289),
    p = n(532794),
    h = n(832946),
    f = n(97352),
    T = n(481354),
    E = n(85563),
    S = n(739508),
    b = n(203982),
    C = n(927578),
    N = n(83617),
    v = n(615396),
    I = n(526292),
    j = n(637073),
    y = n(573359),
    O = n(422936),
    R = n(795269),
    L = n(327479),
    P = n(473702),
    D = n(788868),
    M = n(652215),
    G = n(601107),
    k = n(985018),
    U = n(282151);
let w = new A.A("SubscriptionHeader.tsx"),
    V = {
        page: M.liQ.USER_SETTINGS,
        section: M.JJy.SETTINGS_PREMIUM,
        object: M.ZSU.CARD
    },
    B = [M.Dmq.PAUSED, M.Dmq.PAUSE_PENDING, M.Dmq.BILLING_RETRY];

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
        className: l()(U.vK, a),
        children: [(0, i.jsx)("div", {
            className: U.aK
        }), (0, i.jsxs)("div", {
            className: U.wt,
            children: [(0, i.jsx)("div", {
                className: U.Sl
            }), (0, i.jsxs)("div", {
                className: U.zH,
                children: [(0, i.jsxs)("div", {
                    className: U.Gp,
                    children: [t, r && null != o && (0, i.jsx)(R.ir, {
                        text: k.intl.formatToPlainString(k.t.iiLbvu, {
                            percent: o
                        }),
                        className: U.NM,
                        colorOptions: R.at.PREMIUM_TIER_2_WHITE_FILL,
                        isPillOnBorder: !1
                    })]
                }), n]
            })]
        }), (0, i.jsx)("div", {
            className: U.Uo,
            children: s
        })]
    })
}

function H(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(U.vK, a, U.uR),
        children: [(0, i.jsx)("div", {
            className: U.aK
        }), (0, i.jsx)("div", {
            className: U.wt,
            children: (0, i.jsx)("div", {
                className: U.zH,
                children: (0, i.jsxs)("div", {
                    className: U.Gp,
                    children: [(0, i.jsx)("div", {
                        className: U.Sl
                    }), (0, i.jsxs)("div", {
                        className: U.Ck,
                        children: [t, r && null != o && (0, i.jsx)(R.ir, {
                            text: k.intl.formatToPlainString(k.t.iiLbvu, {
                                percent: o
                            }),
                            className: U.NM,
                            colorOptions: R.at.PREMIUM_TIER_2_WHITE_FILL,
                            isPillOnBorder: !1
                        }), n]
                    })]
                })
            })
        }), (0, i.jsx)("div", {
            className: U.Uo,
            children: s
        })]
    })
}

function z() {
    return (0, i.jsxs)("div", {
        className: U.Up,
        children: [(0, i.jsx)(E.A, {
            className: U.sq,
            "aria-label": k.intl.string(k.t.FSOz78)
        }), (0, i.jsx)("div", {
            className: U.CJ
        })]
    })
}

function Y() {
    let {
        analyticsLocations: e
    } = (0, _.Ay)(m.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(F, {
        wordMark: (0, i.jsx)(z, {}),
        subscriptionInfo: (0, i.jsx)("div", {
            className: U.MS,
            children: k.intl.string(k.t.R0GJL2)
        }),
        buttons: (0, i.jsx)(L.A, {
            className: U.au,
            onClick: () => (0, p.A)({
                subscriptionTier: D.pe.TIER_1,
                analyticsLocations: e,
                analyticsObject: V
            }),
            text: k.intl.string(k.t["/ygMUY"])
        }),
        statusClasses: {
            [U.aS]: !0
        }
    })
}
let X = function(e) {
    let {
        subscription: t,
        currentInvoicePreview: s,
        renewalInvoicePreview: a,
        paymentSource: A,
        busy: R,
        analyticsLocation: Y
    } = e, {
        analyticsLocations: X
    } = (0, _.Ay)(m.A.SUBSCRIPTION_HEADER), W = (0, g.A)({
        forceFetch: !1
    }), {
        fractionalState: K
    } = W, Z = K === D.xc.FP_SUB_PAUSED, q = (0, O.O)(), J = q?.discount?.amount, Q = (0, I.k5)(), $ = (0, I.nf)(), ee = (0, j.d)(), et = () => {
        (t.status === M.Dmq.ACTIVE || t.status === M.Dmq.PAST_DUE || t.status === M.Dmq.PAUSE_PENDING || Z) && ei()
    }, en = () => {
        t.status === M.Dmq.BILLING_RETRY && ei(P.g.CONFIRM)
    }, ei = e => {
        (0, c.mMO)(async () => {
            let {
                PremiumBrandRefreshSubscriptionCancellationModal: s
            } = await Promise.all([n.e("41353"), n.e("35432"), n.e("82383")]).then(n.bind(n, 281439));
            return n => (0, i.jsx)(s, {
                ...n,
                premiumSubscription: t,
                analyticsLocation: Y,
                analyticsLocations: X,
                initialStep: e
            })
        })
    }, es = () => {
        if (null != t && null != t.premiumPlanIdFromItems) {
            let e = f.A.get(t.premiumPlanIdFromItems);
            if (null == e) return void w.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
            let l = (0, N._w)(e, A?.id, !1),
                d = l.length > 0 ? l[0] : t.currency,
                u = !0;
            if (1 === l.length && A?.id === t.paymentSourceId && (0, N.jJ)(e.id, d, A?.id) && (u = !1), u)(0, p.A)({
                initialPlanId: t.premiumPlanIdFromItems,
                analyticsLocations: X,
                analyticsLocation: Y,
                analyticsObject: V,
                subscription: t
            });
            else {
                let e, l;
                r()(null != a, "Expected renewalInvoicePreview"), r()(null != s, "Expected currentInvoicePreview"), e = (0, o.uniqueId)("premium-resubscribe-modal"), l = !1, (0, c.mMO)(async () => {
                    let {
                        PremiumResubscribeModal: e
                    } = await Promise.all([n.e("41353"), n.e("29716"), n.e("14704"), n.e("2824"), n.e("30834")]).then(n.bind(n, 46292));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocations: X,
                        fractionalPremiumInfo: W,
                        currentInvoicePreview: s,
                        renewalInvoicePreview: a,
                        onClose: async () => {
                            l || (l = !0, b._.dispatch(M.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated ? setTimeout(() => {
                                n.onClose()
                            }, x.K) : await n.onClose())
                        }
                    })
                }, {
                    onCloseRequest: () => {
                        l || (l = !0, b._.dispatch(M.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated ? setTimeout(() => {
                            (0, c.OoC)(e)
                        }, x.K) : (0, c.OoC)(e))
                    },
                    modalKey: e
                })
            }
        }
    }, el = () => {
        B.includes(t.status) && null != t.pauseEndsAt ? t.status === M.Dmq.PAUSED && t.pauseReason !== G.qf.USER_TEMPORARY_BAN ? (0, p.A)({
            initialPlanId: t.premiumPlanIdFromItems,
            analyticsLocations: X,
            analyticsLocation: Y,
            analyticsObject: V,
            subscription: t,
            skipConfirm: !0
        }) : u.U(t, X) : (0, S.pM)(Error("Invalid subscription to resume"), {
            extra: {
                subscriptionId: t.id,
                status: t.status,
                pauseEndsAt: t.pauseEndsAt
            }
        })
    }, ea = () => {
        t.status === M.Dmq.PAUSED && ei(P.g.PAUSE_SELECT)
    }, er = () => {
        ei(P.g.WHAT_YOU_LOSE)
    }, eo = C.Ay.getPlanIdFromInvoice(t, s);
    if ((0, h.m1)(eo)) return null;
    let ed = C.Ay.getStatusFromInvoice(t, s),
        ec = C.Ay.getPremiumType(eo),
        eu = {
            [U.Vd]: ec === D.PremiumTypes.TIER_0,
            [U.aS]: ec === D.PremiumTypes.TIER_1,
            [U.hA]: ec === D.PremiumTypes.TIER_2,
            [U.aD]: ed === M.Dmq.CANCELED,
            [U.WY]: ed === M.Dmq.PAUSE_PENDING,
            [U.Ft]: ed === M.Dmq.PAUSED && !Z,
            [U.GD]: (0, C.PK)(ed)
        },
        em = null;
    switch (ec) {
        case D.PremiumTypes.TIER_0:
            em = (0, i.jsxs)("div", {
                className: U.Up,
                children: [(0, i.jsx)(E.A, {
                    className: U.sq,
                    "aria-label": k.intl.string(k.t["t9uG/o"])
                }), (0, i.jsx)("div", {
                    className: U.sT
                })]
            });
            break;
        case D.PremiumTypes.TIER_1:
            em = (0, i.jsx)(z, {});
            break;
        case D.PremiumTypes.TIER_2:
            em = (0, i.jsx)(T.A, {
                className: U.V6,
                "aria-label": k.intl.string(k.t.lpNrPu)
            })
    }
    let e_ = B.includes(t.status) && !Z ? H : F;
    return (0, i.jsx)(e_, {
        wordMark: em,
        subscriptionInfo: (r()(null != s, "Expected currentInvoicePreview"), (0, i.jsx)("div", {
            className: U.MS,
            children: ee ? k.intl.format(k.t["/SfHwl"], {
                weeks: 1
            }) : (0, C.nB)({
                planId: eo,
                subscription: t,
                renewalInvoicePreview: s,
                hasDiscountApplied: Q,
                activeDiscountInfo: $,
                hasFractionalPremiumWithSub: Z
            })
        })),
        buttons: (() => {
            let {
                status: e
            } = t;
            if (t.isPurchasedExternally) {
                let e = (0, C.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: R,
                        text: k.intl.string(k.t.obRG6Y).toLocaleUpperCase()
                    })
                })
            }

            function n() {
                let e = C.Ay.isSwitchingPlansDisabled(t),
                    n = C.Ay.getSwitchingPlansDisabledMessage(t);
                return (0, i.jsxs)("div", {
                    className: U.Lv,
                    children: [(0, i.jsx)("div", {
                        className: U.Nn,
                        children: (0, i.jsx)(c.QWc, {
                            variant: "always-white",
                            onClick: et,
                            disabled: R,
                            size: "sm",
                            text: k.intl.string(k.t["ETE/oC"])
                        })
                    }), (0, i.jsx)(d.m_, {
                        text: n,
                        asContainer: !0,
                        children: (0, i.jsx)(L.A, {
                            className: l()(U.au, U.lB),
                            disabled: e,
                            onClick: () => {
                                (0, p.A)({
                                    analyticsLocations: X,
                                    analyticsLocation: Y,
                                    analyticsObject: V,
                                    subscription: t
                                })
                            },
                            text: k.intl.string(k.t["dylp/7"])
                        })
                    })]
                })
            }
            if (C.Ay.isBaseSubscriptionCanceled(t)) return (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: U.au,
                children: (0, i.jsx)(c.Button, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: k.intl.string(k.t.iIvF2z),
                    loading: R,
                    onClick: es
                })
            });
            switch (e) {
                case M.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: en,
                        loading: R,
                        text: k.intl.string(k.t["ETE/oC"])
                    });
                case M.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: U.Lv,
                        children: [(0, i.jsx)("div", {
                            className: U.Nn,
                            children: (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                disabled: R,
                                onClick: et,
                                size: "sm",
                                text: k.intl.string(k.t.cM1H0K)
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: U.au,
                            children: (0, i.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: k.intl.string(k.t.TgV5Qf),
                                loading: R,
                                onClick: el
                            })
                        })]
                    });
                case M.Dmq.PAUSED:
                    if (Z) return n();
                    let {
                        durations: s
                    } = (0, v.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: U.Lv,
                        children: [(0, i.jsx)("div", {
                            className: U.Nn,
                            children: s.length > 0 ? (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: ea,
                                disabled: R,
                                size: "sm",
                                text: k.intl.string(k.t.jNHWt6)
                            }) : (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: er,
                                disabled: R,
                                size: "sm",
                                text: k.intl.string(k.t.cM1H0K)
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: U.au,
                            children: (0, i.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: k.intl.string(k.t.zpi5pg),
                                loading: R,
                                onClick: el
                            })
                        })]
                    });
                case M.Dmq.ACTIVE:
                case M.Dmq.PAST_DUE:
                    return n()
            }
        })(),
        statusClasses: eu,
        shouldUseDiscountMarketing: Q,
        discountAmount: J
    })
}