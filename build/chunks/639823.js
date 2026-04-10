/** chunk id: 639823 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(451988),
    l = n(73153),
    r = n(956793),
    a = n(272355),
    s = n(616356),
    o = n(734057),
    d = n(71393),
    c = n(885576),
    u = n(383501),
    A = n(927813),
    h = n(723702),
    _ = n(652215);
let m = new i.Ep,
    g = new i.Ep;
class p extends a.A {
    _initialize() {
        l.h.subscribe("IDLE", this.handleIdleUpdate)
    }
    _terminate() {
        m.stop(), g.stop(), l.h.unsubscribe("IDLE", this.handleIdleUpdate)
    }
    handleIdleUpdate() {
        let e = c.A.getIdleSince();
        if (!h.isPlatformEmbedded) return;
        for (let e of (m.stop(), g.stop(), s.A.getAllActiveStreams()))
            if (e.state !== _.XYD.ENDED) return;
        if (null == e) return;
        let t = u.A.getChannelId();
        if (null == t) return;
        g.start(18e6, () => {
            r.default.selectVoiceChannel(null)
        });
        let n = d.A.getGuild(u.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let i = o.A.getChannel(t);
        null == i || i.isGuildStageVoice() || m.start(e + n.afkTimeout * A.A.Millis.SECOND - Date.now(), () => {
            null != (n = d.A.getGuild(u.A.getGuildId())) && null != n.afkChannelId && r.default.selectVoiceChannel(n.afkChannelId, !1, !1, {
                bypassIdleUpdate: !0
            })
        })
    }
}
let E = new p