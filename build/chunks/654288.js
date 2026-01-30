/** chunk id: 654288, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(747238), n(812715), n(866193);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(773669),
    l = n(287809),
    c = n(307600),
    u = n(562153),
    d = n(998218),
    f = n(939341),
    p = n(583846),
    _ = n(342652),
    h = n(434200),
    m = n(176563),
    g = n(514243),
    E = n(506326),
    y = n(910692),
    b = n(18282),
    O = n(652215),
    v = n(985018);
let A = (e, t, n) => {
        let r = v.t.LHF6D9,
            i = u.Ay.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            a = e.extra.media_title;
        return v.intl.formatToMarkdownString(r, {
            mediaTitle: a,
            userName: i,
            episodeDescription: e.extra.media_subtitle
        }).replaceAll("*", "")
    },
    I = (e, t) => v.intl.formatToPlainString(v.t.kCbfbN, {
        username: t.username,
        activity: e.extra.media_title
    }),
    S = e => {
        let {
            channel: t,
            entry: n,
            onReaction: u,
            onVoiceChannelPreview: S
        } = e, T = (0, a.bG)([l.default], () => l.default.getUser(n.author_id)), {
            largeImage: C
        } = (0, f.nO)({
            entry: n
        }), {
            primaryColor: N,
            secondaryColor: w
        } = (0, m.A)(null == C ? void 0 : C.src), R = (0, a.bG)([s.default], () => s.default.locale), P = (0, h.A)(O.fg2.CRUNCHYROLL), D = (0, p.kR)(n.extra.media_assets_large_text), L = i.useCallback(e => {
            if (null != T && (null == C ? void 0 : C.src) != null) return (0, _.z)({
                entry: n,
                mediaImageSrc: null == C ? void 0 : C.src,
                avatarSrc: T.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                description: A(n, t, T),
                timestamp: (0, p.As)(n, R),
                episodeDescription: D,
                colors: [N, w],
                channelId: e
            })
        }, [t, n, D, R, null == C ? void 0 : C.src, N, w, T]), x = () => {
            if (null == n.extra.url) return;
            let e = d.A.safeParseWithQuery(n.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, c.h)({
                href: d.A.format(e),
                trusted: !1
            })
        };
        return null == T ? null : (0, r.jsxs)(y.YN, {
            children: [(0, r.jsx)(y.BC, {
                channel: t,
                entry: n,
                userDescription: (0, p.JM)(n) ? v.t["LH+Z3y"] : v.t.YuKgml,
                title: n.extra.media_title,
                subtitle: n.extra.media_subtitle,
                headerIcons: (0, r.jsx)(b.A, {
                    onClick: P,
                    Icon: o.kwD,
                    "aria-label": v.intl.string(v.t.jdJYXw)
                }),
                badges: (0, r.jsx)(E.mG, {
                    location: E.N5.POPOUT,
                    children: g.R.map((e, t) => (0, r.jsx)(e, {
                        entry: n
                    }, t))
                }),
                onClickTitle: x,
                onClickThumbnail: x
            }), (0, r.jsx)(y.Eh, {
                children: (0, r.jsx)(y.fD, {
                    onReaction: u,
                    onVoiceChannelPreview: S,
                    user: T,
                    channel: t,
                    generateReactionImage: L,
                    reactionImageAltText: I(n, T),
                    entry: n
                })
            })]
        })
    }