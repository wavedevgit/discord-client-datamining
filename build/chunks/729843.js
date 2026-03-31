/** chunk id: 729843 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(387755),
    s = n(684013),
    a = n(956793),
    l = n(571694),
    r = n(47167),
    o = n(471024),
    d = n(621436),
    c = n(994500),
    u = n(287809),
    h = n(684748),
    p = n(652215),
    _ = n(672396),
    f = n(985018);

function A(e) {
    let t = (0, r.m1)(e, u.default, c.A),
        n = f.intl.string(f.t.ssrVzG),
        A = (0, l.Y)(e),
        g = (0, d.A)(e),
        {
            trackView: m,
            trackClick: x
        } = (0, h.Y)(_.KS.IncomingCall, {
            notif_type: _.KS.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: A,
        title: t,
        body: n,
        hint: e => (0, o.sI)(e, (0, h.J)(), f.t.Odi54y),
        confirmText: f.intl.string(f.t["0D/6Rz"]),
        cancelText: f.intl.string(f.t.BVN4pL),
        onNotificationShow: () => {
            m()
        },
        onConfirmClick: () => {
            if (p.kvI.CALLABLE.has(e.type)) s.A.callPrivateChannel(e.id);
            else {
                if (e.type !== p.rbe.GUILD_VOICE) return;
                a.default.selectVoiceChannel(e.id)
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