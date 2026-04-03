/** chunk id: 996797 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(308368),
    s = n(684013),
    a = n(334738),
    l = n(471024),
    r = n(256415),
    o = n(684748),
    d = n(652215),
    c = n(672396),
    u = n(985018);

function h(e, t, n, h) {
    let p = t.username,
        f = u.intl.format(u.t.VDODnv, {
            username: "",
            game: n.name
        }),
        A = t.getAvatarURL(e.guild_id, 80),
        {
            trackView: _,
            trackClick: g
        } = (0, o.Y)(c.KS.ActivityInvite, {
            notif_type: c.KS.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.xL.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        icon: A,
        title: p,
        body: f,
        hint: e => (0, l.sI)(e, (0, o.J)(), u.t.Odi54y),
        confirmText: u.intl.string(u.t["fgP/wX"]),
        cancelText: u.intl.string(u.t["tpXzJ+"]),
        onNotificationShow: () => {
            _()
        },
        onConfirmClick: (t, n) => {
            i.A.sendActivityInvite({
                channelId: e.id,
                type: d.xL.JOIN,
                activity: h,
                location: r.default.isInstanceLocked() ? d.ThZ.LOCKED_OVERLAY : d.ThZ.UNLOCKED_OVERLAY
            }), g("join"), s.A.updateNotificationStatus(n)
        },
        onCancelClick: (t, n) => {
            (0, a.ack)(e.id, {
                section: d.JJy.OVERLAY,
                object: d.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                objectType: d.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
            }, !0, !0), s.A.updateNotificationStatus(n), g("decline")
        },
        onDismissClick: () => {
            g("dismiss")
        }
    }
}