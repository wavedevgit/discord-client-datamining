/** chunk id: 953410 params = (module,exports,require) **/
n.d(t, {
    g: () => g
});
var i = n(627968),
    s = n(311907),
    l = n(419954),
    a = n(670492),
    r = n(780964),
    o = n(943207),
    d = n(548018),
    c = n(32096),
    u = n(545214),
    m = n(985018);
let g = (0, l.E2)(r.X.ACCOUNT_BACKUP_CODES_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.m0FidJ), m.intl.string(m.t.xZEzbu)],
    usePredicate: function() {
        let e = (0, c.b)(),
            t = (0, u.A)(),
            n = (0, d.f)(),
            i = (0, s.bG)([a.A], () => a.A.getBackupCodes().length > 0);
        return !e && !t && n && i
    },
    Component: function() {
        let e = (0, s.bG)([a.A], () => a.A.getBackupCodes());
        return (0, i.jsx)(o.A, {
            backupCodes: e
        })
    }
})