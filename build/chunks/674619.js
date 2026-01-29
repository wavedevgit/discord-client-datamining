/** Chunk was on 2824 **/
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
    g = t(97352),
    E = t(166403),
    f = t(45938),
    j = t(937008),
    h = t(156312),
    x = t(166532),
    P = t(491057),
    T = t(566980),
    S = t(546042),
    A = t(735305),
    O = t(343834),
    b = t(467122),
    y = t(623020),
    I = t(639289),
    _ = t(838462),
    v = t(641819),
    C = t(800471),
    N = t(939665),
    M = t(957489),
    R = t(822426),
    k = t(169801),
    w = t(652215),
    D = t(788868),
    L = t(985018),
    G = t(982571);

function U(e) {
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
let H = [x.pn.PLAN_SELECT, x.pn.ADD_PAYMENT_STEPS, x.pn.REVIEW, x.pn.CONFIRM];

function F(e) {
    let {
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: i,
        onComplete: o,
        transitionState: c,
        initialPlanId: d,
        subscriptionTier: m,
        onClose: E,
        trialId: P,
        trialFooterMessageOverride: A,
        reviewWarningMessage: O,
        openInvoiceId: b,
        onSubscriptionConfirmation: y,
        renderPurchaseConfirmation: _,
        postSuccessGuild: v,
        followupSKUInfo: C,
        renderHeader: N,
        applicationId: M,
        guildId: R,
        referralTrialOfferId: k,
        skuId: L,
        returnRef: G,
        skipConfirm: U = !1,
        continueSessionToInitialStep: H
    } = e, {
        analyticsLocations: F
    } = (0, u.Ay)();
    r.useEffect(() => {
        g.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: B,
        selectedSkuId: W,
        purchaseState: K
    } = (0, h.P5)(), {
        isGift: V,
        giftMessage: Y,
        giftRecipient: z
    } = (0, j.Pv)(), q = V && (0, f.Ik)(z) && B === x.pn.PLAN_SELECT, Z = (0, p.T)(V, W), Q = K === T.h.PURCHASING;
    return (0, l.jsx)(I.A, {
        isConfirmationStep: B === x.pn.CONFIRM && null == H && null == _,
        isEligibleForWowMoment: Z,
        shouldPrefetchWowMoment: Q,
        children: (0, l.jsx)(S.PaymentModal, {
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
            onClose: E,
            trialId: P,
            isGift: V,
            trialFooterMessageOverride: A,
            reviewWarningMessage: O,
            planGroup: D.LE,
            openInvoiceId: b,
            onSubscriptionConfirmation: y,
            renderPurchaseConfirmation: _,
            postSuccessGuild: v,
            followupSKUInfo: C,
            renderHeader: N,
            applicationId: M,
            guildId: R,
            referralTrialOfferId: k,
            skuId: L,
            shakeWhilePurchasing: !0,
            isDynamicModal: q,
            returnRef: G,
            skipConfirm: U,
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
    } = (0, h.P5)(), {
        isGift: c,
        claimableRewards: p
    } = (0, j.Pv)(), m = (0, k.A)({
        isGift: c,
        skuId: o,
        referralTrialOfferId: s
    }), g = (0, C.lp)(m), E = (0, d.px)(u, c, p);
    return (0, l.jsx)(A.x, (n = U({}, e), t = t = {
        breadcrumbSteps: H,
        onReturn: () => {
            let e = Object.values(a),
                n = e.length < 1 && null == r ? x.pn.PLAN_SELECT : x.pn.REVIEW;
            g && (n = x.pn.REVIEW), E && e.length < 1 && (n = x.pn.SELECT_FREE_SKU), i(n, {
                trackedFromStep: x.pn.PAYMENT_TYPE
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
            renderStep: e => (0, l.jsx)(S.I, U({}, e))
        }, {
            key: x.pn.SKU_SELECT,
            renderStep: e => (0, l.jsx)(M.F, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                isDynamicModal: !e,
                isLargeModal: e
            }
        }, {
            key: x.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, l.jsx)(R.K, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: x.pn.PLAN_SELECT,
            renderStep: e => (0, l.jsx)(N.Z, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, C.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
                sectionHeaderText: () => L.intl.string(L.t.UKbp1N)
            }
        }, {
            key: x.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, l.jsx)(B, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, C.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
            }
        }, {
            key: x.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, l.jsx)(b.A, {})
        }, {
            key: x.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, l.jsx)(O.A, {})
        }, {
            key: x.pn.REVIEW,
            renderStep: e => (0, l.jsx)(y._M, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, C.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
            }
        }, {
            key: x.pn.CONFIRM,
            renderStep: e => (0, l.jsx)(_._, U({}, e))
        }, {
            key: x.pn.SELECT_FREE_SKU,
            renderStep: e => (0, l.jsx)(v.j, U({}, e)),
            options: {
                bodyClassName: G.aw,
                isMediumModal: !0
            }
        }]
    },
    K = W();

function V(e) {
    let n = (0, i.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        t = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: r
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: d,
            giftMessage: p,
            giftRecipient: g,
            giftStyle: f,
            isGift: x,
            loadId: T,
            referralCode: S,
            subscriptionTier: A,
            referralTrialOfferId: O
        } = e;
    if (null != A && !Object.values(D.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let b = (0, m.tA)({
        location: "PremiumPaymentSelect",
        giftRecipient: g,
        isGift: null != x && x
    });
    return (0, l.jsx)(u.f5, {
        value: r,
        children: (0, l.jsx)(h.PaymentContextProvider, {
            loadId: T,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: W(b),
            skuIDs: [...D.oz],
            isGift: x,
            defaultPlanId: null != t ? t : a,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: O,
            children: (0, l.jsx)(P.Qt, {
                confirmationFooter: s,
                children: (0, l.jsx)(j.dX, {
                    isGift: x,
                    giftRecipient: null == g ? void 0 : g,
                    giftMessage: p,
                    giftStyle: f,
                    giftingOrigin: d,
                    children: (0, l.jsx)(F, U({}, e))
                })
            })
        })
    })
}