/** chunk id: 762370 params = (module,exports,require) **/
n.d(e, {
    A: () => A
});
var i = n(735438),
    l = n.n(i),
    r = n(311907),
    a = n(734057),
    o = n(696451),
    u = n(317525),
    d = n(576705),
    s = n(488926),
    c = n(652215);

function A(t, e) {
    return (0, r.bG)([d.A, a.A, o.Ay, u.A], () => {
        if (null == e) return !1;
        let n = a.A.getChannel(e);
        if (null == n) return !1;
        let i = d.A.can(c.xBc.SEND_MESSAGES, n),
            r = o.Ay.getMember(n.guild_id, t),
            A = l().keyBy(u.A.getManyRoles(n.guild_id, r?.roles ?? []), "id"),
            g = s.$3({
                permission: c.xBc.STREAM,
                user: t,
                context: n,
                roles: A
            });
        return i && g
    })
}