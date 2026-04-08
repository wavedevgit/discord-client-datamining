/** chunk id: 232879 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(199285),
    o = n(347951),
    d = n(366811),
    c = n(919638),
    u = n(458294),
    h = n(71393),
    A = n(531685),
    _ = n(131494),
    m = n(330465),
    p = n(739137);
let g = l.memo(function(e) {
    let {
        guildNode: t,
        lowerBadge: n
    } = e, g = t.id, f = (0, s.bG)([h.A], () => h.A.getGuild(g)), x = (0, r.a)(f), E = (0, s.bG)([A.A], () => A.A.isFocused()), I = (0, s.bG)([c.A], () => c.A.isUnavailable(g)), C = (0, d.A)(e => e.guildId), N = (0, _.A)(g), {
        badge: T,
        unread: S,
        isMentionLowImportance: b
    } = (0, s.cf)([u.default], () => ({
        badge: u.default.getMentionCount(g),
        isMentionLowImportance: u.default.getIsMentionLowImportance(g),
        unread: u.default.hasUnread(g)
    })), y = (0, o.Ig)(f) && 0 === T, v = l.useMemo(() => null != n ? n : y ? (0, i.jsx)("div", {
        className: p.j,
        children: (0, i.jsx)(a.E$n, {
            size: "custom",
            color: "currentColor",
            className: p.v,
            width: 10,
            height: 10
        })
    }) : null, [n, y]);
    return (0, i.jsx)(m.A, {
        ...e,
        guild: f,
        unavailable: I,
        animatable: E,
        selected: C === g,
        badge: T,
        isMentionLowImportance: b,
        lowerBadge: v,
        unread: S,
        mediaState: N,
        guildJoinRequestStatus: x
    })
})