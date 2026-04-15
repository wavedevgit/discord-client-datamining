/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    r = t(397927),
    s = t(688810),
    d = t(601255),
    o = t(562819),
    c = t(713517),
    u = t(919395),
    _ = t(71393),
    p = t(837921),
    A = t(84540),
    g = t(854627),
    f = t(930349),
    m = t(985018),
    h = t(987118);
let x = r._3J.SIZE_72,
    I = p.Ay.getEnableHardwareAcceleration() ? r.JsQ : r.euF;

function b(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: l,
        isHovered: r,
        disabled: s
    } = e, {
        avatarDecorationSrc: d,
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
        className: l ? h.yT : void 0,
        src: r ? o : c,
        imageClassName: r && !s ? h.WG : void 0,
        avatarDecoration: d,
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
    } = (0, s.Ay)(), g = (0, l.bG)([_.A], () => null != t ? _.A.getGuild(t) : null), h = null != t, x = a.useRef(null), {
        isHoveringOrFocusing: I
    } = (0, c.A)(x), v = (0, u.a4)({
        user: n
    }), E = (0, u.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: j
    } = (0, u.CP)(t ?? void 0), y = (0, d.A)((0, u.lw)({
        userValue: v,
        guildValue: E,
        pendingValue: j,
        guildId: t
    })), T = void 0 !== j, N = () => (0, o.L)({
        analyticsLocations: p,
        guild: g ?? void 0,
        stackingBehavior: "stack"
    }), S = h && null != v, C = null != y && (T ? null != j : null != E) ? {
        onClick: () => (0, A.p)({
            guildId: t ?? void 0,
            avatarDecoration: null
        }),
        type: S ? "reset" : "remove",
        accessibleLabel: m.intl.string(S ? m.t.pJsnPf : m.t["2U4Bga"])
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
            onClick: N,
            accessibleLabel: m.intl.string(m.t.HykynS),
            disabled: r,
            children: R
        }) : (0, i.jsx)(f.NW, {
            variant: "square",
            onClick: N,
            accessibleLabel: m.intl.string(m.t.HykynS),
            deleteButtonConfig: C,
            disabled: r,
            children: R
        })
    })
}