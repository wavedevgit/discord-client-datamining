/** Chunk was on 97492 **/
/** chunk id: 667936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(311907),
    a = n(990078),
    o = n(397927),
    c = n(302959),
    u = n(90644),
    d = n(592182),
    p = n(172710),
    h = n(636585),
    f = n(95701),
    g = n(961350),
    m = n(287809),
    b = n(486020),
    A = n(427262),
    y = n(43950),
    _ = n(185186);

function O(e) {
    var t;
    let {
        guildId: n,
        member: l,
        className: s
    } = e, c = null != l.member ? (0, b.xT)(l.member) : null;
    return (0, r.jsx)(a.m, {
        __unsupportedReactNodeAsText: l.nick,
        position: "bottom",
        children: (0, r.jsx)(o.euF, {
            src: null != c ? c : l.user.getAvatarURL(n, 16),
            size: o._3J.SIZE_16,
            className: i()(s, _.wE),
            "aria-label": null != (t = l.nick) ? t : A.Ay.getName(l.user)
        })
    })
}

function j(e) {
    let {
        members: t,
        guildId: n
    } = e;
    return (0, r.jsx)(h.A, {
        className: _.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) => (0, r.jsx)(O, {
            guildId: n,
            member: e,
            className: t
        }, l),
        renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
            className: i()(_.TO, t),
            children: e
        }, n)
    })
}
let v = e => {
    let {
        channel: t,
        presenceActivity: n,
        members: l,
        embeddedApp: i,
        onAction: a
    } = e, o = null != i, h = o ? Array.from(i.embeddedActivity.userIds) : [], b = (0, s.bG)([m.default, g.default], () => {
        if (o) return m.default.getUser(h[0]);
        if (null != l) {
            var e, t;
            return l.length <= 0 ? null : null != (e = null == (t = l.find(e => e.user.id !== g.default.getId())) ? void 0 : t.user) ? e : l[0].user
        }
    });
    if (null == b) return null;
    let A = o || (0, u.A)(n),
        O = (0, f.gV)(t.type);
    return (0, r.jsxs)("div", {
        className: _.Eb,
        children: [(0, r.jsx)("div", {
            className: _.Il,
            children: A ? (0, r.jsx)(y.A, {
                activity: n,
                embeddedApp: i,
                user: b,
                channel: t,
                sortedVoiceStates: l,
                onOpenSpotifyTrack: O ? p.Mp : void 0,
                onOpenSpotifyArtist: O ? p.mN : void 0,
                onOpenSpotifyAlbum: O ? p.QX : void 0
            }) : (0, r.jsx)(c.A, {
                type: c.M.VOICE_CHANNEL,
                activity: n,
                user: b,
                guildId: t.getGuildId(),
                channelId: t.id,
                renderHeaderAccessory: null != l ? () => (0, r.jsx)(j, {
                    guildId: t.guild_id,
                    members: l
                }) : void 0
            })
        }), (0, r.jsx)("div", {
            className: _.M4,
            children: (0, r.jsx)(d.A, {
                type: c.M.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: null == i ? void 0 : i.embeddedActivity,
                user: b,
                guildId: t.getGuildId(),
                channelId: t.id,
                buttonVariant: "primary",
                onAction: a
            })
        })]
    })
}