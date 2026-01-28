/** Chunk was on 28979 **/
/** chunk id: 548018, original params: t,e,i (module,exports,require) **/
i.d(e, {
    c: () => g,
    f: () => E
}), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(961350),
    u = i(670492),
    a = i(287809),
    o = i(780964),
    T = i(709913),
    d = i(32096),
    A = i(545214),
    S = i(985018);

function E() {
    return (0, l.bG)([a.default], () => {
        let t = a.default.getCurrentUser();
        return null != t && t.mfaEnabled
    })
}
let g = (0, s.E2)(o.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function() {
        let t = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled()),
            e = [S.intl.string(S.t.m0FidJ), S.intl.string(S.t.xZEzbu)];
        return t ? e.push(S.intl.string(S.t["D+aE7g"])) : e.push(S.intl.string(S.t.cDgKte)), e
    },
    usePredicate: function() {
        let t = (0, d.b)(),
            e = (0, A.A)(),
            i = E();
        return !t && !e && i
    },
    Component: function() {
        let t = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
            e = (0, l.bG)([u.A], () => u.A.getBackupCodes()),
            i = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
        return null == t ? null : (0, n.jsx)(T.A, {
            backupCodes: e,
            currentUser: t,
            hasTOTPEnabled: i
        })
    }
})