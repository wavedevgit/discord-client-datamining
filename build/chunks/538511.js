/** chunk id: 538511 params = (module,exports,require) **/
n.d(t, {
    A: () => X,
    i: () => Y
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(284009),
    a = n.n(r),
    o = n(735438),
    d = n(435371),
    c = n(397927),
    u = n(158032),
    m = n(793574),
    g = n(688810),
    _ = n(531260),
    x = n(626584),
    h = n(639289),
    A = n(532794),
    p = n(832946),
    T = n(97352),
    f = n(481354),
    S = n(85563),
    E = n(739508),
    b = n(203982),
    C = n(927578),
    v = n(83617),
    N = n(615396),
    I = n(526292),
    j = n(881489),
    y = n(573359),
    O = n(422936),
    R = n(774774),
    L = n(327479),
    P = n(473702),
    D = n(788868),
    G = n(652215),
    M = n(601107),
    U = n(985018),
    k = n(421540);
let w = new x.A("SubscriptionHeader.tsx"),
    V = {
        page: G.liQ.USER_SETTINGS,
        section: G.JJy.SETTINGS_PREMIUM,
        object: G.ZSU.CARD
    },
    B = [G.Dmq.PAUSED, G.Dmq.PAUSE_PENDING, G.Dmq.BILLING_RETRY];

function F(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: r,
        shouldUseDiscountMarketing: a,
        discountAmount: o
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(k.vK, r),
        children: [(0, i.jsx)("div", {
            className: k.aK
        }), (0, i.jsxs)("div", {
            className: k.wt,
            children: [(0, i.jsx)("div", {
                className: k.Sl
            }), (0, i.jsxs)("div", {
                className: k.zH,
                children: [(0, i.jsxs)("div", {
                    className: k.Gp,
                    children: [t, a && null != o && (0, i.jsx)(R.HU, {
                        text: U.intl.formatToPlainString(U.t.iiLbvu, {
                            percent: o
                        }),
                        className: k.NM,
                        colorOptions: R.at.PREMIUM_TIER_2_WHITE_FILL,
                        isPillOnBorder: !1
                    })]
                }), n]
            })]
        }), (0, i.jsx)("div", {
            className: k.Uo,
            children: s
        })]
    })
}

function H(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: r,
        shouldUseDiscountMarketing: a,
        discountAmount: o
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(k.vK, r, k.uR),
        children: [(0, i.jsx)("div", {
            className: k.aK
        }), (0, i.jsx)("div", {
            className: k.wt,
            children: (0, i.jsx)("div", {
                className: k.zH,
                children: (0, i.jsxs)("div", {
                    className: k.Gp,
                    children: [(0, i.jsx)("div", {
                        className: k.Sl
                    }), (0, i.jsxs)("div", {
                        className: k.Ck,
                        children: [t, a && null != o && (0, i.jsx)(R.HU, {
                            text: U.intl.formatToPlainString(U.t.iiLbvu, {
                                percent: o
                            }),
                            className: k.NM,
                            colorOptions: R.at.PREMIUM_TIER_2_WHITE_FILL,
                            isPillOnBorder: !1
                        }), n]
                    })]
                })
            })
        }), (0, i.jsx)("div", {
            className: k.Uo,
            children: s
        })]
    })
}

function z() {
    return (0, i.jsxs)("div", {
        className: k.Up,
        children: [(0, i.jsx)(S.A, {
            className: k.sq,
            "aria-label": U.intl.string(U.t.FSOz78)
        }), (0, i.jsx)("div", {
            className: k.CJ
        })]
    })
}

