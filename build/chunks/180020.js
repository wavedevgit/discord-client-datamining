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
    m = n(927578),
    g = n(919395),
    A = n(128450),
    x = n(652215),
    h = n(49999),
    p = n(985018),
    T = n(927961),
    E = n(109046);

function S(e) {
    let {
        user: t,
        guildId: n,
        className: S
    } = e, C = m.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: f
    } = (0, o.Ay)(), {
        userDisplayNameStyles: N,
        guildDisplayNameStyles: I,
        pendingDisplayNameStyles: b,
        pendingErrors: v
    } = (0, g.B0)(t, n), [j, y] = (0, d.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), O = j === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, R = (0, s.useCallback)(() => {
        y(h.i.TAKE_ACTION), _.default.track(x.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, c.L)({
            analyticsLocations: f,
            guildId: n
        })
    }, [f, y, n]), L = (0, s.useCallback)(() => {
        (0, r.dM)(null), _.default.track(x.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), D = (0, s.useCallback)(() => {
        (0, u.mZ)(null)
    }, []), P = void 0 !== b || (null != n ? null != I : null != N);
    return (0, i.jsx)(A.A, {
        title: p.intl.string(T.default["86GtGH"]),
        titleIcon: O ? (0, i.jsx)(a.LpS, {
            text: p.intl.string(p.t.y2b7CA),
            className: E.A
        }) : void 0,
        className: S,
        showPremiumIcon: C,
        errors: v,
        children: (0, i.jsxs)("div", {
            className: E.N,
            children: [(0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: p.intl.string(T.default.vJqrIg),
                onClick: R
            }), null == n && P && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(T.default.ymq8WQ),
                onClick: L
            }), null != n && null != (void 0 !== b ? b : I) && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(T.default["j/KRxc"]),
                onClick: D
            })]
        })
    })
}