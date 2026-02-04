/** chunk id: 538511, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => W,
    i: () => Y
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
    _ = n(688810),
    p = n(531260),
    m = n(626584),
    g = n(532794),
    A = n(832946),
    f = n(97352),
    b = n(481354),
    h = n(85563),
    E = n(739508),
    O = n(927578),
    x = n(83617),
    C = n(615396),
    S = n(526292),
    T = n(637073),
    I = n(110919),
    N = n(422936),
    y = n(795269),
    j = n(327479),
    v = n(473702),
    P = n(788868),
    R = n(652215),
    D = n(601107),
    L = n(985018),
    w = n(282151);

function M(e) {
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

function G(e, t) {
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
let U = new m.A("SubscriptionHeader.tsx"),
    k = {
        page: R.liQ.USER_SETTINGS,
        section: R.JJy.SETTINGS_PREMIUM,
        object: R.ZSU.CARD
    },
    B = [R.Dmq.PAUSED, R.Dmq.PAUSE_PENDING, R.Dmq.BILLING_RETRY];

function H(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: s,
        shouldUseDiscountMarketing: a,
        discountAmount: o
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(w.vK, s),
        children: [(0, r.jsx)("div", {
            className: w.aK
        }), (0, r.jsxs)("div", {
            className: w.wt,
            children: [(0, r.jsx)("div", {
                className: w.Sl
            }), (0, r.jsxs)("div", {
                className: w.zH,
                children: [(0, r.jsxs)("div", {
                    className: w.Gp,
                    children: [t, a && null != o && (0, r.jsx)(y.ir, {
                        text: L.intl.formatToPlainString(L.t.iiLbvu, {
                            percent: o
                        }),
                        className: w.NM,
                        colorOptions: y.at.PREMIUM_TIER_2_WHITE_FILL,
                        isPillOnBorder: !1
                    })]
                }), n]
            })]
        }), (0, r.jsx)("div", {
            className: w.Uo,
            children: i
        })]
    })
}

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
        className: l()(w.vK, s, w.uR),
        children: [(0, r.jsx)("div", {
            className: w.aK
        }), (0, r.jsx)("div", {
            className: w.wt,
            children: (0, r.jsx)("div", {
                className: w.zH,
                children: (0, r.jsxs)("div", {
                    className: w.Gp,
                    children: [(0, r.jsx)("div", {
                        className: w.Sl
                    }), (0, r.jsxs)("div", {
                        className: w.Ck,
                        children: [t, a && null != o && (0, r.jsx)(y.ir, {
                            text: L.intl.formatToPlainString(L.t.iiLbvu, {
                                percent: o
                            }),
                            className: w.NM,
                            colorOptions: y.at.PREMIUM_TIER_2_WHITE_FILL,
                            isPillOnBorder: !1
                        }), n]
                    })]
                })
            })
        }), (0, r.jsx)("div", {
            className: w.Uo,
            children: i
        })]
    })
}

function F() {
    return (0, r.jsxs)("div", {
        className: w.Up,
        children: [(0, r.jsx)(h.A, {
            className: w.sq,
            "aria-label": L.intl.string(L.t.FSOz78)
        }), (0, r.jsx)("div", {
            className: w.CJ
        })]
    })
}

function Y() {
    let {
        analyticsLocations: e
    } = (0, _.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(H, {
        wordMark: (0, r.jsx)(F, {}),
        subscriptionInfo: (0, r.jsx)("div", {
            className: w.MS,
            children: L.intl.string(L.t.R0GJL2)
        }),
        buttons: (0, r.jsx)(j.A, {
            className: w.au,
            onClick: () => (0, g.A)({
                subscriptionTier: P.pe.TIER_1,
                analyticsLocations: e,
                analyticsObject: k
            }),
            text: L.intl.string(L.t["/ygMUY"])
        }),
        statusClasses: {
            [w.aS]: !0
        }
    })
}
let W = function(e) {
    var t;
    let {
        subscription: i,
        currentInvoicePreview: s,
        renewalInvoicePreview: m,
        paymentSource: y,
        busy: Y,
        analyticsLocation: W
    } = e, {
        analyticsLocations: K
    } = (0, _.Ay)(u.A.SUBSCRIPTION_HEADER), z = (0, p.A)({
        forceFetch: !1
    }), {
        fractionalState: Z
    } = z, X = Z === P.xc.FP_SUB_PAUSED, {
        enabled: q
    } = (0, I.Ay)({
        location: "subscription_header"
    });
    P.QV.has(i.planId) && R.Uyk.ALL_PAUSEABLE.has(i.status) && !X || (q = !1);
    let J = (0, N.O)(),
        Q = null == J || null == (t = J.discount) ? void 0 : t.amount,
        $ = (0, S.k5)(),
        ee = (0, S.nf)(),
        et = (0, T.d)(),
        en = () => {
            (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSED) && el(v.g.PAUSE_SELECT)
        },
        er = () => {
            (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSE_PENDING || X) && el()
        },
        ei = () => {
            i.status === R.Dmq.BILLING_RETRY && el(v.g.CONFIRM)
        },
        el = e => {
            (0, c.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: t
                } = await n.e("72820").then(n.bind(n, 281439));
                return n => (0, r.jsx)(t, G(M({}, n), {
                    premiumSubscription: i,
                    analyticsLocation: W,
                    analyticsLocations: K,
                    initialStep: e
                }))
            })
        },
        es = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = f.A.get(i.premiumPlanIdFromItems);
                if (null == e) return void U.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
                let t = (0, x._w)(e, null == y ? void 0 : y.id, !1),
                    l = t.length > 0 ? t[0] : i.currency,
                    o = !0;
                1 === t.length && (null == y ? void 0 : y.id) === i.paymentSourceId && (0, x.jJ)(e.id, l, null == y ? void 0 : y.id) && (o = !1), o ? (0, g.A)({
                    initialPlanId: i.premiumPlanIdFromItems,
                    analyticsLocations: K,
                    analyticsLocation: W,
                    analyticsObject: k,
                    subscription: i
                }) : (a()(null != m, "Expected renewalInvoicePreview"), a()(null != s, "Expected currentInvoicePreview"), (0, c.mMO)(async () => {
                    let {
                        PremiumResubscribeModal: e
                    } = await Promise.all([n.e("14704"), n.e("29716"), n.e("2824"), n.e("54711")]).then(n.bind(n, 46292));
                    return t => (0, r.jsx)(e, G(M({}, t), {
                        premiumSubscription: i,
                        analyticsLocations: K,
                        fractionalPremiumInfo: z,
                        currentInvoicePreview: s,
                        renewalInvoicePreview: m
                    }))
                }))
            }
        },
        ea = () => {
            B.includes(i.status) && null != i.pauseEndsAt ? i.status === R.Dmq.PAUSED && i.pauseReason !== D.qf.USER_TEMPORARY_BAN ? (0, g.A)({
                initialPlanId: i.premiumPlanIdFromItems,
                analyticsLocations: K,
                analyticsLocation: W,
                analyticsObject: k,
                subscription: i,
                skipConfirm: !0
            }) : d.U(i, K) : (0, E.pM)(Error("Invalid subscription to resume"), {
                extra: {
                    subscriptionId: i.id,
                    status: i.status,
                    pauseEndsAt: i.pauseEndsAt
                }
            })
        },
        eo = () => {
            i.status === R.Dmq.PAUSED && el(v.g.PAUSE_SELECT)
        },
        ec = () => {
            el(v.g.WHAT_YOU_LOSE)
        },
        ed = O.Ay.getPlanIdFromInvoice(i, s);
    if ((0, A.m1)(ed)) return null;
    let eu = O.Ay.getStatusFromInvoice(i, s),
        e_ = O.Ay.getPremiumType(ed),
        ep = {
            [w.Vd]: e_ === P.PremiumTypes.TIER_0,
            [w.aS]: e_ === P.PremiumTypes.TIER_1,
            [w.hA]: e_ === P.PremiumTypes.TIER_2,
            [w.aD]: eu === R.Dmq.CANCELED,
            [w.WY]: eu === R.Dmq.PAUSE_PENDING,
            [w.Ft]: eu === R.Dmq.PAUSED && !X,
            [w.GD]: (0, O.PK)(eu)
        },
        em = null;
    switch (e_) {
        case P.PremiumTypes.TIER_0:
            em = (0, r.jsxs)("div", {
                className: w.Up,
                children: [(0, r.jsx)(h.A, {
                    className: w.sq,
                    "aria-label": L.intl.string(L.t["t9uG/o"])
                }), (0, r.jsx)("div", {
                    className: w.sT
                })]
            });
            break;
        case P.PremiumTypes.TIER_1:
            em = (0, r.jsx)(F, {});
            break;
        case P.PremiumTypes.TIER_2:
            em = (0, r.jsx)(b.A, {
                className: w.V6,
                "aria-label": L.intl.string(L.t.lpNrPu)
            })
    }
    let eg = B.includes(i.status) && !X ? V : H;
    return (0, r.jsx)(eg, {
        wordMark: em,
        subscriptionInfo: (a()(null != s, "Expected currentInvoicePreview"), (0, r.jsx)("div", {
            className: w.MS,
            children: et ? L.intl.format(L.t["/SfHwl"], {
                weeks: 1
            }) : (0, O.nB)({
                planId: ed,
                subscription: i,
                renewalInvoicePreview: s,
                hasDiscountApplied: $,
                activeDiscountInfo: ee,
                hasFractionalPremiumWithSub: X
            })
        })),
        buttons: (() => {
            let {
                status: e
            } = i;
            if (i.isPurchasedExternally) {
                let e = (0, O.tW)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, r.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: Y,
                        text: L.intl.string(L.t.obRG6Y).toLocaleUpperCase()
                    })
                })
            }

            function t() {
                let e = O.Ay.isSwitchingPlansDisabled(i),
                    t = O.Ay.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)("div", {
                    className: w.Lv,
                    children: [q ? (0, r.jsx)("div", {
                        className: w.xP,
                        children: (0, r.jsx)(c.QWc, {
                            variant: "always-white",
                            disabled: Y,
                            onClick: en,
                            size: "sm",
                            text: L.intl.string(L.t.eFlYVA)
                        })
                    }) : (0, r.jsx)("div", {
                        className: w.Nn,
                        children: (0, r.jsx)(c.QWc, {
                            variant: "always-white",
                            onClick: er,
                            disabled: Y,
                            size: "sm",
                            text: L.intl.string(L.t["ETE/oC"])
                        })
                    }), (0, r.jsx)(o.m_, {
                        text: t,
                        asContainer: !0,
                        children: (0, r.jsx)(j.A, {
                            className: l()(w.au, w.lB),
                            disabled: e,
                            onClick: () => {
                                (0, g.A)({
                                    analyticsLocations: K,
                                    analyticsLocation: W,
                                    analyticsObject: k,
                                    subscription: i
                                })
                            },
                            text: L.intl.string(L.t["dylp/7"])
                        })
                    })]
                })
            }
            if (O.Ay.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: w.au,
                children: (0, r.jsx)(c.Button, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: L.intl.string(L.t.iIvF2z),
                    loading: Y,
                    onClick: es
                })
            });
            switch (e) {
                case R.Dmq.BILLING_RETRY:
                    return (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: ei,
                        loading: Y,
                        text: L.intl.string(L.t["ETE/oC"])
                    });
                case R.Dmq.PAUSE_PENDING:
                    return (0, r.jsxs)("div", {
                        className: w.Lv,
                        children: [(0, r.jsx)("div", {
                            className: w.Nn,
                            children: (0, r.jsx)(c.QWc, {
                                variant: "always-white",
                                disabled: Y,
                                onClick: er,
                                size: "sm",
                                text: L.intl.string(L.t.cM1H0K)
                            })
                        }), (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: w.au,
                            children: (0, r.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: L.intl.string(L.t.TgV5Qf),
                                loading: Y,
                                onClick: ea
                            })
                        })]
                    });
                case R.Dmq.PAUSED:
                    if (X) return t();
                    let {
                        durations: n
                    } = (0, C.Vy)(i);
                    return (0, r.jsxs)("div", {
                        className: w.Lv,
                        children: [(0, r.jsx)("div", {
                            className: w.Nn,
                            children: n.length > 0 ? (0, r.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: eo,
                                disabled: Y,
                                size: "sm",
                                text: L.intl.string(L.t.jNHWt6)
                            }) : (0, r.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: ec,
                                disabled: Y,
                                size: "sm",
                                text: L.intl.string(L.t.cM1H0K)
                            })
                        }), (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: w.au,
                            children: (0, r.jsx)(c.Button, {
                                variant: "overlay-primary",
                                size: "sm",
                                text: L.intl.string(L.t.zpi5pg),
                                loading: Y,
                                onClick: ea
                            })
                        })]
                    });
                case R.Dmq.ACTIVE:
                case R.Dmq.PAST_DUE:
                    return t()
            }
        })(),
        statusClasses: ep,
        shouldUseDiscountMarketing: $,
        discountAmount: Q
    })
}