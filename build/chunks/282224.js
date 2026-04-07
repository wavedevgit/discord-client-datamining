/** chunk id: 282224 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968);
n(64700);
var l = n(448761),
    a = n(311907),
    r = n(397927),
    s = n(763754),
    o = n(447215),
    c = n(888675),
    d = n(287809),
    u = n(641131),
    _ = n(985018);
let A = {
        [l.l.REPORT_TO_MOD_BAN_USER]: () => u.default.komFTv,
        [l.l.REPORT_TO_MOD_KICK_USER]: () => u.default.FAJmJV,
        [l.l.REPORT_TO_MOD_TIMEOUT_USER]: () => u.default["90r/sR"]
    },
    m = {
        [l.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => u.default["4023i8"],
        [l.l.REPORT_TO_MOD_CLOSED_REPORT]: () => u.default.UE81zV
    };

function E(e) {
    let {
        type: t
    } = e, n = null;
    switch (t) {
        case l.l.REPORT_TO_MOD_BAN_USER:
            n = r.wI0;
            break;
        case l.l.REPORT_TO_MOD_KICK_USER:
            n = r.Nxw;
            break;
        case l.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = r.gQi;
            break;
        case l.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = r.ucK;
            break;
        case l.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = r.Uzd
    }
    return null != n ? (0, i.jsx)(n, {
        size: "refresh_sm",
        color: "currentColor"
    }) : null
}

function T(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        author: r,
        mentions: u,
        type: m
    } = t, T = (0, s.Ay)(t), I = t.getChannelId(), N = (0, a.bG)([d.default], () => d.default.getUser(u[0]), [u]), g = (0, s.m2)(r, n), f = (0, o.P)({
        user: r,
        channelId: I,
        guildId: n.guild_id,
        messageId: t.id
    })(g), C = (0, s.d8)(N, n), h = (0, o.P)({
        user: N,
        channelId: I,
        guildId: n.guild_id,
        messageId: t.id
    })(C), p = A[m] ?? null;
    if (null == p) return null;
    let S = _.intl.format(p(), {
        actorName: T.nick,
        actorHook: f,
        targetName: C?.nick,
        targetHook: h
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(E, {
            type: m
        }),
        timestamp: t.timestamp,
        compact: l,
        children: S
    })
}

function I(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        author: a,
        type: r
    } = t, d = (0, s.Ay)(t), u = t.getChannelId(), A = (0, s.m2)(a, n), T = (0, o.P)({
        user: a,
        channelId: u,
        guildId: n.guild_id,
        messageId: t.id
    })(A), I = m[r] ?? null;
    if (null == I) return null;
    let N = _.intl.format(I(), {
        actorName: d.nick,
        actorHook: T
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(E, {
            type: r
        }),
        timestamp: t.timestamp,
        compact: l,
        children: N
    })
}

function N(e) {
    let {
        message: t,
        channel: n,
        compact: a
    } = e, {
        type: r
    } = t;
    return r === l.l.REPORT_TO_MOD_BAN_USER || r === l.l.REPORT_TO_MOD_KICK_USER || r === l.l.REPORT_TO_MOD_TIMEOUT_USER ? (0, i.jsx)(T, {
        message: t,
        channel: n,
        compact: a
    }) : (0, i.jsx)(I, {
        message: t,
        channel: n,
        compact: a
    })
}