/** chunk id: 729843 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(387755),
    s = n(684013),
    l = n(956793),
    a = n(571694),
    r = n(47167),
    o = n(471024),
    d = n(621436),
    c = n(994500),
    u = n(287809),
    h = n(684748),
    p = n(652215),
    f = n(672396),
    A = n(985018);

function _(e) {
    let t = (0, r.m1)(e, u.default, c.A),
        n = A.intl.string(A.t.ssrVzG),
        _ = (0, a.Y)(e),
        g = (0, d.A)(e),
        {
            trackView: m,
            trackClick: x
        } = (0, h.Y)(f.KS.IncomingCall, {
            notif_type: f.KS.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: _,
        title: t,
        body: n,
        hint: e => (0, o.sI)(e, (0, h.J)(), A.t.Odi54y),
        confirmText: A.intl.string(A.t["0D/6Rz"]),
        cancelText: A.intl.string(A.t.BVN4pL),
        onNotificationShow: () => {
            m()
        },
        onConfirmClick: () => {
            if (p.kvI.CALLABLE.has(e.type)) s.A.callPrivateChannel(e.id);
            else {
                if (e.type !== p.rbe.GUILD_VOICE) return;
                l.default.selectVoiceChannel(e.id)
            }
            x("join"), s.A.track(p.HAw.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: e.guild_id,
                channel_id: e.id,
                video_enabled: !1
            })
        },
        onCancelClick: () => {
            i.A.stopRinging(e.id), x("decline")
        },
        onDismissClick: () => {
            x("dismiss")
        }
    }
}