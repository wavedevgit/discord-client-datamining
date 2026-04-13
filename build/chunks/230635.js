/** chunk id: 230635 params = (module,exports,require) **/
t.d(n, {
    W: () => E
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    r = t(397927),
    o = t(688810),
    s = t(601255),
    d = t(562819),
    c = t(713517),
    _ = t(919395),
    u = t(71393),
    p = t(287809),
    A = t(837921),
    g = t(84540),
    h = t(854627),
    m = t(930349),
    f = t(985018),
    I = t(987118);
let x = A.Ay.getEnableHardwareAcceleration() ? r.JsQ : r.euF;

function b(e) {
    let {
        user: n,
        guildId: t,
        avatarDecorationOverride: a,
        isEmpty: l,
        isHovered: o
    } = e, {
        avatarDecorationSrc: s,
        avatarSrc: d,
        avatarPlaceholderSrc: c,
        eventHandlers: _
    } = (0, h.A)({
        userId: n.id,
        guildId: t,
        size: r._3J.SIZE_56,
        showPending: !0,
        avatarDecorationOverride: a,
        animateOnHover: !o
    });
    return (0, i.jsx)(x, {
        className: l ? I.yT : void 0,
        src: o ? d : c,
        imageClassName: o ? I.WG : void 0,
        avatarDecoration: s,
        size: r._3J.SIZE_56,
        "aria-hidden": !0,
        ..._
    })
}

function v(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: r
    } = (0, o.Ay)(), p = (0, l.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), A = null != t, h = a.useRef(null), {
        isHoveringOrFocusing: I
    } = (0, c.A)(h), x = (0, _.a4)({
        user: n
    }), v = (0, _.a4)({
        user: n,
        guildId: t ?? void 0
    }), {
        pendingAvatarDecoration: E
    } = (0, _.CP)(t ?? void 0), y = (0, s.A)((0, _.lw)({
        userValue: x,
        guildValue: v,
        pendingValue: E,
        guildId: t
    })), j = void 0 !== E, T = () => (0, d.L)({
        analyticsLocations: r,
        guild: p ?? void 0,
        stackingBehavior: "stack"
    }), S = A && null != x, C = null != y && (j ? null != E : null != v) ? {
        onClick: () => (0, g.p)({
            guildId: t ?? void 0,
            avatarDecoration: null
        }),
        type: S ? "reset" : "remove",
        accessibleLabel: f.intl.string(S ? f.t.pJsnPf : f.t["2U4Bga"])
    } : void 0, N = (0, i.jsx)(b, {
        user: n,
        guildId: t,
        avatarDecorationOverride: j ? y : void 0,
        isEmpty: null == y,
        isHovered: null != y && I
    });
    return (0, i.jsx)("div", {
        ref: h,
        children: null == y ? (0, i.jsx)(m.kL, {
            variant: "square",
            onClick: T,
            accessibleLabel: f.intl.string(f.t.HykynS),
            children: N
        }) : (0, i.jsx)(m.NW, {
            variant: "square",
            onClick: T,
            accessibleLabel: f.intl.string(f.t.HykynS),
            deleteButtonConfig: C,
            children: N
        })
    })
}

function E(e) {
    let {
        guildId: n
    } = e, t = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(v, {
        user: t,
        guildId: n
    })
}