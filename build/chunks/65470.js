/** chunk id: 65470 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(732955),
    a = n(397927),
    s = n(194509),
    l = n(783420);
let o = e => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: c,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, i.jsx)(l.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: c,
        children: e => {
            let {
                onClick: n
            } = e, l = d ?? (0, s.U)(t);
            return (0, i.jsx)(r.$nd, {
                onClick: n,
                icon: a.okO,
                ...u,
                text: l
            })
        }
    })
}