/** chunk id: 939665 params = (module,exports,require) **/
n.d(t, {
    Z: () => W
});
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(877624),
    d = n(417597),
    c = n(397927),
    p = n(428644),
    m = n(608805),
    E = n(69882),
    _ = n(666468),
    x = n(543767),
    S = n(810498),
    P = n(364876),
    T = n(412260),
    I = n(91053),
    h = n(446929),
    g = n(287809),
    A = n(97352),
    f = n(45938),
    j = n(975571),
    R = n(927578),
    M = n(937008),
    C = n(156312),
    y = n(166532),
    N = n(69494),
    O = n(534479),
    v = n(482132),
    b = n(340034),
    k = n(216641),
    w = n(50956),
    U = n(921925),
    G = n(592362),
    D = n(104745),
    L = n(652215),
    F = n(788868),
    H = n(985018),
    B = n(368959);

function W(e) {
    let {
        handleStepChange: t,
        initialPlanId: n,
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
        isEligibleForTrial: et,
        isEligibleForDiscount: en,
        referralTrialOfferId: el
    } = (0, C.P5)(), {
        isGift: ei,
        giftRecipient: er,
        giftMessage: es,
        claimableRewards: ea
    } = (0, M.Pv)(), eo = (0, S.Mq)(X), eu = (0, d.bG)([T.A], () => {
        let e = T.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
        return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind
    }), ed = ei && eo && null != ea && ea.length > 0 && eu, ec = (0, k.W)(Y, q), {
        newPlans: ep
    } = _.Ay.useExperiment({
        location: "d17fd6_3"
    }, {
        autoTrackExposure: !1
    }), em = (0, d.bG)([g.default], () => g.default.getCurrentUser()), eE = !ei && null != Z && Z === F.pe.TIER_2 && null != em && em.hasHadPremium() && z && null == V && (0, _.j2)(ec), e_ = (et || en) ?? !1, ex = i.useMemo(() => (0, R.Tm)({
        skuId: Z,
        isPremium: ee,
        multiMonthPlans: eE ? ep : [],
        currentSubscription: V,
        defaultPlanId: J
    }), [Z, ee, ep, V, eE, J]), eS = en && ex.includes(F.gD.PREMIUM_MONTH_TIER_2) ? F.gD.PREMIUM_MONTH_TIER_2 : ex[0], eP = (0, d.bG)([A.A], () => A.A.get(eS)), eT = [{
        planId: eP?.id,
        quantity: 1
    }], [eI, eh] = i.useState(e_), [eg, eA] = (0, x.Kq)({
        items: eT,
        renewal: !1,
        preventFetch: !e_,
        applyEntitlements: !0,
        trialId: W,
        paymentSourceId: $.paymentSourceId,
        currency: $.currency
    });
    i.useEffect(() => {
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
        eR = e_ && null != eA,
        eM = ej && null == V && eg?.subscriptionPeriodEnd == null,
        eC = (0, m.D7)({
            location: "premium_payment_plan_select_step"
        }),
        ey = i.useMemo(() => ({
            planOptions: ex,
            eligibleForMultiMonthPlans: eE,
            selectedPlanId: X?.id,
            planGroup: r,
            subscriptionPeriodEnd: eg?.subscriptionPeriodEnd,
            discountInvoiceItems: en ? eg?.invoiceItems : void 0,
            useCompactGiftComponents: ed,
            handleClose: K
        }), [ex, eE, X?.id, r, eg?.subscriptionPeriodEnd, eg?.invoiceItems, en, ed, K]);
    if (eM) return eC ? (0, l.jsx)(E.Ed, {
        className: B.QW
    }) : (0, l.jsx)(O.A, {});
    o()(null != Q, "Step should be set"), o()(ex.length > 0, "Premium plan options should be set");
    let eN = eC && !ei ? (0, l.jsx)(b.XH, {
        ...ey,
        isInPlanSelectStep: !0,
        showPlanStatusSubText: !0
    }) : (0, l.jsx)(h.$p, {
        ...ey
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(w.Z, {
            giftMessage: es
        }), !(ei && (0, f.Ik)(er)) && (0, l.jsx)(N.A, {
            isEligibleForTrial: et
        }), (0, l.jsxs)(v.dZ, {
            children: [!eC && ej && (0, l.jsx)("hr", {
                className: B.T4
            }), (0, l.jsx)(D.P, {
                className: B.ZB,
                planSkuId: eP?.skuId,
                referralTrialOfferId: el
            }), (0, l.jsx)(G.A, {}), (0, l.jsx)(U.A, {}), eR ? (0, l.jsx)(c.wx6, {
                type: "critical",
                children: ef
            }) : eN, ej && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: s()(B.IM, {
                        [B.Go]: eC
                    })
                }), (0, l.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    children: H.intl.format(H.t.BHtnqA, {
                        link: j.A.getArticleURL(L.MVz.PREMIUM_DETAILS_CANCEL_SUB)
                    })
                })]
            })]
        }), (0, l.jsxs)(v.UX, {
            children: [ed && (0, l.jsx)(P._, {}), (0, l.jsx)(I.Z, {
                onStepChange: t,
                onBackClick: () => t(y.pn.SKU_SELECT),
                showBackButton: null == n && null == a,
                planOptions: ex,
                shouldRenderUpdatedPaymentModal: ej,
                isTrial: et
            })]
        })]
    })
}