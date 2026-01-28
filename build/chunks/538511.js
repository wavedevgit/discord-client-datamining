/** Chunk was on 5606 **/
/** chunk id: 538511, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => K,
    i: () => W
}), n(65821);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(284009),
    a = n.n(s),
    o = n(435371),
    c = n(397927),
    d = n(158032),
    u = n(793574),
    p = n(688810),
    _ = n(531260),
    m = n(626584),
    g = n(532794),
    f = n(832946),
    b = n(97352),
    h = n(481354),
    A = n(85563),
    E = n(739508),
    x = n(927578),
    O = n(83617),
    C = n(615396),
    y = n(526292),
    j = n(637073),
    T = n(110919),
    v = n(416848),
    S = n(422936),
    I = n(795269),
    N = n(327479),
    P = n(473702),
    R = n(788868),
    D = n(652215),
    w = n(601107),
    L = n(985018),
    M = n(282151);

function G(e) {
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

function U(e, t) {
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
let k = new m.A("SubscriptionHeader.tsx"),
    H = {
        page: D.liQ.USER_SETTINGS,
        section: D.JJy.SETTINGS_PREMIUM,
        object: D.ZSU.CARD
    },
    B = [D.Dmq.PAUSED, D.Dmq.PAUSE_PENDING, D.Dmq.BILLING_RETRY];

function V(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: s,
        shouldUseDiscountMarketing: a,
        discountAmount: o
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(M.vK, s),
        children: [(0, r.jsx)("div", {
            className: M.aK
        }), (0, r.jsxs)("div", {
            className: M.wt,
            children: [(0, r.jsx)("div", {
                className: M.Sl
            }), (0, r.jsxs)("div", {
                className: M.zH,
                children: [(0, r.jsxs)("div", {
                    className: M.Gp,
                    children: [t, a && null != o && (0, r.jsx)(I.ir, {
                        text: L.intl.formatToPlainString(L.t.iiLbvu, {
                            percent: o
                        }),
                        className: M.NM,
                        colorOptions: I.at.PREMIUM_TIER_2_WHITE_FILL,
                        isPillOnBorder: !1
                    })]
                }), n]
            })]
        }), (0, r.jsx)("div", {
            className: M.Uo,
            children: i
        })]
    })
}

function F(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: s,
        shouldUseDiscountMarketing: a,
        discountAmount: o
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(M.vK, s, M.uR),
        children: [(0, r.jsx)("div", {
            className: M.aK
        }), (0, r.jsx)("div", {
            className: M.wt,
            children: (0, r.jsx)("div", {
                className: M.zH,
                children: (0, r.jsxs)("div", {
                    className: M.Gp,
                    children: [(0, r.jsx)("div", {
                        className: M.Sl
                    }), (0, r.jsxs)("div", {
                        className: M.Ck,
                        children: [t, a && null != o && (0, r.jsx)(I.ir, {
                            text: L.intl.formatToPlainString(L.t.iiLbvu, {
                                percent: o
                            }),
                            className: M.NM,
                            colorOptions: I.at.PREMIUM_TIER_2_WHITE_FILL,
                            isPillOnBorder: !1
                        }), n]
                    })]
                })
            })
        }), (0, r.jsx)("div", {
            className: M.Uo,
            children: i
        })]
    })
}

function Y() {
    return (0, r.jsxs)("div", {
        className: M.Up,
        children: [(0, r.jsx)(A.A, {
            className: M.sq,
            "aria-label": L.intl.string(L.t.FSOz78)
        }), (0, r.jsx)("div", {
            className: M.CJ
        })]
    })
}

function W() {
    let {
        analyticsLocations: e
    } = (0, p.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(V, {
        wordMark: (0, r.jsx)(Y, {}),
        subscriptionInfo: (0, r.jsx)("div", {
            className: M.MS,
            children: L.intl.string(L.t.R0GJL2)
        }),
        buttons: (0, r.jsx)(N.A, {
            className: M.au,
            onClick: () => (0, g.A)({
                subscriptionTier: R.pe.TIER_1,
                analyticsLocations: e,
                analyticsObject: H
            }),
            text: L.intl.string(L.t["/ygMUY"])
        }),
        statusClasses: {
            [M.aS]: !0
        }
    })
}
let K = function(e) {
    var t;
    let {
        subscription: i,
        currentInvoicePreview: s,
        renewalInvoicePreview: m,
        paymentSource: I,
        busy: W,
        analyticsLocation: K
    } = e, z = "subscription_header", {
        analyticsLocations: Z
    } = (0, p.Ay)(u.A.SUBSCRIPTION_HEADER), q = (0, _.A)({
        forceFetch: !1
    }), {
        fractionalState: X
    } = q, J = X === R.xc.FP_SUB_PAUSED, {
        enabled: Q
    } = (0, T.Ay)({
        location: z
    }), $ = (0, v.g)(z);
    R.QV.has(i.planId) && D.Uyk.ALL_PAUSEABLE.has(i.status) && !J || (Q = !1);
    let ee = (0, S.O)(),
        et = null == ee || null == (t = ee.discount) ? void 0 : t.amount,
        en = (0, y.k5)(),
        er = (0, y.nf)(),
        ei = (0, j.d)(),
        el = () => {
            (i.status === D.Dmq.ACTIVE || i.status === D.Dmq.PAST_DUE || i.status === D.Dmq.PAUSED) && eo(P.g.PAUSE_SELECT)
        },
        es = () => {
            (i.status === D.Dmq.ACTIVE || i.status === D.Dmq.PAST_DUE || i.status === D.Dmq.PAUSE_PENDING || J) && eo()
        },
        ea = () => {
            i.status === D.Dmq.BILLING_RETRY && eo(P.g.CONFIRM)
        },
        eo = e => {
            (0, c.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: t
                } = await n.e("72820").then(n.bind(n, 281439));
                return n => (0, r.jsx)(t, U(G({}, n), {
                    premiumSubscription: i,
                    analyticsLocation: K,
                    analyticsLocations: Z,
                    initialStep: e
                }))
            })
        },
        ec = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = b.A.get(i.premiumPlanIdFromItems);
                if (null == e) return void k.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
                let t = (0, O._w)(e, null == I ? void 0 : I.id, !1),
                    l = t.length > 0 ? t[0] : i.currency,
                    o = !0;
                1 === t.length && (null == I ? void 0 : I.id) === i.paymentSourceId && (0, O.jJ)(e.id, l, null == I ? void 0 : I.id) && (o = !1), o ? (0, g.A)({
                    initialPlanId: i.premiumPlanIdFromItems,
                    analyticsLocations: Z,
                    analyticsLocation: K,
                    analyticsObject: H,
                    subscription: i
                }) : $ ? (a()(null != m, "Expected renewalInvoicePreview"), a()(null != s, "Expected currentInvoicePreview"), (0, c.mMO)(async () => {
                    let {
                        PremiumResubscribeModal: e
                    } = await Promise.all([n.e("14704"), n.e("29716"), n.e("2824"), n.e("86819")]).then(n.bind(n, 46292));
                    return t => (0, r.jsx)(e, U(G({}, t), {
                        premiumSubscription: i,
                        analyticsLocations: Z,
                        fractionalPremiumInfo: q,
                        currentInvoicePreview: s,
                        renewalInvoicePreview: m
                    }))
                })) : d.Ir(i, Z)
            }
        },
        ed = () => {
            B.includes(i.status) && null != i.pauseEndsAt ? i.status === D.Dmq.PAUSED && i.pauseReason !== w.qf.USER_TEMPORARY_BAN ? (0, g.A)({
                initialPlanId: i.premiumPlanIdFromItems,
                analyticsLocations: Z,
                analyticsLocation: K,
                analyticsObject: H,
                subscription: i,
                skipConfirm: !0
            }) : d.U(i, Z) : (0, E.pM)(Error("Invalid subscription to resume"), {
                extra: {
                    subscriptionId: i.id,
                    status: i.status,
                    pauseEndsAt: i.pauseEndsAt
                }
            })
        },
        eu = () => {
            i.status === D.Dmq.PAUSED && eo(P.g.PAUSE_SELECT)
        },
        ep = () => {
            eo(P.g.WHAT_YOU_LOSE)
        },
        e_ = x.Ay.getPlanIdFromInvoice(i, s);
    if ((0, f.m1)(e_)) return null;
    let em = x.Ay.getStatusFromInvoice(i, s),
        eg = x.Ay.getPremiumType(e_),
        ef = {
            [M.Vd]: eg === R.PremiumTypes.TIER_0,
            [M.aS]: eg === R.PremiumTypes.TIER_1,
            [M.hA]: eg === R.PremiumTypes.TIER_2,
            [M.aD]: em === D.Dmq.CANCELED,
            [M.WY]: em === D.Dmq.PAUSE_PENDING,
            [M.Ft]: em === D.Dmq.PAUSED && !J,
            [M.GD]: (0, x.PK)(em)
        },
        eb = null;
    switch (eg) {
        case R.PremiumTypes.TIER_0:
            eb = (0, r.jsxs)("div", {
                className: M.Up,
                children: [(0, r.jsx)(A.A, {
                    className: M.sq,
                    "aria-label": L.intl.string(L.t["t9uG/o"])
                }), (0, r.jsx)("div", {
                    className: M.sT
                })]
            });
            break;
        case R.PremiumTypes.TIER_1:
            eb = (0, r.jsx)(Y, {});
            break;
        case R.PremiumTypes.TIER_2:
            eb = (0, r.jsx)(h.A, {
                className: M.V6,
                "aria-label": L.intl.string(L.t.lpNrPu)
            })
    }
    let eh = B.includes(i.status) && !J ? F : V;
    return (0, r.jsx)(eh, {
        wordMark: eb,
        subscriptionInfo: (a()(null != s, "Expected currentInvoicePreview"), (0, r.jsx)("div", {
            className: M.MS,
            children: ei ? L.intl.format(L.t["/SfHwl"], {
                weeks: 1
            }) : (0, x.nB)({
                planId: e_,
                subscription: i,
                renewalInvoicePreview: s,
                hasDiscountApplied: en,
                activeDiscountInfo: er,
                hasFractionalPremiumWithSub: J
            })
        })),
        buttons: (() => {
            let {
                status: e
            } = i;
            if (i.isPurchasedExternally) {
                let e = (0, x.tW)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, r.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: W,
                        text: L.intl.string(L.t.obRG6Y).toLocaleUpperCase()
                    })
                })
            }

            function t() {
                let e = x.Ay.isSwitchingPlansDisabled(i),
                    t = x.Ay.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)("div", {
                    className: M.Lv,
                    children: [Q ? (0, r.jsx)("div", {
                        className: M.xP,
                        children: (0, r.jsx)(c.QWc, {
                            variant: "always-white",
                            disabled: W,
                            onClick: el,
                            size: "sm",
                            text: L.intl.string(L.t.eFlYVA)
                        })
                    }) : (0, r.jsx)("div", {
                        className: M.Nn,
                        children: (0, r.jsx)(c.QWc, {
                            variant: "always-white",
                            onClick: es,
                            disabled: W,
                            size: "sm",
                            text: L.intl.string(L.t["ETE/oC"])
                        })
                    }), (0, r.jsx)(o.m_, {
                        text: t,
                        asContainer: !0,
                        children: (0, r.jsx)(N.A, {
                            className: l()(M.au, M.lB),
                            disabled: e,
                            onClick: () => {
                                (0, g.A)({
                                    analyticsLocations: Z,
                                    analyticsLocation: K,
                                    analyticsObject: H,
                                    subscription: i
                                })
                            },
                            text: L.intl.string(L.t["dylp/7"])
                        })
                    })]
                })
            }
            if (x.Ay.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: M.au,
                children: (0, r.jsx)(c.Button, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: L.intl.string(L.t.iIvF2z),
                    loading: W,
                    onClick: ec
                })
            });
            switch (e) {
                case D.Dmq.BILLING_RETRY:
                    return (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: ea,
                        loading: W,
                        text: L.intl.string(L.t["ETE/oC"])
                    });
                case D.Dmq.PAUSE_PENDING:
                    return (0, r.jsxs)("div", {
                        className: M.Lv,
                        children: [(0, r.jsx)("div", {
                            className: M.Nn,
                            children: (0, r.jsx)(c.QWc, {
                                variant: "always-white",
                                disabled: W,
                                onClick: es,
                                size: "sm",
                                text: L.intl.string(L.t.cM1H0K)
                            })
                        }), (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: M.au,
                            children: (0, r.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: L.intl.string(L.t.TgV5Qf),
                                loading: W,
                                onClick: ed
                            })
                        })]
                    });
                case D.Dmq.PAUSED:
                    if (J) return t();
                    let {
                        durations: n
                    } = (0, C.Vy)(i);
                    return (0, r.jsxs)("div", {
                        className: M.Lv,
                        children: [(0, r.jsx)("div", {
                            className: M.Nn,
                            children: n.length > 0 ? (0, r.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: eu,
                                disabled: W,
                                size: "sm",
                                text: L.intl.string(L.t.jNHWt6)
                            }) : (0, r.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: ep,
                                disabled: W,
                                size: "sm",
                                text: L.intl.string(L.t.cM1H0K)
                            })
                        }), (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: M.au,
                            children: (0, r.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: L.intl.string(L.t.zpi5pg),
                                loading: W,
                                onClick: ed
                            })
                        })]
                    });
                case D.Dmq.ACTIVE:
                case D.Dmq.PAST_DUE:
                    return t()
            }
        })(),
        statusClasses: ef,
        shouldUseDiscountMarketing: en,
        discountAmount: et
    })
}