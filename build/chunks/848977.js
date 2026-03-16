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
    A = t(652215),
    h = t(985018);

function v(e) {
    let n, t, v = (n = (0, d.ed)(e.guild_id, e.id), t = (0, r.bG)([f.Ay, c.A, o.A, u.A], () => {
        if (e.isForumPost()) return f.Ay.isForumPostUnread(e.id);
        if (e.type !== A.rbe.GUILD_CATEGORY) return f.Ay.hasUnreadOrMentions(e.id);
        {
            let n = c.A.getCategories(e.getGuildId());
            if (null == n[e.id]) return !1;
            let t = n[e.id].filter(e => {
                let {
                    channel: n
                } = e;
                return (0, s.Z_)(n.type)
            });
            if (t.some(e => {
                    let {
                        channel: n
                    } = e;
                    return f.Ay.hasUnreadOrMentions(n.id)
                })) return !0;
            for (let {
                    channel: n
                }
                of t) {
                let t = n.guild_id ?? e.guild_id,
                    i = o.A.getThreadsForParent(t, n.id);
                for (let e in i)
                    if (u.A.hasJoined(e) && !u.A.isMuted(e) && f.Ay.hasUnreadOrMentions(e)) return !0
            }
            return !1
        }
    }, [e]), e.isForumLikeChannel() ? n > 0 : t);
    return (0, i.jsx)(l.Drp, {
        id: "mark-channel-read",
        label: h.intl.string(h.t.e6RscS),
        action: function() {
            (0, a.hS)(e, {
                section: A.JJy.CHANNEL_CONTEXT_MENU,
                object: A.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: A.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !v
    })
}