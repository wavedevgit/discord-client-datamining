/** chunk id: 140877 params = (module,exports,require) **/
r.d(e, {
    A: () => f
});
var i = r(627968),
    l = r(64700),
    n = r(417597),
    s = r(397927),
    a = r(287809),
    u = r(927578),
    o = r(298072),
    d = r(993408),
    c = r(740076),
    m = r(466459),
    A = r(623373),
    x = r(219103),
    p = r(561769),
    h = r(525723),
    g = r(57020),
    C = r(985018),
    I = r(306931);
let v = t => {
        let {
            product: e,
            prioritizedCurrency: r
        } = t, o = (0, n.bG)([a.default], () => a.default.getCurrentUser()), A = u.Ay.canUseCollectibles(o), {
            isDisabled: p
        } = (0, c.I)(e.skuId), {
            isPurchased: v,
            isPartiallyOwnedBundle: f
        } = (0, m.h)(e), j = (0, d.G0)(e), k = (0, d.tt)(e), y = l.useMemo(() => (0, d.fT)(e, A), [e, A]), T = (0, h.V_)(e), {
            checkoutEligiblePrices: _,
            hasSufficientOrbs: E,
            shouldCheckoutWithOrbs: R
        } = (0, g.F)({
            product: e,
            isPremiumUser: A,
            prioritizedCurrency: r,
            hasDiscountOffer: null != T
        }), N = j && !A;
        return p ? (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.wu4gyV)
        }) : f ? (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.BEjTij)
        }) : v && !N ? (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t["6cfuDj"])
        }) : k ? (0, i.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.nBtvYB)
        }) : j ? (0, i.jsx)(s.Text, {
            variant: "text-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.rt69oo)
        }) : 0 === _.length ? null : (0, i.jsx)(x.x, {
            priceAmount: _[0].amount,
            priceCurrency: _[0].currency,
            discount: y,
            nitroIconType: A ? "default" : void 0,
            nitroIconSize: "sm",
            discountOfferAmount: T,
            className: R && !E ? I.c : void 0,
            variant: "text-md/bold"
        })
    },
    f = t => {
        let {
            skuId: e,
            prioritizedCurrency: r
        } = t, l = (0, p.Vm)(e), n = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, A.rb)(l, n);
        return (0, i.jsx)(v, {
            product: s,
            prioritizedCurrency: r
        })
    }