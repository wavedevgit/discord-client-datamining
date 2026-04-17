/** chunk id: 282224 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var r = n(448761),
    l = n(311907),
    s = n(397927),
    a = n(763754),
    o = n(447215),
    c = n(888675),
    u = n(287809),
    d = n(221314),
    _ = n(985018);
let A = {
        [r.l.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTv,
        [r.l.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJV,
        [r.l.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sR"]
    },
    E = {
        [r.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i8"],
        [r.l.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zV
    };

function m(e) {
    let {
        type: t
    } = e, n = null;
    switch (t) {
        case r.l.REPORT_TO_MOD_BAN_USER:
            n = s.wI0;
            break;
        case r.l.REPORT_TO_MOD_KICK_USER:
            n = s.Nxw;
            break;
        case r.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = s.gQi;
            break;
        case r.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = s.ucK;
            break;
        case r.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = s.Uzd
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
        compact: r
    } = e, {
        author: s,
        mentions: d,
        type: E
    } = t, I = (0, a.Ay)(t), T = t.getChannelId(), g = (0, l.bG)([u.default], () => u.default.getUser(d[0]), [d]), N = (0, a.m2)(s, n), f = (0, o.P)({
        user: s,
        channelId: T,
        guildId: n.guild_id,
        messageId: t.id
    })(N), C = (0, a.d8)(g, n), p = (0, o.P)({
        user: g,
        channelId: T,
        guildId: n.guild_id,
        messageId: t.id
    })(C), h = A[E] ?? null;
    if (null == h) return null;
    let S = _.intl.format(h(), {
        actorName: I.nick,
        actorHook: f,
        targetName: C?.nick,
        targetHook: p
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(m, {
            type: E
        }),
        timestamp: t.timestamp,
        compact: r,
        children: S
    })
}

function T(e) {
    let {
        message: t,
        channel: n,
        compact: r
    } = e, {
        author: l,
        type: s
    } = t, u = (0, a.Ay)(t), d = t.getChannelId(), A = (0, a.m2)(l, n), I = (0, o.P)({
        user: l,
        channelId: d,
        guildId: n.guild_id,
        messageId: t.id
    })(A), T = E[s] ?? null;
    if (null == T) return null;
    let g = _.intl.format(T(), {
        actorName: u.nick,
        actorHook: I
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(m, {
            type: s
        }),
        timestamp: t.timestamp,
        compact: r,
        children: g
    })
}

function g(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        type: s
    } = t;
    return s === r.l.REPORT_TO_MOD_BAN_USER || s === r.l.REPORT_TO_MOD_KICK_USER || s === r.l.REPORT_TO_MOD_TIMEOUT_USER ? (0, i.jsx)(I, {
        message: t,
        channel: n,
        compact: l
    }) : (0, i.jsx)(T, {
        message: t,
        channel: n,
        compact: l
    })
}