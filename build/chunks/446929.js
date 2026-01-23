/** Chunk was on web.js **/
/** chunk id: 446929, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $p: () => eo,
    RO: () => ee,
    Z3: () => el,
    fJ: () => es
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(726656),
    d = n(155718),
    f = n(531260),
    p = n(93159),
    _ = n(448811),
    h = n(937008),
    m = n(156312),
    g = n(166532),
    E = n(773669),
    y = n(594832),
    b = n(97352),
    O = n(166403),
    v = n(45938),
    A = n(975571),
    I = n(927578),
    S = n(580630),
    T = n(615396),
    C = n(666468),
    N = n(40185),
    w = n(906023),
    R = n(810498),
    P = n(477421),
    D = n(422936),
    x = n(735164),
    L = n(363476),
    j = n(934581),
    M = n(871181),
    k = n(318007),
    U = n(683433),
    G = n(344159),
    V = n(958720),
    F = n(285719),
    B = n(788868),
    H = n(652215),
    Y = n(818348),
    W = n(985018),
    K = n(329221);

function z(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            z(e, t, n[t])
        })
    }
    return e
}

function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function X(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function Q(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = J(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function J(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function $(e, t) {
    let n = W.intl.string(W.t.BYa62u),
        r = W.intl.string(W.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case B.WT.YEAR:
                    return n;
                case B.WT.MONTH:
                default:
                    return r
            }
        })(),
        a = e.skuId;
    switch (t) {
        case B.pe.TIER_0:
            switch (a) {
                case B.pe.TIER_1:
                    return W.intl.string(W.t.q6mxDS);
                case B.pe.TIER_2:
                    return W.intl.string(W.t.seZVS0);
                default:
                    return i
            }
        case B.pe.TIER_1:
            switch (a) {
                case B.pe.TIER_0:
                    return W.intl.string(W.t["7+u2zg"]);
                case B.pe.TIER_2:
                    return W.intl.string(W.t.NG2qcc);
                default:
                    return i
            }
        case B.pe.TIER_2:
            switch (a) {
                case B.pe.TIER_0:
                case B.pe.TIER_1:
                    return W.intl.string(W.t["eB0/w9"]);
                case B.pe.TIER_2:
                    return e.interval === B.WT.MONTH ? W.intl.formatToPlainString(W.t.RqUv86, {
                        numFreeGuildSubscriptions: B.M4
                    }) : i;
                default:
                    return i
            }
        default:
            return i
    }
}
let ee = e => {
        var t, n, r, a;
        let {
            selectedPlanId: c,
            priceOptions: u,
            planOptions: f,
            eligibleForMultiMonthPlans: p,
            subscriptionPeriodEnd: _,
            discountInvoiceItems: g
        } = e, {
            activeSubscription: E,
            setSelectedPlanId: O,
            selectedSkuId: A,
            selectedPlan: S,
            priceOptions: T,
            userTrialOffer: w,
            isEligibleForTrial: D,
            discountOffer: x
        } = (0, m.P5)(), {
            isGift: L,
            giftRecipient: j,
            selectedGiftStyle: M,
            customGiftMessage: k,
            setCustomGiftMessage: U,
            claimableRewards: G,
            setSelectedGiftingPromotionReward: V
        } = (0, h.Pv)(), F = (0, R.kz)(S, L && (0, v.Ik)(j), G), H = (0, y.tA)({
            location: "PremiumPlanSelectStep",
            giftRecipient: j,
            isGift: L
        }), K = E;
        s()(void 0 !== K, "should not be undefined");
        let [z, q] = (0, o.yK)([b.A], () => [null != K ? b.A.get(K.planId) : null, null != c ? b.A.get(c) : null]), Z = null == w ? void 0 : w.subscription_trial, X = (0, N.cg)(), J = null != q ? q : S, $ = i.useCallback(e => {
            O(e)
        }, [O]), ee = null != u ? u : T;
        s()(null != ee, "Price option has to be set");
        let et = null == x || null == (t = x.discount) ? void 0 : t.plan_ids,
            en = null != x && f.some(e => null == et ? void 0 : et.includes(e)) && null != x.discount,
            er = (0, I.y8)(B.gD.PREMIUM_MONTH_TIER_2, !1, L, ee);
        i.useEffect(() => {
            p && C.Ay.trackExposure({
                location: "5f89bb_1"
            })
        }, [p]);
        let ei = (null == J ? void 0 : J.id) != null && f.includes(J.id);
        i.useEffect(() => {
            if (!ei) {
                if (null == z || L) $(f[0]);
                else if (null != z) {
                    let e = f.find(e => e !== z.id);
                    null != e && $(e)
                }
            }
        }, [ei, L, f, z, $]), i.useEffect(() => {
            F && null != G && G.length > 0 && V(G[0])
        }, [G, V, F]);
        let ea = (0, l._u)(),
            {
                ref: es
            } = ea,
            eo = Q(ea, ["ref"]),
            el = (null == J ? void 0 : J.id) != null ? (0, I.y8)(J.id, !1, L, ee) : void 0,
            {
                ipCountryCode: ec
            } = (0, P.A)(),
            eu = "HR" === ec && null != el && el.currency === Y.Yr.EUR,
            ed = (0, I.J$)(ee.paymentSourceId),
            ef = i.useMemo(() => (null == Z ? void 0 : Z.interval) === B.WT.DAY ? (null == Z ? void 0 : Z.interval_count) > 7 ? W.intl.string(W.t.Z1V2cs) : W.intl.string(W.t.MI1rHs) : W.intl.string(W.t["+S5lrV"]), [Z]),
            ep = !L && (en || null != Z && D && null != _);
        return {
            skuId: A,
            setPlanId: $,
            selectedPlan: J,
            selectedPlanPrice: el,
            premiumSubscriptionPlan: z,
            premiumSubscription: K,
            thePriceOptions: ee,
            hasSeenCollectiblesInSkuSelect: H,
            shouldShowUpdatedPaymentModal: ep,
            shouldShowHRKEuroWarning: eu,
            canContinue: ei,
            isPrepaid: ed,
            radioGroupRef: es,
            radioGroupProps: eo,
            isGift: L,
            giftRecipient: j,
            customGiftMessage: k,
            setCustomGiftMessage: U,
            selectedGiftStyle: M,
            isEligibleForBOGOPromotion: X,
            isEligibleForTrial: D,
            userTrialOffer: w,
            trialPeriodCopy: ef,
            discountOffer: x,
            isPlansEligibleForDiscount: en,
            discountedPlanRegularPrice: er,
            discountAmountOff: null == g || null == (a = g.find(e => e.subscriptionPlanId === B.gD.PREMIUM_MONTH_TIER_2)) || null == (r = a.discounts) || null == (n = r.find(e => e.type === d.iS.SUBSCRIPTION_PLAN)) ? void 0 : n.amount
        }
    },
    et = e => {
        let {
            selectedPlanId: t,
            planGroup: n,
            premiumSubscription: r,
            isGift: i
        } = e, a = (0, f.A)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0
        }), s = null != r && null != t && (0, T.Ge)(r, t, n);
        return {
            showFractionalPremiumBanner: a.isFractionalPremiumActive && (null == r || s) && !i && null != t && B.JM.has(t),
            fractionalPremiumInfo: a
        }
    },
    en = e => {
        let {
            isPrepaid: t,
            selectedPlan: n,
            selectedPlanPrice: i,
            intervalType: a
        } = e;
        return (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                className: K.T
            }), (0, r.jsx)(x.Sd, {
                label: W.intl.string(W.t.txajQG),
                value: (0, r.jsx)(L.A, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: a,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t
                }),
                className: K.M3
            })]
        })
    },
    er = e => {
        let {
            giftRecipient: t,
            customGiftMessage: n,
            setCustomGiftMessage: i,
            selectedGiftStyle: a,
            hasSeenCollectiblesInSkuSelect: s,
            isPrepaid: o,
            canContinue: l,
            selectedPlan: u,
            selectedPlanPrice: d,
            useCompactGiftComponents: f,
            handleClose: p,
            showTotal: h,
            switchPlanSelectComponent: m,
            warningComponent: g
        } = e, E = () => {
            if ((0, v.lo)(t) === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i) return (0, r.jsx)(M.A, {
                className: K.iX,
                innerClassName: K.pt,
                onTextChange: e => i(e),
                pendingText: n,
                currentText: n
            })
        }, y = e => (0, r.jsx)(c.D0$, {
            label: W.intl.string(W.t["3E5hXj"]),
            children: e
        });
        if ((0, v.Ik)(t)) return (0, r.jsxs)("div", {
            className: K.mh,
            children: [(0, r.jsx)("div", {
                className: K.MU,
                children: null != a && (0, r.jsx)(k.t, {})
            }), (0, r.jsxs)("div", {
                className: K.Tc,
                children: [(0, r.jsx)(F.Z, {
                    className: f ? K.KW : void 0,
                    giftRecipient: t
                }), E(), y(m), g, !s && (0, r.jsx)(_.A, {
                    onClose: p
                })]
            })]
        });
        let b = l && h;
        return (0, r.jsxs)("div", {
            className: K.Du,
            children: [(0, r.jsx)(F.Z, {
                className: f ? K.KW : void 0,
                giftRecipient: t
            }), y(m), b && null != u && null != d && (0, r.jsx)(en, {
                selectedPlan: u,
                selectedPlanPrice: d,
                intervalType: null,
                isPrepaid: o
            }), g, !s && (0, r.jsx)(_.A, {
                onClose: p
            })]
        })
    },
    ei = e => {
        let {
            isPrepaid: t,
            premiumSubscription: n,
            setPlanId: r,
            thePriceOptions: i,
            shouldShowUpdatedPaymentModal: a,
            isEligibleForTrial: s,
            isPlansEligibleForDiscount: l,
            discountAmountOff: c
        } = e, u = (0, o.bG)([E.default], () => E.default.locale), {
            isGift: d,
            giftRecipient: f
        } = (0, h.Pv)(), p = d && (0, v.Ik)(f), {
            enabled: _
        } = w.A.getCurrentConfig({
            location: "PremiumSwitchPlanSelectOption"
        }, {
            autoTrackExposure: !1
        });
        return {
            isPrepaid: t,
            selectPlan: r,
            premiumSubscription: d ? null : null != n ? n : null,
            priceOptions: i,
            shouldShowUpdatedPaymentModal: a,
            isEligibleForDiscount: l,
            discountAmountOff: c,
            isEligibleForTrial: s,
            userLocale: u,
            isCustomGift: p,
            shouldUseCalculatedDiscount: _,
            discountOffer: (0, D.O)(),
            isEligibleForBOGOPromotion: (0, N.cg)()
        }
    },
    ea = (e, t) => {
        let n = null != e && e.planId === t,
            r = n || t === B.gD.PREMIUM_MONTH_TIER_2 && null != e && [B.gD.PREMIUM_YEAR_TIER_0, B.gD.PREMIUM_YEAR_TIER_1].includes(e.planId);
        return {
            isCurrentPlan: n,
            disabled: r
        }
    },
    es = e => {
        let {
            shouldUseUnifiedCheckoutUI: t
        } = e, n = Q(e, ["shouldUseUnifiedCheckoutUI"]), {
            planOptions: a,
            radioGroupRef: s,
            selectedPlan: o,
            radioGroupProps: l
        } = n, c = ei(n), u = i.useMemo(() => a.map(e => {
            let {
                isCurrentPlan: n,
                disabled: i
            } = ea(c.premiumSubscription, e);
            return (0, r.jsx)(V.A, q({
                planId: e,
                selected: (null == o ? void 0 : o.id) === e,
                isCurrentPlan: n,
                disabled: i,
                shouldUseUnifiedCheckoutUI: t
            }, c), e)
        }), [a, t, c, o]), d = a.length > 0 ? B.hd[a[0]].premiumType : void 0;
        if (t) {
            var f;
            return null == d ? null : (0, r.jsx)(p.q7, {
                headingComponent: (0, r.jsx)(p.ec, {
                    size: "sm",
                    color: "text-strong",
                    premiumType: d
                }),
                selection: null != (f = null == o ? void 0 : o.id) ? f : "",
                onChange: c.selectPlan,
                planOptionsComponents: u
            })
        }
        return (0, r.jsx)("div", X(q({
            ref: s
        }, l), {
            children: u
        }))
    };

function eo(e) {
    let {
        selectedPlanId: t,
        planGroup: n,
        priceOptions: i,
        planOptions: a,
        eligibleForMultiMonthPlans: s,
        subscriptionPeriodEnd: o,
        showTotal: l = !0,
        discountInvoiceItems: d,
        useCompactGiftComponents: f,
        handleClose: p
    } = e, {
        skuId: _,
        setPlanId: h,
        selectedPlan: m,
        premiumSubscription: g,
        premiumSubscriptionPlan: E,
        isGift: y,
        thePriceOptions: b,
        isEligibleForTrial: O,
        giftRecipient: v,
        customGiftMessage: I,
        setCustomGiftMessage: T,
        selectedGiftStyle: C,
        discountOffer: N,
        isPlansEligibleForDiscount: w,
        discountedPlanRegularPrice: R,
        hasSeenCollectiblesInSkuSelect: P,
        isEligibleForBOGOPromotion: D,
        userTrialOffer: x,
        shouldShowUpdatedPaymentModal: L,
        trialPeriodCopy: M,
        discountAmountOff: k,
        isPrepaid: U,
        radioGroupRef: G,
        radioGroupProps: V,
        selectedPlanPrice: F,
        shouldShowHRKEuroWarning: z,
        canContinue: q
    } = ee({
        selectedPlanId: t,
        priceOptions: i,
        planOptions: a,
        eligibleForMultiMonthPlans: s,
        subscriptionPeriodEnd: o,
        discountInvoiceItems: d
    }), Z = (e, n, i) => {
        if (!L) return (0, r.jsx)("div", {
            className: K.VZ,
            children: W.intl.string(W.t.a19jpU)
        });
        if (n) {
            let t = (null == e ? void 0 : e.trial_id) === B.Dw;
            return (0, r.jsxs)("div", {
                children: [(0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    className: K.Tz,
                    children: t ? W.intl.format(W.t.nG95hA, {
                        endDate: o
                    }) : W.intl.format(W.t.s4E7kb, {
                        trialEnd: o,
                        trialPeriod: M
                    })
                }), (0, r.jsx)("hr", {
                    className: K.RA
                })]
            })
        }
        if (i && null != k && null != R && t === B.gD.PREMIUM_MONTH_TIER_2) {
            var a;
            return (0, r.jsxs)("div", {
                children: [(0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    className: K.Tz,
                    children: W.intl.format(W.t["nG7g/E"], {
                        numMonths: null != (a = null == N ? void 0 : N.discount.user_usage_limit) ? a : "",
                        discountedPrice: (0, S.$g)(R.amount - k, R.currency),
                        regularPrice: (0, S.$g)(R.amount, R.currency)
                    })
                }), (0, r.jsx)("hr", {
                    className: K.RA
                })]
            })
        }
    }, X = () => (0, r.jsx)(es, {
        planOptions: a,
        radioGroupRef: G,
        radioGroupProps: V,
        isGift: y,
        isPrepaid: U,
        premiumSubscription: g,
        setPlanId: h,
        selectedPlan: m,
        thePriceOptions: b,
        shouldShowUpdatedPaymentModal: L,
        isEligibleForTrial: O,
        isPlansEligibleForDiscount: w,
        discountAmountOff: k
    }), Q = () => z && null != F ? (0, r.jsx)(u.A, {
        message: W.intl.formatToPlainString(W.t["9hnZoK"], {
            kunaPriceWithCurrency: (0, S.$g)(7.5345 * F.amount, Y.Yr.HRK)
        })
    }) : null, {
        showFractionalPremiumBanner: J,
        fractionalPremiumInfo: ei
    } = et({
        premiumSubscription: g,
        selectedPlanId: t,
        planGroup: n,
        isGift: y
    });
    if (y) return (0, r.jsx)(er, {
        giftRecipient: v,
        customGiftMessage: I,
        setCustomGiftMessage: T,
        selectedGiftStyle: C,
        hasSeenCollectiblesInSkuSelect: P,
        isPrepaid: U,
        canContinue: q,
        selectedPlan: m,
        selectedPlanPrice: F,
        useCompactGiftComponents: f,
        handleClose: p,
        showTotal: l,
        switchPlanSelectComponent: X(),
        warningComponent: Q()
    });
    let ea = !O && !w && q && l,
        eo = !(O && J);
    return (0, r.jsxs)("div", {
        className: K.Du,
        children: [J && (0, r.jsx)(j.v, {
            fractionalPremiumInfo: ei,
            enablePremiumBrandRefresh: !0,
            variant: O ? j.u.TRIAL : void 0,
            trialPeriod: O ? M : void 0,
            trialEnd: O ? o : void 0
        }), null != E && !J && !D && (0, r.jsx)("div", {
            className: K.G3,
            children: $(E, _)
        }), eo && Z(x, O, w), X(), ea && null != m && null != F && (0, r.jsx)(en, {
            selectedPlan: m,
            selectedPlanPrice: F,
            intervalType: m.interval,
            isPrepaid: U
        }), Q(), !L && l && (0, r.jsx)(u.A, {
            message: W.intl.format(W.t.Om31w8, {
                documentationLink: A.A.getArticleURL(H.MVz.LOCALIZED_PRICING)
            })
        })]
    })
}

function el(e) {
    let {
        onStepChange: t,
        selectedPlanId: n,
        paymentSources: i,
        onBackClick: a,
        showBackButton: s,
        planOptions: o,
        shouldRenderUpdatedPaymentModal: l = !1,
        isTrial: u,
        isNextDisabled: d = !1
    } = e, {
        paymentSources: f,
        selectedPlan: p
    } = (0, m.P5)(), {
        isGift: _,
        giftRecipient: g,
        claimableRewards: E
    } = (0, h.Pv)(), y = (0, v.Ik)(g);
    return i = null != i ? i : f, n = null != n ? n : null == p ? void 0 : p.id, (0, r.jsxs)(r.Fragment, {
        children: [null != n && o.includes(n) ? (0, r.jsx)(ec, {
            paymentSources: i,
            onStepChange: t,
            selectedPlanId: n,
            isGift: _,
            claimableRewards: E,
            shouldRenderUpdatedPaymentModal: l,
            isTrial: u,
            isNextDisabled: d
        }) : (0, r.jsx)(c.Button, {
            variant: "primary",
            text: W.intl.string(W.t.XqMe3N),
            disabled: !0
        }), s ? (0, r.jsx)(U.A, {
            className: _ && y ? K.Rz : void 0,
            onClick: a
        }) : null]
    })
}

function ec(e) {
    let {
        onStepChange: t,
        selectedPlanId: n,
        isGift: i,
        claimableRewards: a,
        paymentSources: s,
        shouldRenderUpdatedPaymentModal: l,
        isTrial: u,
        isNextDisabled: d = !1
    } = e, f = (0, o.bG)([O.A], () => O.A.getPremiumTypeSubscription()), {
        step: p,
        selectedPlan: _
    } = (0, m.P5)(), {
        hasEntitlements: h
    } = (0, G.X)(n, i), E = null != f && null != f.paymentSourceId || Object.keys(s).length > 0 || h && !u;
    var y = l ? W.intl.string(W.t.PDTjLN) : W.intl.string(W.t.XqMe3N),
        b = g.pn.ADD_PAYMENT_STEPS;
    return E && (b = g.pn.REVIEW), (0, R.px)(_, i, a) && p !== g.pn.SELECT_FREE_SKU && (b = g.pn.SELECT_FREE_SKU), (0, r.jsx)(c.Button, {
        variant: "primary",
        text: y,
        onClick: () => t(b),
        disabled: d
    })
}