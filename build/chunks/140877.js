/** chunk id: 140877 params = (module,exports,require) **/
r.d(t, {
    A: () => b
});
var n = r(627968),
    l = r(64700),
    i = r(417597),
    s = r(397927),
    a = r(287809),
    u = r(927578),
    o = r(298072),
    c = r(993408),
    d = r(740076),
    f = r(466459),
    m = r(623373),
    h = r(219103),
    x = r(561769),
    p = r(525723),
    g = r(57020),
    A = r(985018),
    C = r(413908);
let I = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, o = (0, i.bG)([a.default], () => a.default.getCurrentUser()), m = u.Ay.canUseCollectibles(o), {
            isDisabled: x
        } = (0, d.I)(t.skuId), {
            isPurchased: I,
            isPartiallyOwnedBundle: b
        } = (0, f.h)(t), v = (0, c.G0)(t), k = (0, c.tt)(t), E = l.useMemo(() => (0, c.fT)(t, m), [t, m]), j = (0, p.V_)(t), {
            checkoutEligiblePrices: y,
            hasSufficientOrbs: R,
            shouldCheckoutWithOrbs: T
        } = (0, g.F)({
            product: t,
            isPremiumUser: m,
            prioritizedCurrency: r,
            hasDiscountOffer: null != j
        }), _ = v && !m;
        return x ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.wu4gyV)
        }) : b ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.BEjTij)
        }) : I && !_ ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t["6cfuDj"])
        }) : k ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.nBtvYB)
        }) : v ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.rt69oo)
        }) : 0 === y.length ? null : (0, n.jsx)(h.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: E,
            nitroIconType: m ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: j,
            className: T && !R ? C.c : void 0,
            variant: "text-md/bold"
        })
    },
    b = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, x.Vm)(t), i = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, m.rb)(l, i);
        return (0, n.jsx)(I, {
            product: s,
            prioritizedCurrency: r
        })
    }