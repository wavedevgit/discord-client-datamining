/** Chunk was on 92917 **/
/** chunk id: 709634, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(989349),
    o = n.n(s),
    c = n(397927),
    u = n(763754),
    d = n(449859),
    p = n(943815),
    m = n(447215),
    f = n(287809),
    g = n(405269),
    h = n(641131),
    _ = n(985018),
    b = n(197172),
    A = n(679740),
    y = n(513653);
let v = e => {
    let {
        reportingUserId: t,
        guildId: n,
        compact: l,
        channel: s,
        messageId: v,
        reportedTimestamp: x
    } = e, O = f.default.getUser(t), E = i.useMemo(() => l ? (0, p.A)((0, g.i$)(o()(), "LT")) : null, [l]), j = (0, m.P)({
        user: O,
        channelId: s.id,
        guildId: n,
        messageId: v
    })((0, u.m2)(O, s)), C = null != O ? O.getAvatarURL(n, (0, c.FT9)(c._3J.SIZE_16)) : y, I = null != O ? _.intl.format(h.default["+zqXZs"], {
        username: O.username,
        onUserClick: j
    }) : _.intl.string(h.default.xpRjfS);
    return (0, r.jsxs)("div", {
        className: a()(A.NB, A.JZ, E),
        children: [(0, r.jsx)(c.euF, {
            src: C,
            size: c._3J.SIZE_16,
            className: b.my,
            "aria-label": ""
        }), (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: b.Xh,
            children: I
        }), (0, r.jsxs)(c.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: [(0, r.jsx)("span", {
                className: b.Ek,
                children: "•"
            }), (0, r.jsx)(d.A, {
                timestamp: x,
                className: b.vE
            })]
        })]
    })
}