/** Chunk was on 1113 **/
/** chunk id: 526369, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(110259),
    s = n(121894),
    a = n(311907),
    o = n(554146),
    c = n(933958),
    u = n(782091),
    d = n(139286),
    h = n(313961),
    p = n(826673),
    g = n(855687),
    f = n(267102),
    m = n(733586),
    b = n(530804),
    A = n(71393),
    y = n(576705),
    O = n(686502),
    _ = n(175203),
    j = n(263854),
    x = n(794927),
    v = n(652215),
    E = n(439197);

function C(e) {
    let {
        participants: t,
        onClick: n,
        onDoubleClick: C,
        onContextMenu: S,
        channel: I,
        className: N,
        inCall: T,
        totalNumberOfParticipants: P,
        popoutType: w
    } = e, R = (0, f.Us)() === v.BRT.POPOUT, D = (0, a.bG)([A.A], () => A.A.getGuild(I.guild_id), [I.guild_id]), {
        dismissedActivityEntryPointTileChannel: L
    } = (0, j.P)(), M = (0, a.bG)([h.A], () => h.A.getUserParticipantCount(I.id), [I]), G = (0, b.vp)(I.id, t), k = l.useCallback(() => {
        (0, s.r)(() => {
            j.P.setState({
                dismissedActivityEntryPointTileChannel: I.id
            })
        })
    }, [I.id]);
    l.useEffect(() => {
        null != L && I.id !== L && (0, s.r)(() => {
            j.P.setState({
                dismissedActivityEntryPointTileChannel: null
            })
        })
    }, [I.id, L]);
    let U = (0, a.bG)([y.A], () => I.isPrivate() || (0, g.K)(y.A, D, I), [D, I]),
        V = (null == D ? void 0 : D.afkChannelId) === I.id,
        B = I.userLimit <= 0 || I.userLimit > 1,
        H = (0, a.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        F = (0, p.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        K = (0, u.et)(I.id) !== u.xy.CAN_LAUNCH,
        Y = null != L && L === I.id,
        W = G.map(e => t => (0, r.jsx)(_.Ay, {
            participant: e,
            channel: I,
            className: E.V,
            onClick: n,
            onDoubleClick: C,
            onContextMenu: S,
            inCall: T,
            width: t,
            popoutType: w
        }, e.id));
    (0, d.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
        properties: {
            total_participants: P,
            can_invite: U,
            is_afk_channel: V,
            channel_user_limit: I.userLimit
        }
    }, {
        trackOnInitialLoad: !0
    }, []), null != D && !V && (!(M >= 2) || !H || K || F || Y ? B && 1 === M && U && (H && !K ? W.push(e => (0, r.jsx)(O.y, {
        channel: I,
        guild: D,
        width: e,
        inPopout: R,
        handleClose: k,
        userParticipantCount: M
    })) : W.push(e => (0, r.jsx)(x.A, {
        width: e,
        channel: I,
        guild: D,
        inPopout: R
    }))) : W.push(e => (0, r.jsx)(O.y, {
        channel: I,
        guild: D,
        width: e,
        inPopout: R,
        handleClose: k,
        userParticipantCount: M
    })));
    let z = l.useCallback(e => {
        var t, n;
        return null != (t = null == (n = G[e]) ? void 0 : n.id) ? t : "empty-tile"
    }, [G]);
    return (0, r.jsx)(m.A, {
        className: N,
        keyExtractor: z,
        paddingTop: 64,
        paddingBottom: 64,
        children: W
    })
}