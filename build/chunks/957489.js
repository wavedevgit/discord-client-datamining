/** chunk id: 957489 params = (module,exports,require) **/
t.d(n, {
    F: () => x
});
var l = t(627968),
    i = t(158954),
    r = t(234419),
    s = t(612669),
    a = t(672525),
    o = t(927578),
    u = t(937008),
    d = t(156312),
    c = t(166532),
    p = t(800471),
    m = t(169801),
    E = t(788868),
    _ = t(985018),
    S = t(338042);

function x(e) {
    let {
        handleStepChange: n,
        referralTrialOfferId: t
    } = e, {
        setSelectedSkuId: i,
        activeSubscription: s,
        startedPaymentFlowWithPaymentSourcesRef: a,
        setSelectedPlanId: _,
        priceOptions: S,
        defaultPlanId: x,
        hasPaymentSources: P
    } = (0, d.P5)(), {
        isGift: h,
        claimableRewards: A
    } = (0, u.Pv)(), I = h && null != A && A.length > 0, g = (0, r.V)(t);
    return (0, l.jsx)(T, {
        selectSku: e => (function(e) {
            let {
                activeSubscription: n,
                newSkuId: t,
                setSelectedSkuId: l,
                handleStepChange: i,
                isGift: r,
                userTrialOffer: s,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: u,
                defaultPlanId: d
            } = e;
            l(t);
            let _ = c.pn.PLAN_SELECT,
                S = (0, o.aZ)(n);
            S !== E.pe.TIER_1 && S !== E.pe.TIER_2 || t !== E.pe.TIER_0 || r || (_ = c.pn.WHAT_YOU_LOSE);
            let x = (0, m.t)({
                    userTrialOffer: s,
                    isGift: r,
                    skuId: t
                }),
                T = (0, p.vT)({
                    isTrial: x,
                    isGift: r,
                    selectedSkuId: t,
                    startedPaymentFlowWithPaymentSources: u
                });
            _ !== c.pn.WHAT_YOU_LOSE && T && (_ = c.pn.REVIEW, a((0, p.xT)(t, n, d))), i(_, {
                analyticsDataOverride: {
                    sku_id: t
                }
            })
        })({
            activeSubscription: s,
            newSkuId: e,
            setSelectedSkuId: i,
            handleStepChange: n,
            isGift: h,
            userTrialOffer: g,
            startedPaymentFlowWithPaymentSources: a.current,
            setSelectedPlanId: _,
            defaultPlanId: x
        }),
        onSelectPremiumGroup: () => (function(e) {
            let {
                setSelectedPlanId: n,
                handleStepChange: t,
                hasPaymentSources: l,
                setSelectedSkuId: i
            } = e;
            i((0, o.mH)(E.pe.TIER_2)), n(E.gD.PREMIUM_GROUP_MONTH), t(l ? c.pn.REVIEW : c.pn.ADD_PAYMENT_STEPS, {
                analyticsDataOverride: {
                    sku_id: E.pe.TIER_2
                }
            })
        })({
            setSelectedPlanId: _,
            handleStepChange: n,
            hasPaymentSources: P,
            setSelectedSkuId: i
        }),
        isGift: h,
        priceOptions: S,
        showPromotionalGiftBanner: I
    })
}

function T(e) {
    let {
        selectSku: n,
        isGift: t,
        priceOptions: r,
        showPromotionalGiftBanner: u,
        onSelectPremiumGroup: d
    } = e, c = (0, s.FY)({
        isGift: t
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.rQ0, {
            titleTextVariant: "heading-lg/semibold",
            title: _.intl.string(_.t["r+SebU"])
        }), c ? (0, l.jsx)(i.cwr, {
            children: (0, l.jsx)("div", {
                className: S.eE,
                children: (0, l.jsx)(a.yS, {
                    onSelectSku: e => n((0, o.mH)(e)),
                    onSelectPremiumGroup: d,
                    priceOptions: r,
                    showPromotionalGiftBanner: u
                })
            })
        }) : (0, l.jsx)(i.cwr, {
            children: (0, l.jsx)("div", {
                className: S.a2,
                children: (0, l.jsx)(a.Ay, {
                    onSelectSku: e => n((0, o.mH)(e)),
                    isGift: t,
                    priceOptions: r,
                    showPromotionalGiftBanner: u
                })
            })
        })]
    })
}