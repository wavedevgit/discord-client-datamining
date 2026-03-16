/** chunk id: 393172 params = (module,exports,require) **/
i.d(t, {
    Ay: () => z,
    DH: () => Y
}), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(311907),
    d = i(397927),
    o = i(717558),
    u = i(429913),
    c = i(478063),
    A = i(47167),
    m = i(22705),
    g = i(209932),
    h = i(63995),
    x = i(69407),
    p = i(530804),
    f = i(616356),
    I = i(961350),
    S = i(734057),
    E = i(309010),
    v = i(485296),
    y = i(287809),
    N = i(977997),
    V = i(607567),
    T = i(256415),
    j = i(403362),
    C = i(996439),
    w = i(820883),
    _ = i(810412),
    D = i(412477),
    O = i(395011),
    b = i(243612),
    k = i(147905);
i(392164);
var G = i(652215),
    M = i(731854),
    L = i(985018),
    R = i(585990);
let P = e => {
    let t = (e ?? 0) % w.A.DEFAULT_AVATARS.length;
    return w.A.DEFAULT_AVATARS[t]
};

function U(e) {
    let {
        hiddenVoiceStates: t,
        voiceStateMap: i,
        size: s,
        locked: l,
        flipped: o
    } = e, u = (0, k.Ob)(s), A = (0, r.yK)([y.default, S.A], () => t.map(e => {
        let t = y.default.getUser(e);
        if (null == t) return;
        let n = S.A.getChannel(i.get(e)?.voiceState.channelId);
        return t.getAvatarURL(n?.getGuildId(), u, !1)
    }).filter(j.Vq), [t, i, u]), m = A[0] ?? P(0), g = A[1] ?? P(1);
    return (0, n.jsxs)("div", {
        className: a()(R.ZR, l && R.xt, o && R.zq),
        children: [(0, n.jsx)("div", {
            className: R.e5,
            children: (0, n.jsx)(c.A, {
                size: s,
                backSrc: m,
                frontSrc: g,
                isTyping: !1
            })
        }), (0, n.jsx)("div", {
            className: R.AP,
            children: (0, n.jsxs)(d.Text, {
                variant: "text-xs/medium",
                children: ["+", t.length, " others in voice"]
            })
        })]
    })
}
let Y = s.memo(function(e) {
    let {
        id: t,
        context: i = M.x.DEFAULT,
        channel: l,
        overlayVoiceStates: a,
        displayNameMode: o,
        displayUserMode: u,
        locked: c,
        pinned: A,
        guildId: m,
        showEmpty: g = !0,
        isPreviewingInGame: h,
        isSettingsPreview: x = !1,
        anchorLeft: p,
        avatarSizeMode: I,
        maxDisplayedVoiceStates: S = 8
    } = e, E = (0, _.Dk)(() => (function(e) {
        let [t, i] = e;
        return new Set(i)
    })(a), [a]), [v, y] = a, N = y.length > 0 && null != i && null != l && (!c || A), V = (0, r.yK)([f.A], () => Array.from(E).map(e => f.A.getStreamForUser(e, m)).filter(j.Vq).map(e => e.ownerId), [m, E]);
    s.useEffect(() => {
        N && (0, _.Y)(G.uss.VOICE_V3, {
            locked: T.default.isInstanceLocked(),
            shownUserIds: Array.from(E),
            liveUserIds: V,
            contentInventoryIds: []
        })
    }, [E, V, N]);
    let C = -1 !== S ? y.slice(0, S) : y,
        w = -1 !== S ? y.slice(S) : [],
        O = v.get(w[0]),
        b = u === G.f5z.ALWAYS && -1 !== S;
    return N ? (0, n.jsxs)("div", {
        className: R.h8,
        children: [C.map(e => {
            let s = v.get(e);
            return null == s ? null : (0, n.jsx)(k.Ay, {
                sortedVoiceState: s,
                channel: l,
                widgetId: t,
                flipped: !p,
                isPreviewingInGame: h,
                isSettingsPreview: x,
                context: i,
                size: I,
                displayNameMode: o,
                displayUserMode: u,
                locked: c
            }, e)
        }), b && 1 === w.length && null != O && (0, n.jsx)(k.Ay, {
            sortedVoiceState: O,
            channel: l,
            widgetId: t,
            flipped: !p,
            isPreviewingInGame: h,
            isSettingsPreview: x,
            context: i,
            size: I,
            displayNameMode: o,
            displayUserMode: u,
            locked: c
        }, w[0]), b && w.length > 1 && (0, n.jsx)(U, {
            hiddenVoiceStates: w,
            voiceStateMap: v,
            size: (0, k.FT)(I),
            locked: c,
            flipped: !p
        })]
    }) : c || !g ? null : (0, n.jsx)(D.g, {
        emptyText: L.intl.string(L.t.hEh0l1),
        icon: d.HKD
    })
});

function z(e) {
    let {
        isSettingsPreview: t
    } = e, i = (0, r.bG)([E.A, S.A], () => S.A.getChannel(E.A.getVoiceChannelId())), l = (0, A.Ay)(i), a = function(e, t) {
        let i = (0, r.bG)([E.A, S.A], () => S.A.getChannel(E.A.getVoiceChannelId())),
            [n] = (0, r.bG)([V.Ay, h.A, E.A, S.A], () => {
                let e = S.A.getChannel(E.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [h.A.getMutableParticipants(e.id, x.ip.SPEAKER), h.A.getParticipantsVersion(e.id)] : [V.Ay.getVoiceStatesForChannel(e), V.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], C.D),
            l = (0, p.$n)(i?.id, n),
            a = s.useMemo(() => new Map(l.map(e => [e.user.id, e])), [l]),
            d = (0, r.bG)([I.default], () => I.default.getId());
        return [a, (0, r.yK)([N.A, E.A, v.A, g.A], () => {
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
                    }, [N.A, E.A, v.A, g.A]),
                    s = t === d;
                (i || s) && n.set(t, {
                    isSpeaking: i,
                    isCurrentUser: s
                })
            }
            let s = [],
                a = [],
                r = [];
            for (let e = 0; e < i.length; e++) {
                let l = i[e],
                    d = n.get(l);
                e < t ? s.push(l) : d && (d.isSpeaking || d.isCurrentUser) ? r.push(l) : a.push(l)
            }
            if (r.length > 0) {
                let e = s.slice(0, t - r.length),
                    i = s.slice(t - r.length);
                return [...e, ...r, ...i, ...a]
            }
            return i
        }, [l, e, d, t])]
    }(M.x.DEFAULT, e.maxDisplayedVoiceStates), d = (0, r.bG)([f.A], () => f.A.getStreamerActiveStreamMetadata()), c = (0, b.b4)(), y = (0, u.h)(c?.id), j = (0, r.cf)([f.A, T.default, O.A], () => {
        let e = f.A.getCurrentUserActiveStream();
        return {
            displayUserMode: T.default.getDisplayUserMode(),
            displayNameMode: T.default.getDisplayNameMode(),
            avatarSizeMode: T.default.getAvatarSizeMode(),
            streamApplication: d?.pid === O.A.getTargetPID() ? (0, m.A)(c) : null,
            stream: e
        }
    });
    return (0, n.jsx)(Y, {
        ...j,
        application: y,
        ...e,
        overlayVoiceStates: a,
        channel: i,
        guildId: i?.guild_id,
        title: l ?? "",
        streamMetadata: d,
        streamApplication: j.streamApplication ?? {
            id: null,
            name: d?.sourceName
        },
        isSettingsPreview: t
    })
}