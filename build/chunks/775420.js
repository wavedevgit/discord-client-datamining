/** Chunk was on web.js **/
/** chunk id: 775420, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z9: () => _,
    e6: () => p,
    rp: () => h
});
var r = n(627968),
    i = n(64700),
    a = n(835245),
    o = n(311907),
    s = n(674658),
    l = n(623373),
    c = n(287809),
    u = n(927578),
    d = n(715054);
let f = (0, i.createContext)({
        skuId: "123",
        loadId: (0, a.A)(),
        analyticsLocations: [],
        analyticsSourceLocation: void 0,
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        rentalDuration: void 0
    }),
    p = e => {
        let {
            skuId: t,
            loadId: n,
            analyticsLocations: r,
            onCheckoutSuccess: a,
            rentalDuration: f
        } = e, p = (0, o.bG)([c.default], () => u.Ay.canUseCollectibles(c.default.getCurrentUser())), {
            product: _
        } = (0, s.q)(t), h = (0, i.useMemo)(() => {
            if (null == _) return null;
            let e = (0, l.CW)({
                    product: _,
                    isPremiumUser: p,
                    isRental: null != f
                }),
                t = null !== e ? e.amount : null;
            return {
                orbPrice: e,
                orbPriceAmount: t,
                product: _
            }
        }, [_, p, f]), {
            redeemVirtualCurrency: m,
            isSubmitting: g,
            error: E
        } = (0, d.Q)({
            skuId: t,
            loadId: n
        }), y = (0, i.useCallback)(e => {
            m(t, n, n => {
                a({
                    entitlements: n,
                    skuId: t
                }), e()
            }, null != f)
        }, [t, n, m, a, f]);
        return {
            skuId: t,
            loadId: n,
            analyticsLocations: null != r ? r : [],
            product: _,
            orbProductContext: h,
            onRedeemVirtualCurrency: y,
            isRedeeming: g,
            orbRedemptionError: E,
            rentalDuration: f
        }
    },
    _ = e => {
        let {
            skuId: t,
            loadId: n,
            analyticsSourceLocation: i,
            analyticsLocations: a,
            onCheckoutSuccess: o,
            rentalDuration: s,
            children: l
        } = e, {
            orbProductContext: c,
            onRedeemVirtualCurrency: u,
            isRedeeming: d,
            orbRedemptionError: _
        } = p({
            skuId: t,
            loadId: n,
            analyticsLocations: a,
            onCheckoutSuccess: o,
            rentalDuration: s
        });
        return (0, r.jsx)(f.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != a ? a : [],
                analyticsSourceLocation: i,
                orbProductContext: c,
                onRedeemVirtualCurrency: u,
                isRedeeming: d,
                orbRedemptionError: _,
                rentalDuration: s
            },
            children: l
        })
    },
    h = () => (0, i.useContext)(f)