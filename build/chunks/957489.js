/** chunk id: 957489, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => x
});
var l = n(627968),
    i = n(158954),
    s = n(234419),
    r = n(612669),
    a = n(672525),
    o = n(927578),
    u = n(937008),
    d = n(156312),
    c = n(166532),
    p = n(800471),
    m = n(169801),
    E = n(788868),
    _ = n(985018),
    h = n(113437);

function x(e) {
    let {
        handleStepChange: t,
        referralTrialOfferId: n
    } = e, {
        setSelectedSkuId: i,
        activeSubscription: r,
        startedPaymentFlowWithPaymentSourcesRef: a,
        setSelectedPlanId: _,
        priceOptions: h,
        defaultPlanId: x,
        hasPaymentSources: P
    } = (0, d.P5)(), {
        isGift: I,
        claimableRewards: T
    } = (0, u.Pv)(), g = I && null != T && T.length > 0, A = (0, s.V)(n);
    return (0, l.jsx)(S, {
        selectSku: e => (function(e) {
            let {
                activeSubscription: t,
                newSkuId: n,
                setSelectedSkuId: l,
                handleStepChange: i,
                isGift: s,
                userTrialOffer: r,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: u,
                defaultPlanId: d
            } = e;
            l(n);
            let _ = c.pn.PLAN_SELECT,
                h = (0, o.aZ)(t);
            h !== E.pe.TIER_1 && h !== E.pe.TIER_2 || n !== E.pe.TIER_0 || s || (_ = c.pn.WHAT_YOU_LOSE);
            let x = (0, m.t)({
                    userTrialOffer: r,
                    isGift: s,
                    skuId: n
                }),
                S = (0, p.vT)({
                    isTrial: x,
                    isGift: s,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: u
                });
            _ !== c.pn.WHAT_YOU_LOSE && S && (_ = c.pn.REVIEW, a((0, p.xT)(n, t, d))), i(_, {
                analyticsDataOverride: {
                    sku_id: n
                }
            })
        })({
            activeSubscription: r,
            newSkuId: e,
            setSelectedSkuId: i,
            handleStepChange: t,
            isGift: I,
            userTrialOffer: A,
            startedPaymentFlowWithPaymentSources: a.current,
            setSelectedPlanId: _,
            defaultPlanId: x
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
            hasPaymentSources: P,
            setSelectedSkuId: i
        }),
        isGift: I,
        priceOptions: h,
        showPromotionalGiftBanner: g
    })
}

function S(e) {
    let {
        selectSku: t,
        isGift: n,
        priceOptions: s,
        showPromotionalGiftBanner: u,
        onSelectPremiumGroup: d
    } = e, c = (0, r.FY)({
        isGift: n
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.rQ0, {
            titleTextVariant: "heading-lg/semibold",
            title: _.intl.string(_.t["r+SebU"])
        }), c ? (0, l.jsx)(i.cwr, {
            children: (0, l.jsx)("div", {
                className: h.eE,
                children: (0, l.jsx)(a.yS, {
                    onSelectSku: e => t((0, o.mH)(e)),
                    onSelectPremiumGroup: d,
                    priceOptions: s,
                    showPromotionalGiftBanner: u
                })
            })
        }) : (0, l.jsx)(i.cwr, {
            children: (0, l.jsx)("div", {
                className: h.a2,
                children: (0, l.jsx)(a.Ay, {
                    onSelectSku: e => t((0, o.mH)(e)),
                    isGift: n,
                    priceOptions: s,
                    showPromotionalGiftBanner: u
                })
            })
        })]
    })
}