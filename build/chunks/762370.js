/** Chunk was on 41727 **/
/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(735438),
    l = n.n(r),
    i = n(311907),
    s = n(734057),
    a = n(696451),
    o = n(317525),
    c = n(576705),
    u = n(488926),
    d = n(652215);

function p(e, t) {
    return (0, i.bG)([c.A, s.A, a.Ay, o.A], () => {
        var n;
        let r = s.A.getChannel(t);
        if (null == r) return !1;
        let i = c.A.can(d.xBc.SEND_MESSAGES, r),
            p = a.Ay.getMember(r.guild_id, e),
            h = l().keyBy(o.A.getManyRoles(r.guild_id, null != (n = null == p ? void 0 : p.roles) ? n : []), "id"),
            f = u.$3({
                permission: d.xBc.STREAM,
                user: e,
                context: r,
                roles: h
            });
        return i && f
    })
}