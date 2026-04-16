/** chunk id: 135099 params = (module,exports,require) **/
n.d(e, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(554146),
    c = n(397927),
    d = n(736653),
    u = n(573648),
    E = n(793574),
    _ = n(688810),
    T = n(429913),
    A = n(826673),
    I = n(780964),
    N = n(858897),
    R = n(962173),
    p = n(362490),
    O = n(652215),
    C = n(49999),
    h = n(452832),
    m = n(985018),
    g = n(448759);
let S = 21552 == n.j ? t => {
    let {
        markAsDismissed: e,
        applicationName: n
    } = t, r = [O.fg2.LEAGUE_OF_LEGENDS, O.fg2.RIOT_GAMES], S = (0, a.bG)([R.A], () => R.A.getAccounts().find(t => r.includes(t.type))?.type), y = (0, d.Ay)(), M = null != S ? u.A.get(S) : null, P = M?.replacedBy, D = (0, T.h)(P);
    n = n ?? D?.name;
    let {
        startAuthorization: x,
        canStartAuthorization: U,
        hasAlreadyLinked: f,
        fetched: j
    } = (0, p.RD)(D), {
        analyticsLocations: k
    } = (0, _.Ay)(E.A.NOTICE);
    if (l.useEffect(() => {
            f && j && ((0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), e(C.i.INDIRECT_ACTION))
        }, [f, j, e]), null == D || !U || !j || f) return null;
    let L = u.A.get(O.fg2.RIOT_GAMES);
    return (0, i.jsxs)(c.$Td, {
        color: c.Hv$.WARNING,
        children: [(0, i.jsx)(c.PMB, {
            noticeType: O.kqX.RIOT_MIGRATION,
            onClick: () => {
                (0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), e(C.i.USER_DISMISS)
            }
        }), (0, i.jsx)("img", {
            src: "light" === y ? L?.icon.blackSVG : L?.icon.whiteSVG,
            alt: m.intl.string(h.default["1S6oAo"]),
            className: s()(g.tV, g._R)
        }), m.intl.format(h.default.YnnXb6, {
            connectionName: M?.name,
            applicationName: n
        }), (0, i.jsx)(c.Z_L, {
            onClick: () => {
                (0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), e(C.i.TAKE_ACTION), (0, N.openUserSettings)(I.X.CONNECTIONS_PANEL), setTimeout(() => x({
                    analyticsLocations: k
                }), 0)
            },
            className: g.HE,
            noticeType: O.kqX.RIOT_MIGRATION,
            children: m.intl.string(h.default.ZeOhh9)
        }), (0, i.jsx)(c.zr9, {
            onClick: () => {
                e(C.i.USER_DISMISS)
            },
            className: g.wX,
            children: m.intl.string(h.default["MVB/Ab"])
        })]
    })
} : null