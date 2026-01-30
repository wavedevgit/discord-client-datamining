/** chunk id: 953410, original params: e,t,i (module,exports,require) **/
i.d(t, {
    g: () => A
});
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(670492),
    a = i(780964),
    u = i(455611),
    o = i(548018),
    d = i(32096),
    T = i(545214),
    c = i(985018);
let A = (0, s.E2)(a.X.ACCOUNT_BACKUP_CODES_SETTING, {
    useSearchTerms: () => [c.intl.string(c.t.m0FidJ), c.intl.string(c.t.xZEzbu)],
    usePredicate: function() {
        let e = (0, d.b)(),
            t = (0, T.A)(),
            i = (0, o.f)(),
            n = (0, l.bG)([r.A], () => r.A.getBackupCodes().length > 0);
        return !e && !t && i && n
    },
    Component: function() {
        let e = (0, l.bG)([r.A], () => r.A.getBackupCodes());
        return (0, n.jsx)(u.A, {
            backupCodes: e
        })
    }
})