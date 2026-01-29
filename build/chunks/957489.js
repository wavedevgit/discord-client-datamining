/** Chunk was on 2824 **/
/** chunk id: 957489, original params: e,n,t (module,exports,require) **/
t.d(n, {
    F: () => x
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
    E = t(169801),
    f = t(788868),
    j = t(985018),
    h = t(113437);

function x(e) {
    let {
        handleStepChange: n,
        handleClose: t,
        referralTrialOfferId: r
    } = e, {
        setSelectedSkuId: i,
        activeSubscription: s,
        startedPaymentFlowWithPaymentSourcesRef: o,
        setSelectedPlanId: u,
        priceOptions: j,
        defaultPlanId: h,
        hasPaymentSources: x
    } = (0, p.P5)(), {
        isGift: T,
        claimableRewards: S
    } = (0, d.Pv)(), A = T && null != S && S.length > 0, O = (0, a.V)(r);
    return (0, l.jsx)(P, {
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
            let j = (0, E.t)({
                    userTrialOffer: s,
                    isGift: i,
                    skuId: t
                }),
                h = (0, g.vT)({
                    isTrial: j,
                    isGift: i,
                    selectedSkuId: t,
                    startedPaymentFlowWithPaymentSources: o
                });
            d !== m.pn.WHAT_YOU_LOSE && h && (d = m.pn.REVIEW, a((0, g.xT)(t, n, u))), r(d, {
                analyticsDataOverride: {
                    sku_id: t
                }
            })
        })({
            activeSubscription: s,
            newSkuId: e,
            setSelectedSkuId: i,
            handleStepChange: n,
            isGift: T,
            userTrialOffer: O,
            startedPaymentFlowWithPaymentSources: o.current,
            setSelectedPlanId: u,
            defaultPlanId: h
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
            hasPaymentSources: x,
            setSelectedSkuId: i
        }),
        onClose: t,
        isGift: T,
        priceOptions: j,
        showPromotionalGiftBanner: A
    })
}

function P(e) {
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
            className: i()(h.wC, h.LG),
            separator: !1,
            children: (0, l.jsxs)(s.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, l.jsx)(s.Heading, {
                    variant: "heading-lg/bold",
                    children: j.intl.string(j.t["r+SebU"])
                }), (0, l.jsx)(s.s_y, {
                    "data-migration-pending": !0,
                    className: h.VN,
                    innerClassName: h.to,
                    onClick: t
                })]
            })
        }), m ? (0, l.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: h.eE,
            children: (0, l.jsx)(u.yS, {
                onSelectSku: e => n((0, c.mH)(e)),
                onSelectPremiumGroup: p,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        }) : (0, l.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: i()(h.a2, h.dt),
            children: (0, l.jsx)(u.Ay, {
                onSelectSku: e => n((0, c.mH)(e)),
                isGift: r,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        })]
    })
}