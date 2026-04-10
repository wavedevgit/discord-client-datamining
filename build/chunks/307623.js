/** chunk id: 307623 params = (module,exports,require) **/
i.d(n, {
    A: () => p
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(435183),
    s = i(843472),
    d = i(608226),
    o = i(969043),
    u = i(715757),
    c = i(456874),
    h = i(961350),
    A = i(576705),
    g = i(661191),
    b = i(652215),
    m = i(985018);

function p(t) {
    let n = t.isForumPost(),
        i = (0, r.bG)([h.default], () => t.isOwner(h.default.getId()), [t]),
        p = (0, u.V)(t),
        {
            canManageChannel: f,
            canAccessChannel: j
        } = (0, r.cf)([A.A], () => ({
            canAccessChannel: A.A.can(t.accessPermissions, t),
            canManageChannel: A.A.can(t.isThread() ? b.xBc.MANAGE_THREADS : b.xBc.MANAGE_CHANNELS, t)
        }), [t]),
        v = (0, r.bG)([c.A], () => c.A.getCount(t.id) ?? 0, [t.id]),
        {
            firstMessage: x
        } = (0, r.bG)([o.A], () => o.A.getMessage(t.id), [t.id]),
        C = p && f && null == x,
        D = n && (f || i && v < 1 || C),
        _ = n && i && !f && v > 0 && null != x;
    return j && (!p || C) && (f || D || _) ? (0, e.jsx)(l.Drp, {
        id: "delete-channel",
        label: t.type === b.rbe.GUILD_CATEGORY ? m.intl.string(m.t.ifbXnL) : t.isForumPost() ? D ? m.intl.string(m.t.nEOg1N) : m.intl.string(m.t.xwMqD7) : t.isThread() ? m.intl.string(m.t.H7vTe2) : m.intl.string(m.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, d.O)(t, function() {
                _ ? s.A.deleteMessage(t.id, g.default.castChannelIdAsMessageId(t.id)) : a.Ay.deleteChannel(t.id)
            })
        }
    }) : null
}