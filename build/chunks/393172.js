/** chunk id: 393172 params = (module,exports,require) **/
n.d(t, {
    Ay: () => z,
    DH: () => V
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(397927),
    u = n(717558),
    d = n(429913),
    c = n(478063),
    h = n(47167),
    g = n(22705),
    m = n(209932),
    f = n(63995),
    A = n(69407),
    I = n(530804),
    E = n(616356),
    p = n(961350),
    _ = n(734057),
    S = n(309010),
    x = n(485296),
    T = n(287809),
    N = n(977997),
    C = n(607567),
    v = n(256415),
    y = n(403362),
    M = n(996439),
    R = n(820883),
    D = n(810412),
    b = n(412477),
    O = n(395011),
    w = n(243612),
    j = n(147905);
n(392164);
var U = n(652215),
    L = n(731854),
    k = n(985018),
    G = n(458509);
let P = e => {
    let t = (e ?? 0) % R.A.DEFAULT_AVATARS.length;
    return R.A.DEFAULT_AVATARS[t]
};

function F(e) {
    let {
        hiddenVoiceStates: t,
        voiceStateMap: n,
        size: l,
        locked: r,
        flipped: u
    } = e, d = (0, j.Ob)(l), h = (0, a.yK)([T.default, _.A], () => t.map(e => {
        let t = T.default.getUser(e);
        if (null == t) return;
        let i = _.A.getChannel(n.get(e)?.voiceState.channelId);
        return t.getAvatarURL(i?.getGuildId(), d, !1)
    }).filter(y.Vq), [t, n, d]), g = h[0] ?? P(0), m = h[1] ?? P(1);
    return (0, i.jsxs)("div", {
        className: s()(G.ZR, r && G.xt, u && G.zq),
        children: [(0, i.jsx)("div", {
            className: G.e5,
            children: (0, i.jsx)(c.A, {
                size: l,
                backSrc: g,
                frontSrc: m,
                isTyping: !1
            })
        }), (0, i.jsx)("div", {
            className: G.AP,
            children: (0, i.jsxs)(o.Text, {
                variant: "text-xs/medium",
                children: ["+", t.length, " others in voice"]
            })
        })]
    })
}
let V = l.memo(function(e) {
    let {
        id: t,
        context: n = L.x.DEFAULT,
        channel: r,
        overlayVoiceStates: s,
        displayNameMode: u,
        displayUserMode: d,
        locked: c,
        pinned: h,
        guildId: g,
        showEmpty: m = !0,
        isPreviewingInGame: f,
        isSettingsPreview: A = !1,
        anchorLeft: I,
        avatarSizeMode: p,
        maxDisplayedVoiceStates: _ = 8
    } = e, S = (0, D.Dk)(() => (function(e) {
        let [t, n] = e;
        return new Set(n)
    })(s), [s]), [x, T] = s, N = T.length > 0 && null != n && null != r && (!c || h), C = (0, a.yK)([E.A], () => Array.from(S).map(e => E.A.getStreamForUser(e, g)).filter(y.Vq).map(e => e.ownerId), [g, S]);
    l.useEffect(() => {
        N && (0, D.Y)(U.uss.VOICE_V3, {
            locked: v.default.isInstanceLocked(),
            shownUserIds: Array.from(S),
            liveUserIds: C,
            contentInventoryIds: []
        })
    }, [S, C, N]);
    let M = -1 !== _ ? T.slice(0, _) : T,
        R = -1 !== _ ? T.slice(_) : [],
        O = x.get(R[0]),
        w = d === U.f5z.ALWAYS && -1 !== _;
    return N ? (0, i.jsxs)("div", {
        className: G.h8,
        children: [M.map(e => {
            let l = x.get(e);
            return null == l ? null : (0, i.jsx)(j.Ay, {
                sortedVoiceState: l,
                channel: r,
                widgetId: t,
                flipped: !I,
                isPreviewingInGame: f,
                isSettingsPreview: A,
                context: n,
                size: p,
                displayNameMode: u,
                displayUserMode: d,
                locked: c
            }, e)
        }), w && 1 === R.length && null != O && (0, i.jsx)(j.Ay, {
            sortedVoiceState: O,
            channel: r,
            widgetId: t,
            flipped: !I,
            isPreviewingInGame: f,
            isSettingsPreview: A,
            context: n,
            size: p,
            displayNameMode: u,
            displayUserMode: d,
            locked: c
        }, R[0]), w && R.length > 1 && (0, i.jsx)(F, {
            hiddenVoiceStates: R,
            voiceStateMap: x,
            size: (0, j.FT)(p),
            locked: c,
            flipped: !I
        })]
    }) : c || !m ? null : (0, i.jsx)(b.g, {
        emptyText: k.intl.string(k.t.hEh0l1),
        icon: o.HKD
    })
});

function z(e) {
    let {
        isSettingsPreview: t
    } = e, n = (0, a.bG)([S.A, _.A], () => _.A.getChannel(S.A.getVoiceChannelId())), r = (0, h.Ay)(n), s = function(e, t) {
        let n = (0, a.bG)([S.A, _.A], () => _.A.getChannel(S.A.getVoiceChannelId())),
            [i] = (0, a.bG)([C.Ay, f.A, S.A, _.A], () => {
                let e = _.A.getChannel(S.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [f.A.getMutableParticipants(e.id, A.ip.SPEAKER), f.A.getParticipantsVersion(e.id)] : [C.Ay.getVoiceStatesForChannel(e), C.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], M.D),
            r = (0, I.$n)(n?.id, i),
            s = l.useMemo(() => new Map(r.map(e => [e.user.id, e])), [r]),
            o = (0, a.bG)([p.default], () => p.default.getId());
        return [s, (0, a.yK)([N.A, S.A, x.A, m.A], () => {
            let n = Array.from(new Set(r.map(e => {
                let {
                    user: t
                } = e;
                return t.id
            })));
            if (-1 === t || n.length <= t) return n;
            let i = new Map;
            for (let t of n) {
                let n = (0, u.R)({
                        userId: t,
                        checkSoundSharing: !0,
                        checkSoundboardSounds: !1,
                        checkIsMuted: !0,
                        context: e
                    }, [N.A, S.A, x.A, m.A]),
                    l = t === o;
                (n || l) && i.set(t, {
                    isSpeaking: n,
                    isCurrentUser: l
                })
            }
            let l = [],
                s = [],
                a = [];
            for (let e = 0; e < n.length; e++) {
                let r = n[e],
                    o = i.get(r);
                e < t ? l.push(r) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(r) : s.push(r)
            }
            if (a.length > 0) {
                let e = l.slice(0, t - a.length),
                    n = l.slice(t - a.length);
                return [...e, ...a, ...n, ...s]
            }
            return n
        }, [r, e, o, t])]
    }(L.x.DEFAULT, e.maxDisplayedVoiceStates), o = (0, a.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()), c = (0, w.b4)(), T = (0, d.h)(c?.id), y = (0, a.cf)([E.A, v.default, O.A], () => {
        let e = E.A.getCurrentUserActiveStream();
        return {
            displayUserMode: v.default.getDisplayUserMode(),
            displayNameMode: v.default.getDisplayNameMode(),
            avatarSizeMode: v.default.getAvatarSizeMode(),
            streamApplication: o?.pid === O.A.getTargetPID() ? (0, g.A)(c) : null,
            stream: e
        }
    });
    return (0, i.jsx)(V, {
        ...y,
        application: T,
        ...e,
        overlayVoiceStates: s,
        channel: n,
        guildId: n?.guild_id,
        title: r ?? "",
        streamMetadata: o,
        streamApplication: y.streamApplication ?? {
            id: null,
            name: o?.sourceName
        },
        isSettingsPreview: t
    })
}