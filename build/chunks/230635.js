/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => f
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    s = t(688810),
    r = t(601255),
    d = t(162232),
    o = t(562819),
    c = t(919395),
    u = t(71393),
    _ = t(287809),
    A = t(84540),
    x = t(930349),
    p = t(985018),
    g = t(987118);

function m(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: s
    } = e;
    return (0, i.jsx)(d.A, {
        className: s ? g.y : void 0,
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
    } = (0, s.Ay)(), d = (0, a.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), _ = null != t, g = (0, c.a4)({
        user: n
    }), I = (0, c.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: f
    } = (0, c.CP)(t ?? void 0), b = (0, r.A)((0, c.lw)({
        userValue: g,
        guildValue: I,
        pendingValue: f,
        guildId: t
    })), h = void 0 !== f, v = () => (0, o.L)({
        analyticsLocations: l,
        guild: d ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == b) return (0, i.jsx)(x.kL, {
        variant: "square",
        onClick: v,
        accessibleLabel: p.intl.string(p.t.HykynS),
        children: (0, i.jsx)(m, {
            isEmpty: !0,
            user: n,
            guildId: t,
            avatarDecorationOverride: h ? b : void 0
        })
    });
    let j = _ && null != g,
        C = (h ? null != f : null != I) ? {
            onClick: () => (0, A.p)({
                guildId: t ?? void 0,
                avatarDecoration: null
            }),
            type: j ? "reset" : "remove",
            accessibleLabel: p.intl.string(j ? p.t.pJsnPf : p.t["2U4Bga"])
        } : void 0;
    return (0, i.jsx)(x.NW, {
        variant: "square",
        onClick: v,
        accessibleLabel: p.intl.string(p.t.HykynS),
        deleteButtonConfig: C,
        children: (0, i.jsx)(m, {
            user: n,
            guildId: t,
            avatarDecorationOverride: h ? b : void 0
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