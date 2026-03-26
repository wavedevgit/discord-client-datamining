/** chunk id: 393172 params = (module,exports,require) **/
i.d(t, {
    Ay: () => z,
    DH: () => Y
}), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(311907),
    d = i(397927),
    o = i(717558),
    u = i(429913),
    c = i(478063),
    A = i(47167),
    m = i(22705),
    g = i(209932),
    h = i(63995),
    p = i(69407),
    x = i(530804),
    f = i(616356),
    I = i(961350),
    S = i(734057),
    E = i(309010),
    v = i(485296),
    y = i(287809),
    N = i(977997),
    V = i(607567),
    j = i(256415),
    T = i(403362),
    C = i(996439),
    _ = i(820883),
    w = i(810412),
    b = i(412477),
    O = i(395011),
    G = i(243612),
    D = i(147905);
i(392164);
var P = i(652215),
    M = i(731854),
    k = i(985018),
    R = i(901245);
let L = e => {
    let t = (e ?? 0) % _.A.DEFAULT_AVATARS.length;
    return _.A.DEFAULT_AVATARS[t]
};

function U(e) {
    let {
        hiddenVoiceStates: t,
        voiceStateMap: i,
        size: l,
        locked: s,
        flipped: o
    } = e, u = (0, D.Ob)(l), A = (0, r.yK)([y.default, S.A], () => t.map(e => {
        let t = y.default.getUser(e);
        if (null == t) return;
        let n = S.A.getChannel(i.get(e)?.voiceState.channelId);
        return t.getAvatarURL(n?.getGuildId(), u, !1)
    }).filter(T.Vq), [t, i, u]), m = A[0] ?? L(0), g = A[1] ?? L(1);
    return (0, n.jsxs)("div", {
        className: a()(R.ZR, s && R.xt, o && R.zq),
        children: [(0, n.jsx)("div", {
            className: R.e5,
            children: (0, n.jsx)(c.A, {
                size: l,
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
let Y = l.memo(function(e) {
    let {
        id: t,
        context: i = M.x.DEFAULT,
        channel: s,
        overlayVoiceStates: a,
        displayNameMode: o,
        displayUserMode: u,
        locked: c,
        pinned: A,
        guildId: m,
        showEmpty: g = !0,
        isPreviewingInGame: h,
        isSettingsPreview: p = !1,
        anchorLeft: x,
        avatarSizeMode: I,
        maxDisplayedVoiceStates: S = 8
    } = e, E = (0, w.Dk)(() => (function(e) {
        let [t, i] = e;
        return new Set(i)
    })(a), [a]), [v, y] = a, N = y.length > 0 && null != i && null != s && (!c || A), V = (0, r.yK)([f.A], () => Array.from(E).map(e => f.A.getStreamForUser(e, m)).filter(T.Vq).map(e => e.ownerId), [m, E]);
    l.useEffect(() => {
        N && (0, w.Y)(P.uss.VOICE_V3, {
            locked: j.default.isInstanceLocked(),
            shownUserIds: Array.from(E),
            liveUserIds: V,
            contentInventoryIds: []
        })
    }, [E, V, N]);
    let C = -1 !== S ? y.slice(0, S) : y,
        _ = -1 !== S ? y.slice(S) : [],
        O = v.get(_[0]),
        G = u === P.f5z.ALWAYS && -1 !== S;
    return N ? (0, n.jsxs)("div", {
        className: R.h8,
        children: [C.map(e => {
            let l = v.get(e);
            return null == l ? null : (0, n.jsx)(D.Ay, {
                sortedVoiceState: l,
                channel: s,
                widgetId: t,
                flipped: !x,
                isPreviewingInGame: h,
                isSettingsPreview: p,
                context: i,
                size: I,
                displayNameMode: o,
                displayUserMode: u,
                locked: c
            }, e)
        }), G && 1 === _.length && null != O && (0, n.jsx)(D.Ay, {
            sortedVoiceState: O,
            channel: s,
            widgetId: t,
            flipped: !x,
            isPreviewingInGame: h,
            isSettingsPreview: p,
            context: i,
            size: I,
            displayNameMode: o,
            displayUserMode: u,
            locked: c
        }, _[0]), G && _.length > 1 && (0, n.jsx)(U, {
            hiddenVoiceStates: _,
            voiceStateMap: v,
            size: (0, D.FT)(I),
            locked: c,
            flipped: !x
        })]
    }) : c || !g ? null : (0, n.jsx)(b.g, {
        emptyText: k.intl.string(k.t.hEh0l1),
        icon: d.HKD
    })
});

function z(e) {
    let {
        isSettingsPreview: t
    } = e, i = (0, r.bG)([E.A, S.A], () => S.A.getChannel(E.A.getVoiceChannelId())), s = (0, A.Ay)(i), a = function(e, t) {
        let i = (0, r.bG)([E.A, S.A], () => S.A.getChannel(E.A.getVoiceChannelId())),
            [n] = (0, r.bG)([V.Ay, h.A, E.A, S.A], () => {
                let e = S.A.getChannel(E.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [h.A.getMutableParticipants(e.id, p.ip.SPEAKER), h.A.getParticipantsVersion(e.id)] : [V.Ay.getVoiceStatesForChannel(e), V.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], C.D),
            s = (0, x.$n)(i?.id, n),
            a = l.useMemo(() => new Map(s.map(e => [e.user.id, e])), [s]),
            d = (0, r.bG)([I.default], () => I.default.getId());
        return [a, (0, r.yK)([N.A, E.A, v.A, g.A], () => {
            let i = Array.from(new Set(s.map(e => {
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
                    l = t === d;
                (i || l) && n.set(t, {
                    isSpeaking: i,
                    isCurrentUser: l
                })
            }
            let l = [],
                a = [],
                r = [];
            for (let e = 0; e < i.length; e++) {
                let s = i[e],
                    d = n.get(s);
                e < t ? l.push(s) : d && (d.isSpeaking || d.isCurrentUser) ? r.push(s) : a.push(s)
            }
            if (r.length > 0) {
                let e = l.slice(0, t - r.length),
                    i = l.slice(t - r.length);
                return [...e, ...r, ...i, ...a]
            }
            return i
        }, [s, e, d, t])]
    }(M.x.DEFAULT, e.maxDisplayedVoiceStates), d = (0, r.bG)([f.A], () => f.A.getStreamerActiveStreamMetadata()), c = (0, G.b4)(), y = (0, u.h)(c?.id), T = (0, r.cf)([f.A, j.default, O.A], () => {
        let e = f.A.getCurrentUserActiveStream();
        return {
            displayUserMode: j.default.getDisplayUserMode(),
            displayNameMode: j.default.getDisplayNameMode(),
            avatarSizeMode: j.default.getAvatarSizeMode(),
            streamApplication: d?.pid === O.A.getTargetPID() ? (0, m.A)(c) : null,
            stream: e
        }
    });
    return (0, n.jsx)(Y, {
        ...T,
        application: y,
        ...e,
        overlayVoiceStates: a,
        channel: i,
        guildId: i?.guild_id,
        title: s ?? "",
        streamMetadata: d,
        streamApplication: T.streamApplication ?? {
            id: null,
            name: d?.sourceName
        },
        isSettingsPreview: t
    })
}