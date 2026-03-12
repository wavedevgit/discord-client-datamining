/** chunk id: 307623 params = (module,exports,require) **/
i.d(n, {
    A: () => p
});
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(435183),
    s = i(843472),
    d = i(608226),
    o = i(969043),
    u = i(715757),
    c = i(456874),
    g = i(961350),
    A = i(576705),
    h = i(661191),
    b = i(652215),
    m = i(985018);

function p(t) {
    let n = t.isForumPost(),
        i = (0, l.bG)([g.default], () => t.isOwner(g.default.getId()), [t]),
        p = (0, u.V)(t),
        {
            canManageChannel: f,
            canAccessChannel: v
        } = (0, l.cf)([A.A], () => ({
            canAccessChannel: A.A.can(t.accessPermissions, t),
            canManageChannel: A.A.can(t.isThread() ? b.xBc.MANAGE_THREADS : b.xBc.MANAGE_CHANNELS, t)
        }), [t]),
        j = (0, l.bG)([c.A], () => c.A.getCount(t.id) ?? 0, [t.id]),
        {
            firstMessage: x
        } = (0, l.bG)([o.A], () => o.A.getMessage(t.id), [t.id]),
        C = p && f && null == x,
        _ = n && (f || i && j < 1 || C),
        D = n && i && !f && j > 0 && null != x;
    return v && (!p || C) && (f || _ || D) ? (0, e.jsx)(r.Drp, {
        id: "delete-channel",
        label: t.type === b.rbe.GUILD_CATEGORY ? m.intl.string(m.t.ifbXnL) : t.isForumPost() ? _ ? m.intl.string(m.t.nEOg1N) : m.intl.string(m.t.xwMqD7) : t.isThread() ? m.intl.string(m.t.H7vTe2) : m.intl.string(m.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, d.O)(t, function() {
                D ? s.A.deleteMessage(t.id, h.default.castChannelIdAsMessageId(t.id)) : a.Ay.deleteChannel(t.id)
            })
        }
    }) : null
}