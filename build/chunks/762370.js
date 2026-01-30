/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(735438),
    i = n.n(r),
    l = n(311907),
    a = n(734057),
    o = n(696451),
    u = n(317525),
    c = n(576705),
    d = n(488926),
    s = n(652215);

function _(e, t) {
    return (0, l.bG)([c.A, a.A, o.Ay, u.A], () => {
        var n;
        let r = a.A.getChannel(t);
        if (null == r) return !1;
        let l = c.A.can(s.xBc.SEND_MESSAGES, r),
            _ = o.Ay.getMember(r.guild_id, e),
            b = i().keyBy(u.A.getManyRoles(r.guild_id, null != (n = null == _ ? void 0 : _.roles) ? n : []), "id"),
            h = d.$3({
                permission: s.xBc.STREAM,
                user: e,
                context: r,
                roles: b
            });
        return l && h
    })
}