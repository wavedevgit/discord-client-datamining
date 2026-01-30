/** chunk id: 808138, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    o = n(209812),
    c = n(501592),
    d = n(623529),
    u = n(71393),
    g = n(985018);

function m(e) {
    let {
        guildId: t
    } = e, n = (0, s.bG)([u.A], () => u.A.getGuild(t));
    return l()(null != n, "Guild not found"), (0, r.jsxs)(o.ZV, {
        guildId: t,
        children: [(0, r.jsx)(c.A, {
            children: g.intl.string(g.t["WMyX2+"])
        }), (0, r.jsx)(a.hKd, {
            size: 32
        }), (0, r.jsx)(d.A, {
            guild: n,
            isGuildProducts: !0
        })]
    })
}