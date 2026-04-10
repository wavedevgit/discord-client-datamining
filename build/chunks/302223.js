/** chunk id: 302223 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(51183),
    a = n(890920);

function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: l,
        textClassName: o,
        placeholderText: u,
        soloEmojiClassName: d,
        animate: c = !0,
        hideTooltip: h = !1,
        hideEmoji: g = !1,
        children: m
    } = e;
    if (null == t) return null;
    let {
        emoji: f
    } = t, A = null != t.state && "" !== t.state ? t.state : u;
    return (0, i.jsxs)("div", {
        className: r()(a.__invalid_container, n),
        children: [g || null == f ? null : (0, i.jsx)(s.A, {
            emoji: f,
            className: r()(a.Z, l, null != d ? {
                [d]: null == A || "" === A
            } : null),
            animate: c,
            hideTooltip: h
        }), null != A && A.length > 0 ? (0, i.jsx)("span", {
            className: o,
            children: A
        }) : null, m]
    })
}