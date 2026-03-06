/** chunk id: 674619 params = (module,exports,require) **/
t.d(n, {
    E: () => H,
    STEPS: () => B,
    default: () => W
});
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(73153),
    a = t(73825),
    o = t(793574),
    u = t(688810),
    d = t(40185),
    c = t(810498),
    p = t(117945),
    m = t(594832),
    E = t(97352),
    _ = t(166403),
    x = t(45938),
    P = t(937008),
    T = t(156312),
    S = t(166532),
    I = t(491057),
    h = t(566980),
    g = t(546042),
    A = t(735305),
    f = t(343834),
    j = t(467122),
    M = t(623020),
    R = t(639289),
    C = t(838462),
    y = t(641819),
    N = t(800471),
    O = t(939665),
    v = t(957489),
    b = t(822426),
    k = t(169801),
    w = t(652215),
    U = t(788868),
    D = t(985018);
let L = [S.pn.PLAN_SELECT, S.pn.ADD_PAYMENT_STEPS, S.pn.REVIEW, S.pn.CONFIRM];

function G(e) {
    let {
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: r,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        subscriptionTier: m,
        onClose: _,
        trialId: I,
        trialFooterMessageOverride: A,
        reviewWarningMessage: f,
        openInvoiceId: j,
        onSubscriptionConfirmation: M,
        renderPurchaseConfirmation: C,
        postSuccessGuild: y,
        followupSKUInfo: N,
        renderHeader: O,
        applicationId: v,
        guildId: b,
        referralTrialOfferId: k,
        skuId: D,
        returnRef: L,
        skipConfirm: G = !1,
        continueSessionToInitialStep: F
    } = e, {
        analyticsLocations: H
    } = (0, u.Ay)();
    l.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: B,
        selectedSkuId: W,
        purchaseState: K
    } = (0, T.P5)(), {
        isGift: V,
        giftMessage: z,
        giftRecipient: q
    } = (0, P.Pv)(), Y = V && (0, x.Ik)(q) && B === S.pn.PLAN_SELECT, Z = (0, p.T)(V, W), X = K === h.h.PURCHASING;
    return (0, i.jsx)(R.A, {
        isConfirmationStep: B === S.pn.CONFIRM && null == F && null == C,
        isEligibleForWowMoment: Z,
        shouldPrefetchWowMoment: X,
        children: (0, i.jsx)(g.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: w.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: z,
            subscriptionTier: m,
            onClose: _,
            trialId: I,
            isGift: V,
            trialFooterMessageOverride: A,
            reviewWarningMessage: f,
            planGroup: U.LE,
            openInvoiceId: j,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: C,
            postSuccessGuild: y,
            followupSKUInfo: N,
            renderHeader: O,
            applicationId: v,
            guildId: b,
            referralTrialOfferId: k,
            skuId: D,
            shakeWhilePurchasing: !0,
            isDynamicModal: Y,
            returnRef: L,
            skipConfirm: G,
            continueSessionToInitialStep: F
        })
    })
}

function F(e) {
    let {
        initialPlanId: n,
        handleStepChange: t,
        referralTrialOfferId: l
    } = e, {
        paymentSources: r,
        selectedSkuId: s,
        selectedPlan: a
    } = (0, T.P5)(), {
        isGift: o,
        claimableRewards: u
    } = (0, P.Pv)(), d = (0, k.A)({
        isGift: o,
        skuId: s,
        referralTrialOfferId: l
    }), p = (0, N.lp)(d), m = (0, c.px)(a, o, u);
    return (0, i.jsx)(A.x, {
        ...e,
        breadcrumbSteps: L,
        onReturn: () => {
            let e = Object.values(r),
                i = e.length < 1 && null == n ? S.pn.PLAN_SELECT : S.pn.REVIEW;
            p && (i = S.pn.REVIEW), m && e.length < 1 && (i = S.pn.SELECT_FREE_SKU), t(i, {
                trackedFromStep: S.pn.PAYMENT_TYPE
            })
        }
    })
}
let H = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [{
            key: null,
            renderStep: e => (0, i.jsx)(g.I, {
                ...e
            })
        }, {
            key: S.pn.SKU_SELECT,
            renderStep: e => (0, i.jsx)(v.F, {
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
            renderStep: e => (0, i.jsx)(b.K, {
                ...e
            }),
            options: {
                isMediumModal: !0,
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: S.pn.PLAN_SELECT,
            renderStep: e => (0, i.jsx)(O.Z, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : D.intl.string(D.t["r+SebU"]),
                sectionHeaderText: () => D.intl.string(D.t.UKbp1N)
            }
        }, {
            key: S.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, i.jsx)(F, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? null : D.intl.string(D.t.Sb6wI1)
            }
        }, {
            key: S.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, i.jsx)(j.A, {})
        }, {
            key: S.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, i.jsx)(f.A, {})
        }, {
            key: S.pn.REVIEW,
            renderStep: e => (0, i.jsx)(M._, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, N.lp)(e) ? D.intl.string(D.t.UKbp1N) : D.intl.string(D.t.QBnNHq)
            }
        }, {
            key: S.pn.CONFIRM,
            renderStep: e => (0, i.jsx)(C._, {
                ...e
            }),
            options: {
                isMediumModal: !0
            }
        }, {
            key: S.pn.SELECT_FREE_SKU,
            renderStep: e => (0, i.jsx)(y.j, {
                ...e
            }),
            options: {
                hideDefaultModalBody: !0
            }
        }]
    },
    B = H();

function W(e) {
    let n = (0, r.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        t = (0, d.cg)() ? U.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: l
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: x,
            isGift: S,
            loadId: h,
            referralCode: g,
            subscriptionTier: A,
            referralTrialOfferId: f
        } = e;
    if (null != A && !Object.values(U.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let j = (0, m.tA)({
        giftRecipient: E,
        isGift: S ?? !1
    });
    return (0, i.jsx)(u.f5, {
        value: l,
        children: (0, i.jsx)(T.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: H(j),
            skuIDs: [...U.oz],
            isGift: S,
            defaultPlanId: t ?? a,
            referralCode: g,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: f,
            children: (0, i.jsx)(I.Qt, {
                confirmationFooter: s,
                children: (0, i.jsx)(P.dX, {
                    isGift: S,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: x,
                    giftingOrigin: c,
                    children: (0, i.jsx)(G, {
                        ...e
                    })
                })
            })
        })
    })
}