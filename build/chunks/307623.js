/** Chunk was on 98865 **/
/** chunk id: 307623, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(435183),
    o = n(843472),
    s = n(608226),
    c = n(969043),
    u = n(715757),
    d = n(456874),
    f = n(961350),
    A = n(576705),
    b = n(661191),
    p = n(652215),
    v = n(985018);

function g(e) {
    let t = e.isForumPost(),
        n = (0, i.bG)([f.default], () => e.isOwner(f.default.getId()), [e]),
        g = (0, u.V)(e),
        {
            canManageChannel: h,
            canAccessChannel: O
        } = (0, i.cf)([A.A], () => ({
            canAccessChannel: A.A.can(e.accessPermissions, e),
            canManageChannel: A.A.can(e.isThread() ? p.xBc.MANAGE_THREADS : p.xBc.MANAGE_CHANNELS, e)
        }), [e]),
        m = (0, i.bG)([d.A], () => {
            var t;
            return null != (t = d.A.getCount(e.id)) ? t : 0
        }, [e.id]),
        {
            firstMessage: y
        } = (0, i.bG)([c.A], () => c.A.getMessage(e.id), [e.id]),
        _ = g && h && null == y,
        j = t && (h || n && m < 1 || _),
        C = t && n && !h && m > 0 && null != y;
    return O && (!g || _) && (h || j || C) ? (0, r.jsx)(l.Drp, {
        id: "delete-channel",
        label: e.type === p.rbe.GUILD_CATEGORY ? v.intl.string(v.t.ifbXnL) : e.isForumPost() ? j ? v.intl.string(v.t.nEOg1N) : v.intl.string(v.t.xwMqD7) : e.isThread() ? v.intl.string(v.t.H7vTe2) : v.intl.string(v.t["8D8Rsb"]),
        color: "danger",
        action: () => {
            (0, s.O)(e, function() {
                C ? o.A.deleteMessage(e.id, b.default.castChannelIdAsMessageId(e.id)) : a.Ay.deleteChannel(e.id)
            })
        }
    }) : null
}