/** chunk id: 674619 params = (module,exports,require) **/
n.d(t, {
    E: () => F,
    STEPS: () => H,
    default: () => B
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    d = n(40185),
    c = n(810498),
    p = n(117945),
    m = n(594832),
    E = n(97352),
    _ = n(166403),
    x = n(937008),
    S = n(156312),
    P = n(166532),
    T = n(491057),
    I = n(566980),
    h = n(546042),
    g = n(735305),
    A = n(343834),
    f = n(467122),
    j = n(623020),
    R = n(639289),
    M = n(838462),
    C = n(641819),
    y = n(800471),
    N = n(939665),
    O = n(957489),
    v = n(822426),
    b = n(169801),
    k = n(652215),
    w = n(788868),
    U = n(985018);
let G = [P.pn.PLAN_SELECT, P.pn.ADD_PAYMENT_STEPS, P.pn.REVIEW, P.pn.CONFIRM];

function D(e) {
    let {
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: r,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        subscriptionTier: m,
        onClose: _,
        trialId: T,
        trialFooterMessageOverride: g,
        reviewWarningMessage: A,
        openInvoiceId: f,
        onSubscriptionConfirmation: j,
        renderPurchaseConfirmation: M,
        postSuccessGuild: C,
        followupSKUInfo: y,
        renderHeader: N,
        applicationId: O,
        guildId: v,
        referralTrialOfferId: b,
        skuId: U,
        returnRef: G,
        skipConfirm: D = !1,
        continueSessionToInitialStep: L
    } = e, {
        analyticsLocations: F
    } = (0, u.Ay)();
    i.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: H,
        selectedSkuId: B,
        purchaseState: W
    } = (0, S.P5)(), {
        isGift: K,
        giftMessage: V
    } = (0, x.Pv)(), z = (0, p.T)(K, B), q = W === I.h.PURCHASING;
    return (0, l.jsx)(R.A, {
        isConfirmationStep: H === P.pn.CONFIRM && null == L && null == M,
        isEligibleForWowMoment: z,
        shouldPrefetchWowMoment: q,
        children: (0, l.jsx)(h.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: k.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: m,
            onClose: _,
            trialId: T,
            isGift: K,
            trialFooterMessageOverride: g,
            reviewWarningMessage: A,
            planGroup: w.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: M,
            postSuccessGuild: C,
            followupSKUInfo: y,
            renderHeader: N,
            applicationId: O,
            guildId: v,
            referralTrialOfferId: b,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: G,
            skipConfirm: D,
            continueSessionToInitialStep: L
        })
    })
}

function L(e) {
    let {
        initialPlanId: t,
        handleStepChange: n,
        referralTrialOfferId: i
    } = e, {
        paymentSources: r,
        selectedSkuId: s,
        selectedPlan: a
    } = (0, S.P5)(), {
        isGift: o,
        claimableRewards: u
    } = (0, x.Pv)(), d = (0, b.A)({
        isGift: o,
        skuId: s,
        referralTrialOfferId: i
    }), p = (0, y.lp)(d), m = (0, c.px)(a, o, u);
    return (0, l.jsx)(g.x, {
        ...e,
        breadcrumbSteps: G,
        onReturn: () => {
            let e = Object.values(r),
                l = e.length < 1 && null == t ? P.pn.PLAN_SELECT : P.pn.REVIEW;
            p && (l = P.pn.REVIEW), m && e.length < 1 && (l = P.pn.SELECT_FREE_SKU), n(l, {
                trackedFromStep: P.pn.PAYMENT_TYPE
            })
        }
    })
}
let F = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [{
            key: null,
            renderStep: e => (0, l.jsx)(h.I, {
                ...e
            })
        }, {
            key: P.pn.SKU_SELECT,
            renderStep: e => (0, l.jsx)(O.F, {
                ...e
            }),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                modalSizeGetter: t => {
                    let {
                        canCurrentlyPurchasePremiumGroup: n
                    } = t;
                    return e || n ? "xl" : "md"
                }
            }
        }, {
            key: P.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, l.jsx)(v.K, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md",
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: P.pn.PLAN_SELECT,
            renderStep: e => (0, l.jsx)(N.Z, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, y.lp)(e) ? null : U.intl.string(U.t["r+SebU"]),
                sectionHeaderText: () => U.intl.string(U.t.UKbp1N),
                modalSizeGetter: e => {
                    let {
                        isGift: t
                    } = e;
                    return t ? "xl" : "md"
                }
            }
        }, {
            key: P.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, l.jsx)(L, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, y.lp)(e) ? null : U.intl.string(U.t.Sb6wI1)
            }
        }, {
            key: P.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, l.jsx)(f.A, {})
        }, {
            key: P.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, l.jsx)(A.A, {})
        }, {
            key: P.pn.REVIEW,
            renderStep: e => (0, l.jsx)(j._, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, y.lp)(e) ? U.intl.string(U.t.UKbp1N) : U.intl.string(U.t.QBnNHq)
            }
        }, {
            key: P.pn.CONFIRM,
            renderStep: e => (0, l.jsx)(M._, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md"
            }
        }, {
            key: P.pn.SELECT_FREE_SKU,
            renderStep: e => (0, l.jsx)(C.j, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "lg",
                hideDefaultModalBody: !0
            }
        }]
    },
    H = F();

function B(e) {
    let t = (0, r.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        n = (0, d.cg)() ? w.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: i
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: P,
            isGift: I,
            loadId: h,
            referralCode: g,
            subscriptionTier: A,
            referralTrialOfferId: f
        } = e;
    if (null != A && !Object.values(w.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let j = (0, m.tA)({
        giftRecipient: E,
        isGift: I ?? !1
    });
    return (0, l.jsx)(u.f5, {
        value: i,
        children: (0, l.jsx)(S.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: F(j),
            skuIDs: [...w.oz],
            isGift: I,
            defaultPlanId: n ?? a,
            referralCode: g,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: f,
            children: (0, l.jsx)(T.Qt, {
                confirmationFooter: s,
                children: (0, l.jsx)(x.dX, {
                    isGift: I,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: P,
                    giftingOrigin: c,
                    children: (0, l.jsx)(D, {
                        ...e
                    })
                })
            })
        })
    })
}