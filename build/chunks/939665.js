/** Chunk was on 2824 **/
/** chunk id: 939665, original params: e,n,t (module,exports,require) **/
t.d(n, {
    Z: () => G
}), t(896048);
var r = t(627968),
    l = t(64700),
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
    E = t(412260),
    j = t(446929),
    x = t(287809),
    h = t(97352),
    T = t(45938),
    P = t(975571),
    S = t(927578),
    A = t(937008),
    b = t(156312),
    y = t(166532),
    I = t(69494),
    O = t(534479),
    v = t(482132),
    _ = t(216641),
    N = t(50956),
    C = t(921925),
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
        trialId: B,
        handleClose: F
    } = e, {
        activeSubscription: W,
        hasFetchedSubscriptions: K,
        paymentSourceId: V,
        paymentSources: Y,
        selectedSkuId: z,
        selectedPlan: Z,
        step: Q,
        defaultPlanId: q,
        priceOptions: J,
        isPremium: X,
        premiumBrandRefreshBackgroundClassName: $,
        isEligibleForTrial: ee,
        isEligibleForDiscount: en,
        referralTrialOfferId: et
    } = (0, b.P5)(), {
        isGift: er,
        giftRecipient: el,
        giftMessage: ei,
        claimableRewards: es
    } = (0, A.Pv)(), ea = (0, g.Mq)(Z), eo = (0, o.bG)([E.A], () => {
        let e = E.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
        return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
    }), eu = er && ea && null != es && es.length > 0 && eo, ec = (0, _.W)(Y, V), {
        newPlans: ed
    } = p.Ay.useExperiment({
        location: "d17fd6_3"
    }, {
        autoTrackExposure: !1
    }), ep = (0, o.bG)([x.default], () => x.default.getCurrentUser()), em = !er && null != z && z === w.pe.TIER_2 && null != ep && ep.hasHadPremium() && K && null == W && (0, p.j2)(ec), eg = null != (n = ee || en) && n, ef = l.useMemo(() => (0, S.Tm)({
        skuId: z,
        isPremium: X,
        multiMonthPlans: em ? ed : [],
        currentSubscription: W,
        defaultPlanId: q
    }), [z, X, ed, W, em, q]), eE = en && ef.includes(w.gD.PREMIUM_MONTH_TIER_2) ? w.gD.PREMIUM_MONTH_TIER_2 : ef[0], ej = (0, o.bG)([h.A], () => h.A.get(eE)), ex = [{
        planId: null == ej ? void 0 : ej.id,
        quantity: 1
    }], [eh, eT] = l.useState(eg), [eP, eS] = (0, m.Kq)({
        items: ex,
        renewal: !1,
        preventFetch: !eg,
        applyEntitlements: !0,
        trialId: B,
        paymentSourceId: J.paymentSourceId,
        currency: J.currency
    });
    l.useEffect(() => {
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
    let eA = null != (t = null == eS ? void 0 : eS.message) ? t : D.intl.string(D.t.R0RpRX),
        eb = eg && null == eS,
        ey = eg && null != eS;
    return eb && null == W && eg && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null ? (0, r.jsx)(O.A, {}) : (s()(null != Q, "Step should be set"), s()(ef.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N.Z, {
            giftMessage: ei
        }), !(er && (0, T.Ik)(el)) && (0, r.jsx)(I.A, {
            isEligibleForTrial: ee
        }), (0, r.jsxs)(v.dZ, {
            children: [eb && (0, r.jsx)("hr", {
                className: L.T
            }), (0, r.jsx)(R.P, {
                planSkuId: null == ej ? void 0 : ej.skuId,
                referralTrialOfferId: et
            }), (0, r.jsx)(M.A, {}), (0, r.jsx)(C.A, {}), ey ? (0, r.jsx)(u.wx6, {
                type: "critical",
                children: eA
            }) : (0, r.jsx)(j.$p, {
                planOptions: ef,
                eligibleForMultiMonthPlans: em,
                selectedPlanId: null == Z ? void 0 : Z.id,
                planGroup: U,
                subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
                discountInvoiceItems: en ? null == eP ? void 0 : eP.invoiceItems : void 0,
                useCompactGiftComponents: eu,
                handleClose: F
            }), eb && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("hr", {
                    className: L.I
                }), (0, r.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    children: D.intl.format(D.t.BHtnqA, {
                        link: P.A.getArticleURL(k.MVz.PREMIUM_DETAILS_CANCEL_SUB)
                    })
                })]
            })]
        }), (0, r.jsxs)(v.UX, {
            children: [eu && (0, r.jsx)(f._, {}), (0, r.jsx)(u.jlY, {
                "data-migration-pending": !0,
                justify: d.A.Justify.BETWEEN,
                align: d.A.Align.CENTER,
                className: $,
                children: (0, r.jsx)(j.Z3, {
                    onStepChange: i,
                    onBackClick: () => i(y.pn.SKU_SELECT),
                    showBackButton: null == G && null == H,
                    planOptions: ef,
                    shouldRenderUpdatedPaymentModal: eb,
                    isTrial: ee
                })
            })]
        })]
    }))
}