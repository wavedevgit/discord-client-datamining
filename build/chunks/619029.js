/** chunk id: 619029 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(793574),
    r = n(688810),
    o = n(206835),
    c = n(961350),
    d = n(696451),
    u = n(229527),
    h = n(81400),
    A = n(340837),
    _ = n(355097),
    m = n(985018);

function g(e) {
    let {
        guildId: t,
        analyticsLocations: n
    } = e, [l, a] = (0, h.j8)({
        guildId: t,
        analyticsLocations: n
    }), r = a ? m.intl.string(m.t["6ndMcq"]) : m.intl.string(m.t["0eiu6J"]), o = a ? m.intl.string(m.t.S09nw4) : m.intl.string(m.t.tEttXd);
    return (0, i.jsxs)(s.$Td, {
        color: s.Hv$.DANGER,
        children: [r, (0, i.jsx)(s.zr9, {
            onClick: l,
            children: o
        })]
    })
}

function p() {
    let e = (0, o.A)({
        scrollPosition: _._F.GUILD_TAG
    });
    return (0, i.jsxs)(s.$Td, {
        color: s.Hv$.DANGER,
        children: [m.intl.string(m.t.Zqlecb), (0, i.jsx)(s.zr9, {
            onClick: e,
            children: m.intl.string(m.t.SJehVW)
        })]
    })
}

function f(e) {
    let {
        analyticsLocations: t,
        ...n
    } = e, {
        analyticsLocations: s
    } = (0, r.Ay)(t, a.A.AUTOMOD_NAGBAR_NOTICE), o = (0, l.bG)([c.default, d.Ay], () => {
        if (null == n.guildId) return new Set;
        let e = c.default.getId();
        return (0, u.wj)(d.Ay.getMember(n.guildId, e))
    }, [n.guildId]);
    return o.has(A.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || o.has(A.D.AUTOMOD_QUARANTINED_BIO) ? (0, i.jsx)(g, {
        ...n,
        analyticsLocations: s
    }) : o.has(A.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, i.jsx)(p, {}) : (0, i.jsx)(g, {
        ...n,
        analyticsLocations: s
    })
}