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
    E = t(800471),
    g = t(169801),
    f = t(788868),
    P = t(985018),
    j = t(113437);

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
        priceOptions: P,
        defaultPlanId: j,
        hasPaymentSources: h
    } = (0, p.P5)(), {
        isGift: x,
        claimableRewards: T
    } = (0, d.Pv)(), A = x && null != T && T.length > 0, O = (0, a.V)(r);
    return (0, l.jsx)(_, {
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
            p !== f.pe.TIER_1 && p !== f.pe.TIER_2 || t !== f.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
            let P = (0, g.t)({
                    userTrialOffer: s,
                    isGift: i,
                    skuId: t
                }),
                j = (0, E.vT)({
                    isTrial: P,
                    isGift: i,
                    selectedSkuId: t,
                    startedPaymentFlowWithPaymentSources: o
                });
            d !== m.pn.WHAT_YOU_LOSE && j && (d = m.pn.REVIEW, a((0, E.xT)(t, n, u))), r(d, {
                analyticsDataOverride: {
                    sku_id: t
                }
            })
        })({
            activeSubscription: s,
            newSkuId: e,
            setSelectedSkuId: i,
            handleStepChange: n,
            isGift: x,
            userTrialOffer: O,
            startedPaymentFlowWithPaymentSources: o.current,
            setSelectedPlanId: u,
            defaultPlanId: j
        }),
        onSelectPremiumGroup: () => (function(e) {
            let {
                setSelectedPlanId: n,
                handleStepChange: t,
                hasPaymentSources: l,
                setSelectedSkuId: r
            } = e;
            r((0, c.mH)(f.pe.TIER_2)), n(f.gD.PREMIUM_GROUP_MONTH), t(l ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, {
                analyticsDataOverride: {
                    sku_id: f.pe.TIER_2
                }
            })
        })({
            setSelectedPlanId: u,
            handleStepChange: n,
            hasPaymentSources: h,
            setSelectedSkuId: i
        }),
        onClose: t,
        isGift: x,
        priceOptions: P,
        showPromotionalGiftBanner: A
    })
}

function _(e) {
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
            className: i()(j.wC, j.LG),
            separator: !1,
            children: (0, l.jsxs)(s.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, l.jsx)(s.Heading, {
                    variant: "heading-lg/bold",
                    children: P.intl.string(P.t["r+SebU"])
                }), (0, l.jsx)(s.s_y, {
                    "data-migration-pending": !0,
                    className: j.VN,
                    innerClassName: j.to,
                    onClick: t
                })]
            })
        }), m ? (0, l.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: j.eE,
            children: (0, l.jsx)(u.yS, {
                onSelectSku: e => n((0, c.mH)(e)),
                onSelectPremiumGroup: p,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        }) : (0, l.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: i()(j.a2, j.dt),
            children: (0, l.jsx)(u.Ay, {
                onSelectSku: e => n((0, c.mH)(e)),
                isGift: r,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        })]
    })
}