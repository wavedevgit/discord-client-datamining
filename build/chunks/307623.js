/** chunk id: 307623, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => p
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(435183),
    d = e(843472),
    s = e(608226),
    o = e(969043),
    u = e(715757),
    c = e(456874),
    g = e(961350),
    A = e(576705),
    h = e(661191),
    b = e(652215),
    m = e(985018);

function p(t) {
    let n = t.isForumPost(),
        e = (0, l.bG)([g.default], () => t.isOwner(g.default.getId()), [t]),
        p = (0, u.V)(t),
        {
            canManageChannel: f,
            canAccessChannel: v
        } = (0, l.cf)([A.A], () => ({
            canAccessChannel: A.A.can(t.accessPermissions, t),
            canManageChannel: A.A.can(t.isThread() ? b.xBc.MANAGE_THREADS : b.xBc.MANAGE_CHANNELS, t)
        }), [t]),
        _ = (0, l.bG)([c.A], () => c.A.getCount(t.id) ?? 0, [t.id]),
        {
            firstMessage: j
        } = (0, l.bG)([o.A], () => o.A.getMessage(t.id), [t.id]),
        C = p && f && null == j,
        x = n && (f || e && _ < 1 || C),
        D = n && e && !f && _ > 0 && null != j;
    return v && (!p || C) && (f || x || D) ? (0, i.jsx)(r.Drp, {
        id: "delete-channel",
        label: t.type === b.rbe.GUILD_CATEGORY ? m.intl.string(m.t.ifbXnL) : t.isForumPost() ? x ? m.intl.string(m.t.nEOg1N) : m.intl.string(m.t.xwMqD7) : t.isThread() ? m.intl.string(m.t.H7vTe2) : m.intl.string(m.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, s.O)(t, function() {
                D ? d.A.deleteMessage(t.id, h.default.castChannelIdAsMessageId(t.id)) : a.Ay.deleteChannel(t.id)
            })
        }
    }) : null
}