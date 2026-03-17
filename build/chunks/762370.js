/** chunk id: 762370 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(735438),
    i = n.n(l),
    r = n(311907),
    a = n(734057),
    o = n(696451),
    u = n(317525),
    s = n(576705),
    d = n(488926),
    c = n(652215);

function A(e, t) {
    return (0, r.bG)([s.A, a.A, o.Ay, u.A], () => {
        if (null == t) return !1;
        let n = a.A.getChannel(t);
        if (null == n) return !1;
        let l = s.A.can(c.xBc.SEND_MESSAGES, n),
            r = o.Ay.getMember(n.guild_id, e),
            A = i().keyBy(u.A.getManyRoles(n.guild_id, r?.roles ?? []), "id"),
            h = d.$3({
                permission: c.xBc.STREAM,
                user: e,
                context: n,
                roles: A
            });
        return l && h
    })
}