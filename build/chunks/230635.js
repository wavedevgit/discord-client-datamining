/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => I
});
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    l = t(688810),
    r = t(601255),
    o = t(162232),
    d = t(562819),
    c = t(919395),
    u = t(71393),
    _ = t(287809),
    A = t(84540),
    x = t(930349),
    p = t(985018);

function g(e) {
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
    } = (0, l.Ay)(), o = (0, a.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), _ = null != t, m = (0, c.a4)({
        user: n
    }), I = (0, c.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: f
    } = (0, c.CP)(t ?? void 0), b = (0, r.A)((0, c.lw)({
        userValue: m,
        guildValue: I,
        pendingValue: f,
        guildId: t
    })), h = void 0 !== f, j = () => (0, d.L)({
        analyticsLocations: s,
        guild: o ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == b) return (0, i.jsx)(x.k, {
        variant: "square",
        onClick: j,
        accessibleLabel: p.intl.string(p.t.HykynS),
        children: (0, i.jsx)(g, {
            user: n,
            guildId: t,
            avatarDecorationOverride: h ? b : void 0
        })
    });
    let v = _ && null != m,
        C = (h ? null != f : null != I) ? {
            onClick: () => (0, A.p)({
                guildId: t ?? void 0,
                avatarDecoration: null
            }),
            type: v ? "reset" : "remove",
            accessibleLabel: p.intl.string(v ? p.t.GaEG4t : p.t["2A+piL"])
        } : void 0;
    return (0, i.jsx)(x.N, {
        variant: "square",
        onClick: j,
        accessibleLabel: p.intl.string(p.t.HykynS),
        deleteButtonConfig: C,
        children: (0, i.jsx)(g, {
            user: n,
            guildId: t,
            avatarDecorationOverride: h ? b : void 0
        })
    })
}

function I(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(m, {
        user: t,
        guildId: n
    })
}