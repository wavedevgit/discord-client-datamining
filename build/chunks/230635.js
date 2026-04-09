/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => f
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
    m = t(174501);

function h(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: r
    } = e;
    return (0, i.jsx)(d.A, {
        className: r ? m.y : void 0,
        user: n,
        guildId: t,
        avatarSize: l._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: a
    })
}

function I(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: l
    } = (0, r.Ay)(), d = (0, a.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), _ = null != t, m = (0, c.a4)({
        user: n
    }), I = (0, c.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: f
    } = (0, c.CP)(t ?? void 0), x = (0, s.A)((0, c.lw)({
        userValue: m,
        guildValue: I,
        pendingValue: f,
        guildId: t
    })), v = void 0 !== f, b = () => (0, o.L)({
        analyticsLocations: l,
        guild: d ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == x) return (0, i.jsx)(A.kL, {
        variant: "square",
        onClick: b,
        accessibleLabel: g.intl.string(g.t.HykynS),
        children: (0, i.jsx)(h, {
            isEmpty: !0,
            user: n,
            guildId: t,
            avatarDecorationOverride: v ? x : void 0
        })
    });
    let E = _ && null != m,
        j = (v ? null != f : null != I) ? {
            onClick: () => (0, p.p)({
                guildId: t ?? void 0,
                avatarDecoration: null
            }),
            type: E ? "reset" : "remove",
            accessibleLabel: g.intl.string(E ? g.t.pJsnPf : g.t["2U4Bga"])
        } : void 0;
    return (0, i.jsx)(A.NW, {
        variant: "square",
        onClick: b,
        accessibleLabel: g.intl.string(g.t.HykynS),
        deleteButtonConfig: j,
        children: (0, i.jsx)(h, {
            user: n,
            guildId: t,
            avatarDecorationOverride: v ? x : void 0
        })
    })
}

function f(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(I, {
        user: t,
        guildId: n
    })
}