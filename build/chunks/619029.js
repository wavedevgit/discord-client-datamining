/** chunk id: 619029 params = (module,exports,require) **/
n.d(e, {
    A: () => R
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(793574),
    a = n(688810),
    o = n(206835),
    c = n(961350),
    d = n(696451),
    u = n(229527),
    E = n(81400),
    _ = n(340837),
    T = n(355097),
    A = n(985018);

function I(t) {
    let {
        guildId: e,
        analyticsLocations: n
    } = t, [l, s] = (0, E.j8)({
        guildId: e,
        analyticsLocations: n
    }), a = s ? A.intl.string(A.t["6ndMcq"]) : A.intl.string(A.t["0eiu6J"]), o = s ? A.intl.string(A.t.S09nw4) : A.intl.string(A.t.tEttXd);
    return (0, i.jsxs)(r.$Td, {
        color: r.Hv$.DANGER,
        children: [a, (0, i.jsx)(r.zr9, {
            onClick: l,
            children: o
        })]
    })
}

function N() {
    let t = (0, o.A)({
        scrollPosition: T._F.GUILD_TAG
    });
    return (0, i.jsxs)(r.$Td, {
        color: r.Hv$.DANGER,
        children: [A.intl.string(A.t.Zqlecb), (0, i.jsx)(r.zr9, {
            onClick: t,
            children: A.intl.string(A.t.SJehVW)
        })]
    })
}

function R(t) {
    let {
        analyticsLocations: e,
        ...n
    } = t, {
        analyticsLocations: r
    } = (0, a.Ay)(e, s.A.AUTOMOD_NAGBAR_NOTICE), o = (0, l.bG)([c.default, d.Ay], () => {
        if (null == n.guildId) return new Set;
        let t = c.default.getId();
        return (0, u.wj)(d.Ay.getMember(n.guildId, t))
    }, [n.guildId]);
    return o.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || o.has(_.D.AUTOMOD_QUARANTINED_BIO) ? (0, i.jsx)(I, {
        ...n,
        analyticsLocations: r
    }) : o.has(_.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, i.jsx)(N, {}) : (0, i.jsx)(I, {
        ...n,
        analyticsLocations: r
    })
}