/** chunk id: 957489 params = (module,exports,require) **/
t.d(n, {
    F: () => x
});
var i = t(627968),
    l = t(158954),
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
        setSelectedSkuId: l,
        activeSubscription: s,
        startedPaymentFlowWithPaymentSourcesRef: a,
        setSelectedPlanId: _,
        priceOptions: S,
        defaultPlanId: x,
        hasPaymentSources: T
    } = (0, d.P5)(), {
        isGift: I,
        claimableRewards: h
    } = (0, u.Pv)(), g = I && null != h && h.length > 0, A = (0, r.V)(t);
    return (0, i.jsx)(P, {
        selectSku: e => (function(e) {
            let {
                activeSubscription: n,
                newSkuId: t,
                setSelectedSkuId: i,
                handleStepChange: l,
                isGift: r,
                userTrialOffer: s,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: u,
                defaultPlanId: d
            } = e;
            i(t);
            let _ = c.pn.PLAN_SELECT,
                S = (0, o.aZ)(n);
            S !== E.pe.TIER_1 && S !== E.pe.TIER_2 || t !== E.pe.TIER_0 || r || (_ = c.pn.WHAT_YOU_LOSE);
            let x = (0, m.t)({
                    userTrialOffer: s,
                    isGift: r,
                    skuId: t
                }),
                P = (0, p.vT)({
                    isTrial: x,
                    isGift: r,
                    selectedSkuId: t,
                    startedPaymentFlowWithPaymentSources: u
                });
            _ !== c.pn.WHAT_YOU_LOSE && P && (_ = c.pn.REVIEW, a((0, p.xT)(t, n, d))), l(_, {
                analyticsDataOverride: {
                    sku_id: t
                }
            })
        })({
            activeSubscription: s,
            newSkuId: e,
            setSelectedSkuId: l,
            handleStepChange: n,
            isGift: I,
            userTrialOffer: A,
            startedPaymentFlowWithPaymentSources: a.current,
            setSelectedPlanId: _,
            defaultPlanId: x
        }),
        onSelectPremiumGroup: () => (function(e) {
            let {
                setSelectedPlanId: n,
                handleStepChange: t,
                hasPaymentSources: i,
                setSelectedSkuId: l
            } = e;
            l((0, o.mH)(E.pe.TIER_2)), n(E.gD.PREMIUM_GROUP_MONTH), t(i ? c.pn.REVIEW : c.pn.ADD_PAYMENT_STEPS, {
                analyticsDataOverride: {
                    sku_id: E.pe.TIER_2
                }
            })
        })({
            setSelectedPlanId: _,
            handleStepChange: n,
            hasPaymentSources: T,
            setSelectedSkuId: l
        }),
        isGift: I,
        priceOptions: S,
        showPromotionalGiftBanner: g
    })
}

function P(e) {
    let {
        selectSku: n,
        isGift: t,
        priceOptions: r,
        showPromotionalGiftBanner: u,
        onSelectPremiumGroup: d
    } = e, c = (0, s.FY)({
        isGift: t
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.rQ0, {
            titleTextVariant: "heading-lg/semibold",
            title: _.intl.string(_.t["r+SebU"])
        }), c ? (0, i.jsx)(l.cwr, {
            children: (0, i.jsx)("div", {
                className: S.eE,
                children: (0, i.jsx)(a.yS, {
                    onSelectSku: e => n((0, o.mH)(e)),
                    onSelectPremiumGroup: d,
                    priceOptions: r,
                    showPromotionalGiftBanner: u
                })
            })
        }) : (0, i.jsx)(l.cwr, {
            children: (0, i.jsx)("div", {
                className: S.a2,
                children: (0, i.jsx)(a.Ay, {
                    onSelectSku: e => n((0, o.mH)(e)),
                    isGift: t,
                    priceOptions: r,
                    showPromotionalGiftBanner: u
                })
            })
        })]
    })
}