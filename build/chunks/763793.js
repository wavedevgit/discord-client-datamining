/** Chunk was on 1113 **/
/** chunk id: 763793, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B,
    i: () => G
});
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(110259),
    o = n(311907),
    c = n(397927),
    u = n(367513),
    d = n(442433),
    h = n(401843),
    p = n(793574),
    g = n(688810),
    f = n(139286),
    m = n(313961),
    b = n(480890),
    A = n(643501),
    y = n(652896),
    O = n(279250),
    _ = n(267102),
    x = n(401901),
    j = n(326567),
    v = n(342296),
    E = n(616356),
    C = n(961350),
    S = n(71393),
    I = n(576705),
    N = n(977997),
    T = n(312006),
    P = n(704384),
    w = n(289105),
    R = n(652215),
    D = n(806931),
    L = n(742149);

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function k(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let G = 16 / 9,
    U = e => {
        let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: i,
            guildId: s,
            user: a,
            width: o,
            isModerator: u,
            onContextMenu: d,
            popoutType: h
        } = e, p = l.useRef(null), {
            reducedMotion: g
        } = l.useContext(c.CZY), {
            blocked: f,
            ignored: m,
            id: b
        } = t;
        return (0, r.jsx)(v.A, {
            targetElementRef: p,
            user: a,
            guildId: s,
            channelId: i.id,
            clickTrap: !0,
            children: e => (0, r.jsx)(c.DUT, k(M({
                innerRef: p,
                onContextMenu: e => d(n, e)
            }, e), {
                children: (0, r.jsx)(P.A, {
                    participant: n,
                    aspectRatio: G,
                    blocked: f,
                    ignored: m,
                    channel: i,
                    className: L.V,
                    inCall: !0,
                    popoutType: h,
                    pulseSpeakingIndicator: !g.enabled,
                    width: o,
                    onContextMenu: d,
                    children: u && (0, r.jsx)(w.A, {})
                }, b)
            }))
        })
    },
    V = e => {
        let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: i,
            width: s,
            isModerator: a,
            onContextMenu: d,
            popoutType: p
        } = e, {
            reducedMotion: g
        } = l.useContext(c.CZY), {
            id: f,
            blocked: b,
            ignored: _
        } = t, j = (0, o.yK)([E.A], () => E.A.getAllActiveStreams(), []), {
            selectedParticipant: v,
            largeStream: C
        } = (0, o.cf)([m.A], () => ({
            selectedParticipant: null != i ? m.A.getSelectedParticipant(i.id) : null,
            largeStream: null != i && m.A.getStageStreamSize(i.id)
        })), T = l.useCallback((e, t) => {
            if (e.type === D.lp.STREAM && 0 === j.filter(t => (0, y._z)(t) === e.id && t.state !== R.XYD.ENDED).length) {
                if (!(0, O.eo)(i, N.A, S.A, I.A, A.default)[0]) return;
                (0, h.A9)((0, y.Iy)(e.id), {
                    forceMultiple: t.shiftKey
                })
            }(null == v ? void 0 : v.id) === e.id ? C ? (u.A.selectParticipant(i.id, null), u.A.updateStageStreamSize(i.id, !1)) : u.A.updateStageStreamSize(i.id, !0) : (u.A.updateStageStreamSize(i.id, !1), u.A.selectParticipant(i.id, e.id))
        }, [j, i, v, C]);
        return (0, r.jsx)(P.A, {
            participant: n,
            aspectRatio: G,
            fit: n.type === D.lp.USER ? x.$.COVER : void 0,
            blocked: b,
            ignored: _,
            channel: i,
            className: L.V,
            inCall: !0,
            popoutType: p,
            onClick: T,
            onContextMenu: d,
            pulseSpeakingIndicator: !g.enabled,
            width: s,
            children: a && n.type === D.lp.USER && (0, r.jsx)(w.A, {})
        }, f)
    },
    B = l.memo(function(e) {
        var t;
        let {
            participant: l,
            channel: i,
            width: c,
            popoutType: u
        } = e, {
            newestAnalyticsLocation: h
        } = (0, g.Ay)(p.A.STAGE_TILE), A = (0, _.Us)(), y = i.getGuildId(), O = C.default.getId();
        s()(null != y, "Channel cannot be guildless");
        let {
            user: x
        } = l, v = (0, o.bG)([m.A], () => m.A.getParticipant(i.id, l.id), [i.id, l.id]), E = (0, o.bG)([T.Ay], () => T.Ay.isModerator(x.id, i.id), [i.id, x.id]);
        if (null == v || v.type === D.lp.ACTIVITY) return null;
        let S = e => {
                (0, f.x)({
                    type: a.ImpressionTypes.MENU,
                    name: a.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "StageTile",
                        is_tile_owner: x.id === O,
                        tile_type: e
                    }
                })
            },
            I = (e, t, l, s) => {
                switch (e.type) {
                    case D.lp.HIDDEN_STREAM:
                    case D.lp.STREAM:
                        S(D.qs.STREAM), (0, d.L3)(t, async () => {
                            let {
                                default: t
                            } = await n.e("66692").then(n.bind(n, 796175));
                            return n => (0, r.jsx)(t, k(M({}, n), {
                                stream: e.stream,
                                appContext: A,
                                exitFullscreen: () => {},
                                onInteraction: (0, b.s)("StreamContextMenu", h, {
                                    entrypoint: s,
                                    targetUserId: x.id,
                                    tileType: D.qs.STREAM
                                })
                            }))
                        }, {
                            context: A
                        });
                        return;
                    case D.lp.USER:
                    default:
                        if (S(D.qs.USER), l) return (0, j.r)(t, x, i, {
                            context: A
                        }, (e, t) => (0, b.Y)({
                            menuName: e,
                            menuItemProps: t,
                            entrypoint: D.GK.THREE_DOT,
                            targetUserId: x.id,
                            location: h,
                            tileType: D.qs.USER
                        }));
                        (0, d.L3)(t, async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
                            return t => (0, r.jsx)(e, k(M({}, t), {
                                user: x,
                                guildId: y,
                                channel: i,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, b.s)("GuildChannelUserContextMenu", h, {
                                    targetUserId: x.id,
                                    tileType: D.qs.USER
                                })
                            }))
                        }, {
                            context: A
                        })
                }
            };
        return v.type !== D.lp.USER || (null == (t = v.voiceState) ? void 0 : t.selfVideo) ? (0, r.jsx)(V, {
            stageParticipant: l,
            rtcParticipant: v,
            channel: i,
            guildId: y,
            user: x,
            width: c,
            isModerator: E,
            onContextMenu: I,
            popoutType: u
        }) : (0, r.jsx)(U, {
            stageParticipant: l,
            rtcParticipant: v,
            channel: i,
            guildId: y,
            user: x,
            width: c,
            isModerator: E,
            onContextMenu: I,
            popoutType: u
        })
    })