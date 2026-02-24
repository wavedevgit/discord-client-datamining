/** chunk id: 180020, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    a = n(554146),
    l = n(397927),
    r = n(631670),
    o = n(688810),
    c = n(379848),
    d = n(259065),
    u = n(159001),
    _ = n(954571),
    m = n(927578),
    A = n(919395),
    g = n(128450),
    h = n(652215),
    x = n(49999),
    p = n(985018),
    E = n(241015),
    C = n(437008);

function T(e) {
    let {
        user: t,
        guildId: n,
        className: T
    } = e, S = m.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: I
    } = (0, o.Ay)(), {
        userDisplayNameStyles: f,
        guildDisplayNameStyles: N,
        pendingDisplayNameStyles: b,
        pendingErrors: j
    } = (0, A.B0)(t, n), [v, O] = (0, c.kn)([a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), R = v === a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, y = (0, s.useCallback)(() => {
        O(x.i.TAKE_ACTION), _.default.track(h.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.L)({
            analyticsLocations: I,
            guildId: n
        })
    }, [I, O, n]), P = (0, s.useCallback)(() => {
        (0, r.dM)(null), _.default.track(h.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), L = (0, s.useCallback)(() => {
        (0, u.mZ)(null)
    }, []), D = void 0 !== b || (null != n ? null != N : null != f);
    return (0, i.jsx)(g.A, {
        title: p.intl.string(E.default["86GtGH"]),
        titleIcon: R ? (0, i.jsx)(l.LpS, {
            text: p.intl.string(p.t.y2b7CA),
            className: C.A
        }) : void 0,
        className: T,
        showPremiumIcon: S,
        errors: j,
        children: (0, i.jsxs)("div", {
            className: C.N,
            children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: p.intl.string(E.default.vJqrIg),
                onClick: y
            }), null == n && D && (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(E.default.ymq8WQ),
                onClick: P
            }), null != n && null != (void 0 !== b ? b : N) && (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(E.default["j/KRxc"]),
                onClick: L
            })]
        })
    })
}