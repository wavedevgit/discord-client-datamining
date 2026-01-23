/** Chunk was on 84018 **/
/** chunk id: 729843, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var i = n(387755),
    r = n(684013),
    s = n(956793),
    l = n(571694),
    o = n(47167),
    a = n(471024),
    c = n(621436),
    d = n(994500),
    u = n(287809),
    h = n(684748),
    p = n(652215),
    f = n(672396),
    g = n(985018);

function y(e) {
    let t = (0, o.m1)(e, u.default, d.A),
        n = g.intl.string(g.t.ssrVzG),
        y = (0, l.Y)(e),
        A = (0, c.A)(e),
        {
            trackView: m,
            trackClick: b
        } = (0, h.Y)(f.KS.IncomingCall, {
            notif_type: f.KS.IncomingCall,
            notif_user_id: A,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: y,
        title: t,
        body: n,
        hint: e => (0, a.sI)(e, (0, h.J)(), g.t.Odi54y),
        confirmText: g.intl.string(g.t["0D/6Rz"]),
        cancelText: g.intl.string(g.t.BVN4pL),
        onNotificationShow: () => {
            m()
        },
        onConfirmClick: () => {
            if (p.kvI.CALLABLE.has(e.type)) r.A.callPrivateChannel(e.id);
            else {
                if (e.type !== p.rbe.GUILD_VOICE) return;
                s.default.selectVoiceChannel(e.id)
            }
            b("join"), r.A.track(p.HAw.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: e.guild_id,
                channel_id: e.id,
                video_enabled: !1
            })
        },
        onCancelClick: () => {
            i.A.stopRinging(e.id), b("decline")
        },
        onDismissClick: () => {
            b("dismiss")
        }
    }
}