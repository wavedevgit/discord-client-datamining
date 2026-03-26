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
    m = r(466459),
    f = r(623373),
    h = r(219103),
    x = r(561769),
    p = r(525723),
    g = r(57020),
    C = r(985018),
    A = r(413908);
let I = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, o = (0, i.bG)([a.default], () => a.default.getCurrentUser()), f = u.Ay.canUseCollectibles(o), {
            isDisabled: x
        } = (0, d.I)(t.skuId), {
            isPurchased: I,
            isPartiallyOwnedBundle: b
        } = (0, m.h)(t), v = (0, c.G0)(t), k = (0, c.tt)(t), E = l.useMemo(() => (0, c.fT)(t, f), [t, f]), j = (0, p.V_)(t), {
            checkoutEligiblePrices: y,
            hasSufficientOrbs: R,
            shouldCheckoutWithOrbs: T
        } = (0, g.F)({
            product: t,
            isPremiumUser: f,
            prioritizedCurrency: r,
            hasDiscountOffer: null != j
        }), _ = v && !f;
        return x ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.wu4gyV)
        }) : b ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.BEjTij)
        }) : I && !_ ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t["6cfuDj"])
        }) : k ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.nBtvYB)
        }) : v ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.rt69oo)
        }) : 0 === y.length ? null : (0, n.jsx)(h.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: E,
            nitroIconType: f ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: j,
            className: T && !R ? A.c : void 0,
            variant: "text-md/bold"
        })
    },
    b = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, x.Vm)(t), i = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, f.rb)(l, i);
        return (0, n.jsx)(I, {
            product: s,
            prioritizedCurrency: r
        })
    }