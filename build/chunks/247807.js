/** Chunk was on web.js **/
/** chunk id: 247807, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(747238), n(812715), n(866193);
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(205327),
    o = n(311907),
    l = n(210528),
    c = n(287809),
    u = n(121090),
    d = n(403362),
    f = n(562153),
    p = n(583846),
    _ = n(405310),
    h = n(434200),
    m = n(176563),
    g = n(620708),
    E = n(506326),
    y = n(910692),
    b = n(18282),
    O = n(652215),
    v = n(272984),
    A = n(985018);

function I(e) {
    if (e === a.j.WEEK) return A.t.SjOZfm
}
let S = (e, t, n, r) => {
        let i = I(r),
            a = f.Ay.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
        return A.intl.formatToMarkdownString(i, {
            artist: s,
            userName: a
        }).replaceAll("*", "")
    },
    T = (e, t) => A.intl.formatToPlainString(A.t.Osmpr9, {
        username: t.username,
        artist: e.extra.artist.name
    }),
    C = e => {
        let {
            channel: t,
            entry: n,
            onReaction: a,
            onVoiceChannelPreview: f
        } = e, {
            parent_title: I,
            provider: C,
            image_url: N
        } = n.extra.media, w = n.extra.artist.name, R = (0, o.bG)([c.default], () => c.default.getUser(n.author_id)), {
            primaryColor: P,
            secondaryColor: D
        } = (0, m.A)(N), x = (0, p.TQ)(n), L = i.useCallback(() => {
            if (null == t || null == R || !(0, d.S1)(x, g.wE)) return;
            let e = S(n, t, R, x);
            return (0, _.Lu)({
                user: R,
                channel: t,
                mediaImageSrc: N,
                artist: w,
                description: e,
                colors: [P, D],
                badges: (0, _.KR)(n)
            })
        }, [N, w, t, n, P, x, D, R]), j = (0, h.A)(O.fg2.SPOTIFY);
        if (null == R || !(0, d.S1)(x, g.wE)) return null;
        let M = () => {
                let e = v.M0.ALBUM,
                    t = l.A.isProtocolRegistered() ? v.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id) : v.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
                window.open(t)
            },
            k = () => {
                let e = v.M0.ARTIST,
                    t = l.A.isProtocolRegistered() ? v.RQ.PLAYER_OPEN(e, n.extra.artist.external_id) : v.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t)
            };
        return (0, r.jsxs)(y.YN, {
            children: [(0, r.jsx)(y.BC, {
                onClickTitle: M,
                onClickSubtitle: k,
                onClickThumbnail: M,
                channel: t,
                entry: n,
                headerIcons: C === s.X.SPOTIFY ? (0, r.jsx)(b.A, {
                    onClick: j,
                    Icon: u.A,
                    "aria-label": A.intl.string(A.t["0ZB/XE"])
                }) : null,
                userDescription: A.t.CcVI1T,
                title: I,
                subtitle: w,
                badges: (0, r.jsx)(E.mG, {
                    location: E.N5.POPOUT,
                    children: g.$u.map((e, t) => (0, r.jsx)(e, {
                        entry: n
                    }, t))
                })
            }), (0, r.jsx)(y.Eh, {
                children: (0, r.jsx)(y.fD, {
                    onReaction: a,
                    onVoiceChannelPreview: f,
                    user: R,
                    channel: t,
                    generateReactionImage: L,
                    reactionImageAltText: T(n, R),
                    entry: n
                })
            })]
        })
    }