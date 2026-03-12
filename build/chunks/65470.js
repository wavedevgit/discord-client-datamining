/** chunk id: 65470 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(732955),
    l = n(397927),
    r = n(194509),
    a = n(783420);
let o = e => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: d,
        buttonTextOverride: c,
        ...u
    } = e;
    return (0, i.jsx)(a.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: d,
        children: e => {
            let {
                onClick: n
            } = e, a = c ?? (0, r.U)(t);
            return (0, i.jsx)(s.$nd, {
                onClick: n,
                icon: l.okO,
                ...u,
                text: a
            })
        }
    })
}