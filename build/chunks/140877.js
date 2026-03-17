/** chunk id: 140877 params = (module,exports,require) **/
r.d(e, {
    A: () => k
});
var i = r(627968),
    n = r(64700),
    l = r(417597),
    s = r(397927),
    a = r(287809),
    u = r(927578),
    o = r(298072),
    d = r(993408),
    c = r(740076),
    A = r(466459),
    m = r(623373),
    x = r(219103),
    p = r(561769),
    g = r(525723),
    C = r(57020),
    h = r(985018),
    f = r(491153);
let I = t => {
        let {
            product: e,
            prioritizedCurrency: r
        } = t, o = (0, l.bG)([a.default], () => a.default.getCurrentUser()), m = u.Ay.canUseCollectibles(o), {
            isDisabled: p
        } = (0, c.I)(e.skuId), {
            isPurchased: I,
            isPartiallyOwnedBundle: k
        } = (0, A.h)(e), v = (0, d.G0)(e), j = (0, d.tt)(e), E = n.useMemo(() => (0, d.fT)(e, m), [e, m]), T = (0, g.V_)(e), {
            checkoutEligiblePrices: _,
            hasSufficientOrbs: y,
            shouldCheckoutWithOrbs: R
        } = (0, C.F)({
            product: e,
            isPremiumUser: m,
            prioritizedCurrency: r,
            hasDiscountOffer: null != T
        }), b = v && !m;
        return p ? (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t.wu4gyV)
        }) : k ? (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t.BEjTij)
        }) : I && !b ? (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t["6cfuDj"])
        }) : j ? (0, i.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: h.intl.string(h.t.nBtvYB)
        }) : v ? (0, i.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: h.intl.string(h.t.rt69oo)
        }) : 0 === _.length ? null : (0, i.jsx)(x.x, {
            priceAmount: _[0].amount,
            priceCurrency: _[0].currency,
            discount: E,
            nitroIconType: m ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: T,
            className: R && !y ? f.c : void 0,
            variant: "text-md/bold"
        })
    },
    k = t => {
        let {
            skuId: e,
            prioritizedCurrency: r
        } = t, n = (0, p.Vm)(e), l = (0, o.Q)(n);
        if (null == n) return null;
        let s = (0, m.rb)(n, l);
        return (0, i.jsx)(I, {
            product: s,
            prioritizedCurrency: r
        })
    }