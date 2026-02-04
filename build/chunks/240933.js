/** chunk id: 240933, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(544420),
    r = n(684013),
    l = n(742984),
    a = n(592598),
    o = n(581730),
    s = n(672396),
    u = n(985018);

function c(e, t, n, c, d) {
    if (a.A.isNotificationDisabled(s.KS.ActivityInvite) || null == t.activity) return null;
    let h = t.activity.type,
        p = c.session_id;
    if (null == p) return null;
    let {
        icon: f,
        title: g,
        body: m
    } = (0, l.TB)(e, t, n), {
        trackView: A,
        trackClick: y
    } = (0, o.Y9)(s.KS.ActivityInvite, {
        notif_type: s.KS.ActivityInvite,
        notif_user_id: n.id,
        message_id: t.id,
        message_type: t.type,
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type,
        activity_type: h,
        activity_name: c.name
    });
    return {
        icon: f,
        title: g,
        body: m,
        onNotificationShow: () => {
            A()
        },
        confirmText: u.intl.string(u.t.VJlc0S),
        onConfirmClick: (l, a) => {
            i.A.join({
                userId: n.id,
                sessionId: p,
                applicationId: d,
                channelId: e.id,
                messageId: t.id
            }), r.A.updateNotificationStatus(a), y("join")
        },
        onDismissClick: () => {
            y("dismiss")
        }
    }
}