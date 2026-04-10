/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => f
});
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(688810),
    o = t(601255),
    d = t(162232),
    s = t(562819),
    c = t(919395),
    _ = t(71393),
    u = t(287809),
    p = t(84540),
    A = t(930349),
    g = t(985018),
    h = t(987118);

function m(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: l
    } = e;
    return (0, i.jsx)(d.A, {
        className: l ? h.y : void 0,
        user: n,
        guildId: t,
        avatarSize: r._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: a
    })
}

function I(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: r
    } = (0, l.Ay)(), d = (0, a.bG)([_.A], () => null != t ? _.A.getGuild(t) : null), u = null != t, h = (0, c.a4)({
        user: n
    }), I = (0, c.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: f
    } = (0, c.CP)(t ?? void 0), x = (0, o.A)((0, c.lw)({
        userValue: h,
        guildValue: I,
        pendingValue: f,
        guildId: t
    })), b = void 0 !== f, v = () => (0, s.L)({
        analyticsLocations: r,
        guild: d ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == x) return (0, i.jsx)(A.kL, {
        variant: "square",
        onClick: v,
        accessibleLabel: g.intl.string(g.t.HykynS),
        children: (0, i.jsx)(m, {
            isEmpty: !0,
            user: n,
            guildId: t,
            avatarDecorationOverride: b ? x : void 0
        })
    });
    let E = u && null != h,
        y = (b ? null != f : null != I) ? {
            onClick: () => (0, p.p)({
                guildId: t ?? void 0,
                avatarDecoration: null
            }),
            type: E ? "reset" : "remove",
            accessibleLabel: g.intl.string(E ? g.t.pJsnPf : g.t["2U4Bga"])
        } : void 0;
    return (0, i.jsx)(A.NW, {
        variant: "square",
        onClick: v,
        accessibleLabel: g.intl.string(g.t.HykynS),
        deleteButtonConfig: y,
        children: (0, i.jsx)(m, {
            user: n,
            guildId: t,
            avatarDecorationOverride: b ? x : void 0
        })
    })
}

function f(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([u.default], () => u.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(I, {
        user: t,
        guildId: n
    })
}