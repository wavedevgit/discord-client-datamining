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
    C = r(623373),
    k = r(219103),
    m = r(561769),
    x = r(525723),
    g = r(57020),
    h = r(985018),
    I = r(413908);
let A = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, u = (0, i.bG)([a.default], () => a.default.getCurrentUser()), C = o.Ay.canUseCollectibles(u), {
            isDisabled: m
        } = (0, d.I)(t.skuId), {
            isPurchased: A,
            isPartiallyOwnedBundle: v
        } = (0, p.h)(t), f = (0, c.G0)(t), _ = (0, c.tt)(t), T = l.useMemo(() => (0, c.fT)(t, C), [t, C]), E = (0, x.V_)(t), {
            checkoutEligiblePrices: y,
            hasSufficientOrbs: j,
            shouldCheckoutWithOrbs: b
        } = (0, g.F)({
            product: t,
            isPremiumUser: C,
            prioritizedCurrency: r,
            hasDiscountOffer: null != E
        }), R = f && !C;
        return m ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t.wu4gyV)
        }) : v ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t.BEjTij)
        }) : A && !R ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t["6cfuDj"])
        }) : _ ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: h.intl.string(h.t.nBtvYB)
        }) : f ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: h.intl.string(h.t.rt69oo)
        }) : 0 === y.length ? null : (0, n.jsx)(k.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: T,
            nitroIconType: C ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: E,
            className: b && !j ? I.c : void 0,
            variant: "text-md/bold"
        })
    },
    v = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, m.Vm)(t), i = (0, u.Q)(l);
        if (null == l) return null;
        let s = (0, C.rb)(l, i);
        return (0, n.jsx)(A, {
            product: s,
            prioritizedCurrency: r
        })
    }