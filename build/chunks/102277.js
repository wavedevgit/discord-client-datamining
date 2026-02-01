/** chunk id: 102277, original params: t,e,i (module,exports,require) **/
i.d(e, {
    v: () => T
});
var n = i(311907),
    l = i(419954),
    s = i(287809),
    r = i(780964),
    u = i(858526),
    a = i(32096),
    o = i(545214),
    d = i(985018);
let T = (0, l.E2)(r.X.ACCOUNT_ENABLE_MFA_SETTING, {
    useSearchTerms: () => [d.intl.string(d.t.m0FidJ)],
    usePredicate: function() {
        let t = (0, a.b)(),
            e = (0, o.A)();
        return (0, n.bG)([s.default], () => {
            let i = s.default.getCurrentUser();
            return null != i && !i.mfaEnabled && !t && !e
        })
    },
    Component: u.A
})