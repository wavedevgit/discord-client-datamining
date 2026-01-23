/** Chunk was on web.js **/
/** chunk id: 273198, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(747238), n(812715), n(866193);
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(927813),
    o = n(562153),
    l = n(939341),
    c = n(583846),
    u = n(821988),
    d = n(176563),
    f = n(636202),
    p = n(977001),
    _ = n(506326),
    h = n(910692),
    m = n(18282),
    g = n(299846),
    E = n(985018);

function y(e) {
    if (e === a.j.WEEK) return E.t["7TXfc6"]
}
let b = (e, t, n, r) => {
        let i = y(r),
            a = o.Ay.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return E.intl.formatToMarkdownString(i, {
            gameName: s,
            userName: a
        }).replaceAll("*", "")
    },
    O = (e, t) => E.intl.formatToPlainString(E.t.tAwI1k, {
        username: t.username,
        activity: e.extra.game_name
    }),
    v = e => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: a,
            onReaction: o,
            onVoiceChannelPreview: y
        } = e, {
            largeImage: v
        } = (0, l.nO)({
            entry: n
        }), {
            user: A,
            details: I,
            appName: S
        } = (0, g.u)(n), {
            primaryColor: T,
            secondaryColor: C
        } = (0, d.A)(null == v ? void 0 : v.src), N = (0, c.ty)(n), w = (0, c.TQ)(n), R = i.useCallback(e => {
            if (null != t && null != A && null != N && null != w && (0, p._E)(w)) return (0, u.p6)({
                entry: n,
                applicationImageSrc: null == v ? void 0 : v.src,
                avatarSrcs: [A.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                description: b(n, t, A, w),
                timestamp: E.intl.formatToPlainString(E.t.YL7UE3, {
                    hours: Math.round(N / s.A.Seconds.HOUR)
                }),
                colors: [T, C],
                channelId: e
            })
        }, [null == v ? void 0 : v.src, t, N, n, T, w, C, A]);
        if (null == A || null == N || null == w || !(0, p._E)(w)) return null;
        let P = null != n.extra.platform ? f.n[n.extra.platform] : null;
        return (0, r.jsxs)(h.YN, {
            children: [(0, r.jsx)(h.BC, {
                channel: t,
                headerIcons: null == P ? null : (0, r.jsx)(m.A, {
                    Icon: P,
                    "aria-label": E.intl.string(E.t.YR4cHH)
                }),
                entry: n,
                userDescription: E.t.rPqqts,
                title: S,
                subtitle: I,
                badges: (0, r.jsx)(_.mG, {
                    location: _.N5.POPOUT,
                    children: p.ac.map((e, t) => (0, r.jsx)(e, {
                        entry: n
                    }, t))
                }),
                disableGameProfileLinks: a
            }), (0, r.jsx)(h.Eh, {
                children: (0, r.jsx)(h.fD, {
                    onReaction: o,
                    onVoiceChannelPreview: y,
                    user: A,
                    channel: t,
                    generateReactionImage: R,
                    reactionImageAltText: O(n, A),
                    entry: n
                })
            })]
        })
    }