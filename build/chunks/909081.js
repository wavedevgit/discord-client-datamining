/** chunk id: 909081 params = (module,exports,require) **/
n.d(t, {
    T: () => A
});
var i = n(627968),
    s = n(311907),
    l = n(419954),
    a = n(961350),
    r = n(670492),
    o = n(287809),
    d = n(780964),
    c = n(612714),
    u = n(548018),
    _ = n(32096),
    m = n(545214),
    g = n(985018);
let A = (0, l.E2)(d.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.uHAJ5v)],
    usePredicate: function() {
        let e = (0, _.b)(),
            t = (0, m.A)(),
            n = (0, u.f)(),
            i = (0, s.bG)([a.default], () => a.default.hasTOTPEnabled());
        return !e && !t && n && i
    },
    Component: function() {
        let e = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            t = (0, s.bG)([r.A], () => r.A.togglingSMS);
        return null == e ? null : (0, i.jsx)(c.A, {
            currentUser: e,
            togglingSMS: t
        })
    }
})