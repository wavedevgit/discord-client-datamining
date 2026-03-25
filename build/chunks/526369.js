/** chunk id: 526369 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
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
    m = n(855687),
    _ = n(267102),
    p = n(733586),
    g = n(530804),
    f = n(71393),
    x = n(576705),
    C = n(686502),
    E = n(175203),
    I = n(263854),
    N = n(652215),
    b = n(439197);

function S(e) {
    let {
        participants: t,
        onClick: n,
        onDoubleClick: S,
        onContextMenu: T,
        channel: v,
        className: y,
        inCall: j,
        totalNumberOfParticipants: R,
        popoutType: O
    } = e, L = (0, _.Us)() === N.BRT.POPOUT, M = (0, r.bG)([f.A], () => f.A.getGuild(v.guild_id), [v.guild_id]), {
        dismissedActivityEntryPointTileChannel: D
    } = (0, I.P)(), G = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(v.id), [v]), U = (0, g.vp)(v.id, t), P = s.useCallback(() => {
        (0, a.r)(() => {
            I.P.setState({
                dismissedActivityEntryPointTileChannel: v.id
            })
        })
    }, [v.id]);
    s.useEffect(() => {
        null != D && v.id !== D && (0, a.r)(() => {
            I.P.setState({
                dismissedActivityEntryPointTileChannel: null
            })
        })
    }, [v.id, D]);
    let k = (0, r.bG)([x.A], () => v.isPrivate() || (0, m.K)(x.A, M, v), [M, v]),
        w = M?.afkChannelId === v.id,
        V = v.userLimit <= 0 || v.userLimit > 1,
        B = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(v.id).length <= 0),
        H = (0, A.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, d.et)(v.id) !== d.xy.CAN_LAUNCH,
        K = null != D && D === v.id,
        W = U.map(e => t => (0, i.jsx)(E.Ay, {
            participant: e,
            channel: v,
            className: b.V,
            onClick: n,
            onDoubleClick: S,
            onContextMenu: T,
            inCall: j,
            width: t,
            popoutType: O
        }, e.id));
    (0, u.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
        properties: {
            total_participants: R,
            can_invite: k,
            is_afk_channel: w,
            channel_user_limit: v.userLimit
        }
    }, {
        trackOnInitialLoad: !0
    }, []);
    let Y = B && !F;
    null != M && !w && (G >= 2 && Y && !H && !K ? W.push(e => (0, i.jsx)(C.y, {
        channel: v,
        guild: M,
        width: e,
        inPopout: L,
        handleClose: P,
        userParticipantCount: G
    })) : V && 1 === G && k && W.push(e => (0, i.jsx)(C.y, {
        channel: v,
        guild: M,
        width: e,
        inPopout: L,
        handleClose: P,
        userParticipantCount: G,
        activitiesEnabled: Y
    })));
    let z = s.useCallback(e => U[e]?.id ?? "empty-tile", [U]);
    return (0, i.jsx)(p.A, {
        className: y,
        keyExtractor: z,
        paddingTop: 64,
        paddingBottom: 64,
        children: W
    })
}