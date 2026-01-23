/** Chunk was on web.js **/
/** chunk id: 525313, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(747238), n(812715), n(866193), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(205327),
    s = n(311907),
    o = n(52133),
    l = n(397927),
    c = n(172710),
    u = n(655116),
    d = n(763758),
    f = n(286617),
    p = n(533207),
    _ = n(961350),
    h = n(121090),
    m = n(562153),
    g = n(939341),
    E = n(583846),
    y = n(405310),
    b = n(434200),
    O = n(176563),
    v = n(363670),
    A = n(910692),
    I = n(693879),
    S = n(18282),
    T = n(809854),
    C = n(652215),
    N = n(272984),
    w = n(985018),
    R = n(388277),
    P = n(187866);

function D(e, t) {
    return w.intl.formatToPlainString(w.t.h2yWWX, {
        username: t.username,
        activity: e
    })
}
let x = (e, t, n) => {
    let {
        artist: r,
        media: i
    } = e, a = w.t["6iNxrl"], s = m.Ay.getName(t.guild_id, t.id, n);
    return w.intl.formatToMarkdownString(a, {
        artist: r,
        userName: s,
        media: i
    }).replaceAll("*", "")
};

function L(e) {
    let {
        activity: t
    } = e, n = t.timestamps, {
        now: a
    } = (0, T.e)(), {
        durationTimestamp: s,
        seekBarStyles: o
    } = i.useMemo(() => {
        var e;
        let {
            start: n,
            end: r
        } = null != (e = t.timestamps) ? e : {};
        if (null == n || null == r) return {};
        let i = Math.min(r, a),
            s = r - n,
            o = Math.floor(Math.max(i - n, 0) / s * 100);
        return {
            seekBarStyles: {
                width: "".concat(o, "%")
            },
            durationTimestamp: (0, E.W6)({
                start: 0
            }, s)
        }
    }, [t, a]);
    return null == o ? null : (0, r.jsxs)("div", {
        className: R.lu,
        children: [(0, r.jsx)(I.z, {
            entry: n
        }), (0, r.jsx)("div", {
            className: R.Lt,
            children: (0, r.jsx)("div", {
                className: R.Vp,
                style: o
            })
        }), (0, r.jsx)(l.Text, {
            className: R.vE,
            variant: "text-xs/normal",
            tabularNumbers: !0,
            color: void 0,
            children: s
        })]
    })
}

function j(e) {
    var t;
    let n, m, I, {
            channel: T,
            entry: R,
            closePopout: j,
            onReaction: M,
            onVoiceChannelPreview: k
        } = e,
        {
            largeImage: U
        } = (0, g.nO)({
            entry: R
        }),
        {
            activity: G,
            currentEntry: V,
            artist: F,
            title: B,
            user: H
        } = (0, v.u7)(R),
        {
            primaryColor: Y,
            secondaryColor: W
        } = (0, O.A)(null == U ? void 0 : U.src),
        K = (0, b.A)(C.fg2.SPOTIFY),
        z = (0, s.bG)([u.A, _.default], () => (null == G ? void 0 : G.type) === C.$pd.LISTENING && null != H ? (0, f.A)(u.A, _.default, H, G) : void 0, [G, H], o.A),
        q = i.useCallback(() => {
            var e;
            if (null == T || null == H) return;
            let t = null == (e = G.timestamps) ? void 0 : e.start,
                n = (0, E.W6)(null != t ? {
                    start: t
                } : R, Date.now());
            return (0, y.Lu)({
                user: H,
                channel: T,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: F,
                description: x({
                    artist: F,
                    media: B
                }, T, H),
                colors: [Y, W],
                badges: (0, y.N)({
                    timestamp: n
                })
            })
        }, [G, F, T, R, null == U ? void 0 : U.src, Y, W, B, H]);
    if (null == G || null == V) return null;
    let Z = F,
        X = [];
    if (V.media.provider === a.X.SPOTIFY) {
        m = () => {
            (0, c.Mp)(G)
        }, I = () => {
            (0, c.QX)(G, H.id)
        }, n = () => {
            var e;
            null != (e = null == K ? void 0 : K()) || (0, c.Mp)(G)
        };
        let e = e => {
            (0, c.mN)(G, H.id, e)
        };
        if (Z = (0, r.jsx)(d.A, {
                artists: F,
                canOpen: null != G.sync_id,
                linkClassName: P.zA,
                onOpenSpotifyArtist: e
            }), (null == z ? void 0 : z.syncDisabled) === !1) {
            let e = () => {
                (0, p.A)(z, N.Qp.USER_ACTIVITY_SYNC), j()
            };
            X.push((0, r.jsx)(l.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: w.intl.string(w.t.eU3inB),
                icon: l.J2m,
                onClick: e
            }, "listen-along"))
        }
    }
    let Q = (0, r.jsx)(A.BC, {
        onClickThumbnail: I,
        channel: T,
        entry: R,
        headerIcons: V.media.provider === a.X.SPOTIFY ? (0, r.jsx)(S.A, {
            onClick: n,
            "aria-label": w.intl.string(w.t.rRffNz),
            Icon: h.A
        }) : null,
        userDescription: (0, E.JM)(R) ? w.t.Tzx5D2 : w.t.CcVI1T,
        title: B,
        onClickTitle: m,
        subtitle: Z,
        badges: null,
        children: (null == (t = G.timestamps) ? void 0 : t.start) != null && (0, r.jsx)(L, {
            activity: G
        })
    });
    return (0, r.jsxs)(A.YN, {
        children: [Q, (0, r.jsx)(A.Eh, {
            children: (0, r.jsx)(A.fD, {
                onReaction: M,
                onVoiceChannelPreview: k,
                user: H,
                channel: T,
                generateReactionImage: q,
                reactionImageAltText: D(F, H),
                entry: R,
                buttons: X
            })
        })]
    })
}