/** chunk id: 393172 params = (module,exports,require) **/
n.d(t, {
    Ay: () => F,
    DH: () => K
}), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    c = n(397927),
    o = n(717558),
    d = n(429913),
    u = n(478063),
    A = n(47167),
    g = n(22705),
    h = n(209932),
    x = n(63995),
    m = n(69407),
    p = n(530804),
    f = n(616356),
    T = n(961350),
    I = n(734057),
    S = n(309010),
    v = n(485296),
    y = n(287809),
    E = n(977997),
    j = n(607567),
    C = n(256415),
    N = n(403362),
    V = n(996439),
    D = n(820883),
    k = n(810412),
    w = n(412477),
    b = n(395011),
    U = n(243612),
    M = n(147905);
n(392164);
var G = n(652215),
    R = n(731854),
    _ = n(985018),
    P = n(585990);
let z = e => {
    let t = (e ?? 0) % D.A.DEFAULT_AVATARS.length;
    return D.A.DEFAULT_AVATARS[t]
};

function L(e) {
    let {
        hiddenVoiceStates: t,
        voiceStateMap: n,
        size: i,
        locked: s,
        flipped: o
    } = e, d = (0, M.Ob)(i), A = (0, a.yK)([y.default, I.A], () => t.map(e => {
        let t = y.default.getUser(e);
        if (null == t) return;
        let l = I.A.getChannel(n.get(e)?.voiceState.channelId);
        return t.getAvatarURL(l?.getGuildId(), d, !1)
    }).filter(N.Vq), [t, n, d]), g = A[0] ?? z(0), h = A[1] ?? z(1);
    return (0, l.jsxs)("div", {
        className: r()(P.ZR, s && P.xt, o && P.zq),
        children: [(0, l.jsx)("div", {
            className: P.e5,
            children: (0, l.jsx)(u.A, {
                size: i,
                backSrc: g,
                frontSrc: h,
                isTyping: !1
            })
        }), (0, l.jsx)("div", {
            className: P.AP,
            children: (0, l.jsxs)(c.Text, {
                variant: "text-xs/medium",
                children: ["+", t.length, " others in voice"]
            })
        })]
    })
}
let K = i.memo(function(e) {
    let {
        id: t,
        context: n = R.x.DEFAULT,
        channel: s,
        overlayVoiceStates: r,
        displayNameMode: o,
        displayUserMode: d,
        locked: u,
        pinned: A,
        guildId: g,
        showEmpty: h = !0,
        isPreviewingInGame: x,
        isSettingsPreview: m = !1,
        anchorLeft: p,
        avatarSizeMode: T,
        maxDisplayedVoiceStates: I = 8
    } = e, S = (0, k.Dk)(() => (function(e) {
        let [t, n] = e;
        return new Set(n)
    })(r), [r]), [v, y] = r, E = y.length > 0 && null != n && null != s && (!u || A), j = (0, a.yK)([f.A], () => Array.from(S).map(e => f.A.getStreamForUser(e, g)).filter(N.Vq).map(e => e.ownerId), [g, S]);
    i.useEffect(() => {
        E && (0, k.Y)(G.uss.VOICE_V3, {
            locked: C.default.isInstanceLocked(),
            shownUserIds: Array.from(S),
            liveUserIds: j,
            contentInventoryIds: []
        })
    }, [S, j, E]);
    let V = -1 !== I ? y.slice(0, I) : y,
        D = -1 !== I ? y.slice(I) : [],
        b = v.get(D[0]),
        U = d === G.f5z.ALWAYS && -1 !== I;
    return E ? (0, l.jsxs)("div", {
        className: P.h8,
        children: [V.map(e => {
            let i = v.get(e);
            return null == i ? null : (0, l.jsx)(M.Ay, {
                sortedVoiceState: i,
                channel: s,
                widgetId: t,
                flipped: !p,
                isPreviewingInGame: x,
                isSettingsPreview: m,
                context: n,
                size: T,
                displayNameMode: o,
                displayUserMode: d,
                locked: u
            }, e)
        }), U && 1 === D.length && null != b && (0, l.jsx)(M.Ay, {
            sortedVoiceState: b,
            channel: s,
            widgetId: t,
            flipped: !p,
            isPreviewingInGame: x,
            isSettingsPreview: m,
            context: n,
            size: T,
            displayNameMode: o,
            displayUserMode: d,
            locked: u
        }, D[0]), U && D.length > 1 && (0, l.jsx)(L, {
            hiddenVoiceStates: D,
            voiceStateMap: v,
            size: (0, M.FT)(T),
            locked: u,
            flipped: !p
        })]
    }) : u || !h ? null : (0, l.jsx)(w.g, {
        emptyText: _.intl.string(_.t.hEh0l1),
        icon: c.HKD
    })
});

