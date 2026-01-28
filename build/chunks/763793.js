/** Chunk was on 78528 **/
/** chunk id: 763793, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => V,
    i: () => U
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
    p = n(401843),
    h = n(793574),
    f = n(688810),
    g = n(139286),
    m = n(313961),
    b = n(480890),
    A = n(643501),
    y = n(652896),
    _ = n(279250),
    O = n(267102),
    j = n(401901),
    v = n(326567),
    x = n(342296),
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
    M = n(742149);

function L(e) {
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
let U = 16 / 9,
    G = e => {
        let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: i,
            guildId: s,
            user: a,
            width: o,
            isModerator: u,
            onContextMenu: d,
            popoutType: p
        } = e, h = l.useRef(null), {
            reducedMotion: f
        } = l.useContext(c.CZY), {
            blocked: g,
            ignored: m,
            id: b
        } = t;
        return (0, r.jsx)(x.A, {
            targetElementRef: h,
            user: a,
            guildId: s,
            channelId: i.id,
            clickTrap: !0,
            children: e => (0, r.jsx)(c.DUT, k(L({
                innerRef: h,
                onContextMenu: e => d(n, e)
            }, e), {
                children: (0, r.jsx)(P.A, {
                    participant: n,
                    aspectRatio: U,
                    blocked: g,
                    ignored: m,
                    channel: i,
                    className: M.V,
                    inCall: !0,
                    popoutType: p,
                    pulseSpeakingIndicator: !f.enabled,
                    width: o,
                    onContextMenu: d,
                    children: u && (0, r.jsx)(w.A, {})
                }, b)
            }))
        })
    },
    B = e => {
        let {
            stageParticipant: t,
            rtcParticipant: n,
            channel: i,
            width: s,
            isModerator: a,
            onContextMenu: d,
            popoutType: h
        } = e, {
            reducedMotion: f
        } = l.useContext(c.CZY), {
            id: g,
            blocked: b,
            ignored: O
        } = t, v = (0, o.yK)([E.A], () => E.A.getAllActiveStreams(), []), {
            selectedParticipant: x,
            largeStream: C
        } = (0, o.cf)([m.A], () => ({
            selectedParticipant: null != i ? m.A.getSelectedParticipant(i.id) : null,
            largeStream: null != i && m.A.getStageStreamSize(i.id)
        })), T = l.useCallback((e, t) => {
            if (e.type === D.lp.STREAM && 0 === v.filter(t => (0, y._z)(t) === e.id && t.state !== R.XYD.ENDED).length) {
                if (!(0, _.eo)(i, N.A, S.A, I.A, A.default)[0]) return;
                (0, p.A9)((0, y.Iy)(e.id), {
                    forceMultiple: t.shiftKey
                })
            }(null == x ? void 0 : x.id) === e.id ? C ? (u.A.selectParticipant(i.id, null), u.A.updateStageStreamSize(i.id, !1)) : u.A.updateStageStreamSize(i.id, !0) : (u.A.updateStageStreamSize(i.id, !1), u.A.selectParticipant(i.id, e.id))
        }, [v, i, x, C]);
        return (0, r.jsx)(P.A, {
            participant: n,
            aspectRatio: U,
            fit: n.type === D.lp.USER ? j.$.COVER : void 0,
            blocked: b,
            ignored: O,
            channel: i,
            className: M.V,
            inCall: !0,
            popoutType: h,
            onClick: T,
            onContextMenu: d,
            pulseSpeakingIndicator: !f.enabled,
            width: s,
            children: a && n.type === D.lp.USER && (0, r.jsx)(w.A, {})
        }, g)
    },
    V = l.memo(function(e) {
        var t;
        let {
            participant: l,
            channel: i,
            width: c,
            popoutType: u
        } = e, {
            newestAnalyticsLocation: p
        } = (0, f.Ay)(h.A.STAGE_TILE), A = (0, O.Us)(), y = i.getGuildId(), _ = C.default.getId();
        s()(null != y, "Channel cannot be guildless");
        let {
            user: j
        } = l, x = (0, o.bG)([m.A], () => m.A.getParticipant(i.id, l.id), [i.id, l.id]), E = (0, o.bG)([T.Ay], () => T.Ay.isModerator(j.id, i.id), [i.id, j.id]);
        if (null == x || x.type === D.lp.ACTIVITY) return null;
        let S = e => {
                (0, g.x)({
                    type: a.ImpressionTypes.MENU,
                    name: a.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "StageTile",
                        is_tile_owner: j.id === _,
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
                            return n => (0, r.jsx)(t, k(L({}, n), {
                                stream: e.stream,
                                appContext: A,
                                exitFullscreen: () => {},
                                onInteraction: (0, b.s)("StreamContextMenu", p, {
                                    entrypoint: s,
                                    targetUserId: j.id,
                                    tileType: D.qs.STREAM
                                })
                            }))
                        }, {
                            context: A
                        });
                        return;
                    case D.lp.USER:
                    default:
                        if (S(D.qs.USER), l) return (0, v.r)(t, j, i, {
                            context: A
                        }, (e, t) => (0, b.Y)({
                            menuName: e,
                            menuItemProps: t,
                            entrypoint: D.GK.THREE_DOT,
                            targetUserId: j.id,
                            location: p,
                            tileType: D.qs.USER
                        }));
                        (0, d.L3)(t, async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
                            return t => (0, r.jsx)(e, k(L({}, t), {
                                user: j,
                                guildId: y,
                                channel: i,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, b.s)("GuildChannelUserContextMenu", p, {
                                    targetUserId: j.id,
                                    tileType: D.qs.USER
                                })
                            }))
                        }, {
                            context: A
                        })
                }
            };
        return x.type !== D.lp.USER || (null == (t = x.voiceState) ? void 0 : t.selfVideo) ? (0, r.jsx)(B, {
            stageParticipant: l,
            rtcParticipant: x,
            channel: i,
            guildId: y,
            user: j,
            width: c,
            isModerator: E,
            onContextMenu: I,
            popoutType: u
        }) : (0, r.jsx)(G, {
            stageParticipant: l,
            rtcParticipant: x,
            channel: i,
            guildId: y,
            user: j,
            width: c,
            isModerator: E,
            onContextMenu: I,
            popoutType: u
        })
    })