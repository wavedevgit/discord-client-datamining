/** Chunk was on 97492 **/
/** chunk id: 43950, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(90644),
    d = n(432166),
    p = n(104171),
    h = n(763758),
    f = n(287809),
    g = n(139675),
    m = n(486020),
    b = n(403362),
    A = n(427262),
    y = n(6676);
let _ = p.DN.SIZE_24;

function O(e) {
    var t, n;
    let {
        activity: l,
        user: i,
        embeddedApp: s,
        onOpenSpotifyAlbum: a
    } = e, d = null == l ? void 0 : l.assets, p = null == l ? void 0 : l.application_id;
    if (null == l || null == d || null == d.large_image && null == d.small_image)
        if (null == s) return null;
        else {
            let e, t;
            return e = m.Ay.getApplicationIconURL({
                id: s.application.id,
                icon: s.application.icon
            }), t = s.application.name, (0, r.jsx)(o.m, {
                text: t,
                position: "top",
                asContainer: !0,
                children: (0, r.jsx)("img", {
                    alt: t,
                    src: e,
                    className: y.P3
                })
            })
        } let h = null != (t = d.large_image) ? t : d.small_image,
        f = (0, u.A)(l),
        b = f ? y.RC : y.P3,
        A = null != h ? (0, r.jsx)("img", {
            alt: null != (n = d.large_text) ? n : "",
            src: (0, g.uD)(p, h, [128, 128]),
            className: b
        }) : null;
    return f && null != a ? (A = (0, r.jsx)(c.DUT, {
        className: y.vk,
        onClick: () => {
            a(l, i.id)
        },
        children: A
    }), (0, r.jsx)(o.m, {
        text: null != d.large_text ? d.large_text : null,
        position: "top",
        children: A
    })) : A
}

function j(e) {
    let {
        activity: t,
        embeddedApp: n,
        onOpenSpotifyTrack: l
    } = e, i = null == t ? void 0 : t.details, s = null == t ? void 0 : t.name, a = s;
    if (null != n) a = n.application.name;
    else {
        if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == i || null == l) return null;
        s = i, a = (0, r.jsx)(c.DUT, {
            className: y.wp,
            onClick: () => {
                l(t)
            },
            children: i
        })
    }
    return (0, r.jsx)(c.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: y.wx,
        children: a
    })
}

function v(e) {
    let {
        activity: t,
        user: n,
        onOpenSpotifyArtist: l
    } = e, i = null == t ? void 0 : t.details, a = null == t ? void 0 : t.state, o = i;
    return (null != t && (0, u.A)(t) && null != a && (o = [(0, r.jsx)(h.A, {
        artists: a,
        linkClassName: y.hw,
        canOpen: null != t.sync_id,
        onOpenSpotifyArtist: e => {
            null == l || l(t, n.id, e)
        }
    }, a)]), null == o || "" === o) ? null : (0, r.jsx)("div", {
        className: s()(y.Mo, y.Tf, y.p9),
        children: o
    })
}

function x(e) {
    let {
        activity: t
    } = e, n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, u.A)(t) ? null : (0, r.jsx)("div", {
        className: s()(y.Mo, y.Tf, y.p9, y.__invalid_activity),
        children: n
    })
}

function E(e) {
    let {
        activity: t
    } = e;
    if (null == t || !(0, u.A)(t)) return null;
    let {
        timestamps: n
    } = t;
    if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
    let {
        start: l,
        end: i
    } = n;
    return (0, r.jsx)(d.A, {
        start: l,
        end: i,
        className: y.Jq,
        themed: !0,
        singleLine: !0
    })
}

function C(e) {
    let {
        activity: t,
        embeddedApp: n,
        user: i,
        channel: s,
        sortedVoiceStates: c,
        onOpenSpotifyTrack: d,
        onOpenSpotifyArtist: h,
        onOpenSpotifyAlbum: g
    } = e, m = [];
    null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, u.A)(t) && null != c && (m = c.map(e => e.user.id));
    let C = (0, a.yK)([f.default], () => m.map(e => f.default.getUser(e)).filter(b.Vq)),
        S = null != n || (0, u.A)(t),
        I = l.useMemo(() => {
            let e = new Map;
            return S && null != c && c.forEach(t => {
                let n = t.member;
                null != n && e.set(t.user.id, n)
            }), e
        }, [c, S]);
    return S ? (0, r.jsxs)("div", {
        className: y.ec,
        children: [(0, r.jsxs)("div", {
            className: y.Wh,
            children: [(0, r.jsx)(O, {
                activity: t,
                user: i,
                embeddedApp: n,
                onOpenSpotifyAlbum: g
            }), (0, r.jsxs)("div", {
                className: y.X0,
                children: [(0, r.jsx)(j, {
                    activity: t,
                    embeddedApp: n,
                    onOpenSpotifyTrack: d
                }), (0, r.jsx)(v, {
                    activity: t,
                    user: i,
                    onOpenSpotifyArtist: h
                }), (0, r.jsx)(x, {
                    activity: t
                }), m.length > 0 && (0, r.jsx)(p.Ay, {
                    className: y.TN,
                    guildId: s.guild_id,
                    users: C,
                    size: _,
                    max: 7,
                    renderUser: e => {
                        var t;
                        if (null == e || e === p.mt) return null;
                        let n = I.get(e.id),
                            l = null != (t = null == n ? void 0 : n.nick) ? t : A.Ay.getName(e);
                        return (0, r.jsx)(o.m, {
                            asContainer: !0,
                            text: l,
                            position: "bottom",
                            children: (0, r.jsx)("img", {
                                src: e.getAvatarURL(s.guild_id, _),
                                alt: l,
                                className: y.my
                            }, e.id)
                        }, e.id)
                    }
                })]
            })]
        }), (0, r.jsx)(E, {
            activity: t
        })]
    }) : null
}