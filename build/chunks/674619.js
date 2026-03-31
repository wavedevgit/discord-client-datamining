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
    d = t(120700),
    c = t(40185),
    p = t(810498),
    m = t(117945),
    E = t(594832),
    _ = t(97352),
    S = t(166403),
    x = t(937008),
    P = t(156312),
    T = t(166532),
    I = t(491057),
    h = t(566980),
    g = t(546042),
    A = t(735305),
    f = t(343834),
    j = t(467122),
    R = t(623020),
    C = t(639289),
    M = t(838462),
    N = t(641819),
    O = t(800471),
    y = t(939665),
    v = t(957489),
    b = t(822426),
    k = t(169801),
    U = t(652215),
    w = t(788868),
    D = t(985018);
let G = [T.pn.PLAN_SELECT, T.pn.ADD_PAYMENT_STEPS, T.pn.REVIEW, T.pn.CONFIRM];

function L(e) {
    let {
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: r,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        subscriptionTier: p,
        onClose: E,
        trialId: S,
        trialFooterMessageOverride: I,
        reviewWarningMessage: A,
        openInvoiceId: f,
        onSubscriptionConfirmation: j,
        renderPurchaseConfirmation: R,
        postSuccessGuild: M,
        followupSKUInfo: N,
        renderHeader: O,
        applicationId: y,
        guildId: v,
        referralTrialOfferId: b,
        skuId: k,
        returnRef: D,
        skipConfirm: G = !1,
        continueSessionToInitialStep: L
    } = e, {
        analyticsLocations: F
    } = (0, u.Ay)();
    l.useEffect(() => {
        _.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        step: H,
        selectedSkuId: B,
        purchaseState: W
    } = (0, P.P5)(), {
        isGift: K,
        giftMessage: z
    } = (0, x.Pv)(), V = (0, m.T)(K, B), q = W === h.h.PURCHASING;
    return (0, i.jsx)(C.A, {
        isConfirmationStep: H === T.pn.CONFIRM && null == L && null == R,
        isEligibleForWowMoment: V,
        shouldPrefetchWowMoment: q,
        children: (0, i.jsx)(g.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: U.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: z,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            isGift: K,
            trialFooterMessageOverride: I,
            reviewWarningMessage: A,
            planGroup: w.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: R,
            postSuccessGuild: M,
            followupSKUInfo: N,
            renderHeader: O,
            applicationId: y,
            guildId: v,
            referralTrialOfferId: b,
            skuId: k,
            shakeWhilePurchasing: !0,
            returnRef: D,
            skipConfirm: G,
            continueSessionToInitialStep: L
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
    } = (0, P.P5)(), {
        isGift: o,
        claimableRewards: u
    } = (0, x.Pv)(), d = (0, k.A)({
        isGift: o,
        skuId: s,
        referralTrialOfferId: l
    }), c = (0, O.lp)(d), m = (0, p.px)(a, o, u);
    return (0, i.jsx)(A.x, {
        ...e,
        breadcrumbSteps: G,
        onReturn: () => {
            let e = Object.values(r),
                i = e.length < 1 && null == n ? T.pn.PLAN_SELECT : T.pn.REVIEW;
            c && (i = T.pn.REVIEW), m && e.length < 1 && (i = T.pn.SELECT_FREE_SKU), t(i, {
                trackedFromStep: T.pn.PAYMENT_TYPE
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
            key: T.pn.SKU_SELECT,
            renderStep: e => (0, i.jsx)(v.F, {
                ...e
            }),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                modalSizeGetter: n => {
                    let {
                        canCurrentlyPurchasePremiumGroup: t
                    } = n;
                    return e || t ? "xl" : "md"
                }
            }
        }, {
            key: T.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, i.jsx)(b.K, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md",
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: T.pn.PLAN_SELECT,
            renderStep: e => (0, i.jsx)(y.Z, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, O.lp)(e) ? null : D.intl.string(D.t["r+SebU"]),
                sectionHeaderText: () => D.intl.string(D.t.UKbp1N),
                modalSizeGetter: e => {
                    let {
                        isGift: n
                    } = e;
                    return n ? "xl" : "md"
                }
            }
        }, {
            key: T.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, i.jsx)(F, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, O.lp)(e) ? null : D.intl.string(D.t.Sb6wI1)
            }
        }, {
            key: T.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, i.jsx)(j.A, {})
        }, {
            key: T.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, i.jsx)(f.A, {})
        }, {
            key: T.pn.REVIEW,
            renderStep: e => (0, i.jsx)(R._, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, O.lp)(e) ? D.intl.string(D.t.UKbp1N) : D.intl.string(D.t.QBnNHq)
            }
        }, {
            key: T.pn.CONFIRM,
            renderStep: e => (0, i.jsx)(M._, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md"
            }
        }, {
            key: T.pn.SELECT_FREE_SKU,
            renderStep: e => (0, i.jsx)(N.j, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "lg",
                hideDefaultModalBody: !0
            }
        }]
    },
    B = H();

function W(e) {
    let n = (0, r.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        t = (0, c.cg)() ? w.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: l
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: p,
            giftMessage: m,
            giftRecipient: _,
            giftStyle: T,
            isGift: h,
            loadId: g,
            referralCode: A,
            subscriptionTier: f,
            referralTrialOfferId: j
        } = e;
    if (null != f && !Object.values(w.pe).includes(f)) throw Error("subscriptionTier must be a premium subscription");
    let R = (0, E.tA)({
        giftRecipient: _,
        isGift: h ?? !1
    });
    return (0, i.jsx)(u.f5, {
        value: l,
        children: (0, i.jsx)(P.PaymentContextProvider, {
            loadId: g,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: H(R),
            skuIDs: [...w.oz],
            isGift: h,
            defaultPlanId: t ?? a,
            referralCode: A,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: j,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, i.jsx)(I.Qt, {
                confirmationFooter: s,
                children: (0, i.jsx)(x.dX, {
                    isGift: h,
                    giftRecipient: null == _ ? void 0 : _,
                    giftMessage: m,
                    giftStyle: T,
                    giftingOrigin: p,
                    children: (0, i.jsx)(L, {
                        ...e
                    })
                })
            })
        })
    })
}