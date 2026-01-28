/** Chunk was on 28979 **/
/** chunk id: 953410, original params: t,e,i (module,exports,require) **/
i.d(e, {
    g: () => S
});
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(670492),
    u = i(780964),
    a = i(455611),
    o = i(548018),
    T = i(32096),
    d = i(545214),
    A = i(985018);
let S = (0, s.E2)(u.X.ACCOUNT_BACKUP_CODES_SETTING, {
    useSearchTerms: () => [A.intl.string(A.t.m0FidJ), A.intl.string(A.t.xZEzbu)],
    usePredicate: function() {
        let t = (0, T.b)(),
            e = (0, d.A)(),
            i = (0, o.f)(),
            n = (0, l.bG)([r.A], () => r.A.getBackupCodes().length > 0);
        return !t && !e && i && n
    },
    Component: function() {
        let t = (0, l.bG)([r.A], () => r.A.getBackupCodes());
        return (0, n.jsx)(a.A, {
            backupCodes: t
        })
    }
})