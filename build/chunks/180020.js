/** Chunk was on 2827 **/
/** chunk id: 180020, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
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
    _ = n(954571),
    p = n(927578),
    m = n(919395),
    g = n(128450),
    A = n(652215),
    f = n(49999),
    b = n(985018),
    h = n(927961),
    E = n(109046);

function O(e) {
    let {
        user: t,
        guildId: n,
        className: O
    } = e, C = p.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: x
    } = (0, o.Ay)(), {
        userDisplayNameStyles: S,
        guildDisplayNameStyles: T,
        pendingDisplayNameStyles: I,
        pendingErrors: y
    } = (0, m.B0)(t, n), [N, j] = (0, c.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), v = N === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, P = (0, i.useCallback)(() => {
        j(f.i.TAKE_ACTION), _.default.track(A.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.L)({
            analyticsLocations: x,
            guildId: n
        })
    }, [x, j, n]), R = (0, i.useCallback)(() => {
        (0, a.dM)(null), _.default.track(A.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), D = (0, i.useCallback)(() => {
        (0, u.mZ)(null)
    }, []), L = void 0 !== I || (null != n ? null != T : null != S);
    return (0, r.jsx)(g.A, {
        title: b.intl.string(h.default["86GtGH"]),
        titleIcon: v ? (0, r.jsx)(s.LpS, {
            text: b.intl.string(b.t.y2b7CA),
            className: E.A
        }) : void 0,
        className: O,
        showPremiumIcon: C,
        errors: y,
        children: (0, r.jsxs)("div", {
            className: E.N,
            children: [(0, r.jsx)(s.Button, {
                variant: "primary",
                size: "sm",
                text: b.intl.string(h.default.vJqrIg),
                onClick: P
            }), null == n && L && (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: b.intl.string(h.default.ymq8WQ),
                onClick: R
            }), null != n && null != (void 0 !== I ? I : T) && (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: b.intl.string(h.default["j/KRxc"]),
                onClick: D
            })]
        })
    })
}