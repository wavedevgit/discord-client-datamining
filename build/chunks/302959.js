/** chunk id: 302959 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    M: () => f
});
var i = n(627968);
n(64700);
var a = n(311907),
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
    _ = n(652215),
    g = n(78016);

function A(e) {
    let {
        type: t,
        source: n,
        activity: a,
        applicationStream: l,
        user: s,
        guildId: c,
        channelId: o,
        onAction: d
    } = e;
    return (0, i.jsx)(r.A, {
        className: (0, h.t)(g, "actions", t),
        type: t,
        source: n,
        activity: a,
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
            hideHeader: g = !1,
            showChannelDetails: f = !1,
            ...x
        } = e, I = (0, a.bG)([m.A, u.A], () => u.A.getChannel(m.A.getVoiceStateForUser(n.id)?.channelId)), b = (0, a.bG)([d.A], () => r ? d.A.getAnyStreamForUser(n.id) : null), N = (0, a.bG)([p.A, m.A, u.A], () => (0, l.A)(t, _.jUm.EMBEDDED) ? p.A.getGuild(u.A.getChannel(m.A.getVoiceStateForSession(n.id, t?.session_id)?.channelId)?.getGuildId()) : null), v = (0, a.bG)([p.A], () => null != b ? p.A.getGuild(b.guildId) : null), C = (0, a.bG)([c.A], () => {
            if (null != t)
                if (null != t.application_id) return c.A.getApplication(t.application_id);
                else return c.A.getApplicationByName(t.name);
            return null
        });
        return t?.type === _.$pd.HANG_STATUS ? null : (0, i.jsx)(s.A, {
            ...x,
            activity: t,
            user: n,
            application: C,
            hideHeader: g,
            activityGuild: N ?? v,
            showChannelDetails: f,
            channel: f ? I : void 0,
            renderActions: h ? () => (0, i.jsx)(A, {
                ...x,
                applicationStream: b,
                activity: t,
                user: n
            }) : null,
            onOpenSpotifyTrack: o.Mp,
            onOpenSpotifyArtist: o.mN,
            onOpenSpotifyAlbum: o.QX
        })
    }