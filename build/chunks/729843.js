/** chunk id: 729843 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => m
});
var n = i(387755),
    s = i(684013),
    a = i(956793),
    l = i(571694),
    r = i(47167),
    o = i(471024),
    d = i(621436),
    c = i(994500),
    u = i(287809),
    h = i(684748),
    _ = i(652215),
    p = i(672396),
    f = i(985018);

function m(e) {
    let t = (0, r.m1)(e, u.default, c.A),
        i = f.intl.string(f.t.ssrVzG),
        m = (0, l.Y)(e),
        g = (0, d.A)(e),
        {
            trackView: A,
            trackClick: x
        } = (0, h.Y)(p.KS.IncomingCall, {
            notif_type: p.KS.IncomingCall,
            notif_user_id: g,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: m,
        title: t,
        body: i,
        hint: e => (0, o.sI)(e, (0, h.J)(), f.t.Odi54y),
        confirmText: f.intl.string(f.t["0D/6Rz"]),
        cancelText: f.intl.string(f.t.BVN4pL),
        onNotificationShow: () => {
            A()
        },
        onConfirmClick: () => {
            if (_.kvI.CALLABLE.has(e.type)) s.A.callPrivateChannel(e.id);
            else {
                if (e.type !== _.rbe.GUILD_VOICE) return;
                a.default.selectVoiceChannel(e.id)
            }
            x("join"), s.A.track(_.HAw.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: e.guild_id,
                channel_id: e.id,
                video_enabled: !1
            })
        },
        onCancelClick: () => {
            n.A.stopRinging(e.id), x("decline")
        },
        onDismissClick: () => {
            x("dismiss")
        }
    }
}