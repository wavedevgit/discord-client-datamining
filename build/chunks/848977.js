/** chunk id: 848977 params = (module,exports,require) **/
i.d(e, {
    A: () => _
});
var t = i(627968);
i(64700);
var r = i(311907),
    a = i(397927),
    l = i(334738),
    c = i(435470),
    d = i(970278),
    o = i(152007),
    s = i(95701),
    u = i(769765),
    A = i(222823),
    h = i(652215),
    f = i(985018);

function _(n) {
    let e, i, _ = (e = (0, c.ed)(n.guild_id, n.id), i = (0, r.bG)([A.Ay, u.A, d.A, o.A], () => {
        if (n.isForumPost()) return A.Ay.isForumPostUnread(n.id);
        if (n.type !== h.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(n.id);
        {
            let e = u.A.getCategories(n.getGuildId());
            if (null == e[n.id]) return !1;
            if (e[n.id].some(n => {
                    let {
                        channel: e
                    } = n;
                    return (0, s.Z_)(e.type) && A.Ay.hasUnreadOrMentions(e.id)
                })) return !0;
            let i = new Set(e[n.id].map(n => n.channel.id)),
                t = d.A.getThreadsForGuild(n.guild_id);
            for (let n in t)
                if (i.has(n)) {
                    for (let e in t[n])
                        if (o.A.hasJoined(e) && !o.A.isMuted(e) && A.Ay.hasUnreadOrMentions(e)) return !0
                } return !1
        }
    }, [n]), n.isForumLikeChannel() ? e > 0 : i);
    return (0, t.jsx)(a.Drp, {
        id: "mark-channel-read",
        label: f.intl.string(f.t.e6RscS),
        action: function() {
            (0, l.hS)(n, {
                section: h.JJy.CHANNEL_CONTEXT_MENU,
                object: h.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !_
    })
}