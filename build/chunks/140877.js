/** chunk id: 140877 params = (module,exports,require) **/
r.d(t, {
    A: () => b
});
var n = r(627968),
    l = r(64700),
    i = r(417597),
    a = r(397927),
    s = r(287809),
    u = r(927578),
    o = r(298072),
    c = r(993408),
    d = r(740076),
    h = r(466459),
    m = r(623373),
    f = r(219103),
    x = r(561769),
    A = r(525723),
    p = r(57020),
    v = r(985018),
    g = r(306931);
let C = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, o = (0, i.bG)([s.default], () => s.default.getCurrentUser()), m = u.Ay.canUseCollectibles(o), {
            isDisabled: x
        } = (0, d.I)(t.skuId), {
            isPurchased: C,
            isPartiallyOwnedBundle: b
        } = (0, h.h)(t), I = (0, c.G0)(t), k = (0, c.tt)(t), E = l.useMemo(() => (0, c.fT)(t, m), [t, m]), y = (0, A.V_)(t), {
            checkoutEligiblePrices: j,
            hasSufficientOrbs: R,
            shouldCheckoutWithOrbs: _
        } = (0, p.F)({
            product: t,
            isPremiumUser: m,
            prioritizedCurrency: r,
            hasDiscountOffer: null != y
        }), T = I && !m;
        return x ? (0, n.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: v.intl.string(v.t.wu4gyV)
        }) : b ? (0, n.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: v.intl.string(v.t.BEjTij)
        }) : C && !T ? (0, n.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: v.intl.string(v.t["6cfuDj"])
        }) : k ? (0, n.jsx)(a.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: v.intl.string(v.t.nBtvYB)
        }) : I ? (0, n.jsx)(a.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: v.intl.string(v.t.rt69oo)
        }) : 0 === j.length ? null : (0, n.jsx)(f.x, {
            priceAmount: j[0].amount,
            priceCurrency: j[0].currency,
            discount: E,
            nitroIconType: m ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: y,
            className: _ && !R ? g.c : void 0,
            variant: "text-md/bold"
        })
    },
    b = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, x.Vm)(t), i = (0, o.Q)(l);
        if (null == l) return null;
        let a = (0, m.rb)(l, i);
        return (0, n.jsx)(C, {
            product: a,
            prioritizedCurrency: r
        })
    }