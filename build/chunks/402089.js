/** chunk id: 402089, original params: e,t,i (module,exports,require) **/
i.d(t, {
    s: () => c
});
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(130771),
    a = i(287809),
    u = i(780964),
    o = i(457684),
    d = i(985018);
let T = (0, s.E2)(u.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [d.intl.string(d.t.ZKsIks), d.intl.string(d.t.jf5GGb), d.intl.string(d.t["8lQ2rR"])],
        Component: function() {
            let e = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
                {
                    teams: t,
                    loading: i
                } = (0, r.A)({
                    refreshOnDepChange: !0
                });
            return null == e ? null : (0, n.jsx)(o.A, {
                currentUser: e,
                userTeamsLoading: i,
                userTeams: t
            })
        }
    }),
    c = (0, s.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, {
        buildLayout: () => [T]
    })