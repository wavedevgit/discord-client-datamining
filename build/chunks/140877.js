/** chunk id: 140877 params = (module,exports,require) **/
r.d(t, {
    A: () => I
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
    A = r(561769),
    x = r(525723),
    p = r(57020),
    C = r(985018),
    g = r(491153);
let v = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, o = (0, i.bG)([a.default], () => a.default.getCurrentUser()), m = u.Ay.canUseCollectibles(o), {
            isDisabled: A
        } = (0, d.I)(t.skuId), {
            isPurchased: v,
            isPartiallyOwnedBundle: I
        } = (0, f.h)(t), b = (0, c.G0)(t), k = (0, c.tt)(t), E = l.useMemo(() => (0, c.fT)(t, m), [t, m]), j = (0, x.V_)(t), {
            checkoutEligiblePrices: y,
            hasSufficientOrbs: T,
            shouldCheckoutWithOrbs: R
        } = (0, p.F)({
            product: t,
            isPremiumUser: m,
            prioritizedCurrency: r,
            hasDiscountOffer: null != j
        }), _ = b && !m;
        return A ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.wu4gyV)
        }) : I ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.BEjTij)
        }) : v && !_ ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t["6cfuDj"])
        }) : k ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.nBtvYB)
        }) : b ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.rt69oo)
        }) : 0 === y.length ? null : (0, n.jsx)(h.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: E,
            nitroIconType: m ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: j,
            className: R && !T ? g.c : void 0,
            variant: "text-md/bold"
        })
    },
    I = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, A.Vm)(t), i = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, m.rb)(l, i);
        return (0, n.jsx)(v, {
            product: s,
            prioritizedCurrency: r
        })
    }