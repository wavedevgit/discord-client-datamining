/** chunk id: 302959 params = (module,exports,require) **/
i.d(e, {
    A: () => S,
    M: () => T
});
var n = i(627968),
    a = i(64700),
    l = i(311907),
    s = i(833349),
    r = i(153331),
    d = i(592182),
    o = i(587895),
    c = i(806246),
    u = i(890330),
    p = i(172710),
    m = i(616356),
    A = i(734057),
    h = i(71393),
    E = i(977997),
    g = i(954571),
    _ = i(821589),
    f = i(652215),
    v = i(78016);

function I(t) {
    let {
        type: e,
        source: i,
        activity: a,
        applicationStream: l,
        user: s,
        guildId: r,
        channelId: o,
        onAction: c
    } = t;
    return (0, n.jsx)(d.A, {
        className: (0, _.t)(v, "actions", e),
        type: e,
        source: i,
        activity: a,
        applicationStream: l,
        user: s,
        guildId: r,
        buttonVariant: "primary",
        channelId: o,
        onAction: c
    })
}
let T = r.A.Types,
    S = function(t) {
        let {
            activity: e,
            user: i,
            useStoreStream: d = !0,
            showActions: _ = !0,
            hideHeader: v = !1,
            showChannelDetails: T = !1,
            ...S
        } = t, N = (0, l.bG)([E.A, A.A], () => A.A.getChannel(E.A.getVoiceStateForUser(i.id)?.channelId)), x = (0, u.v)("UserActivityContainer", N), y = (0, l.bG)([m.A], () => d ? m.A.getAnyStreamForUser(i.id) : null), D = e?.type === f.$pd.HANG_STATUS && x ? N : null, P = (0, l.bG)([h.A, E.A, A.A], () => (0, s.A)(e, f.jUm.EMBEDDED) ? h.A.getGuild(A.A.getChannel(E.A.getVoiceStateForSession(i.id, e?.session_id)?.channelId)?.getGuildId()) : null != D ? h.A.getGuild(D.getGuildId()) : null), O = (0, l.bG)([h.A], () => null != y ? h.A.getGuild(y.guildId) : null), R = (0, l.bG)([o.A], () => {
            if (null != e)
                if (null != e.application_id) return o.A.getApplication(e.application_id);
                else return o.A.getApplicationByName(e.name);
            return null
        });
        return (a.useEffect(() => {
            e?.type === f.$pd.HANG_STATUS && x && g.default.track(f.HAw.VIEW_HANG_STATUS, {
                source: "UserActivity",
                other_user_id: i.id,
                ...(0, c.A)(D?.id)
            })
        }, [e?.type, x, D, i.id]), e?.type !== f.$pd.HANG_STATUS || x) ? (0, n.jsx)(r.A, {
            ...S,
            activity: e,
            user: i,
            application: R,
            hideHeader: v,
            activityGuild: P ?? O,
            showChannelDetails: T,
            channel: T ? N : void 0,
            renderActions: _ ? () => (0, n.jsx)(I, {
                ...S,
                applicationStream: y,
                activity: e,
                user: i
            }) : null,
            onOpenSpotifyTrack: p.Mp,
            onOpenSpotifyArtist: p.mN,
            onOpenSpotifyAlbum: p.QX
        }) : null
    }