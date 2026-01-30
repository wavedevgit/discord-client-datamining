/** Chunk was on 64935 **/
/** chunk id: 615179, original params: e,t,n (module,exports,require) **/
n.d(t, {
    QN: () => _,
    Z_: () => g,
    ez: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(447215),
    s = n(888675),
    o = n(976860),
    c = n(961350),
    u = n(696451),
    d = n(287809),
    p = n(654265),
    m = n(985018);
let f = (e, t) => {
    let {
        joinRequest: n,
        joinRequestGuild: r
    } = (0, p.A)(t.id), s = (0, l.bG)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)), m = (0, a.P)({
        user: s,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: e.id
    }), f = (0, l.bG)([u.Ay, c.default], () => u.Ay.isMember(null == r ? void 0 : r.id, c.default.getId())), g = i.useCallback(() => {
        f && null != r && (0, o.uh)(r.id)
    }, [r, f]);
    return {
        guild: r,
        joinRequest: n,
        usernameHook: m,
        guildNameClick: g
    }
};

function g(e) {
    var t;
    let {
        message: i,
        channel: l,
        compact: a
    } = e, {
        guild: o,
        joinRequest: c,
        usernameHook: u,
        guildNameClick: d
    } = f(i, l), p = null == c || null == (t = c.user) ? void 0 : t.username, g = null == o ? void 0 : o.name;
    return (0, r.jsx)(s.A, {
        icon: n(394803),
        timestamp: i.timestamp,
        compact: a,
        children: null != p && null != g ? m.intl.format(m.t["21R6Ch"], {
            username: p,
            usernameHook: u(),
            guildName: g,
            guildNameClick: d
        }) : m.intl.string(m.t["2VLV0d"])
    })
}

function _(e) {
    var t;
    let {
        message: i,
        channel: l,
        compact: a
    } = e, {
        guild: o,
        joinRequest: c,
        usernameHook: u,
        guildNameClick: d
    } = f(i, l), p = null == c || null == (t = c.user) ? void 0 : t.username, g = null == o ? void 0 : o.name;
    return (0, r.jsx)(s.A, {
        icon: n(884797),
        timestamp: i.timestamp,
        compact: a,
        children: null != p && null != g ? m.intl.format(m.t["Bz/QC2"], {
            username: p,
            usernameHook: u(),
            guildName: g,
            guildNameClick: d
        }) : m.intl.string(m.t.FVF6qU)
    })
}

function h(e) {
    var t;
    let {
        message: i,
        channel: l,
        compact: a
    } = e, {
        guild: o,
        joinRequest: c,
        usernameHook: u,
        guildNameClick: d
    } = f(i, l), p = null == c || null == (t = c.user) ? void 0 : t.username, g = null == o ? void 0 : o.name;
    return (0, r.jsx)(s.A, {
        icon: n(884797),
        timestamp: i.timestamp,
        compact: a,
        children: null != p && null != g ? m.intl.format(m.t.Kpkesg, {
            username: p,
            usernameHook: u(),
            guildName: g,
            guildNameClick: d
        }) : m.intl.string(m.t.BMlbE7)
    })
}