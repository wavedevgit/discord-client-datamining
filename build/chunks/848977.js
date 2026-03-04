/** chunk id: 848977, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => f
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(334738),
    d = e(435470),
    s = e(970278),
    o = e(152007),
    c = e(95701),
    u = e(769765),
    h = e(222823),
    A = e(652215),
    g = e(985018);

function f(n) {
    let t, e, f = (t = (0, d.ed)(n.guild_id, n.id), e = (0, l.bG)([h.Ay, u.A, s.A, o.A], () => {
        if (n.isForumPost()) return h.Ay.isForumPostUnread(n.id);
        if (n.type !== A.rbe.GUILD_CATEGORY) return h.Ay.hasUnreadOrMentions(n.id);
        {
            let t = u.A.getCategories(n.getGuildId());
            if (null == t[n.id]) return !1;
            if (t[n.id].some(n => {
                    let {
                        channel: t
                    } = n;
                    return (0, c.Z_)(t.type) && h.Ay.hasUnreadOrMentions(t.id)
                })) return !0;
            let e = new Set(t[n.id].map(n => n.channel.id)),
                i = s.A.getThreadsForGuild(n.guild_id);
            for (let n in i)
                if (e.has(n)) {
                    for (let t in i[n])
                        if (o.A.hasJoined(t) && !o.A.isMuted(t) && h.Ay.hasUnreadOrMentions(t)) return !0
                } return !1
        }
    }, [n]), n.isForumLikeChannel() ? t > 0 : e);
    return (0, i.jsx)(r.Drp, {
        id: "mark-channel-read",
        label: g.intl.string(g.t.e6RscS),
        action: function() {
            (0, a.hS)(n, {
                section: A.JJy.CHANNEL_CONTEXT_MENU,
                object: A.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: A.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !f
    })
}