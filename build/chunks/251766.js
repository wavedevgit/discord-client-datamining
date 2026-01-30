/** chunk id: 251766, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => h
});
var r = n(311907),
    l = n(164956),
    i = n(34457),
    s = n(734057),
    a = n(317525),
    o = n(71393),
    c = n(599941),
    u = n(855918),
    d = n(652215);

function h(e) {
    let {
        guildId: t,
        channelId: n
    } = e, h = (0, c.uP)(t);
    return (0, r.yK)([s.A, o.A, l.A], () => {
        let e = s.A.getChannel(n),
            r = o.A.getGuild(t),
            c = l.A.isViewingServerShop(t);
        return null != r && null != e ? h.filter(t => (function(e, t, n) {
            let {
                isPreviewingRoles: r = !1
            } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (!(r || e.published)) return !1;
            let l = n.permissionOverwrites[e.role_id];
            if ((0, u.Uj)(n, l)) return !0;
            let s = a.A.getEveryoneRole(t),
                o = null != s && !(0, i._m)(s, d.xBc.VIEW_CHANNEL),
                c = (0, u.AN)(n, n.permissionOverwrites[t.id]),
                h = a.A.getRole(t.id, e.role_id);
            return o && !c && null != h && (0, u.iR)(h) && !(0, u.AN)(n, l)
        })(t, r, e, {
            isPreviewingRoles: c
        })) : []
    }, [t, n, h])
}