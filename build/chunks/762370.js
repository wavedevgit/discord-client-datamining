/** chunk id: 762370 params = (module,exports,require) **/
n.d(e, {
    A: () => h
});
var i = n(735438),
    l = n.n(i),
    r = n(311907),
    s = n(734057),
    a = n(696451),
    o = n(317525),
    u = n(576705),
    d = n(488926),
    c = n(652215);

function h(t, e) {
    return (0, r.bG)([u.A, s.A, a.Ay, o.A], () => {
        if (null == e) return !1;
        let n = s.A.getChannel(e);
        if (null == n) return !1;
        let i = u.A.can(c.xBc.SEND_MESSAGES, n),
            r = a.Ay.getMember(n.guild_id, t),
            h = l().keyBy(o.A.getManyRoles(n.guild_id, r?.roles ?? []), "id"),
            A = d.$3({
                permission: c.xBc.STREAM,
                user: t,
                context: n,
                roles: h
            });
        return i && A
    })
}