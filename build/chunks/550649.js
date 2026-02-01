/** chunk id: 550649, original params: t,e,i (module,exports,require) **/
i.d(e, {
    z: () => I
});
var n = i(934551),
    l = i(554146),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(358776),
    o = i(75698),
    d = i(831562),
    T = i(927631),
    A = i(531525),
    S = i(985018);
let c = (0, s.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [d.l]
    }),
    E = (0, s.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
        buildLayout: () => [T.W]
    }),
    g = (0, s.t_)(u.X.CONNECTIONS_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyConnectionsPanel"),
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => []
    }),
    _ = (0, s.t_)(u.X.CONNECTIONS_PANEL, {
        usePredicate: () => (0, a.dk)("ConnectionsPanel"),
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [c, E]
    }),
    I = (0, s.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        getLegacySearchKey: () => (0, a.WJ)("ConnectionsPanel") ? void 0 : A.H.CONNECTIONS,
        icon: n.LinkIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: () => [l.M.NEW_CRUNCHYROLL_CONNECTION]
        },
        buildLayout: () => (0, a.WJ)("ConnectionsPanel") ? [_] : [g]
    })