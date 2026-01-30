/** chunk id: 600260, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(417597),
    i = n(734057),
    a = n(696451),
    o = n(317525),
    s = n(370480);

function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, r.bG)([a.Ay], () => null != e ? a.Ay.getMember(e.id, t) : null, [e, t]),
        u = (0, r.bG)([i.A], () => i.A.getChannel(n), [n]),
        d = (0, r.bG)([i.A], () => i.A.getChannel(null == u ? void 0 : u.parent_id), [u]),
        f = (0, r.bG)([o.A], () => null != e ? o.A.getSortedRoles(e.id) : void 0);
    return null == e || null == f || null == c ? null : (0, s._g)({
        guild: e,
        sortedGuildRoles: f,
        guildMember: c,
        channel: null != u && u.isThread() && null != d ? d : u,
        onlyChannelConnectionRoles: l
    })
}