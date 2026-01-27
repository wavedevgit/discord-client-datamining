/** Chunk was on 92917 **/
/** chunk id: 536030, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(763754),
    l = n(888675),
    a = n(985018);

function s(e) {
    let {
        message: t,
        channel: s,
        targetUser: o,
        actorUsernameHook: c,
        targetUsernameHook: u,
        compact: d
    } = e, p = (0, i.Ay)(t), m = (0, i.d8)(o, s), f = c(p), g = u(null != m ? m : void 0), h = a.intl.format(a.t["32QI5/"], {
        actorName: p.nick,
        actorHook: f,
        targetName: null == m ? void 0 : m.nick,
        targetHook: g
    });
    return (0, r.jsx)(l.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: d,
        children: h
    })
}