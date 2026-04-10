/** chunk id: 302959 params = (module,exports,require) **/
i.d(t, {
    A: () => C,
    M: () => N
});
var n = i(627968),
    a = i(64700),
    l = i(311907),
    s = i(833349),
    r = i(153331),
    c = i(592182),
    o = i(587895),
    d = i(806246),
    u = i(890330),
    p = i(172710),
    m = i(616356),
    _ = i(734057),
    h = i(71393),
    g = i(977997),
    A = i(954571),
    f = i(821589),
    x = i(652215),
    b = i(78016);

function I(e) {
    let {
        type: t,
        source: i,
        activity: a,
        applicationStream: l,
        user: s,
        guildId: r,
        channelId: o,
        onAction: d
    } = e;
    return (0, n.jsx)(c.A, {
        className: (0, f.t)(b, "actions", t),
        type: t,
        source: i,
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
    C = function(e) {
        let {
            activity: t,
            user: i,
            useStoreStream: c = !0,
            showActions: f = !0,
            hideHeader: b = !1,
            showChannelDetails: N = !1,
            ...C
        } = e, v = (0, l.bG)([g.A, _.A], () => _.A.getChannel(g.A.getVoiceStateForUser(i.id)?.channelId)), y = (0, u.v)("UserActivityContainer", v), T = (0, l.bG)([m.A], () => c ? m.A.getAnyStreamForUser(i.id) : null), E = t?.type === x.$pd.HANG_STATUS && y ? v : null, S = (0, l.bG)([h.A, g.A, _.A], () => (0, s.A)(t, x.jUm.EMBEDDED) ? h.A.getGuild(_.A.getChannel(g.A.getVoiceStateForSession(i.id, t?.session_id)?.channelId)?.getGuildId()) : null != E ? h.A.getGuild(E.getGuildId()) : null), j = (0, l.bG)([h.A], () => null != T ? h.A.getGuild(T.guildId) : null), M = (0, l.bG)([o.A], () => {
            if (null != t)
                if (null != t.application_id) return o.A.getApplication(t.application_id);
                else return o.A.getApplicationByName(t.name);
            return null
        });
        return (a.useEffect(() => {
            t?.type === x.$pd.HANG_STATUS && y && A.default.track(x.HAw.VIEW_HANG_STATUS, {
                source: "UserActivity",
                other_user_id: i.id,
                ...(0, d.A)(E?.id)
            })
        }, [t?.type, y, E, i.id]), t?.type !== x.$pd.HANG_STATUS || y) ? (0, n.jsx)(r.A, {
            ...C,
            activity: t,
            user: i,
            application: M,
            hideHeader: b,
            activityGuild: S ?? j,
            showChannelDetails: N,
            channel: N ? v : void 0,
            renderActions: f ? () => (0, n.jsx)(I, {
                ...C,
                applicationStream: T,
                activity: t,
                user: i
            }) : null,
            onOpenSpotifyTrack: p.Mp,
            onOpenSpotifyArtist: p.mN,
            onOpenSpotifyAlbum: p.QX
        }) : null
    }