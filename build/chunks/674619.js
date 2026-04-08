/** chunk id: 674619 params = (module,exports,require) **/
t.d(n, {
    E: () => W,
    STEPS: () => K,
    default: () => z
});
var l = t(627968),
    i = t(64700),
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
    T = t(156312),
    P = t(166532),
    h = t(491057),
    A = t(566980),
    I = t(546042),
    g = t(735305),
    f = t(343834),
    j = t(467122),
    R = t(623020),
    M = t(970077),
    C = t(615310),
    N = t(639289),
    O = t(838462),
    y = t(641819),
    b = t(800471),
    v = t(939665),
    k = t(957489),
    U = t(822426),
    w = t(169801),
    D = t(652215),
    G = t(788868),
    L = t(985018);
let F = [P.pn.PLAN_SELECT, P.pn.ADD_PAYMENT_STEPS, P.pn.REVIEW, P.pn.CONFIRM];

function H(e) {
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
        trialFooterMessageOverride: h,
        reviewWarningMessage: g,
        openInvoiceId: f,
        onSubscriptionConfirmation: j,
        renderPurchaseConfirmation: R,
        postSuccessGuild: M,
        followupSKUInfo: O,
        renderHeader: y,
        applicationId: b,
        guildId: v,
        referralTrialOfferId: k,
        skuId: U,
        returnRef: w,
        skipConfirm: L = !1,
        continueSessionToInitialStep: F
    } = e, {
        analyticsLocations: H
    } = (0, u.Ay)();
    i.useEffect(() => {
        _.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)())
    }, []);
    let {
        selectedSkuId: B,
        purchaseState: W
    } = (0, T.P5)(), K = (0, C.bB)(), {
        isGift: z,
        giftMessage: V
    } = (0, x.Pv)(), q = (0, m.T)(z, B), Y = W === A.h.PURCHASING;
    return (0, l.jsx)(N.A, {
        isConfirmationStep: K === P.pn.CONFIRM && null == F && null == R,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: Y,
        children: (0, l.jsx)(I.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: D.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            isGift: z,
            trialFooterMessageOverride: h,
            reviewWarningMessage: g,
            planGroup: G.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: R,
            postSuccessGuild: M,
            followupSKUInfo: O,
            renderHeader: y,
            applicationId: b,
            guildId: v,
            referralTrialOfferId: k,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: w,
            skipConfirm: L,
            continueSessionToInitialStep: F
        })
    })
}

function B(e) {
    let {
        initialPlanId: n,
        handleStepChange: t,
        referralTrialOfferId: i
    } = e, {
        paymentSources: r,
        selectedSkuId: s
    } = (0, T.P5)(), a = (0, M.A)(), {
        isGift: o,
        claimableRewards: u
    } = (0, x.Pv)(), d = (0, w.A)({
        isGift: o,
        skuId: s,
        referralTrialOfferId: i
    }), c = (0, b.lp)(d), m = (0, p.px)(a, o, u);
    return (0, l.jsx)(g.x, {
        ...e,
        breadcrumbSteps: F,
        onReturn: () => {
            let e = Object.values(r),
                l = e.length < 1 && null == n ? P.pn.PLAN_SELECT : P.pn.REVIEW;
            c && (l = P.pn.REVIEW), m && e.length < 1 && (l = P.pn.SELECT_FREE_SKU), t(l, {
                trackedFromStep: P.pn.PAYMENT_TYPE
            })
        }
    })
}
let W = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [{
            key: null,
            renderStep: e => (0, l.jsx)(I.I, {
                ...e
            })
        }, {
            key: P.pn.SKU_SELECT,
            renderStep: e => (0, l.jsx)(k.F, {
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
            key: P.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, l.jsx)(U.K, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md",
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: P.pn.PLAN_SELECT,
            renderStep: e => (0, l.jsx)(v.Z, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, b.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
                sectionHeaderText: () => L.intl.string(L.t.UKbp1N),
                modalSizeGetter: e => {
                    let {
                        isGift: n
                    } = e;
                    return n ? "xl" : "md"
                }
            }
        }, {
            key: P.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, l.jsx)(B, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, b.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
            }
        }, {
            key: P.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, l.jsx)(j.A, {})
        }, {
            key: P.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, l.jsx)(f.A, {})
        }, {
            key: P.pn.REVIEW,
            renderStep: e => (0, l.jsx)(R._, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, b.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
            }
        }, {
            key: P.pn.CONFIRM,
            renderStep: e => (0, l.jsx)(O._, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md"
            }
        }, {
            key: P.pn.SELECT_FREE_SKU,
            renderStep: e => (0, l.jsx)(y.j, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "lg",
                hideDefaultModalBody: !0
            }
        }]
    },
    K = W();

function z(e) {
    let n = (0, r.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        t = (0, c.cg)() ? G.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: s
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: p,
            giftingOrigin: m,
            giftMessage: _,
            giftRecipient: P,
            giftStyle: A,
            isGift: I,
            loadId: g,
            referralCode: f,
            subscriptionTier: j,
            referralTrialOfferId: R
        } = e;
    if (null != j && !Object.values(G.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, E.tA)({
            giftRecipient: P,
            isGift: I ?? !1
        }),
        C = i.useMemo(() => W(M), [M]);
    return (0, l.jsx)(u.f5, {
        value: s,
        children: (0, l.jsx)(T.PaymentContextProvider, {
            loadId: g,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: C,
            skuIDs: [...G.oz],
            isGift: I,
            defaultPlanId: t ?? p,
            referralCode: f,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(h.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(x.dX, {
                    isGift: I,
                    giftRecipient: null == P ? void 0 : P,
                    giftMessage: _,
                    giftStyle: A,
                    giftingOrigin: m,
                    children: (0, l.jsx)(H, {
                        ...e
                    })
                })
            })
        })
    })
}