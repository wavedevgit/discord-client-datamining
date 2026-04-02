/** chunk id: 230635 params = (module,exports,require) **/
l.d(t, {
    W: () => y
});
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927),
    i = l(688810),
    o = l(601255),
    s = l(162232),
    u = l(562819),
    d = l(919395),
    c = l(71393),
    p = l(287809),
    m = l(84540),
    h = l(930349),
    x = l(985018);

function b(e) {
    let {
        user: t,
        guildId: l,
        avatarDecorationOverride: n
    } = e;
    return (0, a.jsx)(s.A, {
        user: t,
        guildId: l,
        avatarSize: r._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: n
    })
}

function f(e) {
    let {
        user: t,
        guildId: l
    } = e, {
        analyticsLocations: r
    } = (0, i.Ay)(), s = (0, n.bG)([c.A], () => null != l ? c.A.getGuild(l) : null), p = null != l, f = (0, d.a4)({
        user: t
    }), y = (0, d.a4)({
        user: t,
        guildId: l ?? void 0
    }), {
        pendingAvatarDecoration: g
    } = (0, d.CP)(l ?? void 0), v = (0, o.A)((0, d.lw)({
        userValue: f,
        guildValue: y,
        pendingValue: g,
        guildId: l
    })), E = void 0 !== g, _ = () => (0, u.L)({
        analyticsLocations: r,
        guild: s ?? void 0,
        stackingBehavior: "stack"
    });
    if (null == v) return (0, a.jsx)(h.k, {
        variant: "square",
        onClick: _,
        accessibleLabel: x.intl.string(x.t.HykynS),
        children: (0, a.jsx)(b, {
            user: t,
            guildId: l,
            avatarDecorationOverride: E ? v : void 0
        })
    });
    let C = p && null != f,
        j = (E ? null != g : null != y) ? {
            onClick: () => (0, m.p)({
                guildId: l ?? void 0,
                avatarDecoration: null
            }),
            type: C ? "reset" : "remove",
            accessibleLabel: x.intl.string(C ? x.t.GaEG4t : x.t["2A+piL"])
        } : void 0;
    return (0, a.jsx)(h.N, {
        variant: "square",
        onClick: _,
        accessibleLabel: x.intl.string(x.t.HykynS),
        deleteButtonConfig: j,
        children: (0, a.jsx)(b, {
            user: t,
            guildId: l,
            avatarDecorationOverride: E ? v : void 0
        })
    })
}

function y(e) {
    let {
        guildId: t
    } = e, l = (0, n.bG)([p.default], () => p.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(f, {
        user: l,
        guildId: t
    })
}