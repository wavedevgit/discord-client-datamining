/** Chunk was on 2824 **/
/** chunk id: 957489, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => h
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    s = n(397927),
    a = n(234419),
    o = n(612669),
    u = n(672525),
    c = n(927578),
    d = n(937008),
    p = n(156312),
    m = n(166532),
    g = n(800471),
    f = n(169801),
    y = n(788868),
    j = n(985018),
    b = n(113437);

function h(e) {
    let {
        handleStepChange: t,
        handleClose: n,
        referralTrialOfferId: l
    } = e, {
        setSelectedSkuId: i,
        activeSubscription: s,
        startedPaymentFlowWithPaymentSourcesRef: o,
        setSelectedPlanId: u,
        priceOptions: j,
        defaultPlanId: b,
        hasPaymentSources: h
    } = (0, p.P5)(), {
        isGift: O,
        claimableRewards: P
    } = (0, d.Pv)(), E = O && null != P && P.length > 0, x = (0, a.V)(l);
    return (0, r.jsx)(v, {
        selectSku: e => (function(e) {
            let {
                activeSubscription: t,
                newSkuId: n,
                setSelectedSkuId: r,
                handleStepChange: l,
                isGift: i,
                userTrialOffer: s,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: o,
                defaultPlanId: u
            } = e;
            r(n);
            let d = m.pn.PLAN_SELECT,
                p = (0, c.aZ)(t);
            p !== y.pe.TIER_1 && p !== y.pe.TIER_2 || n !== y.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
            let j = (0, f.t)({
                    userTrialOffer: s,
                    isGift: i,
                    skuId: n
                }),
                b = (0, g.vT)({
                    isTrial: j,
                    isGift: i,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: o
                });
            d !== m.pn.WHAT_YOU_LOSE && b && (d = m.pn.REVIEW, a((0, g.xT)(n, t, u))), l(d, {
                analyticsDataOverride: {
                    sku_id: n
                }
            })
        })({
            activeSubscription: s,
            newSkuId: e,
            setSelectedSkuId: i,
            handleStepChange: t,
            isGift: O,
            userTrialOffer: x,
            startedPaymentFlowWithPaymentSources: o.current,
            setSelectedPlanId: u,
            defaultPlanId: b
        }),
        onSelectPremiumGroup: () => (function(e) {
            let {
                setSelectedPlanId: t,
                handleStepChange: n,
                hasPaymentSources: r,
                setSelectedSkuId: l
            } = e;
            l((0, c.mH)(y.pe.TIER_2)), t(y.gD.PREMIUM_GROUP_MONTH), n(r ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, {
                analyticsDataOverride: {
                    sku_id: y.pe.TIER_2
                }
            })
        })({
            setSelectedPlanId: u,
            handleStepChange: t,
            hasPaymentSources: h,
            setSelectedSkuId: i
        }),
        onClose: n,
        isGift: O,
        priceOptions: j,
        showPromotionalGiftBanner: E
    })
}

function v(e) {
    let {
        selectSku: t,
        onClose: n,
        isGift: l,
        priceOptions: a,
        showPromotionalGiftBanner: d,
        onSelectPremiumGroup: p
    } = e, m = (0, o.PA)() && !l;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.rQ0, {
            "data-migration-pending": !0,
            className: i()(b.wC, b.LG),
            separator: !1,
            children: (0, r.jsxs)(s.BJc, {
                direction: "horizontal",
                justify: "space-between",
                children: [(0, r.jsx)(s.Heading, {
                    variant: "heading-lg/bold",
                    children: j.intl.string(j.t["r+SebU"])
                }), (0, r.jsx)(s.s_y, {
                    "data-migration-pending": !0,
                    className: b.VN,
                    innerClassName: b.to,
                    onClick: n
                })]
            })
        }), m ? (0, r.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: b.eE,
            children: (0, r.jsx)(u.yS, {
                onSelectSku: e => t((0, c.mH)(e)),
                onSelectPremiumGroup: p,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        }) : (0, r.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            className: i()(b.a2, b.dt),
            children: (0, r.jsx)(u.Ay, {
                onSelectSku: e => t((0, c.mH)(e)),
                isGift: l,
                priceOptions: a,
                showPromotionalGiftBanner: d
            })
        })]
    })
}