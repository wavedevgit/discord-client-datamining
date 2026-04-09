/** chunk id: 140877 params = (module,exports,require) **/
r.d(t, {
    A: () => v
});
var n = r(627968),
    l = r(64700),
    i = r(417597),
    s = r(397927),
    a = r(287809),
    u = r(927578),
    o = r(298072),
    d = r(993408),
    c = r(740076),
    p = r(466459),
    m = r(623373),
    x = r(219103),
    g = r(561769),
    h = r(525723),
    C = r(57020),
    A = r(985018),
    k = r(413908);
let I = e => {
        let {
            product: t,
            prioritizedCurrency: r
        } = e, o = (0, i.bG)([a.default], () => a.default.getCurrentUser()), m = u.Ay.canUseCollectibles(o), {
            isDisabled: g
        } = (0, c.I)(t.skuId), {
            isPurchased: I,
            isPartiallyOwnedBundle: v
        } = (0, p.h)(t), f = (0, d.G0)(t), _ = (0, d.tt)(t), y = l.useMemo(() => (0, d.fT)(t, m), [t, m]), j = (0, h.V_)(t), {
            checkoutEligiblePrices: E,
            hasSufficientOrbs: b,
            shouldCheckoutWithOrbs: R
        } = (0, C.F)({
            product: t,
            isPremiumUser: m,
            prioritizedCurrency: r,
            hasDiscountOffer: null != j
        }), T = f && !m;
        return g ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.wu4gyV)
        }) : v ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t.BEjTij)
        }) : I && !T ? (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: A.intl.string(A.t["6cfuDj"])
        }) : _ ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.nBtvYB)
        }) : f ? (0, n.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: A.intl.string(A.t.rt69oo)
        }) : 0 === E.length ? null : (0, n.jsx)(x.x, {
            priceAmount: E[0].amount,
            priceCurrency: E[0].currency,
            discount: y,
            nitroIconType: m ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: j,
            className: R && !b ? k.c : void 0,
            variant: "text-md/bold"
        })
    },
    v = e => {
        let {
            skuId: t,
            prioritizedCurrency: r
        } = e, l = (0, g.Vm)(t), i = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, m.rb)(l, i);
        return (0, n.jsx)(I, {
            product: s,
            prioritizedCurrency: r
        })
    }