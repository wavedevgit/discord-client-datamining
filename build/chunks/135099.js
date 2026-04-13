/** chunk id: 135099 params = (module,exports,require) **/
n.d(e, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(554146),
    c = n(397927),
    d = n(573648),
    u = n(793574),
    E = n(688810),
    _ = n(429913),
    T = n(826673),
    A = n(780964),
    I = n(858897),
    N = n(962173),
    R = n(362490),
    p = n(652215),
    O = n(49999),
    C = n(873494),
    h = n(985018),
    m = n(381703);
let g = 21552 == n.j ? t => {
    let {
        markAsDismissed: e,
        applicationName: n
    } = t, r = [p.fg2.LEAGUE_OF_LEGENDS, p.fg2.RIOT_GAMES], g = (0, a.bG)([N.A], () => N.A.getAccounts().find(t => r.includes(t.type))?.type), S = null != g ? d.A.get(g) : null, y = S?.replacedBy, M = (0, _.h)(y);
    n = n ?? M?.name;
    let {
        startAuthorization: P,
        canStartAuthorization: D,
        hasAlreadyLinked: x,
        fetched: U
    } = (0, R.RD)(M), {
        analyticsLocations: f
    } = (0, E.Ay)(u.A.NOTICE);
    return (l.useEffect(() => {
        x && U && ((0, T.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), e(O.i.INDIRECT_ACTION))
    }, [x, U, e]), null != M && D && U && !x) ? (0, i.jsxs)(c.$Td, {
        color: c.Hv$.WARNING,
        children: [(0, i.jsx)(c.PMB, {
            noticeType: p.kqX.RIOT_MIGRATION,
            onClick: () => {
                (0, T.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), e(O.i.USER_DISMISS)
            }
        }), (0, i.jsx)("img", {
            src: d.A.get(p.fg2.RIOT_GAMES).icon.whiteSVG,
            alt: h.intl.string(C.default["1S6oAo"]),
            className: s()(m.tV, m._R)
        }), h.intl.format(C.default.YnnXb6, {
            connectionName: S?.name,
            applicationName: n
        }), (0, i.jsx)(c.Z_L, {
            onClick: () => {
                (0, T.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), e(O.i.TAKE_ACTION), (0, I.openUserSettings)(A.X.CONNECTIONS_PANEL), setTimeout(() => P({
                    analyticsLocations: f
                }), 0)
            },
            className: m.HE,
            noticeType: p.kqX.RIOT_MIGRATION,
            children: h.intl.string(C.default.ZeOhh9)
        }), (0, i.jsx)(c.zr9, {
            onClick: () => {
                e(O.i.USER_DISMISS)
            },
            className: m.wX,
            children: h.intl.string(C.default["MVB/Ab"])
        })]
    }) : null
} : null