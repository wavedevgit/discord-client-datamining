/** chunk id: 674619, original params: e,t,n (module,exports,require) **/
n.d(t, {
    E: () => F,
    STEPS: () => B,
    default: () => W
});
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    d = n(40185),
    c = n(810498),
    p = n(117945),
    m = n(594832),
    E = n(97352),
    _ = n(166403),
    h = n(45938),
    x = n(937008),
    P = n(156312),
    S = n(166532),
    T = n(491057),
    I = n(566980),
    g = n(546042),
    A = n(735305),
    j = n(343834),
    f = n(467122),
    M = n(623020),
    R = n(639289),
    C = n(838462),
    y = n(641819),
    N = n(800471),
    v = n(939665),
    O = n(957489),
    b = n(822426),
    k = n(169801),
    w = n(652215),
    U = n(788868),
    D = n(985018);
let L = [S.pn.PLAN_SELECT, S.pn.ADD_PAYMENT_STEPS, S.pn.REVIEW, S.pn.CONFIRM];

function G(e) {
    let {
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        subscriptionTier: m,
        onClose: _,
        trialId: T,
        trialFooterMessageOverride: A,
        reviewWarningMessage: j,
        openInvoiceId: f,
        onSubscriptionConfirmation: M,
        renderPurchaseConfirmation: C,
        postSuccessGuild: y,
        followupSKUInfo: N,
        renderHeader: v,
        applicationId: O,
        guildId: b,
        referralTrialOfferId: k,
        skuId: D,
        returnRef: L,
        skipConfirm: G = !1,
        continueSessionToInitialStep: H
    } = e, {
        analyticsLocations: F
    } = (0, u.Ay)();
    i.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || r.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: B,
        selectedSkuId: W,
        purchaseState: K
    } = (0, P.P5)(), {
        isGift: z,
        giftMessage: V,
        giftRecipient: Z
    } = (0, x.Pv)(), q = z && (0, h.Ik)(Z) && B === S.pn.PLAN_SELECT, Y = (0, p.T)(z, W), X = K === I.h.PURCHASING;
    return (0, l.jsx)(R.A, {
        isConfirmationStep: B === S.pn.CONFIRM && null == H && null == C,
        isEligibleForWowMoment: Y,
        shouldPrefetchWowMoment: X,
        children: (0, l.jsx)(g.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            analyticsSubscriptionType: w.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: m,
            onClose: _,
            trialId: T,
            isGift: z,
            trialFooterMessageOverride: A,
            reviewWarningMessage: j,
            planGroup: U.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: C,
            postSuccessGuild: y,
            followupSKUInfo: N,
            renderHeader: v,
            applicationId: O,
            guildId: b,
            referralTrialOfferId: k,
            skuId: D,
            shakeWhilePurchasing: !0,
            isDynamicModal: q,
            returnRef: L,
            skipConfirm: G,
            continueSessionToInitialStep: H
        })
    })
}

function H(e) {
    let {
        initialPlanId: t,
        handleStepChange: n,
        referralTrialOfferId: i
    } = e, {
        paymentSources: s,
        selectedSkuId: r,
        selectedPlan: a
    } = (0, P.P5)(), {
        isGift: o,
        claimableRewards: u
    } = (0, x.Pv)(), d = (0, k.A)({
        isGift: o,
        skuId: r,
        referralTrialOfferId: i
    }), p = (0, N.lp)(d), m = (0, c.px)(a, o, u);
    return (0, l.jsx)(A.x, {
        ...e,
        breadcrumbSteps: L,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? S.pn.PLAN_SELECT : S.pn.REVIEW;
            p && (l = S.pn.REVIEW), m && e.length < 1 && (l = S.pn.SELECT_FREE_SKU), n(l, {
                trackedFromStep: S.pn.PAYMENT_TYPE
            })
        }
    })
}
let F = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [{
            key: null,
            renderStep: e => (0, l.jsx)(g.I, {
                ...e
            })
        }, {
            key: S.pn.SKU_SELECT,
            renderStep: e => (0, l.jsx)(O.F, {
                ...e
            }),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                isDynamicModal: !e,
                isLargeModal: e
            }
        }, {
            key: S.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, l.jsx)(b.K, {
                ...e
            }),
            options: {
                isMediumModal: !0,
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: S.pn.PLAN_SELECT,
            renderStep: e => (0, l.jsx)(v.Z, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : D.intl.string(D.t["r+SebU"]),
                sectionHeaderText: () => D.intl.string(D.t.UKbp1N)
            }
        }, {
            key: S.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, l.jsx)(H, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : D.intl.string(D.t.Sb6wI1)
            }
        }, {
            key: S.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, l.jsx)(f.A, {})
        }, {
            key: S.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, l.jsx)(j.A, {})
        }, {
            key: S.pn.REVIEW,
            renderStep: e => (0, l.jsx)(M._M, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? D.intl.string(D.t.UKbp1N) : D.intl.string(D.t.QBnNHq)
            }
        }, {
            key: S.pn.CONFIRM,
            renderStep: e => (0, l.jsx)(C._, {
                ...e
            }),
            options: {
                isMediumModal: !0
            }
        }, {
            key: S.pn.SELECT_FREE_SKU,
            renderStep: e => (0, l.jsx)(y.j, {
                ...e
            }),
            options: {
                hideDefaultModalBody: !0
            }
        }]
    },
    B = F();

function W(e) {
    let t = (0, s.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        n = (0, d.cg)() ? U.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: i
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: r,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: h,
            isGift: S,
            loadId: I,
            referralCode: g,
            subscriptionTier: A,
            referralTrialOfferId: j
        } = e;
    if (null != A && !Object.values(U.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let f = (0, m.tA)({
        location: "PremiumPaymentSelect",
        giftRecipient: E,
        isGift: S ?? !1
    });
    return (0, l.jsx)(u.f5, {
        value: i,
        children: (0, l.jsx)(P.PaymentContextProvider, {
            loadId: I,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: F(f),
            skuIDs: [...U.oz],
            isGift: S,
            defaultPlanId: n ?? a,
            referralCode: g,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: j,
            children: (0, l.jsx)(T.Qt, {
                confirmationFooter: r,
                children: (0, l.jsx)(x.dX, {
                    isGift: S,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: h,
                    giftingOrigin: c,
                    children: (0, l.jsx)(G, {
                        ...e
                    })
                })
            })
        })
    })
}