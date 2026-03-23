/** chunk id: 180020 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(554146),
    a = n(397927),
    r = n(688810),
    o = n(932001),
    d = n(259065),
    c = n(84540),
    u = n(954571),
    m = n(927578),
    _ = n(919395),
    g = n(128450),
    A = n(652215),
    x = n(49999),
    p = n(985018),
    h = n(927961),
    f = n(109046);

function T(e) {
    let {
        user: t,
        guildId: n,
        className: T
    } = e, E = m.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: S
    } = (0, r.Ay)(), {
        userDisplayNameStyles: b,
        guildDisplayNameStyles: C,
        pendingDisplayNameStyles: N,
        pendingErrors: v
    } = (0, _.B0)(t, n), [I, j] = (0, o.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), y = I === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, O = (0, s.useCallback)(() => {
        j(x.i.TAKE_ACTION), u.default.track(A.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.L)({
            analyticsLocations: S,
            guildId: n
        })
    }, [S, j, n]), R = (0, s.useCallback)(() => {
        (0, c.p)({
            displayNameStyles: null
        }), u.default.track(A.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), L = (0, s.useCallback)(() => {
        (0, c.p)({
            guildId: n,
            displayNameStyles: null
        })
    }, [n]), P = void 0 !== N || (null != n ? null != C : null != b);
    return (0, i.jsx)(g.A, {
        title: p.intl.string(h.default["86GtGH"]),
        titleIcon: y ? (0, i.jsx)(a.LpS, {
            text: p.intl.string(p.t.y2b7CA),
            className: f.A
        }) : void 0,
        className: T,
        showPremiumIcon: E,
        errors: v,
        children: (0, i.jsxs)("div", {
            className: f.N,
            children: [(0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: p.intl.string(h.default.vJqrIg),
                onClick: O
            }), null == n && P && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(h.default.ymq8WQ),
                onClick: R
            }), null != n && null != (void 0 !== N ? N : C) && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(h.default["j/KRxc"]),
                onClick: L
            })]
        })
    })
}