function Y() {
    let {
        analyticsLocations: e
    } = (0, g.Ay)(m.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(F, {
        wordMark: (0, i.jsx)(z, {}),
        subscriptionInfo: (0, i.jsx)("div", {
            className: k.MS,
            children: U.intl.string(U.t.R0GJL2)
        }),
        buttons: (0, i.jsx)(L.A, {
            className: k.au,
            onClick: () => (0, A.A)({
                subscriptionTier: D.pe.TIER_1,
                analyticsLocations: e,
                analyticsObject: V
            }),
            text: U.intl.string(U.t["/ygMUY"])
        }),
        statusClasses: {
            [k.aS]: !0
        }
    })
}
let X = function(e) {
    let {
        subscription: t,
        currentInvoicePreview: s,
        renewalInvoicePreview: r,
        paymentSource: x,
        busy: R,
        analyticsLocation: Y
    } = e, {
        analyticsLocations: X
    } = (0, g.Ay)(m.A.SUBSCRIPTION_HEADER), K = (0, _.A)({
        forceFetch: !1
    }), {
        fractionalState: W
    } = K, Z = W === D.xc.FP_SUB_PAUSED, q = (0, O.O)(), Q = q?.discount?.amount, J = (0, I.k5)(), $ = (0, I.nf)(), ee = (0, j.ds)(), et = () => {
        (t.status === G.Dmq.ACTIVE || t.status === G.Dmq.PAST_DUE || t.status === G.Dmq.PAUSE_PENDING || Z) && ei()
    }, en = () => {
        t.status === G.Dmq.BILLING_RETRY && ei(P.g.CONFIRM)
    }, ei = e => {
        (0, c.mMO)(async () => {
            let {
                PremiumBrandRefreshSubscriptionCancellationModal: s
            } = await Promise.all([n.e("41353"), n.e("35432"), n.e("39612")]).then(n.bind(n, 281439));
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
            let e = T.A.get(t.premiumPlanIdFromItems);
            if (null == e) return void w.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
            let l = (0, v._w)(e, x?.id, !1),
                d = l.length > 0 ? l[0] : t.currency,
                u = !0;
            if (1 === l.length && x?.id === t.paymentSourceId && (0, v.jJ)(e.id, d, x?.id) && (u = !1), u)(0, A.A)({
                initialPlanId: t.premiumPlanIdFromItems,
                analyticsLocations: X,
                analyticsLocation: Y,
                analyticsObject: V,
                subscription: t
            });
            else {
                let e, l;
                a()(null != r, "Expected renewalInvoicePreview"), a()(null != s, "Expected currentInvoicePreview"), e = (0, o.uniqueId)("premium-resubscribe-modal"), l = !1, (0, c.mMO)(async () => {
                    let {
                        PremiumResubscribeModal: e
                    } = await Promise.all([n.e("41353"), n.e("29716"), n.e("14704"), n.e("2824"), n.e("41400")]).then(n.bind(n, 46292));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocations: X,
                        fractionalPremiumInfo: K,
                        currentInvoicePreview: s,
                        renewalInvoicePreview: r,
                        onClose: async () => {
                            l || (l = !0, b._.dispatch(G.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated ? setTimeout(() => {
                                n.onClose()
                            }, h.K) : await n.onClose())
                        }
                    })
                }, {
                    onCloseRequest: () => {
                        l || (l = !0, b._.dispatch(G.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated ? setTimeout(() => {
                            (0, c.OoC)(e)
                        }, h.K) : (0, c.OoC)(e))
                    },
                    modalKey: e
                })
            }
        }
    }, el = () => {
        B.includes(t.status) && null != t.pauseEndsAt ? t.status === G.Dmq.PAUSED && t.pauseReason !== M.qf.USER_TEMPORARY_BAN ? (0, A.A)({
            initialPlanId: t.premiumPlanIdFromItems,
            analyticsLocations: X,
            analyticsLocation: Y,
            analyticsObject: V,
            subscription: t,
            skipConfirm: !0
        }) : u.U(t, X) : (0, E.pM)(Error("Invalid subscription to resume"), {
            extra: {
                subscriptionId: t.id,
                status: t.status,
                pauseEndsAt: t.pauseEndsAt
            }
        })
    }, er = () => {
        t.status === G.Dmq.PAUSED && ei(P.g.PAUSE_SELECT)
    }, ea = () => {
        ei(P.g.WHAT_YOU_LOSE)
    }, eo = C.Ay.getPlanIdFromInvoice(t, s);
    if ((0, p.m1)(eo)) return null;
    let ed = C.Ay.getStatusFromInvoice(t, s),
        ec = C.Ay.getPremiumType(eo),
        eu = {
            [k.Vd]: ec === D.PremiumTypes.TIER_0,
            [k.aS]: ec === D.PremiumTypes.TIER_1,
            [k.hA]: ec === D.PremiumTypes.TIER_2,
            [k.aD]: ed === G.Dmq.CANCELED,
            [k.WY]: ed === G.Dmq.PAUSE_PENDING,
            [k.Ft]: ed === G.Dmq.PAUSED && !Z,
            [k.GD]: (0, C.PK)(ed)
        },
        em = null;
    switch (ec) {
        case D.PremiumTypes.TIER_0:
            em = (0, i.jsxs)("div", {
                className: k.Up,
                children: [(0, i.jsx)(S.A, {
                    className: k.sq,
                    "aria-label": U.intl.string(U.t["t9uG/o"])
                }), (0, i.jsx)("div", {
                    className: k.sT
                })]
            });
            break;
        case D.PremiumTypes.TIER_1:
            em = (0, i.jsx)(z, {});
            break;
        case D.PremiumTypes.TIER_2:
            em = (0, i.jsx)(f.A, {
                className: k.V6,
                "aria-label": U.intl.string(U.t.lpNrPu)
            })
    }
    let eg = B.includes(t.status) && !Z ? H : F;
    return (0, i.jsx)(eg, {
        wordMark: em,
        subscriptionInfo: (a()(null != s, "Expected currentInvoicePreview"), (0, i.jsx)("div", {
            className: k.MS,
            children: ee ? U.intl.format(U.t["/SfHwl"], {
                weeks: 1
            }) : (0, C.nB)({
                planId: eo,
                subscription: t,
                renewalInvoicePreview: s,
                hasDiscountApplied: J,
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
                        text: U.intl.string(U.t.obRG6Y).toLocaleUpperCase()
                    })
                })
            }

            function n() {
                let e = C.Ay.isSwitchingPlansDisabled(t),
                    n = C.Ay.getSwitchingPlansDisabledMessage(t);
                return (0, i.jsxs)("div", {
                    className: k.Lv,
                    children: [(0, i.jsx)("div", {
                        className: k.Nn,
                        children: (0, i.jsx)(c.QWc, {
                            variant: "always-white",
                            onClick: et,
                            disabled: R,
                            size: "sm",
                            text: U.intl.string(U.t["ETE/oC"])
                        })
                    }), (0, i.jsx)(d.m_, {
                        text: n,
                        asContainer: !0,
                        children: (0, i.jsx)(L.A, {
                            className: l()(k.au, k.lB),
                            disabled: e,
                            onClick: () => {
                                (0, A.A)({
                                    analyticsLocations: X,
                                    analyticsLocation: Y,
                                    analyticsObject: V,
                                    subscription: t
                                })
                            },
                            text: U.intl.string(U.t["dylp/7"])
                        })
                    })]
                })
            }
            if (C.Ay.isBaseSubscriptionCanceled(t)) return (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: k.au,
                children: (0, i.jsx)(c.Button, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: U.intl.string(U.t.iIvF2z),
                    loading: R,
                    onClick: es
                })
            });
            switch (e) {
                case G.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: en,
                        loading: R,
                        text: U.intl.string(U.t["ETE/oC"])
                    });
                case G.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: k.Lv,
                        children: [(0, i.jsx)("div", {
                            className: k.Nn,
                            children: (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                disabled: R,
                                onClick: et,
                                size: "sm",
                                text: U.intl.string(U.t.cM1H0K)
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: k.au,
                            children: (0, i.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: U.intl.string(U.t.TgV5Qf),
                                loading: R,
                                onClick: el
                            })
                        })]
                    });
                case G.Dmq.PAUSED:
                    if (Z) return n();
                    let {
                        durations: s
                    } = (0, N.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: k.Lv,
                        children: [(0, i.jsx)("div", {
                            className: k.Nn,
                            children: s.length > 0 ? (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: er,
                                disabled: R,
                                size: "sm",
                                text: U.intl.string(U.t.jNHWt6)
                            }) : (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: ea,
                                disabled: R,
                                size: "sm",
                                text: U.intl.string(U.t.cM1H0K)
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: k.au,
                            children: (0, i.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: U.intl.string(U.t.zpi5pg),
                                loading: R,
                                onClick: el
                            })
                        })]
                    });
                case G.Dmq.ACTIVE:
                case G.Dmq.PAST_DUE:
                    return n()
            }
        })(),
        statusClasses: eu,
        shouldUseDiscountMarketing: J,
        discountAmount: Q
    })
}