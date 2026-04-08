/** chunk id: 140877 params = (module,exports,require) **/
r.d(t, {
    A: () => k
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
    h = r(623373),
    p = r(219103),
    f = r(561769),
    x = r(525723),
    C = r(57020),
    g = r(985018),
    v = r(566947);
let A = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, o = (0, i.bG)([a.default], () => a.default.getCurrentUser()), h = u.Ay.canUseCollectibles(o), {
            isDisabled: f
        } = (0, d.I)(t.skuId), {
            isPurchased: A,
            isPartiallyOwnedBundle: k
        } = (0, m.h)(t), I = (0, c.G0)(t), b = (0, c.tt)(t), E = l.useMemo(() => (0, c.fT)(t, h), [t, h]), y = (0, x.V_)(t), {
            checkoutEligiblePrices: j,
            hasSufficientOrbs: _,
            shouldCheckoutWithOrbs: R
        } = (0, C.F)({
            product: t,
            isPremiumUser: h,
            prioritizedCurrency: r,
            hasDiscountOffer: null != y
        }), T = I && !h;
        return f ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: g.intl.string(g.t.wu4gyV)
        }) : k ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: g.intl.string(g.t.BEjTij)
        }) : A && !T ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: g.intl.string(g.t["6cfuDj"])
        }) : b ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: g.intl.string(g.t.nBtvYB)
        }) : I ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: g.intl.string(g.t.rt69oo)
        }) : 0 === j.length ? null : (0, n.jsx)(p.x, {
            priceAmount: j[0].amount,
            priceCurrency: j[0].currency,
            discount: E,
            nitroIconType: h ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: y,
            className: R && !_ ? v.c : void 0,
            variant: "text-md/bold"
        })
    },
    k = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, f.Vm)(t), i = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, h.rb)(l, i);
        return (0, n.jsx)(A, {
            product: s,
            prioritizedCurrency: r
        })
    }