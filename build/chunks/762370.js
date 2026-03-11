/** chunk id: 762370 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(735438),
    i = n.n(l),
    r = n(311907),
    a = n(734057),
    o = n(696451),
    s = n(317525),
    d = n(576705),
    u = n(488926),
    c = n(652215);

function A(e, t) {
    return (0, r.bG)([d.A, a.A, o.Ay, s.A], () => {
        if (null == t) return !1;
        let n = a.A.getChannel(t);
        if (null == n) return !1;
        let l = d.A.can(c.xBc.SEND_MESSAGES, n),
            r = o.Ay.getMember(n.guild_id, e),
            A = i().keyBy(s.A.getManyRoles(n.guild_id, r?.roles ?? []), "id"),
            h = u.$3({
                permission: c.xBc.STREAM,
                user: e,
                context: n,
                roles: A
            });
        return l && h
    })
}