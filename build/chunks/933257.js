/** chunk id: 933257 params = (module,exports,require) **/
n.d(t, {
    _: () => g,
    s: () => x
});
var i = n(627968),
    s = n(311907),
    l = n(419954),
    r = n(287809),
    a = n(780964),
    o = n(770252),
    d = n(417628),
    c = n(935781),
    u = n(516664),
    m = n(985018);
let g = (0, l.zZ)(a.X.ACCOUNT_REMOVAL_CATEGORY, {
        buildLayout: () => [u.m, c.N]
    }),
    _ = (0, l.E2)(a.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.ZKsIks), m.intl.string(m.t.jf5GGb), m.intl.string(m.t["8lQ2rR"])],
        Component: function() {
            let e = (0, s.bG)([r.default], () => r.default.getCurrentUser());
            return null == e ? null : (0, i.jsx)(o.A, {
                currentUser: e,
                handleDisableAccount: () => (0, d.c)(!1),
                handleDeleteAccount: () => (0, d.c)(!0)
            })
        }
    }),
    x = (0, l.zZ)(a.X.ACCOUNT_REMOVAL_CATEGORY, {
        buildLayout: () => [_]
    })