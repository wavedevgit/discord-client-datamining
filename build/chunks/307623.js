/** chunk id: 307623, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => v
});
var i = e(627968);
e(64700);
var a = e(311907),
    l = e(397927),
    r = e(435183),
    s = e(843472),
    d = e(608226),
    o = e(969043),
    u = e(715757),
    c = e(456874),
    A = e(961350),
    h = e(576705),
    f = e(661191),
    g = e(652215),
    p = e(985018);

function v(t) {
    let n = t.isForumPost(),
        e = (0, a.bG)([A.default], () => t.isOwner(A.default.getId()), [t]),
        v = (0, u.V)(t),
        {
            canManageChannel: b,
            canAccessChannel: m
        } = (0, a.cf)([h.A], () => ({
            canAccessChannel: h.A.can(t.accessPermissions, t),
            canManageChannel: h.A.can(t.isThread() ? g.xBc.MANAGE_THREADS : g.xBc.MANAGE_CHANNELS, t)
        }), [t]),
        C = (0, a.bG)([c.A], () => c.A.getCount(t.id) ?? 0, [t.id]),
        {
            firstMessage: _
        } = (0, a.bG)([o.A], () => o.A.getMessage(t.id), [t.id]),
        I = v && b && null == _,
        E = n && (b || e && C < 1 || I),
        j = n && e && !b && C > 0 && null != _;
    return m && (!v || I) && (b || E || j) ? (0, i.jsx)(l.Drp, {
        id: "delete-channel",
        label: t.type === g.rbe.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnL) : t.isForumPost() ? E ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqD7) : t.isThread() ? p.intl.string(p.t.H7vTe2) : p.intl.string(p.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, d.O)(t, function() {
                j ? s.A.deleteMessage(t.id, f.default.castChannelIdAsMessageId(t.id)) : r.Ay.deleteChannel(t.id)
            })
        }
    }) : null
}