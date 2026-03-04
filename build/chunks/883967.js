/** chunk id: 883967, original params: t,e,i (module,exports,require) **/
i.d(e, {
    J: () => g
});
var n = i(934551),
    l = i(824552),
    s = i(419954),
    a = i(780964),
    r = i(358776),
    u = i(891912),
    o = i(993470),
    d = i(531525),
    A = i(985018);
let T = (0, s.zZ)(a.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [o.C],
        initialize: () => (l.A.fetch(), () => {
            u.iU.setState({
                searchQuery: ""
            })
        })
    }),
    S = (0, s.t_)(a.X.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => !(0, r.dk)("LegacyAuthorizedAppsPanel"),
        useTitle: () => A.intl.string(A.t["f6kk+r"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => []
    }),
    E = (0, s.t_)(a.X.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => (0, r.dk)("AuthorizedAppsPanel"),
        useTitle: () => A.intl.string(A.t["f6kk+r"]),
        hideInStreamerMode: !0,
        buildLayout: () => [T]
    }),
    g = (0, s.i4)(a.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["f6kk+r"]),
        getLegacySearchKey: () => (0, r.WJ)("AuthorizedAppsPanel") ? void 0 : d.H.AUTHORIZED_APPS,
        icon: n.AppsIcon,
        buildLayout: () => (0, r.WJ)("AuthorizedAppsPanel") ? [E] : [S]
    })