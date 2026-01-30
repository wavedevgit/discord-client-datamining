/** chunk id: 393172, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => H,
    DH: () => F
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(717558),
    u = n(429913),
    d = n(478063),
    p = n(47167),
    f = n(22705),
    m = n(209932),
    g = n(63995),
    y = n(69407),
    b = n(530804),
    _ = n(616356),
    A = n(961350),
    h = n(734057),
    v = n(309010),
    O = n(485296),
    S = n(287809),
    j = n(977997),
    x = n(607567),
    I = n(256415),
    P = n(403362),
    E = n(996439),
    T = n(820883),
    N = n(810412),
    w = n(412477),
    C = n(395011),
    L = n(243612),
    D = n(147905);
n(392164);
var k = n(652215),
    R = n(731854),
    V = n(985018),
    M = n(585990);

function U(e) {
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

function G(e, t) {
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
let W = e => {
    let t = (null != e ? e : 0) % T.A.DEFAULT_AVATARS.length;
    return T.A.DEFAULT_AVATARS[t]
};

function z(e) {
    var t, n;
    let {
        hiddenVoiceStates: l,
        voiceStateMap: i,
        size: c,
        locked: u,
        flipped: p
    } = e, f = (0, D.Ob)(c), m = (0, s.yK)([S.default, h.A], () => l.map(e => {
        var t;
        let n = S.default.getUser(e);
        if (null == n) return;
        let r = h.A.getChannel(null == (t = i.get(e)) ? void 0 : t.voiceState.channelId);
        return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), f, !1)
    }).filter(P.Vq), [l, i, f]), g = null != (t = m[0]) ? t : W(0), y = null != (n = m[1]) ? n : W(1);
    return (0, r.jsxs)("div", {
        className: a()(M.ZR, u && M.xt, p && M.zq),
        children: [(0, r.jsx)("div", {
            className: M.e5,
            children: (0, r.jsx)(d.A, {
                size: c,
                backSrc: g,
                frontSrc: y,
                isTyping: !1
            })
        }), (0, r.jsx)("div", {
            className: M.AP,
            children: (0, r.jsxs)(o.Text, {
                variant: "text-xs/medium",
                children: ["+", l.length, " others in voice"]
            })
        })]
    })
}
let F = l.memo(function(e) {
    let {
        id: t,
        context: n = R.x.DEFAULT,
        channel: i,
        overlayVoiceStates: a,
        displayNameMode: c,
        displayUserMode: u,
        locked: d,
        pinned: p,
        guildId: f,
        showEmpty: m = !0,
        isPreviewingInGame: g,
        isSettingsPreview: y = !1,
        anchorLeft: b,
        avatarSizeMode: A,
        maxDisplayedVoiceStates: h = 8
    } = e, v = (0, N.Dk)(() => (function(e) {
        let [t, n] = e;
        return new Set(n)
    })(a), [a]), [O, S] = a, j = S.length > 0 && null != n && null != i && (!d || p), x = (0, s.yK)([_.A], () => Array.from(v).map(e => _.A.getStreamForUser(e, f)).filter(P.Vq).map(e => e.ownerId), [f, v]);
    l.useEffect(() => {
        j && (0, N.Y)(k.uss.VOICE_V3, {
            locked: I.default.isInstanceLocked(),
            shownUserIds: Array.from(v),
            liveUserIds: x,
            contentInventoryIds: []
        })
    }, [v, x, j]);
    let E = -1 !== h ? S.slice(0, h) : S,
        T = -1 !== h ? S.slice(h) : [],
        C = O.get(T[0]),
        L = u === k.f5z.ALWAYS && -1 !== h;
    return j ? (0, r.jsxs)("div", {
        className: M.h8,
        children: [E.map(e => {
            let l = O.get(e);
            return null == l ? null : (0, r.jsx)(D.Ay, {
                sortedVoiceState: l,
                channel: i,
                widgetId: t,
                flipped: !b,
                isPreviewingInGame: g,
                isSettingsPreview: y,
                context: n,
                size: A,
                displayNameMode: c,
                displayUserMode: u,
                locked: d
            }, e)
        }), L && 1 === T.length && null != C && (0, r.jsx)(D.Ay, {
            sortedVoiceState: C,
            channel: i,
            widgetId: t,
            flipped: !b,
            isPreviewingInGame: g,
            isSettingsPreview: y,
            context: n,
            size: A,
            displayNameMode: c,
            displayUserMode: u,
            locked: d
        }, T[0]), L && T.length > 1 && (0, r.jsx)(z, {
            hiddenVoiceStates: T,
            voiceStateMap: O,
            size: (0, D.FT)(A),
            locked: d,
            flipped: !b
        })]
    }) : d || !m ? null : (0, r.jsx)(w.g, {
        emptyText: V.intl.string(V.t.hEh0l1),
        icon: o.HKD
    })
});

function H(e) {
    var t;
    let {
        isSettingsPreview: n
    } = e, i = (0, s.bG)([v.A, h.A], () => h.A.getChannel(v.A.getVoiceChannelId())), a = (0, p.Ay)(i), o = function(e, t) {
        let n = (0, s.bG)([v.A, h.A], () => h.A.getChannel(v.A.getVoiceChannelId())),
            [r] = (0, s.bG)([x.Ay, g.A, v.A, h.A], () => {
                let e = h.A.getChannel(v.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [g.A.getMutableParticipants(e.id, y.ip.SPEAKER), g.A.getParticipantsVersion(e.id)] : [x.Ay.getVoiceStatesForChannel(e), x.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], E.D),
            i = (0, b.$n)(null == n ? void 0 : n.id, r),
            a = l.useMemo(() => new Map(i.map(e => [e.user.id, e])), [i]),
            o = (0, s.bG)([A.default], () => A.default.getId());
        return [a, (0, s.yK)([j.A, v.A, O.A, m.A], () => {
            let n = Array.from(new Set(i.map(e => {
                let {
                    user: t
                } = e;
                return t.id
            })));
            if (-1 === t || n.length <= t) return n;
            let r = new Map;
            for (let t of n) {
                let n = (0, c.R)({
                        userId: t,
                        checkSoundSharing: !0,
                        checkSoundboardSounds: !1,
                        checkIsMuted: !0,
                        context: e
                    }, [j.A, v.A, O.A, m.A]),
                    l = t === o;
                (n || l) && r.set(t, {
                    isSpeaking: n,
                    isCurrentUser: l
                })
            }
            let l = [],
                a = [],
                s = [];
            for (let e = 0; e < n.length; e++) {
                let i = n[e],
                    o = r.get(i);
                e < t ? l.push(i) : o && (o.isSpeaking || o.isCurrentUser) ? s.push(i) : a.push(i)
            }
            if (s.length > 0) {
                let e = l.slice(0, t - s.length),
                    n = l.slice(t - s.length);
                return [...e, ...s, ...n, ...a]
            }
            return n
        }, [i, e, o, t])]
    }(R.x.DEFAULT, e.maxDisplayedVoiceStates), d = (0, s.bG)([_.A], () => _.A.getStreamerActiveStreamMetadata()), S = (0, L.b4)(), P = (0, u.h)(null == S ? void 0 : S.id), T = (0, s.cf)([_.A, I.default, C.A], () => {
        let e = _.A.getCurrentUserActiveStream();
        return {
            displayUserMode: I.default.getDisplayUserMode(),
            displayNameMode: I.default.getDisplayNameMode(),
            avatarSizeMode: I.default.getAvatarSizeMode(),
            streamApplication: (null == d ? void 0 : d.pid) === C.A.getTargetPID() ? (0, f.A)(S) : null,
            stream: e
        }
    });
    return (0, r.jsx)(F, G(U(G(U({}, T), {
        application: P
    }), e), {
        overlayVoiceStates: o,
        channel: i,
        guildId: null == i ? void 0 : i.guild_id,
        title: null != a ? a : "",
        streamMetadata: d,
        streamApplication: null != (t = T.streamApplication) ? t : {
            id: null,
            name: null == d ? void 0 : d.sourceName
        },
        isSettingsPreview: n
    }))
}