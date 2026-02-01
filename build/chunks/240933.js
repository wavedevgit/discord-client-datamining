/** chunk id: 240933, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(544420),
    r = n(684013),
    l = n(742984),
    a = n(592598),
    s = n(581730),
    o = n(672396),
    u = n(985018);

function c(e, t, n, c, d) {
    if (a.A.isNotificationDisabled(o.KS.ActivityInvite) || null == t.activity || null == c.id) return null;
    let h = t.activity.type,
        p = d.session_id;
    if (null == p) return null;
    let {
        icon: f,
        title: g,
        body: m
    } = (0, l.TB)(e, t, n), {
        trackView: y,
        trackClick: A
    } = (0, s.Y9)(o.KS.ActivityInvite, {
        notif_type: o.KS.ActivityInvite,
        notif_user_id: n.id,
        message_id: t.id,
        message_type: t.type,
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type,
        activity_type: h,
        activity_name: d.name
    });
    return {
        icon: f,
        title: g,
        body: m,
        onNotificationShow: () => {
            y()
        },
        confirmText: u.intl.string(u.t.VJlc0S),
        onConfirmClick: (l, a) => {
            var s;
            i.A.join({
                userId: n.id,
                sessionId: p,
                applicationId: null != (s = c.altId) ? s : c.id,
                channelId: e.id,
                messageId: t.id
            }), r.A.updateNotificationStatus(a), A("join")
        },
        onDismissClick: () => {
            A("dismiss")
        }
    }
}