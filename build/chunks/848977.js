/** chunk id: 848977, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(334738),
    s = n(435470),
    o = n(970278),
    d = n(152007),
    u = n(95701),
    c = n(769765),
    A = n(222823),
    f = n(652215),
    g = n(985018);

function b(e) {
    let t, n, b = (t = (0, s.ed)(e.guild_id, e.id), n = (0, r.bG)([A.Ay, c.A, o.A, d.A], () => {
        if (e.isForumPost()) return A.Ay.isForumPostUnread(e.id);
        if (e.type !== f.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(e.id);
        {
            let t = c.A.getCategories(e.getGuildId());
            if (null == t[e.id]) return !1;
            if (t[e.id].some(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, u.Z_)(t.type) && A.Ay.hasUnreadOrMentions(t.id)
                })) return !0;
            let n = new Set(t[e.id].map(e => e.channel.id)),
                i = o.A.getThreadsForGuild(e.guild_id);
            for (let e in i)
                if (n.has(e)) {
                    for (let t in i[e])
                        if (d.A.hasJoined(t) && !d.A.isMuted(t) && A.Ay.hasUnreadOrMentions(t)) return !0
                } return !1
        }
    }, [e]), e.isForumLikeChannel() ? t > 0 : n);
    return (0, i.jsx)(l.Drp, {
        id: "mark-channel-read",
        label: g.intl.string(g.t.e6RscS),
        action: function() {
            (0, a.hS)(e, {
                section: f.JJy.CHANNEL_CONTEXT_MENU,
                object: f.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: f.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !b
    })
}