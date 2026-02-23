/** chunk id: 848977, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => f
});
var i = t(627968);
t(64700);
var r = t(311907),
    a = t(397927),
    l = t(334738),
    c = t(435470),
    s = t(970278),
    o = t(152007),
    d = t(95701),
    A = t(769765),
    u = t(222823),
    h = t(652215),
    _ = t(985018);

function f(n) {
    let e, t, f = (e = (0, c.ed)(n.guild_id, n.id), t = (0, r.bG)([u.Ay, A.A, s.A, o.A], () => {
        if (n.isForumPost()) return u.Ay.isForumPostUnread(n.id);
        if (n.type !== h.rbe.GUILD_CATEGORY) return u.Ay.hasUnreadOrMentions(n.id);
        {
            let e = A.A.getCategories(n.getGuildId());
            if (null == e[n.id]) return !1;
            if (e[n.id].some(n => {
                    let {
                        channel: e
                    } = n;
                    return (0, d.Z_)(e.type) && u.Ay.hasUnreadOrMentions(e.id)
                })) return !0;
            let t = new Set(e[n.id].map(n => n.channel.id)),
                i = s.A.getThreadsForGuild(n.guild_id);
            for (let n in i)
                if (t.has(n)) {
                    for (let e in i[n])
                        if (o.A.hasJoined(e) && !o.A.isMuted(e) && u.Ay.hasUnreadOrMentions(e)) return !0
                } return !1
        }
    }, [n]), n.isForumLikeChannel() ? e > 0 : t);
    return (0, i.jsx)(a.Drp, {
        id: "mark-channel-read",
        label: _.intl.string(_.t.e6RscS),
        action: function() {
            (0, l.hS)(n, {
                section: h.JJy.CHANNEL_CONTEXT_MENU,
                object: h.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !f
    })
}