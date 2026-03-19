/** chunk id: 957489 params = (module,exports,require) **/
n.d(t, {
    F: () => S
});
var l = n(627968),
    i = n(158954),
    r = n(234419),
    s = n(612669),
    a = n(672525),
    o = n(927578),
    u = n(937008),
    d = n(156312),
    c = n(166532),
    p = n(800471),
    m = n(169801),
    E = n(788868),
    _ = n(985018),
    x = n(772127);

function S(e) {
    let {
        handleStepChange: t,
        referralTrialOfferId: n
    } = e, {
        setSelectedSkuId: i,
        activeSubscription: s,
        startedPaymentFlowWithPaymentSourcesRef: a,
        setSelectedPlanId: _,
        priceOptions: x,
        defaultPlanId: S,
        hasPaymentSources: T
    } = (0, d.P5)(), {
        isGift: I,
        claimableRewards: h
    } = (0, u.Pv)(), g = I && null != h && h.length > 0, A = (0, r.V)(n);
    return (0, l.jsx)(P, {
        selectSku: e => (function(e) {
            let {
                activeSubscription: t,
                newSkuId: n,
                setSelectedSkuId: l,
                handleStepChange: i,
                isGift: r,
                userTrialOffer: s,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: u,
                defaultPlanId: d
            } = e;
            l(n);
            let _ = c.pn.PLAN_SELECT,
                x = (0, o.aZ)(t);
            x !== E.pe.TIER_1 && x !== E.pe.TIER_2 || n !== E.pe.TIER_0 || r || (_ = c.pn.WHAT_YOU_LOSE);
            let S = (0, m.t)({
                    userTrialOffer: s,
                    isGift: r,
                    skuId: n
                }),
                P = (0, p.vT)({
                    isTrial: S,
                    isGift: r,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: u
                });
            _ !== c.pn.WHAT_YOU_LOSE && P && (_ = c.pn.REVIEW, a((0, p.xT)(n, t, d))), i(_, {
                analyticsDataOverride: {
                    sku_id: n
                }
            })
        })({
            activeSubscription: s,
            newSkuId: e,
            setSelectedSkuId: i,
            handleStepChange: t,
            isGift: I,
            userTrialOffer: A,
            startedPaymentFlowWithPaymentSources: a.current,
            setSelectedPlanId: _,
            defaultPlanId: S
        }),
        onSelectPremiumGroup: () => (function(e) {
            let {
                setSelectedPlanId: t,
                handleStepChange: n,
                hasPaymentSources: l,
                setSelectedSkuId: i
            } = e;
            i((0, o.mH)(E.pe.TIER_2)), t(E.gD.PREMIUM_GROUP_MONTH), n(l ? c.pn.REVIEW : c.pn.ADD_PAYMENT_STEPS, {
                analyticsDataOverride: {
                    sku_id: E.pe.TIER_2
                }
            })
        })({
            setSelectedPlanId: _,
            handleStepChange: t,
            hasPaymentSources: T,
            setSelectedSkuId: i
        }),
        isGift: I,
        priceOptions: x,
        showPromotionalGiftBanner: g
    })
}

function P(e) {
    let {
        selectSku: t,
        isGift: n,
        priceOptions: r,
        showPromotionalGiftBanner: u,
        onSelectPremiumGroup: d
    } = e, c = (0, s.FY)({
        isGift: n
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.rQ0, {
            titleTextVariant: "heading-lg/semibold",
            title: _.intl.string(_.t["r+SebU"])
        }), c ? (0, l.jsx)(i.cwr, {
            children: (0, l.jsx)("div", {
                className: x.eE,
                children: (0, l.jsx)(a.yS, {
                    onSelectSku: e => t((0, o.mH)(e)),
                    onSelectPremiumGroup: d,
                    priceOptions: r,
                    showPromotionalGiftBanner: u
                })
            })
        }) : (0, l.jsx)(i.cwr, {
            children: (0, l.jsx)("div", {
                className: x.a2,
                children: (0, l.jsx)(a.Ay, {
                    onSelectSku: e => t((0, o.mH)(e)),
                    isGift: n,
                    priceOptions: r,
                    showPromotionalGiftBanner: u
                })
            })
        })]
    })
}