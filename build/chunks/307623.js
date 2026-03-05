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
    m = i(652215),
    b = i(985018);

function p(t) {
    let n = t.isForumPost(),
        i = (0, l.bG)([g.default], () => t.isOwner(g.default.getId()), [t]),
        p = (0, u.V)(t),
        {
            canManageChannel: f,
            canAccessChannel: v
        } = (0, l.cf)([A.A], () => ({
            canAccessChannel: A.A.can(t.accessPermissions, t),
            canManageChannel: A.A.can(t.isThread() ? m.xBc.MANAGE_THREADS : m.xBc.MANAGE_CHANNELS, t)
        }), [t]),
        j = (0, l.bG)([c.A], () => c.A.getCount(t.id) ?? 0, [t.id]),
        {
            firstMessage: _
        } = (0, l.bG)([o.A], () => o.A.getMessage(t.id), [t.id]),
        x = p && f && null == _,
        C = n && (f || i && j < 1 || x),
        D = n && i && !f && j > 0 && null != _;
    return v && (!p || x) && (f || C || D) ? (0, e.jsx)(r.Drp, {
        id: "delete-channel",
        label: t.type === m.rbe.GUILD_CATEGORY ? b.intl.string(b.t.ifbXnL) : t.isForumPost() ? C ? b.intl.string(b.t.nEOg1N) : b.intl.string(b.t.xwMqD7) : t.isThread() ? b.intl.string(b.t.H7vTe2) : b.intl.string(b.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, d.O)(t, function() {
                D ? s.A.deleteMessage(t.id, h.default.castChannelIdAsMessageId(t.id)) : a.Ay.deleteChannel(t.id)
            })
        }
    }) : null
}