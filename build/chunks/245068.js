/** Chunk was on web.js **/
/** chunk id: 245068, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => E
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(582754),
    l = n(397927),
    c = n(736653),
    u = n(550111),
    d = n(331402),
    f = n(442759),
    p = n(940622),
    _ = n(929283),
    h = n(650906),
    m = n(180171),
    g = n(989099);
let E = i.memo(function(e) {
    let {
        product: t,
        isHighlighted: n,
        user: i,
        forCollectedModal: a
    } = e, {
        firstProfileEffect: E,
        firstAvatarDecoration: y,
        firstNameplate: b
    } = (0, f.f5)(t), O = (0, p.br)(y), v = (0, c.Ay)(), A = (0, s.qB)(v), I = null != b && null != y && null != E, S = I ? l._3J.SIZE_72 : l._3J.SIZE_80, T = A ? g : m;
    return (0, r.jsxs)("div", {
        className: o()(h.kL, {
            [h.ib]: !I,
            [h.c$]: I
        }),
        children: [null != E && (0, r.jsx)("div", {
            className: h.NM,
            children: (0, r.jsx)(d.A, {
                isHighlighted: n,
                skuId: E.skuId,
                removeSetHeight: !0,
                delayProfileEffectIntro: a,
                withScaleAnimation: a
            })
        }), I && (0, r.jsx)("div", {
            className: h.M4,
            children: (0, r.jsx)(u.A, {
                user: i,
                nameplate: b,
                isHighlighted: n,
                showPlaceholderUser: !n,
                pendingAvatarDecoration: O
            })
        }), null != O && (0, r.jsx)("div", {
            className: h._P,
            children: (0, r.jsx)(_.i, {
                item: O,
                user: i,
                avatarSize: S,
                isHighlighted: n,
                avatarPlaceholderSrc: T,
                className: h.my
            })
        })]
    })
})