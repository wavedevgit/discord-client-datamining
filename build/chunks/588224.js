/** chunk id: 588224 params = (module,exports,require) **/
n.d(t, {
    A: () => W
}), n(321073), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(451988),
    d = n(717558),
    c = n(933958),
    u = n(627363),
    h = n(429913),
    A = n(313961),
    _ = n(532622),
    m = n(550946),
    p = n(140547),
    g = n(242919),
    f = n(7054),
    E = n(962392),
    x = n(220995),
    I = n(582904),
    C = n(551826),
    N = n(159426),
    T = n(25528),
    S = n(530804),
    b = n(481947),
    y = n(591346),
    v = n(616356),
    j = n(961350),
    R = n(430452),
    O = n(576705),
    L = n(290863),
    M = n(528767),
    D = n(485296),
    U = n(977997),
    G = n(427262),
    P = n(847221),
    k = n(340851),
    w = n(652215),
    B = n(31408),
    V = n(647493);
let H = l.memo(e => {
    let {
        mute: t,
        deaf: n,
        user: l,
        channel: s,
        sessionId: a,
        nick: o
    } = e, E = l.id, x = (0, r.bG)([j.default], () => j.default.getId() === E, [E]), [I, b, y] = (0, r.yK)([R.Ay], () => x ? [!R.Ay.isSupported() || R.Ay.isSelfMute() || R.Ay.isSelfMutedTemporarily(), R.Ay.isSelfDeaf(), !1] : [!R.Ay.isSupported() || R.Ay.isLocalMute(E), !1, R.Ay.isLocalVideoDisabled(E)], [x, E]), O = (0, r.bG)([D.A], () => D.A.isPrioritySpeaker(E)), L = (0, d.A)({
        userId: E,
        checkSoundSharing: !0
    }), P = (0, m.A)(s.guild_id, E), V = (0, r.bG)([A.A], () => A.A.getGuildRingingUsers(s.id).has(E)), H = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(s.id).find(e => {
        let {
            userIds: t
        } = e;
        return t.has(E)
    }), [E, s.id]), F = (0, h.A)(null != H ? [H.applicationId] : []), W = (0, T.Ay)(E, s.guild_id)[0], K = (0, u.YY)(W?.application_id).data ?? void 0, [Y, z] = (0, r.yK)([v.A], () => [v.A.getStreamForUser(E, s.getGuildId()), v.A.getActiveStreamForUser(E, s.getGuildId())], [s, E]), X = (0, r.bG)([M.A], () => M.A.getSessionById(a)), q = G.Ay.useName(l), $ = (0, r.bG)([U.A], () => U.A.getVoicePlatformForChannel(s.id, E), [s.id, E]), {
        enableHangStatus: Q
    } = (0, p.$j)({
        guildId: s.guild_id,
        location: "VoiceUsers"
    }), J = (0, _.Ay)(s, !0, l), Z = (0, r.bG)([g.A], () => x ? g.A.getHangStatusActivity() : null, [x]), ee = (0, f.h)(E), et = (0, S.uy)(s.id, E), {
        enableVCStatusIcons: en
    } = N.m.useExperiment({
        guildId: s.guild_id,
        location: "VoiceUsers"
    }, {
        autoTrackExposure: W?.session_id != null
    }), ei = en || Q;
    return (0, i.jsx)(C.A, {
        shakeLocation: B.uD.VOICE_USER,
        isShaking: L,
        children: (0, i.jsx)(k.Ay, {
            ...e,
            nick: o ?? q,
            canDrag: e.canDrag && !P,
            disconnected: et,
            otherClientSessionType: X?.clientInfo?.os,
            voicePlatform: $,
            localMute: I && !x,
            localVideoDisabled: y,
            mute: t || I,
            deaf: n || b,
            speaking: L,
            ringing: V,
            priority: O,
            embeddedApplication: F[0],
            isStreaming: null != Y && Y.channelId === s.id,
            isWatching: null != z && z.state !== w.XYD.ENDED,
            isGuest: P,
            isSelf: x,
            application: ei && W?.session_id != null ? K : void 0,
            showHangStatus: J && Q && (x || null != ee),
            hangStatusActivity: x ? Z : ee
        })
    })
});
H.displayName = "ConnectedVoiceUser";
let F = [],
    W = function(e) {
        let {
            allowPreviews: t = !0,
            allowDragging: n = !0,
            channel: s,
            voiceStates: d,
            collapsed: c,
            collapsedMax: u = 6,
            tabIndex: _,
            numAudience: m,
            withGuildIcon: p = !1,
            className: g,
            children: C,
            isThread: N = !1
        } = e, [T, v] = l.useState(null), R = l.useRef(null), M = (0, S.$n)(s.id, d ?? F);
        (0, f.s)(s.guild_id, M);
        let {
            showGhostUser: D
        } = (0, y.G8)({
            guildId: s.guild_id,
            location: "VoiceUsers"
        }), {
            shouldShow: U,
            dismiss: G
        } = (0, I.Z0)(s, {
            collapsed: c
        }), {
            placement: B
        } = (0, E.h)({
            guildId: s.guild_id,
            location: "VoiceUsers"
        }, {
            autoTrackExposure: !0
        }), W = l.useRef(new o.J_(50, () => {
            v(R.current), R.current = null
        })), K = l.useRef(new o.J_(175, () => {
            v(null)
        })), Y = l.useCallback(e => {
            t && (K.current.cancel(), R.current = e, W.current.delay())
        }, [t]), z = l.useCallback(e => {
            t && (W.current.cancel(), R.current = null, K.current.delay())
        }, [t]), X = (0, r.yK)([L.A], () => {
            if (c) return [];
            let e = new Set;
            return M?.forEach(t => {
                let {
                    user: n
                } = t;
                L.A.getActivities(n.id, s.guild_id).forEach(t => {
                    null != t.application_id && e.add(t.application_id)
                })
            }), Array.from(e)
        });
        (0, h.A)(X);
        let q = (() => {
            if (null == M || 0 === M.length) return null;
            let e = c && M.length > u + 1 ? M.slice(0, u) : M,
                t = A.A.getGuildRingingUsers(s.id),
                l = e.map(e => {
                    let {
                        user: l,
                        nick: a,
                        voiceState: r
                    } = e, o = t.has(l.id);
                    return (0, i.jsx)(H, {
                        user: l,
                        nick: a,
                        isSelfOnOtherClient: j.default.getId() === l.id && r.sessionId !== j.default.getSessionId(),
                        mute: r.isVoiceMuted(),
                        deaf: r.isVoiceDeafened(),
                        video: r.selfVideo,
                        serverMute: r.mute,
                        serverDeaf: r.deaf,
                        sessionId: r.sessionId ?? "",
                        channel: s,
                        collapsed: c,
                        canDrag: n && O.A.can(w.xBc.MOVE_MEMBERS, s),
                        showPreview: Y,
                        hidePreview: z,
                        shouldShowHoverPopout: T === l.id,
                        tabIndex: _
                    }, `voice-user-${l.id}-${o}`)
                });
            return null != m && m > 0 ? l.push((0, i.jsx)(k.aI, {
                collapsed: c,
                numAudience: m
            })) : c && M.length > u + 1 && l.push((0, i.jsx)(k.LR, {
                numUsers: M.length - u
            })), D && !c && s.type === w.rbe.GUILD_VOICE && l.push((0, i.jsx)(P.A, {
                channel: s
            }, "ghost-user")), U && "bottom" === B ? l.push((0, i.jsx)(x.p, {
                channel: s,
                onClose: G
            }, "voice-invite-suggestions-button")) : U && "top" === B && l.unshift((0, i.jsx)(x.p, {
                channel: s,
                onClose: G
            }, "voice-invite-suggestions-button")), l
        })();
        return null == q && null == C ? null : (0, i.jsxs)(b.Wr, {
            className: a()(g, V.p_, {
                [V.yZ]: c,
                [V.lY]: p,
                [V.fT]: N
            }),
            collapsed: c,
            children: [q, C]
        })
    }