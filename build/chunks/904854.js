/** chunk id: 904854 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(21119),
    c = n(907459),
    d = n(287809),
    u = n(763754),
    _ = n(447215),
    m = n(888675),
    A = n(502197),
    E = n(985018),
    I = n(443300);

function T(e) {
    var t;
    let n, T, f, N, g, C, {
            message: p,
            channel: h,
            compact: x
        } = e,
        R = (0, A.K)(p),
        S = (0, r.yK)([d.default], () => p.call?.participants != null ? p.call.participants.map(e => d.default.getUser(e)).filter(e => null != e).filter(e => e.id !== p.author.id) : [], [p.author.id, p.call]),
        O = (0, r.bG)([o.A], () => o.A.getUserAffinitiesMap(), []),
        M = a.useMemo(() => (0, c.L)(S, O, "VoiceSession - participants"), [S, O]),
        D = (t = p.author, n = (0, _.P)({
            user: t,
            channelId: h.id,
            guildId: h.guild_id,
            messageId: p.id
        }), T = (0, _.P)({
            user: M[0],
            channelId: h.id,
            guildId: h.guild_id,
            messageId: p.id
        }), f = (0, _.P)({
            user: M[1],
            channelId: h.id,
            guildId: h.guild_id,
            messageId: p.id
        }), N = (0, u.Ay)(p), g = (0, u.d8)(M[0], h), C = (0, u.d8)(M[1], h), null == R ? E.intl.format(E.t["eX6e/3"], {
            username: N.nick,
            usernameHook: n(N)
        }) : E.intl.format(E.t.YUbgR8, {
            userCount: M.length + 1,
            username: N.nick,
            usernameHook: n(N),
            username2: g.nick,
            username2Hook: T(g),
            username3: C.nick,
            username3Hook: f(C),
            otherCount: M.length - 1,
            duration: R
        }));
    return (0, i.jsx)(m.A, {
        iconNode: (0, i.jsx)(l.HKD, {
            size: "md",
            color: s.LU0.colors.STATUS_POSITIVE
        }),
        iconContainerClassName: I.z,
        timestamp: p.timestamp,
        compact: x,
        children: D
    })
}