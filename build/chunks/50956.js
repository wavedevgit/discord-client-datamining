/** Chunk was on web.js **/
/** chunk id: 50956, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => u
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(102741),
    o = n(45938),
    s = n(937008),
    l = n(985018),
    c = n(389118);

function u(e) {
    let {
        giftMessage: t = l.intl.string(l.t["DrgnS+"])
    } = e, {
        isGift: n,
        giftRecipient: u
    } = (0, s.Pv)();
    return !n || (0, o.Ik)(u) ? null : (0, r.jsx)(a.A, {
        className: c.z,
        iconSize: a.A.Sizes.SMALL,
        icon: i.okO,
        color: null == t ? a.A.Colors.PRIMARY : a.A.Colors.SECONDARY,
        children: t
    })
}