/** Chunk was on 2824 **/
/** chunk id: 674619, original params: e,n,t (module,exports,require) **/
t.d(n, {
    E: () => W,
    STEPS: () => K,
    default: () => V
}), t(65821), t(896048);
var r = t(627968),
    l = t(64700),
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
    f = t(166403),
    E = t(45938),
    j = t(937008),
    x = t(156312),
    h = t(166532),
    T = t(491057),
    P = t(566980),
    S = t(546042),
    A = t(735305),
    b = t(343834),
    y = t(467122),
    I = t(623020),
    O = t(639289),
    v = t(838462),
    _ = t(641819),
    N = t(800471),
    C = t(939665),
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
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
            var r;
            r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = r
        })
    }
    return e
}
let H = [h.pn.PLAN_SELECT, h.pn.ADD_PAYMENT_STEPS, h.pn.REVIEW, h.pn.CONFIRM];

function B(e) {
    let {
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: i,
        onComplete: o,
        transitionState: c,
        initialPlanId: d,
        subscriptionTier: m,
        onClose: f,
        trialId: T,
        trialFooterMessageOverride: A,
        reviewWarningMessage: b,
        openInvoiceId: y,
        onSubscriptionConfirmation: I,
        renderPurchaseConfirmation: v,
        postSuccessGuild: _,
        followupSKUInfo: N,
        renderHeader: C,
        applicationId: M,
        guildId: R,
        referralTrialOfferId: k,
        skuId: L,
        returnRef: G,
        skipConfirm: U = !1,
        continueSessionToInitialStep: H
    } = e, {
        analyticsLocations: B
    } = (0, u.Ay)();
    l.useEffect(() => {
        g.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: F,
        selectedSkuId: W,
        purchaseState: K
    } = (0, x.P5)(), {
        isGift: V,
        giftMessage: Y,
        giftRecipient: z
    } = (0, j.Pv)(), Z = V && (0, E.Ik)(z) && F === h.pn.PLAN_SELECT, Q = (0, p.T)(V, W), q = K === P.h.PURCHASING;
    return (0, r.jsx)(O.A, {
        isConfirmationStep: F === h.pn.CONFIRM && null == H && null == v,
        isEligibleForWowMoment: Q,
        shouldPrefetchWowMoment: q,
        children: (0, r.jsx)(S.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: i,
            analyticsSubscriptionType: w.rzx.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            giftMessage: Y,
            subscriptionTier: m,
            onClose: f,
            trialId: T,
            isGift: V,
            trialFooterMessageOverride: A,
            reviewWarningMessage: b,
            planGroup: D.LE,
            openInvoiceId: y,
            onSubscriptionConfirmation: I,
            renderPurchaseConfirmation: v,
            postSuccessGuild: _,
            followupSKUInfo: N,
            renderHeader: C,
            applicationId: M,
            guildId: R,
            referralTrialOfferId: k,
            skuId: L,
            shakeWhilePurchasing: !0,
            isDynamicModal: Z,
            returnRef: G,
            skipConfirm: U,
            continueSessionToInitialStep: H
        })
    })
}

function F(e) {
    var n, t;
    let {
        initialPlanId: l,
        handleStepChange: i,
        referralTrialOfferId: s
    } = e, {
        paymentSources: a,
        selectedSkuId: o,
        selectedPlan: u
    } = (0, x.P5)(), {
        isGift: c,
        claimableRewards: p
    } = (0, j.Pv)(), m = (0, k.A)({
        isGift: c,
        skuId: o,
        referralTrialOfferId: s
    }), g = (0, N.lp)(m), f = (0, d.px)(u, c, p);
    return (0, r.jsx)(A.x, (n = U({}, e), t = t = {
        breadcrumbSteps: H,
        onReturn: () => {
            let e = Object.values(a),
                n = e.length < 1 && null == l ? h.pn.PLAN_SELECT : h.pn.REVIEW;
            g && (n = h.pn.REVIEW), f && e.length < 1 && (n = h.pn.SELECT_FREE_SKU), i(n, {
                trackedFromStep: h.pn.PAYMENT_TYPE
            })
        }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
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
            renderStep: e => (0, r.jsx)(S.I, U({}, e))
        }, {
            key: h.pn.SKU_SELECT,
            renderStep: e => (0, r.jsx)(M.F, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                isDynamicModal: !e,
                isLargeModal: e
            }
        }, {
            key: h.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, r.jsx)(R.K, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: h.pn.PLAN_SELECT,
            renderStep: e => (0, r.jsx)(C.Z, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
                sectionHeaderText: () => L.intl.string(L.t.UKbp1N)
            }
        }, {
            key: h.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, r.jsx)(F, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
            }
        }, {
            key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, r.jsx)(y.A, {})
        }, {
            key: h.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, r.jsx)(b.A, {})
        }, {
            key: h.pn.REVIEW,
            renderStep: e => (0, r.jsx)(I._M, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
            }
        }, {
            key: h.pn.CONFIRM,
            renderStep: e => (0, r.jsx)(v._, U({}, e))
        }, {
            key: h.pn.SELECT_FREE_SKU,
            renderStep: e => (0, r.jsx)(_.j, U({}, e)),
            options: {
                bodyClassName: G.aw,
                isMediumModal: !0
            }
        }]
    },
    K = W();

function V(e) {
    let n = (0, i.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        t = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: l
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: d,
            giftMessage: p,
            giftRecipient: g,
            giftStyle: E,
            isGift: h,
            loadId: P,
            referralCode: S,
            subscriptionTier: A,
            referralTrialOfferId: b
        } = e;
    if (null != A && !Object.values(D.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let y = (0, m.tA)({
        location: "PremiumPaymentSelect",
        giftRecipient: g,
        isGift: null != h && h
    });
    return (0, r.jsx)(u.f5, {
        value: l,
        children: (0, r.jsx)(x.PaymentContextProvider, {
            loadId: P,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: W(y),
            skuIDs: [...D.oz],
            isGift: h,
            defaultPlanId: null != t ? t : a,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: b,
            children: (0, r.jsx)(T.Qt, {
                confirmationFooter: s,
                children: (0, r.jsx)(j.dX, {
                    isGift: h,
                    giftRecipient: null == g ? void 0 : g,
                    giftMessage: p,
                    giftStyle: E,
                    giftingOrigin: d,
                    children: (0, r.jsx)(B, U({}, e))
                })
            })
        })
    })
}