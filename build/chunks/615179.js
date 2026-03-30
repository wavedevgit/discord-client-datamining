/** chunk id: 615179 params = (module,exports,require) **/
n.d(t, {
    QN: () => I,
    Z_: () => E,
    ez: () => T
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(447215),
    s = n(888675),
    o = n(976860),
    c = n(961350),
    d = n(696451),
    u = n(287809),
    _ = n(654265),
    m = n(985018);
let A = (e, t) => {
    let {
        joinRequest: n,
        joinRequestGuild: i
    } = (0, _.A)(t.id), s = (0, a.bG)([u.default], () => u.default.getUser(n?.userId)), m = (0, r.P)({
        user: s,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: e.id
    }), A = (0, a.bG)([d.Ay, c.default], () => d.Ay.isMember(i?.id, c.default.getId())), E = l.useCallback(() => {
        A && null != i && (0, o.uh)(i.id)
    }, [i, A]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: m,
        guildNameClick: E
    }
};

function E(e) {
    let {
        message: t,
        channel: l,
        compact: a
    } = e, {
        guild: r,
        joinRequest: o,
        usernameHook: c,
        guildNameClick: d
    } = A(t, l), u = o?.user?.username, _ = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != _ ? m.intl.format(m.t["21R6Ch"], {
            username: u,
            usernameHook: c(),
            guildName: _,
            guildNameClick: d
        }) : m.intl.string(m.t["2VLV0d"])
    })
}

function I(e) {
    let {
        message: t,
        channel: l,
        compact: a
    } = e, {
        guild: r,
        joinRequest: o,
        usernameHook: c,
        guildNameClick: d
    } = A(t, l), u = o?.user?.username, _ = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != _ ? m.intl.format(m.t["Bz/QC2"], {
            username: u,
            usernameHook: c(),
            guildName: _,
            guildNameClick: d
        }) : m.intl.string(m.t.FVF6qU)
    })
}

function T(e) {
    let {
        message: t,
        channel: l,
        compact: a
    } = e, {
        guild: r,
        joinRequest: o,
        usernameHook: c,
        guildNameClick: d
    } = A(t, l), u = o?.user?.username, _ = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != _ ? m.intl.format(m.t.Kpkesg, {
            username: u,
            usernameHook: c(),
            guildName: _,
            guildNameClick: d
        }) : m.intl.string(m.t.BMlbE7)
    })
}