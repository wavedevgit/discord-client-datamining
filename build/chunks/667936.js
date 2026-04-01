/** chunk id: 667936 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(302959),
    u = n(90644),
    h = n(592182),
    A = n(172710),
    _ = n(636585),
    m = n(95701),
    g = n(961350),
    p = n(287809),
    f = n(486020),
    x = n(427262),
    E = n(43950),
    I = n(463745);

function C(e) {
    let {
        guildId: t,
        member: n,
        className: l
    } = e, s = null != n.member ? (0, f.xT)(n.member) : null;
    return (0, i.jsx)(o.m, {
        __unsupportedReactNodeAsText: n.nick,
        position: "bottom",
        children: (0, i.jsx)(d.euF, {
            src: s ?? n.user.getAvatarURL(t, 16),
            size: d._3J.SIZE_16,
            className: a()(l, I.wE),
            "aria-label": n.nick ?? x.Ay.getName(n.user)
        })
    })
}

function N(e) {
    let {
        members: t,
        guildId: n
    } = e;
    return (0, i.jsx)(_.A, {
        className: I.S3,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) => (0, i.jsx)(C, {
            guildId: n,
            member: e,
            className: t
        }, l),
        renderMoreUsers: (e, t, n) => (0, i.jsx)("div", {
            className: a()(I.TO, t),
            children: e
        }, n)
    })
}
let T = e => {
    let {
        channel: t,
        presenceActivity: n,
        members: s,
        embeddedApp: a,
        onAction: o,
        enableUserHoverActivities: d
    } = e, _ = null != a, f = _ ? Array.from(a.embeddedActivity.userIds) : [], x = (0, r.bG)([p.default, g.default], () => _ ? p.default.getUser(f[0]) : null != s ? s.length <= 0 ? null : s.find(e => e.user.id !== g.default.getId())?.user ?? s[0].user : void 0), C = l.useCallback(() => {
        if (!d && null != s) return () => (0, i.jsx)(N, {
            guildId: t.guild_id,
            members: s
        })
    }, [d, s, t.guild_id])();
    if (null == x) return null;
    let T = _ || (0, u.A)(n),
        S = (0, m.gV)(t.type),
        b = d ? E.z : E.A;
    return (0, i.jsxs)("div", {
        className: d ? void 0 : I.Eb,
        children: [(0, i.jsx)("div", {
            className: d ? void 0 : I.Il,
            children: T ? (0, i.jsx)(b, {
                activity: n,
                embeddedApp: a,
                user: x,
                channel: t,
                sortedVoiceStates: s,
                onOpenSpotifyTrack: S ? A.Mp : void 0,
                onOpenSpotifyArtist: S ? A.mN : void 0,
                onOpenSpotifyAlbum: S ? A.QX : void 0
            }) : (0, i.jsx)(c.A, {
                type: c.M.VOICE_CHANNEL,
                activity: n,
                user: x,
                guildId: t.getGuildId(),
                channelId: t.id,
                renderHeaderAccessory: C,
                enableUserHoverActivities: d
            })
        }), (0, i.jsx)("div", {
            className: d ? void 0 : I.M4,
            children: (0, i.jsx)(h.A, {
                type: c.M.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: a?.embeddedActivity,
                user: x,
                guildId: t.getGuildId(),
                channelId: t.id,
                buttonVariant: "primary",
                onAction: o
            })
        })]
    })
}