/** chunk id: 953410, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => S
});
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(670492),
    a = i(780964),
    u = i(455611),
    o = i(548018),
    d = i(32096),
    A = i(545214),
    T = i(985018);
let S = (0, s.E2)(a.X.ACCOUNT_BACKUP_CODES_SETTING, {
    useSearchTerms: () => [T.intl.string(T.t.m0FidJ), T.intl.string(T.t.xZEzbu)],
    usePredicate: function() {
        let t = (0, d.b)(),
            e = (0, A.A)(),
            i = (0, o.f)(),
            n = (0, l.bG)([r.A], () => r.A.getBackupCodes().length > 0);
        return !t && !e && i && n
    },
    Component: function() {
        let t = (0, l.bG)([r.A], () => r.A.getBackupCodes());
        return (0, n.jsx)(u.A, {
            backupCodes: t
        })
    }
})