/** chunk id: 135099 params = (module,exports,require) **/
n.d(e, {
    A: () => m
});
var i = n(627968),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    a = n(554146),
    o = n(397927),
    c = n(573648),
    d = n(793574),
    u = n(688810),
    E = n(429913),
    _ = n(826673),
    T = n(780964),
    A = n(858897),
    I = n(962173),
    N = n(362490),
    R = n(652215),
    p = n(49999),
    O = n(873494),
    h = n(985018),
    C = n(381703);
let m = 21552 == n.j ? t => {
    let {
        markAsDismissed: e,
        applicationName: n
    } = t, l = [R.fg2.LEAGUE_OF_LEGENDS, R.fg2.RIOT_GAMES], m = (0, s.bG)([I.A], () => I.A.getAccounts().find(t => l.includes(t.type))?.type), g = null != m ? c.A.get(m) : null, S = g?.replacedBy, y = (0, E.h)(S);
    n = n ?? y?.name;
    let {
        startAuthorization: M,
        canStartAuthorization: P
    } = (0, N.RD)(y), {
        analyticsLocations: x
    } = (0, u.Ay)(d.A.NOTICE);
    return null != y && P ? (0, i.jsxs)(o.$Td, {
        color: o.Hv$.WARNING,
        children: [(0, i.jsx)(o.PMB, {
            noticeType: R.kqX.RIOT_MIGRATION,
            onClick: () => {
                (0, _.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), e(p.i.USER_DISMISS)
            }
        }), (0, i.jsx)("img", {
            src: c.A.get(R.fg2.RIOT_GAMES).icon.whiteSVG,
            alt: h.intl.string(O.default["1S6oAo"]),
            className: r()(C.tV, C._R)
        }), h.intl.format(O.default.YnnXb6, {
            connectionName: g?.name,
            applicationName: n
        }), (0, i.jsx)(o.Z_L, {
            onClick: () => {
                e(p.i.TAKE_ACTION), (0, A.openUserSettings)(T.X.CONNECTIONS_PANEL), setTimeout(() => M({
                    analyticsLocations: x
                }), 0)
            },
            className: C.HE,
            noticeType: R.kqX.RIOT_MIGRATION,
            children: h.intl.string(O.default.ZeOhh9)
        }), (0, i.jsx)(o.zr9, {
            onClick: () => {
                e(p.i.USER_DISMISS)
            },
            className: C.wX,
            children: h.intl.string(O.default["MVB/Ab"])
        })]
    }) : null
} : null