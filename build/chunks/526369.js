/** chunk id: 526369, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(110259),
    a = n(121894),
    r = n(311907),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    h = n(313961),
    A = n(826673),
    p = n(855687),
    m = n(267102),
    g = n(733586),
    _ = n(530804),
    f = n(71393),
    x = n(576705),
    C = n(686502),
    E = n(175203),
    I = n(263854),
    N = n(794927),
    b = n(652215),
    S = n(439197);

function T(e) {
    let {
        participants: t,
        onClick: n,
        onDoubleClick: T,
        onContextMenu: y,
        channel: v,
        className: j,
        inCall: R,
        totalNumberOfParticipants: O,
        popoutType: L
    } = e, M = (0, m.Us)() === b.BRT.POPOUT, D = (0, r.bG)([f.A], () => f.A.getGuild(v.guild_id), [v.guild_id]), {
        dismissedActivityEntryPointTileChannel: G
    } = (0, I.P)(), U = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(v.id), [v]), P = (0, _.vp)(v.id, t), w = s.useCallback(() => {
        (0, a.r)(() => {
            I.P.setState({
                dismissedActivityEntryPointTileChannel: v.id
            })
        })
    }, [v.id]);
    s.useEffect(() => {
        null != G && v.id !== G && (0, a.r)(() => {
            I.P.setState({
                dismissedActivityEntryPointTileChannel: null
            })
        })
    }, [v.id, G]);
    let k = (0, r.bG)([x.A], () => v.isPrivate() || (0, p.K)(x.A, D, v), [D, v]),
        V = D?.afkChannelId === v.id,
        B = v.userLimit <= 0 || v.userLimit > 1,
        H = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(v.id).length <= 0),
        F = (0, A.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        K = (0, d.et)(v.id) !== d.xy.CAN_LAUNCH,
        W = null != G && G === v.id,
        Y = P.map(e => t => (0, i.jsx)(E.Ay, {
            participant: e,
            channel: v,
            className: S.V,
            onClick: n,
            onDoubleClick: T,
            onContextMenu: y,
            inCall: R,
            width: t,
            popoutType: L
        }, e.id));
    (0, u.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
        properties: {
            total_participants: O,
            can_invite: k,
            is_afk_channel: V,
            channel_user_limit: v.userLimit
        }
    }, {
        trackOnInitialLoad: !0
    }, []), null != D && !V && (!(U >= 2) || !H || K || F || W ? B && 1 === U && k && (H && !K ? Y.push(e => (0, i.jsx)(C.y, {
        channel: v,
        guild: D,
        width: e,
        inPopout: M,
        handleClose: w,
        userParticipantCount: U
    })) : Y.push(e => (0, i.jsx)(N.A, {
        width: e,
        channel: v,
        guild: D,
        inPopout: M
    }))) : Y.push(e => (0, i.jsx)(C.y, {
        channel: v,
        guild: D,
        width: e,
        inPopout: M,
        handleClose: w,
        userParticipantCount: U
    })));
    let z = s.useCallback(e => P[e]?.id ?? "empty-tile", [P]);
    return (0, i.jsx)(g.A, {
        className: j,
        keyExtractor: z,
        paddingTop: 64,
        paddingBottom: 64,
        children: Y
    })
}