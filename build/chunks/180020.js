/** chunk id: 180020 params = (module,exports,require) **/
n.d(t, {
    A: () => f
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
    g = n(919395),
    _ = n(128450),
    x = n(652215),
    A = n(49999),
    h = n(985018),
    p = n(927961),
    T = n(698551);

function f(e) {
    let {
        user: t,
        guildId: n,
        className: f
    } = e, S = m.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: E
    } = (0, r.Ay)(), {
        userDisplayNameStyles: b,
        guildDisplayNameStyles: C,
        pendingDisplayNameStyles: N,
        pendingErrors: v
    } = (0, g.B0)(t, n), [I, j] = (0, o.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), y = I === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, O = (0, s.useCallback)(() => {
        j(A.i.TAKE_ACTION), u.default.track(x.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.L)({
            analyticsLocations: E,
            guildId: n
        })
    }, [E, j, n]), R = (0, s.useCallback)(() => {
        (0, c.p)({
            displayNameStyles: null
        }), u.default.track(x.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), P = (0, s.useCallback)(() => {
        (0, c.p)({
            guildId: n,
            displayNameStyles: null
        })
    }, [n]), L = void 0 !== N || (null != n ? null != C : null != b);
    return (0, i.jsx)(_.A, {
        title: h.intl.string(p.default["86GtGH"]),
        titleIcon: y ? (0, i.jsx)(a.LpS, {
            text: h.intl.string(h.t.y2b7CA),
            className: T.A
        }) : void 0,
        className: f,
        showPremiumIcon: S,
        errors: v,
        children: (0, i.jsxs)("div", {
            className: T.N,
            children: [(0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: h.intl.string(p.default.vJqrIg),
                onClick: O
            }), null == n && L && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: h.intl.string(p.default.ymq8WQ),
                onClick: R
            }), null != n && null != (void 0 !== N ? N : C) && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: h.intl.string(p.default["j/KRxc"]),
                onClick: P
            })]
        })
    })
}