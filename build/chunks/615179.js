/** chunk id: 615179, original params: e,t,n (module,exports,require) **/
n.d(t, {
    QN: () => f,
    Z_: () => h,
    ez: () => E
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
    m = n(654265),
    _ = n(985018);
let A = (e, t) => {
    let {
        joinRequest: n,
        joinRequestGuild: i
    } = (0, m.A)(t.id), s = (0, a.bG)([u.default], () => u.default.getUser(n?.userId)), _ = (0, r.P)({
        user: s,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: e.id
    }), A = (0, a.bG)([d.Ay, c.default], () => d.Ay.isMember(i?.id, c.default.getId())), h = l.useCallback(() => {
        A && null != i && (0, o.uh)(i.id)
    }, [i, A]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: _,
        guildNameClick: h
    }
};

function h(e) {
    let {
        message: t,
        channel: l,
        compact: a
    } = e, {
        guild: r,
        joinRequest: o,
        usernameHook: c,
        guildNameClick: d
    } = A(t, l), u = o?.user?.username, m = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != m ? _.intl.format(_.t["21R6Ch"], {
            username: u,
            usernameHook: c(),
            guildName: m,
            guildNameClick: d
        }) : _.intl.string(_.t["2VLV0d"])
    })
}

function f(e) {
    let {
        message: t,
        channel: l,
        compact: a
    } = e, {
        guild: r,
        joinRequest: o,
        usernameHook: c,
        guildNameClick: d
    } = A(t, l), u = o?.user?.username, m = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != m ? _.intl.format(_.t["Bz/QC2"], {
            username: u,
            usernameHook: c(),
            guildName: m,
            guildNameClick: d
        }) : _.intl.string(_.t.FVF6qU)
    })
}

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
    } = A(t, l), u = o?.user?.username, m = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != m ? _.intl.format(_.t.Kpkesg, {
            username: u,
            usernameHook: c(),
            guildName: m,
            guildNameClick: d
        }) : _.intl.string(_.t.BMlbE7)
    })
}