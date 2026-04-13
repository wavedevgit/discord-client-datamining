/** chunk id: 302959 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    M: () => N
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(833349),
    r = n(153331),
    c = n(592182),
    o = n(587895),
    d = n(806246),
    u = n(890330),
    p = n(172710),
    m = n(616356),
    h = n(734057),
    _ = n(71393),
    g = n(977997),
    A = n(954571),
    f = n(821589),
    x = n(652215),
    I = n(78016);

function b(e) {
    let {
        type: t,
        source: n,
        activity: a,
        applicationStream: l,
        user: s,
        guildId: r,
        channelId: o,
        onAction: d
    } = e;
    return (0, i.jsx)(c.A, {
        className: (0, f.t)(I, "actions", t),
        type: t,
        source: n,
        activity: a,
        applicationStream: l,
        user: s,
        guildId: r,
        buttonVariant: "primary",
        channelId: o,
        onAction: d
    })
}
let N = r.A.Types,
    v = function(e) {
        let {
            activity: t,
            user: n,
            useStoreStream: c = !0,
            showActions: f = !0,
            hideHeader: I = !1,
            showChannelDetails: N = !1,
            ...v
        } = e, C = (0, l.bG)([g.A, h.A], () => h.A.getChannel(g.A.getVoiceStateForUser(n.id)?.channelId)), y = (0, u.v)("UserActivityContainer", C), E = (0, l.bG)([m.A], () => c ? m.A.getAnyStreamForUser(n.id) : null), T = t?.type === x.$pd.HANG_STATUS && y ? C : null, S = (0, l.bG)([_.A, g.A, h.A], () => (0, s.A)(t, x.jUm.EMBEDDED) ? _.A.getGuild(h.A.getChannel(g.A.getVoiceStateForSession(n.id, t?.session_id)?.channelId)?.getGuildId()) : null != T ? _.A.getGuild(T.getGuildId()) : null), j = (0, l.bG)([_.A], () => null != E ? _.A.getGuild(E.guildId) : null), M = (0, l.bG)([o.A], () => {
            if (null != t)
                if (null != t.application_id) return o.A.getApplication(t.application_id);
                else return o.A.getApplicationByName(t.name);
            return null
        });
        return (a.useEffect(() => {
            t?.type === x.$pd.HANG_STATUS && y && A.default.track(x.HAw.VIEW_HANG_STATUS, {
                source: "UserActivity",
                other_user_id: n.id,
                ...(0, d.A)(T?.id)
            })
        }, [t?.type, y, T, n.id]), t?.type !== x.$pd.HANG_STATUS || y) ? (0, i.jsx)(r.A, {
            ...v,
            activity: t,
            user: n,
            application: M,
            hideHeader: I,
            activityGuild: S ?? j,
            showChannelDetails: N,
            channel: N ? C : void 0,
            renderActions: f ? () => (0, i.jsx)(b, {
                ...v,
                applicationStream: E,
                activity: t,
                user: n
            }) : null,
            onOpenSpotifyTrack: p.Mp,
            onOpenSpotifyArtist: p.mN,
            onOpenSpotifyAlbum: p.QX
        }) : null
    }