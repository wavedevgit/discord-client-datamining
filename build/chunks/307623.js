/** chunk id: 307623 params = (module,exports,require) **/
e.d(n, {
    A: () => g
});
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    r = e(435183),
    d = e(843472),
    s = e(608226),
    o = e(969043),
    u = e(715757),
    c = e(456874),
    f = e(961350),
    h = e(576705),
    A = e(661191),
    b = e(652215),
    p = e(985018);

function g(t) {
    let n = t.isForumPost(),
        e = (0, l.bG)([f.default], () => t.isOwner(f.default.getId()), [t]),
        g = (0, u.V)(t),
        {
            canManageChannel: v,
            canAccessChannel: C
        } = (0, l.cf)([h.A], () => ({
            canAccessChannel: h.A.can(t.accessPermissions, t),
            canManageChannel: h.A.can(t.isThread() ? b.xBc.MANAGE_THREADS : b.xBc.MANAGE_CHANNELS, t)
        }), [t]),
        _ = (0, l.bG)([c.A], () => c.A.getCount(t.id) ?? 0, [t.id]),
        {
            firstMessage: E
        } = (0, l.bG)([o.A], () => o.A.getMessage(t.id), [t.id]),
        m = g && v && null == E,
        O = n && (v || e && _ < 1 || m),
        R = n && e && !v && _ > 0 && null != E;
    return C && (!g || m) && (v || O || R) ? (0, i.jsx)(a.Drp, {
        id: "delete-channel",
        label: t.type === b.rbe.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnL) : t.isForumPost() ? O ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqD7) : t.isThread() ? p.intl.string(p.t.H7vTe2) : p.intl.string(p.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, s.O)(t, function() {
                R ? d.A.deleteMessage(t.id, A.default.castChannelIdAsMessageId(t.id)) : r.Ay.deleteChannel(t.id)
            })
        }
    }) : null
}