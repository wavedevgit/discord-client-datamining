/** chunk id: 939665, original params: e,n,t (module,exports,require) **/
t.d(n, {
    Z: () => L
}), t(896048);
var l = t(627968),
    r = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(877624),
    o = t(417597),
    u = t(397927),
    c = t(428644),
    d = t(235986),
    p = t(666468),
    m = t(543767),
    E = t(810498),
    g = t(364876),
    f = t(412260),
    P = t(446929),
    j = t(287809),
    h = t(97352),
    _ = t(45938),
    x = t(975571),
    T = t(927578),
    A = t(937008),
    O = t(156312),
    S = t(166532),
    I = t(69494),
    b = t(534479),
    y = t(482132),
    v = t(216641),
    R = t(50956),
    C = t(921925),
    M = t(592362),
    N = t(104745),
    k = t(652215),
    w = t(788868),
    D = t(985018),
    U = t(495989);

function L(e) {
    var n, t;
    let {
        handleStepChange: i,
        initialPlanId: L,
        planGroup: G,
        subscriptionTier: H,
        trialId: F,
        handleClose: B
    } = e, {
        activeSubscription: W,
        hasFetchedSubscriptions: K,
        paymentSourceId: V,
        paymentSources: Y,
        selectedSkuId: z,
        selectedPlan: q,
        step: Z,
        defaultPlanId: Q,
        priceOptions: J,
        isPremium: X,
        premiumBrandRefreshBackgroundClassName: $,
        isEligibleForTrial: ee,
        isEligibleForDiscount: en,
        referralTrialOfferId: et
    } = (0, O.P5)(), {
        isGift: el,
        giftRecipient: er,
        giftMessage: ei,
        claimableRewards: es
    } = (0, A.Pv)(), ea = (0, E.Mq)(q), eo = (0, o.bG)([f.A], () => {
        let e = f.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
        return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
    }), eu = el && ea && null != es && es.length > 0 && eo, ec = (0, v.W)(Y, V), {
        newPlans: ed
    } = p.Ay.useExperiment({
        location: "d17fd6_3"
    }, {
        autoTrackExposure: !1
    }), ep = (0, o.bG)([j.default], () => j.default.getCurrentUser()), em = !el && null != z && z === w.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eE = null != (n = ee || en) && n, eg = r.useMemo(() => (0, T.Tm)({
        skuId: z,
        isPremium: X,
        multiMonthPlans: em ? ed : [],
        currentSubscription: W,
        defaultPlanId: Q
    }), [z, X, ed, W, em, Q]), ef = en && eg.includes(w.gD.PREMIUM_MONTH_TIER_2) ? w.gD.PREMIUM_MONTH_TIER_2 : eg[0], eP = (0, o.bG)([h.A], () => h.A.get(ef)), ej = [{
        planId: null == eP ? void 0 : eP.id,
        quantity: 1
    }], [eh, e_] = r.useState(eE), [ex, eT] = (0, m.Kq)({
        items: ej,
        renewal: !1,
        preventFetch: !eE,
        applyEntitlements: !0,
        trialId: F,
        paymentSourceId: J.paymentSourceId,
        currency: J.currency
    });
    r.useEffect(() => {
        eE && e_((null == ex ? void 0 : ex.subscriptionPeriodEnd) == null)
    }, [ex, eE]), (0, c.A)("Payment Modal Plan Select Step", eh, 5, {
        proratedInvoicePreview: ex,
        proratedInvoiceError: eT,
        isEligibleForOffer: eE
    }, {
        tags: {
            app_context: "billing"
        }
    });
    let eA = null != (t = null == eT ? void 0 : eT.message) ? t : D.intl.string(D.t.R0RpRX),
        eO = eE && null == eT,
        eS = eE && null != eT;
    return eO && null == W && eE && (null == ex ? void 0 : ex.subscriptionPeriodEnd) == null ? (0, l.jsx)(b.A, {}) : (s()(null != Z, "Step should be set"), s()(eg.length > 0, "Premium plan options should be set"), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(R.Z, {
            giftMessage: ei
        }), !(el && (0, _.Ik)(er)) && (0, l.jsx)(I.A, {
            isEligibleForTrial: ee
        }), (0, l.jsxs)(y.dZ, {
            children: [eO && (0, l.jsx)("hr", {
                className: U.T
            }), (0, l.jsx)(N.P, {
                planSkuId: null == eP ? void 0 : eP.skuId,
                referralTrialOfferId: et
            }), (0, l.jsx)(M.A, {}), (0, l.jsx)(C.A, {}), eS ? (0, l.jsx)(u.wx6, {
                type: "critical",
                children: eA
            }) : (0, l.jsx)(P.$p, {
                planOptions: eg,
                eligibleForMultiMonthPlans: em,
                selectedPlanId: null == q ? void 0 : q.id,
                planGroup: G,
                subscriptionPeriodEnd: null == ex ? void 0 : ex.subscriptionPeriodEnd,
                discountInvoiceItems: en ? null == ex ? void 0 : ex.invoiceItems : void 0,
                useCompactGiftComponents: eu,
                handleClose: B
            }), eO && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: U.I
                }), (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    children: D.intl.format(D.t.BHtnqA, {
                        link: x.A.getArticleURL(k.MVz.PREMIUM_DETAILS_CANCEL_SUB)
                    })
                })]
            })]
        }), (0, l.jsxs)(y.UX, {
            children: [eu && (0, l.jsx)(g._, {}), (0, l.jsx)(u.jlY, {
                "data-migration-pending": !0,
                justify: d.A.Justify.BETWEEN,
                align: d.A.Align.CENTER,
                className: $,
                children: (0, l.jsx)(P.Z3, {
                    onStepChange: i,
                    onBackClick: () => i(S.pn.SKU_SELECT),
                    showBackButton: null == L && null == H,
                    planOptions: eg,
                    shouldRenderUpdatedPaymentModal: eO,
                    isTrial: ee
                })
            })]
        })]
    }))
}