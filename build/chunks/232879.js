/** chunk id: 232879 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(199285),
    o = n(347951),
    c = n(366811),
    d = n(919638),
    u = n(458294),
    h = n(71393),
    A = n(531685),
    m = n(131494),
    p = n(330465),
    g = n(424529);
let _ = s.memo(function(e) {
    let {
        guildNode: t,
        lowerBadge: n
    } = e, _ = t.id, f = (0, l.bG)([h.A], () => h.A.getGuild(_)), x = (0, a.a)(f), C = (0, l.bG)([A.A], () => A.A.isFocused()), E = (0, l.bG)([d.A], () => d.A.isUnavailable(_)), I = (0, c.A)(e => e.guildId), N = (0, m.A)(_), {
        badge: b,
        unread: S,
        isMentionLowImportance: T
    } = (0, l.cf)([u.default], () => ({
        badge: u.default.getMentionCount(_),
        isMentionLowImportance: u.default.getIsMentionLowImportance(_),
        unread: u.default.hasUnread(_)
    })), v = (0, o.Ig)(f) && 0 === b, y = s.useMemo(() => null != n ? n : v ? (0, i.jsx)("div", {
        className: g.j,
        children: (0, i.jsx)(r.E$n, {
            size: "custom",
            color: "currentColor",
            className: g.v,
            width: 10,
            height: 10
        })
    }) : null, [n, v]);
    return (0, i.jsx)(p.A, {
        ...e,
        guild: f,
        unavailable: E,
        animatable: C,
        selected: I === _,
        badge: b,
        isMentionLowImportance: T,
        lowerBadge: y,
        unread: S,
        mediaState: N,
        guildJoinRequestStatus: x
    })
})