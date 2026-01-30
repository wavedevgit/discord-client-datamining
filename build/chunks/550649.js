/** chunk id: 550649, original params: e,t,i (module,exports,require) **/
i.d(t, {
    z: () => I
});
var n = i(934551),
    l = i(554146),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(75698),
    d = i(831562),
    T = i(927631),
    c = i(531525),
    A = i(985018);
let S = (0, s.zZ)(a.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [d.l]
    }),
    _ = (0, s.zZ)(a.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
        buildLayout: () => [T.W]
    }),
    E = (0, s.t_)(a.X.CONNECTIONS_PANEL, {
        usePredicate: () => !(0, u.dk)("LegacyConnectionsPanel"),
        useTitle: () => A.intl.string(A.t["3fe7U5"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => []
    }),
    g = (0, s.t_)(a.X.CONNECTIONS_PANEL, {
        usePredicate: () => (0, u.dk)("ConnectionsPanel"),
        useTitle: () => A.intl.string(A.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [S, _]
    }),
    I = (0, s.i4)(a.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["3fe7U5"]),
        getLegacySearchKey: () => (0, u.WJ)("ConnectionsPanel") ? void 0 : c.H.CONNECTIONS,
        icon: n.LinkIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: () => [l.M.NEW_CRUNCHYROLL_CONNECTION]
        },
        buildLayout: () => (0, u.WJ)("ConnectionsPanel") ? [g] : [E]
    })