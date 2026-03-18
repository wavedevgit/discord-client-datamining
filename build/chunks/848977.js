/** chunk id: 848977 params = (module,exports,require) **/
t.d(e, {
    A: () => f
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(334738),
    c = t(435470),
    d = t(970278),
    o = t(152007),
    s = t(95701),
    u = t(769765),
    A = t(222823),
    h = t(652215),
    _ = t(985018);

function f(n) {
    let e, t, f = (e = (0, c.ed)(n.guild_id, n.id), t = (0, r.bG)([A.Ay, u.A, d.A, o.A], () => {
        if (n.isForumPost()) return A.Ay.isForumPostUnread(n.id);
        if (n.type !== h.rbe.GUILD_CATEGORY) return A.Ay.hasUnreadOrMentions(n.id);
        {
            let e = u.A.getCategories(n.getGuildId());
            if (null == e[n.id]) return !1;
            let t = e[n.id].filter(n => {
                let {
                    channel: e
                } = n;
                return (0, s.Z_)(e.type)
            });
            if (t.some(n => {
                    let {
                        channel: e
                    } = n;
                    return A.Ay.hasUnreadOrMentions(e.id)
                })) return !0;
            for (let {
                    channel: e
                }
                of t) {
                let t = e.guild_id ?? n.guild_id,
                    i = d.A.getThreadsForParent(t, e.id);
                for (let n in i)
                    if (o.A.hasJoined(n) && !o.A.isMuted(n) && A.Ay.hasUnreadOrMentions(n)) return !0
            }
            return !1
        }
    }, [n]), n.isForumLikeChannel() ? e > 0 : t);
    return (0, i.jsx)(l.Drp, {
        id: "mark-channel-read",
        label: _.intl.string(_.t.e6RscS),
        action: function() {
            (0, a.hS)(n, {
                section: h.JJy.CHANNEL_CONTEXT_MENU,
                object: h.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.AnalyticsObjectTypes.ACK_MANUAL
            })
        },
        disabled: !f
    })
}