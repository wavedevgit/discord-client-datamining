/** Chunk was on 47995 **/
/** chunk id: 667936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    c = n(302959),
    u = n(90644),
    d = n(592182),
    p = n(172710),
    f = n(636585),
    m = n(95701),
    g = n(961350),
    y = n(287809),
    b = n(486020),
    _ = n(427262),
    A = n(43950),
    h = n(185186);

function v(e) {
    var t;
    let {
        guildId: n,
        member: l,
        className: a
    } = e, c = null != l.member ? (0, b.xT)(l.member) : null;
    return (0, r.jsx)(s.m, {
        __unsupportedReactNodeAsText: l.nick,
        position: "bottom",
        children: (0, r.jsx)(o.euF, {
            src: null != c ? c : l.user.getAvatarURL(n, 16),
            size: o._3J.SIZE_16,
            className: i()(a, h.wE),
            "aria-label": null != (t = l.nick) ? t : _.Ay.getName(l.user)
        })
    })
}

function O(e) {
    let {
        members: t,
        guildId: n
    } = e;
    return (0, r.jsx)(f.A, {
        className: h.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) => (0, r.jsx)(v, {
            guildId: n,
            member: e,
            className: t
        }, l),
        renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
            className: i()(h.TO, t),
            children: e
        }, n)
    })
}
let S = e => {
    let {
        channel: t,
        presenceActivity: n,
        members: l,
        embeddedApp: i,
        onAction: s
    } = e, o = null != i, f = o ? Array.from(i.embeddedActivity.userIds) : [], b = (0, a.bG)([y.default, g.default], () => {
        if (o) return y.default.getUser(f[0]);
        if (null != l) {
            var e, t;
            return l.length <= 0 ? null : null != (e = null == (t = l.find(e => e.user.id !== g.default.getId())) ? void 0 : t.user) ? e : l[0].user
        }
    });
    if (null == b) return null;
    let _ = o || (0, u.A)(n),
        v = (0, m.gV)(t.type);
    return (0, r.jsxs)("div", {
        className: h.Eb,
        children: [(0, r.jsx)("div", {
            className: h.Il,
            children: _ ? (0, r.jsx)(A.A, {
                activity: n,
                embeddedApp: i,
                user: b,
                channel: t,
                sortedVoiceStates: l,
                onOpenSpotifyTrack: v ? p.Mp : void 0,
                onOpenSpotifyArtist: v ? p.mN : void 0,
                onOpenSpotifyAlbum: v ? p.QX : void 0
            }) : (0, r.jsx)(c.A, {
                type: c.M.VOICE_CHANNEL,
                activity: n,
                user: b,
                guildId: t.getGuildId(),
                channelId: t.id,
                renderHeaderAccessory: null != l ? () => (0, r.jsx)(O, {
                    guildId: t.guild_id,
                    members: l
                }) : void 0
            })
        }), (0, r.jsx)("div", {
            className: h.M4,
            children: (0, r.jsx)(d.A, {
                type: c.M.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: null == i ? void 0 : i.embeddedActivity,
                user: b,
                guildId: t.getGuildId(),
                channelId: t.id,
                buttonVariant: "primary",
                onAction: s
            })
        })]
    })
}