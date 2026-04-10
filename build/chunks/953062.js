/** chunk id: 953062 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(554146),
    o = n(397927),
    d = n(932001),
    c = n(105390),
    u = n(49999),
    A = n(985018),
    h = n(449469);
let _ = e => {
    let {
        isSelected: t,
        discountOffer: n
    } = e, [r, _] = (0, d.kn)([s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], void 0, !0);
    return (l.useEffect(() => {
        t && r === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && _(u.i.TAKE_ACTION)
    }, [t, _, r]), r === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE) ? (0, i.jsx)(c.MA, {
        badgeCopy: A.intl.format(A.t.AYcXGW, {
            discountOfferAmount: n.discount.amount
        }).toString(),
        isTabSelected: t,
        offerExpiresAt: null
    }) : (0, i.jsxs)("div", {
        className: a()(h.bv, h.Hf),
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