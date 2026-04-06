/** chunk id: 230635 params = (module,exports,require) **/
i.d(n, {
    W: () => f
});
var t = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(688810),
    r = i(601255),
    d = i(162232),
    o = i(562819),
    c = i(919395),
    u = i(71393),
    _ = i(287809),
    A = i(84540),
    p = i(930349),
    x = i(985018),
    g = i(987118);

function m(e) {
    let {
        user: n,
        guildId: i,
        avatarDecorationOverride: a,
        isEmpty: s
    } = e;
    return (0, t.jsx)(d.A, {
        className: s ? g.y : void 0,
        user: n,
        guildId: i,
        avatarSize: l._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: a
    })
}

function I(e) {
    let {
        user: n,
        guildId: i
    } = e, {
        analyticsLocations: l
    } = (0, s.Ay)(), d = (0, a.bG)([u.A], () => null != i ? u.A.getGuild(i) : null), _ = null != i, g = (0, c.a4)({
        user: n
    }), I = (0, c.a4)({
        user: n,
        guildId: i ?? void 0
    }), {
        pendingAvatarDecoration: f
    } = (0, c.CP)(i ?? void 0), b = (0, r.A)((0, c.lw)({
        userValue: g,
        guildValue: I,
        pendingValue: f,
        guildId: i
    })), h = void 0 !== f, v = () => (0, o.L)({
        analyticsLocations: l,
        guild: d ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == b) return (0, t.jsx)(p.k, {
        variant: "square",
        onClick: v,
        accessibleLabel: x.intl.string(x.t.HykynS),
        children: (0, t.jsx)(m, {
            isEmpty: !0,
            user: n,
            guildId: i,
            avatarDecorationOverride: h ? b : void 0
        })
    });
    let j = _ && null != g,
        C = (h ? null != f : null != I) ? {
            onClick: () => (0, A.p)({
                guildId: i ?? void 0,
                avatarDecoration: null
            }),
            type: j ? "reset" : "remove",
            accessibleLabel: x.intl.string(j ? x.t.pJsnPf : x.t["2U4Bga"])
        } : void 0;
    return (0, t.jsx)(p.N, {
        variant: "square",
        onClick: v,
        accessibleLabel: x.intl.string(x.t.HykynS),
        deleteButtonConfig: C,
        children: (0, t.jsx)(m, {
            user: n,
            guildId: i,
            avatarDecorationOverride: h ? b : void 0
        })
    })
}

function f(e) {
    let {
        guildId: n
    } = e, i = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return null == i ? null : (0, t.jsx)(I, {
        user: i,
        guildId: n
    })
}