/** chunk id: 904854 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(21119),
    c = n(907459),
    d = n(287809),
    u = n(763754),
    m = n(447215),
    _ = n(888675),
    A = n(502197),
    E = n(985018),
    f = n(443300);

function h(e) {
    var t;
    let n, h, g, p, x, C, {
            message: I,
            channel: T,
            compact: N
        } = e,
        S = (0, A.K)(I),
        R = (0, r.yK)([d.default], () => I.call?.participants != null ? I.call.participants.map(e => d.default.getUser(e)).filter(e => null != e).filter(e => e.id !== I.author.id) : [], [I.author.id, I.call]),
        v = (0, r.bG)([o.A], () => o.A.getUserAffinitiesMap(), []),
        O = l.useMemo(() => (0, c.L)(R, v, "VoiceSession - participants"), [R, v]),
        M = (t = I.author, n = (0, m.P)({
            user: t,
            channelId: T.id,
            guildId: T.guild_id,
            messageId: I.id
        }), h = (0, m.P)({
            user: O[0],
            channelId: T.id,
            guildId: T.guild_id,
            messageId: I.id
        }), g = (0, m.P)({
            user: O[1],
            channelId: T.id,
            guildId: T.guild_id,
            messageId: I.id
        }), p = (0, u.Ay)(I), x = (0, u.d8)(O[0], T), C = (0, u.d8)(O[1], T), null == S ? E.intl.format(E.t["eX6e/3"], {
            username: p.nick,
            usernameHook: n(p)
        }) : E.intl.format(E.t.YUbgR8, {
            userCount: O.length + 1,
            username: p.nick,
            usernameHook: n(p),
            username2: x.nick,
            username2Hook: h(x),
            username3: C.nick,
            username3Hook: g(C),
            otherCount: O.length - 1,
            duration: S
        }));
    return (0, i.jsx)(_.A, {
        iconNode: (0, i.jsx)(a.HKD, {
            size: "md",
            color: s.LU0.colors.STATUS_POSITIVE
        }),
        iconContainerClassName: f.z,
        timestamp: I.timestamp,
        compact: N,
        children: M
    })
}