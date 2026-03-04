/** chunk id: 102277, original params: t,e,i (module,exports,require) **/
i.d(e, {
    v: () => A
});
var n = i(311907),
    l = i(419954),
    s = i(287809),
    a = i(780964),
    r = i(858526),
    u = i(32096),
    o = i(545214),
    d = i(985018);
let A = (0, l.E2)(a.X.ACCOUNT_ENABLE_MFA_SETTING, {
    useSearchTerms: () => [d.intl.string(d.t.m0FidJ)],
    usePredicate: function() {
        let t = (0, u.b)(),
            e = (0, o.A)();
        return (0, n.bG)([s.default], () => {
            let i = s.default.getCurrentUser();
            return null != i && !i.mfaEnabled && !t && !e
        })
    },
    Component: r.A
})