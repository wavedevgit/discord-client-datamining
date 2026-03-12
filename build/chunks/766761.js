/** chunk id: 766761 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(311907),
    s = n(754333),
    l = n(419954),
    r = n(287809),
    a = n(780964),
    o = n(119762),
    d = n(985018);
let c = (0, l.E2)(a.X.SESSIONS_OTHER_SESSIONS_SETTING, {
    Component: o.Af,
    useSearchTerms: () => [d.intl.string(d.t["+1h0k/"])],
    usePredicate: () => {
        let {
            otherSessions: e
        } = (0, s.r)(), t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
        return e.length > 0 || !t?.mfaEnabled
    }
})