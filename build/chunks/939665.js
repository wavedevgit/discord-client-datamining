/** chunk id: 939665 params = (module,exports,require) **/
t.d(n, {
    Z: () => W
});
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    o = t.n(a),
    u = t(877624),
    d = t(417597),
    c = t(397927),
    p = t(428644),
    m = t(608805),
    E = t(69882),
    _ = t(666468),
    x = t(543767),
    P = t(810498),
    T = t(364876),
    S = t(412260),
    I = t(91053),
    h = t(446929),
    g = t(287809),
    A = t(97352),
    f = t(45938),
    j = t(975571),
    M = t(927578),
    R = t(937008),
    C = t(156312),
    y = t(166532),
    N = t(69494),
    O = t(534479),
    v = t(482132),
    b = t(340034),
    k = t(216641),
    w = t(50956),
    U = t(921925),
    D = t(592362),
    L = t(104745),
    G = t(652215),
    F = t(788868),
    H = t(985018),
    B = t(368959);

function W(e) {
    let {
        handleStepChange: n,
        initialPlanId: t,
        planGroup: r,
        subscriptionTier: a,
        trialId: W,
        handleClose: K
    } = e, {
        activeSubscription: V,
        hasFetchedSubscriptions: z,
        paymentSourceId: q,
        paymentSources: Y,
        selectedSkuId: Z,
        selectedPlan: X,
        step: Q,
        defaultPlanId: J,
        priceOptions: $,
        isPremium: ee,
        isEligibleForTrial: en,
        isEligibleForDiscount: et,
        referralTrialOfferId: ei
    } = (0, C.P5)(), {
        isGift: el,
        giftRecipient: er,
        giftMessage: es,
        claimableRewards: ea
    } = (0, R.Pv)(), eo = (0, P.Mq)(X), eu = (0, d.bG)([S.A], () => {
        let e = S.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
        return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
    }), ed = el && eo && null != ea && ea.length > 0 && eu, ec = (0, k.W)(Y, q), {
        newPlans: ep
    } = _.Ay.useExperiment({
        location: "d17fd6_3"
    }, {
        autoTrackExposure: !1
    }), em = (0, d.bG)([g.default], () => g.default.getCurrentUser()), eE = !el && null != Z && Z === F.pe.TIER_2 && null != em && em.hasHadPremium() && z && null == V && (0, _.j2)(ec), e_ = (en || et) ?? !1, ex = l.useMemo(() => (0, M.Tm)({
        skuId: Z,
        isPremium: ee,
        multiMonthPlans: eE ? ep : [],
        currentSubscription: V,
        defaultPlanId: J
    }), [Z, ee, ep, V, eE, J]), eP = et && ex.includes(F.gD.PREMIUM_MONTH_TIER_2) ? F.gD.PREMIUM_MONTH_TIER_2 : ex[0], eT = (0, d.bG)([A.A], () => A.A.get(eP)), eS = [{
        planId: eT?.id,
        quantity: 1
    }], [eI, eh] = l.useState(e_), [eg, eA] = (0, x.Kq)({
        items: eS,
        renewal: !1,
        preventFetch: !e_,
        applyEntitlements: !0,
        trialId: W,
        paymentSourceId: $.paymentSourceId,
        currency: $.currency
    });
    l.useEffect(() => {
        e_ && eh(eg?.subscriptionPeriodEnd == null)
    }, [eg, e_]), (0, p.A)("Payment Modal Plan Select Step", eI, 5, {
        proratedInvoicePreview: eg,
        proratedInvoiceError: eA,
        isEligibleForOffer: e_
    }, {
        tags: {
            app_context: "billing"
        }
    });
    let ef = eA?.message ?? H.intl.string(H.t.R0RpRX),
        ej = e_ && null == eA,
        eM = e_ && null != eA,
        eR = ej && null == V && eg?.subscriptionPeriodEnd == null,
        eC = (0, m.D7)({
            location: "premium_payment_plan_select_step"
        }),
        ey = l.useMemo(() => ({
            planOptions: ex,
            eligibleForMultiMonthPlans: eE,
            selectedPlanId: X?.id,
            planGroup: r,
            subscriptionPeriodEnd: eg?.subscriptionPeriodEnd,
            discountInvoiceItems: et ? eg?.invoiceItems : void 0,
            useCompactGiftComponents: ed,
            handleClose: K
        }), [ex, eE, X?.id, r, eg?.subscriptionPeriodEnd, eg?.invoiceItems, et, ed, K]);
    if (eR) return eC ? (0, i.jsx)(E.Ed, {
        className: B.QW
    }) : (0, i.jsx)(O.A, {});
    o()(null != Q, "Step should be set"), o()(ex.length > 0, "Premium plan options should be set");
    let eN = eC && !el ? (0, i.jsx)(b.XH, {
        ...ey,
        isInPlanSelectStep: !0,
        showSecondarySubTexts: !0
    }) : (0, i.jsx)(h.$p, {
        ...ey
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(w.Z, {
            giftMessage: es
        }), !(el && (0, f.Ik)(er)) && (0, i.jsx)(N.A, {
            isEligibleForTrial: en
        }), (0, i.jsxs)(v.dZ, {
            children: [!eC && ej && (0, i.jsx)("hr", {
                className: B.T4
            }), (0, i.jsx)(L.P, {
                className: B.ZB,
                planSkuId: eT?.skuId,
                referralTrialOfferId: ei
            }), (0, i.jsx)(D.A, {}), (0, i.jsx)(U.A, {}), eM ? (0, i.jsx)(c.wx6, {
                type: "critical",
                children: ef
            }) : eN, ej && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("hr", {
                    className: s()(B.IM, {
                        [B.Go]: eC
                    })
                }), (0, i.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    children: H.intl.format(H.t.BHtnqA, {
                        link: j.A.getArticleURL(G.MVz.PREMIUM_DETAILS_CANCEL_SUB)
                    })
                })]
            })]
        }), (0, i.jsxs)(v.UX, {
            children: [ed && (0, i.jsx)(T._, {}), (0, i.jsx)(I.Z, {
                onStepChange: n,
                onBackClick: () => n(y.pn.SKU_SELECT),
                showBackButton: null == t && null == a,
                planOptions: ex,
                shouldRenderUpdatedPaymentModal: ej,
                isTrial: en
            })]
        })]
    })
}