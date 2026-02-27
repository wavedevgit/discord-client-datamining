/** chunk id: 282224, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    m = n(985018);
let _ = {
        [l.l.REPORT_TO_MOD_BAN_USER]: () => u.default.komFTv,
        [l.l.REPORT_TO_MOD_KICK_USER]: () => u.default.FAJmJV,
        [l.l.REPORT_TO_MOD_TIMEOUT_USER]: () => u.default["90r/sR"]
    },
    A = {
        [l.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => u.default["4023i8"],
        [l.l.REPORT_TO_MOD_CLOSED_REPORT]: () => u.default.UE81zV
    };

function h(e) {
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

function f(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        author: r,
        mentions: u,
        type: A
    } = t, f = (0, s.Ay)(t), E = t.getChannelId(), g = (0, a.bG)([d.default], () => d.default.getUser(u[0]), [u]), p = (0, s.m2)(r, n), x = (0, o.P)({
        user: r,
        channelId: E,
        guildId: n.guild_id,
        messageId: t.id
    })(p), C = (0, s.d8)(g, n), I = (0, o.P)({
        user: g,
        channelId: E,
        guildId: n.guild_id,
        messageId: t.id
    })(C), T = _[A] ?? null;
    if (null == T) return null;
    let N = m.intl.format(T(), {
        actorName: f.nick,
        actorHook: x,
        targetName: C?.nick,
        targetHook: I
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(h, {
            type: A
        }),
        timestamp: t.timestamp,
        compact: l,
        children: N
    })
}

function E(e) {
    let {
        message: t,
        channel: n,
        compact: l
    } = e, {
        author: a,
        type: r
    } = t, d = (0, s.Ay)(t), u = t.getChannelId(), _ = (0, s.m2)(a, n), f = (0, o.P)({
        user: a,
        channelId: u,
        guildId: n.guild_id,
        messageId: t.id
    })(_), E = A[r] ?? null;
    if (null == E) return null;
    let g = m.intl.format(E(), {
        actorName: d.nick,
        actorHook: f
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(h, {
            type: r
        }),
        timestamp: t.timestamp,
        compact: l,
        children: g
    })
}

function g(e) {
    let {
        message: t,
        channel: n,
        compact: a
    } = e, {
        type: r
    } = t;
    return r === l.l.REPORT_TO_MOD_BAN_USER || r === l.l.REPORT_TO_MOD_KICK_USER || r === l.l.REPORT_TO_MOD_TIMEOUT_USER ? (0, i.jsx)(f, {
        message: t,
        channel: n,
        compact: a
    }) : (0, i.jsx)(E, {
        message: t,
        channel: n,
        compact: a
    })
}