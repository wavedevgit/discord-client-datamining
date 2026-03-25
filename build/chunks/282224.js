/** chunk id: 282224 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var a = n(448761),
    l = n(311907),
    r = n(397927),
    s = n(763754),
    o = n(447215),
    c = n(888675),
    d = n(287809),
    u = n(641131),
    _ = n(985018);
let m = {
        [a.l.REPORT_TO_MOD_BAN_USER]: () => u.default.komFTv,
        [a.l.REPORT_TO_MOD_KICK_USER]: () => u.default.FAJmJV,
        [a.l.REPORT_TO_MOD_TIMEOUT_USER]: () => u.default["90r/sR"]
    },
    A = {
        [a.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => u.default["4023i8"],
        [a.l.REPORT_TO_MOD_CLOSED_REPORT]: () => u.default.UE81zV
    };

function E(e) {
    let {
        type: t
    } = e, n = null;
    switch (t) {
        case a.l.REPORT_TO_MOD_BAN_USER:
            n = r.wI0;
            break;
        case a.l.REPORT_TO_MOD_KICK_USER:
            n = r.Nxw;
            break;
        case a.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = r.gQi;
            break;
        case a.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = r.ucK;
            break;
        case a.l.REPORT_TO_MOD_CLOSED_REPORT:
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
        compact: a
    } = e, {
        author: r,
        mentions: u,
        type: A
    } = t, I = (0, s.Ay)(t), T = t.getChannelId(), f = (0, l.bG)([d.default], () => d.default.getUser(u[0]), [u]), N = (0, s.m2)(r, n), g = (0, o.P)({
        user: r,
        channelId: T,
        guildId: n.guild_id,
        messageId: t.id
    })(N), C = (0, s.d8)(f, n), h = (0, o.P)({
        user: f,
        channelId: T,
        guildId: n.guild_id,
        messageId: t.id
    })(C), p = m[A] ?? null;
    if (null == p) return null;
    let x = _.intl.format(p(), {
        actorName: I.nick,
        actorHook: g,
        targetName: C?.nick,
        targetHook: h
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(E, {
            type: A
        }),
        timestamp: t.timestamp,
        compact: a,
        children: x
    })
}

function T(e) {
    let {
        message: t,
        channel: n,
        compact: a
    } = e, {
        author: l,
        type: r
    } = t, d = (0, s.Ay)(t), u = t.getChannelId(), m = (0, s.m2)(l, n), I = (0, o.P)({
        user: l,
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
        compact: a,
        children: f
    })
}

function f(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        type: r
    } = t;
    return r === a.l.REPORT_TO_MOD_BAN_USER || r === a.l.REPORT_TO_MOD_KICK_USER || r === a.l.REPORT_TO_MOD_TIMEOUT_USER ? (0, i.jsx)(I, {
        message: t,
        channel: n,
        compact: l
    }) : (0, i.jsx)(T, {
        message: t,
        channel: n,
        compact: l
    })
}