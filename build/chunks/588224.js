/** Chunk was on 1113 **/
/** chunk id: 588224, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B
}), n(896048), n(667532), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(451988),
    c = n(717558),
    u = n(933958),
    d = n(627363),
    h = n(429913),
    p = n(313961),
    g = n(532622),
    f = n(140547),
    m = n(242919),
    b = n(7054),
    A = n(220995),
    y = n(582904),
    O = n(551826),
    _ = n(159426),
    x = n(25528),
    j = n(530804),
    v = n(481947),
    E = n(616356),
    C = n(961350),
    S = n(696451),
    I = n(430452),
    N = n(576705),
    T = n(290863),
    P = n(528767),
    w = n(485296),
    R = n(977997),
    D = n(427262),
    L = n(340851),
    M = n(652215),
    k = n(31408),
    G = n(50314);
let U = l.memo(e => {
    var t, n, l, i;
    let {
        mute: s,
        deaf: o,
        user: A,
        channel: y,
        sessionId: v,
        nick: N
    } = e, T = A.id, G = (0, a.bG)([C.default], () => C.default.getId() === T, [T]), [U, V, B] = (0, a.yK)([I.A], () => G ? [!I.A.isSupported() || I.A.isSelfMute() || I.A.isSelfMutedTemporarily(), I.A.isSelfDeaf(), !1] : [!I.A.isSupported() || I.A.isLocalMute(T), !1, I.A.isLocalVideoDisabled(T)], [G, T]), H = (0, a.bG)([w.A], () => w.A.isPrioritySpeaker(T)), F = (0, c.A)({
        userId: T,
        checkSoundSharing: !0
    }), K = (0, a.bG)([w.A], () => w.A.isCurrentUserPTTLatched()), Y = G && K, W = (0, a.bG)([S.Ay], () => S.Ay.isGuestOrLurker(y.guild_id, T)), z = (0, a.bG)([p.A], () => p.A.getGuildRingingUsers(y.id).has(T)), q = (0, a.bG)([u.Ay], () => u.Ay.getEmbeddedActivitiesForChannel(y.id).find(e => {
        let {
            userIds: t
        } = e;
        return t.has(T)
    }), [T, y.id]), X = (0, h.A)(null != q ? [q.applicationId] : []), J = (0, x.A)(T, y.guild_id)[0], Q = null != (t = (0, d.YY)(null == J ? void 0 : J.application_id).data) ? t : void 0, [Z, $] = (0, a.yK)([E.A], () => [E.A.getStreamForUser(T, y.getGuildId()), E.A.getActiveStreamForUser(T, y.getGuildId())], [y, T]), ee = (0, a.bG)([P.A], () => P.A.getSessionById(v)), et = D.Ay.useName(A), en = (0, a.bG)([R.A], () => R.A.getVoicePlatformForChannel(y.id, T), [y.id, T]), {
        enableHangStatus: er
    } = (0, f.$j)({
        guildId: y.guild_id,
        location: "VoiceUsers"
    }), el = (0, g.Ay)(y, !0, A), ei = (0, a.bG)([m.A], () => G ? m.A.getHangStatusActivity() : null, [G]), es = (0, b.h)(T), ea = (0, j.uy)(y.id, T), {
        enableVCStatusIcons: eo,
        enableRequestToStream: ec
    } = _.m.useExperiment({
        guildId: y.guild_id,
        location: "VoiceUsers"
    }, {
        autoTrackExposure: (null == J ? void 0 : J.session_id) != null
    });
    return (0, r.jsx)(O.A, {
        shakeLocation: k.uD.VOICE_USER,
        isShaking: F,
        children: (0, r.jsx)(L.Ay, (l = function(e) {
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
        }({}, e), i = i = {
            nick: null != N ? N : et,
            canDrag: e.canDrag && !W,
            disconnected: ea,
            otherClientSessionType: null == ee || null == (n = ee.clientInfo) ? void 0 : n.os,
            voicePlatform: en,
            localMute: U && !G,
            localVideoDisabled: B,
            mute: s || U,
            deaf: o || V,
            speaking: F,
            latched: Y,
            ringing: z,
            priority: H,
            embeddedApplication: X[0],
            isStreaming: null != Z && Z.channelId === y.id,
            isWatching: null != $ && $.state !== M.XYD.ENDED,
            isGuest: W,
            isSelf: G,
            requestToStreamActivity: ec ? J : void 0,
            application: (eo || er) && (null == J ? void 0 : J.session_id) != null ? Q : void 0,
            showHangStatus: el && er && (G || null != es),
            hangStatusActivity: G ? ei : es
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
    })
});
U.displayName = "ConnectedVoiceUser";
let V = [],
    B = function(e) {
        let {
            allowPreviews: t = !0,
            allowDragging: n = !0,
            channel: i,
            voiceStates: c,
            collapsed: u,
            collapsedMax: d = 6,
            tabIndex: g,
            location: f,
            numAudience: m,
            withGuildIcon: b = !1,
            className: O,
            children: _,
            isThread: x = !1
        } = e, [E, S] = l.useState(null), [I, P] = l.useState(!1), w = l.useRef(null), R = (0, j.$n)(i.id, null != c ? c : V), {
            shouldShow: D,
            dismiss: k
        } = (0, y.Z0)(i, {
            collapsed: u
        }), B = l.useRef(new o.J_(50, () => {
            S(w.current), w.current = null
        })), H = l.useRef(new o.J_(175, () => {
            S(null)
        })), F = l.useCallback(e => {
            t && (P(!0), H.current.cancel(), w.current = e, B.current.delay())
        }, [t]), K = l.useCallback(e => {
            t && (B.current.cancel(), w.current = null, P(!1), H.current.delay())
        }, [t]), Y = (0, a.yK)([T.A], () => {
            if (u) return [];
            let e = new Set;
            return null == R || R.forEach(t => {
                let {
                    user: n
                } = t;
                T.A.getActivities(n.id, i.guild_id).forEach(t => {
                    null != t.application_id && e.add(t.application_id)
                })
            }), Array.from(e)
        });
        (0, h.A)(Y);
        let W = (() => {
            if (null == R || 0 === R.length) return null;
            let e = u && R.length > d + 1 ? R.slice(0, d) : R,
                t = p.A.getGuildRingingUsers(i.id),
                l = e.map(e => {
                    var l;
                    let {
                        user: s,
                        nick: a,
                        voiceState: o
                    } = e, c = t.has(s.id);
                    return (0, r.jsx)(U, {
                        user: s,
                        nick: a,
                        isSelfOnOtherClient: C.default.getId() === s.id && o.sessionId !== C.default.getSessionId(),
                        mute: o.isVoiceMuted(),
                        deaf: o.isVoiceDeafened(),
                        video: o.selfVideo,
                        serverMute: o.mute,
                        serverDeaf: o.deaf,
                        sessionId: null != (l = o.sessionId) ? l : "",
                        channel: i,
                        collapsed: u,
                        canDrag: n && N.A.can(M.xBc.MOVE_MEMBERS, i),
                        showPreview: F,
                        hidePreview: K,
                        previewIsOpen: I,
                        shouldShowHoverPopout: E === s.id,
                        tabIndex: g,
                        location: f
                    }, "voice-user-".concat(s.id, "-").concat(c))
                });
            return D && l.unshift((0, r.jsx)(A.p, {
                channel: i,
                onClose: k
            }, "voice-invite-suggestions-button")), null != m && m > 0 ? l.push((0, r.jsx)(L.aI, {
                collapsed: u,
                numAudience: m
            })) : u && R.length > d + 1 && l.push((0, r.jsx)(L.LR, {
                numUsers: R.length - d
            })), l
        })();
        return null == W && null == _ ? null : (0, r.jsxs)(v.Wr, {
            className: s()(O, G.p_, {
                [G.yZ]: u,
                [G.lY]: b,
                [G.fT]: x
            }),
            collapsed: u,
            children: [W, _]
        })
    }