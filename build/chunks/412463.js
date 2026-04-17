/** chunk id: 412463 params = (module,exports,require) **/
l.d(t, {
    dL: () => j,
    eO: () => C,
    n1: () => E,
    ud: () => _
});
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(635358),
    o = l(417597),
    s = l(397927),
    d = l(73153),
    c = l(830382),
    u = l(73825),
    p = l(793574),
    m = l(688810),
    h = l(937008),
    x = l(156312),
    b = l(491057),
    y = l(546042),
    g = l(97352),
    f = l(67480),
    v = l(582658);
let _ = e => {
        let {
            skuId: t,
            isGift: l,
            applicationId: a
        } = e, {
            analyticsLocations: s
        } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE), d = n.useRef(null), u = n.useRef(null), [h, x] = n.useState(() => (0, r.A)());
        n.useEffect(() => {
            (d.current !== t || u.current !== l) && (x((0, r.A)()), d.current = t, u.current = l)
        }, [t, l]);
        let [b, y] = (0, o.yK)([f.A], () => [f.A.isFetching(t), f.A.get(t)]);
        return n.useEffect(() => {
            null != y || b || (0, c.EX)(a, t, i.g.VARIANTS_GROUP).catch(e => {})
        }, [a, t, y, b]), {
            loadId: h,
            analyticsLocations: s,
            handleClose: n.useCallback(e => {}, []),
            handleComplete: n.useCallback(() => {}, []),
            isFetching: b,
            sku: y,
            skuId: t,
            isGift: l
        }
    },
    E = e => {
        let {
            subscriptionPlanId: t
        } = e;
        n.useEffect(() => {
            g.A.isLoadedForPremiumSKUs() || d.h.wait(() => (0, u.zS)())
        }, []);
        let l = (0, o.bG)([g.A], () => null != t ? g.A.get(t) : null);
        return {
            isLoadedForPremiumSKUs: (0, o.bG)([g.A], () => g.A.isLoadedForPremiumSKUs()),
            selectedPlan: l
        }
    },
    C = e => (0, a.jsxs)("div", {
        style: {
            padding: 20
        },
        children: [(0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            children: e.text
        }), (0, a.jsx)("div", {
            style: {
                marginTop: 16
            },
            children: (0, a.jsx)(s.MzZ, {
                onClick: () => e.handleStepChange(e.originStep),
                children: "← Go Back"
            })
        })]
    }),
    j = e => {
        let {
            analyticsLocations: t,
            applicationId: l,
            skuId: n,
            isGift: r,
            onClose: i,
            onComplete: o,
            initialPlanId: d,
            purchaseType: c,
            stepConfigs: u,
            loadId: p,
            excludeSubscriptionPlansBySKU: m,
            renderHeader: g,
            hideErrors: f,
            disablePurchases: _,
            paymentContextOverrides: E
        } = e, C = f ? {
            purchasePreviewError: null,
            purchaseError: null,
            ...E
        } : {
            ...E
        };
        _ && (C.disablePurchasesForStorybook = !0);
        let j = `${n}-${r}-${p}`;
        return (0, a.jsx)(x.PaymentContextProvider, {
            stepConfigs: u,
            applicationId: l,
            skuIDs: null != n ? [n] : [],
            isGift: r,
            activeSubscription: null,
            purchaseType: c,
            excludeSubscriptionPlansBySKU: m,
            children: (0, a.jsx)(v.Y, {
                ...C,
                children: (0, a.jsx)(b.Qt, {
                    children: (0, a.jsx)(h.dX, {
                        isGift: r,
                        children: (0, a.jsx)(y.PaymentModal, {
                            transitionState: s.ip4.ENTERED,
                            onClose: i,
                            onComplete: o,
                            applicationId: l,
                            skuId: n,
                            initialPlanId: d,
                            analyticsLocations: t,
                            renderHeader: g
                        }, j)
                    })
                })
            })
        }, j)
    }