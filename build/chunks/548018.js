/** Chunk was on 4670 **/
/** chunk id: 548018, original params: e,t,i (module,exports,require) **/
i.d(t, {
    c: () => _,
    f: () => S
}), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(961350),
    a = i(670492),
    u = i(287809),
    o = i(780964),
    d = i(709913),
    T = i(32096),
    c = i(545214),
    A = i(985018);

function S() {
    return (0, l.bG)([u.default], () => {
        let e = u.default.getCurrentUser();
        return null != e && e.mfaEnabled
    })
}
let _ = (0, s.E2)(o.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function() {
        let e = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled()),
            t = [A.intl.string(A.t.m0FidJ), A.intl.string(A.t.xZEzbu)];
        return e ? t.push(A.intl.string(A.t["D+aE7g"])) : t.push(A.intl.string(A.t.cDgKte)), t
    },
    usePredicate: function() {
        let e = (0, T.b)(),
            t = (0, c.A)(),
            i = S();
        return !e && !t && i
    },
    Component: function() {
        let e = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
            t = (0, l.bG)([a.A], () => a.A.getBackupCodes()),
            i = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
        return null == e ? null : (0, n.jsx)(d.A, {
            backupCodes: t,
            currentUser: e,
            hasTOTPEnabled: i
        })
    }
})