/** chunk id: 65470, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(732955),
    a = n(397927),
    l = n(194509),
    r = n(783420);
let o = e => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: c,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, i.jsx)(r.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: c,
        children: e => {
            let {
                onClick: n
            } = e, r = d ?? (0, l.U)(t);
            return (0, i.jsx)(s.$nd, {
                onClick: n,
                icon: a.okO,
                ...u,
                text: r
            })
        }
    })
}