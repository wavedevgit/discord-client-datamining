/** chunk id: 996797 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => h
});
var n = i(308368),
    s = i(684013),
    a = i(334738),
    l = i(471024),
    r = i(256415),
    o = i(684748),
    d = i(652215),
    c = i(672396),
    u = i(985018);

function h(e, t, i, h) {
    let _ = t.username,
        p = u.intl.format(u.t.VDODnv, {
            username: "",
            game: i.name
        }),
        f = t.getAvatarURL(e.guild_id, 80),
        {
            trackView: m,
            trackClick: g
        } = (0, o.Y)(c.KS.ActivityInvite, {
            notif_type: c.KS.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.xL.JOIN_REQUEST,
            activity_name: i.name
        });
    return {
        icon: f,
        title: _,
        body: p,
        hint: e => (0, l.sI)(e, (0, o.J)(), u.t.Odi54y),
        confirmText: u.intl.string(u.t["fgP/wX"]),
        cancelText: u.intl.string(u.t["tpXzJ+"]),
        onNotificationShow: () => {
            m()
        },
        onConfirmClick: (t, i) => {
            n.A.sendActivityInvite({
                channelId: e.id,
                type: d.xL.JOIN,
                activity: h,
                location: r.default.isInstanceLocked() ? d.ThZ.LOCKED_OVERLAY : d.ThZ.UNLOCKED_OVERLAY
            }), g("join"), s.A.updateNotificationStatus(i)
        },
        onCancelClick: (t, i) => {
            (0, a.ack)(e.id, {
                section: d.JJy.OVERLAY,
                object: d.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                objectType: d.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
            }, !0, !0), s.A.updateNotificationStatus(i), g("decline")
        },
        onDismissClick: () => {
            g("dismiss")
        }
    }
}