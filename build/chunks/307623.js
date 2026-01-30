/** chunk id: 307623, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(435183),
    o = n(843472),
    c = n(608226),
    s = n(969043),
    u = n(715757),
    d = n(456874),
    f = n(961350),
    A = n(576705),
    p = n(661191),
    b = n(652215),
    v = n(985018);

function h(e) {
    let t = e.isForumPost(),
        n = (0, i.bG)([f.default], () => e.isOwner(f.default.getId()), [e]),
        h = (0, u.V)(e),
        {
            canManageChannel: g,
            canAccessChannel: O
        } = (0, i.cf)([A.A], () => ({
            canAccessChannel: A.A.can(e.accessPermissions, e),
            canManageChannel: A.A.can(e.isThread() ? b.xBc.MANAGE_THREADS : b.xBc.MANAGE_CHANNELS, e)
        }), [e]),
        y = (0, i.bG)([d.A], () => {
            var t;
            return null != (t = d.A.getCount(e.id)) ? t : 0
        }, [e.id]),
        {
            firstMessage: m
        } = (0, i.bG)([s.A], () => s.A.getMessage(e.id), [e.id]),
        _ = h && g && null == m,
        C = t && (g || n && y < 1 || _),
        E = t && n && !g && y > 0 && null != m;
    return O && (!h || _) && (g || C || E) ? (0, r.jsx)(l.Drp, {
        id: "delete-channel",
        label: e.type === b.rbe.GUILD_CATEGORY ? v.intl.string(v.t.ifbXnL) : e.isForumPost() ? C ? v.intl.string(v.t.nEOg1N) : v.intl.string(v.t.xwMqD7) : e.isThread() ? v.intl.string(v.t.H7vTe2) : v.intl.string(v.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, c.O)(e, function() {
                E ? o.A.deleteMessage(e.id, p.default.castChannelIdAsMessageId(e.id)) : a.Ay.deleteChannel(e.id)
            })
        }
    }) : null
}