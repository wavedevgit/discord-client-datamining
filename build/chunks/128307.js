/** chunk id: 128307, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(308368),
    r = n(684013),
    l = n(334738),
    a = n(592598),
    o = n(481484),
    s = n(581730),
    u = n(672396),
    c = n(652215),
    d = n(985018);

function h(e, t, n, h) {
    if (a.A.isNotificationDisabled(u.KS.ActivityInvite)) return null;
    let p = t.username,
        f = d.intl.format(d.t.VDODnv, {
            username: "",
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        {
            trackView: m,
            trackClick: A
        } = (0, s.Y9)(u.KS.ActivityInvite, {
            notif_type: u.KS.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.xL.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: g,
        title: p,
        body: f,
        confirmText: d.intl.string(d.t["fgP/wX"]),
        cancelText: d.intl.string(d.t["tpXzJ+"]),
        onNotificationShow: () => {
            m()
        },
        onConfirmClick: (t, n) => {
            i.A.sendActivityInvite({
                channelId: e.id,
                type: c.xL.JOIN,
                activity: h,
                location: (0, o.y)() ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY
            }), A("join"), r.A.updateNotificationStatus(n)
        },
        onCancelClick: (t, n) => {
            (0, l.ack)(e.id, {
                section: c.JJy.OVERLAY,
                object: c.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                objectType: c.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
            }, !0, !0), r.A.updateNotificationStatus(n), A("decline")
        },
        onDismissClick: () => {
            A("dismiss")
        }
    }
}