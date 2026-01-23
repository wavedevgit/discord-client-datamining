/** Chunk was on 2824 **/
/** chunk id: 674619, original params: e,t,n (module,exports,require) **/
n.d(t, {
    E: () => W,
    STEPS: () => K,
    default: () => V
}), n(65821), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    c = n(40185),
    d = n(810498),
    p = n(117945),
    m = n(594832),
    g = n(97352),
    f = n(166403),
    y = n(45938),
    j = n(937008),
    b = n(156312),
    h = n(166532),
    v = n(491057),
    O = n(566980),
    P = n(546042),
    E = n(735305),
    x = n(343834),
    S = n(467122),
    T = n(623020),
    I = n(639289),
    A = n(838462),
    k = n(641819),
    C = n(800471),
    w = n(939665),
    _ = n(957489),
    M = n(822426),
    N = n(169801),
    R = n(652215),
    D = n(788868),
    L = n(985018),
    G = n(982571);

function U(e) {
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
let H = [h.pn.PLAN_SELECT, h.pn.ADD_PAYMENT_STEPS, h.pn.REVIEW, h.pn.CONFIRM];

function B(e) {
    let {
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: i,
        onComplete: o,
        transitionState: c,
        initialPlanId: d,
        subscriptionTier: m,
        onClose: f,
        trialId: v,
        trialFooterMessageOverride: E,
        reviewWarningMessage: x,
        openInvoiceId: S,
        onSubscriptionConfirmation: T,
        renderPurchaseConfirmation: A,
        postSuccessGuild: k,
        followupSKUInfo: C,
        renderHeader: w,
        applicationId: _,
        guildId: M,
        referralTrialOfferId: N,
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
    } = (0, b.P5)(), {
        isGift: V,
        giftMessage: z,
        giftRecipient: Y
    } = (0, j.Pv)(), Z = V && (0, y.Ik)(Y) && F === h.pn.PLAN_SELECT, Q = (0, p.T)(V, W), q = K === O.h.PURCHASING;
    return (0, r.jsx)(I.A, {
        isConfirmationStep: F === h.pn.CONFIRM && null == H && null == A,
        isEligibleForWowMoment: Q,
        shouldPrefetchWowMoment: q,
        children: (0, r.jsx)(P.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: i,
            analyticsSubscriptionType: R.rzx.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            giftMessage: z,
            subscriptionTier: m,
            onClose: f,
            trialId: v,
            isGift: V,
            trialFooterMessageOverride: E,
            reviewWarningMessage: x,
            planGroup: D.LE,
            openInvoiceId: S,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: A,
            postSuccessGuild: k,
            followupSKUInfo: C,
            renderHeader: w,
            applicationId: _,
            guildId: M,
            referralTrialOfferId: N,
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
    var t, n;
    let {
        initialPlanId: l,
        handleStepChange: i,
        referralTrialOfferId: s
    } = e, {
        paymentSources: a,
        selectedSkuId: o,
        selectedPlan: u
    } = (0, b.P5)(), {
        isGift: c,
        claimableRewards: p
    } = (0, j.Pv)(), m = (0, N.A)({
        isGift: c,
        skuId: o,
        referralTrialOfferId: s
    }), g = (0, C.lp)(m), f = (0, d.px)(u, c, p);
    return (0, r.jsx)(E.x, (t = U({}, e), n = n = {
        breadcrumbSteps: H,
        onReturn: () => {
            let e = Object.values(a),
                t = e.length < 1 && null == l ? h.pn.PLAN_SELECT : h.pn.REVIEW;
            g && (t = h.pn.REVIEW), f && e.length < 1 && (t = h.pn.SELECT_FREE_SKU), i(t, {
                trackedFromStep: h.pn.PAYMENT_TYPE
            })
        }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
}
let W = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [{
            key: null,
            renderStep: e => (0, r.jsx)(P.I, U({}, e))
        }, {
            key: h.pn.SKU_SELECT,
            renderStep: e => (0, r.jsx)(_.F, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                isDynamicModal: !e,
                isLargeModal: e
            }
        }, {
            key: h.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, r.jsx)(M.K, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: h.pn.PLAN_SELECT,
            renderStep: e => (0, r.jsx)(w.Z, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, C.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
                sectionHeaderText: () => L.intl.string(L.t.UKbp1N)
            }
        }, {
            key: h.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, r.jsx)(F, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, C.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
            }
        }, {
            key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, r.jsx)(S.A, {})
        }, {
            key: h.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, r.jsx)(x.A, {})
        }, {
            key: h.pn.REVIEW,
            renderStep: e => (0, r.jsx)(T._M, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, C.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
            }
        }, {
            key: h.pn.CONFIRM,
            renderStep: e => (0, r.jsx)(A._, U({}, e))
        }, {
            key: h.pn.SELECT_FREE_SKU,
            renderStep: e => (0, r.jsx)(k.j, U({}, e)),
            options: {
                bodyClassName: G.aw,
                isMediumModal: !0
            }
        }]
    },
    K = W();

function V(e) {
    let t = (0, i.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        n = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: l
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: d,
            giftMessage: p,
            giftRecipient: g,
            giftStyle: y,
            isGift: h,
            loadId: O,
            referralCode: P,
            subscriptionTier: E,
            referralTrialOfferId: x
        } = e;
    if (null != E && !Object.values(D.pe).includes(E)) throw Error("subscriptionTier must be a premium subscription");
    let S = (0, m.tA)({
        location: "PremiumPaymentSelect",
        giftRecipient: g,
        isGift: null != h && h
    });
    return (0, r.jsx)(u.f5, {
        value: l,
        children: (0, r.jsx)(b.PaymentContextProvider, {
            loadId: O,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: W(S),
            skuIDs: [...D.oz],
            isGift: h,
            defaultPlanId: null != n ? n : a,
            referralCode: P,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: x,
            children: (0, r.jsx)(v.Qt, {
                confirmationFooter: s,
                children: (0, r.jsx)(j.dX, {
                    isGift: h,
                    giftRecipient: null == g ? void 0 : g,
                    giftMessage: p,
                    giftStyle: y,
                    giftingOrigin: d,
                    children: (0, r.jsx)(B, U({}, e))
                })
            })
        })
    })
}