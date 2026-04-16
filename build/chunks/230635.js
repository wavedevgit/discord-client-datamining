/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    r = t(397927),
    d = t(688810),
    s = t(601255),
    o = t(562819),
    c = t(713517),
    u = t(919395),
    _ = t(71393),
    p = t(837921),
    A = t(84540),
    g = t(854627),
    f = t(930349),
    h = t(985018),
    m = t(987118);
let x = r._3J.SIZE_72,
    I = p.Ay.getEnableHardwareAcceleration() ? r.JsQ : r.euF;

function b(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: l,
        isHovered: r,
        disabled: d
    } = e, {
        avatarDecorationSrc: s,
        avatarSrc: o,
        avatarPlaceholderSrc: c,
        eventHandlers: u
    } = (0, g.A)({
        userId: n.id,
        guildId: t,
        size: x,
        showPending: !0,
        avatarDecorationOverride: a,
        animateOnHover: !r
    });
    return (0, i.jsx)(I, {
        className: l ? m.yT : void 0,
        src: r ? o : c,
        imageClassName: r && !d ? m.WG : void 0,
        avatarDecoration: s,
        size: x,
        "aria-hidden": !0,
        ...u
    })
}

function v(e) {
    let {
        user: n,
        guildId: t,
        disabled: r
    } = e, {
        analyticsLocations: p
    } = (0, d.Ay)(), g = (0, l.bG)([_.A], () => null != t ? _.A.getGuild(t) : null), m = null != t, x = a.useRef(null), {
        isHoveringOrFocusing: I
    } = (0, c.A)(x), v = (0, u.a4)({
        user: n
    }), E = (0, u.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: j
    } = (0, u.CP)(t ?? void 0), y = (0, s.A)((0, u.lw)({
        userValue: v,
        guildValue: E,
        pendingValue: j,
        guildId: t
    })), T = void 0 !== j, S = () => (0, o.L)({
        analyticsLocations: p,
        guild: g ?? void 0,
        stackingBehavior: "stack"
    }), N = m && null != v, C = null != y && (T ? null != j : null != E) ? {
        onClick: () => (0, A.p)({
            guildId: t ?? void 0,
            avatarDecoration: null
        }),
        type: N ? "reset" : "remove",
        accessibleLabel: h.intl.string(N ? h.t.pJsnPf : h.t["2U4Bga"])
    } : void 0, R = (0, i.jsx)(b, {
        user: n,
        guildId: t,
        avatarDecorationOverride: T ? y : void 0,
        isEmpty: null == y,
        isHovered: null != y && I,
        disabled: r
    });
    return (0, i.jsx)("div", {
        ref: x,
        children: null == y ? (0, i.jsx)(f.kL, {
            variant: "square",
            onClick: S,
            accessibleLabel: h.intl.string(h.t.HykynS),
            disabled: r,
            children: R
        }) : (0, i.jsx)(f.NW, {
            variant: "square",
            onClick: S,
            accessibleLabel: h.intl.string(h.t.HykynS),
            deleteButtonConfig: C,
            disabled: r,
            children: R
        })
    })
}