/** chunk id: 180020 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(554146),
    a = n(397927),
    r = n(631670),
    o = n(688810),
    d = n(932001),
    c = n(259065),
    u = n(159001),
    _ = n(954571),
    g = n(927578),
    A = n(919395),
    m = n(128450),
    h = n(652215),
    p = n(49999),
    x = n(985018),
    E = n(927961),
    T = n(109046);

function S(e) {
    let {
        user: t,
        guildId: n,
        className: S
    } = e, C = g.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: I
    } = (0, o.Ay)(), {
        userDisplayNameStyles: f,
        guildDisplayNameStyles: b,
        pendingDisplayNameStyles: N,
        pendingErrors: v
    } = (0, A.B0)(t, n), [O, j] = (0, d.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), R = O === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, y = (0, s.useCallback)(() => {
        j(p.i.TAKE_ACTION), _.default.track(h.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, c.L)({
            analyticsLocations: I,
            guildId: n
        })
    }, [I, j, n]), P = (0, s.useCallback)(() => {
        (0, r.dM)(null), _.default.track(h.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), L = (0, s.useCallback)(() => {
        (0, u.mZ)(null)
    }, []), D = void 0 !== N || (null != n ? null != b : null != f);
    return (0, i.jsx)(m.A, {
        title: x.intl.string(E.default["86GtGH"]),
        titleIcon: R ? (0, i.jsx)(a.LpS, {
            text: x.intl.string(x.t.y2b7CA),
            className: T.A
        }) : void 0,
        className: S,
        showPremiumIcon: C,
        errors: v,
        children: (0, i.jsxs)("div", {
            className: T.N,
            children: [(0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: x.intl.string(E.default.vJqrIg),
                onClick: y
            }), null == n && D && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(E.default.ymq8WQ),
                onClick: P
            }), null != n && null != (void 0 !== N ? N : b) && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(E.default["j/KRxc"]),
                onClick: L
            })]
        })
    })
}