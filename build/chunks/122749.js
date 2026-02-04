/** chunk id: 122749, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(387755),
    r = n(684013),
    l = n(956793),
    a = n(571694),
    o = n(47167),
    s = n(994500),
    u = n(287809),
    c = n(621436),
    d = n(581730),
    h = n(672396),
    p = n(652215),
    f = n(985018);

function g(e) {
    let t = (0, o.m1)(e, u.default, s.A),
        n = f.intl.string(f.t.ssrVzG),
        g = (0, a.Y)(e),
        m = (0, c.A)(e),
        {
            trackView: A,
            trackClick: y
        } = (0, d.Y9)(h.KS.IncomingCall, {
            notif_type: h.KS.IncomingCall,
            notif_user_id: m,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: g,
        title: t,
        body: n,
        confirmText: f.intl.string(f.t["0D/6Rz"]),
        cancelText: f.intl.string(f.t.BVN4pL),
        onNotificationShow: () => {
            A()
        },
        onConfirmClick: (t, n) => {
            if (y("join"), p.kvI.CALLABLE.has(e.type)) i.A.call(e.id, !1, !1);
            else {
                if (e.type !== p.rbe.GUILD_VOICE) return;
                l.default.selectVoiceChannel(e.id)
            }
            r.A.updateNotificationStatus(n), r.A.track(p.HAw.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: e.guild_id,
                channel_id: e.id,
                video_enabled: !1
            })
        },
        onCancelClick: () => {
            y("decline"), i.A.stopRinging(e.id)
        },
        onDismissClick: () => {
            y("dismiss")
        }
    }
}