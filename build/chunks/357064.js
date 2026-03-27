/** chunk id: 357064 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(442433),
    a = n(513461),
    r = n(212455),
    o = n(967198),
    c = n(531685),
    d = n(330465),
    u = n(65611),
    h = n(652215);

function A(e, t) {
    (0, l.L3)(e, async () => {
        let {
            default: e
        } = await n.e("49056").then(n.bind(n, 97187));
        return n => (0, i.jsx)(e, {
            ...n,
            guild: t
        })
    })
}

function m(e) {
    let {
        guildNode: t
    } = e, n = t.id, l = (0, s.bG)([r.A], () => r.A.getRequest(n)), m = (0, s.bG)([r.A], () => r.A.getJoinRequestGuild(n), [n]), _ = (0, s.bG)([c.A], () => c.A.isFocused()), g = (0, s.bG)([o.A], () => o.A.getGuildId());
    return null == m ? null : (0, i.jsx)(d.A, {
        guildNode: t,
        guild: m,
        animatable: _,
        draggable: !1,
        selected: n === g,
        preloadOnClick: !1,
        contextMenu: A,
        lowerBadge: l?.applicationStatus === a.B5.REJECTED ? (0, u.eW)({
            guildJoinRequestStatus: l.applicationStatus
        }) : void 0,
        route: h.BVt.GUILD_MEMBER_VERIFICATION(n)
    })
}