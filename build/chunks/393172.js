/** chunk id: 393172, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => z,
    DH: () => H
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
    h = n(961350),
    A = n(734057),
    v = n(309010),
    O = n(485296),
    S = n(287809),
    j = n(977997),
    x = n(607567),
    I = n(256415),
    E = n(403362),
    C = n(996439),
    P = n(820883),
    N = n(810412),
    T = n(412477),
    w = n(395011),
    L = n(243612),
    D = n(147905);
n(392164);
var R = n(652215),
    k = n(731854),
    M = n(985018),
    U = n(585990);

function G(e) {
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

function V(e, t) {
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
let F = e => {
    let t = (null != e ? e : 0) % P.A.DEFAULT_AVATARS.length;
    return P.A.DEFAULT_AVATARS[t]
};

function W(e) {
    var t, n;
    let {
        hiddenVoiceStates: l,
        voiceStateMap: i,
        size: c,
        locked: u,
        flipped: p
    } = e, f = (0, D.Ob)(c), m = (0, s.yK)([S.default, A.A], () => l.map(e => {
        var t;
        let n = S.default.getUser(e);
        if (null == n) return;
        let r = A.A.getChannel(null == (t = i.get(e)) ? void 0 : t.voiceState.channelId);
        return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), f, !1)
    }).filter(E.Vq), [l, i, f]), g = null != (t = m[0]) ? t : F(0), y = null != (n = m[1]) ? n : F(1);
    return (0, r.jsxs)("div", {
        className: a()(U.ZR, u && U.xt, p && U.zq),
        children: [(0, r.jsx)("div", {
            className: U.e5,
            children: (0, r.jsx)(d.A, {
                size: c,
                backSrc: g,
                frontSrc: y,
                isTyping: !1
            })
        }), (0, r.jsx)("div", {
            className: U.AP,
            children: (0, r.jsxs)(o.Text, {
                variant: "text-xs/medium",
                children: ["+", l.length, " others in voice"]
            })
        })]
    })
}
let H = l.memo(function(e) {
    let {
        id: t,
        context: n = k.x.DEFAULT,
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
        avatarSizeMode: h,
        maxDisplayedVoiceStates: A = 8
    } = e, v = (0, N.Dk)(() => (function(e) {
        let [t, n] = e;
        return new Set(n)
    })(a), [a]), [O, S] = a, j = S.length > 0 && null != n && null != i && (!d || p), x = (0, s.yK)([_.A], () => Array.from(v).map(e => _.A.getStreamForUser(e, f)).filter(E.Vq).map(e => e.ownerId), [f, v]);
    l.useEffect(() => {
        j && (0, N.Y)(R.uss.VOICE_V3, {
            locked: I.default.isInstanceLocked(),
            shownUserIds: Array.from(v),
            liveUserIds: x,
            contentInventoryIds: []
        })
    }, [v, x, j]);
    let C = -1 !== A ? S.slice(0, A) : S,
        P = -1 !== A ? S.slice(A) : [],
        w = O.get(P[0]),
        L = u === R.f5z.ALWAYS && -1 !== A;
    return j ? (0, r.jsxs)("div", {
        className: U.h8,
        children: [C.map(e => {
            let l = O.get(e);
            return null == l ? null : (0, r.jsx)(D.Ay, {
                sortedVoiceState: l,
                channel: i,
                widgetId: t,
                flipped: !b,
                isPreviewingInGame: g,
                isSettingsPreview: y,
                context: n,
                size: h,
                displayNameMode: c,
                displayUserMode: u,
                locked: d
            }, e)
        }), L && 1 === P.length && null != w && (0, r.jsx)(D.Ay, {
            sortedVoiceState: w,
            channel: i,
            widgetId: t,
            flipped: !b,
            isPreviewingInGame: g,
            isSettingsPreview: y,
            context: n,
            size: h,
            displayNameMode: c,
            displayUserMode: u,
            locked: d
        }, P[0]), L && P.length > 1 && (0, r.jsx)(W, {
            hiddenVoiceStates: P,
            voiceStateMap: O,
            size: (0, D.FT)(h),
            locked: d,
            flipped: !b
        })]
    }) : d || !m ? null : (0, r.jsx)(T.g, {
        emptyText: M.intl.string(M.t.hEh0l1),
        icon: o.HKD
    })
});

function z(e) {
    var t;
    let {
        isSettingsPreview: n
    } = e, i = (0, s.bG)([v.A, A.A], () => A.A.getChannel(v.A.getVoiceChannelId())), a = (0, p.Ay)(i), o = function(e, t) {
        let n = (0, s.bG)([v.A, A.A], () => A.A.getChannel(v.A.getVoiceChannelId())),
            [r] = (0, s.bG)([x.Ay, g.A, v.A, A.A], () => {
                let e = A.A.getChannel(v.A.getVoiceChannelId());
                return null == e ? [
                    [], -1
                ] : e.isGuildStageVoice() ? [g.A.getMutableParticipants(e.id, y.ip.SPEAKER), g.A.getParticipantsVersion(e.id)] : [x.Ay.getVoiceStatesForChannel(e), x.Ay.getVoiceStateVersion(e.getGuildId())]
            }, [], C.D),
            i = (0, b.$n)(null == n ? void 0 : n.id, r),
            a = l.useMemo(() => new Map(i.map(e => [e.user.id, e])), [i]),
            o = (0, s.bG)([h.default], () => h.default.getId());
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
    }(k.x.DEFAULT, e.maxDisplayedVoiceStates), d = (0, s.bG)([_.A], () => _.A.getStreamerActiveStreamMetadata()), S = (0, L.b4)(), E = (0, u.h)(null == S ? void 0 : S.id), P = (0, s.cf)([_.A, I.default, w.A], () => {
        let e = _.A.getCurrentUserActiveStream();
        return {
            displayUserMode: I.default.getDisplayUserMode(),
            displayNameMode: I.default.getDisplayNameMode(),
            avatarSizeMode: I.default.getAvatarSizeMode(),
            streamApplication: (null == d ? void 0 : d.pid) === w.A.getTargetPID() ? (0, f.A)(S) : null,
            stream: e
        }
    });
    return (0, r.jsx)(H, V(G(V(G({}, P), {
        application: E
    }), e), {
        overlayVoiceStates: o,
        channel: i,
        guildId: null == i ? void 0 : i.guild_id,
        title: null != a ? a : "",
        streamMetadata: d,
        streamApplication: null != (t = P.streamApplication) ? t : {
            id: null,
            name: null == d ? void 0 : d.sourceName
        },
        isSettingsPreview: n
    }))
}