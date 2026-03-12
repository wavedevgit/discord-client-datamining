/** chunk id: 402089 params = (module,exports,require) **/
n.d(t, {
    s: () => _
});
var i = n(627968),
    s = n(311907),
    l = n(419954),
    r = n(130771),
    a = n(287809),
    o = n(780964),
    d = n(457684),
    c = n(985018);
let u = (0, l.E2)(o.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [c.intl.string(c.t.ZKsIks), c.intl.string(c.t.jf5GGb), c.intl.string(c.t["8lQ2rR"])],
        Component: function() {
            let e = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
                {
                    teams: t,
                    loading: n
                } = (0, r.A)({
                    refreshOnDepChange: !0
                });
            return null == e ? null : (0, i.jsx)(d.A, {
                currentUser: e,
                userTeamsLoading: n,
                userTeams: t
            })
        }
    }),
    _ = (0, l.zZ)(o.X.ACCOUNT_REMOVAL_CATEGORY, {
        buildLayout: () => [u]
    })