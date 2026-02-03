/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(735438),
    i = n.n(r),
    l = n(311907),
    o = n(734057),
    a = n(696451),
    c = n(317525),
    u = n(576705),
    s = n(488926),
    d = n(652215);

function b(e, t) {
    return (0, l.bG)([u.A, o.A, a.Ay, c.A], () => {
        var n;
        let r = o.A.getChannel(t);
        if (null == r) return !1;
        let l = u.A.can(d.xBc.SEND_MESSAGES, r),
            b = a.Ay.getMember(r.guild_id, e),
            f = i().keyBy(c.A.getManyRoles(r.guild_id, null != (n = null == b ? void 0 : b.roles) ? n : []), "id"),
            p = s.$3({
                permission: d.xBc.STREAM,
                user: e,
                context: r,
                roles: f
            });
        return l && p
    })
}