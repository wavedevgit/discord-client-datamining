/** Chunk was on 4670 **/
/** chunk id: 883967, original params: e,t,i (module,exports,require) **/
i.d(t, {
    J: () => _
});
var n = i(934551),
    l = i(824552),
    s = i(419954),
    r = i(780964),
    a = i(358776),
    u = i(891912),
    o = i(993470),
    d = i(531525),
    T = i(985018);
let c = (0, s.zZ)(r.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [o.C],
        initialize: () => (l.A.fetch(), () => {
            u.iU.setState({
                searchQuery: ""
            })
        })
    }),
    A = (0, s.t_)(r.X.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyAuthorizedAppsPanel"),
        useTitle: () => T.intl.string(T.t["f6kk+r"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => []
    }),
    S = (0, s.t_)(r.X.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => (0, a.dk)("AuthorizedAppsPanel"),
        useTitle: () => T.intl.string(T.t["f6kk+r"]),
        hideInStreamerMode: !0,
        buildLayout: () => [c]
    }),
    _ = (0, s.i4)(r.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["f6kk+r"]),
        getLegacySearchKey: () => (0, a.WJ)("AuthorizedAppsPanel") ? void 0 : d.H.AUTHORIZED_APPS,
        icon: n.AppsIcon,
        buildLayout: () => (0, a.WJ)("AuthorizedAppsPanel") ? [S] : [A]
    })