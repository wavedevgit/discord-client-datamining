/** chunk id: 848977 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(334738),
    d = t(435470),
    o = t(970278),
    u = t(152007),
    s = t(95701),
    c = t(769765),
    f = t(222823),
    h = t(652215),
    A = t(985018);

function v(e) {
    let n, t, v = (n = (0, d.ed)(e.guild_id, e.id), t = (0, r.bG)([f.Ay, c.A, o.A, u.A], () => {
        if (e.isForumPost()) return f.Ay.isForumPostUnread(e.id);
        if (e.type !== h.rbe.GUILD_CATEGORY) return f.Ay.hasUnreadOrMentions(e.id);
        {
            let n = c.A.getCategories(e.getGuildId());
            if (null == n[e.id]) return !1;
            if (n[e.id].some(e => {
                    let {
                        channel: n
                    } = e;
                    return (0, s.Z_)(n.type) && f.Ay.hasUnreadOrMentions(n.id)
                })) return !0;
            let t = new Set(n[e.id].map(e => e.channel.id)),
                i = o.A.getThreadsForGuild(e.guild_id);
            for (let e in i)
                if (t.has(e)) {
                    for (let n in i[e])
                        if (u.A.hasJoined(n) && !u.A.isMuted(n) && f.Ay.hasUnreadOrMentions(n)) return !0
                } return !1
        }
    }, [e]), e.isForumLikeChannel() ? n > 0 : t);
    return (0, i.jsx)(l.Drp, {
        id: "mark-channel-read",
        label: A.intl.string(A.t.e6RscS),
        action: function() {
            (0, a.hS)(e, {
                section: h.JJy.CHANNEL_CONTEXT_MENU,
                object: h.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !v
    })
}