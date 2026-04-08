/** chunk id: 307623 params = (module,exports,require) **/
e.d(t, {
    A: () => E
});
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    r = e(435183),
    s = e(843472),
    o = e(608226),
    d = e(969043),
    u = e(715757),
    c = e(456874),
    h = e(961350),
    A = e(576705),
    f = e(661191),
    _ = e(652215),
    b = e(985018);

function E(n) {
    let t = n.isForumPost(),
        e = (0, l.bG)([h.default], () => n.isOwner(h.default.getId()), [n]),
        E = (0, u.V)(n),
        {
            canManageChannel: g,
            canAccessChannel: p
        } = (0, l.cf)([A.A], () => ({
            canAccessChannel: A.A.can(n.accessPermissions, n),
            canManageChannel: A.A.can(n.isThread() ? _.xBc.MANAGE_THREADS : _.xBc.MANAGE_CHANNELS, n)
        }), [n]),
        v = (0, l.bG)([c.A], () => c.A.getCount(n.id) ?? 0, [n.id]),
        {
            firstMessage: C
        } = (0, l.bG)([d.A], () => d.A.getMessage(n.id), [n.id]),
        O = E && g && null == C,
        m = t && (g || e && v < 1 || O),
        I = t && e && !g && v > 0 && null != C;
    return p && (!E || O) && (g || m || I) ? (0, i.jsx)(a.Drp, {
        id: "delete-channel",
        label: n.type === _.rbe.GUILD_CATEGORY ? b.intl.string(b.t.ifbXnL) : n.isForumPost() ? m ? b.intl.string(b.t.nEOg1N) : b.intl.string(b.t.xwMqD7) : n.isThread() ? b.intl.string(b.t.H7vTe2) : b.intl.string(b.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, o.O)(n, function() {
                I ? s.A.deleteMessage(n.id, f.default.castChannelIdAsMessageId(n.id)) : r.Ay.deleteChannel(n.id)
            })
        }
    }) : null
}