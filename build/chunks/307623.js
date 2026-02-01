/** chunk id: 307623, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => v
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(435183),
    o = n(843472),
    s = n(608226),
    d = n(969043),
    u = n(715757),
    c = n(456874),
    A = n(961350),
    f = n(576705),
    g = n(661191),
    h = n(652215),
    p = n(985018);

function v(t) {
    let e = t.isForumPost(),
        n = (0, r.bG)([A.default], () => t.isOwner(A.default.getId()), [t]),
        v = (0, u.V)(t),
        {
            canManageChannel: b,
            canAccessChannel: m
        } = (0, r.cf)([f.A], () => ({
            canAccessChannel: f.A.can(t.accessPermissions, t),
            canManageChannel: f.A.can(t.isThread() ? h.xBc.MANAGE_THREADS : h.xBc.MANAGE_CHANNELS, t)
        }), [t]),
        _ = (0, r.bG)([c.A], () => {
            var e;
            return null != (e = c.A.getCount(t.id)) ? e : 0
        }, [t.id]),
        {
            firstMessage: C
        } = (0, r.bG)([d.A], () => d.A.getMessage(t.id), [t.id]),
        O = v && b && null == C,
        j = e && (b || n && _ < 1 || O),
        y = e && n && !b && _ > 0 && null != C;
    return m && (!v || O) && (b || j || y) ? (0, i.jsx)(l.Drp, {
        id: "delete-channel",
        label: t.type === h.rbe.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnL) : t.isForumPost() ? j ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqD7) : t.isThread() ? p.intl.string(p.t.H7vTe2) : p.intl.string(p.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, s.O)(t, function() {
                y ? o.A.deleteMessage(t.id, g.default.castChannelIdAsMessageId(t.id)) : a.Ay.deleteChannel(t.id)
            })
        }
    }) : null
}