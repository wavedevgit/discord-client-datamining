/** chunk id: 140877 params = (module,exports,require) **/
r.d(t, {
    A: () => v
});
var n = r(627968),
    l = r(64700),
    i = r(417597),
    s = r(397927),
    a = r(287809),
    o = r(927578),
    u = r(298072),
    c = r(993408),
    d = r(740076),
    p = r(466459),
    k = r(623373),
    C = r(219103),
    m = r(561769),
    x = r(525723),
    g = r(57020),
    A = r(985018),
    h = r(413908);
let I = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, u = (0, i.bG)([a.default], () => a.default.getCurrentUser()), k = o.Ay.canUseCollectibles(u), {
            isDisabled: m
        } = (0, d.I)(t.skuId), {
            isPurchased: I,
            isPartiallyOwnedBundle: v
        } = (0, p.h)(t), _ = (0, c.G0)(t), T = (0, c.tt)(t), f = l.useMemo(() => (0, c.fT)(t, k), [t, k]), E = (0, x.V_)(t), {
            checkoutEligiblePrices: y,
            hasSufficientOrbs: j,
            shouldCheckoutWithOrbs: b
        } = (0, g.F)({
            product: t,
            isPremiumUser: k,
            prioritizedCurrency: r,
            hasDiscountOffer: null != E
        }), R = _ && !k;
        return m ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.wu4gyV)
        }) : v ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.BEjTij)
        }) : I && !R ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t["6cfuDj"])
        }) : T ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.nBtvYB)
        }) : _ ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.rt69oo)
        }) : 0 === y.length ? null : (0, n.jsx)(C.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: f,
            nitroIconType: k ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: E,
            className: b && !j ? h.c : void 0,
            variant: "text-md/bold"
        })
    },
    v = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, m.Vm)(t), i = (0, u.Q)(l);
        if (null == l) return null;
        let s = (0, k.rb)(l, i);
        return (0, n.jsx)(I, {
            product: s,
            prioritizedCurrency: r
        })
    }