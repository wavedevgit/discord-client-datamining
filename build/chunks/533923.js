/** chunk id: 533923, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(684013),
    r = n(334738),
    l = n(258585),
    a = n(72432),
    o = n(929921),
    s = n(592598),
    u = n(395011),
    c = n(581730),
    d = n(672396),
    h = n(652215),
    p = n(753070),
    f = n(985018),
    g = n(426127);

function m(e, t, n, m) {
    if (s.A.isNotificationDisabled(d.KS.RequestToStream)) return null;
    let A = t.username,
        y = f.intl.format(g.default.jTbTAF, {
            username: "",
            game: n.name
        }),
        O = t.getAvatarURL(e.guild_id, 80),
        {
            trackView: v,
            trackClick: b
        } = (0, c.Y9)(d.KS.RequestToStream, {
            notif_type: d.KS.RequestToStream,
            notif_user_id: t.id,
            activity_type: h.xL.STREAM_REQUEST,
            activity_name: m.name
        });
    return {
        icon: O,
        title: A,
        body: y,
        confirmText: f.intl.string(g.default.UGbmBp),
        cancelText: f.intl.string(f.t["tpXzJ+"]),
        onNotificationShow: () => {
            v()
        },
        onConfirmClick: (e, t) => {
            let n = o.A.getState().preset;
            if (n === p.jQ.PRESET_DOCUMENTS) {
                let {
                    allowAutoQuality: e
                } = (0, l.eO)({
                    location: "requestToStreamNotification"
                });
                n = e ? p.jQ.PRESET_AUTO : p.jQ.PRESET_VIDEO
            }(0, a.A)(u.A.getTargetPID(), {
                preset: n
            }), b("request-to-stream"), i.A.updateNotificationStatus(t)
        },
        onCancelClick: (t, n) => {
            (0, r.ack)(e.id, {
                section: h.JJy.OVERLAY,
                object: h.ZSU.ACK_DECLINE_REQUEST_TO_STREAM,
                objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
            }, !0, !0), i.A.updateNotificationStatus(n), b("decline")
        },
        onDismissClick: () => {
            b("dismiss")
        }
    }
}