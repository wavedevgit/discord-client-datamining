/** Chunk was on web.js **/
/** chunk id: 879100, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    As: () => ef,
    WE: () => eh,
    Xp: () => e_
}), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(997101),
    u = n(311907),
    d = n(827734),
    f = n(990078),
    p = n(397927),
    _ = n(821891),
    h = n(726656),
    m = n(637141),
    g = n(953689),
    E = n(155718),
    y = n(793574),
    b = n(688810),
    O = n(531260),
    v = n(404374),
    A = n(156312),
    I = n(216641),
    S = n(543767),
    T = n(874638),
    C = n(477421),
    N = n(234419),
    w = n(163538),
    R = n(735164),
    P = n(796012),
    D = n(363476),
    x = n(659746),
    L = n(934581),
    j = n(778307),
    M = n(692440),
    k = n(72140),
    U = n(773669),
    G = n(351906),
    V = n(287809),
    F = n(615405),
    B = n(295405),
    H = n(97352),
    Y = n(166403),
    W = n(473145),
    K = n(975571),
    z = n(252424),
    q = n(927578),
    Z = n(580630),
    X = n(902038),
    Q = n(652215),
    J = n(26279),
    $ = n(788868),
    ee = n(818348),
    et = n(985018),
    en = n(843010);

function er(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            er(e, t, n[t])
        })
    }
    return e
}

function ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function es(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let eo = 1,
    el = 30;

function ec(e) {
    let {
        amount: t,
        currency: n,
        intervalType: r,
        intervalCount: i = 1
    } = e, a = (0, Z.$g)(t, n);
    return r === $.WT.YEAR ? et.intl.formatToPlainString(et.t["8M04YJ"], {
        price: a
    }) : r === $.WT.MONTH && 1 === i ? et.intl.formatToPlainString(et.t.VStWCR, {
        price: a
    }) : r === $.WT.MONTH && i > 1 ? et.intl.formatToPlainString(et.t.xJvAFU, {
        price: a
    }) : null
}

function eu(e) {
    let {
        intervalType: t,
        intervalCount: n = 1
    } = e;
    return t === $.WT.YEAR ? et.intl.string(et.t.YDpAzZ) : t === $.WT.MONTH && 1 === n ? et.intl.string(et.t["6ZR3By"]) : null
}

function ed(e) {
    let {
        endDate: t,
        className: n
    } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [(0, r.jsx)("div", {
            className: en.bU
        }), (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            className: en.b7,
            children: et.intl.format(et.t.IeaYqg, {
                endDate: t
            })
        }), (0, r.jsx)("div", {
            className: en.bU
        })]
    })
}

function ef(e) {
    var t, n;
    let {
        premiumSubscriptionPlan: a,
        numGuildBoosts: o,
        setNumGuildBoosts: c,
        setForceDisableSubmitButton: _,
        premiumSubscription: m,
        onClickPremiumSubscriptionLink: g,
        existingAvailableSlots: E = [],
        priceOptions: I
    } = e, {
        setInvoicePreview: T
    } = (0, A.P5)(), R = (0, w.A)(), P = a.interval, x = a.intervalCount, j = (0, u.bG)([H.A], () => H.A.getForSkuAndInterval((0, q.mH)($.pe.GUILD), P, x)), M = (0, u.bG)([V.default], () => V.default.getCurrentUser()), G = (0, O.A)({
        forceFetch: !1
    });
    l()(null != j, "Missing guildBoostingSubscriptionPlan");
    let F = [{
            planId: j.id,
            quantity: 1
        }],
        B = null == m ? void 0 : m.items.find(e => e.planId === $.gD.PREMIUM_MONTH_TIER_2 || e.planId === $.gD.PREMIUM_YEAR_TIER_2);
    null != B && F.push(B);
    let J = null == m ? void 0 : m.items.find(e => e.planId === $.gD.PREMIUM_MONTH_GUILD || e.planId === $.gD.PREMIUM_YEAR_GUILD),
        {
            enabled: er
        } = X.A.useExperiment({
            location: "32b64a_1"
        }),
        ei = !er || null == R || !$.uJ.has(R) || null == J,
        {
            analyticsLocations: ea
        } = (0, b.Ay)(),
        [es, ef] = (0, S.Kq)({
            subscriptionId: null == m ? void 0 : m.id,
            items: F,
            renewal: !0,
            paymentSourceId: null == m ? void 0 : m.paymentSourceId,
            currency: I.currency,
            preventFetch: ei,
            analyticsLocations: ea,
            analyticsLocation: y.A.GUILD_BOOSTING_PLAN_SELECT
        });
    i.useEffect(() => {
        T(es)
    }, [T, es]);
    let ep = !ei && null == es && null == ef,
        e_ = (null == (n = (0, N.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === $.pe.TIER_2,
        eh = q.Ay.hasBoostDiscount(M),
        em = null == es ? void 0 : es.findInvoiceItemByPlanId(j.id),
        eg = null != em ? {
            amount: em.amount,
            tax: 0,
            taxInclusive: !0,
            currency: I.currency
        } : q.Ay.getPrice(j.id, eh, !1, I),
        eE = o * eg.amount,
        ey = (0, u.bG)([Y.A], () => Y.A.inReverseTrial() && q.Ay.hasBoostDiscount(M) && null != m),
        eb = q.Ay.hasBoostDiscount(M) && null != m && q.Ay.isPremiumAtLeast(q.Ay.getPremiumType(m.planId), $.PremiumTypes.TIER_1) ? et.intl.format(et.t.hf6YOY, {
            planName: q.Ay.getTierDisplayNameByPlanId(m.planId)
        }) : et.intl.format(e_ ? et.t.ba1L74 : et.t.fkffDT, {
            onPremiumSubscriptionClick: g,
            discountPercentage: (0, z.l9)(U.default.locale, $.oX / 100),
            freeSubscriptionCount: $.M4
        }),
        eO = E.filter(e => (0, W.I5)(e)).length,
        ev = (0, q.J$)(I.paymentSourceId),
        {
            ipCountryCode: eA
        } = (0, C.A)(),
        eI = "HR" === eA && eg.currency === ee.Yr.EUR,
        eS = G.fractionalState === $.xc.FP_SUB_PAUSED;
    return _(ep), (0, r.jsxs)("div", {
        children: [eS && (0, r.jsx)(L.v, {
            fractionalPremiumInfo: G
        }), ey && null != m ? (0, r.jsx)(ed, {
            endDate: m.currentPeriodEnd
        }) : (0, r.jsx)("div", {
            className: s()(en.hA, en.G3),
            children: et.intl.string(et.t.jNY1FO)
        }), E.length > 0 ? (0, r.jsxs)("div", {
            className: en.Mv,
            children: [(0, r.jsx)(p._Jp, {
                className: en.T5,
                color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK
            }), (0, r.jsxs)("div", {
                children: [et.intl.format(et.t.F8xlhr, {
                    slotCount: E.length
                }), eO > 0 && null != m ? (0, r.jsx)(f.m, {
                    text: et.intl.formatToPlainString(et.t.SFpsCH, {
                        canceledCount: eO,
                        date: m.currentPeriodEnd
                    }),
                    children: (0, r.jsx)(p.EpV, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        className: en.Y5,
                        color: d.A.unsafe_rawColors.YELLOW_300.css
                    })
                }) : null]
            })]
        }) : null, (0, r.jsxs)("div", {
            className: en.mP,
            children: [(0, r.jsxs)("div", {
                className: en.E6,
                children: [(0, r.jsx)(p.lw3, {
                    value: o,
                    onChange: e => c(e),
                    className: en.__invalid_planSelector,
                    minValue: eo,
                    maxValue: el
                }), (0, r.jsx)("div", {
                    className: en.$0,
                    children: ev ? eu({
                        intervalType: P,
                        intervalCount: x
                    }) : et.intl.string(et.t.K9Bmze)
                })]
            }), (0, r.jsx)("div", {
                className: s()(en.QK, {
                    [en.S]: ep
                }),
                children: ep ? (0, r.jsx)(p.y$y, {}) : ev ? (0, Z.$g)(eg.amount, eg.currency) : ec({
                    intervalType: P,
                    intervalCount: x,
                    amount: eg.amount,
                    currency: eg.currency
                })
            })]
        }), (0, r.jsx)("div", {
            className: en.J3
        }), (0, r.jsxs)("div", {
            className: en.mP,
            children: [(0, r.jsx)("div", {
                className: en.xp,
                children: et.intl.string(et.t.RtA7nR)
            }), (0, r.jsx)("div", {
                className: s()(en.__invalid_planSelectorSubtotalPrice, {
                    [en.S]: ep
                }),
                children: ep ? (0, r.jsx)(p.y$y, {}) : (0, r.jsx)(D.A, {
                    price: eE,
                    currency: eg.currency,
                    intervalType: P,
                    intervalCount: x,
                    isPrepaidPaymentSource: ev
                })
            })]
        }), eI && (0, r.jsx)(h.A, {
            message: et.intl.formatToPlainString(et.t["9hnZoK"], {
                kunaPriceWithCurrency: (0, Z.$g)(7.5345 * eE, ee.Yr.HRK)
            })
        }), (0, r.jsx)(h.A, {
            message: et.intl.format(et.t.Om31w8, {
                documentationLink: K.A.getArticleURL(Q.MVz.LOCALIZED_PRICING)
            })
        }), ey ? (0, r.jsx)(k.G, {}) : (0, r.jsx)(k.A, {
            text: eb,
            color: v.k0.PREMIUM_TIER_2
        })]
    })
}

function ep(e) {
    let {
        premiumSubscription: t,
        premiumSubscriptionPlan: n,
        proratedInvoicePreview: i,
        renewalInvoicePreview: a,
        priceOptions: s
    } = e, o = n.interval, c = n.intervalCount, d = (0, u.bG)([H.A], () => H.A.getForSkuAndInterval((0, q.mH)($.pe.GUILD), o, c));
    l()(null != d, "Missing guildBoostingSubscriptionPlan");
    let f = e => (0, T.Z)(i.invoiceItems).find(t => $.pW.has(t.subscriptionPlanId) && e(t)),
        p = f(e => e.amount >= 0);
    l()(null != p, "Missing guild boosting invoice item");
    let _ = f(e => e.amount < 0),
        h = null != _ ? p.quantity - _.quantity : p.quantity,
        m = i.invoiceItems.filter(e => (0, q.xq)(e.subscriptionPlanId)),
        g = m.reduce((e, t) => e + t.amount, 0),
        y = (0, S.sL)(p) * h,
        b = (0, Z.$g)(y, i.currency),
        O = (0, Z.CE)(b, o, c),
        v = (0, Z.$g)(i.total, i.currency) + (i.currency !== ee.Yr.USD ? "*" : ""),
        A = i.total - y - g,
        I = p.discounts.map(e => {
            let t = e.amount / p.quantity;
            return es(ei({}, e), {
                amount: t * h
            })
        }),
        {
            subscriptionDiscount: C,
            entitlementDiscount: N
        } = {
            subscriptionDiscount: I.find(e => e.type === E.iS.SUBSCRIPTION_PLAN),
            entitlementDiscount: I.find(e => e.type === E.iS.ENTITLEMENT)
        },
        w = (0, q.J$)(s.paymentSourceId),
        P = (0, u.bG)([Y.A], () => Y.A.inReverseTrial());
    return (0, r.jsxs)(r.Fragment, {
        children: [w ? null : P && null != t ? (0, r.jsx)(ed, {
            endDate: t.currentPeriodEnd,
            className: en.jk
        }) : (0, r.jsx)(M.wP, {
            proratedInvoice: i,
            renewalInvoice: a
        }), (0, r.jsxs)(R.Yx, {
            children: [(0, r.jsx)(R.Xd, {
                children: et.intl.string(et.t.CWIwms)
            }), (0, r.jsx)(R.f0, {
                label: et.intl.formatToPlainString(et.t.a3cAOg, {
                    numGuildSubscriptions: h,
                    planName: (0, q.Mn)(d.id, !1, w)
                }),
                value: w ? b : O,
                subscriptionDiscount: C,
                entitlementDiscount: N,
                originalAmount: p.subscriptionPlanPrice * h,
                currency: i.currency,
                interval: d.interval,
                intervalCount: d.intervalCount
            }), 0 !== g ? (0, r.jsx)(R.oR, {
                label: (0, r.jsx)(M.sw, {
                    label: et.intl.formatToPlainString(et.t.ZSVged, {
                        planName: (0, q.RH)(m[0].subscriptionPlanId)
                    }),
                    tooltipText: et.intl.string(et.t.JmwQJM)
                }),
                value: (0, Z.$g)(g, i.currency)
            }) : null, 0 !== A ? (0, r.jsx)(R.oR, {
                label: (0, r.jsx)(M.sw, {
                    label: et.intl.string(et.t["+as5ZZ"]),
                    tooltipText: et.intl.string(et.t.JmwQJM)
                }),
                value: (0, Z.$g)(A, i.currency)
            }) : null, (0, r.jsx)(R.pK, {}), (0, r.jsx)(R.Sd, {
                label: et.intl.format(i.taxInclusive ? w ? et.t.BqdxQt : et.t.XH4raN : et.t.RUI48E, {}),
                value: v
            }), null != t ? (0, r.jsx)(M.m0, {
                premiumSubscription: t,
                proratedInvoice: i,
                renewalInvoice: a,
                isUpdate: !0,
                isPrepaidPaymentSource: w,
                isTrial: P
            }) : (0, r.jsx)(M.m0, {
                renewalInvoice: a,
                priceOptions: s,
                isPrepaidPaymentSource: w
            })]
        })]
    })
}

function e_(e) {
    var t;
    let n, a, {
            paymentSources: s,
            priceOptions: o,
            currentPremiumSubscription: l,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: h,
            newAdditionalPlans: E,
            onPaymentSourceChange: O,
            onPaymentSourceAdd: v,
            onPurchaseTermsChange: T,
            legalTermsNodeRef: C,
            hasLegalTermsFlash: N
        } = e,
        {
            setInvoicePreview: w
        } = (0, A.P5)(),
        R = o.paymentSourceId,
        P = (0, I.g)(s, R),
        D = (0, u.bG)([B.A], () => null != d ? B.A.getPaymentSource(d) : null),
        x = (0, u.bG)([G.A], () => G.A.hidePersonalInformation);
    n = null != l ? (0, q.Om)(l, E[0].quantity, E[0].planId) : E;
    let {
        analyticsLocations: L
    } = (0, b.Ay)(), [M] = (0, S.Kq)({
        subscriptionId: null == l ? void 0 : l.id,
        items: n,
        renewal: !1,
        applyEntitlements: !0,
        paymentSourceId: R,
        currency: o.currency,
        analyticsLocations: L,
        analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_PRORATED
    }), [k] = (0, S.Kq)({
        subscriptionId: null == l ? void 0 : l.id,
        items: n,
        renewal: !0,
        paymentSourceId: R,
        currency: o.currency,
        analyticsLocations: L,
        analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_RENEWAL
    }), U = k;
    null != U && (a = {
        amount: U.subtotal,
        currency: U.currency,
        tax: U.tax,
        taxInclusive: !1
    });
    let V = c.M.EEA_COUNTRIES.has(F.A.ipCountryCodeWithFallback);
    return i.useEffect(() => {
        w(M)
    }, [w, M]), (0, r.jsxs)("div", {
        children: [null != M && null != k ? (0, r.jsx)(ep, {
            premiumSubscription: l,
            premiumSubscriptionPlan: h,
            proratedInvoicePreview: M,
            renewalInvoicePreview: k,
            priceOptions: o
        }) : null, (0, r.jsx)("div", {
            className: en.LC,
            children: null != d ? null != D ? (0, r.jsx)(f.m, {
                asContainer: !0,
                text: et.intl.string(et.t.XiuuV9),
                children: (0, r.jsx)(m.Ay, {
                    label: et.intl.string(et.t["mmDvV+"]),
                    paymentSources: [D],
                    selectedPaymentSourceId: D.id,
                    hidePersonalInformation: x,
                    disabled: !0
                })
            }) : (0, r.jsx)("div", {
                children: (0, r.jsx)(p.y$y, {})
            }) : (0, r.jsx)(m.Ay, {
                label: et.intl.string(et.t["mmDvV+"]),
                paymentSources: Object.values(s),
                selectedPaymentSourceId: R,
                onChange: O,
                onPaymentSourceAdd: v,
                hidePersonalInformation: x
            })
        }), (0, r.jsx)(j.A, {
            isActive: N,
            ref: C,
            children: null != a && (0, r.jsx)(g.A, {
                onChange: T,
                forceShow: !0,
                finePrint: (0, r.jsx)(_.A, {
                    subscriptionPlan: h,
                    paymentSourceType: P,
                    proratedAmount: null != M ? M.total : void 0,
                    basePrice: a,
                    productLine: Q.EZt.BOOST
                }),
                showPricingLink: (null != (t = null == M ? void 0 : M.currency) ? t : ee.Yr.USD) !== ee.Yr.USD,
                showWithdrawalWaiver: V,
                subscriptionPlan: h
            })
        })]
    })
}

function eh(e) {
    var t;
    let n, {
            onClose: a,
            guild: s,
            guildBoostQuantity: o,
            isTransfer: l = !1,
            withAnimation: c = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: d = !1,
            fallbackGuildName: f,
            customCheckoutFlow: _
        } = e,
        {
            theme: h
        } = (0, p.wRf)(),
        [m, g] = i.useState(P.V1.Scenes.ENTRY),
        [E, y] = i.useState(!1),
        b = null != (t = null == s ? void 0 : s.name) ? t : f;
    return n = l ? null == b ? et.intl.format(et.t.P52e1r, {}) : et.intl.format(et.t["4UnIk9"], {
        guildName: b
    }) : d ? et.intl.format(et.t.gFaKd1, {
        helpCenterLink: K.A.getArticleURL(Q.MVz.FRACTIONAL_PREMIUM_ABOUT)
    }) : null == b ? et.intl.format(et.t.SZ5ohR, {
        guildSubscriptionQuantity: o
    }) : et.intl.format(et.t.GxK3Mv, {
        guildName: b,
        guildSubscriptionQuantity: o
    }), (0, r.jsxs)("div", {
        className: en.RP,
        children: [c ? (0, r.jsx)(P.V1, {
            className: en.ud,
            nextScene: m,
            onScenePlay: e => {
                if (!E) switch (e) {
                    case P.V1.Scenes.ENTRY:
                        return g(P.V1.Scenes.IDLE);
                    case P.V1.Scenes.IDLE:
                        return g(P.V1.Scenes.SUCCESS);
                    case P.V1.Scenes.SUCCESS:
                        return y(!0), g(P.V1.Scenes.IDLE)
                }
            },
            pauseWhileUnfocused: !1
        }) : null, (0, r.jsx)(x.Ay, {
            className: en.E,
            theme: h,
            premiumType: $.PremiumTypes.TIER_2,
            type: ee.Nc.has(null != u ? u : ee.he.UNKNOWN) ? x.Ay.Types.PREMIUM_PAYMENT_STARTED : x.Ay.Types.GUILD_BOOST_APPLIED
        }), (0, r.jsx)("div", {
            className: en.xR,
            children: n
        }), (0, r.jsx)(p.Button, {
            variant: "primary",
            text: _ === J.uH.APPLE_PAYMENT_LINK ? et.intl.string(et.t.qXV2XU) : et.intl.string(et.t["/iTxgz"]),
            onClick: a
        })]
    })
}