/** chunk id: 302223, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => s
});
var n = r(627968);
r(64700);
var a = r(503698),
    c = r.n(a),
    l = r(51183),
    u = r(802455);

function s(e) {
    let {
        activity: t,
        className: r,
        emojiClassName: a,
        textClassName: s,
        placeholderText: i,
        soloEmojiClassName: o,
        animate: d = !0,
        hideTooltip: f = !1,
        hideEmoji: m = !1,
        children: x
    } = e;
    if (null == t) return null;
    let {
        emoji: h
    } = t, b = null != t.state && "" !== t.state ? t.state : i;
    return (0, n.jsxs)("div", {
        className: c()(u.__invalid_container, r),
        children: [m || null == h ? null : (0, n.jsx)(l.A, {
            emoji: h,
            className: c()(u.Z, a, null != o ? {
                [o]: null == b || "" === b
            } : null),
            animate: d,
            hideTooltip: f
        }), null != b && b.length > 0 ? (0, n.jsx)("span", {
            className: s,
            children: b
        }) : null, x]
    })
}