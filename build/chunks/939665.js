/** Chunk was on 2824 **/
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
    f = t(364876),
    j = t(412260),
    E = t(446929),
    x = t(287809),
    h = t(97352),
    T = t(45938),
    P = t(975571),
    S = t(927578),
    b = t(937008),
    A = t(156312),
    y = t(166532),
    v = t(69494),
    I = t(534479),
    O = t(482132),
    _ = t(216641),
    N = t(50956),
    C = t(921925),
    M = t(592362),
    w = t(104745),
    R = t(652215),
    k = t(788868),
    D = t(985018),
    L = t(495989);

function G(e) {
    var n, t;
    let {
        handleStepChange: i,
        initialPlanId: G,
        planGroup: U,
        subscriptionTier: H,
        trialId: B,
        handleClose: F
    } = e, {
        activeSubscription: W,
        hasFetchedSubscriptions: K,
        paymentSourceId: V,
        paymentSources: z,
        selectedSkuId: Y,
        selectedPlan: Z,
        step: Q,
        defaultPlanId: q,
        priceOptions: J,
        isPremium: X,
        premiumBrandRefreshBackgroundClassName: $,
        isEligibleForTrial: ee,
        isEligibleForDiscount: en,
        referralTrialOfferId: et
    } = (0, A.P5)(), {
        isGift: el,
        giftRecipient: er,
        giftMessage: ei,
        claimableRewards: es
    } = (0, b.Pv)(), ea = (0, g.Mq)(Z), eo = (0, o.bG)([j.A], () => {
        let e = j.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
        return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
    }), eu = el && ea && null != es && es.length > 0 && eo, ec = (0, _.W)(z, V), {
        newPlans: ed
    } = p.Ay.useExperiment({
        location: "d17fd6_3"
    }, {
        autoTrackExposure: !1
    }), ep = (0, o.bG)([x.default], () => x.default.getCurrentUser()), em = !el && null != Y && Y === k.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eg = null != (n = ee || en) && n, ef = r.useMemo(() => (0, S.Tm)({
        skuId: Y,
        isPremium: X,
        multiMonthPlans: em ? ed : [],
        currentSubscription: W,
        defaultPlanId: q
    }), [Y, X, ed, W, em, q]), ej = en && ef.includes(k.gD.PREMIUM_MONTH_TIER_2) ? k.gD.PREMIUM_MONTH_TIER_2 : ef[0], eE = (0, o.bG)([h.A], () => h.A.get(ej)), ex = [{
        planId: null == eE ? void 0 : eE.id,
        quantity: 1
    }], [eh, eT] = r.useState(eg), [eP, eS] = (0, m.Kq)({
        items: ex,
        renewal: !1,
        preventFetch: !eg,
        applyEntitlements: !0,
        trialId: B,
        paymentSourceId: J.paymentSourceId,
        currency: J.currency
    });
    r.useEffect(() => {
        eg && eT((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null)
    }, [eP, eg]), (0, c.A)("Payment Modal Plan Select Step", eh, 5, {
        proratedInvoicePreview: eP,
        proratedInvoiceError: eS,
        isEligibleForOffer: eg
    }, {
        tags: {
            app_context: "billing"
        }
    });
    let eb = null != (t = null == eS ? void 0 : eS.message) ? t : D.intl.string(D.t.R0RpRX),
        eA = eg && null == eS,
        ey = eg && null != eS;
    return eA && null == W && eg && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null ? (0, l.jsx)(I.A, {}) : (s()(null != Q, "Step should be set"), s()(ef.length > 0, "Premium plan options should be set"), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(N.Z, {
            giftMessage: ei
        }), !(el && (0, T.Ik)(er)) && (0, l.jsx)(v.A, {
            isEligibleForTrial: ee
        }), (0, l.jsxs)(O.dZ, {
            children: [eA && (0, l.jsx)("hr", {
                className: L.T
            }), (0, l.jsx)(w.P, {
                planSkuId: null == eE ? void 0 : eE.skuId,
                referralTrialOfferId: et
            }), (0, l.jsx)(M.A, {}), (0, l.jsx)(C.A, {}), ey ? (0, l.jsx)(u.wx6, {
                type: "critical",
                children: eb
            }) : (0, l.jsx)(E.$p, {
                planOptions: ef,
                eligibleForMultiMonthPlans: em,
                selectedPlanId: null == Z ? void 0 : Z.id,
                planGroup: U,
                subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
                discountInvoiceItems: en ? null == eP ? void 0 : eP.invoiceItems : void 0,
                useCompactGiftComponents: eu,
                handleClose: F
            }), eA && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: L.I
                }), (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    children: D.intl.format(D.t.BHtnqA, {
                        link: P.A.getArticleURL(R.MVz.PREMIUM_DETAILS_CANCEL_SUB)
                    })
                })]
            })]
        }), (0, l.jsxs)(O.UX, {
            children: [eu && (0, l.jsx)(f._, {}), (0, l.jsx)(u.jlY, {
                "data-migration-pending": !0,
                justify: d.A.Justify.BETWEEN,
                align: d.A.Align.CENTER,
                className: $,
                children: (0, l.jsx)(E.Z3, {
                    onStepChange: i,
                    onBackClick: () => i(y.pn.SKU_SELECT),
                    showBackButton: null == G && null == H,
                    planOptions: ef,
                    shouldRenderUpdatedPaymentModal: eA,
                    isTrial: ee
                })
            })]
        })]
    }))
}