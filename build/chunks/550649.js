/** Chunk was on 28979 **/
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
    T = i(831562),
    d = i(927631),
    A = i(531525),
    S = i(985018);
let E = (0, s.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [T.l]
    }),
    g = (0, s.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
        buildLayout: () => [d.W]
    }),
    _ = (0, s.t_)(u.X.CONNECTIONS_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyConnectionsPanel"),
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => []
    }),
    c = (0, s.t_)(u.X.CONNECTIONS_PANEL, {
        usePredicate: () => (0, a.dk)("ConnectionsPanel"),
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [E, g]
    }),
    I = (0, s.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        getLegacySearchKey: () => (0, a.WJ)("ConnectionsPanel") ? void 0 : A.H.CONNECTIONS,
        icon: n.LinkIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: () => [l.M.NEW_CRUNCHYROLL_CONNECTION]
        },
        buildLayout: () => (0, a.WJ)("ConnectionsPanel") ? [c] : [_]
    })