/** chunk id: 282224 params = (module,exports,require) **/
n.d(t, {
    A: () => f
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
let m = {
        [l.l.REPORT_TO_MOD_BAN_USER]: () => u.default.komFTv,
        [l.l.REPORT_TO_MOD_KICK_USER]: () => u.default.FAJmJV,
        [l.l.REPORT_TO_MOD_TIMEOUT_USER]: () => u.default["90r/sR"]
    },
    A = {
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

function I(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        author: r,
        mentions: u,
        type: A
    } = t, I = (0, s.Ay)(t), T = t.getChannelId(), f = (0, a.bG)([d.default], () => d.default.getUser(u[0]), [u]), C = (0, s.m2)(r, n), N = (0, o.P)({
        user: r,
        channelId: T,
        guildId: n.guild_id,
        messageId: t.id
    })(C), g = (0, s.d8)(f, n), h = (0, o.P)({
        user: f,
        channelId: T,
        guildId: n.guild_id,
        messageId: t.id
    })(g), p = m[A] ?? null;
    if (null == p) return null;
    let S = _.intl.format(p(), {
        actorName: I.nick,
        actorHook: N,
        targetName: g?.nick,
        targetHook: h
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(E, {
            type: A
        }),
        timestamp: t.timestamp,
        compact: l,
        children: S
    })
}

function T(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        author: a,
        type: r
    } = t, d = (0, s.Ay)(t), u = t.getChannelId(), m = (0, s.m2)(a, n), I = (0, o.P)({
        user: a,
        channelId: u,
        guildId: n.guild_id,
        messageId: t.id
    })(m), T = A[r] ?? null;
    if (null == T) return null;
    let f = _.intl.format(T(), {
        actorName: d.nick,
        actorHook: I
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(E, {
            type: r
        }),
        timestamp: t.timestamp,
        compact: l,
        children: f
    })
}

function f(e) {
    let {
        message: t,
        channel: n,
        compact: a
    } = e, {
        type: r
    } = t;
    return r === l.l.REPORT_TO_MOD_BAN_USER || r === l.l.REPORT_TO_MOD_KICK_USER || r === l.l.REPORT_TO_MOD_TIMEOUT_USER ? (0, i.jsx)(I, {
        message: t,
        channel: n,
        compact: a
    }) : (0, i.jsx)(T, {
        message: t,
        channel: n,
        compact: a
    })
}