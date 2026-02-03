/** chunk id: 674619, original params: e,n,t (module,exports,require) **/
t.d(n, {
    E: () => W,
    STEPS: () => K,
    default: () => V
}), t(65821), t(896048);
var l = t(627968),
    r = t(64700),
    i = t(311907),
    s = t(73153),
    a = t(73825),
    o = t(793574),
    u = t(688810),
    c = t(40185),
    d = t(810498),
    p = t(117945),
    m = t(594832),
    E = t(97352),
    g = t(166403),
    f = t(45938),
    P = t(937008),
    j = t(156312),
    h = t(166532),
    _ = t(491057),
    x = t(566980),
    T = t(546042),
    A = t(735305),
    O = t(343834),
    S = t(467122),
    I = t(623020),
    b = t(639289),
    y = t(838462),
    v = t(641819),
    R = t(800471),
    C = t(939665),
    M = t(957489),
    N = t(822426),
    k = t(169801),
    w = t(652215),
    D = t(788868),
    U = t(985018),
    L = t(982571);

function G(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
            var l;
            l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = l
        })
    }
    return e
}
let H = [h.pn.PLAN_SELECT, h.pn.ADD_PAYMENT_STEPS, h.pn.REVIEW, h.pn.CONFIRM];

function F(e) {
    let {
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: i,
        onComplete: o,
        transitionState: c,
        initialPlanId: d,
        subscriptionTier: m,
        onClose: g,
        trialId: _,
        trialFooterMessageOverride: A,
        reviewWarningMessage: O,
        openInvoiceId: S,
        onSubscriptionConfirmation: I,
        renderPurchaseConfirmation: y,
        postSuccessGuild: v,
        followupSKUInfo: R,
        renderHeader: C,
        applicationId: M,
        guildId: N,
        referralTrialOfferId: k,
        skuId: U,
        returnRef: L,
        skipConfirm: G = !1,
        continueSessionToInitialStep: H
    } = e, {
        analyticsLocations: F
    } = (0, u.Ay)();
    r.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: B,
        selectedSkuId: W,
        purchaseState: K
    } = (0, j.P5)(), {
        isGift: V,
        giftMessage: Y,
        giftRecipient: z
    } = (0, P.Pv)(), q = V && (0, f.Ik)(z) && B === h.pn.PLAN_SELECT, Z = (0, p.T)(V, W), Q = K === x.h.PURCHASING;
    return (0, l.jsx)(b.A, {
        isConfirmationStep: B === h.pn.CONFIRM && null == H && null == y,
        isEligibleForWowMoment: Z,
        shouldPrefetchWowMoment: Q,
        children: (0, l.jsx)(T.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: i,
            analyticsSubscriptionType: w.rzx.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            giftMessage: Y,
            subscriptionTier: m,
            onClose: g,
            trialId: _,
            isGift: V,
            trialFooterMessageOverride: A,
            reviewWarningMessage: O,
            planGroup: D.LE,
            openInvoiceId: S,
            onSubscriptionConfirmation: I,
            renderPurchaseConfirmation: y,
            postSuccessGuild: v,
            followupSKUInfo: R,
            renderHeader: C,
            applicationId: M,
            guildId: N,
            referralTrialOfferId: k,
            skuId: U,
            shakeWhilePurchasing: !0,
            isDynamicModal: q,
            returnRef: L,
            skipConfirm: G,
            continueSessionToInitialStep: H
        })
    })
}

function B(e) {
    var n, t;
    let {
        initialPlanId: r,
        handleStepChange: i,
        referralTrialOfferId: s
    } = e, {
        paymentSources: a,
        selectedSkuId: o,
        selectedPlan: u
    } = (0, j.P5)(), {
        isGift: c,
        claimableRewards: p
    } = (0, P.Pv)(), m = (0, k.A)({
        isGift: c,
        skuId: o,
        referralTrialOfferId: s
    }), E = (0, R.lp)(m), g = (0, d.px)(u, c, p);
    return (0, l.jsx)(A.x, (n = G({}, e), t = t = {
        breadcrumbSteps: H,
        onReturn: () => {
            let e = Object.values(a),
                n = e.length < 1 && null == r ? h.pn.PLAN_SELECT : h.pn.REVIEW;
            E && (n = h.pn.REVIEW), g && e.length < 1 && (n = h.pn.SELECT_FREE_SKU), i(n, {
                trackedFromStep: h.pn.PAYMENT_TYPE
            })
        }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
        }
        return t
    })(Object(t)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))
}
let W = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [{
            key: null,
            renderStep: e => (0, l.jsx)(T.I, G({}, e))
        }, {
            key: h.pn.SKU_SELECT,
            renderStep: e => (0, l.jsx)(M.F, G({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                isDynamicModal: !e,
                isLargeModal: e
            }
        }, {
            key: h.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, l.jsx)(N.K, G({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: h.pn.PLAN_SELECT,
            renderStep: e => (0, l.jsx)(C.Z, G({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, R.lp)(e) ? null : U.intl.string(U.t["r+SebU"]),
                sectionHeaderText: () => U.intl.string(U.t.UKbp1N)
            }
        }, {
            key: h.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, l.jsx)(B, G({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, R.lp)(e) ? null : U.intl.string(U.t.Sb6wI1)
            }
        }, {
            key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, l.jsx)(S.A, {})
        }, {
            key: h.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, l.jsx)(O.A, {})
        }, {
            key: h.pn.REVIEW,
            renderStep: e => (0, l.jsx)(I._M, G({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, R.lp)(e) ? U.intl.string(U.t.UKbp1N) : U.intl.string(U.t.QBnNHq)
            }
        }, {
            key: h.pn.CONFIRM,
            renderStep: e => (0, l.jsx)(y._, G({}, e))
        }, {
            key: h.pn.SELECT_FREE_SKU,
            renderStep: e => (0, l.jsx)(v.j, G({}, e)),
            options: {
                bodyClassName: L.aw,
                isMediumModal: !0
            }
        }]
    },
    K = W();

function V(e) {
    let n = (0, i.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        t = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: r
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: d,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: f,
            isGift: h,
            loadId: x,
            referralCode: T,
            subscriptionTier: A,
            referralTrialOfferId: O
        } = e;
    if (null != A && !Object.values(D.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let S = (0, m.tA)({
        location: "PremiumPaymentSelect",
        giftRecipient: E,
        isGift: null != h && h
    });
    return (0, l.jsx)(u.f5, {
        value: r,
        children: (0, l.jsx)(j.PaymentContextProvider, {
            loadId: x,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: W(S),
            skuIDs: [...D.oz],
            isGift: h,
            defaultPlanId: null != t ? t : a,
            referralCode: T,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: O,
            children: (0, l.jsx)(_.Qt, {
                confirmationFooter: s,
                children: (0, l.jsx)(P.dX, {
                    isGift: h,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: f,
                    giftingOrigin: d,
                    children: (0, l.jsx)(F, G({}, e))
                })
            })
        })
    })
}