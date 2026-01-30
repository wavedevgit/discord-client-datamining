/** chunk id: 127757, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    d: () => m
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(486020),
    o = n(11351),
    c = n(320137),
    d = n(985018),
    u = n(86045);

function g(e) {
    let {
        emoji: t,
        onRemoveEmoji: n,
        disabled: i = !1
    } = e, o = a.Ay.getEmojiURL({
        id: t.id,
        animated: t.animated,
        size: 32
    });
    return (0, r.jsxs)("div", {
        className: l()(u.nI, {
            [u.r9]: i
        }),
        children: [(0, r.jsx)("img", {
            className: u.mp,
            src: o,
            alt: t.name
        }), (0, r.jsx)(s.Text, {
            color: "text-strong",
            variant: "text-md/medium",
            className: u.JN,
            children: t.name
        }), (0, r.jsx)("div", {
            className: u.G5,
            children: (0, r.jsx)(s.K0, {
                variant: "secondary",
                icon: s.ucK,
                onClick: () => n(t),
                "aria-label": d.intl.string(d.t.dVS92c),
                disabled: i
            })
        })]
    })
}

function m(e) {
    let {
        tierEmojiIds: t,
        guildId: n,
        onRemoveEmoji: i
    } = e, l = (0, c.A)(n), s = null != t ? l.filter(e => t.has(e.id)) : [], a = (0, o.gN)();
    return (0, r.jsx)("div", {
        className: u.kL,
        children: s.map(e => (0, r.jsx)(g, {
            emoji: e,
            onRemoveEmoji: () => i(e),
            disabled: a
        }, e.id))
    })
}