/** chunk id: 709634 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(989349),
    o = n.n(a),
    d = n(397927),
    c = n(763754),
    u = n(449859),
    _ = n(943815),
    m = n(447215),
    h = n(287809),
    p = n(405269),
    g = n(733045),
    A = n(985018),
    x = n(137770),
    f = n(812782),
    C = n(513653);
let E = e => {
    let {
        reportingUserId: t,
        guildId: n,
        compact: s,
        channel: a,
        messageId: E,
        reportedTimestamp: I
    } = e, v = h.default.getUser(t), b = l.useMemo(() => s ? (0, _.A)((0, p.i$)(o()(), "LT")) : null, [s]), T = (0, m.P)({
        user: v,
        channelId: a.id,
        guildId: n,
        messageId: E
    })((0, c.m2)(v, a)), y = null != v ? v.getAvatarURL(n, (0, d.FT9)(d._3J.SIZE_16)) : C, N = null != v ? A.intl.format(g.default["+zqXZs"], {
        username: v.username,
        onUserClick: T
    }) : A.intl.string(g.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: r()(f.NB, f.JZ, b),
        children: [(0, i.jsx)(d.euF, {
            src: y,
            size: d._3J.SIZE_16,
            className: x.my,
            "aria-label": ""
        }), (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: x.Xh,
            children: N
        }), (0, i.jsxs)(d.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: [(0, i.jsx)("span", {
                className: x.Ek,
                children: "•"
            }), (0, i.jsx)(u.A, {
                timestamp: I,
                className: x.vE
            })]
        })]
    })
}