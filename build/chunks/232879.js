/** chunk id: 232879 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(199285),
    o = n(347951),
    c = n(366811),
    d = n(919638),
    u = n(458294),
    h = n(71393),
    A = n(531685),
    m = n(131494),
    _ = n(330465),
    p = n(739137);
let g = s.memo(function(e) {
    let {
        guildNode: t,
        lowerBadge: n
    } = e, g = t.id, f = (0, l.bG)([h.A], () => h.A.getGuild(g)), x = (0, r.a)(f), E = (0, l.bG)([A.A], () => A.A.isFocused()), C = (0, l.bG)([d.A], () => d.A.isUnavailable(g)), I = (0, c.A)(e => e.guildId), N = (0, m.A)(g), {
        badge: b,
        unread: S,
        isMentionLowImportance: T
    } = (0, l.cf)([u.default], () => ({
        badge: u.default.getMentionCount(g),
        isMentionLowImportance: u.default.getIsMentionLowImportance(g),
        unread: u.default.hasUnread(g)
    })), v = (0, o.Ig)(f) && 0 === b, y = s.useMemo(() => null != n ? n : v ? (0, i.jsx)("div", {
        className: p.j,
        children: (0, i.jsx)(a.E$n, {
            size: "custom",
            color: "currentColor",
            className: p.v,
            width: 10,
            height: 10
        })
    }) : null, [n, v]);
    return (0, i.jsx)(_.A, {
        ...e,
        guild: f,
        unavailable: C,
        animatable: E,
        selected: I === g,
        badge: b,
        isMentionLowImportance: T,
        lowerBadge: y,
        unread: S,
        mediaState: N,
        guildJoinRequestStatus: x
    })
})