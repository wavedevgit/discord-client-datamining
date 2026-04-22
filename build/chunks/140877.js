/** chunk id: 140877 params = (module,exports,require) **/
r.d(e, {
    A: () => _
});
var n = r(627968),
    i = r(64700),
    l = r(417597),
    s = r(397927),
    a = r(287809),
    u = r(927578),
    o = r(298072),
    c = r(993408),
    d = r(740076),
    k = r(466459),
    p = r(623373),
    C = r(219103),
    m = r(561769),
    x = r(525723),
    I = r(57020),
    A = r(985018),
    g = r(380836);
let h = t => {
        let {
            product: e,
            prioritizedCurrency: r
        } = t, o = (0, l.bG)([a.default], () => a.default.getCurrentUser()), p = u.Ay.canUseCollectibles(o), {
            isDisabled: m
        } = (0, d.I)(e.skuId), {
            isPurchased: h,
            isPartiallyOwnedBundle: _
        } = (0, k.h)(e), f = (0, c.G0)(e), T = (0, c.tt)(e), v = i.useMemo(() => (0, c.fT)(e, p), [e, p]), E = (0, x.V_)(e), {
            checkoutEligiblePrices: j,
            hasSufficientOrbs: y,
            shouldCheckoutWithOrbs: P
        } = (0, I.F)({
            product: e,
            isPremiumUser: p,
            prioritizedCurrency: r,
            hasDiscountOffer: null != E
        }), b = f && !p;
        return m ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.wu4gyV)
        }) : _ ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.BEjTij)
        }) : h && !b ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t["6cfuDj"])
        }) : T ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.nBtvYB)
        }) : f ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.rt69oo)
        }) : 0 === j.length ? null : (0, n.jsx)(C.x, {
            priceAmount: j[0].amount,
            priceCurrency: j[0].currency,
            discount: v,
            nitroIconType: p ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: E,
            className: P && !y ? g.c : void 0,
            variant: "text-md/bold"
        })
    },
    _ = t => {
        let {
            skuId: e,
            prioritizedCurrency: r
        } = t, i = (0, m.Vm)(e), l = (0, o.Q)(i);
        if (null == i) return null;
        let s = (0, p.rb)(i, l);
        return (0, n.jsx)(h, {
            product: s,
            prioritizedCurrency: r
        })
    }