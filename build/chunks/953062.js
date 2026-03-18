/** chunk id: 953062 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(554146),
    o = n(397927),
    d = n(932001),
    c = n(105390),
    u = n(49999),
    A = n(985018),
    h = n(318012);
let _ = e => {
    let {
        isSelected: t,
        discountOffer: n
    } = e, [l, _] = (0, d.kn)([s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], void 0, !0);
    return (a.useEffect(() => {
        t && l === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && _(u.i.TAKE_ACTION)
    }, [t, _, l]), l === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE) ? (0, i.jsx)(c.MA, {
        badgeCopy: A.intl.format(A.t.AYcXGW, {
            discountOfferAmount: n.discount.amount
        }).toString(),
        isTabSelected: t,
        offerExpiresAt: null
    }) : (0, i.jsxs)("div", {
        className: r()(h.bv, h.Hf),
        children: [(0, i.jsx)(o.O4, {
            size: "custom",
            width: 14,
            height: 14,
            color: "currentColor",
            className: h.aW
        }), (0, i.jsx)(o.Text, {
            variant: "eyebrow",
            color: "text-subtle",
            children: A.intl.format(A.t.AYcXGW, {
                discountOfferAmount: n.discount.amount
            })
        })]
    })
}