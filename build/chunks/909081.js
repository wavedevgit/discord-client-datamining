/** chunk id: 909081, original params: t,e,i (module,exports,require) **/
i.d(e, {
    T: () => E
});
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(961350),
    u = i(670492),
    a = i(287809),
    o = i(780964),
    d = i(309198),
    T = i(548018),
    A = i(32096),
    S = i(545214),
    c = i(985018);
let E = (0, s.E2)(o.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [c.intl.string(c.t.uHAJ5v)],
    usePredicate: function() {
        let t = (0, A.b)(),
            e = (0, S.A)(),
            i = (0, T.f)(),
            n = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
        return !t && !e && i && n
    },
    Component: function() {
        let t = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
            e = (0, l.bG)([u.A], () => u.A.togglingSMS);
        return null == t ? null : (0, n.jsx)(d.A, {
            currentUser: t,
            togglingSMS: e
        })
    }
})