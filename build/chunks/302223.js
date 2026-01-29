/** Chunk was on 87557 **/
/** chunk id: 302223, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(51183),
    s = n(802455);

function o(e) {
    let {
        activity: t,
        className: n,
        emojiClassName: l,
        textClassName: o,
        placeholderText: c,
        soloEmojiClassName: d,
        animate: u = !0,
        hideTooltip: m = !1,
        hideEmoji: p = !1,
        children: h
    } = e;
    if (null == t) return null;
    let {
        emoji: x
    } = t, g = null != t.state && "" !== t.state ? t.state : c;
    return (0, a.jsxs)("div", {
        className: r()(s.__invalid_container, n),
        children: [p || null == x ? null : (0, a.jsx)(i.A, {
            emoji: x,
            className: r()(s.Z, l, null != d ? {
                [d]: null == g || "" === g
            } : null),
            animate: u,
            hideTooltip: m
        }), null != g && g.length > 0 ? (0, a.jsx)("span", {
            className: o,
            children: g
        }) : null, h]
    })
}