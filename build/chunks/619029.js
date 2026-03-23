/** chunk id: 619029 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => p
});
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(793574),
    a = n(688810),
    o = n(206835),
    c = n(961350),
    u = n(696451),
    d = n(229527),
    E = n(81400),
    _ = n(340837),
    T = n(355097),
    A = n(985018);

function I(t) {
    let {
        guildId: e,
        analyticsLocations: n
    } = t, [r, l] = (0, E.j8)({
        guildId: e,
        analyticsLocations: n
    }), a = l ? A.intl.string(A.t["6ndMcq"]) : A.intl.string(A.t["0eiu6J"]), o = l ? A.intl.string(A.t.S09nw4) : A.intl.string(A.t.tEttXd);
    return (0, i.jsxs)(s.$Td, {
        color: s.Hv$.DANGER,
        children: [a, (0, i.jsx)(s.zr9, {
            onClick: r,
            children: o
        })]
    })
}

function N() {
    let t = (0, o.A)({
        scrollPosition: T._F.GUILD_TAG
    });
    return (0, i.jsxs)(s.$Td, {
        color: s.Hv$.DANGER,
        children: [A.intl.string(A.t.Zqlecb), (0, i.jsx)(s.zr9, {
            onClick: t,
            children: A.intl.string(A.t.SJehVW)
        })]
    })
}

function p(t) {
    let {
        analyticsLocations: e,
        ...n
    } = t, {
        analyticsLocations: s
    } = (0, a.Ay)(e, l.A.AUTOMOD_NAGBAR_NOTICE), o = (0, r.bG)([c.default, u.Ay], () => {
        if (null == n.guildId) return new Set;
        let t = c.default.getId();
        return (0, d.wj)(u.Ay.getMember(n.guildId, t))
    }, [n.guildId]);
    return o.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || o.has(_.D.AUTOMOD_QUARANTINED_BIO) ? (0, i.jsx)(I, {
        ...n,
        analyticsLocations: s
    }) : o.has(_.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, i.jsx)(N, {}) : (0, i.jsx)(I, {
        ...n,
        analyticsLocations: s
    })
}