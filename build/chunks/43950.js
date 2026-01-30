/** chunk id: 43950, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(90644),
    d = n(432166),
    p = n(104171),
    f = n(763758),
    m = n(287809),
    g = n(139675),
    y = n(486020),
    b = n(403362),
    _ = n(427262),
    A = n(6676);
let h = p.DN.SIZE_24;

function v(e) {
    var t, n;
    let {
        activity: l,
        user: i,
        embeddedApp: a,
        onOpenSpotifyAlbum: s
    } = e, d = null == l ? void 0 : l.assets, p = null == l ? void 0 : l.application_id;
    if (null == l || null == d || null == d.large_image && null == d.small_image)
        if (null == a) return null;
        else {
            let e, t;
            return e = y.Ay.getApplicationIconURL({
                id: a.application.id,
                icon: a.application.icon
            }), t = a.application.name, (0, r.jsx)(o.m, {
                text: t,
                position: "top",
                asContainer: !0,
                children: (0, r.jsx)("img", {
                    alt: t,
                    src: e,
                    className: A.P3
                })
            })
        } let f = null != (t = d.large_image) ? t : d.small_image,
        m = (0, u.A)(l),
        b = m ? A.RC : A.P3,
        _ = null != f ? (0, r.jsx)("img", {
            alt: null != (n = d.large_text) ? n : "",
            src: (0, g.uD)(p, f, [128, 128]),
            className: b
        }) : null;
    return m && null != s ? (_ = (0, r.jsx)(c.DUT, {
        className: A.vk,
        onClick: () => {
            s(l, i.id)
        },
        children: _
    }), (0, r.jsx)(o.m, {
        text: null != d.large_text ? d.large_text : null,
        position: "top",
        children: _
    })) : _
}

function O(e) {
    let {
        activity: t,
        embeddedApp: n,
        onOpenSpotifyTrack: l
    } = e, i = null == t ? void 0 : t.details, a = null == t ? void 0 : t.name, s = a;
    if (null != n) s = n.application.name;
    else {
        if (!(null != t && (0, u.A)(t)) || null == t.sync_id || null == i || null == l) return null;
        a = i, s = (0, r.jsx)(c.DUT, {
            className: A.wp,
            onClick: () => {
                l(t)
            },
            children: i
        })
    }
    return (0, r.jsx)(c.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: A.wx,
        children: s
    })
}

function S(e) {
    let {
        activity: t,
        user: n,
        onOpenSpotifyArtist: l
    } = e, i = null == t ? void 0 : t.details, s = null == t ? void 0 : t.state, o = i;
    return (null != t && (0, u.A)(t) && null != s && (o = [(0, r.jsx)(f.A, {
        artists: s,
        linkClassName: A.hw,
        canOpen: null != t.sync_id,
        onOpenSpotifyArtist: e => {
            null == l || l(t, n.id, e)
        }
    }, s)]), null == o || "" === o) ? null : (0, r.jsx)("div", {
        className: a()(A.Mo, A.Tf, A.p9),
        children: o
    })
}

function j(e) {
    let {
        activity: t
    } = e, n = null == t ? void 0 : t.state;
    return null == n || "" === n || (0, u.A)(t) ? null : (0, r.jsx)("div", {
        className: a()(A.Mo, A.Tf, A.p9, A.__invalid_activity),
        children: n
    })
}

function x(e) {
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
        className: A.Jq,
        themed: !0,
        singleLine: !0
    })
}

function I(e) {
    let {
        activity: t,
        embeddedApp: n,
        user: i,
        channel: a,
        sortedVoiceStates: c,
        onOpenSpotifyTrack: d,
        onOpenSpotifyArtist: f,
        onOpenSpotifyAlbum: g
    } = e, y = [];
    null != n ? y = Array.from(n.embeddedActivity.userIds) : (0, u.A)(t) && null != c && (y = c.map(e => e.user.id));
    let I = (0, s.yK)([m.default], () => y.map(e => m.default.getUser(e)).filter(b.Vq)),
        P = null != n || (0, u.A)(t),
        E = l.useMemo(() => {
            let e = new Map;
            return P && null != c && c.forEach(t => {
                let n = t.member;
                null != n && e.set(t.user.id, n)
            }), e
        }, [c, P]);
    return P ? (0, r.jsxs)("div", {
        className: A.ec,
        children: [(0, r.jsxs)("div", {
            className: A.Wh,
            children: [(0, r.jsx)(v, {
                activity: t,
                user: i,
                embeddedApp: n,
                onOpenSpotifyAlbum: g
            }), (0, r.jsxs)("div", {
                className: A.X0,
                children: [(0, r.jsx)(O, {
                    activity: t,
                    embeddedApp: n,
                    onOpenSpotifyTrack: d
                }), (0, r.jsx)(S, {
                    activity: t,
                    user: i,
                    onOpenSpotifyArtist: f
                }), (0, r.jsx)(j, {
                    activity: t
                }), y.length > 0 && (0, r.jsx)(p.Ay, {
                    className: A.TN,
                    guildId: a.guild_id,
                    users: I,
                    size: h,
                    max: 7,
                    renderUser: e => {
                        var t;
                        if (null == e || e === p.mt) return null;
                        let n = E.get(e.id),
                            l = null != (t = null == n ? void 0 : n.nick) ? t : _.Ay.getName(e);
                        return (0, r.jsx)(o.m, {
                            asContainer: !0,
                            text: l,
                            position: "bottom",
                            children: (0, r.jsx)("img", {
                                src: e.getAvatarURL(a.guild_id, h),
                                alt: l,
                                className: A.my
                            }, e.id)
                        }, e.id)
                    }
                })]
            })]
        }), (0, r.jsx)(x, {
            activity: t
        })]
    }) : null
}