/** chunk id: 302959, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => x,
    M: () => E
});
var n = i(627968),
    l = i(64700),
    r = i(311907),
    s = i(833349),
    a = i(153331),
    o = i(592182),
    d = i(587895),
    u = i(806246),
    c = i(890330),
    m = i(172710),
    p = i(616356),
    h = i(734057),
    A = i(71393),
    g = i(977997),
    f = i(954571),
    T = i(821589),
    v = i(652215),
    C = i(939041);

function S(t) {
    let {
        type: e,
        source: i,
        activity: l,
        applicationStream: r,
        user: s,
        guildId: a,
        channelId: d,
        onAction: u
    } = t;
    return (0, n.jsx)(o.A, {
        className: (0, T.t)(C, "actions", e),
        type: e,
        source: i,
        activity: l,
        applicationStream: r,
        user: s,
        guildId: a,
        buttonVariant: "primary",
        channelId: d,
        onAction: u
    })
}
let E = a.A.Types,
    x = function(t) {
        let {
            activity: e,
            user: i,
            useStoreStream: o = !0,
            showActions: T = !0,
            hideHeader: C = !1,
            showChannelDetails: E = !1,
            ...x
        } = t, _ = (0, r.bG)([g.A, h.A], () => h.A.getChannel(g.A.getVoiceStateForUser(i.id)?.channelId)), y = (0, c.v)("UserActivityContainer", _), N = (0, r.bG)([p.A], () => o ? p.A.getAnyStreamForUser(i.id) : null), I = e?.type === v.$pd.HANG_STATUS && y ? _ : null, j = (0, r.bG)([A.A, g.A, h.A], () => (0, s.A)(e, v.jUm.EMBEDDED) ? A.A.getGuild(h.A.getChannel(g.A.getVoiceStateForSession(i.id, e?.session_id)?.channelId)?.getGuildId()) : null != I ? A.A.getGuild(I.getGuildId()) : null), D = (0, r.bG)([A.A], () => null != N ? A.A.getGuild(N.guildId) : null), P = (0, r.bG)([d.A], () => {
            if (null != e)
                if (null != e.application_id) return d.A.getApplication(e.application_id);
                else return d.A.getApplicationByName(e.name);
            return null
        });
        return (l.useEffect(() => {
            e?.type === v.$pd.HANG_STATUS && y && f.default.track(v.HAw.VIEW_HANG_STATUS, {
                source: "UserActivity",
                other_user_id: i.id,
                ...(0, u.A)(I?.id)
            })
        }, [e?.type, y, I, i.id]), e?.type !== v.$pd.HANG_STATUS || y) ? (0, n.jsx)(a.A, {
            ...x,
            activity: e,
            user: i,
            application: P,
            hideHeader: C,
            activityGuild: j ?? D,
            showChannelDetails: E,
            channel: E ? _ : void 0,
            enableUserHoverActivities: x.enableUserHoverActivities,
            renderActions: T ? () => (0, n.jsx)(S, {
                ...x,
                applicationStream: N,
                activity: e,
                user: i
            }) : null,
            onOpenSpotifyTrack: m.Mp,
            onOpenSpotifyArtist: m.mN,
            onOpenSpotifyAlbum: m.QX
        }) : null
    }