/** Chunk was on 4670 **/
/** chunk id: 545214, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => d,
    k: () => T
});
var n = i(311907),
    l = i(419954),
    s = i(287809),
    r = i(780964),
    a = i(100817),
    u = i(32096),
    o = i(985018);

function d() {
    let e = (0, u.b)(),
        t = (0, n.bG)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null != e && !e.verified
        });
    return !e && t
}
let T = (0, l.E2)(r.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [o.intl.string(o.t.m0FidJ)],
    usePredicate: d,
    Component: a.A
})