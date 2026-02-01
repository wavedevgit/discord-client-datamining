/** chunk id: 545214, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => d,
    k: () => T
});
var n = i(311907),
    l = i(419954),
    s = i(287809),
    r = i(780964),
    u = i(100817),
    a = i(32096),
    o = i(985018);

function d() {
    let t = (0, a.b)(),
        e = (0, n.bG)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && !t.verified
        });
    return !t && e
}
let T = (0, l.E2)(r.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [o.intl.string(o.t.m0FidJ)],
    usePredicate: d,
    Component: u.A
})