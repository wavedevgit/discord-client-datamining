/** chunk id: 302959 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    M: () => f
});
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(833349),
    s = n(153331),
    r = n(592182),
    c = n(587895),
    o = n(172710),
    d = n(616356),
    u = n(734057),
    p = n(71393),
    m = n(977997),
    h = n(821589),
    g = n(652215),
    _ = n(454960);

function A(e) {
    let {
        type: t,
        source: n,
        activity: i,
        applicationStream: l,
        user: s,
        guildId: c,
        channelId: o,
        onAction: d
    } = e;
    return (0, a.jsx)(r.A, {
        className: (0, h.t)(_, "actions", t),
        type: t,
        source: n,
        activity: i,
        applicationStream: l,
        user: s,
        guildId: c,
        buttonVariant: "primary",
        channelId: o,
        onAction: d
    })
}
let f = s.A.Types,
    x = function(e) {
        let {
            activity: t,
            user: n,
            useStoreStream: r = !0,
            showActions: h = !0,
            hideHeader: _ = !1,
            showChannelDetails: f = !1,
            ...x
        } = e, b = (0, i.bG)([m.A, u.A], () => u.A.getChannel(m.A.getVoiceStateForUser(n.id)?.channelId)), I = (0, i.bG)([d.A], () => r ? d.A.getAnyStreamForUser(n.id) : null), v = (0, i.bG)([p.A, m.A, u.A], () => (0, l.A)(t, g.jUm.EMBEDDED) ? p.A.getGuild(u.A.getChannel(m.A.getVoiceStateForSession(n.id, t?.session_id)?.channelId)?.getGuildId()) : null), C = (0, i.bG)([p.A], () => null != I ? p.A.getGuild(I.guildId) : null), N = (0, i.bG)([c.A], () => {
            if (null != t)
                if (null != t.application_id) return c.A.getApplication(t.application_id);
                else return c.A.getApplicationByName(t.name);
            return null
        });
        return t?.type === g.$pd.HANG_STATUS ? null : (0, a.jsx)(s.A, {
            ...x,
            activity: t,
            user: n,
            application: N,
            hideHeader: _,
            activityGuild: v ?? C,
            showChannelDetails: f,
            channel: f ? b : void 0,
            renderActions: h ? () => (0, a.jsx)(A, {
                ...x,
                applicationStream: I,
                activity: t,
                user: n
            }) : null,
            onOpenSpotifyTrack: o.Mp,
            onOpenSpotifyArtist: o.mN,
            onOpenSpotifyAlbum: o.QX
        })
    }