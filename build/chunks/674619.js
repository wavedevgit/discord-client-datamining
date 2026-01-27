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
    f = t(166403),
    j = t(45938),
    E = t(937008),
    x = t(156312),
    h = t(166532),
    T = t(491057),
    P = t(566980),
    S = t(546042),
    b = t(735305),
    A = t(343834),
    y = t(467122),
    v = t(623020),
    I = t(639289),
    O = t(838462),
    _ = t(641819),
    N = t(800471),
    C = t(939665),
    M = t(957489),
    w = t(822426),
    R = t(169801),
    k = t(652215),
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
        trialFooterMessageOverride: b,
        reviewWarningMessage: A,
        openInvoiceId: y,
        onSubscriptionConfirmation: v,
        renderPurchaseConfirmation: O,
        postSuccessGuild: _,
        followupSKUInfo: N,
        renderHeader: C,
        applicationId: M,
        guildId: w,
        referralTrialOfferId: R,
        skuId: L,
        returnRef: G,
        skipConfirm: U = !1,
        continueSessionToInitialStep: H
    } = e, {
        analyticsLocations: B
    } = (0, u.Ay)();
    r.useEffect(() => {
        g.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: F,
        selectedSkuId: W,
        purchaseState: K
    } = (0, x.P5)(), {
        isGift: V,
        giftMessage: z,
        giftRecipient: Y
    } = (0, E.Pv)(), Z = V && (0, j.Ik)(Y) && F === h.pn.PLAN_SELECT, Q = (0, p.T)(V, W), q = K === P.h.PURCHASING;
    return (0, l.jsx)(I.A, {
        isConfirmationStep: F === h.pn.CONFIRM && null == H && null == O,
        isEligibleForWowMoment: Q,
        shouldPrefetchWowMoment: q,
        children: (0, l.jsx)(S.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: i,
            analyticsSubscriptionType: k.rzx.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            giftMessage: z,
            subscriptionTier: m,
            onClose: f,
            trialId: T,
            isGift: V,
            trialFooterMessageOverride: b,
            reviewWarningMessage: A,
            planGroup: D.LE,
            openInvoiceId: y,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: O,
            postSuccessGuild: _,
            followupSKUInfo: N,
            renderHeader: C,
            applicationId: M,
            guildId: w,
            referralTrialOfferId: R,
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
        initialPlanId: r,
        handleStepChange: i,
        referralTrialOfferId: s
    } = e, {
        paymentSources: a,
        selectedSkuId: o,
        selectedPlan: u
    } = (0, x.P5)(), {
        isGift: c,
        claimableRewards: p
    } = (0, E.Pv)(), m = (0, R.A)({
        isGift: c,
        skuId: o,
        referralTrialOfferId: s
    }), g = (0, N.lp)(m), f = (0, d.px)(u, c, p);
    return (0, l.jsx)(b.x, (n = U({}, e), t = t = {
        breadcrumbSteps: H,
        onReturn: () => {
            let e = Object.values(a),
                n = e.length < 1 && null == r ? h.pn.PLAN_SELECT : h.pn.REVIEW;
            g && (n = h.pn.REVIEW), f && e.length < 1 && (n = h.pn.SELECT_FREE_SKU), i(n, {
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
            renderStep: e => (0, l.jsx)(S.I, U({}, e))
        }, {
            key: h.pn.SKU_SELECT,
            renderStep: e => (0, l.jsx)(M.F, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                isDynamicModal: !e,
                isLargeModal: e
            }
        }, {
            key: h.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, l.jsx)(w.K, U({}, e)),
            options: {
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: h.pn.PLAN_SELECT,
            renderStep: e => (0, l.jsx)(C.Z, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
                sectionHeaderText: () => L.intl.string(L.t.UKbp1N)
            }
        }, {
            key: h.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, l.jsx)(F, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
            }
        }, {
            key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, l.jsx)(y.A, {})
        }, {
            key: h.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, l.jsx)(A.A, {})
        }, {
            key: h.pn.REVIEW,
            renderStep: e => (0, l.jsx)(v._M, U({}, e)),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
            }
        }, {
            key: h.pn.CONFIRM,
            renderStep: e => (0, l.jsx)(O._, U({}, e))
        }, {
            key: h.pn.SELECT_FREE_SKU,
            renderStep: e => (0, l.jsx)(_.j, U({}, e)),
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
            analyticsLocations: r
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: d,
            giftMessage: p,
            giftRecipient: g,
            giftStyle: j,
            isGift: h,
            loadId: P,
            referralCode: S,
            subscriptionTier: b,
            referralTrialOfferId: A
        } = e;
    if (null != b && !Object.values(D.pe).includes(b)) throw Error("subscriptionTier must be a premium subscription");
    let y = (0, m.tA)({
        location: "PremiumPaymentSelect",
        giftRecipient: g,
        isGift: null != h && h
    });
    return (0, l.jsx)(u.f5, {
        value: r,
        children: (0, l.jsx)(x.PaymentContextProvider, {
            loadId: P,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: W(y),
            skuIDs: [...D.oz],
            isGift: h,
            defaultPlanId: null != t ? t : a,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: A,
            children: (0, l.jsx)(T.Qt, {
                confirmationFooter: s,
                children: (0, l.jsx)(E.dX, {
                    isGift: h,
                    giftRecipient: null == g ? void 0 : g,
                    giftMessage: p,
                    giftStyle: j,
                    giftingOrigin: d,
                    children: (0, l.jsx)(B, U({}, e))
                })
            })
        })
    })
}