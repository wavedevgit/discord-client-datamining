/** chunk id: 43950 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y,
    z: () => j
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(90644),
    u = n(432166),
    h = n(104171),
    A = n(763758),
    m = n(287809),
    _ = n(139675),
    p = n(486020),
    g = n(403362),
    f = n(427262),
    x = n(652215),
    E = n(985018),
    C = n(777741);
let I = h.DN.SIZE_24;

function N(e) {
    let {
        activity: t,
        user: n,
        embeddedApp: s,
        onOpenSpotifyAlbum: l,
        compact: r
    } = e, a = t?.assets, u = t?.application_id;
    if (null == t || null == a || null == a.large_image && null == a.small_image)
        if (null == s) return null;
        else {
            let e, t, n;
            return e = p.Ay.getApplicationIconURL({
                id: s.application.id,
                icon: s.application.icon
            }), t = s.application.name, n = r ? C.p_ : C.P3, (0, i.jsx)(o.m, {
                text: t,
                position: "top",
                asContainer: !0,
                children: (0, i.jsx)("img", {
                    alt: t,
                    src: e,
                    className: n
                })
            })
        } let h = a.large_image ?? a.small_image,
        A = (0, d.A)(t),
        m = r ? C.p_ : A ? C.RC : C.P3,
        g = null != h ? (0, i.jsx)("img", {
            alt: a.large_text ?? "",
            src: (0, _.uD)(u, h, [128, 128]),
            className: m
        }) : null;
    return A && null != l ? (g = (0, i.jsx)(c.DUT, {
        className: C.vk,
        onClick: () => {
            l(t, n.id)
        },
        children: g
    }), (0, i.jsx)(o.m, {
        text: null != a.large_text ? a.large_text : null,
        position: "top",
        children: g
    })) : g
}

function b(e) {
    let {
        activity: t,
        embeddedApp: n,
        onOpenSpotifyTrack: s,
        compact: l
    } = e, r = t?.details, a = t?.name, o = a;
    if (null != n) o = n.application.name;
    else {
        if (!(null != t && (0, d.A)(t)) || null == t.sync_id || null == r || null == s) return null;
        a = r, o = (0, i.jsx)(c.DUT, {
            className: C.wp,
            onClick: () => {
                s(t)
            },
            children: r
        })
    }
    return (0, i.jsx)(c.Heading, {
        variant: l ? "heading-sm/medium" : "heading-sm/semibold",
        color: "text-strong",
        className: C.wx,
        children: o
    })
}

function S(e) {
    let {
        activity: t,
        user: n,
        onOpenSpotifyArtist: s,
        muted: l
    } = e, a = t?.details, o = t?.state, c = a;
    return (null != t && (0, d.A)(t) && null != o && (c = [(0, i.jsx)(A.A, {
        artists: o,
        linkClassName: l ? C.QJ : C.hw,
        canOpen: null != t.sync_id,
        onOpenSpotifyArtist: e => {
            s?.(t, n.id, e)
        }
    }, o)]), null == c || "" === c) ? null : (0, i.jsx)("div", {
        className: r()(C.Mo, l ? C.JF : C.Tf, C.p9),
        children: c
    })
}

function T(e) {
    let {
        activity: t
    } = e, n = t?.state;
    return null == n || "" === n || (0, d.A)(t) ? null : (0, i.jsx)("div", {
        className: r()(C.Mo, C.Tf, C.p9, C.__invalid_activity),
        children: n
    })
}

function v(e) {
    let {
        activity: t
    } = e;
    if (null == t || !(0, d.A)(t)) return null;
    let {
        timestamps: n
    } = t;
    if (n?.start == null || n?.end == null) return null;
    let {
        start: s,
        end: l
    } = n;
    return (0, i.jsx)(u.A, {
        start: s,
        end: l,
        className: C.Jq,
        themed: !0,
        singleLine: !0
    })
}

function y(e) {
    let {
        activity: t,
        embeddedApp: n,
        user: l,
        channel: r,
        sortedVoiceStates: c,
        onOpenSpotifyTrack: u,
        onOpenSpotifyArtist: A,
        onOpenSpotifyAlbum: _
    } = e, p = [];
    null != n ? p = Array.from(n.embeddedActivity.userIds) : (0, d.A)(t) && null != c && (p = c.map(e => e.user.id));
    let x = (0, a.yK)([m.default], () => p.map(e => m.default.getUser(e)).filter(g.Vq)),
        E = null != n || (0, d.A)(t),
        y = s.useMemo(() => {
            let e = new Map;
            return E && null != c && c.forEach(t => {
                let n = t.member;
                null != n && e.set(t.user.id, n)
            }), e
        }, [c, E]);
    return E ? (0, i.jsxs)("div", {
        className: C.ec,
        children: [(0, i.jsxs)("div", {
            className: C.Wh,
            children: [(0, i.jsx)(N, {
                activity: t,
                user: l,
                embeddedApp: n,
                onOpenSpotifyAlbum: _
            }), (0, i.jsxs)("div", {
                className: C.X0,
                children: [(0, i.jsx)(b, {
                    activity: t,
                    embeddedApp: n,
                    onOpenSpotifyTrack: u
                }), (0, i.jsx)(S, {
                    activity: t,
                    user: l,
                    onOpenSpotifyArtist: A
                }), (0, i.jsx)(T, {
                    activity: t
                }), p.length > 0 && (0, i.jsx)(h.Ay, {
                    className: C.TN,
                    guildId: r.guild_id,
                    users: x,
                    size: I,
                    max: 7,
                    renderUser: e => {
                        if (null == e || e === h.mt) return null;
                        let t = y.get(e.id),
                            n = t?.nick ?? f.Ay.getName(e);
                        return (0, i.jsx)(o.m, {
                            asContainer: !0,
                            text: n,
                            position: "bottom",
                            children: (0, i.jsx)("img", {
                                src: e.getAvatarURL(r.guild_id, I),
                                alt: n,
                                className: C.my
                            }, e.id)
                        }, e.id)
                    }
                })]
            })]
        }), (0, i.jsx)(v, {
            activity: t
        })]
    }) : null
}

function j(e) {
    let {
        activity: t,
        embeddedApp: n,
        user: s,
        onOpenSpotifyTrack: l,
        onOpenSpotifyArtist: r,
        onOpenSpotifyAlbum: a
    } = e;
    if (!(null != n || (0, d.A)(t))) return null;
    let o = null,
        u = t?.type ?? null;
    return o = null != n ? u === x.$pd.WATCHING ? E.intl.string(E.t.xeqvTg) : E.intl.string(E.t.J4MQFX) : E.intl.string(E.t.ep6av7), (0, i.jsxs)("div", {
        className: C.ec,
        children: [null != o && (0, i.jsx)("div", {
            className: C.N1,
            children: (0, i.jsx)(c.Heading, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: o
            })
        }), (0, i.jsxs)("div", {
            className: C.Wh,
            children: [(0, i.jsx)(N, {
                activity: t,
                user: s,
                embeddedApp: n,
                onOpenSpotifyAlbum: a,
                compact: !0
            }), (0, i.jsxs)("div", {
                className: C.Be,
                children: [(0, i.jsx)(b, {
                    activity: t,
                    embeddedApp: n,
                    onOpenSpotifyTrack: l,
                    compact: !0
                }), (0, i.jsx)(S, {
                    activity: t,
                    user: s,
                    onOpenSpotifyArtist: r,
                    muted: !0
                }), (0, i.jsx)(T, {
                    activity: t
                })]
            })]
        }), (0, i.jsx)(v, {
            activity: t
        })]
    })
}