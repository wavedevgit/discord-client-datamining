/** chunk id: 412463 params = (module,exports,require) **/
l.d(t, {
    dL: () => S,
    eO: () => C,
    n1: () => _,
    ud: () => E
});
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(635358),
    o = l(417597),
    s = l(397927),
    u = l(73153),
    d = l(830382),
    c = l(73825),
    p = l(793574),
    m = l(688810),
    h = l(937008),
    x = l(156312),
    b = l(491057),
    y = l(546042),
    f = l(97352),
    g = l(67480),
    v = l(582658);
let E = e => {
        let {
            skuId: t,
            isGift: l,
            applicationId: a
        } = e, {
            analyticsLocations: s
        } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE), u = n.useRef(null), c = n.useRef(null), [h, x] = n.useState(() => (0, r.A)());
        n.useEffect(() => {
            (u.current !== t || c.current !== l) && (x((0, r.A)()), u.current = t, c.current = l)
        }, [t, l]);
        let [b, y] = (0, o.yK)([g.A], () => [g.A.isFetching(t), g.A.get(t)]);
        return n.useEffect(() => {
            null != y || b || (0, d.EX)(a, t, i.g.VARIANTS_GROUP).catch(e => {})
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
    _ = e => {
        let {
            subscriptionPlanId: t
        } = e;
        n.useEffect(() => {
            f.A.isLoadedForPremiumSKUs() || u.h.wait(() => (0, c.zS)())
        }, []);
        let l = (0, o.bG)([f.A], () => null != t ? f.A.get(t) : null);
        return {
            isLoadedForPremiumSKUs: (0, o.bG)([f.A], () => f.A.isLoadedForPremiumSKUs()),
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
    S = e => {
        let {
            analyticsLocations: t,
            applicationId: l,
            skuId: n,
            isGift: r,
            onClose: i,
            onComplete: o,
            initialPlanId: u,
            purchaseType: d,
            stepConfigs: c,
            loadId: p,
            excludeSubscriptionPlansBySKU: m,
            renderHeader: f,
            hideErrors: g,
            disablePurchases: E,
            paymentContextOverrides: _
        } = e, C = g ? {
            purchasePreviewError: null,
            purchaseError: null,
            ..._
        } : {
            ..._
        };
        E && (C.disablePurchasesForStorybook = !0);
        let S = `${n}-${r}-${p}`;
        return (0, a.jsx)(x.PaymentContextProvider, {
            stepConfigs: c,
            applicationId: l,
            skuIDs: null != n ? [n] : [],
            isGift: r,
            activeSubscription: null,
            purchaseType: d,
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
                            initialPlanId: u,
                            analyticsLocations: t,
                            renderHeader: f
                        }, S)
                    })
                })
            })
        }, S)
    }