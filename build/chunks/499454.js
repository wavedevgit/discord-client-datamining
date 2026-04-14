/** chunk id: 499454 params = (module,exports,require) **/
n.d(t, {
    h: () => _
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(287809),
    r = n(166403),
    a = n(203982),
    o = n(927578),
    d = n(598653),
    c = n(788868),
    u = n(652215);

function _(e) {
    let {
        processedCode: t,
        channelContext: _,
        customGiftMessage: m,
        giftInfo: h
    } = e, p = !1, g = null, A = s.default.getCurrentUser(), x = (0, o.CC)(A?.premiumType, c.PremiumTypes.TIER_0);
    (0, l.mMO)(async () => {
        let {
            default: e
        } = await n.e("36820").then(n.bind(n, 67327));
        return n => (0, i.jsx)(e, {
            code: t,
            channelContext: _,
            customGiftMessage: m,
            emojiName: h?.emoji?.name,
            soundId: h?.sound?.id,
            onComplete: (e, t) => {
                g = e, t && (p = t, e.isSubscription && null == r.A.getPremiumSubscription(!1) && (0, d.o)(!0))
            },
            ...n
        })
    }, {
        onCloseCallback: () => {
            p && null != g && !x && g.isSubscription && g?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 && a._.dispatch(u.jej.PREMIUM_SUBSCRIPTION_CREATED)
        }
    })
}