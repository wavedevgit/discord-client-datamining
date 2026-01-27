/** Chunk was on 2824 **/
/** chunk id: 957489, original params: e,n,t (module,exports,require) **/
t.d(n, {
    F: () => h
});
var l = t(627968),
    r = t(503698),
    i = t.n(r),
    s = t(397927),
    a = t(234419),
    o = t(612669),
    u = t(672525),
    c = t(927578),
    d = t(937008),
    p = t(156312),
    m = t(166532),
    g = t(800471),
    f = t(169801),
    j = t(788868),
    E = t(985018),
    x = t(113437);

function h(e) {
    let {
        handleStepChange: n,
        handleClose: t,
        referralTrialOfferId: r
    } = e, {
        setSelectedSkuId: i,
        activeSubscription: s,
        startedPaymentFlowWithPaymentSourcesRef: o,
        setSelectedPlanId: u,
        priceOptions: E,
        defaultPlanId: x,
        hasPaymentSources: h
    } = (0, p.P5)(), {
        isGift: P,
        claimableRewards: S
    } = (0, d.Pv)(), b = P && null != S && S.length > 0, A = (0, a.V)(r);
    return (0, l.jsx)(T, {
        selectSku: e => (function(e) {
            let {
                activeSubscription: n,
                newSkuId: t,
                setSelectedSkuId: l,
                handleStepChange: r,
                isGift: i,
                userTrialOffer: s,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: o,
                defaultPlanId: u
            } = e;
            l(t);
            let d = m.pn.PLAN_SELECT,
                p = (0, c.aZ)(n);
            p !== j.pe.TIER_1 && p !== j.pe.TIER_2 || t !== j.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
            let E = (0, f.t)({
                    userTrialOffer: s,
                    isGift: i,
                    skuId: t
                }),
                x = (0, g.vT)({
                    isTrial: E,
                    isGift: i,
                    selectedSkuId: t,
                    startedPaymentFlowWithPaymentSources: o
                });
            d !== m.pn.WHAT_YOU_LOSE && x && (d = m.pn.REVIEW, a((0, g.xT)(t, n, u))), r(d, {
                analyticsDataOverride: {
                    sku_id: t
                }
            })
        })({
            activeSubscription: s,
            newSkuId: e,
            setSelectedSkuId: i,
            handleStepChange: n,
            isGift: P,
            userTrialOffer: A,
            startedPaymentFlowWithPaymentSources: o.current,
            setSelectedPlanId: u,
            defaultPlanId: x
        }),
        onSelectPremiumGroup: () => (function(e) {
            let {
                setSelectedPlanId: n,
                handleStepChange: t,
                hasPaymentSources: l,
                setSelectedSkuId: r
            } = e;
            r((0, c.mH)(j.pe.TIER_2)), n(j.gD.PREMIUM_GROUP_MONTH), t(l ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, {
                analyticsDataOverride: {
                    sku_id: j.pe.TIER_2
                }
            })
        })({
            setSelectedPlanId: u,
            handleStepChange: n,
            hasPaymentSources: h,
            setSelectedSkuId: i
        }),
        onClose: t,
        isGift: P,
        priceOptions: E,
        showPromotionalGiftBanner: b
    })
}

function T(e) {
    let {
        selectSku: n,
        onClose: t,
        isGift: r,
        priceOptions: a,
        showPromotionalGiftBanner: d,
        onSelectPremiumGroup: p
    } = e, m = (0, o.PA)() && !r;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.rQ0, {
            "data-migration-pending": !0,
            className: i()(x.wC, x.LG),
            separator: !1,
            children: (0, l.jsxs)(s.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, l.jsx)(s.Heading, {
                    variant: "heading-lg/bold",
                    children: E.intl.string(E.t["r+SebU"])
                }), (0, l.jsx)(s.s_y, {
                    "data-migration-pending": !0,
                    className: x.VN,
                    innerClassName: x.to,
                    onClick: t
                })]
            })
        }), m ? (0, l.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: x.eE,
            children: (0, l.jsx)(u.yS, {
                onSelectSku: e => n((0, c.mH)(e)),
                onSelectPremiumGroup: p,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        }) : (0, l.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: i()(x.a2, x.dt),
            children: (0, l.jsx)(u.Ay, {
                onSelectSku: e => n((0, c.mH)(e)),
                isGift: r,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        })]
    })
}