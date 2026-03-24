/** chunk id: 504139 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => c
});
var n = i(544420),
    s = i(684013),
    a = i(742984),
    l = i(471024),
    r = i(684748),
    o = i(672396),
    d = i(985018);

function c(e, t, i, c, u) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        _ = u.session_id;
    if (null == _) return null;
    let {
        icon: p,
        title: f,
        body: m
    } = (0, a.TB)(e, t, i), {
        trackView: g,
        trackClick: A
    } = (0, r.Y)(o.KS.ActivityInvite, {
        notif_type: o.KS.ActivityInvite,
        notif_user_id: i.id,
        message_id: t.id,
        message_type: t.type,
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type,
        activity_type: h,
        activity_name: u.name
    });
    return {
        icon: p,
        title: f,
        body: m,
        hint: e => (0, l.sI)(e, (0, r.J)(), d.t.aB5xLy),
        onNotificationShow: () => {
            g()
        },
        confirmText: d.intl.string(d.t.VJlc0S),
        onConfirmClick: (a, l) => {
            n.A.join({
                userId: i.id,
                sessionId: _,
                applicationId: c.id,
                channelId: e.id,
                messageId: t.id
            }), s.A.updateNotificationStatus(l), A("join")
        },
        onDismissClick: () => {
            A("dismiss")
        }
    }
}