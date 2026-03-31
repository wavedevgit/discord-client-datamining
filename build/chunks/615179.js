/** chunk id: 615179 params = (module,exports,require) **/
n.d(t, {
    QN: () => T,
    Z_: () => E,
    ez: () => I
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
    A = n(985018);
let m = (e, t) => {
    let {
        joinRequest: n,
        joinRequestGuild: i
    } = (0, _.A)(t.id), s = (0, a.bG)([u.default], () => u.default.getUser(n?.userId)), A = (0, r.P)({
        user: s,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: e.id
    }), m = (0, a.bG)([d.Ay, c.default], () => d.Ay.isMember(i?.id, c.default.getId())), E = l.useCallback(() => {
        m && null != i && (0, o.uh)(i.id)
    }, [i, m]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: A,
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
    } = m(t, l), u = o?.user?.username, _ = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != _ ? A.intl.format(A.t["21R6Ch"], {
            username: u,
            usernameHook: c(),
            guildName: _,
            guildNameClick: d
        }) : A.intl.string(A.t["2VLV0d"])
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
    } = m(t, l), u = o?.user?.username, _ = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != _ ? A.intl.format(A.t["Bz/QC2"], {
            username: u,
            usernameHook: c(),
            guildName: _,
            guildNameClick: d
        }) : A.intl.string(A.t.FVF6qU)
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
    } = m(t, l), u = o?.user?.username, _ = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: null != u && null != _ ? A.intl.format(A.t.Kpkesg, {
            username: u,
            usernameHook: c(),
            guildName: _,
            guildNameClick: d
        }) : A.intl.string(A.t.BMlbE7)
    })
}