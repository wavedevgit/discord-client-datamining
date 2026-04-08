/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => x
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(688810),
    s = t(601255),
    d = t(162232),
    o = t(562819),
    c = t(919395),
    u = t(71393),
    _ = t(287809),
    p = t(84540),
    A = t(930349),
    g = t(985018),
    I = t(987118);

function m(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: r
    } = e;
    return (0, i.jsx)(d.A, {
        className: r ? I.y : void 0,
        user: n,
        guildId: t,
        avatarSize: l._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: a
    })
}

function f(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: l
    } = (0, r.Ay)(), d = (0, a.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), _ = null != t, I = (0, c.a4)({
        user: n
    }), f = (0, c.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: x
    } = (0, c.CP)(t ?? void 0), h = (0, s.A)((0, c.lw)({
        userValue: I,
        guildValue: f,
        pendingValue: x,
        guildId: t
    })), v = void 0 !== x, E = () => (0, o.L)({
        analyticsLocations: l,
        guild: d ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == h) return (0, i.jsx)(A.kL, {
        variant: "square",
        onClick: E,
        accessibleLabel: g.intl.string(g.t.HykynS),
        children: (0, i.jsx)(m, {
            isEmpty: !0,
            user: n,
            guildId: t,
            avatarDecorationOverride: v ? h : void 0
        })
    });
    let b = _ && null != I,
        y = (v ? null != x : null != f) ? {
            onClick: () => (0, p.p)({
                guildId: t ?? void 0,
                avatarDecoration: null
            }),
            type: b ? "reset" : "remove",
            accessibleLabel: g.intl.string(b ? g.t.pJsnPf : g.t["2U4Bga"])
        } : void 0;
    return (0, i.jsx)(A.NW, {
        variant: "square",
        onClick: E,
        accessibleLabel: g.intl.string(g.t.HykynS),
        deleteButtonConfig: y,
        children: (0, i.jsx)(m, {
            user: n,
            guildId: t,
            avatarDecorationOverride: v ? h : void 0
        })
    })
}

function x(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(f, {
        user: t,
        guildId: n
    })
}