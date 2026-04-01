/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => g
});
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    r = t(688810),
    l = t(601255),
    o = t(162232),
    d = t(562819),
    c = t(919395),
    u = t(71393),
    _ = t(287809),
    p = t(84540),
    x = t(930349),
    A = t(985018);

function f(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a
    } = e;
    return (0, i.jsx)(o.A, {
        user: n,
        guildId: t,
        avatarSize: s._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: a
    })
}

function m(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: s
    } = (0, r.Ay)(), o = (0, a.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), _ = null != t, m = (0, c.a4)({
        user: n
    }), g = (0, c.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: I
    } = (0, c.CP)(t ?? void 0), h = (0, l.A)((0, c.lw)({
        userValue: m,
        guildValue: g,
        pendingValue: I,
        guildId: t
    })), b = void 0 !== I, j = () => (0, d.L)({
        analyticsLocations: s,
        guild: o ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == h) return (0, i.jsx)(x.k, {
        variant: "square",
        onClick: j,
        accessibleLabel: A.intl.string(A.t.HykynS),
        children: (0, i.jsx)(f, {
            user: n,
            guildId: t,
            avatarDecorationOverride: b ? h : void 0
        })
    });
    let v = _ && null != m,
        C = (b ? null != I : null != g) ? {
            onClick: () => (0, p.p)({
                guildId: t ?? void 0,
                avatarDecoration: null
            }),
            type: v ? "reset" : "remove",
            accessibleLabel: A.intl.string(v ? A.t.GaEG4t : A.t["2A+piL"])
        } : void 0;
    return (0, i.jsx)(x.N, {
        variant: "square",
        onClick: j,
        accessibleLabel: A.intl.string(A.t.HykynS),
        deleteButtonConfig: C,
        children: (0, i.jsx)(f, {
            user: n,
            guildId: t,
            avatarDecorationOverride: b ? h : void 0
        })
    })
}

function g(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(m, {
        user: t,
        guildId: n
    })
}