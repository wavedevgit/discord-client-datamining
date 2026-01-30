/** chunk id: 909081, original params: e,t,i (module,exports,require) **/
i.d(t, {
    T: () => _
});
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(961350),
    a = i(670492),
    u = i(287809),
    o = i(780964),
    d = i(309198),
    T = i(548018),
    c = i(32096),
    A = i(545214),
    S = i(985018);
let _ = (0, s.E2)(o.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [S.intl.string(S.t.uHAJ5v)],
    usePredicate: function() {
        let e = (0, c.b)(),
            t = (0, A.A)(),
            i = (0, T.f)(),
            n = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
        return !e && !t && i && n
    },
    Component: function() {
        let e = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
            t = (0, l.bG)([a.A], () => a.A.togglingSMS);
        return null == e ? null : (0, n.jsx)(d.A, {
            currentUser: e,
            togglingSMS: t
        })
    }
})