function F(e) {
    let {
        isSettingsPreview: t
    } = e, n = (0, a.bG)([S.A, I.A], () => I.A.getChannel(S.A.getVoiceChannelId())), s = (0, A.Ay)(n), r = function(e, t) {
        let n = (0, a.bG)([S.A, I.A], () => I.A.getChannel(S.A.getVoiceChannelId())),
            [l] = (0, a.bG)([j.Ay, x.A, S.A, I.A], () => {
                let e = I.A.getChannel(S.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [x.A.getMutableParticipants(e.id, m.ip.SPEAKER), x.A.getParticipantsVersion(e.id)] : [j.Ay.getVoiceStatesForChannel(e), j.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], V.D),
            s = (0, p.$n)(n?.id, l),
            r = i.useMemo(() => new Map(s.map(e => [e.user.id, e])), [s]),
            c = (0, a.bG)([T.default], () => T.default.getId());
        return [r, (0, a.yK)([E.A, S.A, v.A, h.A], () => {
            let n = Array.from(new Set(s.map(e => {
                let {
                    user: t
                } = e;
                return t.id
            })));
            if (-1 === t || n.length <= t) return n;
            let l = new Map;
            for (let t of n) {
                let n = (0, o.R)({
                        userId: t,
                        checkSoundSharing: !0,
                        checkSoundboardSounds: !1,
                        checkIsMuted: !0,
                        context: e
                    }, [E.A, S.A, v.A, h.A]),
                    i = t === c;
                (n || i) && l.set(t, {
                    isSpeaking: n,
                    isCurrentUser: i
                })
            }
            let i = [],
                r = [],
                a = [];
            for (let e = 0; e < n.length; e++) {
                let s = n[e],
                    c = l.get(s);
                e < t ? i.push(s) : c && (c.isSpeaking || c.isCurrentUser) ? a.push(s) : r.push(s)
            }
            if (a.length > 0) {
                let e = i.slice(0, t - a.length),
                    n = i.slice(t - a.length);
                return [...e, ...a, ...n, ...r]
            }
            return n
        }, [s, e, c, t])]
    }(R.x.DEFAULT, e.maxDisplayedVoiceStates), c = (0, a.bG)([f.A], () => f.A.getStreamerActiveStreamMetadata()), u = (0, U.b4)(), y = (0, d.h)(u?.id), N = (0, a.cf)([f.A, C.default, b.A], () => {
        let e = f.A.getCurrentUserActiveStream();
        return {
            displayUserMode: C.default.getDisplayUserMode(),
            displayNameMode: C.default.getDisplayNameMode(),
            avatarSizeMode: C.default.getAvatarSizeMode(),
            streamApplication: c?.pid === b.A.getTargetPID() ? (0, g.A)(u) : null,
            stream: e
        }
    });
    return (0, l.jsx)(K, {
        ...N,
        application: y,
        ...e,
        overlayVoiceStates: r,
        channel: n,
        guildId: n?.guild_id,
        title: s ?? "",
        streamMetadata: c,
        streamApplication: N.streamApplication ?? {
            id: null,
            name: c?.sourceName
        },
        isSettingsPreview: t
    })
}