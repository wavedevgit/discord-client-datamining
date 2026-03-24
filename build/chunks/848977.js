/** chunk id: 848977 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(334738),
    d = n(435470),
    o = n(970278),
    u = n(152007),
    s = n(95701),
    c = n(769765),
    f = n(222823),
    A = n(652215),
    h = n(985018);

function _(e) {
    let t, n, _ = (t = (0, d.ed)(e.guild_id, e.id), n = (0, r.bG)([f.Ay, c.A, o.A, u.A], () => {
        if (e.isForumPost()) return f.Ay.isForumPostUnread(e.id);
        if (e.type !== A.rbe.GUILD_CATEGORY) return f.Ay.hasUnreadOrMentions(e.id);
        {
            let t = c.A.getCategories(e.getGuildId());
            if (null == t[e.id]) return !1;
            let n = t[e.id].filter(e => {
                let {
                    channel: t
                } = e;
                return (0, s.Z_)(t.type)
            });
            if (n.some(e => {
                    let {
                        channel: t
                    } = e;
                    return f.Ay.hasUnreadOrMentions(t.id)
                })) return !0;
            for (let {
                    channel: t
                }
                of n) {
                let n = t.guild_id ?? e.guild_id,
                    i = o.A.getThreadsForParent(n, t.id);
                for (let e in i)
                    if (u.A.hasJoined(e) && !u.A.isMuted(e) && f.Ay.hasUnreadOrMentions(e)) return !0
            }
            return !1
        }
    }, [e]), e.isForumLikeChannel() ? t > 0 : n);
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
        disabled: !_
    })
}