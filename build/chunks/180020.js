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
    } = e, f = m.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: C
    } = (0, o.Ay)(), {
        userDisplayNameStyles: b,
        guildDisplayNameStyles: N,
        pendingDisplayNameStyles: I,
        pendingErrors: v
    } = (0, g.B0)(t, n), [j, y] = (0, d.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), R = j === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, O = (0, s.useCallback)(() => {
        y(h.i.TAKE_ACTION), _.default.track(x.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, c.L)({
            analyticsLocations: C,
            guildId: n
        })
    }, [C, y, n]), D = (0, s.useCallback)(() => {
        (0, r.dM)(null), _.default.track(x.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), L = (0, s.useCallback)(() => {
        (0, u.mZ)(null)
    }, []), P = void 0 !== I || (null != n ? null != N : null != b);
    return (0, i.jsx)(A.A, {
        title: p.intl.string(T.default["86GtGH"]),
        titleIcon: R ? (0, i.jsx)(a.LpS, {
            text: p.intl.string(p.t.y2b7CA),
            className: E.A
        }) : void 0,
        className: S,
        showPremiumIcon: f,
        errors: v,
        children: (0, i.jsxs)("div", {
            className: E.N,
            children: [(0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: p.intl.string(T.default.vJqrIg),
                onClick: O
            }), null == n && P && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(T.default.ymq8WQ),
                onClick: D
            }), null != n && null != (void 0 !== I ? I : N) && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(T.default["j/KRxc"]),
                onClick: L
            })]
        })
    })
}