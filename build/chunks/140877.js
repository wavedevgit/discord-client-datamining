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
    h = r(466459),
    m = r(623373),
    x = r(219103),
    f = r(561769),
    p = r(525723),
    g = r(57020),
    v = r(985018),
    C = r(413908);
let A = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, o = (0, i.bG)([a.default], () => a.default.getCurrentUser()), m = u.Ay.canUseCollectibles(o), {
            isDisabled: f
        } = (0, d.I)(t.skuId), {
            isPurchased: A,
            isPartiallyOwnedBundle: b
        } = (0, h.h)(t), k = (0, c.G0)(t), I = (0, c.tt)(t), y = l.useMemo(() => (0, c.fT)(t, m), [t, m]), E = (0, p.V_)(t), {
            checkoutEligiblePrices: j,
            hasSufficientOrbs: R,
            shouldCheckoutWithOrbs: _
        } = (0, g.F)({
            product: t,
            isPremiumUser: m,
            prioritizedCurrency: r,
            hasDiscountOffer: null != E
        }), L = k && !m;
        return f ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: v.intl.string(v.t.wu4gyV)
        }) : b ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: v.intl.string(v.t.BEjTij)
        }) : A && !L ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: v.intl.string(v.t["6cfuDj"])
        }) : I ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: v.intl.string(v.t.nBtvYB)
        }) : k ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: v.intl.string(v.t.rt69oo)
        }) : 0 === j.length ? null : (0, n.jsx)(x.x, {
            priceAmount: j[0].amount,
            priceCurrency: j[0].currency,
            discount: y,
            nitroIconType: m ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: E,
            className: _ && !R ? C.c : void 0,
            variant: "text-md/bold"
        })
    },
    b = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, f.Vm)(t), i = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, m.rb)(l, i);
        return (0, n.jsx)(A, {
            product: s,
            prioritizedCurrency: r
        })
    }