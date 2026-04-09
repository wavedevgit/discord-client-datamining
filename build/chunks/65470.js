/** chunk id: 65470 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(732955),
    a = n(397927),
    s = n(194509),
    l = n(783420);
let c = e => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, i.jsx)(l.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
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