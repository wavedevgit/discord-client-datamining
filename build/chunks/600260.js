/** chunk id: 600260, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var l = n(417597),
    s = n(734057),
    i = n(696451),
    r = n(317525),
    a = n(370480);

function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, l.bG)([i.Ay], () => null != e ? i.Ay.getMember(e.id, t) : null, [e, t]),
        c = (0, l.bG)([s.A], () => s.A.getChannel(n), [n]),
        d = (0, l.bG)([s.A], () => s.A.getChannel(c?.parent_id), [c]),
        m = (0, l.bG)([r.A], () => null != e ? r.A.getSortedRoles(e.id) : void 0);
    return null == e || null == m || null == u ? null : (0, a._g)({
        guild: e,
        sortedGuildRoles: m,
        guildMember: u,
        channel: null != c && c.isThread() && null != d ? d : c,
        onlyChannelConnectionRoles: o
    })
}