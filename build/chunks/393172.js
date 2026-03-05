/** chunk id: 393172, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Ay: () => Y,
    DH: () => F
}), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(311907),
    d = i(397927),
    o = i(717558),
    u = i(429913),
    c = i(478063),
    A = i(47167),
    g = i(22705),
    m = i(209932),
    h = i(63995),
    f = i(69407),
    x = i(530804),
    I = i(616356),
    p = i(961350),
    S = i(734057),
    E = i(309010),
    y = i(485296),
    v = i(287809),
    N = i(977997),
    V = i(607567),
    T = i(256415),
    C = i(403362),
    _ = i(996439),
    j = i(820883),
    w = i(810412),
    D = i(412477),
    G = i(395011),
    O = i(243612),
    L = i(147905);
i(392164);
var b = i(652215),
    R = i(731854),
    k = i(985018),
    M = i(975424);
let P = e => {
    let t = (e ?? 0) % j.A.DEFAULT_AVATARS.length;
    return j.A.DEFAULT_AVATARS[t]
};

function U(e) {
    let {
        hiddenVoiceStates: t,
        voiceStateMap: i,
        size: s,
        locked: l,
        flipped: o
    } = e, u = (0, L.Ob)(s), A = (0, a.yK)([v.default, S.A], () => t.map(e => {
        let t = v.default.getUser(e);
        if (null == t) return;
        let n = S.A.getChannel(i.get(e)?.voiceState.channelId);
        return t.getAvatarURL(n?.getGuildId(), u, !1)
    }).filter(C.Vq), [t, i, u]), g = A[0] ?? P(0), m = A[1] ?? P(1);
    return (0, n.jsxs)("div", {
        className: r()(M.ZR, l && M.xt, o && M.zq),
        children: [(0, n.jsx)("div", {
            className: M.e5,
            children: (0, n.jsx)(c.A, {
                size: s,
                backSrc: g,
                frontSrc: m,
                isTyping: !1
            })
        }), (0, n.jsx)("div", {
            className: M.AP,
            children: (0, n.jsxs)(d.Text, {
                variant: "text-xs/medium",
                children: ["+", t.length, " others in voice"]
            })
        })]
    })
}
let F = s.memo(function(e) {
    let {
        id: t,
        context: i = R.x.DEFAULT,
        channel: l,
        overlayVoiceStates: r,
        displayNameMode: o,
        displayUserMode: u,
        locked: c,
        pinned: A,
        guildId: g,
        showEmpty: m = !0,
        isPreviewingInGame: h,
        isSettingsPreview: f = !1,
        anchorLeft: x,
        avatarSizeMode: p,
        maxDisplayedVoiceStates: S = 8
    } = e, E = (0, w.Dk)(() => (function(e) {
        let [t, i] = e;
        return new Set(i)
    })(r), [r]), [y, v] = r, N = v.length > 0 && null != i && null != l && (!c || A), V = (0, a.yK)([I.A], () => Array.from(E).map(e => I.A.getStreamForUser(e, g)).filter(C.Vq).map(e => e.ownerId), [g, E]);
    s.useEffect(() => {
        N && (0, w.Y)(b.uss.VOICE_V3, {
            locked: T.default.isInstanceLocked(),
            shownUserIds: Array.from(E),
            liveUserIds: V,
            contentInventoryIds: []
        })
    }, [E, V, N]);
    let _ = -1 !== S ? v.slice(0, S) : v,
        j = -1 !== S ? v.slice(S) : [],
        G = y.get(j[0]),
        O = u === b.f5z.ALWAYS && -1 !== S;
    return N ? (0, n.jsxs)("div", {
        className: M.h8,
        children: [_.map(e => {
            let s = y.get(e);
            return null == s ? null : (0, n.jsx)(L.Ay, {
                sortedVoiceState: s,
                channel: l,
                widgetId: t,
                flipped: !x,
                isPreviewingInGame: h,
                isSettingsPreview: f,
                context: i,
                size: p,
                displayNameMode: o,
                displayUserMode: u,
                locked: c
            }, e)
        }), O && 1 === j.length && null != G && (0, n.jsx)(L.Ay, {
            sortedVoiceState: G,
            channel: l,
            widgetId: t,
            flipped: !x,
            isPreviewingInGame: h,
            isSettingsPreview: f,
            context: i,
            size: p,
            displayNameMode: o,
            displayUserMode: u,
            locked: c
        }, j[0]), O && j.length > 1 && (0, n.jsx)(U, {
            hiddenVoiceStates: j,
            voiceStateMap: y,
            size: (0, L.FT)(p),
            locked: c,
            flipped: !x
        })]
    }) : c || !m ? null : (0, n.jsx)(D.g, {
        emptyText: k.intl.string(k.t.hEh0l1),
        icon: d.HKD
    })
});

function Y(e) {
    let {
        isSettingsPreview: t
    } = e, i = (0, a.bG)([E.A, S.A], () => S.A.getChannel(E.A.getVoiceChannelId())), l = (0, A.Ay)(i), r = function(e, t) {
        let i = (0, a.bG)([E.A, S.A], () => S.A.getChannel(E.A.getVoiceChannelId())),
            [n] = (0, a.bG)([V.Ay, h.A, E.A, S.A], () => {
                let e = S.A.getChannel(E.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [h.A.getMutableParticipants(e.id, f.ip.SPEAKER), h.A.getParticipantsVersion(e.id)] : [V.Ay.getVoiceStatesForChannel(e), V.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], _.D),
            l = (0, x.$n)(i?.id, n),
            r = s.useMemo(() => new Map(l.map(e => [e.user.id, e])), [l]),
            d = (0, a.bG)([p.default], () => p.default.getId());
        return [r, (0, a.yK)([N.A, E.A, y.A, m.A], () => {
            let i = Array.from(new Set(l.map(e => {
                let {
                    user: t
                } = e;
                return t.id
            })));
            if (-1 === t || i.length <= t) return i;
            let n = new Map;
            for (let t of i) {
                let i = (0, o.R)({
                        userId: t,
                        checkSoundSharing: !0,
                        checkSoundboardSounds: !1,
                        checkIsMuted: !0,
                        context: e
                    }, [N.A, E.A, y.A, m.A]),
                    s = t === d;
                (i || s) && n.set(t, {
                    isSpeaking: i,
                    isCurrentUser: s
                })
            }
            let s = [],
                r = [],
                a = [];
            for (let e = 0; e < i.length; e++) {
                let l = i[e],
                    d = n.get(l);
                e < t ? s.push(l) : d && (d.isSpeaking || d.isCurrentUser) ? a.push(l) : r.push(l)
            }
            if (a.length > 0) {
                let e = s.slice(0, t - a.length),
                    i = s.slice(t - a.length);
                return [...e, ...a, ...i, ...r]
            }
            return i
        }, [l, e, d, t])]
    }(R.x.DEFAULT, e.maxDisplayedVoiceStates), d = (0, a.bG)([I.A], () => I.A.getStreamerActiveStreamMetadata()), c = (0, O.b4)(), v = (0, u.h)(c?.id), C = (0, a.cf)([I.A, T.default, G.A], () => {
        let e = I.A.getCurrentUserActiveStream();
        return {
            displayUserMode: T.default.getDisplayUserMode(),
            displayNameMode: T.default.getDisplayNameMode(),
            avatarSizeMode: T.default.getAvatarSizeMode(),
            streamApplication: d?.pid === G.A.getTargetPID() ? (0, g.A)(c) : null,
            stream: e
        }
    });
    return (0, n.jsx)(F, {
        ...C,
        application: v,
        ...e,
        overlayVoiceStates: r,
        channel: i,
        guildId: i?.guild_id,
        title: l ?? "",
        streamMetadata: d,
        streamApplication: C.streamApplication ?? {
            id: null,
            name: d?.sourceName
        },
        isSettingsPreview: t
    })
}