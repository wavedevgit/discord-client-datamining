/** Chunk was on 86901 **/
/** chunk id: 848977, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(334738),
    o = n(435470),
    c = n(970278),
    s = n(152007),
    u = n(95701),
    d = n(769765),
    f = n(222823),
    A = n(652215),
    p = n(985018);

function b(e) {
    let t, n, b = (t = (0, o.ed)(e.guild_id, e.id), n = (0, i.bG)([f.Ay, d.A, c.A, s.A], () => {
        if (e.isForumPost()) return f.Ay.isForumPostUnread(e.id);
        if (e.type !== A.rbe.GUILD_CATEGORY) return f.Ay.hasUnreadOrMentions(e.id);
        {
            let t = d.A.getCategories(e.getGuildId());
            if (null == t[e.id]) return !1;
            if (t[e.id].some(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, u.Z_)(t.type) && f.Ay.hasUnreadOrMentions(t.id)
                })) return !0;
            let n = new Set(t[e.id].map(e => e.channel.id)),
                r = c.A.getThreadsForGuild(e.guild_id);
            for (let e in r)
                if (n.has(e)) {
                    for (let t in r[e])
                        if (s.A.hasJoined(t) && !s.A.isMuted(t) && f.Ay.hasUnreadOrMentions(t)) return !0
                } return !1
        }
    }, [e]), e.isForumLikeChannel() ? t > 0 : n);
    return (0, r.jsx)(l.Drp, {
        id: "mark-channel-read",
        label: p.intl.string(p.t.e6RscS),
        action: function() {
            (0, a.hS)(e, {
                section: A.JJy.CHANNEL_CONTEXT_MENU,
                object: A.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: A.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !b
    })
}