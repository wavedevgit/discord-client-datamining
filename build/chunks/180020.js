/** chunk id: 180020 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(554146),
    r = n(397927),
    a = n(631670),
    o = n(688810),
    d = n(932001),
    c = n(259065),
    u = n(159001),
    _ = n(954571),
    m = n(927578),
    g = n(919395),
    A = n(128450),
    h = n(652215),
    x = n(49999),
    p = n(985018),
    T = n(241015),
    E = n(437008);

function C(e) {
    let {
        user: t,
        guildId: n,
        className: C
    } = e, S = m.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: f
    } = (0, o.Ay)(), {
        userDisplayNameStyles: N,
        guildDisplayNameStyles: b,
        pendingDisplayNameStyles: I,
        pendingErrors: v
    } = (0, g.B0)(t, n), [j, O] = (0, d.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), y = j === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, R = (0, s.useCallback)(() => {
        O(x.i.TAKE_ACTION), _.default.track(h.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, c.L)({
            analyticsLocations: f,
            guildId: n
        })
    }, [f, O, n]), P = (0, s.useCallback)(() => {
        (0, a.dM)(null), _.default.track(h.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), D = (0, s.useCallback)(() => {
        (0, u.mZ)(null)
    }, []), L = void 0 !== I || (null != n ? null != b : null != N);
    return (0, i.jsx)(A.A, {
        title: p.intl.string(T.default["86GtGH"]),
        titleIcon: y ? (0, i.jsx)(r.LpS, {
            text: p.intl.string(p.t.y2b7CA),
            className: E.A
        }) : void 0,
        className: C,
        showPremiumIcon: S,
        errors: v,
        children: (0, i.jsxs)("div", {
            className: E.N,
            children: [(0, i.jsx)(r.Button, {
                variant: "primary",
                size: "sm",
                text: p.intl.string(T.default.vJqrIg),
                onClick: R
            }), null == n && L && (0, i.jsx)(r.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(T.default.ymq8WQ),
                onClick: P
            }), null != n && null != (void 0 !== I ? I : b) && (0, i.jsx)(r.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(T.default["j/KRxc"]),
                onClick: D
            })]
        })
    })
}