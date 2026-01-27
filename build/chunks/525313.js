/** Chunk was on web.js **/
/** chunk id: 525313, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
}), n(747238), n(812715), n(866193), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(205327),
    o = n(311907),
    s = n(52133),
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
let L = (e, t, n) => {
    let {
        artist: r,
        media: i
    } = e, a = w.t["6iNxrl"], o = m.Ay.getName(t.guild_id, t.id, n);
    return w.intl.formatToMarkdownString(a, {
        artist: r,
        userName: o,
        media: i
    }).replaceAll("*", "")
};

function x(e) {
    let {
        activity: t
    } = e, n = t.timestamps, {
        now: a
    } = (0, T.e)(), {
        durationTimestamp: o,
        seekBarStyles: s
    } = i.useMemo(() => {
        var e;
        let {
            start: n,
            end: r
        } = null != (e = t.timestamps) ? e : {};
        if (null == n || null == r) return {};
        let i = Math.min(r, a),
            o = r - n,
            s = Math.floor(Math.max(i - n, 0) / o * 100);
        return {
            seekBarStyles: {
                width: "".concat(s, "%")
            },
            durationTimestamp: (0, E.W6)({
                start: 0
            }, o)
        }
    }, [t, a]);
    return null == s ? null : (0, r.jsxs)("div", {
        className: R.lu,
        children: [(0, r.jsx)(I.z, {
            entry: n
        }), (0, r.jsx)("div", {
            className: R.Lt,
            children: (0, r.jsx)("div", {
                className: R.Vp,
                style: s
            })
        }), (0, r.jsx)(l.Text, {
            className: R.vE,
            variant: "text-xs/normal",
            tabularNumbers: !0,
            color: void 0,
            children: o
        })]
    })
}

function M(e) {
    var t;
    let n, m, I, {
            channel: T,
            entry: R,
            closePopout: M,
            onReaction: j,
            onVoiceChannelPreview: k
        } = e,
        {
            largeImage: U
        } = (0, g.nO)({
            entry: R
        }),
        {
            activity: G,
            currentEntry: F,
            artist: V,
            title: B,
            user: H
        } = (0, v.u7)(R),
        {
            primaryColor: Y,
            secondaryColor: W
        } = (0, O.A)(null == U ? void 0 : U.src),
        K = (0, b.A)(C.fg2.SPOTIFY),
        z = (0, o.bG)([u.A, _.default], () => (null == G ? void 0 : G.type) === C.$pd.LISTENING && null != H ? (0, f.A)(u.A, _.default, H, G) : void 0, [G, H], s.A),
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
                artist: V,
                description: L({
                    artist: V,
                    media: B
                }, T, H),
                colors: [Y, W],
                badges: (0, y.N)({
                    timestamp: n
                })
            })
        }, [G, V, T, R, null == U ? void 0 : U.src, Y, W, B, H]);
    if (null == G || null == F) return null;
    let Z = V,
        Q = [];
    if (F.media.provider === a.X.SPOTIFY) {
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
                artists: V,
                canOpen: null != G.sync_id,
                linkClassName: P.zA,
                onOpenSpotifyArtist: e
            }), (null == z ? void 0 : z.syncDisabled) === !1) {
            let e = () => {
                (0, p.A)(z, N.Qp.USER_ACTIVITY_SYNC), M()
            };
            Q.push((0, r.jsx)(l.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: w.intl.string(w.t.eU3inB),
                icon: l.J2m,
                onClick: e
            }, "listen-along"))
        }
    }
    let X = (0, r.jsx)(A.BC, {
        onClickThumbnail: I,
        channel: T,
        entry: R,
        headerIcons: F.media.provider === a.X.SPOTIFY ? (0, r.jsx)(S.A, {
            onClick: n,
            "aria-label": w.intl.string(w.t.rRffNz),
            Icon: h.A
        }) : null,
        userDescription: (0, E.JM)(R) ? w.t.Tzx5D2 : w.t.CcVI1T,
        title: B,
        onClickTitle: m,
        subtitle: Z,
        badges: null,
        children: (null == (t = G.timestamps) ? void 0 : t.start) != null && (0, r.jsx)(x, {
            activity: G
        })
    });
    return (0, r.jsxs)(A.YN, {
        children: [X, (0, r.jsx)(A.Eh, {
            children: (0, r.jsx)(A.fD, {
                onReaction: j,
                onVoiceChannelPreview: k,
                user: H,
                channel: T,
                generateReactionImage: q,
                reactionImageAltText: D(V, H),
                entry: R,
                buttons: Q
            })
        })]
    })
}