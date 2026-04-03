/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => I
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
    A = t(287809),
    _ = t(84540),
    p = t(930349),
    x = t(985018);

function g(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a
    } = e;
    return (0, i.jsx)(d.A, {
        user: n,
        guildId: t,
        avatarSize: l._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: a
    })
}

function m(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: l
    } = (0, s.Ay)(), d = (0, a.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), A = null != t, m = (0, c.a4)({
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
    })), h = void 0 !== f, v = () => (0, o.L)({
        analyticsLocations: l,
        guild: d ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == b) return (0, i.jsx)(p.k, {
        variant: "square",
        onClick: v,
        accessibleLabel: x.intl.string(x.t.HykynS),
        children: (0, i.jsx)(g, {
            user: n,
            guildId: t,
            avatarDecorationOverride: h ? b : void 0
        })
    });
    let j = A && null != m,
        C = (h ? null != f : null != I) ? {
            onClick: () => (0, _.p)({
                guildId: t ?? void 0,
                avatarDecoration: null
            }),
            type: j ? "reset" : "remove",
            accessibleLabel: x.intl.string(j ? x.t.GaEG4t : x.t["2A+piL"])
        } : void 0;
    return (0, i.jsx)(p.N, {
        variant: "square",
        onClick: v,
        accessibleLabel: x.intl.string(x.t.HykynS),
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
    } = e, t = (0, a.bG)([A.default], () => A.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(m, {
        user: t,
        guildId: n
    })
}