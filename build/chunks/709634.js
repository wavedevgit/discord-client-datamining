/** chunk id: 709634 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(989349),
    o = n.n(s),
    d = n(397927),
    c = n(763754),
    u = n(449859),
    _ = n(943815),
    m = n(447215),
    h = n(287809),
    p = n(405269),
    g = n(641131),
    A = n(985018),
    x = n(990387),
    f = n(767283),
    C = n(513653);
let I = e => {
    let {
        reportingUserId: t,
        guildId: n,
        compact: r,
        channel: s,
        messageId: I,
        reportedTimestamp: E
    } = e, b = h.default.getUser(t), v = a.useMemo(() => r ? (0, _.A)((0, p.i$)(o()(), "LT")) : null, [r]), T = (0, m.P)({
        user: b,
        channelId: s.id,
        guildId: n,
        messageId: I
    })((0, c.m2)(b, s)), y = null != b ? b.getAvatarURL(n, (0, d.FT9)(d._3J.SIZE_16)) : C, S = null != b ? A.intl.format(g.default["+zqXZs"], {
        username: b.username,
        onUserClick: T
    }) : A.intl.string(g.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: l()(f.NB, f.JZ, v),
        children: [(0, i.jsx)(d.euF, {
            src: y,
            size: d._3J.SIZE_16,
            className: x.my,
            "aria-label": ""
        }), (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: x.Xh,
            children: S
        }), (0, i.jsxs)(d.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: [(0, i.jsx)("span", {
                className: x.Ek,
                children: "•"
            }), (0, i.jsx)(u.A, {
                timestamp: E,
                className: x.vE
            })]
        })]
    })
}