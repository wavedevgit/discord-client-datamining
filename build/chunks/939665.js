/** chunk id: 939665, original params: e,n,t (module,exports,require) **/
t.d(n, {
    Z: () => G
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
    g = t(810498),
    E = t(364876),
    f = t(412260),
    j = t(446929),
    h = t(287809),
    x = t(97352),
    P = t(45938),
    T = t(975571),
    S = t(927578),
    A = t(937008),
    O = t(156312),
    b = t(166532),
    y = t(69494),
    I = t(534479),
    _ = t(482132),
    v = t(216641),
    C = t(50956),
    N = t(921925),
    M = t(592362),
    R = t(104745),
    k = t(652215),
    w = t(788868),
    D = t(985018),
    L = t(495989);

function G(e) {
    var n, t;
    let {
        handleStepChange: i,
        initialPlanId: G,
        planGroup: U,
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
    } = (0, A.Pv)(), ea = (0, g.Mq)(q), eo = (0, o.bG)([f.A], () => {
        let e = f.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
        return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
    }), eu = el && ea && null != es && es.length > 0 && eo, ec = (0, v.W)(Y, V), {
        newPlans: ed
    } = p.Ay.useExperiment({
        location: "d17fd6_3"
    }, {
        autoTrackExposure: !1
    }), ep = (0, o.bG)([h.default], () => h.default.getCurrentUser()), em = !el && null != z && z === w.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eg = null != (n = ee || en) && n, eE = r.useMemo(() => (0, S.Tm)({
        skuId: z,
        isPremium: X,
        multiMonthPlans: em ? ed : [],
        currentSubscription: W,
        defaultPlanId: Q
    }), [z, X, ed, W, em, Q]), ef = en && eE.includes(w.gD.PREMIUM_MONTH_TIER_2) ? w.gD.PREMIUM_MONTH_TIER_2 : eE[0], ej = (0, o.bG)([x.A], () => x.A.get(ef)), eh = [{
        planId: null == ej ? void 0 : ej.id,
        quantity: 1
    }], [ex, eP] = r.useState(eg), [eT, eS] = (0, m.Kq)({
        items: eh,
        renewal: !1,
        preventFetch: !eg,
        applyEntitlements: !0,
        trialId: F,
        paymentSourceId: J.paymentSourceId,
        currency: J.currency
    });
    r.useEffect(() => {
        eg && eP((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null)
    }, [eT, eg]), (0, c.A)("Payment Modal Plan Select Step", ex, 5, {
        proratedInvoicePreview: eT,
        proratedInvoiceError: eS,
        isEligibleForOffer: eg
    }, {
        tags: {
            app_context: "billing"
        }
    });
    let eA = null != (t = null == eS ? void 0 : eS.message) ? t : D.intl.string(D.t.R0RpRX),
        eO = eg && null == eS,
        eb = eg && null != eS;
    return eO && null == W && eg && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null ? (0, l.jsx)(I.A, {}) : (s()(null != Z, "Step should be set"), s()(eE.length > 0, "Premium plan options should be set"), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(C.Z, {
            giftMessage: ei
        }), !(el && (0, P.Ik)(er)) && (0, l.jsx)(y.A, {
            isEligibleForTrial: ee
        }), (0, l.jsxs)(_.dZ, {
            children: [eO && (0, l.jsx)("hr", {
                className: L.T
            }), (0, l.jsx)(R.P, {
                planSkuId: null == ej ? void 0 : ej.skuId,
                referralTrialOfferId: et
            }), (0, l.jsx)(M.A, {}), (0, l.jsx)(N.A, {}), eb ? (0, l.jsx)(u.wx6, {
                type: "critical",
                children: eA
            }) : (0, l.jsx)(j.$p, {
                planOptions: eE,
                eligibleForMultiMonthPlans: em,
                selectedPlanId: null == q ? void 0 : q.id,
                planGroup: U,
                subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                discountInvoiceItems: en ? null == eT ? void 0 : eT.invoiceItems : void 0,
                useCompactGiftComponents: eu,
                handleClose: B
            }), eO && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: L.I
                }), (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    children: D.intl.format(D.t.BHtnqA, {
                        link: T.A.getArticleURL(k.MVz.PREMIUM_DETAILS_CANCEL_SUB)
                    })
                })]
            })]
        }), (0, l.jsxs)(_.UX, {
            children: [eu && (0, l.jsx)(E._, {}), (0, l.jsx)(u.jlY, {
                "data-migration-pending": !0,
                justify: d.A.Justify.BETWEEN,
                align: d.A.Align.CENTER,
                className: $,
                children: (0, l.jsx)(j.Z3, {
                    onStepChange: i,
                    onBackClick: () => i(b.pn.SKU_SELECT),
                    showBackButton: null == G && null == H,
                    planOptions: eE,
                    shouldRenderUpdatedPaymentModal: eO,
                    isTrial: ee
                })
            })]
        })]
    }))
}