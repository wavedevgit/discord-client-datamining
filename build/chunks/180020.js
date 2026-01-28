/** Chunk was on 5606 **/
/** chunk id: 180020, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(554146),
    s = n(397927),
    a = n(631670),
    o = n(688810),
    c = n(379848),
    d = n(259065),
    u = n(159001),
    p = n(954571),
    _ = n(927578),
    m = n(919395),
    g = n(128450),
    f = n(652215),
    b = n(49999),
    h = n(985018),
    A = n(927961),
    E = n(109046);

function x(e) {
    let {
        user: t,
        guildId: n,
        className: x
    } = e, O = _.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: C
    } = (0, o.Ay)(), {
        userDisplayNameStyles: y,
        guildDisplayNameStyles: j,
        pendingDisplayNameStyles: T,
        pendingErrors: v
    } = (0, m.B0)(t, n), [S, I] = (0, c.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), N = S === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, P = (0, i.useCallback)(() => {
        I(b.i.TAKE_ACTION), p.default.track(f.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.L)({
            analyticsLocations: C,
            guildId: n
        })
    }, [C, I, n]), R = (0, i.useCallback)(() => {
        (0, a.dM)(null), p.default.track(f.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), D = (0, i.useCallback)(() => {
        (0, u.mZ)(null)
    }, []), w = void 0 !== T || (null != n ? null != j : null != y);
    return (0, r.jsx)(g.A, {
        title: h.intl.string(A.default["86GtGH"]),
        titleIcon: N ? (0, r.jsx)(s.LpS, {
            text: h.intl.string(h.t.y2b7CA),
            className: E.A
        }) : void 0,
        className: x,
        showPremiumIcon: O,
        errors: v,
        children: (0, r.jsxs)("div", {
            className: E.N,
            children: [(0, r.jsx)(s.Button, {
                variant: "primary",
                size: "sm",
                text: h.intl.string(A.default.vJqrIg),
                onClick: P
            }), null == n && w && (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: h.intl.string(A.default.ymq8WQ),
                onClick: R
            }), null != n && null != (void 0 !== T ? T : j) && (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: h.intl.string(A.default["j/KRxc"]),
                onClick: D
            })]
        })
    })
}