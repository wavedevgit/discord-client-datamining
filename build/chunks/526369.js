/** Chunk was on 77870 **/
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
    p = n(313961),
    h = n(826673),
    f = n(855687),
    g = n(267102),
    m = n(733586),
    b = n(530804),
    A = n(71393),
    y = n(576705),
    _ = n(686502),
    O = n(175203),
    j = n(263854),
    v = n(794927),
    x = n(652215),
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
    } = e, R = (0, g.Us)() === x.BRT.POPOUT, D = (0, a.bG)([A.A], () => A.A.getGuild(I.guild_id), [I.guild_id]), {
        dismissedActivityEntryPointTileChannel: M
    } = (0, j.P)(), L = (0, a.bG)([p.A], () => p.A.getUserParticipantCount(I.id), [I]), k = (0, b.vp)(I.id, t), G = l.useCallback(() => {
        (0, s.r)(() => {
            j.P.setState({
                dismissedActivityEntryPointTileChannel: I.id
            })
        })
    }, [I.id]);
    l.useEffect(() => {
        null != M && I.id !== M && (0, s.r)(() => {
            j.P.setState({
                dismissedActivityEntryPointTileChannel: null
            })
        })
    }, [I.id, M]);
    let U = (0, a.bG)([y.A], () => I.isPrivate() || (0, f.K)(y.A, D, I), [D, I]),
        B = (null == D ? void 0 : D.afkChannelId) === I.id,
        V = I.userLimit <= 0 || I.userLimit > 1,
        F = (0, a.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        H = (0, h.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        K = (0, u.et)(I.id) !== u.xy.CAN_LAUNCH,
        W = null != M && M === I.id,
        z = k.map(e => t => (0, r.jsx)(O.Ay, {
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
            is_afk_channel: B,
            channel_user_limit: I.userLimit
        }
    }, {
        trackOnInitialLoad: !0
    }, []), null != D && !B && (!(L >= 2) || !F || K || H || W ? V && 1 === L && U && (F && !K ? z.push(e => (0, r.jsx)(_.y, {
        channel: I,
        guild: D,
        width: e,
        inPopout: R,
        handleClose: G,
        userParticipantCount: L
    })) : z.push(e => (0, r.jsx)(v.A, {
        width: e,
        channel: I,
        guild: D,
        inPopout: R
    }))) : z.push(e => (0, r.jsx)(_.y, {
        channel: I,
        guild: D,
        width: e,
        inPopout: R,
        handleClose: G,
        userParticipantCount: L
    })));
    let Y = l.useCallback(e => {
        var t, n;
        return null != (t = null == (n = k[e]) ? void 0 : n.id) ? t : "empty-tile"
    }, [k]);
    return (0, r.jsx)(m.A, {
        className: N,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: z
    })
}