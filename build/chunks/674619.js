/** chunk id: 674619 params = (module,exports,require) **/
n.d(t, {
    E: () => W,
    STEPS: () => K,
    default: () => z
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    d = n(120700),
    c = n(40185),
    p = n(810498),
    m = n(117945),
    E = n(594832),
    _ = n(97352),
    S = n(166403),
    x = n(937008),
    P = n(156312),
    T = n(166532),
    A = n(491057),
    h = n(566980),
    g = n(546042),
    I = n(735305),
    f = n(343834),
    j = n(467122),
    R = n(623020),
    M = n(970077),
    C = n(615310),
    N = n(639289),
    O = n(838462),
    y = n(641819),
    b = n(800471),
    v = n(939665),
    k = n(957489),
    U = n(822426),
    w = n(169801),
    G = n(652215),
    D = n(788868),
    L = n(985018);
let F = [T.pn.PLAN_SELECT, T.pn.ADD_PAYMENT_STEPS, T.pn.REVIEW, T.pn.CONFIRM];

function H(e) {
    let {
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: r,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        subscriptionTier: p,
        onClose: E,
        trialId: S,
        trialFooterMessageOverride: A,
        reviewWarningMessage: I,
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
    } = (0, P.P5)(), K = (0, C.bB)(), {
        isGift: z,
        giftMessage: V
    } = (0, x.Pv)(), q = (0, m.T)(z, B), Y = W === h.h.PURCHASING;
    return (0, l.jsx)(N.A, {
        isConfirmationStep: K === T.pn.CONFIRM && null == F && null == R,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: Y,
        children: (0, l.jsx)(g.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: G.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            isGift: z,
            trialFooterMessageOverride: A,
            reviewWarningMessage: I,
            planGroup: D.LE,
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
        initialPlanId: t,
        handleStepChange: n,
        referralTrialOfferId: i
    } = e, {
        paymentSources: r,
        selectedSkuId: s
    } = (0, P.P5)(), a = (0, M.A)(), {
        isGift: o,
        claimableRewards: u
    } = (0, x.Pv)(), d = (0, w.A)({
        isGift: o,
        skuId: s,
        referralTrialOfferId: i
    }), c = (0, b.lp)(d), m = (0, p.px)(a, o, u);
    return (0, l.jsx)(I.x, {
        ...e,
        breadcrumbSteps: F,
        onReturn: () => {
            let e = Object.values(r),
                l = e.length < 1 && null == t ? T.pn.PLAN_SELECT : T.pn.REVIEW;
            c && (l = T.pn.REVIEW), m && e.length < 1 && (l = T.pn.SELECT_FREE_SKU), n(l, {
                trackedFromStep: T.pn.PAYMENT_TYPE
            })
        }
    })
}
let W = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [{
            key: null,
            renderStep: e => (0, l.jsx)(g.I, {
                ...e
            })
        }, {
            key: T.pn.SKU_SELECT,
            renderStep: e => (0, l.jsx)(k.F, {
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
            key: T.pn.WHAT_YOU_LOSE,
            renderStep: e => (0, l.jsx)(U.K, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md",
                renderHeader: !1,
                hideSlider: !0
            }
        }, {
            key: T.pn.PLAN_SELECT,
            renderStep: e => (0, l.jsx)(v.Z, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, b.lp)(e) ? null : L.intl.string(L.t["r+SebU"]),
                sectionHeaderText: () => L.intl.string(L.t.UKbp1N),
                modalSizeGetter: e => {
                    let {
                        isGift: t
                    } = e;
                    return t ? "xl" : "md"
                }
            }
        }, {
            key: T.pn.ADD_PAYMENT_STEPS,
            renderStep: e => (0, l.jsx)(B, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, b.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)
            }
        }, {
            key: T.pn.AWAITING_PURCHASE_TOKEN_AUTH,
            renderStep: () => (0, l.jsx)(j.A, {})
        }, {
            key: T.pn.AWAITING_AUTHENTICATION,
            renderStep: () => (0, l.jsx)(f.A, {})
        }, {
            key: T.pn.REVIEW,
            renderStep: e => (0, l.jsx)(R._, {
                ...e
            }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: e => (0, b.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)
            }
        }, {
            key: T.pn.CONFIRM,
            renderStep: e => (0, l.jsx)(O._, {
                ...e
            }),
            options: {
                modalSizeGetter: () => "md"
            }
        }, {
            key: T.pn.SELECT_FREE_SKU,
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
    let t = (0, r.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        n = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        {
            analyticsLocations: s
        } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: p,
            giftingOrigin: m,
            giftMessage: _,
            giftRecipient: T,
            giftStyle: h,
            isGift: g,
            loadId: I,
            referralCode: f,
            subscriptionTier: j,
            referralTrialOfferId: R
        } = e;
    if (null != j && !Object.values(D.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, E.tA)({
            giftRecipient: T,
            isGift: g ?? !1
        }),
        C = i.useMemo(() => W(M), [M]);
    return (0, l.jsx)(u.f5, {
        value: s,
        children: (0, l.jsx)(P.PaymentContextProvider, {
            loadId: I,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: C,
            skuIDs: [...D.oz],
            isGift: g,
            defaultPlanId: n ?? p,
            referralCode: f,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(A.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(x.dX, {
                    isGift: g,
                    giftRecipient: null == T ? void 0 : T,
                    giftMessage: _,
                    giftStyle: h,
                    giftingOrigin: m,
                    children: (0, l.jsx)(H, {
                        ...e
                    })
                })
            })
        })
    })
}