/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => x
});
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(688810),
    o = t(601255),
    s = t(162232),
    d = t(562819),
    c = t(919395),
    _ = t(71393),
    u = t(287809),
    p = t(84540),
    A = t(930349),
    g = t(985018),
    m = t(174501);

function f(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: l
    } = e;
    return (0, i.jsx)(s.A, {
        className: l ? m.y : void 0,
        user: n,
        guildId: t,
        avatarSize: r._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: a
    })
}

function h(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: r
    } = (0, l.Ay)(), s = (0, a.bG)([_.A], () => null != t ? _.A.getGuild(t) : null), u = null != t, m = (0, c.a4)({
        user: n
    }), h = (0, c.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: x
    } = (0, c.CP)(t ?? void 0), I = (0, o.A)((0, c.lw)({
        userValue: m,
        guildValue: h,
        pendingValue: x,
        guildId: t
    })), b = void 0 !== x, v = () => (0, d.L)({
        analyticsLocations: r,
        guild: s ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == I) return (0, i.jsx)(A.kL, {
        variant: "square",
        onClick: v,
        accessibleLabel: g.intl.string(g.t.HykynS),
        children: (0, i.jsx)(f, {
            isEmpty: !0,
            user: n,
            guildId: t,
            avatarDecorationOverride: b ? I : void 0
        })
    });
    let E = u && null != m,
        j = (b ? null != x : null != h) ? {
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
        deleteButtonConfig: j,
        children: (0, i.jsx)(f, {
            user: n,
            guildId: t,
            avatarDecorationOverride: b ? I : void 0
        })
    })
}

function x(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([u.default], () => u.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(h, {
        user: t,
        guildId: n
    })
}