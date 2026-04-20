/** chunk id: 762370 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(735438),
    l = n.n(i),
    s = n(311907),
    a = n(734057),
    r = n(696451),
    o = n(317525),
    c = n(576705),
    d = n(488926),
    u = n(652215);

function h(e, t) {
    return (0, s.bG)([c.A, a.A, r.Ay, o.A], () => {
        if (null == t) return !1;
        let n = a.A.getChannel(t);
        if (null == n) return !1;
        let i = c.A.can(u.xBc.SEND_MESSAGES, n),
            s = r.Ay.getMember(n.guild_id, e),
            h = l().keyBy(o.A.getManyRoles(n.guild_id, s?.roles ?? []), "id"),
            m = d.$3({
                permission: u.xBc.STREAM,
                user: e,
                context: n,
                roles: h
            });
        return i && m
    })
}