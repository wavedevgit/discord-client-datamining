/** Chunk was on web.js **/
/** chunk id: 180020, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(554146),
    s = n(397927),
    o = n(631670),
    l = n(688810),
    c = n(379848),
    u = n(259065),
    d = n(159001),
    f = n(954571),
    p = n(927578),
    _ = n(919395),
    h = n(128450),
    m = n(652215),
    g = n(49999),
    E = n(985018),
    y = n(927961),
    b = n(109046);

function O(e) {
    let {
        user: t,
        guildId: n,
        className: O
    } = e, v = p.Ay.canUsePremiumProfileCustomization(t), {
        analyticsLocations: A
    } = (0, l.Ay)(), {
        userDisplayNameStyles: I,
        guildDisplayNameStyles: S,
        pendingDisplayNameStyles: T,
        pendingErrors: C
    } = (0, _.B0)(t, n), [N, w] = (0, c.kn)([a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), R = N === a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, P = (0, i.useCallback)(() => {
        w(g.i.TAKE_ACTION), f.default.track(m.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, u.L)({
            analyticsLocations: A,
            guildId: n
        })
    }, [A, w, n]), D = (0, i.useCallback)(() => {
        (0, o.dM)(null), f.default.track(m.HAw.DISPLAY_NAME_STYLES_REMOVED)
    }, []), x = (0, i.useCallback)(() => {
        (0, d.mZ)(null)
    }, []), L = void 0 !== T || (null != n ? null != S : null != I), j = void 0 !== T ? T : S;
    return (0, r.jsx)(h.A, {
        title: E.intl.string(y.default["86GtGH"]),
        titleIcon: R ? (0, r.jsx)(s.LpS, {
            text: E.intl.string(E.t.y2b7CA),
            className: b.A
        }) : void 0,
        className: O,
        showPremiumIcon: v,
        errors: C,
        children: (0, r.jsxs)("div", {
            className: b.N,
            children: [(0, r.jsx)(s.Button, {
                variant: "primary",
                size: "sm",
                text: E.intl.string(y.default.vJqrIg),
                onClick: P
            }), null == n && L && (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: E.intl.string(y.default.ymq8WQ),
                onClick: D
            }), null != n && null != j && (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: E.intl.string(y.default["j/KRxc"]),
                onClick: x
            })]
        })
    })
}